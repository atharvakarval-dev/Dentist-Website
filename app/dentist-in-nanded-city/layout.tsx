import type { Metadata } from "next"

const BASE_URL = "https://dentistreedental.com"
const PAGE_URL = `${BASE_URL}/dentist-in-nanded-city`

export const metadata: Metadata = {
    // ── Core Identity ─────────────────────────────────────────────────────────
    metadataBase: new URL(BASE_URL),
    title: {
        default: "Best Dentist in Nanded City Pune | Dentistree Dental Clinic",
        template: "%s | Dentistree Dental Clinic – Nanded City, Pune",
    },
    description:
        "Top-rated dentist in Nanded City, Pune. Dr. Poonam Bambarkar (BDS, 15+ yrs) offers painless root canals, dental implants, orthodontics & kids dentistry at Ingale Plaza. Open 7 days. Book now.",

    // ── Keywords ──────────────────────────────────────────────────────────────
    keywords: [
        "dentist in nanded city",
        "dental clinic nanded city pune",
        "best dentist nanded city",
        "dr poonam bambarkar",
        "root canal nanded city",
        "dental implants nanded city",
        "kids dentist nanded city",
        "orthodontist nanded city pune",
        "invisible braces nanded city",
        "teeth whitening nanded city",
        "dentistree dental pune",
        "dental clinic ingale plaza nanded city",
        "painless dentist sinhagad road",
        "children dentist nanded city",
    ],

    // ── Authors & Publisher ───────────────────────────────────────────────────
    authors: [{ name: "Dr. Poonam Bambarkar, BDS", url: PAGE_URL }],
    creator: "Dentistree Dental Clinic",
    publisher: "Dentistree Dental Clinic, Pune",

    // ── Crawl Directives ─────────────────────────────────────────────────────
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

    // ── Canonical ─────────────────────────────────────────────────────────────
    alternates: {
        canonical: PAGE_URL,
    },

    // ── Open Graph ────────────────────────────────────────────────────────────
    openGraph: {
        title: "Best Dentist in Nanded City Pune | Dentistree Dental Clinic",
        description:
            "15+ years of precision dentistry. Painless root canals, implants & kids dentistry steps from your door. Dr. Poonam Bambarkar — Ingale Plaza, Nanded City. Open Mon–Sun 10 am–9 pm.",
        url: PAGE_URL,
        siteName: "Dentistree Dental Clinic",
        locale: "en_IN",
        type: "website",
        images: [
            {
                url: `${BASE_URL}/assets/og-nanded-city.jpg`,
                width: 1200,
                height: 630,
                alt: "Dentistree Dental Clinic – Nanded City, Pune — Dr. Poonam Bambarkar",
            },
        ],
    },

    // ── Twitter Card ─────────────────────────────────────────────────────────
    twitter: {
        card: "summary_large_image",
        title: "Best Dentist in Nanded City Pune | Dentistree Dental",
        description:
            "Voted top dentist in Pune. Root canals, implants & braces right inside Nanded City. 15+ years exp. Open 7 days.",
        images: [`${BASE_URL}/assets/og-nanded-city.jpg`],
    },

    // ── Google Search Console verification (fill in token when ready) ─────────
    // verification: { google: "YOUR_GOOGLE_SITE_VERIFICATION_TOKEN" },
}

export default function NandedCityLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}