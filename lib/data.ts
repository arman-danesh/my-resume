import type { Translations, Locale } from "./types";

export const translations: Record<Locale, Translations> = {
  en: {
    languageButton: "FA",
    name: "ARMAN DANESH",
    roles: ["UI/UX Designer", "Front-End Developer"],
    about: {
      title: "About me",
      description:
        "I earned my associate degree in 2017 and began freelancing in logo design, icons, UI/UX, banners, WordPress themes, custom templates and content creation. Several of those projects are featured below. These experiences sparked my passion for design and programming. I constantly keep my skills up to date and genuinely enjoy solving complex problems.",
    },
    information: {
      title: "Information",
      items: [
        { label: "Resident", value: "Iran, Tehran" },
        { label: "Age", value: "24" },
        { label: "Military service", value: "Completed in 2022" },
        { label: "Degree", value: "Associate Degree" },
        { label: "University", value: "University of Applied Sciences & Technology" },
      ],
    },
    learning: {
      title: "Currently Learning",
      items: [
        { label: "Nest.js", level: 90 },
        { label: "MongoDB", level: 90 },
        { label: "MySQL", level: 85 },
      ],
    },
    contact: {
      title: "Contact Me",
      phone: "09911537923",
      telegram: "@ArmanDaneshWork",
      email: "ArmanDaneshWork@gmail.com",
    },
    skills: {
      title: "Professional Skills",
      technical: [
        { name: "Next.js", level: 90 },
        { name: "React.js", level: 90 },
        { name: "Vue.js", level: 85 },
        { name: "TypeScript", level: 90 },
        { name: "Redux", level: 80 },
        { name: "Zustand", level: 80 },
        { name: "Bootstrap", level: 90 },
        { name: "Tailwind CSS", level: 90 },
        { name: "Material UI", level: 80 },
        { name: "SASS", level: 90 },
        { name: "Nest.js", level: 70 },
        { name: "Node.js", level: 75 },
        { name: "GitHub", level: 90 },
        { name: "CI/CD", level: 70 },
        { name: "UI Design", level: 85 },
      ],
      soft: [
        { name: "Team Work", level: 80 },
        { name: "Fast learner", level: 90 },
        { name: "Creativity", level: 85 },
        { name: "Innovation", level: 75 },
      ],
    },
    services: {
      title: "What I Offer",
      items: [
        {
          title: "Front-end Development",
          description:
            "I implement the visual elements users see and interact with inside web applications — a critical role for any successful product.",
          icon: "code",
        },
        {
          title: "UI/UX Design",
          description:
            "UX designers improve the quality of interaction between users and products, while UI designers bring the brand’s visual identity to life.",
          icon: "palette",
        },
        {
          title: "Logo Design",
          description:
            "A well-crafted logo is the first point of recognition for a product and a cornerstone of strong branding.",
          icon: "pen",
        },
        {
          title: "SEO Optimization",
          description:
            "SEO combines many techniques whose goal is to demonstrate value to search engines so pages can rank highly and reach the first page.",
          icon: "search",
        },
      ],
    },
    projects: {
      title: "My Projects",
      items: [
        {
          title: "Accounting Services",
          description: "Professional accounting platform interface",
          image: "/images/image/accoounting_services.jpg",
          thumbnail: "/images/image/accoounting_services_sm.jpg",
          technologies: ["UI/UX", "Web"],
        },
        {
          title: "Poster Design",
          description: "Creative poster with branding focus",
          image: "/images/image/with_name.jpg",
          thumbnail: "/images/image/with_name_sm.jpg",
          technologies: ["Design", "Branding"],
        },
        {
          title: "Salary Calculator",
          description: "Salary calculation application",
          image: "/images/image/yosef.png",
          thumbnail: "/images/image/yosef_sm.png",
          technologies: ["React", "UI"],
        },
        {
          title: "Diamond Design",
          description: "Elegant jewelry brand visual",
          image: "/images/image/diamond.jpg",
          thumbnail: "/images/image/diamond_sm.jpg",
          technologies: ["Logo", "Branding"],
        },
        {
          title: "ESVE Logo",
          description: "Modern logo design",
          image: "/images/image/esve.jpg",
          thumbnail: "/images/image/esve_sm.jpg",
          technologies: ["Logo", "Identity"],
        },
        {
          title: "Samane Behnood",
          description: "Corporate identity project",
          image: "/images/image/last copy.jpg",
          thumbnail: "/images/image/last copy.jpg",
          technologies: ["UI", "Branding"],
        },
        {
          title: "Water Drop",
          description: "Clean product visualization",
          image: "/images/image/water_drop.png",
          thumbnail: "/images/image/water_drop_sm.png",
          technologies: ["Design"],
        },
        {
          title: "Animal Peace",
          description: "Social impact visual campaign",
          image: "/images/image/animal_peace.jpg",
          thumbnail: "/images/image/animal_peace_sm.jpg",
          technologies: ["Poster", "Campaign"],
        },
        {
          title: "Web Platform",
          description: "Full web application interface",
          image: "/images/image/Web.png",
          thumbnail: "/images/image/Web_sm.png",
          technologies: ["Next.js", "UI/UX"],
        },
      ],
    },
    footer: "© 2026 Arman Danesh. All rights reserved.",
    welcome: "Welcome To My Portfolio! ;)",
  },
  fa: {
    languageButton: "EN",
    name: "آرمان دانش",
    roles: ["طراح UI/UX", "برنامه‌نویس فرانت‌اند"],
    about: {
      title: "درباره من",
      description:
        "من مدرک کاردانی ناپیوسته خود را در سال ۱۳۹۵ گرفتم و به عنوان فریلنسر در زمینه طراحی لوگو، آیکن، UI/UX، بنر، قالب وردپرس، قالب اختصاصی و تولید محتوا شروع به کار کردم. برخی از این پروژه‌ها در بخش پروژه‌های من قرار دارند. این فعالیت‌ها علاقه‌مندی من را به طراحی و برنامه‌نویسی افزایش داد. علاقه زیاد من به برنامه‌نویسی باعث شد همیشه دانش خود را به‌روز نگه دارم. حل مسئله را دوست دارم و پروژه‌های پیچیده برایم جذاب هستند.",
    },
    information: {
      title: "مشخصات",
      items: [
        { label: "مقیم", value: "ایران، تهران" },
        { label: "سن", value: "۲۴" },
        { label: "خدمت سربازی", value: "در سال ۱۴۰۱ به پایان رسید" },
        { label: "مدرک", value: "کاردانی" },
        { label: "دانشگاه", value: "مرکز آموزشی علمی کاربردی" },
      ],
    },
    learning: {
      title: "در حال یادگیری",
      items: [
        { label: "Nest.js", level: 90 },
        { label: "MongoDB", level: 90 },
        { label: "MySQL", level: 85 },
      ],
    },
    contact: {
      title: "تماس با من",
      phone: "۰۹۹۱۱۵۳۷۹۲۳",
      telegram: "@ArmanDaneshWork",
      email: "ArmanDaneshWork@gmail.com",
    },
    skills: {
      title: "مهارت‌های حرفه‌ای",
      technical: [
        { name: "Next.js", level: 90 },
        { name: "React.js", level: 90 },
        { name: "Vue.js", level: 85 },
        { name: "TypeScript", level: 90 },
        { name: "Redux", level: 80 },
        { name: "Zustand", level: 80 },
        { name: "Bootstrap", level: 90 },
        { name: "Tailwind CSS", level: 90 },
        { name: "Material UI", level: 80 },
        { name: "SASS", level: 90 },
        { name: "Nest.js", level: 70 },
        { name: "Node.js", level: 75 },
        { name: "GitHub", level: 90 },
        { name: "CI/CD", level: 70 },
        { name: "طراحی UI", level: 85 },
      ],
      soft: [
        { name: "کار تیمی", level: 80 },
        { name: "یادگیری سریع", level: 90 },
        { name: "خلاقیت", level: 85 },
        { name: "نوآوری", level: 75 },
      ],
    },
    services: {
      title: "خدماتی که ارائه می‌دهم",
      items: [
        {
          title: "توسعه فرانت‌اند",
          description:
            "من مسئول پیاده‌سازی عناصر بصری هستم که کاربران در یک برنامه وب می‌بینند و با آن‌ها تعامل دارند؛ نقشی حیاتی برای موفقیت کسب‌وکار.",
          icon: "code",
        },
        {
          title: "طراحی UI/UX",
          description:
            "طراحان UX تعامل بین کاربر و محصول را بهبود می‌بخشند، در حالی که طراحان UI هویت بصری برند را به کاربران منتقل می‌کنند.",
          icon: "palette",
        },
        {
          title: "طراحی لوگو",
          description:
            "یک لوگوی خوب طراحی‌شده اولین نقطه شناسایی یک محصول برای مشتریان و پایه‌ای مهم برای برندسازی است.",
          icon: "pen",
        },
        {
          title: "بهینه‌سازی سئو",
          description:
            "سئو از چندین عنصر تشکیل شده و هدف اصلی آن نشان دادن ارزش به موتورهای جستجو است تا صفحات رتبه بالایی کسب کنند.",
          icon: "search",
        },
      ],
    },
    projects: {
      title: "پروژه‌های من",
      items: [
        {
          title: "خدمات حسابداری",
          description: "رابط کاربری پلتفرم حسابداری حرفه‌ای",
          image: "/images/image/accoounting_services.jpg",
          thumbnail: "/images/image/accoounting_services_sm.jpg",
          technologies: ["UI/UX", "وب"],
        },
        {
          title: "طراحی پوستر",
          description: "پوستر خلاقانه با تمرکز بر برندینگ",
          image: "/images/image/with_name.jpg",
          thumbnail: "/images/image/with_name_sm.jpg",
          technologies: ["طراحی", "برندینگ"],
        },
        {
          title: "محاسبه‌گر حقوق",
          description: "اپلیکیشن محاسبه حقوق و دستمزد",
          image: "/images/image/yosef.png",
          thumbnail: "/images/image/yosef_sm.png",
          technologies: ["React", "UI"],
        },
        {
          title: "طراحی الماس",
          description: "هویت بصری برند جواهرات",
          image: "/images/image/diamond.jpg",
          thumbnail: "/images/image/diamond_sm.jpg",
          technologies: ["لوگو", "برندینگ"],
        },
        {
          title: "لوگوی ESVE",
          description: "طراحی لوگوی مدرن",
          image: "/images/image/esve.jpg",
          thumbnail: "/images/image/esve_sm.jpg",
          technologies: ["لوگو", "هویت"],
        },
        {
          title: "سامانه بهنود",
          description: "پروژه هویت سازمانی",
          image: "/images/image/last copy.jpg",
          thumbnail: "/images/image/last copy.jpg",
          technologies: ["UI", "برندینگ"],
        },
        {
          title: "قطره آب",
          description: "تصویرسازی تمیز محصول",
          image: "/images/image/water_drop.png",
          thumbnail: "/images/image/water_drop_sm.png",
          technologies: ["طراحی"],
        },
        {
          title: "صلح حیوانات",
          description: "کمپین بصری تأثیر اجتماعی",
          image: "/images/image/animal_peace.jpg",
          thumbnail: "/images/image/animal_peace_sm.jpg",
          technologies: ["پوستر", "کمپین"],
        },
        {
          title: "پلتفرم وب",
          description: "رابط کاربری کامل اپلیکیشن وب",
          image: "/images/image/Web.png",
          thumbnail: "/images/image/Web_sm.png",
          technologies: ["Next.js", "UI/UX"],
        },
      ],
    },
    footer: "۱۴۰۵© هرگونه کپی‌برداری از طرح قالب و مطالب رزومه پیگرد قانونی دارد",
    welcome: "به پورتفولیوی من خوش آمدید! ;)",
  },
};
