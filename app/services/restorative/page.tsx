import { ServicePageLayout } from "../layout-template"
import { Metadata } from "next"
import { generateServiceSchema, generateFaqSchema, generateBreadcrumbSchema } from "@/components/seo/schema-config"

export const metadata: Metadata = {
    title: "Restorative Dentistry in Pune | Fillings, Crowns & Bridges | Dentistree",
    description: "Restore your smile with expert restorative dentistry in Pune. From tooth-colored fillings to zirconia crowns, we offer durable, natural-looking solutions. Book your consultation today.",
    keywords: ["restorative dentistry Pune", "dental crowns Pune", "tooth filling cost", "zirconia crowns", "dental bridges", "cracked tooth repair", "cavity treatment"],
    openGraph: {
        title: "Expert Restorative Dentistry | Save Your Natural Smile",
        description: "Don't let damaged teeth hold you back. Our advanced restorative treatments bring back function and aesthetics seamlessly.",
        images: ["/assests/client-5.png"]
    }
}

export default function RestorativePage() {
    const serviceSchema = generateServiceSchema(
        "Restorative Dentistry",
        "Comprehensive restorative dental treatments including fillings, crowns, and bridges to restore oral health and function.",
        "/services/restorative",
        "/assests/client-5.png"
    )

    const faqSchema = generateFaqSchema([
        {
            question: "How long do composite fillings last?",
            answer: "High-quality composite fillings typically last 5-10 years with proper care. We use premium materials that bond strongly to your tooth structure for maximum durability."
        },
        {
            question: "What is the difference between a crown and a bridge?",
            answer: "A crown covers a single damaged tooth to protect it. A bridge is used to replace one or more missing teeth by anchoring to the adjacent healthy teeth."
        },
        {
            question: "Is the procedure painful?",
            answer: "No. We essentially perform all restorative procedures under local anesthesia. Our 'Painless Injection' protocols ensure you are comfortable throughout the treatment."
        }
    ])

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Home", item: "/" },
        { name: "Services", item: "/services" },
        { name: "Restorative Dentistry", item: "/services/restorative" }
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
            title="Restorative Dentistry"
            subtitle="Regain the strength and beauty of your natural smile with our advanced restorative solutions."
            heroImage="/assests/client-5.png"
            jsonLd={combinedSchema}
            overview="Restorative dentistry is the art and science of bringing your teeth back to their full health and function. Whether you have a simple cavity, a chipped tooth, or more extensive damage, our goal is to preserve your natural tooth structure whenever possible. We strictly treat using **biomimetic principles**—meaning we use materials that mimic the properties of natural teeth, ensuring your restoration treats the tooth like it was never damaged."
            benefits={[
                "Invisible, tooth-colored restorations",
                "Preservation of natural tooth structure",
                "Restore full chewing efficiency",
                "Long-lasting, durable materials (Zirconia/E-max)",
                "Prevention of future decay and infection"
            ]}
            process={[
                {
                    title: "Comprehensive Exam",
                    desc: "We use digital X-rays and intraoral cameras to assess the extent of decay or damage with precision."
                },
                {
                    title: "Painless Prep",
                    desc: "Using modern anesthesia, we gently remove decay and shape the tooth to receive the restoration."
                },
                {
                    title: "Precision Bonding",
                    desc: "We use advanced bonding protocols to fuse the restoration to your tooth, sealing it against bacteria."
                }
            ]}
            faqs={[
                {
                    id: "1",
                    trigger: "How long do fillings last?",
                    content: "Composite fillings typically last 5-10 years, while crowns and bridges can last 10-15 years or more with good oral hygiene."
                },
                {
                    id: "2",
                    trigger: "Are the procedures painful?",
                    content: "No. We use local anesthesia to ensure you are comfortable throughout the procedure."
                },
                {
                    id: "3",
                    trigger: "Will it look natural?",
                    content: "Yes! We match the shade of the material to your natural teeth, making the restoration virtually invisible."
                },
                {
                    id: "4",
                    trigger: "What materials do you use?",
                    content: "We strictly avoid silver amalgam (mercury). We use BPA-free composites, high-strength Zirconia, and Lithium Disilicate (E-max) ceramics."
                }
            ]}
            ctaTitle="Don't Wait for the Pain"
            ctaDesc="Early treatment is simpler, cheaper, and less invasive. Restore your smile today."
        />
    )
}
