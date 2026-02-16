import { ServicePageLayout } from "../layout-template"
import { Metadata } from "next"
import { generateServiceSchema, generateFaqSchema, generateBreadcrumbSchema } from "@/components/seo/schema-config"

export const metadata: Metadata = {
    title: "Digital Dental X-Rays in Pune | Low Radiation RVG & OPG | Dentistree",
    description: "Advanced digital diagnostics for precise dental care. Our Pune clinic features low-radiation RVG sensors and instant imaging for accurate treatment planning.",
    keywords: ["dental x-ray Pune", "digital RVG sensor", "OPG x-ray cost", "dental diagnostics", "safe dental x-rays", "intraoral camera"],
    openGraph: {
        title: "See What We See | Advanced Digital Diagnostics",
        description: "Precision is key. Our digital X-rays provide instant, high-definition images with 90% less radiation.",
        images: ["/assests/2025-08-13.webp"]
    }
}

export default function DiagnosticsPage() {
    const serviceSchema = generateServiceSchema(
        "Digital Diagnostics (X-Ray)",
        "Advanced digital imaging for dental diagnosis including RVG and OPG.",
        "/services/digital-diagnostics",
        "/assests/2025-08-13.webp"
    )

    const faqSchema = generateFaqSchema([
        {
            question: "Are digital X-rays safe?",
            answer: "Yes, they are significantly safer than traditional film X-rays, reducing radiation exposure by up to 90%. They are safe for children and adults."
        },
        {
            question: "Why do I need an X-ray if I don't have pain?",
            answer: "Many dental issues, like early decay between teeth or bone loss, are invisible to the naked eye. X-rays allow us to catch these problems early, before they cause pain."
        },
        {
            question: "Can I see the images?",
            answer: "Yes! The images appear instantly on our computer screen. We will show you exactly what we see so you can understand your oral health better."
        }
    ])

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Home", item: "/" },
        { name: "Services", item: "/services" },
        { name: "Digital Diagnostics", item: "/services/digital-diagnostics" }
    ])

    const combinedSchema = {
        "@context": "https://schema.org",
        "@graph": [
            serviceSchema,
            faqSchema,
            breadcrumbSchema
        ]
    }

    return (
        <ServicePageLayout
            title="Digital X-Ray & Diagnostics"
            subtitle="Crystal clear insights for precise treatment. Low radiation, instant results."
            heroImage="/assests/2025-08-13.webp"
            jsonLd={combinedSchema}
            overview="Great treatment begins with a great diagnosis. At Dentistree, we have invested in **cutting-edge digital imaging technology** because we believe you deserve the safest and most accurate care possible. Unlike old film X-rays that required developing chemicals and higher radiation, our digital sensors (RVG) provide instant, high-definition images. This allows us to detect even the smallest cavities or hidden infections early, saving you from more complex (and expensive) treatments later."
            benefits={[
                "90% Less Radiation than film X-rays",
                "Instant High-Definition Images",
                "Eco-friendly (No chemicals/lead foil)",
                "Early detection of 'hidden' decay",
                "Patient eduction - See your own teeth on screen"
            ]}
            process={[
                {
                    title: "Comfortable Capture",
                    desc: "We place a small, rounded sensor in your mouth. coverage is quick and comfortable."
                },
                {
                    title: "Instant Processing",
                    desc: "The image appears on our monitor in seconds. No waiting for film to develop."
                },
                {
                    title: "Digital Analysis",
                    desc: "We can zoom in, adjust contrast, and color-code the image to show you the exact condition of your teeth."
                }
            ]}
            faqs={[
                {
                    id: "1",
                    trigger: "Is it safe for children?",
                    content: "Absolutely. We use lead aprons and thyroid collars as an extra precaution, but the radiation dose is extremely low—comparable to a few hours of background radiation from the sun."
                },
                {
                    id: "2",
                    trigger: "Do you have OPG (Full mouth X-ray)?",
                    content: "Yes, we can arrange for full-mouth OPG scans for orthodontic or implant planning."
                },
                {
                    id: "3",
                    trigger: " Can you email me my X-rays?",
                    content: "Yes, since they are digital files, we can easily email them to you or another specialist if needed."
                }
            ]}
            ctaTitle="Clarity You Can Trust"
            ctaDesc="Experience the difference of technology-driven dental care. Book your checkup today."
        />
    )
}
