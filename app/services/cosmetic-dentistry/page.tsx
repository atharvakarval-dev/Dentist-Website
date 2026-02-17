import { ServicePageLayout } from "../layout-template"
import { Metadata } from "next"
import { generateServiceSchema, generateFaqSchema, generateBreadcrumbSchema } from "@/components/seo/schema-config"

export const metadata: Metadata = {
    title: "Expert Cosmetic Dentistry in Pune | Smile Design & Whitening | Dentistree",
    description: "Achieve the smile of your dreams with expert cosmetic dentistry. Veneers, teeth whitening, and complete smile makeovers in Pune. Book your consultation.",
    keywords: ["cosmetic dentist Pune", "smile makeover cost", "porcelain veneers", "teeth whitening near me", "dental bonding", "composite veneers cost"],
    openGraph: {
        title: "Design Your Perfect Smile | Cosmetic Excellence",
        description: "Your smile is your signature. Let us help you make it unforgettable with our custom aesthetic treatments.",
        images: ["/assests/client-10.jpeg"]
    }
}

export default function CosmeticPage() {
    const serviceSchema = generateServiceSchema(
        "Cosmetic Dentistry",
        "Aesthetic dental treatments including whitening, veneers, and smile makeovers.",
        "/services/cosmetic-dentistry",
        "/assests/client-10.jpeg"
    )

    const faqSchema = generateFaqSchema([
        {
            question: "How long do veneers last?",
            answer: "High-quality porcelain veneers can last 10-15 years or more with proper care. We use durable, stain-resistant materials for long-lasting beauty."
        },
        {
            question: "Is teeth whitening safe for my enamel?",
            answer: "Yes. Professional whitening supervised by a dentist is completely safe. We use pH-balanced gels that brighten your teeth without damaging the enamel structure."
        },
        {
            question: "What if I have a chipped tooth?",
            answer: "We can fix chips easily with 'Cosmetic Bonding'—a quick, painless procedure using tooth-colored resin that is shaped and polished to match your natural tooth perfectly."
        }
    ])

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Home", item: "/" },
        { name: "Services", item: "/services" },
        { name: "Cosmetic Dentistry", item: "/services/cosmetic-dentistry" }
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
            title="Cosmetic Dentistry"
            subtitle="Art meets science. Transform your smile with treatments designed uniquely for you."
            heroImage="/assests/client3.png"
            jsonLd={combinedSchema}
            overview="Your smile is often the first thing people notice about you. If you find yourself hiding your teeth in photos or covering your mouth when you laugh, **Cosmetic Dentistry** can change your life. At Dentistree, we don't just fix teeth; we design smiles that harmonize with your face and personality. Using Digital Smile Design (DSD) technology, we plan every detail—from the shape and shade of your veneers to the symmetry of your gums—ensuring a result that looks stunningly natural, never fake."
            benefits={[
                "**Digital Smile Design**: Preview your new smile before we start",
                "**Porcelain Veneers**: Permanent correction for shape and color",
                "**Professional Whitening**: Safe, effective brightening up to 8 shades",
                "**Composite Bonding**: Quick fix for chips and gaps",
                "**Gum Contouring**: Correct 'gummy' smiles for better balance"
            ]}
            process={[
                {
                    title: "Consultation & Photos",
                    desc: "We listen to your desires and take high-resolution photos and videos to analyze your smile dynamics."
                },
                {
                    title: "Digital Mockup",
                    desc: "We create a digital simulation of your new smile. You can see the 'After' photo and give feedback."
                },
                {
                    title: "Transformation",
                    desc: "Whether it's one visit for whitening or two for veneers, we execute the plan with artistic precision."
                }
            ]}
            faqs={[
                {
                    id: "1",
                    trigger: "Will my new smile look natural?",
                    content: "Absolutely. We customize the translucency, texture, and shade of veneers to mimic natural enamel. No one will know you've had work done—they'll just see a great smile."
                },
                {
                    id: "2",
                    trigger: "Does insurance cover cosmetic work?",
                    content: "Typically, cosmetic procedures are elective and not covered. However, if a procedure also restores health (like a crown on a broken tooth), partial coverage may apply."
                },
                {
                    id: "3",
                    trigger: "Is the process painful?",
                    content: "Most cosmetic procedures are non-invasive or minimally invasive. We ensure your comfort with local anesthesia whenever necessary."
                }
            ]}
            ctaTitle="Love Your Smile Again"
            ctaDesc="Confidence is just an appointment away. Let's design the smile you've always wanted."
        />
    )
}
