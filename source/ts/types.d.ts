declare namespace gsap {
    interface Timeline {
        to(target: any, vars: any, position?: string | number): Timeline;
        fromTo(target: any, fromVars: any, toVars: any, position?: string | number): Timeline;
        timeline(vars?: any): Timeline;
    }

    function timeline(vars?: any): Timeline;
}

declare class Splide {
    constructor(target: string | HTMLElement, options?: any);
    mount(): void;
}

interface Window {
    opera?: any;
    languageManager: LanguageManager;
}

export {}; 