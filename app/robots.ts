// ============================================================
//  app/robots.ts  –  Robots.txt via Next.js App Router
//  Domain: dentistreedental.com
// ============================================================

import { MetadataRoute } from "next";
import { SITE_URL } from "@/components/seo/schema-config";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                // Allow ALL crawlers (Googlebot, Bingbot, etc.)
                userAgent: "*",
                allow: "/",
                // Block Next.js internals and any admin routes
                disallow: ["/api/", "/_next/", "/admin/"],
            },
        ],
        // Always point to your sitemap
        sitemap: `${SITE_URL}/sitemap.xml`,
        // Host declaration (helps Yandex, ignored by Google but harmless)
        host: SITE_URL,
    };
}
