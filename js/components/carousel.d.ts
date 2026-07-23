/**
 * Carousel Component using Splide.js
 */
export interface CarouselConfig {
    elementId: string;
    perPage?: number;
    perMove?: number;
    breakpoints?: Record<number, {
        perPage: number;
    }>;
}
/**
 * Initialize Splide carousel with responsive breakpoints
 */
export declare function initializeCarousel(config: CarouselConfig): void;
/**
 * Initialize all carousels on page
 */
export declare function initializeAllCarousels(): void;
