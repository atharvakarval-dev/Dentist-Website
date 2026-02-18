
import type { Metadata } from "next"

const BASE_URL = "https://dentistreedental.com"
const PAGE_URL = `${BASE_URL}/dentist-in-dhayari`

export const metadata: Metadata = {
    // ── Core Identity ─────────────────────────────────────────────────────────
    metadataBase: new URL(BASE_URL),
    title: {
        default: "Best Dentist in Dhayari Pune | Dentistree Dental Clinic",
        template: "%s | Dentistree Dental Clinic – Near Dhayari",
    },
    description:
        "Top-rated dentist near Dhayari, Pune. Dr. Poonam Bambarkar offers painless root canals, implants & kids dentistry just minutes away at Nanded City. Open 7 days.",

    // ── Keywords ──────────────────────────────────────────────────────────────
    keywords: [
        "dentist in dhayari",
        "dental clinic dhayari",
        "best dentist dhayari pune",
        "root canal dhayari",
        "dental implants dhayari",
        "kids dentist dhayari",
        "dr poonam bambarkar",
        "dentist near dsk vishwa",
        "dentist near dhayari phata",
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
        title: "Best Dentist in Dhayari Pune | Dentistree Dental",
        description:
            "Expert dental care near Dhayari. Painless root canals, implants & kids dentistry. Dr. Poonam Bambarkar. Open Mon–Sun 10 am–9 pm.",
        url: PAGE_URL,
        siteName: "Dentistree Dental Clinic",
        locale: "en_IN",
        type: "website",
        images: [
            {
                url: `${BASE_URL}/assets/og-dhayari.jpg`,
                width: 1200,
                height: 630,
                alt: "Dentistree Dental Clinic – Serving Dhayari, Pune",
            },
        ],
    },

    // ── Twitter Card ─────────────────────────────────────────────────────────
    twitter: {
        card: "summary_large_image",
        title: "Best Dentist in Dhayari Pune | Dentistree Dental",
        description:
            "Voted top dentist near Dhayari. Root canals, implants & braces just minutes away. 15+ years exp. Open 7 days.",
        images: [`${BASE_URL}/assets/og-dhayari.jpg`],
    },
}

export default function DhayariLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
