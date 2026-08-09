import type { Translations, Locale } from "./types";

export const translations: Record<Locale, Translations> = {
  en: {
    languageButton: "FA",
    name: "ARMAN DANESH",
    roles: ["Front-End Developer", "UI/UX Enthusiast"],
    about: {
      title: "About me",
      description:
        "Frontend Developer with 3+ years of experience building scalable, responsive, and high-performance web applications using React, Vue, Next.js, and TypeScript. Experienced in reusable component architectures, REST APIs & WebSockets, performance optimization, and collaborating with cross-functional teams. Passionate about clean, maintainable code and products that are fast, accessible, and scalable.",
    },
    information: {
      title: "Information",
      items: [
        { label: "Location", value: "Tehran, Iran" },
        { label: "Languages", value: "English, Persian" },
        { label: "Email", value: "armandaneshwork@gmail.com" },
      ],
    },
    education: {
      title: "Education",
      degree: "Software Programmer",
      university: "Islamic Azad University, Tehran",
    },
    learning: {
      title: "Focus Areas",
      items: [
        { label: "Mongo", level: 90 },
        { label: "TypeScript", level: 90 },
        { label: "Nest.js", level: 70 },
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
        { name: "TypeScript", level: 90 },
        { name: "Redux", level: 82 },
        { name: "Zustand", level: 85 },
        { name: "Tailwind CSS", level: 92 },
        { name: "Bootstrap", level: 88 },
        { name: "Material UI", level: 80 },
        { name: "SASS", level: 88 },
        { name: "Node.js", level: 75 },
        { name: "Nest.js", level: 70 },
        { name: "GitHub / CI-CD", level: 85 },
        { name: "REST & WebSocket", level: 88 },
        { name: "UI Design", level: 82 },
      ],
      soft: [
        { name: "Team Collaboration", level: 88 },
        { name: "Fast Learner", level: 92 },
        { name: "Problem Solving", level: 90 },
        { name: "Code Quality", level: 88 },
      ],
    },
    experience: {
      title: "Experience",
      items: [
        {
          company: "Pariz Hamkar",
          role: "Front-End Developer",
          period: "Dec 2025 – Present",
          location: "Tehran",
          bullets: [
            "Built Kimiya Kala marketplace with Next.js, TypeScript, Tailwind CSS & Zustand — scalable, responsive UI with efficient global state.",
            "Developed 20Card User Panel with React, TypeScript, Material UI & Redux, including dual UI themes and dynamic theme switching.",
            "Built 20Card Admin Panel with Vue.js & Bootstrap for a fast, maintainable management interface.",
          ],
        },
        {
          company: "Guten Learn",
          role: "Front-End Developer (Personal Project)",
          period: "Dec 2025 – Present",
          bullets: [
            "Interactive language-learning app for teaching English to German learners using React, TypeScript, Tailwind CSS & REST API.",
            "Focus on responsive design, reusable components, and an engaging learning experience.",
          ],
        },
        {
          company: "Tavana Financial Group",
          role: "Front-End Developer",
          period: "Oct 2023 – Dec 2025",
          location: "Tehran",
          bullets: [
            "Built responsive apps with React, TypeScript, Tailwind, Sass, REST API & WebSocket (ta1app, news, klasto, classup, alooborse).",
            "Created selling module with TypeScript, Sass & REST API and dynamic modals (gpt.ta1app.com).",
            "Collaborated with UX/UI designers, conducted code reviews, and optimized performance & SEO.",
          ],
        },
        {
          company: "Novin IC",
          role: "Front-End Developer",
          period: "Jun 2023 – Dec 2023",
          location: "Tehran",
          bullets: [
            "Developed responsive web apps with HTML, CSS & JavaScript.",
            "Collaborated with designers, optimized load times, cross-browser testing, and API integration.",
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
          title: "Kimiya Kala",
          description: "Online marketplace with scalable UI and global state management.",
          technologies: ["Next.js", "TypeScript", "Tailwind", "Zustand"],
          liveUrl: "https://kimiyakala.ir",
        },
        {
          title: "20Card User Panel",
          description: "Responsive user panel with dual themes and dynamic theme switching.",
          technologies: ["React", "TypeScript", "Material UI", "Redux"],
          liveUrl: "https://userpanel.20card.ir",
        },
        {
          title: "20Card Admin Panel",
          description: "Fast admin dashboard built with Vue and Bootstrap.",
          technologies: ["Vue.js", "Bootstrap"],
          liveUrl: "https://adminpanel.20card.ir",
        },
        {
          title: "Tavana App",
          description: "Financial group web application (ta1app.com).",
          technologies: ["Blade", "Sass", "Bootstrap", "JavaScript"],
          liveUrl: "https://ta1app.com",
        },
        {
          title: "Tavana News",
          description: "News platform with React and REST API.",
          technologies: ["React", "Sass", "Bootstrap", "REST"],
          liveUrl: "https://news.ta1app.com",
        },
        {
          title: "Best Unify",
          description: "Live product platform.",
          technologies: ["Front-End"],
          liveUrl: "https://bestunify.com",
        },
        {
          title: "Novin IB",
          description: "Company website and interfaces.",
          technologies: ["HTML", "CSS", "JavaScript"],
          liveUrl: "https://novinib.com",
        },
        {
          title: "Guten Learn",
          description: "Language learning app for English → German learners.",
          technologies: ["React", "TypeScript", "Tailwind", "REST"],
        },
      ],
    },
    liveProjects: {
      title: "Live Projects",
      items: [
        { name: "Kimiya Kala", url: "https://kimiyakala.ir" },
        { name: "20Card User", url: "https://userpanel.20card.ir" },
        { name: "20Card Admin", url: "https://adminpanel.20card.ir" },
        { name: "Best Unify", url: "https://bestunify.com" },
        { name: "Tavana", url: "https://ta1app.com" },
        { name: "Tavana News", url: "https://news.ta1app.com" },
        { name: "Novin IB", url: "https://novinib.com" },
        { name: "This Portfolio", url: "https://arman-danesh.github.io/my-resume" },
      ],
    },
    footer: "© 2026 Arman Danesh. All rights reserved.",
    welcome: "Welcome to my portfolio",
  },
  fa: {
    languageButton: "EN",
    name: "آرمان دانش",
    roles: ["توسعه‌دهنده فرانت‌اند", "علاقه‌مند به UI/UX"],
    about: {
      title: "درباره من",
      description:
        "توسعه‌دهنده فرانت‌اند با بیش از ۳ سال تجربه در ساخت اپلیکیشن‌های وب مقیاس‌پذیر، واکنش‌گرا و با عملکرد بالا با React، Vue، Next.js و TypeScript. مسلط به معماری کامپوننت، یکپارچه‌سازی REST و WebSocket، بهینه‌سازی عملکرد و همکاری با تیم‌های چندتخصصی. علاقه‌مند به کد تمیز و قابل نگهداری و محصولاتی سریع، دسترس‌پذیر و مقیاس‌پذیر.",
    },
    information: {
      title: "اطلاعات",
      items: [
        { label: "محل سکونت", value: "تهران، ایران" },
        { label: "زبان‌ها", value: "انگلیسی، فارسی" },
        { label: "ایمیل", value: "armandaneshwork@gmail.com" },
      ],
    },
    education: {
      title: "تحصیلات",
      degree: "برنامه‌نویس نرم‌افزار",
      university: "دانشگاه آزاد اسلامی، تهران",
    },
    learning: {
      title: "حوزه‌های تمرکز",
      items: [
        { label: "Mongo", level: 90 },
        { label: "TypeScript", level: 90 },
        { label: "Nest.js", level: 70 },
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
        { name: "TypeScript", level: 90 },
        { name: "Redux", level: 82 },
        { name: "Zustand", level: 85 },
        { name: "Tailwind CSS", level: 92 },
        { name: "Bootstrap", level: 88 },
        { name: "Material UI", level: 80 },
        { name: "SASS", level: 88 },
        { name: "Node.js", level: 75 },
        { name: "Nest.js", level: 70 },
        { name: "GitHub / CI-CD", level: 85 },
        { name: "REST و WebSocket", level: 88 },
        { name: "طراحی UI", level: 82 },
      ],
      soft: [
        { name: "کار تیمی", level: 88 },
        { name: "یادگیری سریع", level: 92 },
        { name: "حل مسئله", level: 90 },
        { name: "کیفیت کد", level: 88 },
      ],
    },
    experience: {
      title: "سوابق کاری",
      items: [
        {
          company: "پریز همکار",
          role: "توسعه‌دهنده فرانت‌اند",
          period: "آذر ۱۴۰۴ – اکنون",
          location: "تهران",
          bullets: [
            "ساخت مارکت‌پلیس کیمیا کالا با Next.js، TypeScript، Tailwind و Zustand — رابط مقیاس‌پذیر و مدیریت state کارآمد.",
            "پنل کاربری ۲۰کارت با React، TypeScript، Material UI و Redux همراه با دو تم و تعویض پویای تم.",
            "پنل ادمین ۲۰کارت با Vue.js و Bootstrap برای رابط مدیریتی سریع و قابل نگهداری.",
          ],
        },
        {
          company: "Guten Learn",
          role: "توسعه‌دهنده فرانت‌اند (پروژه شخصی)",
          period: "آذر ۱۴۰۴ – اکنون",
          bullets: [
            "اپلیکیشن یادگیری زبان انگلیسی برای زبان‌آموزان آلمانی با React، TypeScript، Tailwind و REST API.",
            "تمرکز بر طراحی واکنش‌گرا، کامپوننت‌های قابل استفاده مجدد و تجربه یادگیری جذاب.",
          ],
        },
        {
          company: "گروه مالی توانا",
          role: "توسعه‌دهنده فرانت‌اند",
          period: "مهر ۱۴۰۲ – آذر ۱۴۰۴",
          location: "تهران",
          bullets: [
            "اپ‌های واکنش‌گرا با React، TypeScript، Tailwind، Sass، REST و WebSocket (ta1app، news، klasto، classup، alooborse).",
            "ماژول فروش با TypeScript، Sass و REST و مودال‌های پویا (gpt.ta1app.com).",
            "همکاری با طراحان UX/UI، بازبینی کد و بهینه‌سازی عملکرد و سئو.",
          ],
        },
        {
          company: "نوین آی‌سی",
          role: "توسعه‌دهنده فرانت‌اند",
          period: "خرداد ۱۴۰۲ – آذر ۱۴۰۲",
          location: "تهران",
          bullets: [
            "توسعه وب‌اپ‌های واکنش‌گرا با HTML، CSS و JavaScript.",
            "همکاری با طراحان، بهینه‌سازی زمان بارگذاری، تست چندمرورگره و یکپارچه‌سازی API.",
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
          title: "کیمیا کالا",
          description: "مارکت‌پلیس آنلاین با UI مقیاس‌پذیر و مدیریت state سراسری.",
          technologies: ["Next.js", "TypeScript", "Tailwind", "Zustand"],
          liveUrl: "https://kimiyakala.ir",
        },
        {
          title: "پنل کاربری ۲۰کارت",
          description: "پنل کاربری واکنش‌گرا با دو تم و تعویض پویای تم.",
          technologies: ["React", "TypeScript", "Material UI", "Redux"],
          liveUrl: "https://userpanel.20card.ir",
        },
        {
          title: "پنل ادمین ۲۰کارت",
          description: "داشبورد ادمین سریع با Vue و Bootstrap.",
          technologies: ["Vue.js", "Bootstrap"],
          liveUrl: "https://adminpanel.20card.ir",
        },
        {
          title: "اپ توانا",
          description: "وب‌اپلیکیشن گروه مالی توانا.",
          technologies: ["Blade", "Sass", "Bootstrap", "JavaScript"],
          liveUrl: "https://ta1app.com",
        },
        {
          title: "اخبار توانا",
          description: "پلتفرم خبری با React و REST API.",
          technologies: ["React", "Sass", "Bootstrap", "REST"],
          liveUrl: "https://news.ta1app.com",
        },
        {
          title: "Best Unify",
          description: "پلتفرم محصول زنده.",
          technologies: ["Front-End"],
          liveUrl: "https://bestunify.com",
        },
        {
          title: "نوین آی‌بی",
          description: "وب‌سایت و رابط‌های شرکت.",
          technologies: ["HTML", "CSS", "JavaScript"],
          liveUrl: "https://novinib.com",
        },
        {
          title: "Guten Learn",
          description: "اپ یادگیری زبان انگلیسی برای زبان‌آموزان آلمانی.",
          technologies: ["React", "TypeScript", "Tailwind", "REST"],
        },
      ],
    },
    liveProjects: {
      title: "پروژه‌های زنده",
      items: [
        { name: "کیمیا کالا", url: "https://kimiyakala.ir" },
        { name: "۲۰کارت کاربر", url: "https://userpanel.20card.ir" },
        { name: "۲۰کارت ادمین", url: "https://adminpanel.20card.ir" },
        { name: "Best Unify", url: "https://bestunify.com" },
        { name: "توانا", url: "https://ta1app.com" },
        { name: "اخبار توانا", url: "https://news.ta1app.com" },
        { name: "نوین آی‌بی", url: "https://novinib.com" },
        { name: "این پورتفولیو", url: "https://arman-danesh.github.io/my-resume" },
      ],
    },
    footer: "۱۴۰۵© آرمان دانش. تمامی حقوق محفوظ است.",
    welcome: "به پورتفولیوی من خوش آمدید",
  },
};
