// i18n.ts
// Loads data/data.json and initializes the i18next instance that the CDN script
// attaches to window. This is the ONLY place initI18n is defined — app.ts imports it
// instead of keeping its own duplicate copy (that duplication was the main bug).

import type { I18nResources } from './interfaces';

declare const window: any;

export const initI18n = async (): Promise<any> => {
    const i18n = window.i18next;

    if (typeof i18n === 'undefined') {
        throw new Error('i18next is not loaded on window — check the CDN <script> tag order in index.html');
    }

    const response = await fetch('data/data.json');
    if (!response.ok) {
        throw new Error(`Failed to load data/data.json — HTTP ${response.status}`);
    }

    const resources: I18nResources = await response.json();

    await i18n.init({
        resources,
        lng: 'en',
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
    });

    return i18n;
};

export default (): any => window.i18next;