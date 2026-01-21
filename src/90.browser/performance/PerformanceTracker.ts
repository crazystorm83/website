import { MonitorConfig, PerformanceMetric, PerformanceReport } from "./@types";

export class PerformanceTracker {
    private metrics = new Map<string, PerformanceMetric>();
    private config: MonitorConfig;

    constructor(config: Partial<MonitorConfig> = {}) {
        this.config = {
            enabled: true,
            threshold: 0,
            sampleRate: 1.0,
            maxHistorySize: 100,
            logToConsole: true,
            exclude: ['constructor', 'toString', 'valueOf'],
            ...config
        };
    }

    track<T extends object>(instance: T): T {
        if (!this.config.enabled) return instance;

        const className = instance.constructor.name;
        const methodNames = this.getAllMethodNames(Object.getPrototypeOf(instance));

        return new Proxy(instance, {
            get: (target: T, prop: string | symbol): any => {
                const value = (target as any)[prop];

                if (typeof value !== 'function' ||
                    typeof prop === 'symbol' || 
                    this.config.exclude.includes(String(prop)) ||
                    String(prop).startsWith('_')) {
                        return value;
                }

                return (...args: any[]): any => {
                    // 샘플링
                    if (Math.random() > this.config.sampleRate) {
                        return value.apply(target, args);
                    }

                    const key = `${className}.${String(prop)}`;
                    const start = performance.now();

                    try {
                        const result = value.apply(target, args);

                        if (result instanceof Promise) {
                            result.then((res) => {
                                this.record(key, performance.now() - start);
                                return res;
                            }).catch((error) => {
                                this.record(key, performance.now() - start, true);
                                throw error;
                            })
                        }

                        this.record(key, performance.now() - start);
                        return result;
                    } catch (error) {
                        this.record(key, performance.now() - start, true);
                        throw error;
                    }
                }
            }
        })
    }

    private getAllMethodNames(prototype: any): string[] {
        const methodNames: string[] = [];
        let current = prototype;

        while (current && current !== Object.prototype) {
            Object.getOwnPropertyNames(current).forEach((name) => {
                const descriptor = Object.getOwnPropertyDescriptor(current, name);
                if (descriptor && typeof descriptor.value === 'function') {
                    methodNames.push(name);
                }
            })
            current = Object.getPrototypeOf(current);
        }

        return Array.from(methodNames);
    }

    private record(key: string, duration: number, isError: boolean = false): void {
        if (duration < this.config.threshold) return;

        if (!this.metrics.has(key)) {
            this.metrics.set(key, {
                calls: 0,
                totalTime: 0,
                minTime: Infinity,
                maxTime: 0,
                errors: 0,
                history: []
            })
        }

        const metric = this.metrics.get(key)!;
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

        if (this.config.logToConsole) {
            const emoji = isError ? '❌' :
                duration > 100 ? '🔴' :
                duration > 50 ? '🟡' : '⏱️';

            console.log(`${emoji} ${key} - ${duration.toFixed(2)}ms (${metric.calls} calls)`);
        }
    }

    private getReport(sortBy: keyof PerformanceReport = 'avgTime'): PerformanceReport[] {
        const report: PerformanceReport[] = [];

        this.metrics.forEach((value, key) => {
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
}
