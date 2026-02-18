
import type { Metadata } from "next"

const BASE_URL = "https://dentistreedental.com"
const PAGE_URL = `${BASE_URL}/dentist-in-sinhagad-road`

export const metadata: Metadata = {
    // ── Core Identity ─────────────────────────────────────────────────────────
    metadataBase: new URL(BASE_URL),
    title: {
        default: "Best Dentist in Sinhagad Road Pune | Dentistree Dental Clinic",
        template: "%s | Dentistree Dental Clinic – Sinhagad Road",
    },
    description:
        "Top-rated dental clinic on Sinhagad Road, Pune. Dr. Poonam Bambarkar offers expert root canals, implants, braces & kids dentistry at Nanded City. Open 7 days.",

    // ── Keywords ──────────────────────────────────────────────────────────────
    keywords: [
        "dentist in sinhagad road",
        "dental clinic sinhagad road",
        "best dentist sinhagad road pune",
        "root canal sinhagad road",
        "dental implants sinhagad road",
        "kids dentist sinhagad road",
        "dr poonam bambarkar",
        "dentist near abhiruchi mall",
        "dentist near nanded city",
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
        title: "Best Dentist in Sinhagad Road Pune | Dentistree Dental",
        description:
            "Expert dental care on Sinhagad Road. Painless root canals, implants & kids dentistry. Dr. Poonam Bambarkar. Open Mon–Sun 10 am–9 pm.",
        url: PAGE_URL,
        siteName: "Dentistree Dental Clinic",
        locale: "en_IN",
        type: "website",
        images: [
            {
                url: `${BASE_URL}/assets/og-sinhagad.jpg`,
                width: 1200,
                height: 630,
                alt: "Dentistree Dental Clinic – Sinhagad Road, Pune",
            },
        ],
    },

    // ── Twitter Card ─────────────────────────────────────────────────────────
    twitter: {
        card: "summary_large_image",
        title: "Best Dentist in Sinhagad Road Pune | Dentistree Dental",
        description:
            "Voted top dentist on Sinhagad Road. Root canals, implants & braces. 15+ years exp. Open 7 days.",
        images: [`${BASE_URL}/assets/og-sinhagad.jpg`],
    },
}

export default function SinhagadRoadLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
