/* start of animation*/

const TimeLINE = gsap.timeline({defaults: {ease: "power1.out"}});
TimeLINE.to(".text", {opacity: 1, y: "-10", duration: 0.75, stagger: 0.25});
TimeLINE.to(".gray_bg", {y: "-100%", duration: 1.25, delay: 0.5});
TimeLINE.to(".black_bg", {y: "-100%", duration: 1}, "-=1");
TimeLINE.to(".section", {opacity: 1,});
TimeLINE.fromTo(".text_left", {opacity: 0}, {opacity: 1, duration: 1, stagger: 0.2}, "-=0.5");
TimeLINE.fromTo(".text_right", {opacity: 0}, {opacity: 1, duration: 1, stagger: 0.15}, "-=2.25");

/* end of animation*/

/* start of footer btn*/

function getMobileOperatingSystem() {
    let userAgent = navigator.userAgent || navigator.vendor || window.opera;
    if (userAgent.match(/iPad/i) || userAgent.match(/iPhone/i) || userAgent.match(/iPod/i)) {
        return 'iOS';
    } else if (userAgent.match(/Android/i)) {
        return 'Android';
    } else {
        return 'unknown';
    }
}

function onLoad() {
    let urlLink1 = "https://matrix.to/#/@arman458:matrix.org";
    let urlLink2 = "http://t.me/ArmanDaneshwork";
    let urlLink3 = "https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=armandaneshwork@gmail.com&body=my-text";
    switch (getMobileOperatingSystem()) {
        case 'Android':
            urlLink1 = "https://matrix.to/#/@arman458:matrix.org";
            urlLink2 = "http://t.me/ArmanDaneshwork";
            urlLink3 = "mailto:armandaneshwork@gmail.com";
            break;
        case 'iOS':
            urlLink1 = "https://matrix.to/#/@arman458:matrix.org";
            urlLink2 = "http://t.me/ArmanDaneshwork";
            urlLink3 = "mailto:armandaneshwork@gmail.com";
            break;
        default:
            break;
    }
    document.getElementById('yourLink1').setAttribute('href', urlLink1);
    document.getElementById('yourLink2').setAttribute('href', urlLink2);
    document.getElementById('yourLink3').setAttribute('href', urlLink3);
}

window.onload = onLoad;
/* end of footer btn*/
/* start of slider*/

document.addEventListener('DOMContentLoaded', function () {
    new Splide('#image-carousel', {
        perPage: 5,
        breakpoints: {
            1550: {
                perPage: 3,
            },
            760: {
                perPage: 2,
            },
            420: {
                perPage: 1,
            }
        },
    }).mount();
});

/* end of slider*/
/* start circle prograss bar*/

setTimeout(() => {
    let x = document.getElementsByName("circular-progress");
    let y = document.getElementsByName("value-container");
    const EndValues = [65, 75, 85];
    let speed = 15;
    for (let a = 0; a < EndValues.length; a++) {
        const progressBar = x[a];
        const valueContainer = y[a];
        let progressValue = 0;
        let progressEndValue = EndValues[a];
        let progress = setInterval(() => {
            progressValue++;
            valueContainer.textContent = `${progressValue}%`;
            progressBar.style.background = `conic-gradient(
      #DBA507 ${progressValue * 3.6}deg,
      #101A2B ${progressValue * 3.6}deg
  )`;
            if (progressValue == progressEndValue) {
                clearInterval(progress);
            }
        }, speed);
    }
}, 5000);
/*end circle prograss bar*/

/* start language btn*/

class language {
    constructor(btn, name, sub, l_title, about_me, info_t, info_a, degree_t, degree_a, con_t, r_title, card_t, card_a, progress_t, progress_t_c, footer_text) {
        this.btn = btn;
        this.name = name;
        this.sub = sub;
        this.l_title = l_title;
        this.about_me = about_me;
        this.info_t = info_t;
        this.info_a = info_a;
        this.degree_t = degree_t;
        this.degree_a = degree_a;
        this.con_t = con_t;
        this.r_title = r_title;
        this.card_t = card_t;
        this.card_a = card_a;
        this.progress_t = progress_t;
        this.progress_t_c = progress_t_c;
        this.footer_text = footer_text;
    }
}

