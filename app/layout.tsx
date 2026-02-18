// ============================================================
//  app/layout.tsx  –  Root Layout with Full SEO Metadata
//  Domain: dentistreedental.com
// ============================================================

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {
  generateLocalBusinessSchema,
  generateFAQSchema,
  SITE_URL,
} from "@/components/seo/schema-config";

const inter = Inter({ subsets: ["latin"] });

// ---------------------------------------------------------------
//  METADATA  – drives <title>, <meta>, <link rel="canonical">
// ---------------------------------------------------------------
export const metadata: Metadata = {
  // ── MetadataBase tells Next.js the absolute URL origin ──────
  metadataBase: new URL(SITE_URL),

  // ── Title ───────────────────────────────────────────────────
  //  Primary keyword first, brand last – best practice
  title: {
    default:
      "Top Dentist in Nanded City, Shivne & Sinhagad Road | Dentistree Dental Clinic Pune",
    template: "%s | Dentistree Dental Clinic – Nanded City, Pune",
  },

  // ── Description (150–160 chars for Google) ──────────────────
  description:
    "Looking for the best dentist near Nanded City, Shivne, Sinhagad Road or Dhayari? Dentistree Dental Clinic offers top dental care in Pune – implants, braces, root canal & more. Book today!",

  // ── Keywords (not a ranking factor alone, but still parsed) ─
  keywords: [
    // Core "dentist near me" intent
    "dentist near me",
    "dentist near Nanded City",
    "dental clinic near me",
    "best dentist near me Pune",
    // Location variants
    "dentist in Nanded City",
    "dentist in Shivne",
    "dentist in Sinhagad Road",
    "dentist in Dhayari",
    "dentist in Pune",
    "dental clinic in Nanded City",
    "dental clinic in Shivne",
    "dental clinic in Sinhagad Road",
    "dental clinic in Dhayari",
    "dental clinic in Pune",
    // "Top" variants
    "top dentist in Nanded City",
    "top dentist in Shivne",
    "top dentist in Dhayari",
    "top dentist in Sinhagad Road",
    "top dentist Pune",
    "best dentist in Nanded City",
    "best dentist in Shivne",
    "best dentist in Sinhagad Road",
    "best dentist in Dhayari",
    "best dental clinic Nanded City",
    // Brand
    "Dentistree Dental",
    "Dentistree Dental Clinic",
    "Dentistree Nanded City",
    // Service keywords
    "teeth whitening Nanded City",
    "dental implants Nanded City",
    "braces Nanded City",
    "root canal Nanded City",
    "orthodontist Nanded City",
    "pediatric dentist Nanded City",
    "smile makeover Nanded City",
  ],

  // ── Canonical URL ──────────────────────────────────────────
  alternates: {
    canonical: "./",
  },

  // ── Open Graph (Facebook, WhatsApp preview) ────────────────
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Dentistree Dental Clinic",
    title:
      "Top Dentist in Nanded City, Shivne & Sinhagad Road | Dentistree Dental",
    description:
      "Best dental clinic near Nanded City, Shivne, Sinhagad Road & Dhayari, Pune. Expert dentists, modern equipment, affordable prices. Book your appointment today!",
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`, // 1200×630px recommended
        width: 1200,
        height: 630,
        alt: "Dentistree Dental Clinic – Best Dentist in Nanded City, Pune",
      },
    ],
    locale: "en_IN",
  },

  // ── Twitter / X card ──────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    title:
      "Top Dentist in Nanded City, Shivne & Sinhagad Road | Dentistree Dental",
    description:
      "Best dental clinic near Nanded City, Shivne, Sinhagad Road & Dhayari, Pune.",
    images: [`${SITE_URL}/og-image.jpg`],
  },

  // ── Robots ────────────────────────────────────────────────
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

  // ── Favicon / Icons ───────────────────────────────────────
  icons: {
    icon: "/assets/logo-2.png",
    shortcut: "/assets/logo-2.png",
    apple: "/assets/logo-2.png",
  },

  // ── Verification (add your tokens from GSC) ───────────────
  verification: {
    google: "YOUR_GOOGLE_SEARCH_CONSOLE_TOKEN_HERE", // ← REPLACE THIS with your actual GSC token
    // other: { "msvalidate.01": "YOUR_BING_TOKEN" },
  },

  // ── Authors / Publisher ───────────────────────────────────
  authors: [{ name: "Dentistree Dental Clinic", url: SITE_URL }],
  creator: "Dentistree Dental Clinic",
  publisher: "Dentistree Dental Clinic",

  // ── Geo tags for local SEO ────────────────────────────────
  other: {
    "geo.region": "IN-MH",
    "geo.placename": "Nanded City, Pune",
    "geo.position": "18.4615;73.8145",
    ICBM: "18.4615, 73.8145",
    // Language / region
    language: "English",
    revisit: "7 days",
  },
};

// ---------------------------------------------------------------
//  ROOT LAYOUT
// ---------------------------------------------------------------
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Generate schemas once at build / request time
  const localBusinessSchema = generateLocalBusinessSchema();
  const faqSchema = generateFAQSchema();

  return (
    <html lang="en">
      <head>
        {/* ── Structured Data (JSON-LD) ───────────────────── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />

        {/* ── Preconnect for performance (also a ranking signal) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
