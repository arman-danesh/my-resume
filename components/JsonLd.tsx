/**
 * @packageDocumentation
 * Schema.org JSON-LD for Person, WebSite, and ProfessionalService (SEO / GEO).
 *
 * @module components/JsonLd
 */

const SITE_URL = "https://arman-danesh.github.io/my-resume";

/** Person entity for structured data. */
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE_URL}/#person`,
  name: "Arman Danesh",
  alternateName: ["آرمان دانش", "arman danesh"],
  url: SITE_URL,
  image: `${SITE_URL}/profile-image.jpg`,
  jobTitle: "Front-End Developer",
  description:
    "Front-End Developer with 3+ years of experience building scalable web applications with React, Vue, Next.js, and TypeScript. Based in Tehran, Iran.",
  email: "mailto:armandaneshwork@gmail.com",
  telephone: "+98-991-153-7923",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Tehran",
    addressRegion: "Tehran",
    addressCountry: "IR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 35.6892,
    longitude: 51.389,
  },
  nationality: {
    "@type": "Country",
    name: "Iran",
  },
  knowsLanguage: ["en", "fa"],
  knowsAbout: [
    "React",
    "Next.js",
    "Vue.js",
    "TypeScript",
    "Tailwind CSS",
    "Zustand",
    "Redux",
    "Front-End Development",
    "UI Implementation",
    "Web Performance",
    "SEO",
  ],
  sameAs: [
    "https://github.com/arman-danesh",
    "https://www.linkedin.com/in/arman-danesh-a6aaab2bb/",
    "https://t.me/ArmanDaneshWork",
  ],
  worksFor: {
    "@type": "Organization",
    name: "Pariz Hamkar",
  },
};

/** WebSite entity linked to the Person. */
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: "Arman Danesh — Portfolio",
  url: SITE_URL,
  description:
    "Personal portfolio of Arman Danesh, Front-End Developer in Tehran, Iran.",
  inLanguage: ["en", "fa"],
  author: { "@id": `${SITE_URL}/#person` },
  publisher: { "@id": `${SITE_URL}/#person` },
};

/** ProfessionalService entity for local / remote offerings. */
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE_URL}/#service`,
  name: "Front-End Development Services",
  url: SITE_URL,
  description:
    "Front-end development, UI implementation, dashboards, and performance optimization using React, Next.js, Vue, and TypeScript.",
  provider: { "@id": `${SITE_URL}/#person` },
  areaServed: [
    { "@type": "City", name: "Tehran" },
    { "@type": "Country", name: "Iran" },
    { "@type": "Place", name: "Remote" },
  ],
  serviceType: [
    "Front-End Development",
    "React Development",
    "Next.js Development",
    "UI Implementation",
    "Admin Dashboards",
  ],
  availableLanguage: ["English", "Persian"],
};

/**
 * Injects a single `<script type="application/ld+json">` with Person,
 * WebSite, and ProfessionalService graphs for search and answer engines.
 *
 * @returns JSON-LD script element
 */
export function JsonLd() {
  const payload = [personSchema, websiteSchema, serviceSchema];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
    />
  );
}