let en = true;
const about_e = "I got my associate degree in 2017 and started to gain skills and experience as a freelancer in the field of logo design, icon, ui/ux, banner and sharp construction, WordPress template, exclusive template and content production, which some projects It has been placed in my projects category as a sample of my work. These activities led me to be interested in design and programming. My great interest in programming made me trying to always keep my information updated in the field of programming. I like problem solving and complex projects are interesting and fun for me.";
const about_f = "من مدرک کاردانی ناپوسته خود را در سال 1395 گرفته و شروع به کسب مهارت و تجربه به عنوان فریلنسر در زمینه طراحی لوگو ، آیکن ، ui/ux ، بنر و ساخت تیز، قالب وردپرس، قالب اختصاصی و تولید محتوا، که برخی از پروژه ها در دسته بندی پروژه های من به عنوان نمونه کارهای من قرار داده شده است.این فعالیت ها علاقه مندی من را به طراحی و برنامه نویسی سوق داد.علاقه زیاد من به برنامه نویسی باعث شد که سعی کنم همیشه اطلاعات خود را در حوزه برنامه نویسی به روز نگه دارم.حل مسئله را دوست دارم و پروژه هایی که پیچیدگی داشته باشد ، برایم جذاب و سرگرم کننده است.";
const card_e = ['i will be responsible for implementing visual elements that users see and interact within a web application, which makes my role crucial for the success of compeny business.', 'UX designers seek to develop and improve the quality interaction between the user and the company, while UI designers introduce the brands power and visual assets to users.', 'A well-designed logo or icon is the first point of identification of a software or web for customers and an important basis for branding a company.', 'SEO consists of several elements and its main goal is to show value to search engines that allows pages to rank high and reach the first page of search engines.'];
const card_f = ['به‌عنوان یک توسعه‌دهنده فرانت‌اند،من مسئول پیاده‌سازی عناصر بصری هستم که کاربران می‌بینند و در یک برنامه وب با هم تعامل دارند، که نقش من را برای موفقیت کسب‌وکار شرکت بسیار مهم می‌کند.', 'طراحان UX به دنبال توسعه و بهبود تعامل کیفیت بین کاربر و شرکت هستند، در حالی که طراحان UI قدرت و دارایی های بصری برند را به کاربران معرفی می کنند.', 'یک لوگو یا ایکن خوب طراحی شده اولین نقطه شناسایی یک نرم افزار یا وب برای مشتریان و پایه مهمی برای برندسازی یک شرکت است.', 'سئو از چندین عنصر تشکیل شده است و هدف اصلی آن نشان دادن ارزش به موتورهای جستجو است که به صفحات امکان می دهد رتبه بالایی داشته باشند و به صفحه اول موتورهای جستجو برسند.'];
const html_dir = document.getElementById("dir");
const html_btn = document.getElementById("btn");
const html_name = document.getElementById("name");
const html_sub = document.getElementsByName("sub");
const html_l_title = document.getElementsByName("l_title");
const html_about_me = document.getElementById("about_me");
const html_info_t = document.getElementsByName("info_t");
const html_info_a = document.getElementsByName("info_a");
const html_degree_t = document.getElementsByName("degree_t");
const html_degree_a = document.getElementsByName("degree_a");
const html_con_t = document.getElementsByName("con_t");
const html_r_title = document.getElementsByName("r_title");
const html_card_t = document.getElementsByName("card_t");
const html_card_a = document.getElementsByName("card_a");
const html_progress_t = document.getElementsByName("progress_t");
const html_progress_t_c = document.getElementsByName("progress_t_c");
const html_footer_text = document.getElementById("footer_text");
const english = new language("FA", "ARMAN DANESH", ['UI/UX Designer', 'Front-End Developer'], ['About me', 'information', 'Learning', 'Contact Me'], about_e, ['resident:', 'Age:', 'Military service:'], ['IRAN,Tehran', '24', 'It ended in 2022'], ['degree:', 'university name:', 'jquery:', 'laravel:', 'mysql:'], ['Associate Degree','University of Applied </br> Sciences & Technology'], ['Phone Number:', 'Telegram:', 'Gmail:'], ['what i offers', 'My Projects', 'Professional Skill', 'My Skill '], ['Front-end', 'Ui/Ux Designer', 'Logo Designer', 'SEO'], [card_e[0], card_e[1], card_e[2], card_e[3]], ['HTML5:', 'CSS:', 'JavaScript:', 'Bootstrap:','Github:', 'Figma & Xd:', 'PhotoShop:', 'Illustrator:', 'Wordpress:','SEO:'], ['Team Work:', 'Fast learner:', 'Creation:', ' innovation:'], "2023©Any copying of the template design, the content of my resume in any way will be prosecuted");
const farsi = new language("EN", "آرمان دانش", ['طراح UI/UX', 'برنامه نویس فرانت اند'], ['درباره من', 'مشخصات', 'درحال یادگیری', 'تماس با من'], about_f, ['مقیم:', 'سن:', 'خدمت سربازی:'], ['ایران،تهران', '24', 'در سال 1401 به پایان رسید'], ['مدرک:', 'نام دانشگاه:', 'جی کوئری:', 'لاراول:', 'mysql:'], ['کاردانی','مرکز اموزشی علمی </br> کاربردی'], [':شماره همراه', 'تلگرام:', 'ایمیل:'], ['خدماتی که من ارائه می دهم', 'پروزه های من', 'مهارتهای حرفه ای', 'مهارتهای من'], ['فرانت اند', 'طراح Ui/Ux', 'طراح لوگو', 'سئو'], [card_f[0], card_f[1], card_f[2], card_f[3]], ['HTML5:', 'CSS:', 'جاوا اسکریپت:', 'بوت استرپ:','Github:','Figma & Xd:', ':فتوشاپ:', 'ایلاستریتور:', 'وردپرس:','سئو'], ['کار گروهی:', 'یادگیری سریع:', 'خلاق:', ' نوآوری:'],"1402©هرگونه کپی برداری از طرح قالب, مطالب رزومه من به هر نحو، پیگرد قانونی دارد");
function lan() {
    if (en) {
        TimeLINE.to(".section", {opacity: 0, stagger: 0.25});
        setTimeout(() => {
            html_dir.style.direction = "rtl";
            html_btn.innerHTML = farsi.btn;
            html_name.innerHTML = farsi.name;
            html_sub[0].innerHTML = farsi.sub[0];
            html_sub[1].innerHTML = farsi.sub[1];
            html_l_title[0].innerHTML = farsi.l_title[0];
            html_l_title[1].innerHTML = farsi.l_title[1];
            html_l_title[2].innerHTML = farsi.l_title[2];
            html_l_title[3].innerHTML = farsi.l_title[3];
            html_about_me.innerHTML = farsi.about_me;
            html_info_t[0].innerHTML = farsi.info_t[0];
            html_info_t[1].innerHTML = farsi.info_t[1];
            html_info_t[2].innerHTML = farsi.info_t[2];
            html_info_a[0].innerHTML = farsi.info_a[0];
            html_info_a[1].innerHTML = farsi.info_a[1];
            html_info_a[2].innerHTML = farsi.info_a[2];
            html_degree_t[0].innerHTML = farsi.degree_t[0];
            html_degree_t[1].innerHTML = farsi.degree_t[1];
            html_degree_t[2].innerHTML = farsi.degree_t[2];
            html_degree_t[3].innerHTML = farsi.degree_t[3];
            html_degree_t[4].innerHTML = farsi.degree_t[4];
            html_degree_a[0].innerHTML = farsi.degree_a[0];
            html_degree_a[1].innerHTML = farsi.degree_a[1];
            html_con_t[0].innerHTML = farsi.con_t[0];
            html_con_t[1].innerHTML = farsi.con_t[1];
            html_con_t[2].innerHTML = farsi.con_t[2];
            html_r_title[0].innerHTML = farsi.r_title[0];
            html_r_title[1].innerHTML = farsi.r_title[1];
            html_r_title[2].innerHTML = farsi.r_title[2];
            html_r_title[3].innerHTML = farsi.r_title[3];
            html_card_t[0].innerHTML = farsi.card_t[0];
            html_card_t[1].innerHTML = farsi.card_t[1];
            html_card_t[2].innerHTML = farsi.card_t[2];
            html_card_t[3].innerHTML = farsi.card_t[3];
            html_card_a[0].innerHTML = farsi.card_a[0];
            html_card_a[1].innerHTML = farsi.card_a[1];
            html_card_a[2].innerHTML = farsi.card_a[2];
            html_card_a[3].innerHTML = farsi.card_a[3];
            html_progress_t[0].innerHTML = farsi.progress_t[0];
            html_progress_t[1].innerHTML = farsi.progress_t[1];
            html_progress_t[2].innerHTML = farsi.progress_t[2];
            html_progress_t[3].innerHTML = farsi.progress_t[3];
            html_progress_t[4].innerHTML = farsi.progress_t[4];
            html_progress_t[5].innerHTML = farsi.progress_t[5];
            html_progress_t[6].innerHTML = farsi.progress_t[6];
            html_progress_t[7].innerHTML = farsi.progress_t[7];
            html_progress_t[8].innerHTML = farsi.progress_t[8];
            html_progress_t[9].innerHTML = farsi.progress_t[9];
            html_progress_t_c[0].innerHTML = farsi.progress_t_c[0];
            html_progress_t_c[1].innerHTML = farsi.progress_t_c[1];
            html_progress_t_c[2].innerHTML = farsi.progress_t_c[2];
            html_progress_t_c[3].innerHTML = farsi.progress_t_c[3];
            html_footer_text.innerHTML = farsi.footer_text;
            en = false;
            TimeLINE.to(".section", {opacity: 1, stagger: 0.25});
            TimeLINE.fromTo(".text_left", {opacity: 0}, {opacity: 1, stagger: 0.2}, "-=1");
            TimeLINE.fromTo(".text_right", {opacity: 0}, {opacity: 1, stagger: 0.15}, "-=1");
        }, 1000);


    } else {
        TimeLINE.to(".section", {opacity: 0, stagger: 0.25});
        setTimeout(() => {
            html_dir.style.direction = "ltr";
            html_btn.innerHTML = english.btn;
            html_name.innerHTML = english.name;
            html_sub[0].innerHTML = english.sub[0];
            html_sub[1].innerHTML = english.sub[1];
            html_l_title[0].innerHTML = english.l_title[0];
            html_l_title[1].innerHTML = english.l_title[1];
            html_l_title[2].innerHTML = english.l_title[2];
            html_l_title[3].innerHTML = english.l_title[3];
            html_about_me.innerHTML = english.about_me;
            html_info_t[0].innerHTML = english.info_t[0];
            html_info_t[1].innerHTML = english.info_t[1];
            html_info_t[2].innerHTML = english.info_t[2];
            html_info_a[0].innerHTML = english.info_a[0];
            html_info_a[1].innerHTML = english.info_a[1];
            html_info_a[2].innerHTML = english.info_a[2];
            html_degree_t[0].innerHTML = english.degree_t[0];
            html_degree_t[1].innerHTML = english.degree_t[1];
            html_degree_t[2].innerHTML = english.degree_t[2];
            html_degree_t[3].innerHTML = english.degree_t[3];
            html_degree_t[4].innerHTML = english.degree_t[4];
            html_degree_a[0].innerHTML = english.degree_a[0];
            html_degree_a[1].innerHTML = english.degree_a[1];
            html_con_t[0].innerHTML = english.con_t[0];
            html_con_t[1].innerHTML = english.con_t[1];
            html_con_t[2].innerHTML = english.con_t[2];
            html_r_title[0].innerHTML = english.r_title[0];
            html_r_title[1].innerHTML = english.r_title[1];
            html_r_title[2].innerHTML = english.r_title[2];
            html_r_title[3].innerHTML = english.r_title[3];
            html_card_t[0].innerHTML = english.card_t[0];
            html_card_t[1].innerHTML = english.card_t[1];
            html_card_t[2].innerHTML = english.card_t[2];
            html_card_t[3].innerHTML = english.card_t[3];
            html_card_a[0].innerHTML = english.card_a[0];
            html_card_a[1].innerHTML = english.card_a[1];
            html_card_a[2].innerHTML = english.card_a[2];
            html_card_a[3].innerHTML = english.card_a[3];
            html_progress_t[0].innerHTML = english.progress_t[0];
            html_progress_t[1].innerHTML = english.progress_t[1];
            html_progress_t[2].innerHTML = english.progress_t[2];
            html_progress_t[3].innerHTML = english.progress_t[3];
            html_progress_t[4].innerHTML = english.progress_t[4];
            html_progress_t[5].innerHTML = english.progress_t[5];
            html_progress_t[6].innerHTML = english.progress_t[6];
            html_progress_t[7].innerHTML = english.progress_t[7];
            html_progress_t[8].innerHTML = english.progress_t[8];
            html_progress_t[9].innerHTML = english.progress_t[9];
            html_progress_t_c[0].innerHTML = english.progress_t_c[0];
            html_progress_t_c[1].innerHTML = english.progress_t_c[1];
            html_progress_t_c[2].innerHTML = english.progress_t_c[2];
            html_progress_t_c[3].innerHTML = english.progress_t_c[3];
            html_footer_text.innerHTML = english.footer_text;
            en = true;
            TimeLINE.to(".section", {opacity: 1, stagger: 0.25});
            TimeLINE.fromTo(".text_left", {opacity: 0}, {opacity: 1, stagger: 0.2}, "-=1");
            TimeLINE.fromTo(".text_right", {opacity: 0}, {opacity: 1, stagger: 0.15}, "-=1");
        }, 1000);


    }
}

/* end language btn*/
