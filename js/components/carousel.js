/**
 * Carousel Component using Splide.js
 */
/**
 * Initialize Splide carousel with responsive breakpoints
 */
export function initializeCarousel(config) {
    const { elementId, perPage = 4, perMove = 1, breakpoints } = config;
    const element = document.getElementById(elementId);
    if (!element) {
        console.warn(`Carousel element with ID "${elementId}" not found`);
        return;
    }
    const defaultBreakpoints = breakpoints || {
        1550: { perPage: 4 },
        1400: { perPage: 3 },
        1200: { perPage: 3 },
        760: { perPage: 2 },
        576: { perPage: 1 },
        420: { perPage: 1 },
    };
    try {
        new Splide(`#${elementId}`, {
            perPage,
            perMove,
            breakpoints: defaultBreakpoints,
        }).mount();
    }
    catch (error) {
        console.error(`Failed to initialize carousel with ID "${elementId}":`, error);
    }
}
/**
 * Initialize all carousels on page
 */
export function initializeAllCarousels() {
    initializeCarousel({
        elementId: 'image-carousel',
        perPage: 4,
        perMove: 1,
    });
}
//# sourceMappingURL=carousel.js.map