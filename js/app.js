/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./source/ts/i18n.ts"
/*!***************************!*\
  !*** ./source/ts/i18n.ts ***!
  \***************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   initI18n: () => (/* binding */ initI18n)
/* harmony export */ });
// i18n.ts
// Loads data/data.json and initializes the i18next instance that the CDN script
// attaches to window. This is the ONLY place initI18n is defined — app.ts imports it
// instead of keeping its own duplicate copy (that duplication was the main bug).
const initI18n = async () => {
    const i18n = window.i18next;
    if (typeof i18n === 'undefined') {
        throw new Error('i18next is not loaded on window — check the CDN <script> tag order in index.html');
    }
    const response = await fetch('data/data.json');
    if (!response.ok) {
        throw new Error(`Failed to load data/data.json — HTTP ${response.status}`);
    }
    const resources = await response.json();
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => window.i18next);
__webpack_require__.dn(__WEBPACK_DEFAULT_EXPORT__);


/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter/value functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			if(Array.isArray(definition)) {
/******/ 				var i = 0;
/******/ 				while(i < definition.length) {
/******/ 					var key = definition[i++];
/******/ 					var binding = definition[i++];
/******/ 					if(!__webpack_require__.o(exports, key)) {
/******/ 						if(binding === 0) {
/******/ 							Object.defineProperty(exports, key, { enumerable: true, value: definition[i++] });
/******/ 						} else {
/******/ 							Object.defineProperty(exports, key, { enumerable: true, get: binding });
/******/ 						}
/******/ 					} else if(binding === 0) { i++; }
/******/ 				}
/******/ 			} else {
/******/ 				for(var key in definition) {
/******/ 					if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 						Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/set anonymous default export name */
/******/ 	(() => {
/******/ 		// set .name for anonymous default exports per ES spec
/******/ 		__webpack_require__.dn = (x) => {
/******/ 			(Object.getOwnPropertyDescriptor(x, "name") || {}).writable || Object.defineProperty(x, "name", { value: "default", configurable: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
let __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**************************!*\
  !*** ./source/ts/app.ts ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./i18n */ "./source/ts/i18n.ts");
/**
 * Main TypeScript file for the resume website
 * Animations, mobile detection, and language switching.
 */

// ============================================
// STATE
// ============================================
let currentLanguage = 'en';
const timeline = gsap.timeline({ defaults: { ease: 'power1.out' } });
let translationData = null;
let i18nInstance = null;
// ============================================
// DOM REFERENCES
// ============================================
const htmlDir = document.getElementById('dir');
const htmlBtn = document.getElementById('btn');
const htmlName = document.getElementById('name');
const htmlSub = document.getElementsByName('sub');
const htmlLTitle = document.getElementsByName('l_title');
const htmlAboutMe = document.getElementById('about_me');
const htmlInfoT = document.getElementsByName('info_t');
const htmlInfoA = document.getElementsByName('info_a');
const htmlDegreeT = document.getElementsByName('degree_t');
const htmlDegreeA = document.getElementsByName('degree_a');
const htmlConT = document.getElementsByName('con_t');
const htmlRTitle = document.getElementsByName('r_title');
const htmlCardT = document.getElementsByName('card_t');
const htmlCardA = document.getElementsByName('card_a');
const htmlProgressT = document.getElementsByName('progress_t');
const htmlProgressTC = document.getElementsByName('progress_t_c');
const htmlFooterText = document.getElementById('footer_text');
// ============================================
// UTILITY FUNCTIONS
// ============================================
function getMobileOperatingSystem() {
    const userAgent = navigator.userAgent || navigator.vendor || '';
    if (/iPad|iPhone|iPod/.test(userAgent))
        return 'iOS';
    if (/android/i.test(userAgent))
        return 'Android';
    return 'unknown';
}
function setupFooterLinks() {
    const urlLink1 = 'https://www.linkedin.com/in/arman-danesh-a6aaab2bb/';
    const urlLink2 = 'http://t.me/ArmanDaneshwork';
    let urlLink3 = 'https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=armandaneshwork@gmail.com&body=my-text';
    if (getMobileOperatingSystem() !== 'unknown') {
        urlLink3 = 'mailto:armandaneshwork@gmail.com';
    }
    document.getElementById('yourLink1')?.setAttribute('href', urlLink1);
    document.getElementById('yourLink2')?.setAttribute('href', urlLink2);
    document.getElementById('yourLink3')?.setAttribute('href', urlLink3);
}
function initializeProgressBars() {
    const progressBars = document.getElementsByName('circular-progress');
    const valueContainers = document.getElementsByName('value-container');
    const endValues = [90, 90, 85]; // matches the "Learning" trio in data.json (degree_t[2..4])
    const speed = 15;
    progressBars.forEach((progressBar, i) => {
        if (i >= endValues.length)
            return;
        let progressValue = 0;
        const progressEndValue = endValues[i];
        const valueContainer = valueContainers[i];
        const progress = setInterval(() => {
            progressValue++;
            if (valueContainer)
                valueContainer.textContent = `${progressValue}%`;
            if (progressBar instanceof HTMLElement) {
                progressBar.style.background = `conic-gradient(
                    #DBA507 ${progressValue * 3.6}deg,
                    #101A2B ${progressValue * 3.6}deg
                )`;
            }
            if (progressValue === progressEndValue)
                clearInterval(progress);
        }, speed);
    });
}
// ============================================
// LANGUAGE FUNCTIONS
// ============================================
function getTranslation() {
    if (translationData)
        return translationData;
    if (!i18nInstance) {
        console.error('i18n not initialized yet');
        return null;
    }
    const resources = i18nInstance.services.resourceStore.data;
    const currentLang = i18nInstance.language || 'en';
    const translation = resources?.[currentLang]?.translation ??
        resources?.en?.translation ??
        i18nInstance.t('translation', { returnObjects: true, defaultValue: null });
    if (!translation || typeof translation !== 'object') {
        console.error('Translation data is not valid:', translation);
        return null;
    }
    translationData = translation;
    return translationData;
}
function updateProgressBars(progressValues, progressLabels) {
    if (!progressLabels?.length || !progressValues?.length)
        return;
    htmlProgressT.forEach((el, i) => {
        if (el && progressLabels[i])
            el.innerHTML = progressLabels[i];
        const parentDiv = el?.closest('div');
        const progressBar = parentDiv?.querySelector('.progress-bar');
        if (progressBar && progressValues[i] !== undefined) {
            progressBar.style.width = `${progressValues[i]}%`;
            progressBar.setAttribute('aria-valuenow', String(progressValues[i]));
            const textElement = parentDiv?.querySelector('.progress-text');
            if (textElement)
                textElement.textContent = `${progressValues[i]}%`;
        }
    });
}
function updatePersonalSkills(values, labels) {
    if (!labels?.length || !values?.length)
        return;
    htmlProgressTC.forEach((el, i) => {
        if (el && labels[i])
            el.innerHTML = labels[i];
        const parentDiv = el?.closest('div');
        const progressBar = parentDiv?.querySelector('.progress-bar');
        if (progressBar && values[i] !== undefined) {
            progressBar.style.width = `${values[i]}%`;
            progressBar.setAttribute('aria-valuenow', String(values[i]));
            const textElement = parentDiv?.querySelector('.progress-text');
            if (textElement)
                textElement.textContent = `${values[i]}%`;
        }
    });
}
/**
 * Generates project cards. Fixed: Live Demo / GitHub buttons are only rendered
 * when the project actually has that URL — most of the real projects are
 * client work with no public repo, so a dead "GitHub" button no longer shows.
 */
function generateProjectCards() {
    const translation = getTranslation();
    const container = document.getElementById('projects-container');
    if (!container) {
        console.error('Projects container not found');
        return;
    }
    if (!translation?.projects?.length) {
        container.innerHTML = '<div class="col-12 text-center text-muted">No projects available</div>';
        return;
    }
    container.innerHTML = '';
    translation.projects.forEach((project) => {
        const col = document.createElement('div');
        col.className = 'col-lg-4 col-md-6 col-12';
        const imagePath = project.image || 'images/image/placeholder.jpg';
        const liveBtn = project.live_url
            ? `<a name="project_live_btn" href="${project.live_url}" target="_blank" rel="noopener noreferrer" class="btn btn-outline-golden btn-sm flex-grow-1">Live Demo</a>`
            : '';
        const githubBtn = project.github_url
            ? `<a name="project_github_btn" href="${project.github_url}" target="_blank" rel="noopener noreferrer" class="btn btn-outline-golden btn-sm flex-grow-1">GitHub</a>`
            : '';
        col.innerHTML = `
            <div class="card project-card card-color shadow text-white rounded-3 h-100">
                <div class="card-body d-flex flex-column">
                    <div class="project-image-container mb-3">
                        <img name="project_image" src="${imagePath}" alt="${project.title}" class="img-fluid rounded-2 project-img" onerror="this.src='images/image/profile-image.jpg'">
                    </div>
                    <h4 name="project_title" class="card-title font-bold">${project.title}</h4>
                    <p name="project_description" class="card-text text-custom small">${project.description}</p>
                    <div name="project_technologies" class="d-flex gap-2 flex-wrap mt-auto">
                        ${project.technologies.map((tech) => `<span class="badge bg-golden text-dark">${tech}</span>`).join('')}
                    </div>
                    ${(liveBtn || githubBtn) ? `<div class="d-flex gap-2 mt-3">${liveBtn}${githubBtn}</div>` : ''}
                </div>
            </div>
        `;
        container.appendChild(col);
    });
}
function updateElements(elements, values) {
    if (!values?.length)
        return;
    elements.forEach((el, i) => {
        if (el && values[i] !== undefined && values[i] !== null)
            el.innerHTML = values[i];
    });
}
function applyLanguage(lang) {
    if (!i18nInstance) {
        console.error('i18n not available');
        return;
    }
    i18nInstance.changeLanguage(lang);
    translationData = null; // force reload for the new language
    const translation = getTranslation();
    if (!translation) {
        console.error('Translation data not available');
        return;
    }
    const isRTL = lang === 'fa';
    if (htmlDir)
        htmlDir.style.direction = isRTL ? 'rtl' : 'ltr';
    if (htmlBtn)
        htmlBtn.innerHTML = translation.btn || 'FA';
    if (htmlName)
        htmlName.innerHTML = translation.name || 'ARMAN DANESH';
    updateElements(htmlSub, translation.sub);
    updateElements(htmlLTitle, translation.l_title);
    if (htmlAboutMe && translation.about_me)
        htmlAboutMe.innerHTML = translation.about_me;
    updateElements(htmlInfoT, translation.info_t);
    updateElements(htmlInfoA, translation.info_a);
    updateElements(htmlDegreeT, translation.degree_t);
    updateElements(htmlDegreeA, translation.degree_a);
    updateElements(htmlConT, translation.con_t);
    updateElements(htmlRTitle, translation.r_title);
    updateElements(htmlCardT, translation.card_t);
    updateElements(htmlCardA, translation.card_a);
    if (translation.progress_t?.length && translation.progress_values?.length) {
        updateProgressBars(translation.progress_values, translation.progress_t);
    }
    if (translation.progress_t_c?.length && translation.progress_c_values?.length) {
        updatePersonalSkills(translation.progress_c_values, translation.progress_t_c);
    }
    if (htmlFooterText && translation.footer_text)
        htmlFooterText.innerHTML = translation.footer_text;
    generateProjectCards();
}
function lan() {
    const newLang = currentLanguage === 'en' ? 'fa' : 'en';
    timeline.to('.section', { opacity: 0, stagger: 0.25 });
    setTimeout(() => {
        applyLanguage(newLang);
        currentLanguage = newLang;
        timeline.to('.section', { opacity: 1, stagger: 0.25 });
        timeline.fromTo('.text_left', { opacity: 0 }, { opacity: 1, stagger: 0.2 }, '-=1');
        timeline.fromTo('.text_right', { opacity: 0 }, { opacity: 1, stagger: 0.15 }, '-=1');
    }, 1000);
}
// ============================================
// INITIALIZATION
// ============================================
async function initializeApp() {
    try {
        i18nInstance = await (0,_i18n__WEBPACK_IMPORTED_MODULE_0__.initI18n)();
        if (!i18nInstance)
            throw new Error('i18n initialization failed');
        currentLanguage = 'en';
        timeline.to('.text', { opacity: 1, y: '-10', duration: 0.75, stagger: 0.25 });
        timeline.to('.gray_bg', { y: '-100%', duration: 1.25, delay: 0.5 });
        timeline.to('.black_bg', { y: '-100%', duration: 1 }, '-=1');
        timeline.to('.section', { opacity: 1 });
        timeline.fromTo('.text_left', { opacity: 0 }, { opacity: 1, duration: 1, stagger: 0.2 }, '-=0.5');
        timeline.fromTo('.text_right', { opacity: 0 }, { opacity: 1, duration: 1, stagger: 0.15 }, '-=2.25');
        applyLanguage('en');
        setupFooterLinks();
        console.log('Application initialized successfully');
    }
    catch (error) {
        console.error('Error initializing application:', error);
    }
}
// ============================================
// EVENT LISTENERS
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
});
window.addEventListener('load', () => {
    const splideElement = document.getElementById('image-carousel');
    if (splideElement) {
        new Splide('#image-carousel', {
            perPage: 4,
            perMove: 1,
            breakpoints: {
                1550: { perPage: 4 },
                1400: { perPage: 3 },
                1200: { perPage: 3 },
                760: { perPage: 2 },
                576: { perPage: 1 },
                420: { perPage: 1 },
            },
        }).mount();
    }
    initializeProgressBars();
});
window.lan = lan;

})();

/******/ })()
;
//# sourceMappingURL=app.js.map