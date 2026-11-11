/**
 * Portfolio content (EN + FA)
 * --------------------------
 * Single source of truth for all UI copy.
 * Edit this file to update about text, jobs, skills, projects, etc.
 * Shape is defined by `Translations` in `lib/types.ts`.
 */

import type { Translations, Locale } from "./types";
const portfolioStartYear = 2023;
const portfolioStartYearFa = 1402;

const currentYear = new Date().getFullYear();
const currentYearFa = currentYear - 621;

export const translations: Record<Locale, Translations> = {

  // =========================================================================
  // English
  // =========================================================================

  en: {
    languageButton: "FA",
    name: "ARMAN DANESH",
    roles: ["Front-End Developer", "Full-Stack Developer"],
    about: {
      title: "About me",
      description:
        "Frontend Developer with 4+ years of experience building scalable, responsive, and high-performance web applications using React, Vue, Next.js, and TypeScript. Experienced in reusable component architectures, REST APIs & WebSockets, performance optimization, and collaborating with cross-functional teams. Passionate about clean, maintainable code and products that are fast, accessible, and scalable.",
    },
    information: {
      title: "Information",
      items: [
        { label: "Location", value: "Tehran, Iran" },
        { label: "Languages", value: "English, Persian, German (A2)" },
        { label: "Email", value: "armandaneshwork@gmail.com" },
      ],
    },
    education: {
      title: "Education",
      degree: "B.Sc. Computer Engineering — Programming",
      university: "Islamic Azad University, Tehran Markazi",
    },
    learning: {
      title: "Focus Areas",
      items: [
        { label: "Nest.js", level: 70 },
        { label: "Nuxt.js", level: 75 },
        { label: "TypeScript", level: 90 },
      ],
    },
    contact: {
      title: "Contact Me",
      phone: "09911537923",
      telegram: "@ArmanDaneshWork",
      email: "armandaneshwork@gmail.com",
    },
    skills: {
      title: "Professional Skills",
      softTitle: "Soft Skills",
      technical: [
        { name: "Next.js", level: 90 },
        { name: "React.js", level: 92 },
        { name: "Vue.js", level: 85 },
        { name: "Nuxt.js", level: 75 },
        { name: "TypeScript", level: 90 },
        { name: "Zustand", level: 85 },
        { name: "Tailwind CSS", level: 92 },
        { name: "Bootstrap", level: 88 },
        { name: "Material UI", level: 80 },
        { name: "SASS", level: 88 },
        { name: "Node.js", level: 75 },
        { name: "Express", level: 72 },
        { name: "Nest.js", level: 70 },
        { name: "SEO", level: 80 },
        { name: "Figma", level: 82 },
        { name: "GitHub / CI-CD", level: 85 },
      ],
      soft: [
        { name: "Team Collaboration", level: 88 },
        { name: "Fast Learner", level: 92 },
        { name: "Creativity", level: 90 },
        { name: "Innovation", level: 88 },
      ],
    },
    experience: {
      title: "Experience",
      items: [
        {
          company: "Sepahan Hamrah",
          role: "Full-Stack Developer",
          period: "Sep 2026 – Present",
          location: "Tehran",
          bullets: [
            "Building and improving the Beroon platform: Rider App (user panel) and Admin Panel.",
            "Redesigning and migrating a monolithic architecture to microservices for better scalability and maintainability.",
            "Designing SEO-focused landing pages and improving UI/UX across platform sections.",
          ],
        },
        {
          company: "Pariz Hamkar",
          role: "Front-End Developer",
          period: "Dec 2025 – Present",
          location: "Tehran",
          bullets: [
            "Built Kimiya Kala marketplace with Next.js, TypeScript, Tailwind CSS & Zustand.",
            "Developed 20Card User Panel with React, TypeScript, Material UI & Zustand.",
            "Built 20Card Admin Panel with Vue.js & Bootstrap.",
            "Developed Best Unify dynamic e-commerce front end with PHP, jQuery & Bootstrap.",
          ],
        },
        {
          company: "Guten Learn",
          role: "Front-End Developer",
          period: "Jan 2026 – Present",
          location: "Tehran",
          bullets: [
            "Interactive language-learning app for teaching English to German learners using React, TypeScript, Tailwind CSS & REST API.",
            "Focus on responsive design, reusable components, and an engaging learning experience.",
          ],
        },
        {
          company: "Tavana Brokerage",
          role: "Front-End Developer & UI/UX Designer",
          period: "Jan 2024 – Dec 2025",
          location: "Tehran",
          bullets: [
            "Designed and developed ta1app.com with Figma, Blade, Sass, jQuery & Bootstrap.",
            "Built news.ta1app.com with React.js, Sass, Bootstrap & RESTful API.",
            "Created personal portfolio (tavanaPortfolio) and LMS platform with React, TypeScript, Sass & TailwindCSS.",
            "Developed alooborse.com with Next.js, TypeScript, Sass & TailwindCSS.",
            "Designed and implemented an AI widget with TypeScript & Sass.",
          ],
        },
        {
          company: "Novin Investment Advisor",
          role: "Front-End Developer",
          period: "Aug 2023 – Jan 2024",
          location: "Tehran",
          bullets: [
            "Designed and developed responsive, mobile-friendly websites.",
            "Optimized UI/UX and built web apps with jQuery, Sass & Blade.",
            "Collaborated with software and graphic design teams on shared projects.",
          ],
        },
        {
          company: "Honam Maharat",
          role: "Designer & Graphic Artist",
          period: "Apr 2017 – Apr 2018",
          location: "Arak, Markazi",
          bullets: [
            "Designed and developed websites for companies and professional clients.",
            "Improved performance and page load speed.",
            "Designed and implemented UI for mobile applications.",
          ],
        },
      ],
    },
    services: {
      title: "What I Offer",
      items: [
        {
          title: "Front-End Development",
          description:
            "Scalable, responsive interfaces with React, Next.js, Vue and TypeScript — component architecture, state management, and API integration.",
          icon: "code",
        },
        {
          title: "UI Implementation",
          description:
            "Pixel-accurate, accessible UIs from design systems using Tailwind, Material UI, Bootstrap and SASS.",
          icon: "palette",
        },
        {
          title: "Performance & SEO",
          description:
            "Faster load times, better Core Web Vitals, and search-friendly markup for higher engagement.",
          icon: "search",
        },
        {
          title: "Dashboards & Panels",
          description:
            "Admin and user panels with theming, real-time data (WebSocket), and clean, maintainable structure.",
          icon: "pen",
        },
      ],
    },
    projects: {
      title: "Featured Work",
      items: [
        {
          title: "Beroon App",
          description:
            "Full-stack platform work: Rider App, Admin Panel, microservices migration, SEO landings, and UI/UX improvements.",
          technologies: ["Full-Stack", "Microservices", "PWA", "SEO"],
          liveUrl: "https://app.beroon.app",
        },
        {
          title: "20Card User Panel (PWA)",
          description:
            "New dedicated user panel with Tailwind, Framer Motion, TypeScript, and PWA support.",
          technologies: ["TypeScript", "Tailwind", "Framer Motion", "PWA"],
          liveUrl: "https://panel.20card.ir",
        },
        {
          title: "20Card Landing",
          description:
            "Next.js landing with SEO, dynamic pages, Zustand, Tailwind, Framer Motion, and PWA.",
          technologies: ["Next.js", "TypeScript", "Zustand", "Tailwind", "PWA"],
          liveUrl: "https://newlanding.20card.ir/fa",
        },
        {
          title: "Kimiya Kala",
          description:
            "Full e-commerce store with Next.js, Zustand, GSAP/Framer Motion, NextAuth, and PWA.",
          technologies: ["Next.js", "TypeScript", "Tailwind", "Zustand", "PWA"],
          liveUrl: "https://kimiyakala.ir",
        },
        {
          title: "20Card Admin Panel",
          description: "Comprehensive admin panel with Vue.js, Bootstrap Vue, and Axios.",
          technologies: ["Vue.js", "Bootstrap"],
          liveUrl: "https://adminpanel.20card.ir",
        },
        {
          title: "20Card User Panel",
          description:
            "Dedicated dual-section user panel with React, TypeScript, Material UI, and Axios error handling.",
          technologies: ["React", "TypeScript", "Material UI", "Zustand"],
          liveUrl: "https://userpanel.20card.ir",
        },
        {
          title: "Best Unify",
          description:
            "Dynamic e-commerce site with PHP, Bootstrap, API integration, and jQuery/AJAX.",
          technologies: ["PHP", "jQuery", "Bootstrap", "API"],
          liveUrl: "https://bestunify.com",
        },
        {
          title: "Tavana Portfolio",
          description: "Portfolio site designed and built with React, TypeScript, Bootstrap & Sass.",
          technologies: ["React", "TypeScript", "Bootstrap", "Sass"],
          liveUrl: "https://portfolio.ta1app.com",
        },
        {
          title: "AI Widget",
          description: "Customizable AI widget with fully customizable styles in TypeScript.",
          technologies: ["TypeScript", "Sass"],
          liveUrl: "https://gpt.ta1app.com",
        },
        {
          title: "Khat Moghaddam News",
          description: "News website with React, Bootstrap & Sass — UI/UX by me.",
          technologies: ["React", "Bootstrap", "Sass"],
          liveUrl: "https://news.ta1app.com",
        },
        {
          title: "Tavana App",
          description:
            "Iran stock-market platform (tweets, funds, options, courses, and more) with Blade, Sass, Bootstrap & jQuery.",
          technologies: ["Blade", "Sass", "Bootstrap", "JavaScript"],
          liveUrl: "https://ta1app.com",
        },
        {
          title: "Novin Investment",
          description:
            "Company website with Blade, Sass, JavaScript, jQuery & Bootstrap 5.3 and themeable colors.",
          technologies: ["Blade", "Sass", "Bootstrap", "jQuery"],
        },
        {
          title: "This Portfolio",
          description:
            "Live bilingual resume/portfolio designed in Figma and built with modern front-end tools.",
          technologies: ["TypeScript", "Sass", "Bootstrap", "HTML5"],
          liveUrl: "https://my-resume.armandaneshwork.workers.dev/",
        },
      ],
    },
    liveProjects: {
      title: "Live Projects",
      items: [
        { name: "Beroon App", url: "https://app.beroon.app" },
        { name: "20Card Panel PWA", url: "https://panel.20card.ir" },
        { name: "20Card Landing", url: "https://newlanding.20card.ir/fa" },
        { name: "Kimiya Kala", url: "https://kimiyakala.ir" },
        { name: "20Card User", url: "https://userpanel.20card.ir" },
        { name: "20Card Admin", url: "https://adminpanel.20card.ir" },
        { name: "Best Unify", url: "https://bestunify.com" },
        { name: "Tavana Portfolio", url: "https://portfolio.ta1app.com" },
        { name: "AI Widget", url: "https://gpt.ta1app.com" },
        { name: "Tavana", url: "https://ta1app.com" },
        { name: "Tavana News", url: "https://news.ta1app.com" },
        { name: "This Portfolio", url: "https://my-resume.armandaneshwork.workers.dev/" },
      ],
    },
    footer: `© ${portfolioStartYear}–${currentYear} Arman Danesh. All rights reserved.`,
    welcome: "Welcome to my portfolio",
  },

  // =========================================================================
  // Persian (RTL)
  // =========================================================================

  fa: {
    languageButton: "EN",
    name: "آرمان دانش",
    roles: ["توسعه‌دهنده فرانت‌اند", "توسعه‌دهنده فول‌استک"],
    about: {
      title: "درباره من",
      description:
        "توسعه‌دهنده فرانت‌اند با بیش از ۴ سال تجربه در ساخت اپلیکیشن‌های وب مقیاس‌پذیر، واکنش‌گرا و با عملکرد بالا با React، Vue، Next.js و TypeScript. مسلط به معماری کامپوننت، یکپارچه‌سازی REST و WebSocket، بهینه‌سازی عملکرد و همکاری با تیم‌های چندتخصصی. علاقه‌مند به کد تمیز و قابل نگهداری و محصولاتی سریع، دسترس‌پذیر و مقیاس‌پذیر.",
    },
    information: {
      title: "اطلاعات",
      items: [
        { label: "محل سکونت", value: "تهران، ایران" },
        { label: "زبان‌ها", value: "انگلیسی، فارسی، آلمانی (A2)" },
        { label: "ایمیل", value: "armandaneshwork@gmail.com" },
      ],
    },
    education: {
      title: "تحصیلات",
      degree: "کارشناسی مهندسی کامپیوتر — برنامه‌نویسی",
      university: "دانشگاه آزاد اسلامی تهران مرکزی",
    },
    learning: {
      title: "حوزه‌های تمرکز",
      items: [
        { label: "Nest.js", level: 70 },
        { label: "Nuxt.js", level: 75 },
        { label: "TypeScript", level: 90 },
      ],
    },
    contact: {
      title: "تماس با من",
      phone: "۰۹۹۱۱۵۳۷۹۲۳",
      telegram: "@ArmanDaneshWork",
      email: "armandaneshwork@gmail.com",
    },
    skills: {
      title: "مهارت‌های حرفه‌ای",
      softTitle: "مهارت‌های نرم",
      technical: [
        { name: "Next.js", level: 90 },
        { name: "React.js", level: 92 },
        { name: "Vue.js", level: 85 },
        { name: "Nuxt.js", level: 75 },
        { name: "TypeScript", level: 90 },
        { name: "Zustand", level: 85 },
        { name: "Tailwind CSS", level: 92 },
        { name: "Bootstrap", level: 88 },
        { name: "Material UI", level: 80 },
        { name: "SASS", level: 88 },
        { name: "Node.js", level: 75 },
        { name: "Express", level: 72 },
        { name: "Nest.js", level: 70 },
        { name: "سئو (SEO)", level: 80 },
        { name: "Figma", level: 82 },
        { name: "GitHub / CI-CD", level: 85 },
      ],
      soft: [
        { name: "کار گروهی", level: 88 },
        { name: "یادگیری سریع", level: 92 },
        { name: "خلاقیت", level: 90 },
        { name: "نوآوری", level: 88 },
      ],
    },
    experience: {
      title: "سوابق کاری",
      items: [
        {
          company: "سپاهان همراه",
          role: "توسعه‌دهنده فول‌استک",
          period: "مهر ۱۴۰۵ – اکنون",
          location: "تهران",
          bullets: [
            "توسعه و بهبود پلتفرم بیرون: Rider App (پنل کاربر) و پنل مدیریت.",
            "بازطراحی و مهاجرت از ساختار یکپارچه به معماری Microservices برای افزایش مقیاس‌پذیری و نگهداری.",
            "طراحی و توسعه صفحات لندینگ با تمرکز بر سئو و بهبود UI/UX در بخش‌های مختلف پلتفرم.",
          ],
        },
        {
          company: "پاریز همکار",
          role: "توسعه‌دهنده فرانت‌اند",
          period: "آذر ۱۴۰۴ – اکنون",
          location: "تهران",
          bullets: [
            "توسعه فرانت‌اند سایت kimiyakala با Next.js، TypeScript، Zustand و Tailwind.",
            "توسعه فرانت‌اند userpanel.20card با React، TypeScript، Zustand و Material UI.",
            "توسعه فرانت‌اند adminpanel.20card با Vue.js و Bootstrap.",
            "توسعه فرانت‌اند سایت bestunify با PHP، jQuery و Bootstrap.",
          ],
        },
        {
          company: "Guten Learn",
          role: "توسعه‌دهنده فرانت‌اند",
          period: "دی ۱۴۰۴ – اکنون",
          location: "تهران",
          bullets: [
            "اپلیکیشن یادگیری زبان انگلیسی برای زبان‌آموزان آلمانی با React، TypeScript، Tailwind و REST API.",
            "تمرکز بر طراحی واکنش‌گرا، کامپوننت‌های قابل استفاده مجدد و تجربه یادگیری جذاب.",
          ],
        },
        {
          company: "کارگزاری توانا",
          role: "توسعه‌دهنده فرانت‌اند و طراح UI/UX",
          period: "دی ۱۴۰۲ – آذر ۱۴۰۴",
          location: "تهران",
          bullets: [
            "طراحی و توسعه سایت ta1app.com با Figma، Blade، Sass، jQuery و Bootstrap.",
            "طراحی و توسعه news.ta1app.com با React.js، Sass، Bootstrap و RESTful API.",
            "طراحی و توسعه نمونه‌کار شخصی و پلتفرم آموزشی LMS با React، TypeScript، Sass و TailwindCSS.",
            "طراحی و توسعه alooborse.com با Next.js، TypeScript، Sass و TailwindCSS.",
            "طراحی و پیاده‌سازی ویجت هوش مصنوعی با TypeScript و Sass.",
          ],
        },
        {
          company: "مشاور تامین سرمایه نوین",
          role: "توسعه‌دهنده فرانت‌اند",
          period: "مرداد ۱۴۰۲ – دی ۱۴۰۲",
          location: "تهران",
          bullets: [
            "طراحی و توسعه وب‌سایت‌های واکنش‌گرا و قابل استفاده روی تلفن همراه.",
            "بهینه‌سازی رابط کاربری و تجربه کاربری وب‌سایت‌ها.",
            "توسعه و پیاده‌سازی نرم‌افزارهای تحت وب با jQuery، Sass و Blade.",
            "تجربه در پروژه‌های مشترک با تیم‌های توسعه نرم‌افزار و طراحی گرافیکی.",
          ],
        },
        {
          company: "هونام مهارت",
          role: "طراح و گرافیست",
          period: "فروردین ۱۳۹۶ – فروردین ۱۳۹۷",
          location: "اراک، مرکزی",
          bullets: [
            "طراحی و توسعه وب‌سایت برای شرکت‌ها و مشتریان حرفه‌ای.",
            "بهبود عملکرد و بالا بردن سرعت بارگذاری صفحات وب‌سایت.",
            "طراحی و پیاده‌سازی رابط کاربری برای برنامه‌های تلفن همراه.",
          ],
        },
      ],
    },
    services: {
      title: "خدماتی که ارائه می‌دهم",
      items: [
        {
          title: "توسعه فرانت‌اند",
          description:
            "رابط‌های مقیاس‌پذیر و واکنش‌گرا با React، Next.js، Vue و TypeScript — معماری کامپوننت، مدیریت state و یکپارچه‌سازی API.",
          icon: "code",
        },
        {
          title: "پیاده‌سازی UI",
          description:
            "رابط‌های دقیق و دسترس‌پذیر بر اساس سیستم طراحی با Tailwind، Material UI، Bootstrap و SASS.",
          icon: "palette",
        },
        {
          title: "عملکرد و سئو",
          description:
            "بارگذاری سریع‌تر، بهبود Core Web Vitals و نشانه‌گذاری مناسب موتورهای جستجو.",
          icon: "search",
        },
        {
          title: "داشبورد و پنل",
          description:
            "پنل ادمین و کاربر با تم، داده بلادرنگ (WebSocket) و ساختار تمیز و قابل نگهداری.",
          icon: "pen",
        },
      ],
    },
    projects: {
      title: "نمونه‌کارها",
      items: [
        {
          title: "بیرون اپ",
          description:
            "کار فول‌استک روی پلتفرم: پنل کاربر، پنل ادمین، مهاجرت به میکروسرویس، لندینگ سئو و بهبود UI/UX.",
          technologies: ["Full-Stack", "Microservices", "PWA", "SEO"],
          liveUrl: "https://app.beroon.app",
        },
        {
          title: "پنل کاربری ۲۰کارت (PWA)",
          description:
            "نسخه جدید پنل کاربری اختصاصی با Tailwind، Framer Motion، TypeScript و پشتیبانی PWA.",
          technologies: ["TypeScript", "Tailwind", "Framer Motion", "PWA"],
          liveUrl: "https://panel.20card.ir",
        },
        {
          title: "لندینگ ۲۰کارت",
          description:
            "لندینگ با Next.js، سئو، صفحات پویا، Zustand، Tailwind، Framer Motion و PWA.",
          technologies: ["Next.js", "TypeScript", "Zustand", "Tailwind", "PWA"],
          liveUrl: "https://newlanding.20card.ir/fa",
        },
        {
          title: "کیمیا کالا",
          description:
            "فروشگاه اینترنتی کامل با Next.js، Zustand، انیمیشن GSAP/Framer Motion، NextAuth و PWA.",
          technologies: ["Next.js", "TypeScript", "Tailwind", "Zustand", "PWA"],
          liveUrl: "https://kimiyakala.ir",
        },
        {
          title: "پنل ادمین ۲۰کارت",
          description: "پنل مدیریت جامع با Vue.js، Bootstrap Vue و Axios.",
          technologies: ["Vue.js", "Bootstrap"],
          liveUrl: "https://adminpanel.20card.ir",
        },
        {
          title: "پنل کاربری ۲۰کارت",
          description:
            "پنل کاربری اختصاصی دو بخشی با React، TypeScript، Material UI و مدیریت خطای Axios.",
          technologies: ["React", "TypeScript", "Material UI", "Zustand"],
          liveUrl: "https://userpanel.20card.ir",
        },
        {
          title: "Best Unify",
          description:
            "فروشگاه اینترنتی پویا با PHP، Bootstrap، API و درخواست‌های ناهمگام jQuery/AJAX.",
          technologies: ["PHP", "jQuery", "Bootstrap", "API"],
          liveUrl: "https://bestunify.com",
        },
        {
          title: "سبدگردان توانا",
          description: "سایت سبدگردان با React، TypeScript، Bootstrap و Sass — طراحی UI/UX توسط من.",
          technologies: ["React", "TypeScript", "Bootstrap", "Sass"],
          liveUrl: "https://portfolio.ta1app.com",
        },
        {
          title: "ویجت هوش مصنوعی",
          description: "ویجت هوش مصنوعی با قابلیت شخصی‌سازی کامل استایل‌ها در TypeScript.",
          technologies: ["TypeScript", "Sass"],
          liveUrl: "https://gpt.ta1app.com",
        },
        {
          title: "اخبار انتشارات خط مقدم",
          description: "وب‌سایت اخبار با React، Bootstrap و Sass — طراحی UI/UX توسط من.",
          technologies: ["React", "Bootstrap", "Sass"],
          liveUrl: "https://news.ta1app.com",
        },
        {
          title: "توانآپ",
          description:
            "پلتفرم تخصصی بورس ایران با Blade، Sass، Bootstrap و jQuery.",
          technologies: ["Blade", "Sass", "Bootstrap", "JavaScript"],
          liveUrl: "https://ta1app.com",
        },
        {
          title: "تامین سرمایه نوین",
          description:
            "سایت شرکت با Blade، Sass، JavaScript، jQuery و Bootstrap 5.3 و قابلیت تغییر رنگ‌ها.",
          technologies: ["Blade", "Sass", "Bootstrap", "jQuery"],
        },
        {
          title: "این پورتفولیو",
          description:
            "رزومه زنده دوزبانه؛ طراحی UI/UX در Figma و پیاده‌سازی با ابزارهای مدرن فرانت‌اند.",
          technologies: ["TypeScript", "Sass", "Bootstrap", "HTML5"],
          liveUrl: "https://my-resume.armandaneshwork.workers.dev/",
        },
      ],
    },
    liveProjects: {
      title: "پروژه‌های زنده",
      items: [
        { name: "بیرون اپ", url: "https://app.beroon.app" },
        { name: "پنل PWA ۲۰کارت", url: "https://panel.20card.ir" },
        { name: "لندینگ ۲۰کارت", url: "https://newlanding.20card.ir/fa" },
        { name: "کیمیا کالا", url: "https://kimiyakala.ir" },
        { name: "۲۰کارت کاربر", url: "https://userpanel.20card.ir" },
        { name: "۲۰کارت ادمین", url: "https://adminpanel.20card.ir" },
        { name: "Best Unify", url: "https://bestunify.com" },
        { name: "سبدگردان توانا", url: "https://portfolio.ta1app.com" },
        { name: "ویجت AI", url: "https://gpt.ta1app.com" },
        { name: "توانا", url: "https://ta1app.com" },
        { name: "اخبار توانا", url: "https://news.ta1app.com" },
        { name: "این پورتفولیو", url: "https://my-resume.armandaneshwork.workers.dev/" },
      ],
    },
    footer: `${portfolioStartYearFa}–${currentYearFa}© آرمان دانش. تمامی حقوق محفوظ است.`,
    welcome: "به پورتفولیوی من خوش آمدید",
  },
};
