// ============================================================
//  app/sitemap.ts  –  Dynamic XML Sitemap
//  Domain: dentistreedental.com
// ============================================================

import { MetadataRoute } from "next";
import { SITE_URL } from "@/components/seo/schema-config";

export default function sitemap(): MetadataRoute.Sitemap {
    const now = new Date();

    return [
        // ── Homepage – highest priority ───────────────────────
        {
            url: `${SITE_URL}/`,
            lastModified: now,
            changeFrequency: "weekly",
            priority: 1.0,
        },

        // ── Services page ─────────────────────────────────────
        {
            url: `${SITE_URL}/services`,
            lastModified: now,
            changeFrequency: "monthly",
            priority: 0.9,
        },

        // ── About page ────────────────────────────────────────
        {
            url: `${SITE_URL}/about`,
            lastModified: now,
            changeFrequency: "monthly",
            priority: 0.8,
        },

        // ── Contact page ─────────────────────────────────────
        {
            url: `${SITE_URL}/contact`,
            lastModified: now,
            changeFrequency: "monthly",
            priority: 0.9,
        },

        // ── Location landing pages (CRITICAL for local SEO) ──
        // Create these pages! Each targets a specific locality.
        {
            url: `${SITE_URL}/dentist-in-nanded-city`,
            lastModified: now,
            changeFrequency: "monthly",
            priority: 1.0,
        },
        {
            url: `${SITE_URL}/dentist-in-shivne`,
            lastModified: now,
            changeFrequency: "monthly",
            priority: 0.95,
        },
        {
            url: `${SITE_URL}/dentist-in-sinhagad-road`,
            lastModified: now,
            changeFrequency: "monthly",
            priority: 0.95,
        },
        {
            url: `${SITE_URL}/dentist-in-dhayari`,
            lastModified: now,
            changeFrequency: "monthly",
            priority: 0.95,
        },

        // ── Service-specific pages ────────────────────────────
        {
            url: `${SITE_URL}/services/dental-implants`,
            lastModified: now,
            changeFrequency: "monthly",
            priority: 0.85,
        },
        {
            url: `${SITE_URL}/services/teeth-whitening`,
            lastModified: now,
            changeFrequency: "monthly",
            priority: 0.85,
        },
        {
            url: `${SITE_URL}/services/braces-aligners`,
            lastModified: now,
            changeFrequency: "monthly",
            priority: 0.85,
        },
        {
            url: `${SITE_URL}/services/root-canal`,
            lastModified: now,
            changeFrequency: "monthly",
            priority: 0.85,
        },
    ];
}
