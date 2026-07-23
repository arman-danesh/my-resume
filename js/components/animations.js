/**
 * GSAP Animations Component
 */
/**
 * Create and return main animation timeline
 */
export function createTimeline(config = {}) {
    const { ease = 'power1.out', duration = 0.75 } = config;
    return gsap.timeline({ defaults: { ease } });
}
/**
 * Initialize page load animations
 */
export function initializePageLoadAnimations() {
    try {
        const timeline = createTimeline();
        // Animate welcome text
        timeline.to('.text', {
            opacity: 1,
            y: '-10',
            duration: 0.75,
            stagger: 0.25,
        });
        // Slide up backgrounds
        timeline.to('.gray_bg', { y: '-100%', duration: 1.25, delay: 0.5 });
        timeline.to('.black_bg', { y: '-100%', duration: 1 }, '-=1');
        // Fade in main sections
        timeline.to('.section', { opacity: 1 });
        // Fade in side texts
        timeline.fromTo('.text_left', { opacity: 0 }, { opacity: 1, duration: 1, stagger: 0.2 }, '-=0.5');
        timeline.fromTo('.text_right', { opacity: 0 }, { opacity: 1, duration: 1, stagger: 0.15 }, '-=2.25');
    }
    catch (error) {
        console.error('Failed to initialize page load animations:', error);
    }
}
/**
 * Animate language switch
 */
export function animateLanguageSwitch(onUpdateContent) {
    return new Promise((resolve) => {
        try {
            const timeline = createTimeline();
            // Fade out content
            timeline.to('.section', { opacity: 0, stagger: 0.25 });
            // Wait for fade out to complete, then update content
            timeline.add(() => {
                onUpdateContent();
            }, '+=0.5');
            // Fade in content
            timeline.to('.section', { opacity: 1, stagger: 0.25 });
            timeline.fromTo('.text_left', { opacity: 0 }, { opacity: 1, stagger: 0.2 }, '-=1');
            timeline.fromTo('.text_right', { opacity: 0 }, { opacity: 1, stagger: 0.15 }, '-=1');
            // Resolve when animation completes
            timeline.eventCallback('onComplete', resolve);
        }
        catch (error) {
            console.error('Failed to animate language switch:', error);
            resolve();
        }
    });
}
/**
 * Animate element fade in
 */
export function fadeInElement(selector, duration = 0.5) {
    try {
        gsap.to(selector, { opacity: 1, duration });
    }
    catch (error) {
        console.error(`Failed to fade in element "${selector}":`, error);
    }
}
/**
 * Animate element fade out
 */
export function fadeOutElement(selector, duration = 0.5) {
    try {
        gsap.to(selector, { opacity: 0, duration });
    }
    catch (error) {
        console.error(`Failed to fade out element "${selector}":`, error);
    }
}
//# sourceMappingURL=animations.js.map