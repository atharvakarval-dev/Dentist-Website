import { ServicePageLayout } from "../layout-template"
import { Metadata } from "next"
import { generateServiceSchema, generateFaqSchema, generateBreadcrumbSchema } from "@/components/seo/schema-config"

export const metadata: Metadata = {
    title: "Painless Tooth Extraction in Pune | Wisdom Teeth & Socket Preservation",
    description: "Expert tooth extraction services in Pune focusing on comfort and preservation. We specialize in painless removal, wisdom teeth, and immediate bone grafting.",
    keywords: ["tooth extraction Pune", "wisdom tooth removal cost", "painless extraction", "socket preservation", "dental surgery Pune", "emergency tooth pulling"],
    openGraph: {
        title: "Gentle Tooth Extraction & Replacement | Dentistree",
        description: "Experience anxiety-free extractions with our specialized preservation techniques. Your comfort is our priority.",
        images: ["/assests/client-6.png"]
    }
}

export default function ExtractionPage() {
    const serviceSchema = generateServiceSchema(
        "Tooth Extraction",
        "Surgical and non-surgical removal of teeth with socket preservation techniques.",
        "/services/extraction-replacement",
        "/assests/client-6.png"
    )

    const faqSchema = generateFaqSchema([
        {
            question: "Is wisdom tooth extraction painful?",
            answer: "The procedure is done under effective local anesthesia, so you won't feel pain. Post-op discomfort is managed with medication and typically subsides within 2-3 days."
        },
        {
            question: "What is socket preservation?",
            answer: "It's a bone grafting procedure done comfortably at the time of extraction. It prevents your jawbone from shrinking, ensuring you have enough bone for a future implant."
        },
        {
            question: "Can I get an implant immediately?",
            answer: "In many cases, yes. 'Immediate Implants' can be placed in the socket right after extraction, reducing surgery time and preserving bone."
        }
    ])

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Home", item: "/" },
        { name: "Services", item: "/services" },
        { name: "Extraction & Replacement", item: "/services/extraction-replacement" }
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
            title="Extraction & Replacement"
            subtitle="Gentle, precise removal of problematic teeth with a focus on future restoration."
            heroImage="/assests/client-6.png"
            jsonLd={combinedSchema}
            overview="We believe that **extraction is the first step of rehabilitation**, not the end of a tooth. Our approach is 'Preservation-First'. When a tooth must be removed—due to severe decay, infection, or impaction (wisdom teeth)—we perform the procedure with extreme gentleness to preserve the surrounding bone and gum tissue. This 'atraumatic' technique is critical for ensuring that you can easily replace the tooth with an implant or bridge later."
            benefits={[
                "Atraumatic extraction techniques",
                "Socket preservation (Bone Grafting) included",
                "Wisdom tooth expertise",
                "Minimal post-operative swelling",
                "Immediate replacement planning"
            ]}
            process={[
                {
                    title: "3D Planning",
                    desc: "For complex cases (like impacted wisdom teeth), we use CBCT (3D Scans-if needed) to map the nerve position for safety."
                },
                {
                    title: "Gentle Removal",
                    desc: "We section the tooth and remove it in pieces if necessary, avoiding forceful pulling that damages the bone."
                },
                {
                    title: "Site Preservation",
                    desc: "We place a bone graft or a collagen plug in the socket to speed up healing and maintain bone volume."
                }
            ]}
            faqs={[
                {
                    id: "1",
                    trigger: "Do you do sedation?",
                    content: "We use highly effective local anesthesia. For anxious patients, we offer conscious sedation options to make the experience relaxing."
                },
                {
                    id: "2",
                    trigger: "How long is recovery?",
                    content: "For simple extractions, 24 hours. Surgical/Wisdom teeth may need 3-5 days for full recovery. We provide detailed aftercare instructions."
                },
                {
                    id: "3",
                    trigger: "What happens if I don't replace the tooth?",
                    content: "The surrounding teeth will drift into the gap, affecting your bite. The jawbone will also shrink (resorb) over time, making future treatment harder."
                }
            ]}
            ctaTitle="Relief is One Call Away"
            ctaDesc="Don't let a painful tooth disrupt your life. Schedule your gentle extraction today."
        />
    )
}
