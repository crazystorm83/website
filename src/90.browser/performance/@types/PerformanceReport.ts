
export interface PerformanceReport {
    method: string;
    calls: number;
    avgTime: number;
    minTime: number;
    maxTime: number;
    p50: number;
    p95: number;
    p99: number;
    errorRate: number;
}
