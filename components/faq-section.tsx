
"use client"

import { Accordion } from "@/components/ui/accordion"
import { JsonLd } from "@/components/seo/json-ld"
import { HelpCircle } from "lucide-react"

const FAQS = [
    {
        question: "Is root canal treatment painful?",
        answer: "Not at all. At Dentistree, we use advanced rotary instruments and effective anesthesia to ensuring a virtually painless experience, similar to a regular filling. Most patients feel immediate relief from their tooth pain after the procedure."
    },
    {
        question: "Do you treat small children?",
        answer: "Yes, we specialize in pediatric dentistry. Dr. Poonam has treated over 450+ children. We use a gentle 'Tell-Show-Do' approach to make kids feel safe and comfortable. We also offer fluoride treatments and sealants to prevent cavities."
    },
    {
        question: "What are your clinic timings?",
        answer: "We are open 7 days a week from 10:00 AM to 9:00 PM. We understand dental emergencies can happen anytime, so we keep our schedule flexible to accommodate urgent cases."
    },
    {
        question: "Do you offer dental implants?",
        answer: "Yes, we provide high-quality dental implants to replace missing teeth. We use standard, certified implant systems that offer a natural look and permanent solution for missing teeth."
    },
    {
        question: "How much does a consultation cost?",
        answer: "Our consultation fees are very reasonable. We believe in transparency and will provide a detailed treatment plan and cost estimate after your initial check-up, so there are no surprises."
    }
]

export function FAQSection() {
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": FAQS.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    }

    const accordionItems = FAQS.map((faq, i) => ({
        id: `item-${i}`,
        trigger: faq.question,
        content: faq.answer
    }))

    return (
        <section className="py-24 bg-white">
            <JsonLd data={faqSchema} />
            <div className="container px-4 md:px-6 max-w-3xl mx-auto">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-xs font-semibold uppercase tracking-wide mb-6">
                        <HelpCircle className="w-3 h-3" />
                        Common Questions
                    </div>
                    <h2 className="font-display text-4xl md:text-5xl font-medium text-dental-charcoal mb-6">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-lg text-slate-600">
                        Everything you need to know about your dental visit.
                    </p>
                </div>

                <Accordion items={accordionItems} className="w-full space-y-4" />
            </div>
        </section>
    )
}
