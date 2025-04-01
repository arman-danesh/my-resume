/**
 * Main TypeScript file for the resume website
 * Contains animations, mobile detection, and language switching functionality
 */

// Type declarations for external libraries
declare const gsap: any;
declare const Splide: any;

// Initialize GSAP timeline for animations
const TimeLINE = gsap.timeline({defaults: {ease: "power1.out"}});

// Initial page load animation sequence
window.addEventListener('DOMContentLoaded', () => {
    // Animate welcome text and background transitions
    TimeLINE.to(".text", {opacity: 1, y: "-10", duration: 0.75, stagger: 0.25});
    TimeLINE.to(".gray_bg", {y: "-100%", duration: 1.25, delay: 0.5});
    TimeLINE.to(".black_bg", {y: "-100%", duration: 1}, "-=1");
    TimeLINE.to(".section", {opacity: 1});
    TimeLINE.fromTo(".text_left", {opacity: 0}, {opacity: 1, duration: 1, stagger: 0.2}, "-=0.5");
    TimeLINE.fromTo(".text_right", {opacity: 0}, {opacity: 1, duration: 1, stagger: 0.15}, "-=2.25");
});

/**
 * Detects the mobile operating system of the user
 * @returns {string} The detected OS ('iOS', 'Android', or 'unknown')
 */
function getMobileOperatingSystem(): string {
    const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;
    if (/iPad|iPhone|iPod/.test(userAgent)) {
        return 'iOS';
    } else if (/android/i.test(userAgent)) {
        return 'Android';
    }
    return 'unknown';
}

/**
 * Sets up footer links with appropriate URLs based on device type
 */
function onLoad(): void {
    const urlLink1 = "https://matrix.to/#/@arman458:matrix.org";
    const urlLink2 = "http://t.me/ArmanDaneshwork";
    let urlLink3 = "https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=armandaneshwork@gmail.com&body=my-text";
    
    // Use mailto: for mobile devices
    if (getMobileOperatingSystem() !== 'unknown') {
        urlLink3 = "mailto:armandaneshwork@gmail.com";
    }
    
    // Set href attributes for footer links
    const link1 = document.getElementById('yourLink1');
    const link2 = document.getElementById('yourLink2');
    const link3 = document.getElementById('yourLink3');
    
    if (link1) link1.setAttribute('href', urlLink1);
    if (link2) link2.setAttribute('href', urlLink2);
    if (link3) link3.setAttribute('href', urlLink3);
}

// Initialize footer links on page load
window.addEventListener('load', onLoad);

// Initialize Splide slider
document.addEventListener('DOMContentLoaded', () => {
    onLoad();
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
                420: { perPage: 1 }
            },
        }).mount();
    }
    initializeProgressBars();
});

/**
 * Initializes and animates circular progress bars
 */
function initializeProgressBars(): void {
    const progressBars = document.getElementsByName("circular-progress");
    const valueContainers = document.getElementsByName("value-container");
    const endValues = [65, 75, 85];
    const speed = 15;

    progressBars.forEach((progressBar, i) => {
        if (i < endValues.length) {
            let progressValue = 0;
            const progressEndValue = endValues[i];
            const valueContainer = valueContainers[i];

            const progress = setInterval(() => {
                progressValue++;
                if (valueContainer) {
                    valueContainer.textContent = `${progressValue}%`;
                }
                if (progressBar instanceof HTMLElement) {
                    progressBar.style.background = `conic-gradient(
                        #DBA507 ${progressValue * 3.6}deg,
                        #101A2B ${progressValue * 3.6}deg
                    )`;
                }
                if (progressValue === progressEndValue) {
                    clearInterval(progress);
                }
            }, speed);
        }
    });
}

// Language switching functionality
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

class LanguageManager implements LanguageContent {
    constructor(
        public btn: string,
        public name: string,
        public sub: string[],
        public l_title: string[],
        public about_me: string,
        public info_t: string[],
        public info_a: string[],
        public degree_t: string[],
        public degree_a: string[],
        public con_t: string[],
        public r_title: string[],
        public card_t: string[],
        public card_a: string[],
        public progress_t: string[],
        public progress_t_c: string[],
        public footer_text: string
    ) {}
}

// Track current language state
let en = true;

