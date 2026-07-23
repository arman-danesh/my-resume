import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
// Import translation files
import enTranslation from '../../locales/en.json';
import faTranslation from '../../locales/fa.json';
// Initialize i18next
i18n
    .use(LanguageDetector)
    .init({
    fallbackLng: 'en',
    debug: false,
    resources: {
        en: {
            translation: enTranslation,
        },
        fa: {
            translation: faTranslation,
        },
    },
    interpolation: {
        escapeValue: false, // React already escapes values
    },
    detection: {
        order: ['localStorage', 'navigator'],
        caches: ['localStorage'],
    },
});
export default i18n;
//# sourceMappingURL=i18n.config.js.map