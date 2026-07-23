/**
 * Circular Progress Bars Component
 */
export interface ProgressBarConfig {
    speed?: number;
    endValues?: number[];
    colors?: {
        progress: string;
        background: string;
    };
}
/**
 * Initialize and animate circular progress bars
 */
export declare function initializeProgressBars(config?: Partial<ProgressBarConfig>): void;
/**
 * Reset all progress bars to 0
 */
export declare function resetProgressBars(): void;
