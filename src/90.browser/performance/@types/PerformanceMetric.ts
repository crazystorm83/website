import { PerformanceEntry } from "./PerformanceEntry";

export interface PerformanceMetric {
    calls: number;
    totalTime: number;
    minTime: number;
    maxTime: number;
    errors: number;
    history: PerformanceEntry[];
}
