
import type { Metadata } from "next"

const BASE_URL = "https://dentistreedental.com"
const PAGE_URL = `${BASE_URL}/dentist-in-shivne`

export const metadata: Metadata = {
    // ── Core Identity ─────────────────────────────────────────────────────────
    metadataBase: new URL(BASE_URL),
    title: {
        default: "Best Dentist in Shivne Pune | Dentistree Dental Clinic",
        template: "%s | Dentistree Dental to Shivne",
    },
    description:
        "Top-rated dentist near Shivne, Pune. Dr. Poonam Bambarkar offers painless root canals, implants & kids dentistry just minutes away at Nanded City. Open 7 days.",

    // ── Keywords ──────────────────────────────────────────────────────────────
    keywords: [
        "dentist in shivne",
        "dental clinic shivne",
        "best dentist shivne pune",
        "dentist near shivne",
        "root canal shivne",
        "dental implants shivne",
        "kids dentist shivne",
        "dr poonam bambarkar",
        "dental clinic near nda road",
        "dentistree dental pune",
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
        title: "Best Dentist in Shivne Pune | Dentistree Dental Clinic",
        description:
            "Expert dental care near Shivne. Painless root canals, implants & kids dentistry. Dr. Poonam Bambarkar. Open Mon–Sun 10 am–9 pm.",
        url: PAGE_URL,
        siteName: "Dentistree Dental Clinic",
        locale: "en_IN",
        type: "website",
        images: [
            {
                url: `${BASE_URL}/assets/og-shivne.jpg`,
                width: 1200,
                height: 630,
                alt: "Dentistree Dental Clinic – Serving Shivne, Pune",
            },
        ],
    },

    // ── Twitter Card ─────────────────────────────────────────────────────────
    twitter: {
        card: "summary_large_image",
        title: "Best Dentist in Shivne Pune | Dentistree Dental",
        description:
            "Voted top dentist near Shivne. Root canals, implants & braces just minutes away. 15+ years exp. Open 7 days.",
        images: [`${BASE_URL}/assets/og-shivne.jpg`],
    },
}

export default function ShivneLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
