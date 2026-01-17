"use client"

import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FocusRail, FocusRailItem } from "@/components/focus-rail"
import { motion } from "framer-motion"
import {
    ShieldCheck,
    Activity,
    Zap,
    Crown,
    Sparkles,
    Smile,
    Layers,
    Shield,
    Sun,
    Puzzle,
    Phone,
    Baby,
    ArrowRight,
    Check,
    Calendar,
    Stethoscope,
} from "lucide-react"
import { Button } from "@/components/ui/button"

// Clinic gallery images
const galleryItems: FocusRailItem[] = [
    {
        id: 1,
        title: "Modern Treatment Room",
        description: "State-of-the-art dental equipment for precise treatments",
        imageSrc: "/assests/clinic1.png",
        meta: "Our Facility",
    },
    {
        id: 2,
        title: "Reception & Waiting Area",
        description: "Comfortable and welcoming space for our patients",
        imageSrc: "/assests/Clinic2.png",
        meta: "Our Facility",
    },
    {
        id: 3,
        title: "About Dentistree",
        description: "15+ years of trusted dental care excellence",
        imageSrc: "/assests/AboutUs.png",
        meta: "Our Clinic",
    },
    {
        id: 4,
        title: "Happy Patients",
        description: "Thousands of smiles we've transformed",
        imageSrc: "/assests/2025-03-10.jpg",
        meta: "Patient Care",
    },
    {
        id: 5,
        title: "Advanced Technology",
        description: "Digital diagnostics and modern treatment methods",
        imageSrc: "/assests/2025-08-13.webp",
        meta: "Technology",
    },
]


// Premium animation variants
const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
    },
}

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.08,
            delayChildren: 0.1,
        },
    },
}

// Service card with gradient accent
interface ServiceCardProps {
    title: string
    description: string
    features?: string[]
    icon?: React.ReactNode
    gradient: string
}

