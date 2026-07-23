/**
 * GSAP Animations Component
 */
export interface AnimationConfig {
    ease?: string;
    duration?: number;
}
/**
 * Create and return main animation timeline
 */
export declare function createTimeline(config?: AnimationConfig): any;
/**
 * Initialize page load animations
 */
export declare function initializePageLoadAnimations(): void;
/**
 * Animate language switch
 */
export declare function animateLanguageSwitch(onUpdateContent: () => void): Promise<void>;
/**
 * Animate element fade in
 */
export declare function fadeInElement(selector: string, duration?: number): void;
/**
 * Animate element fade out
 */
export declare function fadeOutElement(selector: string, duration?: number): void;
