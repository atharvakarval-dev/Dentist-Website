"use client"

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import ServiceCard from "@/components/ui/ServiceCard";
import { motion } from "framer-motion";
import {
    ShieldCheck,
    Activity,
    Zap,
    Crown,
    Sparkles,
    Smile,
    Heart,
    Layers,
    Shield,
    Sun,
    Puzzle,
    Phone,
    Baby
} from "lucide-react";

// Animation variants
const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6 },
    },
}

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
}

export default function ServicesPage() {
    const services = [
        {
            title: "Preventive Dental Care",
            description: "Preventive dentistry forms the foundation of long-term oral health. Services include routine examinations, prophylaxis (cleaning), digital X-rays, and oral hygiene instructions.",
            icon: <ShieldCheck className="w-8 h-8" />,
            features: ["Routine Exams", "Cleanings", "Digital X-Rays"]
        },
        {
            title: "Root Canal Treatment",
            description: "Root Canal Therapy treats infected or inflamed tooth pulp and preserves the natural tooth structure. We use advanced rotary endodontic systems for higher precision.",
            icon: <Activity className="w-8 h-8" />,
            features: ["Painless Procedures", "Single Sitting", "Rotary Endo"]
        },
        {
            title: "Dental Implants",
            description: "Dental Implants serve as a superior replacement for missing teeth and help restore both aesthetics and oral function. We use biocompatible titanium implants.",
            icon: <Zap className="w-8 h-8" />,
            features: ["Titanium Implants", "Natural Look", "Lifetime Warranty"]
        },
        {
            title: "Crowns & Bridges",
            description: "We offer a full range of fixed and removable prosthetic solutions including ceramic crowns, bridges, partial dentures, and full dentures.",
            icon: <Crown className="w-8 h-8" />,
            features: ["Zirconia Crowns", "Ceramic Bridges", "Durable Fit"]
        },
        {
            title: "Cosmetic Dentistry",
            description: "Our cosmetic dentistry services include veneers, composite bonding, aesthetic restorations, and whitening procedures using digital smile designing.",
            icon: <Sparkles className="w-8 h-8" />,
            features: ["Veneers", "Smile Makeover", "Bonding"]
        },
        {
            title: "Orthodontics",
            description: "We provide conventional braces and clear aligner systems to correct malocclusion, crowding, spacing, and bite discrepancies.",
            icon: <Smile className="w-8 h-8" />,
            features: ["Metal Braces", "Clear Aligners", "Retainers"]
        },
        {
            title: "Periodontal Treatment",
            description: "Gum disease management including scaling, root planing, and maintenance to control inflammation and prevent bone loss.",
            icon: <Layers className="w-8 h-8" />,
            features: ["Deep Cleaning", "Gum Surgery", "Maintenance"]
        },
        {
            title: "Oral Surgery",
            description: "Perform routine and surgical extractions with meticulous care. Services also include impacted tooth removal and pre-prosthetic surgery.",
            icon: <Shield className="w-8 h-8" />,
            features: ["Wisdom Teeth", "Extractions", "Safe Protocol"]
        },
        {
            title: "Teeth Whitening",
            description: "Professional whitening treatments safely remove stains caused by food, beverages, or aging resulting in visibly brighter teeth.",
            icon: <Sun className="w-8 h-8" />,
            features: ["Instant Results", "Safe", "Enamel Friendly"]
        },
        {
            title: "Dentures",
            description: "Complete and partial denture solutions for tooth replacement. Full-mouth rehabilitation combines multiple treatments for comprehensive restoration.",
            icon: <Puzzle className="w-8 h-8" />,
            features: ["Custom Fit", "Flexible", "Natural Feel"]
        },
        {
            title: "Emergency Care",
            description: "Immediate attention for dental emergencies to relieve pain and prevent further damage. We prioritize same-day appointments.",
            icon: <Phone className="w-8 h-8" />,
            features: ["Same Day", "Pain Relief", "Broken Teeth"]
        },
    ];

    return (
        <div className="bg-slate-50 min-h-screen flex flex-col">
            <Navbar />

            <main className="flex-1 pb-20">
                {/* Header */}
                <section className="relative bg-gradient-to-br from-blue-50 to-white py-20 lg:py-28 overflow-hidden">
                    {/* Abstract Shapes */}
                    <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-100/30 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-1/4 h-full bg-emerald-100/30 blur-3xl rounded-full translate-y-1/2 -translate-x-1/3" />

                    <div className="container relative z-10 px-4 sm:px-6 lg:px-8 text-center">
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-4"
                        >
                            Our Treatments
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight"
                        >
                            World-Class <span className="text-primary">Dental Services</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed"
                        >
                            We provide a full spectrum of dental treatments. Whatever your dental needs, we ensure precise, safe, and minimally invasive treatments.
                        </motion.p>
                    </div>
                </section>

                {/* Pediatric Dentistry Highlight */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-slate-100 overflow-hidden relative"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-60" />

                        <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
                            <div className="h-20 w-20 md:h-24 md:w-24 bg-yellow-100 rounded-full flex items-center justify-center shrink-0">
                                <Baby className="w-10 h-10 md:w-12 md:h-12 text-yellow-600" />
                            </div>
                            <div className="flex-1 text-center md:text-left">
                                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">Pediatric Dentistry (For Kids)</h2>
                                <p className="text-slate-600 mb-6 text-lg">Our goal is to ensure positive early dental experiences. We specialize in child psychology and painless management.</p>
                                <div className="flex flex-wrap justify-center md:justify-start gap-3">
                                    {["Fluoride Treatments", "Dental Sealants", "Cavity Management", "Habit Counseling", "Space Maintainers", "Emergency Care"].map((item, i) => (
                                        <span key={i} className="text-sm font-medium text-slate-700 bg-slate-100 border border-slate-200 px-4 py-2 rounded-full">
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </section>

                {/* Services Grid */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {services.map((service, idx) => (
                            <motion.div key={idx} variants={fadeIn}>
                                <ServiceCard {...service} />
                            </motion.div>
                        ))}
                    </motion.div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
