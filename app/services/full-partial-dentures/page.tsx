import { ServicePageLayout } from "../layout-template"
import { Metadata } from "next"
import { generateServiceSchema, generateFaqSchema, generateBreadcrumbSchema } from "@/components/seo/schema-config"

export const metadata: Metadata = {
    title: "Best Dentures in Pune | Full & Partial Dentures | BPS Certified",
    description: "Regain your smile and confidence with custom-fitted dentures in Pune. We offer comfortable BPS dentures, flexible partials, and implant-supported options.",
    keywords: ["dentures cost Pune", "BPS dentures", "flexible partial dentures", "implant overdentures", "false teeth set", "dental plate"],
    openGraph: {
        title: "Comfortable, Natural-Looking Dentures | Dentistree",
        description: "Modern dentures aren't just functional—they are beautiful. Discover our range of comfortable, custom-fitted solutions.",
        images: ["/assets/client-7.png"]
    }
}

export default function DenturesPage() {
    const serviceSchema = generateServiceSchema(
        "Full & Partial Dentures",
        "Custom-fabricated prosthetics for replacing missing teeth.",
        "/services/full-partial-dentures",
        "/assets/client-7.png"
    )

    const faqSchema = generateFaqSchema([
        {
            question: "What are BPS Dentures?",
            answer: "BPS (Biofunctional Prosthetic System) dentures are premium quality dentures that offer superior fit, function, and aesthetics compared to conventional dentures. They are made using high-quality materials and precise injection molding techniques."
        },
        {
            question: "How long does it take to get new dentures?",
            answer: "The process typically takes 4-5 appointments over 2-3 weeks. This allows us to take accurate impressions, check the bite, and ensure the aesthetics are perfect before final delivery."
        },
        {
            question: "Will they look fake?",
            answer: "Absolutely not. We customize the tooth shape, shade, and arrangement to match your facial features. Modern denture teeth look incredibly natural."
        }
    ])

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Home", item: "/" },
        { name: "Services", item: "/services" },
        { name: "Full / Partial Dentures", item: "/services/full-partial-dentures" }
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
            title="Full / Partial Dentures in Nanded City, Pune"
            subtitle="Custom-crafted dentures that fit comfortably, look natural, and restore your ability to enjoy life."
            heroImage="/assets/client-7.png"
            jsonLd={combinedSchema}
            overview="Losing teeth can be life-changing, but restoring them should be life-affirming. At Dentistree, we specialize in creating dentures that don't just 'fill the gap' but actively support your facial muscles and restore your chewing function. Whether you need a full set or just a partial to replace a few teeth, we offer **Biocompatible** and **Flexible** options that eliminate the bulk and discomfort associated with old-fashioned dentures."
            benefits={[
                "Premium BPS® Dentures for superior fit",
                "Flexible partials (No metal clasps)",
                "Support for facial muscles (Anti-aging effect)",
                "Implant-supported options for rock-solid stability",
                "Customized gum shading for natural look"
            ]}
            process={[
                {
                    title: "Precision Impressions",
                    desc: "We take two sets of impressions to capture the exact contours of your gums and muscles."
                },
                {
                    title: "Bite Registration",
                    desc: "We record how your jaws meet to ensure your new teeth will function correctly for chewing."
                },
                {
                    title: "Esthetic Try-In",
                    desc: "You get to see and try the wax model of your new smile. We adjust it until you love the look."
                }
            ]}
            faqs={[
                {
                    id: "1",
                    trigger: "Are dentures uncomfortable?",
                    content: "New dentures may feel strange at first, but our precise fitting protocols minimize sore spots. Most patients adapt fully within 2 weeks."
                },
                {
                    id: "2",
                    trigger: "What are implant-supported dentures?",
                    content: "These are dentures that 'snap' onto 2 or 4 dental implants. They effectively eliminate loose dentures and provide 100% stability."
                },
                {
                    id: "3",
                    trigger: "Do I have to take them out at night?",
                    content: "Yes, it is recommended to remove dentures at night to let your gums breathe and rest."
                },
                {
                    id: "4",
                    trigger: "How much do they cost?",
                    content: "Cost varies by material (Acrylic vs. BPS vs. Metal-Free). During your consultation, we will explain all options and help you choose the best one for your budget."
                }
            ]}
            ctaTitle="Smile with Confidence"
            ctaDesc="You deserve teeth that look great and stay in place. Let's create your perfect smile."
        />
    )
}
