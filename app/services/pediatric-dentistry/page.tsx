import { ServicePageLayout } from "../layout-template"
import { Metadata } from "next"
import { generateServiceSchema, generateFaqSchema, generateBreadcrumbSchema } from "@/components/seo/schema-config"

export const metadata: Metadata = {
    title: "Best Pediatric Dentist in Pune | Kids Dental Care | Dentistree",
    description: "Gentle, fear-free dental care for children in Pune. From first visits to sealants, we build healthy smiles for a lifetime. Book an appointment today.",
    keywords: ["pediatric dentist Pune", "childrens dentist near me", "kids teeth cleaning", "fluoride treatment cost", "baby tooth extraction", "dental sealants for kids"],
    openGraph: {
        title: "Happy Smiles Start Here | Pediatric Dentistry",
        description: "We make dental visits fun! Discover our gentle, child-focused approach to oral health.",
        images: ["/assets/children-1.png"]
    }
}

export default function PediatricPage() {
    const serviceSchema = generateServiceSchema(
        "Pediatric Dentistry",
        "Dental care specializing in children from infancy through the teen years.",
        "/services/pediatric-dentistry",
        "/assets/children-1.png"
    )

    const faqSchema = generateFaqSchema([
        {
            question: "When should I bring my child for their first visit?",
            answer: "The American Academy of Pediatric Dentistry recommends the first visit by age 1 or within 6 months of the first tooth appearing. Early visits help prevent cavities and fear."
        },
        {
            question: "How do you handle scared children?",
            answer: "We use 'Tell-Show-Do' techniques, positive reinforcement, and a playful environment. We never force a child. Patience and building trust are our top priorities."
        },
        {
            question: "Are baby teeth really important?",
            answer: "Yes! They hold space for permanent teeth and are crucial for chewing and speech development. Premature loss can cause crowding issues later."
        },
        {
            question: "What are dental sealants?",
            answer: "Sealants are a quick, painless coating applied to the chewing surfaces of back teeth to prevent cavities by sealing out food and bacteria."
        }
    ])

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Home", item: "/" },
        { name: "Services", item: "/services" },
        { name: "Pediatric Dentistry", item: "/services/pediatric-dentistry" }
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
            title="Pediatric Dentistry in Nanded City, Pune"
            subtitle="Building a foundation of trust and healthy habits for your child's smile."
            heroImage="/assets/children-1.png"
            imageAspect="aspect-square"
            jsonLd={combinedSchema}
            overview="We understand that a child's first experiences with the dentist can shape their attitude towards oral health for life. That's why at Dentistree, we have created a **dental home** designed specifically for kids. From our welcoming environment to our gentle, patient team, everything is focused on making your child feel safe, comfortable, and special. We don't just treat teeth; we treat children."
            benefits={[
                "**Special Needs Care**: Experienced in treating children with anxiety or special needs",
                "**Preventive Focus**: Fluoride, Sealants, and Diet Counseling",
                "**Trauma Management**: Immediate care for chipped or knocked-out teeth",
                "**Habit Correction**: Thumb sucking and pacifier guidance",
                "**Orthodontic Screening**: Early detection of bite issues"
            ]}
            process={[
                {
                    title: "First Visit Fun",
                    desc: "We introduce your child to the dental chair as a 'pilot's seat' and show them our 'magic' tools."
                },
                {
                    title: "Examinaton",
                    desc: "Dr. Poonam gently counts their teeth and checks for any soft tissue issues or decay."
                },
                {
                    title: "Parent Partnership",
                    desc: "We teach you how to care for your child's teeth at home and discuss nutrition for a cavity-free smile."
                }
            ]}
            faqs={[
                {
                    id: "1",
                    trigger: "My child has a cavity. Does it need a filling?",
                    content: "Yes. Cavities in baby teeth can spread quickly and cause pain or infection. We offer tooth-colored fillings and stainless steel crowns for severe decay."
                },
                {
                    id: "2",
                    trigger: "Is fluoride safe?",
                    content: "Yes, when used appropriately. Fluoride strengthens enamel and is essential for preventing cavities."
                },
                {
                    id: "3",
                    trigger: "Do you offer sedation?",
                    content: "For very anxious children or extensive treatment, we can discuss conscious sedation options to ensure a safe and positive experience."
                }
            ]}
            ctaTitle="Start Their Smile Journey Right"
            ctaDesc="Give your child the gift of a healthy smile. Schedule their fun, fear-free visit today."
        />
    )
}
