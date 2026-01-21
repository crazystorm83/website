import { Constructor } from "../@types";
import { MonitorConfig, PerformanceMetric, PerformanceReport } from "./@types";

export class PerformanceMonitor {
    private static instances: WeakMap<object, object> = new WeakMap();
    private static globalMetrics: Map<string, PerformanceMetric> = new Map();

    static config: MonitorConfig = {
        enabled: true,
        threshold: 0,
        sampleRate: 1.0,
        maxHistorySize: 100,
        logToConsole: true,
        exclude: ['constructor', 'toString', 'valueOf']
    };
    /**
     * 전역 설정 변경
     */
    static configure(options: Partial<MonitorConfig>): void {
        this.config = { ...this.config, ...options }
    }

    static wrap<T extends Constructor>(klass: T): T;
    static wrap<T extends object>(instance: T): T;
    static wrap<T extends Constructor | object>(target: T): T {
        if (typeof target === 'function') {
            return this.wrapClass(target as Constructor) as T;
        } 
        return this.wrapInstance(target) as T;
    }

    /**
     * 클래스 래핑
     * @param klass - 클래스 객체
     * @returns - 래핑된 클래스 객체
     */
    private static wrapClass<T extends Constructor>(klass: T): T {
        if (!this.config.enabled) return klass;

        const monitor = this;

        return class extends klass {
            constructor(...args: any[]) {
                super(...args);
                return monitor.wrapInstance(this) as any;
            }
        }
    }

    /**
     * 인스턴스 래핑
     * @param instance - 인스턴스 객체
     * @returns - 래핑된 인스턴스 객체
     */
    private static wrapInstance<T extends object>(instance: T): T {
        if (!this.config.enabled) return instance;
        if (this.instances.has(instance)) return this.instances.get(instance) as T;

        const className = instance.constructor.name;
        const wrapped = new Proxy(instance, {
            get: (target: T, prop: string | symbol): any => {
                const value = (target as any)[prop];

                // 메서드가 아니거나 제외 목록에 있으면 원본 반환
                if (typeof value !== 'function' ||
                    typeof prop === 'symbol' ||
                    PerformanceMonitor.config.exclude.includes(prop as string) ||
                    prop.startsWith('_')
                ) {
                    return value;
                }

                // 메서드를 래핑
                return function (this: T, ...args: any[]): any {
                    // 샘플링
                    if (Math.random() > PerformanceMonitor.config.sampleRate) {
                        return value.apply(this, args);
                    }

                    const key = `${className}.${prop}`;
                    const start = performance.now();

                    try {
                        const result = value.apply(this, args);

                        // Promise 처리
                        if (result instanceof Promise) {
                            return result.finally(() => {
                                PerformanceMonitor.record(key, performance.now() - start);
                            });
                        }

                        PerformanceMonitor.record(key, performance.now() - start);

                        return result;
                    }
                    catch (error) {
                        PerformanceMonitor.record(key, performance.now() - start, true);
                        throw error;
                    }
                }
            }
        });

        this.instances.set(instance, wrapped);
        return wrapped;
    }

    private static record(key: string, duration: number, isError: boolean = false): void {
        if (duration < this.config.threshold) return;

        if (!this.globalMetrics.has(key)) {
            this.globalMetrics.set(key, {
                calls: 0,
                totalTime: 0,
                minTime: Infinity,
                maxTime: 0,
                errors: 0,
                history: []
            })
        }

        const metric = this.globalMetrics.get(key)!;
        metric.calls++;
        metric.totalTime += duration;
        metric.minTime = Math.min(metric.minTime, duration);
        metric.maxTime = Math.max(metric.maxTime, duration);
        if (isError) metric.errors++;
        
        if (metric.history.length >= this.config.maxHistorySize) {
            metric.history.shift();
        }

        metric.history.push({
            duration,
            timestamp: Date.now(),
            isError
        });
        
        // 콘솔 로깅
        if (this.config.logToConsole) {
            const emoji = isError ? '❌' :
                duration > 100 ? '🔴' :
                duration > 50 ? '🟡' : '⏱️';

            console.log(`${emoji} ${key} - ${duration.toFixed(2)}ms (${metric.calls} calls)`);
        }
    }

    static getReport(sortBy: keyof PerformanceReport= 'avgTime'): PerformanceReport[] {
        const report: PerformanceReport[] = [];

        this.globalMetrics.forEach((value, key) => {
            const sorted = [...value.history].map(entry => entry.duration).sort((a, b) => a - b);
            const percentile = (p:number): number => {
                const index = Math.floor(sorted.length * p);
                return sorted[index] ?? 0;
            }
            report.push({
                method: key,
                calls: value.calls,
                avgTime: parseFloat((value.totalTime / value.calls).toFixed(2)),
                minTime: parseFloat(value.minTime.toFixed(2)),
                maxTime: parseFloat(value.maxTime.toFixed(2)),
                p50: parseFloat(percentile(0.5).toFixed(2)),
                p95: parseFloat(percentile(0.95).toFixed(2)),
                p99: parseFloat(percentile(0.99).toFixed(2)),
                errorRate: parseFloat(((value.errors / value.calls) * 100).toFixed(2))
            });
        });

        return report.sort((a: any, b: any) => b[sortBy] - a[sortBy]);
    }

    /**
     * 특정 메서드의 상세 메트릭 조회
     */
    static getMethodMetric(methodKey: string): PerformanceMetric | undefined {
        return this.globalMetrics.get(methodKey);
    }

    /**
     * 가장 느린 메서드 조회
     */
    static getSlowest(limit: number = 10): PerformanceReport[] {
        return this.getReport('avgTime').slice(0, limit);
    }

    /**
     * 가장 많이 호출된 메서드 조회
     */
    static getMostCalled(limit: number = 10): PerformanceReport[] {
        return this.getReport('calls').slice(0, limit);
    }

    /**
     * 메트릭 초기화
     */
    static reset(): void {
        this.globalMetrics.clear();
    }

    static enable(): void {
        this.config.enabled = true;
    }

    static disable(): void {
        this.config.enabled = false;
    }

    static getConfig(): Readonly<MonitorConfig> {
        return { ...this.config };
    }
}
