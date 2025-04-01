/**
 * Main TypeScript file for the resume website
 * Contains animations, mobile detection, and language switching functionality
 */
declare const gsap: any;
declare const Splide: any;
declare const TimeLINE: any;
/**
 * Detects the mobile operating system of the user
 * @returns {string} The detected OS ('iOS', 'Android', or 'unknown')
 */
declare function getMobileOperatingSystem(): string;
/**
 * Sets up footer links with appropriate URLs based on device type
 */
declare function onLoad(): void;
/**
 * Initializes and animates circular progress bars
 */
declare function initializeProgressBars(): void;
interface LanguageContent {
    btn: string;
    name: string;
    sub: string[];
    l_title: string[];
    about_me: string;
    info_t: string[];
    info_a: string[];
    degree_t: string[];
    degree_a: string[];
    con_t: string[];
    r_title: string[];
    card_t: string[];
    card_a: string[];
    progress_t: string[];
    progress_t_c: string[];
    footer_text: string;
}
declare class LanguageManager implements LanguageContent {
    btn: string;
    name: string;
    sub: string[];
    l_title: string[];
    about_me: string;
    info_t: string[];
    info_a: string[];
    degree_t: string[];
    degree_a: string[];
    con_t: string[];
    r_title: string[];
    card_t: string[];
    card_a: string[];
    progress_t: string[];
    progress_t_c: string[];
    footer_text: string;
    constructor(btn: string, name: string, sub: string[], l_title: string[], about_me: string, info_t: string[], info_a: string[], degree_t: string[], degree_a: string[], con_t: string[], r_title: string[], card_t: string[], card_a: string[], progress_t: string[], progress_t_c: string[], footer_text: string);
}
declare let en: boolean;
declare const about_e = "I got my associate degree in 2017 and started to gain skills and experience as a freelancer in the field of logo design, icon, ui/ux, banner and sharp construction, WordPress template, exclusive template and content production, which some projects It has been placed in my projects category as a sample of my work. These activities led me to be interested in design and programming. My great interest in programming made me trying to always keep my information updated in the field of programming. I like problem solving and complex projects are interesting and fun for me.";
declare const about_f = "\u0645\u0646 \u0645\u062F\u0631\u06A9 \u06A9\u0627\u0631\u062F\u0627\u0646\u06CC \u0646\u0627\u067E\u0648\u0633\u062A\u0647 \u062E\u0648\u062F \u0631\u0627 \u062F\u0631 \u0633\u0627\u0644 1395 \u06AF\u0631\u0641\u062A\u0647 \u0648 \u0634\u0631\u0648\u0639 \u0628\u0647 \u06A9\u0633\u0628 \u0645\u0647\u0627\u0631\u062A \u0648 \u062A\u062C\u0631\u0628\u0647 \u0628\u0647 \u0639\u0646\u0648\u0627\u0646 \u0641\u0631\u06CC\u0644\u0646\u0633\u0631 \u062F\u0631 \u0632\u0645\u06CC\u0646\u0647 \u0637\u0631\u0627\u062D\u06CC \u0644\u0648\u06AF\u0648 \u060C \u0622\u06CC\u06A9\u0646 \u060C ui/ux \u060C \u0628\u0646\u0631 \u0648 \u0633\u0627\u062E\u062A \u062A\u06CC\u0632\u060C \u0642\u0627\u0644\u0628 \u0648\u0631\u062F\u067E\u0631\u0633\u060C \u0642\u0627\u0644\u0628 \u0627\u062E\u062A\u0635\u0627\u0635\u06CC \u0648 \u062A\u0648\u0644\u06CC\u062F \u0645\u062D\u062A\u0648\u0627\u060C \u06A9\u0647 \u0628\u0631\u062E\u06CC \u0627\u0632 \u067E\u0631\u0648\u0698\u0647 \u0647\u0627 \u062F\u0631 \u062F\u0633\u062A\u0647 \u0628\u0646\u062F\u06CC \u067E\u0631\u0648\u0698\u0647 \u0647\u0627\u06CC \u0645\u0646 \u0628\u0647 \u0639\u0646\u0648\u0627\u0646 \u0646\u0645\u0648\u0646\u0647 \u06A9\u0627\u0631\u0647\u0627\u06CC \u0645\u0646 \u0642\u0631\u0627\u0631 \u062F\u0627\u062F\u0647 \u0634\u062F\u0647 \u0627\u0633\u062A.\u0627\u06CC\u0646 \u0641\u0639\u0627\u0644\u06CC\u062A \u0647\u0627 \u0639\u0644\u0627\u0642\u0647 \u0645\u0646\u062F\u06CC \u0645\u0646 \u0631\u0627 \u0628\u0647 \u0637\u0631\u0627\u062D\u06CC \u0648 \u0628\u0631\u0646\u0627\u0645\u0647 \u0646\u0648\u06CC\u0633\u06CC \u0633\u0648\u0642 \u062F\u0627\u062F.\u0639\u0644\u0627\u0642\u0647 \u0632\u06CC\u0627\u062F \u0645\u0646 \u0628\u0647 \u0628\u0631\u0646\u0627\u0645\u0647 \u0646\u0648\u06CC\u0633\u06CC \u0628\u0627\u0639\u062B \u0634\u062F \u06A9\u0647 \u0633\u0639\u06CC \u06A9\u0646\u0645 \u0647\u0645\u06CC\u0634\u0647 \u0627\u0637\u0644\u0627\u0639\u0627\u062A \u062E\u0648\u062F \u0631\u0627 \u062F\u0631 \u062D\u0648\u0632\u0647 \u0628\u0631\u0646\u0627\u0645\u0647 \u0646\u0648\u06CC\u0633\u06CC \u0628\u0647 \u0631\u0648\u0632 \u0646\u06AF\u0647 \u062F\u0627\u0631\u0645.\u062D\u0644 \u0645\u0633\u0626\u0644\u0647 \u0631\u0627 \u062F\u0648\u0633\u062A \u062F\u0627\u0631\u0645 \u0648 \u067E\u0631\u0648\u0698\u0647 \u0647\u0627\u06CC\u06CC \u06A9\u0647 \u067E\u06CC\u0686\u06CC\u062F\u06AF\u06CC \u062F\u0627\u0634\u062A\u0647 \u0628\u0627\u0634\u062F \u060C \u0628\u0631\u0627\u06CC\u0645 \u062C\u0630\u0627\u0628 \u0648 \u0633\u0631\u06AF\u0631\u0645 \u06A9\u0646\u0646\u062F\u0647 \u0627\u0633\u062A.";
declare const card_e: string[];
declare const card_f: string[];
declare const html_dir: HTMLElement;
declare const html_btn: HTMLElement;
declare const html_name: HTMLElement;
declare const html_sub: NodeListOf<HTMLElement>;
declare const html_l_title: NodeListOf<HTMLElement>;
declare const html_about_me: HTMLElement;
declare const html_info_t: NodeListOf<HTMLElement>;
declare const html_info_a: NodeListOf<HTMLElement>;
declare const html_degree_t: NodeListOf<HTMLElement>;
declare const html_degree_a: NodeListOf<HTMLElement>;
declare const html_con_t: NodeListOf<HTMLElement>;
declare const html_r_title: NodeListOf<HTMLElement>;
declare const html_card_t: NodeListOf<HTMLElement>;
declare const html_card_a: NodeListOf<HTMLElement>;
declare const html_progress_t: NodeListOf<HTMLElement>;
declare const html_progress_t_c: NodeListOf<HTMLElement>;
declare const html_footer_text: HTMLElement;
declare const english: LanguageManager;
declare const farsi: LanguageManager;
/**
 * Switches between English and Farsi languages
 * Includes animation transitions between language changes
 */
declare function lan(): void;
