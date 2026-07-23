export interface Project {
    title: string;
    description: string;
    technologies: string[];
    live_url: string;
    github_url: string;
    image: string;
}
export interface TranslationData {
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
    progress_values: number[];
    progress_t_c: string[];
    progress_c_values: number[];
    footer_text: string;
    projects: Project[];
}
export interface LanguageContent {
    translation: TranslationData;
}
export interface I18nResources {
    en: LanguageContent;
    fa: LanguageContent;
    [key: string]: LanguageContent;
}
