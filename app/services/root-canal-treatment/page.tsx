import { ServicePageLayout } from "../layout-template"
import { Metadata } from "next"
import { generateServiceSchema, generateFaqSchema, generateBreadcrumbSchema } from "@/components/seo/schema-config"

export const metadata: Metadata = {
    title: "Painless Root Canal in Pune | Single Visit RCT | Dentistree",
    description: "Save your natural tooth with advanced, microscopic root canal treatment in Pune. Pain-free, precise, and completed in a single visit effectively.",
    keywords: ["root canal treatment cost Pune", "painless RCT", "single sitting root canal", "endodontist Pune", "microscopic root canal", "infected tooth treatment"],
    openGraph: {
        title: "Painless Root Canal Therapy | Save Your Tooth",
        description: "Stop the pain, keep your tooth. Discover our advanced, anxiety-free root canal treatments.",
        images: ["/assests/root-canal.png"]
    }
}

export default function RootCanalPage() {
    const serviceSchema = generateServiceSchema(
        "Root Canal Treatment",
        "Endodontic therapy to save an infected tooth.",
        "/services/root-canal-treatment",
        "/assests/root-canal.png"
    )

    const faqSchema = generateFaqSchema([
        {
            question: "Is root canal treatment painful?",
            answer: "No. This is the biggest myth! With modern anesthesia and techniques, a root canal is no more painful than getting a filling. In fact, it relieves the pain caused by the infection."
        },
        {
            question: "How long does it take?",
            answer: "Most treatments are completed in a single visit of about 45-60 minutes. Complex cases may require a second appointment."
        },
        {
            question: "Do I need a crown afterward?",
            answer: "Yes. A root canal treated tooth becomes brittle over time because the blood supply is removed. A crown protects it from fracturing and restores its full strength."
        },
        {
            question: "Can't I just pull the tooth?",
            answer: "Extraction is always a last resort. Saving your natural tooth is better for chewing, keeps your other teeth from shifting, and is often cheaper than replacing it with an implant."
        }
    ])

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Home", item: "/" },
        { name: "Services", item: "/services" },
        { name: "Root Canal Treatment", item: "/services/root-canal-treatment" }
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
            title="Root Canal Treatment"
            subtitle="Don't lose your tooth. Save it with our gentle, advanced microscopic care."
            heroImage="/assests/root-canal.png"
            jsonLd={combinedSchema}
            overview="When the nerve inside a tooth becomes infected due to deep decay or a crack, it can cause severe pain. **Root Canal Treatment (RCT)** is the only way to remove that infection and save your natural tooth from extraction. At Dentistree, we use **Microscopic Endodontics**—a high-tech approach that allows us to see inside the tiny canals clearly. This precision ensures we clean 100% of the infection, making the procedure faster, cleaner, and virtually painless."
            benefits={[
                "**Save Your Tooth**: Keep your natural smile intact",
                "**Immediate Pain Relief**: Stop the toothache instantly",
                "**Microscopic Precision**: 99.8% success rate",
                "**Single Visit Options**: Done in one sitting for your convenience",
                "**Comfort protocols**: Painless injection techniques"
            ]}
            process={[
                {
                    title: "Digital Imaging",
                    desc: "We take a digital X-ray to see the shape of the root canals and determine if there is any infection in the surrounding bone."
                },
                {
                    title: "Cleaning & Shaping",
                    desc: "Under local anesthesia, we access the nerve chamber and remove the infected tissue using advanced rotary files."
                },
                {
                    title: "Sealing",
                    desc: "Once clean, the canals are filled with a biocompatible material (Gutta-Percha) to seal them off from future bacteria."
                }
            ]}
            faqs={[
                {
                    id: "1",
                    trigger: "What are the signs I need a root canal?",
                    content: "Severe toothache, sensitivity to hot/cold that lingers, pain when chewing, or a pimple (abscess) on the gums are common signs."
                },
                {
                    id: "2",
                    trigger: "What is a 'Single Sitting' RCT?",
                    content: "Thanks to rotary instruments and better disinfectants, we can often complete the entire cleaning and sealing process in one appointment, saving you time."
                },
                {
                    id: "3",
                    trigger: "Is it expensive?",
                    content: "Saving your tooth with a root canal is usually less expensive than extracting it and replacing it with an implant or bridge."
                }
            ]}
            ctaTitle="Stop the Pain Today"
            ctaDesc="You don't have to suffer. Let us save your tooth and your smile with gentle care."
        />
    )
}
