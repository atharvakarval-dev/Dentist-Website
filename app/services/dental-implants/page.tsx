import { ServicePageLayout } from "../layout-template"
import { Metadata } from "next"
import { generateServiceSchema, generateFaqSchema, generateBreadcrumbSchema } from "@/components/seo/schema-config"

export const metadata: Metadata = {
    title: "Best Dental Implants in Pune | Permanent Tooth Replacement | Dentistree",
    description: "Restore your smile permanently with expert dental implants in Pune. We offer single tooth implants, implant bridges, and full-mouth rehabilitation. Natural look and feel.",
    keywords: ["dental implants Pune", "tooth implant cost", "titanium implants", "implant dentist near me", "full mouth dental implants", "single tooth replacement"],
    openGraph: {
        title: "Permanent Solution for Missing Teeth | Expert Implantology",
        description: "Regain 100% created chewing function and a natural smile with our advanced dental implant solutions.",
        images: ["/assests/client-6.png"]
    }
}

export default function ImplantsPage() {
    const serviceSchema = generateServiceSchema(
        "Dental Implants",
        "Surgical placement of dental implants to replace missing teeth.",
        "/services/dental-implants",
        "/assests/client-6.png"
    )

    const faqSchema = generateFaqSchema([
        {
            question: "Are dental implants safe?",
            answer: "Yes. Implants have been used for decades with a success rate of over 95%. They are made of biocompatible titanium that integrates with your bone."
        },
        {
            question: "Is the surgery painful?",
            answer: "Most patients report less discomfort than a tooth extraction. The procedure is done under local anesthesia, and post-op soreness is minimal."
        },
        {
            question: "How long do they last?",
            answer: "With proper care (brushing, flossing, regular checkups), dental implants are designed to last a lifetime."
        },
        {
            question: "Are they expensive?",
            answer: "While the initial cost is higher than dentures or bridges, implants are a long-term investment that doesn't need frequent replacement, making them cost-effective over time."
        }
    ])

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Home", item: "/" },
        { name: "Services", item: "/services" },
        { name: "Dental Implants", item: "/services/dental-implants" }
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
            title="Dental Implants"
            subtitle="The next best thing to your natural teeth. Eat, speak, and smile with confidence again."
            heroImage="/assests/client-8.png"
            jsonLd={combinedSchema}
            overview="Missing teeth can affect more than just your smile—they can impact your ability to chew, your speech, and even cause bone loss in your jaw. At Dentistree, we provide **state-of-the-art dental implants** that are the gold standard for tooth replacement. Unlike dentures that can slip or bridges that require grinding down healthy teeth, implants are anchored directly into your jawbone, stimulating it just like a natural tooth root. The result is a replacement that looks, feels, and functions exactly like your own tooth."
            benefits={[
                "**Permanent Solution**: Designed to last a lifetime",
                "**Bone Preservation**: Prevents jawbone shrinkage",
                "**Natural Aesthetics**: Custom-made crowns match your smile",
                "**No damage to adjacent teeth** (unlike bridges)",
                "**Chewing Power**: Eat apples, nuts, and steak without worry"
            ]}
            process={[
                {
                    title: "3D Planning (CBCT)",
                    desc: "We use advanced 3D imaging to visualize your bone structure and plan the precise placement of the implant for maximum safety."
                },
                {
                    title: "Implant Placement",
                    desc: "The titanium post is gently placed into the jawbone. This is usually a quick procedure done under local anesthesia."
                },
                {
                    title: "Osseointegration",
                    desc: "Over 3-6 months, the implant fuses with your jawbone to create a rock-solid foundation."
                },
                {
                    title: "Final Restoration",
                    desc: "Once healed, we attach a custom-crafted crown or bridge, completing your smile transformation."
                }
            ]}
            faqs={[
                {
                    id: "1",
                    trigger: "Am I a candidate for implants?",
                    content: "Most adults with good general health and sufficient bone are candidates. If bone is lacking, we can perform bone grafting to build it up."
                },
                {
                    id: "2",
                    trigger: "Do you offer 'Same Day Teeth'?",
                    content: "In specific cases (like full mouth All-on-4), we can place implants and temporary teeth in a single day."
                },
                {
                    id: "3",
                    trigger: "How do I care for my implant?",
                    content: "Just like a natural tooth! Brush, floss, and visit us for regular cleanings to keep the gum around the implant healthy."
                }
            ]}
            ctaTitle="Reclaim Your Smile"
            ctaDesc="Don't let missing teeth hold you back. Discover the freedom of dental implants."
        />
    )
}
