/**
 * Main Application Entry Point
 * Uses i18next for internationalization and modular component system
 */
import i18n from './i18n/i18n.config';
import { initializePageLoadAnimations, animateLanguageSwitch } from './components/animations';
import { initializeCarousel } from './components/carousel';
import { initializeProgressBars } from './components/progressBars';
import { isMobileDevice } from './utils/mobile';
/**
 * Initialize footer links with appropriate URLs based on device type
 */
function initializeFooterLinks() {
    const urlLink1 = 'https://matrix.to/#/@arman458:matrix.org';
    const urlLink2 = 'http://t.me/ArmanDaneshwork';
    let urlLink3 = 'https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=armandaneshwork@gmail.com&body=';
    // Use mailto: for mobile devices
    if (isMobileDevice()) {
        urlLink3 = 'mailto:armandaneshwork@gmail.com';
    }
    // Set href attributes for footer links
    const link1 = document.getElementById('yourLink1');
    const link2 = document.getElementById('yourLink2');
    const link3 = document.getElementById('yourLink3');
    if (link1)
        link1.setAttribute('href', urlLink1);
    if (link2)
        link2.setAttribute('href', urlLink2);
    if (link3)
        link3.setAttribute('href', urlLink3);
}
/**
 * Update UI content from i18next translations
 */
function updateUIContent() {
    // Update common elements
    const btn = document.getElementById('btn');
    const name = document.getElementById('name');
    const dir = document.getElementById('dir');
    if (btn)
        btn.textContent = i18n.t('common.languageButton');
    if (name)
        name.textContent = i18n.t('common.name');
    if (dir)
        dir.setAttribute('dir', i18n.language === 'fa' ? 'rtl' : 'ltr');
    // Update element arrays with i18n keys
    updateElementArray('sub', ['common.role.primary', 'common.role.secondary']);
    updateElementArray('l_title', [
        'header.titles.about',
        'header.titles.information',
        'header.titles.learning',
        'header.titles.contact',
    ]);
    // Update sections
    const aboutMe = document.getElementById('about_me');
    if (aboutMe)
        aboutMe.textContent = i18n.t('about.description');
    const footerText = document.getElementById('footer_text');
    if (footerText)
        footerText.textContent = i18n.t('footer.copyright');
    // Update information section
    updateElementArray('info_t', ['information.resident', 'information.age', 'information.militaryService']);
    updateElementArray('info_a', [
        'information.residentValue',
        'information.ageValue',
        'information.militaryServiceValue',
    ]);
    // Update education section
    updateElementArray('degree_t', ['education.degree', 'education.university']);
    updateElementArray('degree_a', [
        'education.degreeValue',
        'education.universityValue',
    ]);
    // Update contact section
    updateElementArray('con_t', ['contact.phone', 'contact.telegram', 'contact.email']);
    // Update services section
    updateElementArray('r_title', ['services.title', 'projects.title', 'skills.title']);
    updateElementArray('card_t', [
        'services.offerings.frontend',
        'services.offerings.uiux',
        'services.offerings.logo',
        'services.offerings.seo',
    ]);
    updateElementArray('card_a', [
        'services.descriptions.frontend',
        'services.descriptions.uiux',
        'services.descriptions.logo',
        'services.descriptions.seo',
    ]);
    // Update skills - handle both individual items and arrays
    const technicalItems = i18n.t('skills.technical.items', { returnObjects: true });
    const softItems = i18n.t('skills.soft.items', { returnObjects: true });
    updateElementArray('progress_t', technicalItems);
    updateElementArray('progress_t_c', softItems);
}
/**
 * Helper function to update arrays of elements with i18n keys
 */
function updateElementArray(elementName, keys) {
    const elements = document.getElementsByName(elementName);
    elements.forEach((el, index) => {
        if (keys[index]) {
            const value = i18n.t(keys[index]);
            el.textContent = value;
        }
    });
}
/**
 * Toggle language between English and Farsi
 */
async function toggleLanguage() {
    const newLanguage = i18n.language === 'en' ? 'fa' : 'en';
    await animateLanguageSwitch(() => {
        i18n.changeLanguage(newLanguage);
        updateUIContent();
    });
}
/**
 * Make language toggle available globally
 */
window.toggleLanguage = toggleLanguage;
/**
 * Initialize page on DOMContentLoaded
 */
document.addEventListener('DOMContentLoaded', () => {
    // Initialize i18n and set up UI
    i18n.on('initialized', () => {
        updateUIContent();
        initializePageLoadAnimations();
    });
    // Initialize components
    initializeFooterLinks();
    initializeCarousel({ elementId: 'image-carousel', perPage: 4 });
    initializeProgressBars();
    // Attach language toggle to button
    const languageBtn = document.getElementById('btn');
    if (languageBtn) {
        languageBtn.addEventListener('click', toggleLanguage);
    }
});
/**
 * Initialize page load animations on window load
 */
window.addEventListener('load', () => {
    initializePageLoadAnimations();
});
//# sourceMappingURL=app.js.map