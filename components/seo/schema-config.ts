export const SITE_URL = "https://your-domain.com"; // Replace with actual domain
export const CLINIC_NAME = "Dentistree";
export const CLINIC_LOGO = `${SITE_URL}/assests/logo.png`;
export const CLINIC_TELEPHONE = "+91-82371-56777";
export const CLINIC_ADDRESS = {
    streetAddress: "Shop No. 1, Ground Floor, Royal Plaza", // Replace with actual
    addressLocality: "Pune", // Replace/Confirm
    addressRegion: "MH",
    postalCode: "411001", // Replace
    addressCountry: "IN"
};

export type FaqItem = {
    question: string;
    answer: string;
};

export function generateLocalBusinessSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "Dentist",
        "name": CLINIC_NAME,
        "image": CLINIC_LOGO,
        "@id": `${SITE_URL}/#dentist`,
        "url": SITE_URL,
        "telephone": CLINIC_TELEPHONE,
        "address": {
            "@type": "PostalAddress",
            ...CLINIC_ADDRESS
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 18.5204, // Replace with actual
            "longitude": 73.8567  // Replace with actual
        },
        "openingHoursSpecification": [
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday"
                ],
                "opens": "10:00",
                "closes": "20:00"
            }
        ],
        "priceRange": "$$"
    };
}

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
            "@id": `${SITE_URL}/#dentist`
        },
        "about": {
            "@type": "MedicalProcedure",
            "name": title,
            "procedureType": "Non-surgical", // Adjust per service
            "bodyLocation": "Mouth"
        }
    };
}

export function generateFaqSchema(faqs: FaqItem[]) {
    return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    };
}

export function generateBreadcrumbSchema(items: { name: string; item: string }[]) {
    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": items.map((item, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.name,
            "item": `${SITE_URL}${item.item}`
        }))
    };
}