// Content for English and Farsi languages
const about_e = "I got my associate degree in 2017 and started to gain skills and experience as a freelancer in the field of logo design, icon, ui/ux, banner and sharp construction, WordPress template, exclusive template and content production, which some projects It has been placed in my projects category as a sample of my work. These activities led me to be interested in design and programming. My great interest in programming made me trying to always keep my information updated in the field of programming. I like problem solving and complex projects are interesting and fun for me.";
const about_f = "من مدرک کاردانی ناپوسته خود را در سال 1395 گرفته و شروع به کسب مهارت و تجربه به عنوان فریلنسر در زمینه طراحی لوگو ، آیکن ، ui/ux ، بنر و ساخت تیز، قالب وردپرس، قالب اختصاصی و تولید محتوا، که برخی از پروژه ها در دسته بندی پروژه های من به عنوان نمونه کارهای من قرار داده شده است.این فعالیت ها علاقه مندی من را به طراحی و برنامه نویسی سوق داد.علاقه زیاد من به برنامه نویسی باعث شد که سعی کنم همیشه اطلاعات خود را در حوزه برنامه نویسی به روز نگه دارم.حل مسئله را دوست دارم و پروژه هایی که پیچیدگی داشته باشد ، برایم جذاب و سرگرم کننده است.";

// Card content in English and Farsi
const card_e = [
    'i will be responsible for implementing visual elements that users see and interact within a web application, which makes my role crucial for the success of compeny business.',
    'UX designers seek to develop and improve the quality interaction between the user and the company, while UI designers introduce the brands power and visual assets to users.',
    'A well-designed logo or icon is the first point of identification of a software or web for customers and an important basis for branding a company.',
    'SEO consists of several elements and its main goal is to show value to search engines that allows pages to rank high and reach the first page of search engines.'
];

const card_f = [
    'به‌عنوان یک توسعه‌دهنده فرانت‌اند،من مسئول پیاده‌سازی عناصر بصری هستم که کاربران می‌بینند و در یک برنامه وب با هم تعامل دارند، که نقش من را برای موفقیت کسب‌وکار شرکت بسیار مهم می‌کند.',
    'طراحان UX به دنبال توسعه و بهبود تعامل کیفیت بین کاربر و شرکت هستند، در حالی که طراحان UI قدرت و دارایی های بصری برند را به کاربران معرفی می کنند.',
    'یک لوگو یا ایکن خوب طراحی شده اولین نقطه شناسایی یک نرم افزار یا وب برای مشتریان و پایه مهمی برای برندسازی یک شرکت است.',
    'سئو از چندین عنصر تشکیل شده است و هدف اصلی آن نشان دادن ارزش به موتورهای جستجو است که به صفحات امکان می دهد رتبه بالایی داشته باشند و به صفحه اول موتورهای جستجو برسند.'
];

// Get DOM elements for language switching
const html_dir = document.getElementById("dir") as HTMLElement;
const html_btn = document.getElementById("btn") as HTMLElement;
const html_name = document.getElementById("name") as HTMLElement;
const html_sub = document.getElementsByName("sub") as NodeListOf<HTMLElement>;
const html_l_title = document.getElementsByName("l_title") as NodeListOf<HTMLElement>;
const html_about_me = document.getElementById("about_me") as HTMLElement;
const html_info_t = document.getElementsByName("info_t") as NodeListOf<HTMLElement>;
const html_info_a = document.getElementsByName("info_a") as NodeListOf<HTMLElement>;
const html_degree_t = document.getElementsByName("degree_t") as NodeListOf<HTMLElement>;
const html_degree_a = document.getElementsByName("degree_a") as NodeListOf<HTMLElement>;
const html_con_t = document.getElementsByName("con_t") as NodeListOf<HTMLElement>;
const html_r_title = document.getElementsByName("r_title") as NodeListOf<HTMLElement>;
const html_card_t = document.getElementsByName("card_t") as NodeListOf<HTMLElement>;
const html_card_a = document.getElementsByName("card_a") as NodeListOf<HTMLElement>;
const html_progress_t = document.getElementsByName("progress_t") as NodeListOf<HTMLElement>;
const html_progress_t_c = document.getElementsByName("progress_t_c") as NodeListOf<HTMLElement>;
const html_footer_text = document.getElementById("footer_text") as HTMLElement;

