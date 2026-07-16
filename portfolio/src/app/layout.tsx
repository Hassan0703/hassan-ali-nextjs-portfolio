import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans, Bebas_Neue, Sora } from "next/font/google";
import { ScrollProgress } from "@/components/scroll-progress";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jakarta",
  weight: ["400", "500", "600", "700", "800"],
});

const bebas = Bebas_Neue({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bebas",
  weight: "400",
});

const sora = Sora({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sora",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Hassan Ali | Frappe / ERPNext Architect",
    template: "%s | Hassan Ali",
  },
  description:
    "Frappe / ERPNext Architect & Full-Stack Engineer building scalable open-source ERP solutions. 5+ years of experience architecting enterprise systems.",
  keywords: [
    "Hassan Ali",
    "Frappe",
    "ERPNext",
    "ERP Architect",
    "Full-Stack Developer",
    "Open Source",
    "Python",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Docker",
    "Enterprise Automation",
    "Business Workflows",
    "Lahore Pakistan",
  ],
  authors: [{ name: "Hassan Ali", url: "https://github.com/Hassan0703" }],
  metadataBase: new URL("https://hassanali.dev"),
  openGraph: {
    title: "Hassan Ali | Frappe / ERPNext Architect",
    description:
      "Frappe / ERPNext Architect & Full-Stack Engineer building scalable open-source ERP solutions.",
    url: "https://hassanali.dev",
    siteName: "Hassan Ali",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Hassan Ali — Frappe / ERPNext Architect",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hassan Ali | Frappe / ERPNext Architect",
    description:
      "Frappe / ERPNext Architect & Full-Stack Engineer building scalable open-source ERP solutions.",
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
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
  },
  manifest: "/site.webmanifest",
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Hassan Ali",
  jobTitle: "Frappe/ERPNext Architect & Full-Stack Engineer",
  url: "https://hassanali.dev",
  sameAs: [
    "https://github.com/Hassan0703",
    "https://linkedin.com/in/hassan-ali-frappe-dev",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lahore",
    addressCountry: "PK",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${jakarta.variable} ${bebas.variable} ${sora.variable} font-sans`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <SkipLink />
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}

function SkipLink() {
  return (
    <a
      href="#main-content"
      className="fixed -top-20 left-4 z-[100] px-4 py-2 rounded-b-lg bg-gold text-[#1a1a1a] text-sm font-bold transition-all duration-200 focus:top-0 focus:outline-none"
    >
      Skip to main content
    </a>
  );
}
