// ============================================================
//  schema-config.ts  –  Dentistree Dental SEO Schema Config
//  Domain: dentistreedental.com
// ============================================================

export const SITE_URL = "https://dentistreedental.com";

export const CLINIC_NAME = "Dentistree Clinic";

export const CLINIC_ADDRESS = {
    "@type": "PostalAddress",
    streetAddress: "Ingale Plaza, Shop No. 1, near Uttam Sweets, Nanded City Road, Sinhagad Road",
    addressLocality: "Nanded, Pune",
    addressRegion: "Maharashtra",
    postalCode: "411068",
    addressCountry: "IN",
};

// All neighbourhoods you want to rank for
export const AREA_SERVED = [
    "Nanded City",
    "Shivne",
    "Sinhagad Road",
    "Dhayari",
    "Pune",
    "Narhe",
    "Ambegaon",
    "Katraj",
    "Vadgaon Budruk",
];

export const SOCIAL_PROFILES = [
    "https://www.facebook.com/dentistreedental",
    "https://www.instagram.com/dentistreedental",
    "https://www.justdial.com/Pune/Dentistree-Dental-Clinic-Near-By-Nanded-City-Destination-Centre-And-Besides-Uttam-Sweets-Hotel-Aura-Celestia-Nanded-City/020PXX20-XX20-231224220432-B3L8_BZDET",
    "https://www.google.com/maps/place/Dentistree+Clinic/@18.4605837,73.7864175,17z/data=!3m1!4b1!4m6!3m5!1s0x3bc29580a5c8612f:0xd16cce358b8cabfd!8m2!3d18.4605837!4d73.7864175!16s%2Fg%2F11w_z2txhd?entry=ttu",
];

export const GOOGLE_MAPS_LINK =
    "https://maps.app.goo.gl/YourGoogleMapsLinkHere"; // ← Replace with real link

// ---------------------------------------------------------------
//  Main schema generator – call this in layout.tsx
// ---------------------------------------------------------------
export function generateLocalBusinessSchema() {
    return {
        "@context": "https://schema.org",
        "@type": ["Dentist", "LocalBusiness", "MedicalBusiness"],

        // ── Core identity ──────────────────────────────────────────
        name: CLINIC_NAME,
        url: SITE_URL,
        logo: `${SITE_URL}/logo.png`,
        image: `${SITE_URL}/clinic-photo.jpg`,

        // ── Contact ────────────────────────────────────────────────
        telephone: "+918237156777",
        email: "info@dentistreedental.com",

        // ── Location ───────────────────────────────────────────────
        address: CLINIC_ADDRESS,
        geo: {
            "@type": "GeoCoordinates",
            latitude: "18.4615",   // ← Adjust to exact coordinates
            longitude: "73.8145",
        },
        hasMap: GOOGLE_MAPS_LINK,

        // ── Service area – THIS is what makes you rank for each locality ──
        areaServed: AREA_SERVED.map((area) => ({
            "@type": "City",
            name: area,
        })),

        // ── Medical specialties ────────────────────────────────────
        medicalSpecialty: [
            "Dentistry",
            "Orthodontics",
            "Oral Surgery",
            "Cosmetic Dentistry",
            "Pediatric Dentistry",
            "Prosthodontics",
            "Endodontics",
            "Periodontics",
        ],

        // ── Services offered ──────────────────────────────────────
        hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Dental Services",
            itemListElement: [
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Teeth Cleaning & Scaling" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Teeth Whitening" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Dental Implants" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Braces & Aligners" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Root Canal Treatment" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Tooth Extraction" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Pediatric Dentistry" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Smile Makeover" } },
            ],
        },

        // ── Trust signals ─────────────────────────────────────────
        sameAs: SOCIAL_PROFILES,

        aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "120",  // ← Update with real numbers
            bestRating: "5",
            worstRating: "1",
        },

        // ── Opening hours ─────────────────────────────────────────
        openingHoursSpecification: [
            {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                opens: "10:00",
                closes: "20:00",
            },
            {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Sunday"],
                opens: "10:00",
                closes: "14:00",
            },
        ],

        priceRange: "₹₹",
        currenciesAccepted: "INR",
        paymentAccepted: "Cash, Card, UPI",
    };
}

// ---------------------------------------------------------------
//  FAQ Schema – helps capture "People Also Ask" results
// ---------------------------------------------------------------
export function generateFAQSchema(faqs?: { question: string; answer: string }[]) {
    if (faqs && faqs.length > 0) {
        return {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: {
                    "@type": "Answer",
                    text: faq.answer,
                },
            })),
        };
    }

    // Default Clinic FAQs
    return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
            {
                "@type": "Question",
                name: "Where is Dentistree Dental Clinic located?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Dentistree Dental Clinic is located in Nanded City, near Sinhagad Road, Pune – 411041. We serve patients from Nanded City, Shivne, Dhayari, Sinhagad Road, and surrounding areas.",
                },
            },
            {
                "@type": "Question",
                name: "Is Dentistree Dental the best dentist in Nanded City?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Dentistree Dental is one of the top-rated dental clinics in Nanded City with a 4.9-star rating. We offer comprehensive dental care including implants, braces, root canals, teeth whitening, and more.",
                },
            },
            {
                "@type": "Question",
                name: "What are the clinic timings?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "We are open Monday to Saturday from 10 AM to 8 PM, and Sunday from 10 AM to 2 PM.",
                },
            },
            {
                "@type": "Question",
                name: "Do you serve patients from Shivne and Dhayari?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes! Dentistree Dental Clinic is conveniently located to serve patients from Shivne, Dhayari, Sinhagad Road, Narhe, Ambegaon, Katraj, and the entire Nanded City area.",
                },
            },
            {
                "@type": "Question",
                name: "How do I book an appointment at Dentistree Dental?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "You can book an appointment by calling us or visiting our website at https://dentistreedental.com. Walk-ins are also welcome.",
                },
            },
        ],
    };
}


// ---------------------------------------------------------------
//  Breadcrumb Schema
// ---------------------------------------------------------------
export function generateBreadcrumbSchema(
    items: { name: string; url?: string; item?: string }[]
) {
    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.name,
            item: item.url || item.item,
        })),
    };
}

// ---------------------------------------------------------------
//  Service Schema (Restored for backward compatibility)
// ---------------------------------------------------------------
export function generateServiceSchema(
    title: string,
    description: string,
    url: string,
    image: string
) {
    return {
        "@context": "https://schema.org",
        "@type": "MedicalWebPage",
        "name": title,
        "description": description,
        "url": `${SITE_URL}${url}`,
        "primaryImageOfPage": {
            "@type": "ImageObject",
            "url": `${SITE_URL}${image}`
        },
        "isPartOf": {
            "@id": `${SITE_URL}/#dentist` // Note: Ensure layout.tsx has this ID if strictly needed, but fine for now
        },
        "about": {
            "@type": "MedicalProcedure",
            "name": title,
            "procedureType": "Non-surgical",
            "bodyLocation": "Mouth"
        }
    };
}

export const generateFaqSchema = generateFAQSchema; // Alias for backward compatibility
