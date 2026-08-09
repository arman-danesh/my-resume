/**
 * Root layout
 * -----------
 * - Google fonts (Poppins + Playfair Display)
 * - SEO / Open Graph / Twitter / PWA metadata
 * - LanguageProvider wraps the entire app
 */

import type { Metadata, Viewport } from "next";
import { Poppins, Playfair_Display } from "next/font/google";
import { LanguageProvider } from "@/lib/LanguageContext";
import "./globals.css";

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
  title: "arman danesh — Front-End Developer",
  description:
    "Frontend Developer with 3+ years of experience building scalable web apps with React, Vue, Next.js and TypeScript. Based in Tehran, Iran.",
  keywords: [
    "Front-End Developer",
    "Next.js",
    "React",
    "Vue",
    "TypeScript",
    "Tehran",
    "Arman Danesh",
    "arman danesh",
  ],
  authors: [{ name: "Arman Danesh" }],
  manifest: "/manifest.webmanifest",
  openGraph: {
    type: "website",
    url: "https://arman-danesh.github.io/my-resume/",
    title: "arman danesh — Front-End Developer",
    description:
      "Frontend Developer with 3+ years of experience building scalable, responsive web applications.",
    images: ["/logo.svg"],
  },
  twitter: {
    card: "summary",
    title: "arman danesh — Front-End Developer",
    description:
      "Frontend Developer with 3+ years of experience building scalable, responsive web applications.",
    images: ["/logo.svg"],
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/logo.svg", type: "image/svg+xml" }],
    shortcut: "/favicon.svg",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "arman danesh",
  },
};

export const viewport: Viewport = {
  themeColor: "#DBA507",
  width: "device-width",
  initialScale: 1,
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
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
