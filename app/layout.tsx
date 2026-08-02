import type { Metadata, Viewport } from "next";
import { Poppins, Playfair_Display } from "next/font/google";
import { LanguageProvider } from "@/lib/LanguageContext";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Arman Danesh — UI/UX Designer & Front-End Developer",
  description:
    "Professional UI/UX Designer and Front-End Developer specializing in beautiful, responsive web applications. Based in Tehran, Iran.",
  keywords: [
    "UI/UX Designer",
    "Front-End Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Tehran",
    "Arman Danesh",
  ],
  authors: [{ name: "Arman Danesh" }],
  openGraph: {
    type: "website",
    url: "https://arman-danesh.github.io/my-resume/",
    title: "Arman Danesh — UI/UX Designer & Front-End Developer",
    description:
      "Professional UI/UX Designer and Front-End Developer with expertise in creating beautiful, responsive web applications.",
    images: ["/images/image/profile-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arman Danesh — UI/UX Designer & Front-End Developer",
    description:
      "Professional UI/UX Designer and Front-End Developer with expertise in creating beautiful, responsive web applications.",
    images: ["/images/image/profile-image.jpg"],
  },
  icons: {
    icon: "/images/icons/favicon-32x32.png",
    apple: "/images/icons/apple-touch-icon.png",
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
