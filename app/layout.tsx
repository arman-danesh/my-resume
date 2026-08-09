/**
 * Root layout
 * -----------
 * - Google fonts (Poppins + Playfair Display)
 * - SEO / Open Graph / Twitter / PWA / Geo metadata
 * - JSON-LD (Person + WebSite) for search & AI engines
 * - LanguageProvider wraps the entire app
 */

import type { Metadata, Viewport } from "next";
import { Poppins, Playfair_Display } from "next/font/google";
import { LanguageProvider } from "@/lib/LanguageContext";
import { JsonLd } from "@/components/JsonLd";
import "./globals.css";

const SITE_URL = "https://arman-danesh.github.io/my-resume";
const SITE_NAME = "Arman Danesh — Front-End Developer";
const SITE_DESCRIPTION =
  "Arman Danesh is a Front-End Developer based in Tehran, Iran, with 3+ years of experience building scalable web apps using React, Vue, Next.js, and TypeScript. Hire a React / Next.js developer in Tehran.";

// Body text
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

// Display headings (name in sidebar)
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: SITE_NAME,
    template: "%s | Arman Danesh",
  },
  description: SITE_DESCRIPTION,
  applicationName: "Arman Danesh Portfolio",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",

  keywords: [
    // Name & identity
    "Arman Danesh",
    "arman danesh",
    "آرمان دانش",
    // Role
    "Front-End Developer",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "Vue Developer",
    "TypeScript Developer",
    "UI Developer",
    // Stack
    "Next.js",
    "React",
    "Vue.js",
    "TypeScript",
    "Tailwind CSS",
    "Zustand",
    "Redux",
    // Local / GEO
    "Front-End Developer Tehran",
    "React Developer Tehran",
    "Next.js Developer Iran",
    "Frontend Developer Iran",
    "توسعه‌دهنده فرانت‌اند",
    "برنامه‌نویس فرانت‌اند تهران",
    "برنامه‌نویس ری‌اکت",
    "Tehran",
    "Iran",
    "تهران",
  ],

  authors: [{ name: "Arman Danesh", url: SITE_URL }],
  creator: "Arman Danesh",
  publisher: "Arman Danesh",

  // Canonical + language alternates (hreflang)
  alternates: {
    canonical: "/",
    languages: {
      "en": "/",
      "fa": "/",
      "x-default": "/",
    },
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Open Graph
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["fa_IR"],
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/logo.svg",
        width: 800,
        height: 800,
        alt: "Arman Danesh — Front-End Developer logo",
        type: "image/svg+xml",
      },
      {
        url: "/profile-image.jpg",
        width: 1200,
        height: 1200,
        alt: "Arman Danesh profile photo",
      },
    ],
  },

  // Twitter / X
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: ["/profile-image.jpg"],
    creator: "@ArmanDaneshWork",
  },

  // Icons & PWA
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/logo.svg", type: "image/svg+xml" }],
    shortcut: "/favicon.svg",
  },
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Arman Danesh",
  },

  // Category for app stores / directories
  category: "technology",

  // Extra meta: geo + verification placeholders
  other: {
    // Geographic SEO (Tehran, Iran)
    "geo.region": "IR-07",
    "geo.placename": "Tehran",
    "geo.position": "35.6892;51.3890",
    ICBM: "35.6892, 51.3890",
    // Locality helpers
    "og:locale:alternate": "fa_IR",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#DBA507" },
    { media: "(prefers-color-scheme: light)", color: "#DBA507" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppins.variable} ${playfair.variable} font-sans antialiased`}
      >
        {/* Structured data for Google, Bing, and AI/answer engines */}
        <JsonLd />
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
