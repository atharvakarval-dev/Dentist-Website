
"use client"

import { Star } from "lucide-react"
import Image from "next/image"
import { JsonLd } from "@/components/seo/json-ld"

const REVIEWS = [
    {
        author: "Jaykumar Girase",
        rating: 5,
        date: "2 months ago",
        text: "My braces treatment has started at this clinic and I’m very satisfied with the care so far. The dentist explained each step, answered all my questions, and handled everything very gently.",
        initial: "J"
    },
    {
        author: "Mainak Bhowmick",
        rating: 5,
        date: "1 month ago",
        text: "I visited the clinic twice and had a great experience on both occasions. The first time I went for a toothache and was diagnosed with a cavity. Instead of suggesting any expensive procedure, the doctor recommended the most convenient option.",
        initial: "M"
    },
    {
        author: "Anand Kamble",
        rating: 5,
        date: "3 months ago",
        text: "My 3-year-old child needed treatment... the doctor handled him with so much patience and care. They explained the problem clearly in simple terms.",
        initial: "A"
    },
    {
        author: "Rahul Surkar",
        rating: 5,
        date: "2 weeks ago",
        text: "Dentistree dental clinic is clean and healthy place for all sorts of dental treatments.. The Doctor Poonam very friendly, informative, well versed and prioritize patient comfort.",
        initial: "R"
    },
    {
        author: "Shridhar Bhave",
        rating: 5,
        date: "4 months ago",
        text: "I visited Dentistree Dental Clinic for a routine check-up and flossing. Dr Poonam's precision and gentleness were exemplary. The modern, well-organized set-up is impressive.",
        initial: "S"
    },
    {
        author: "Meena Kadam",
        rating: 5,
        date: "5 months ago",
        text: "I had severe tooth pain, so Poonam Mam did my root canal and fixed the cap on my teeth in a very reasonable price. Now I am absolutely fine.",
        initial: "M"
    }
]

export function ReviewsSection() {
    const reviewSchema = {
        "@context": "https://schema.org",
        "@type": "ItemReview",
        "itemReviewed": {
            "@type": "Dentist",
            "name": "Dentistree Dental Clinic",
            "image": "https://dentistreepune.com/assets/Clinic2.png",
            "telephone": "+918237156777",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "R B Ingale Plaza, Nanded City",
                "addressLocality": "Pune",
                "postalCode": "411068",
                "addressCountry": "IN"
            }
        },
        "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5"
        },
        "author": {
            "@type": "Person",
            "name": "Multiple Patients"
        }
    }

    return (
        <section className="py-20 bg-slate-50">
            <JsonLd data={reviewSchema} />
            <div className="container px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-semibold uppercase tracking-wide mb-6">
                        <Star className="w-3 h-3 fill-current" />
                        Google Reviews
                    </div>
                    <h2 className="font-display text-4xl md:text-5xl font-medium text-dental-charcoal mb-6">
                        Patient Stories
                    </h2>
                    <p className="text-lg text-slate-600">
                        Rated 5.0/5 stars by our happy patients on Google.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {REVIEWS.map((review, i) => (
                        <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-lg">
                                    {review.initial}
                                </div>
                                <div>
                                    <p className="font-semibold text-slate-900">{review.author}</p>
                                    <p className="text-xs text-slate-500">{review.date}</p>
                                </div>
                                <div className="ml-auto flex">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                                    ))}
                                </div>
                            </div>
                            <p className="text-slate-600 text-sm leading-relaxed line-clamp-4">
                                "{review.text}"
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <a
                        href="https://g.page/r/Cb-y8J8Z4ZAlEBM/review"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 rounded-full text-slate-700 font-medium hover:bg-slate-50 transition-colors"
                    >
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                        </svg>
                        See all reviews on Google
                    </a>
                </div>
            </div>
        </section>
    )
}
