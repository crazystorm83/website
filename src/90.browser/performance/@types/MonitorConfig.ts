export interface MonitorConfig {
    enabled: boolean;
    threshold: number;
    sampleRate: number;
    maxHistorySize: number;
    logToConsole: boolean;
    exclude: string[];
}