// Define language content
const english = new LanguageManager(
    "FA",
    "ARMAN DANESH",
    ['UI/UX Designer', 'Front-End Developer'],
    ['About me', 'information', 'Learning', 'Contact Me'],
    about_e,
    ['resident:', 'Age:', 'Military service:'],
    ['IRAN,Tehran', '24', 'It ended in 2022'],
    ['degree:', 'university name:', '.net:', 'mongodb:', 'mysql:'],
    ['Associate Degree', 'University of Applied </br> Sciences & Technology'],
    ['Phone Number:', 'Telegram:', 'Gmail:'],
    ['what i offers', 'My Projects', 'Professional Skill', 'My Skill '],
    ['Front-end', 'Ui/Ux Designer', 'Logo Designer', 'SEO'],
    [card_e[0], card_e[1], card_e[2], card_e[3]],
    ['HTML5:', 'CSS:', 'JavaScript:', 'Bootstrap:', 'Github:', 'type script', 'sass / less:', 'Figma & Xd:', 'PhotoShop:', 'Illustrator:', 'Wordpress:', 'SEO:', 'React js'],
    ['Team Work:', 'Fast learner:', 'Creation:', 'innovation:'],
    "2023©Any copying of the template design, the content of my resume in any way will be prosecuted"
);

const farsi = new LanguageManager(
    "EN",
    "آرمان دانش",
    ['طراح UI/UX', 'برنامه نویس فرانت اند'],
    ['درباره من', 'مشخصات', 'درحال یادگیری', 'تماس با من'],
    about_f,
    ['مقیم:', 'سن:', 'خدمت سربازی:'],
    ['ایران،تهران', '24', 'در سال 1401 به پایان رسید'],
    ['مدرک:', 'نام دانشگاه:', '.net:', 'mongodb:', 'mysql:'],
    ['کاردانی', 'مرکز اموزشی علمی </br> کاربردی'],
    [':شماره همراه', 'تلگرام:', 'ایمیل:'],
    ['خدماتی که من ارائه می دهم', 'پروزه های من', 'مهارتهای حرفه ای', 'مهارتهای من'],
    ['فرانت اند', 'طراح Ui/Ux', 'طراح لوگو', 'سئو'],
    [card_f[0], card_f[1], card_f[2], card_f[3]],
    ['HTML5:', 'CSS:', 'جاوا اسکریپت:', 'بوت استرپ:', 'Github:', 'type script', 'sass / less:', 'Figma & Xd:', ':فتوشاپ:', 'ایلاستریتور:', 'وردپرس:', 'سئو', 'React js'],
    ['کار گروهی:', 'یادگیری سریع:', 'خلاق:', 'نوآوری:'],
    "1402©هرگونه کپی برداری از طرح قالب, مطالب رزومه من به هر نحو، پیگرد قانونی دارد"
);

/**
 * Switches between English and Farsi languages
 * Includes animation transitions between language changes
 */
function lan(): void {
    const content = en ? farsi : english;
    
    // Fade out content
    TimeLINE.to(".section", {opacity: 0, stagger: 0.25});
    
    setTimeout(() => {
        // Update direction and button text
        if (html_dir) html_dir.style.direction = en ? "rtl" : "ltr";
        if (html_btn) html_btn.innerHTML = content.btn;
        if (html_name) html_name.innerHTML = content.name;
        
        // Helper function to update arrays of elements
        const updateElements = (elements: NodeListOf<HTMLElement>, values: string[]) => {
            elements.forEach((el, i) => {
                if (el && values[i]) el.innerHTML = values[i];
            });
        };
        
        // Update all content elements
        updateElements(html_sub, content.sub);
        updateElements(html_l_title, content.l_title);
        if (html_about_me) html_about_me.innerHTML = content.about_me;
        updateElements(html_info_t, content.info_t);
        updateElements(html_info_a, content.info_a);
        updateElements(html_degree_t, content.degree_t);
        updateElements(html_degree_a, content.degree_a);
        updateElements(html_con_t, content.con_t);
        updateElements(html_r_title, content.r_title);
        updateElements(html_card_t, content.card_t);
        updateElements(html_card_a, content.card_a);
        updateElements(html_progress_t, content.progress_t);
        updateElements(html_progress_t_c, content.progress_t_c);
        if (html_footer_text) html_footer_text.innerHTML = content.footer_text;
        
        // Toggle language state
        en = !en;
        
        // Fade in content with animations
        TimeLINE.to(".section", {opacity: 1, stagger: 0.25});
        TimeLINE.fromTo(".text_left", {opacity: 0}, {opacity: 1, stagger: 0.2}, "-=1");
        TimeLINE.fromTo(".text_right", {opacity: 0}, {opacity: 1, stagger: 0.15}, "-=1");
    }, 1000);
}

// Make language switching function globally available
(window as any).lan = lan;

