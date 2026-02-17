import { ServicePageLayout } from "../layout-template"
import { Metadata } from "next"
import { generateServiceSchema, generateFaqSchema, generateBreadcrumbSchema } from "@/components/seo/schema-config"

export const metadata: Metadata = {
    title: "Best Orthodontist in Pune | Invisalign & Braces Cost | Dentistree",
    description: "Transform your smile with expert orthodontic care in Pune. We offer Invisalign, clear aligners, and metal braces for children and adults. Book your scan today.",
    keywords: ["orthodontist Pune", "Invisalign cost Pune", "clear aligners", "teeth straightening", "metal braces cost", "adult braces", "pediatric orthodontist"],
    openGraph: {
        title: "Straight Teeth, No Secrets | Expert Orthodontics",
        description: "From invisible aligners to traditional braces, we design smiles that last a lifetime. Discover your perfect fit.",
        images: ["/assets/invisible-braces.jpg"]
    }
}

export default function OrthodonticsPage() {
    const serviceSchema = generateServiceSchema(
        "Orthodontics & Aligners",
        "Correction of misaligned teeth using braces and clear aligners.",
        "/services/orthodontics",
        "/assets/invisible-braces.jpg"
    )

    const faqSchema = generateFaqSchema([
        {
            question: "What is better: Braces or Invisalign?",
            answer: "It depends on your lifestyle and case complexity. Invisalign is removable and virtually invisible, making it popular for adults. Braces are often more effective for complex bite issues. We will guide you to the best choice during your consultation."
        },
        {
            question: "Does straightening teeth hurt?",
            answer: "You may feel some pressure or soreness for a few days after adjustments or changing aligners, but modern orthodontics is much more comfortable than in the past."
        },
        {
            question: "How much does Invisalign cost?",
            answer: "Invisalign treatment is an investment in your smile. Costs vary based on the number of aligners needed. We offer flexible payment plans to make it affordable."
        },
        {
            question: "Am I too old for braces?",
            answer: "Never! Healthy teeth can be moved at any age. We treat many adults in their 40s, 50s, and beyond who want to improve their smile and bite."
        }
    ])

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Home", item: "/" },
        { name: "Services", item: "/services" },
        { name: "Orthodontics", item: "/services/orthodontics" }
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
            title="Orthodontics & Aligners in Nanded City, Pune"
            subtitle="Straighten your smile your way. Choose from invisible aligners or precision braces."
            heroImage="/assets/invisible-braces.jpg"
            jsonLd={combinedSchema}
            overview="Orthodontics is about more than just a pretty smile—it's about a healthy bite that lasts a lifetime. Misaligned teeth can lead to jaw pain, difficulty cleaning, and uneven wear. At Dentistree, we combine **digital precision** with clinical expertise to create smiles that are balanced, functional, and beautiful. Whether you are a teen wanting 'cool' colors or a professional seeking a discreet solution like **Invisalign**, we have the technology to deliver results faster and more comfortably."
            benefits={[
                "**Invisalign Provider**: Clear, removable, comfortable",
                "**Digital Scanning**: No more messy goop impressions",
                "Correction of Overbite, Underbite, and Crowding",
                "Adult & Pediatric Orthodontics specialist",
                "Flexible payment plans available"
            ]}
            process={[
                {
                    title: "Digital Scan",
                    desc: "We use an intraoral 3D scanner to create a precise digital model of your teeth in minutes. No gagging on impression material!"
                },
                {
                    title: "Smile Simulation",
                    desc: "Using AI, we simulate your treatment outcome. You can see your future straight smile before we even start."
                },
                {
                    title: "Active Alignment",
                    desc: "Whether you choose trays or brackets, we monitor your progress every 6-8 weeks to ensure teeth are moving safely."
                }
            ]}
            faqs={[
                {
                    id: "1",
                    trigger: "Do I have to wear a retainer?",
                    content: "Yes, 'Retention is Prevention'. After active treatment, wearing a retainer (usually at night) is the only way to guarantee your teeth stay straight forever."
                },
                {
                    id: "2",
                    trigger: "How long does treatment take?",
                    content: "Simple cases can be treated in 6 months using aligners. Complex bite corrections typicall take 18-24 months."
                },
                {
                    id: "3",
                    trigger: "Can I eat normally?",
                    content: "With Invisalign, yes! You take them out to eat. With braces, you'll need to avoid sticky or hard foods that could break the brackets."
                }
            ]}
            ctaTitle="Your Best Smile Awaits"
            ctaDesc="Ready to see the difference? Book your free orthodontic scan today."
        />
    )
}