function ServiceCard({ title, description, features, icon, gradient }: ServiceCardProps) {
    return (
        <motion.div
            variants={fadeInUp}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className="group relative bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-100 hover:shadow-xl hover:border-transparent transition-all duration-500 flex flex-col h-full overflow-hidden"
        >
            {/* Hover gradient glow */}
            <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl`} />

            {/* Subtle top accent line */}
            <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${gradient} rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity`} />

            <div className="relative z-10 flex flex-col h-full">
                <div className={`w-14 h-14 bg-gradient-to-br ${gradient} text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {icon}
                </div>

                <h3 className="font-display text-xl md:text-2xl font-semibold text-slate-800 mb-3 group-hover:text-teal-700 transition-colors">{title}</h3>
                <p className="text-slate-600 leading-relaxed mb-6 flex-grow">{description}</p>

                {features && features.length > 0 && (
                    <ul className="space-y-2 mb-6">
                        {features.map((feature, index) => (
                            <li key={index} className="flex items-center text-slate-700 text-sm">
                                <span className="bg-teal-100 text-teal-600 rounded-full p-1 mr-3 flex-shrink-0">
                                    <Check className="w-3 h-3" strokeWidth={3} />
                                </span>
                                {feature}
                            </li>
                        ))}
                    </ul>
                )}

                <div className="mt-auto pt-5 border-t border-slate-100 flex items-center text-teal-600 font-medium text-sm cursor-pointer group/btn">
                    <Link href="/#contact" className="flex items-center">
                        Book Consultation
                        <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </motion.div>
    )
}

export default function ServicesPage() {
    const services = [
        {
            title: "Preventive Dental Care",
            description: "Preventive dentistry forms the foundation of long-term oral health. Services include routine examinations, prophylaxis (cleaning), digital X-rays, and oral hygiene instructions.",
            icon: <ShieldCheck className="w-7 h-7" />,
            features: ["Routine Exams", "Cleanings", "Digital X-Rays"],
            gradient: "from-teal-500 to-emerald-500"
        },
        {
            title: "Root Canal Treatment",
            description: "Root Canal Therapy treats infected or inflamed tooth pulp and preserves the natural tooth structure. We use advanced rotary endodontic systems for higher precision.",
            icon: <Activity className="w-7 h-7" />,
            features: ["Painless Procedures", "Single Sitting", "Rotary Endo"],
            gradient: "from-rose-500 to-pink-500"
        },
        {
            title: "Dental Implants",
            description: "Dental Implants serve as a superior replacement for missing teeth and help restore both aesthetics and oral function. We use biocompatible titanium implants.",
            icon: <Zap className="w-7 h-7" />,
            features: ["Titanium Implants", "Natural Look", "Lifetime Warranty"],
            gradient: "from-violet-500 to-purple-500"
        },
        {
            title: "Crowns & Bridges",
            description: "We offer a full range of fixed and removable prosthetic solutions including ceramic crowns, bridges, partial dentures, and full dentures.",
            icon: <Crown className="w-7 h-7" />,
            features: ["Zirconia Crowns", "Ceramic Bridges", "Durable Fit"],
            gradient: "from-amber-500 to-orange-500"
        },
        {
            title: "Cosmetic Dentistry",
            description: "Our cosmetic dentistry services include veneers, composite bonding, aesthetic restorations, and whitening procedures using digital smile designing.",
            icon: <Sparkles className="w-7 h-7" />,
            features: ["Veneers", "Smile Makeover", "Bonding"],
            gradient: "from-sky-500 to-blue-500"
        },
        {
            title: "Orthodontics",
            description: "We provide conventional braces and clear aligner systems to correct malocclusion, crowding, spacing, and bite discrepancies.",
            icon: <Smile className="w-7 h-7" />,
            features: ["Metal Braces", "Clear Aligners", "Retainers"],
            gradient: "from-indigo-500 to-violet-500"
        },
        {
            title: "Periodontal Treatment",
            description: "Gum disease management including scaling, root planing, and maintenance to control inflammation and prevent bone loss.",
            icon: <Layers className="w-7 h-7" />,
            features: ["Deep Cleaning", "Gum Surgery", "Maintenance"],
            gradient: "from-cyan-500 to-teal-500"
        },
        {
            title: "Oral Surgery",
            description: "Perform routine and surgical extractions with meticulous care. Services also include impacted tooth removal and pre-prosthetic surgery.",
            icon: <Shield className="w-7 h-7" />,
            features: ["Wisdom Teeth", "Extractions", "Safe Protocol"],
            gradient: "from-slate-600 to-slate-700"
        },
        {
            title: "Teeth Whitening",
            description: "Professional whitening treatments safely remove stains caused by food, beverages, or aging resulting in visibly brighter teeth.",
            icon: <Sun className="w-7 h-7" />,
            features: ["Instant Results", "Safe", "Enamel Friendly"],
            gradient: "from-yellow-500 to-amber-500"
        },
        {
            title: "Dentures",
            description: "Complete and partial denture solutions for tooth replacement. Full-mouth rehabilitation combines multiple treatments for comprehensive restoration.",
            icon: <Puzzle className="w-7 h-7" />,
            features: ["Custom Fit", "Flexible", "Natural Feel"],
            gradient: "from-fuchsia-500 to-pink-500"
        },
        {
            title: "Emergency Care",
            description: "Immediate attention for dental emergencies to relieve pain and prevent further damage. We prioritize same-day appointments.",
            icon: <Phone className="w-7 h-7" />,
            features: ["Same Day", "Pain Relief", "Broken Teeth"],
            gradient: "from-red-500 to-rose-500"
        },
        {
            title: "Pediatric Dentistry",
            description: "Our goal is to ensure positive early dental experiences for kids. We specialize in child psychology and painless management.",
            icon: <Baby className="w-7 h-7" />,
            features: ["Fluoride Treatments", "Dental Sealants", "Habit Counseling"],
            gradient: "from-amber-400 to-yellow-500"
        },
    ]

    return (
        <div className="bg-[#faf8f5] min-h-screen flex flex-col">
            <Navbar />

            <main className="flex-1">
                {/* Hero Header */}
                <section className="relative py-20 lg:py-28 overflow-hidden gradient-hero">
                    {/* Decorative elements */}
                    <div className="absolute top-10 right-10 w-72 h-72 bg-teal-200/30 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-100/40 rounded-full blur-3xl" />

                    <div className="container relative z-10 px-4 sm:px-6 lg:px-8 text-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center gap-2 rounded-full bg-teal-50 px-4 py-2 border border-teal-100 mb-6"
                        >
                            <Stethoscope className="h-4 w-4 text-teal-600" />
                            <span className="text-sm font-medium text-teal-700">Our Expertise</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1, duration: 0.7 }}
                            className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-slate-800 mb-6 tracking-tight"
                        >
                            Premium{" "}
                            <span className="text-gradient-primary">Dental Services</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.7 }}
                            className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed mb-12"
                        >
                            We provide a full spectrum of dental treatments with precision, safety, and minimally invasive techniques for optimal results.
                        </motion.p>

                        {/* Integrated Carousel */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            className="max-w-5xl mx-auto"
                        >
                            <FocusRail
                                items={galleryItems}
                                autoPlay={true}
                                interval={5000}
                                loop={true}
                            />
                        </motion.div>
                    </div>
                </section>

                {/* Services Grid */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12 md:mb-16"
                    >
                        <div className="inline-flex items-center gap-2 rounded-full bg-teal-50 px-4 py-2 border border-teal-100 mb-4">
                            <Sparkles className="h-4 w-4 text-teal-600" />
                            <span className="text-sm font-medium text-teal-700">Our Treatments</span>
                        </div>
                        <h2 className="font-display text-3xl md:text-4xl font-semibold text-slate-800">
                            Comprehensive Care Solutions
                        </h2>
                    </motion.div>

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
                    >
                        {services.map((service, idx) => (
                            <ServiceCard key={idx} {...service} />
                        ))}
                    </motion.div>
                </section>

                {/* CTA Section */}
                <section className="py-16 md:py-24 bg-gradient-to-br from-teal-600 via-teal-700 to-emerald-700 relative overflow-hidden">
                    {/* Decorative elements */}
                    <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2" />
                    <div className="absolute bottom-0 right-0 w-72 h-72 bg-amber-300/10 rounded-full blur-3xl translate-y-1/2" />

                    <div className="container px-4 md:px-6 relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center max-w-3xl mx-auto"
                        >
                            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-4 py-2 border border-white/20 mb-6">
                                <Calendar className="h-4 w-4 text-amber-300" />
                                <span className="text-sm font-medium text-white/90">Book Your Visit</span>
                            </div>

                            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-6">
                                Ready to Transform Your Smile?
                            </h2>
                            <p className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed">
                                Schedule a consultation with Dr. Poonam Bambarkar today and take the first step towards a healthier, brighter smile.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button
                                    size="lg"
                                    className="rounded-full px-8 py-6 text-base font-medium bg-white text-teal-700 hover:bg-white/90 shadow-xl"
                                    asChild
                                >
                                    <Link href="/#contact">
                                        Book Appointment
                                        <ArrowRight className="ml-2 h-5 w-5" />
                                    </Link>
                                </Button>
                                <Button
                                    variant="outline"
                                    size="lg"
                                    className="rounded-full px-8 py-6 text-base font-medium border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50"
                                    asChild
                                >
                                    <Link href="tel:+910000000000">
                                        <Phone className="mr-2 h-5 w-5" />
                                        Call Now
                                    </Link>
                                </Button>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}
