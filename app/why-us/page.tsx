"use client"

import React, { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import Footer from "@/components/layout/Footer"

import { Button } from "@/components/ui/button"
const Clinic1 = "/assests/clinic1.png"
import {
    ShieldCheck,
    Stethoscope,
    Heart,
    Users,
    Calendar,
    Award,
    Sparkles,
    Star,
    ArrowRight,
    Zap,
    TrendingUp,
    Smile,
    Microscope,
    Baby,
    Phone,
    MapPin,
    Clock,
    CheckCircle2,
} from "lucide-react"
import { motion, useScroll, useTransform, useInView, useSpring } from "framer-motion"

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
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
}

export default function WhyUsPage() {
    const sectionRef = useRef<HTMLDivElement>(null)
    const statsRef = useRef<HTMLDivElement>(null)
    const isInView = useInView(sectionRef, { once: true, amount: 0.1 })
    const isStatsInView = useInView(statsRef, { once: true, amount: 0.3 })

    interface ServiceData {
        icon: React.ReactNode
        title: string
        description: string
        gradient: string
    }

    const services: ServiceData[] = [
        {
            icon: <Award className="w-6 h-6" />,
            title: "15+ Years Expertise",
            description:
                "Led by Dr. Poonam Bambarkar, combining over a decade of clinical excellence with continuous learning in modern dentistry.",
            gradient: "from-teal-500 to-emerald-500",
        },
        {
            icon: <Microscope className="w-6 h-6" />,
            title: "Modern Technology",
            description:
                "We utilize digital diagnostics, rotary endodontics, and systematic sterilization protocols to ensure safe and precise treatments.",
            gradient: "from-violet-500 to-purple-500",
        },
        {
            icon: <Baby className="w-6 h-6" />,
            title: "Family Friendly",
            description:
                "Our space is designed to reduce anxiety, especially for young children, providing a comfortable environment for the whole family.",
            gradient: "from-amber-500 to-orange-500",
        },
        {
            icon: <Users className="w-6 h-6" />,
            title: "Patient Centered",
            description:
                "We prioritize your comfort and safety. Our treatment plans are evidence-based and tailored to your specific oral health needs.",
            gradient: "from-sky-500 to-blue-500",
        },
        {
            icon: <ShieldCheck className="w-6 h-6" />,
            title: "Transparent & Safe",
            description:
                "Clear explanation of diagnosis, transparent pricing, and strict hygiene protocols are the pillars of our practice.",
            gradient: "from-rose-500 to-pink-500",
        },
        {
            icon: <TrendingUp className="w-6 h-6" />,
            title: "Long-term Health",
            description:
                "We focus not just on fixing immediate problems, but on preventative care to ensure healthy smiles for years to come.",
            gradient: "from-indigo-500 to-violet-500",
        },
    ]

    const stats = [
        { icon: <Calendar className="w-6 h-6" />, value: 15, label: "Years Experience", suffix: "+", gradient: "from-teal-500 to-emerald-500" },
        { icon: <Users className="w-6 h-6" />, value: 5000, label: "Happy Patients", suffix: "+", gradient: "from-sky-500 to-blue-500" },
        { icon: <Star className="w-6 h-6" />, value: 5, label: "Star Rating", suffix: ".0", gradient: "from-amber-500 to-orange-500" },
        { icon: <ShieldCheck className="w-6 h-6" />, value: 100, label: "Safety Protocol", suffix: "%", gradient: "from-violet-500 to-purple-500" },
    ]

    return (
        <div className="flex flex-col min-h-screen bg-[#faf8f5]">
            <Navbar />

            <main className="flex-1">
                {/* Hero Section */}
                <section className="relative pt-32 pb-12 lg:pt-48 lg:pb-16 overflow-hidden gradient-hero">
                    {/* Decorative elements */}
                    <div className="absolute top-10 left-10 w-72 h-72 bg-teal-200/30 rounded-full blur-3xl" />
                    <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-100/40 rounded-full blur-3xl" />

                    <div className="container relative z-10 px-4 md:px-6 text-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center gap-2 rounded-full bg-teal-50 px-4 py-2 border border-teal-100 mb-6"
                        >
                            <Zap className="h-4 w-4 text-teal-600" />
                            <span className="text-sm font-medium text-teal-700">Why Choose Us</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1, duration: 0.7 }}
                            className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-slate-800 mb-6 tracking-tight"
                        >
                            The Dentistree{" "}
                            <span className="text-gradient-primary">Difference</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.7 }}
                            className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
                        >
                            Dentistree Dental Clinic provides complete family dentistry under one roof.
                            We blend trusted clinical expertise with a warm, sterilized environment to ensure
                            your dental journey is comfortable, safe, and effective.
                        </motion.p>
                    </div>
                </section>

                {/* Main Content Section */}
                <section
                    ref={sectionRef}
                    className="py-10 md:py-16"
                >
                    <div className="container mx-auto px-4 md:px-6 max-w-7xl">
                        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-16">
                            {/* Image Side */}
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="relative"
                            >
                                {/* Decorative frame */}
                                <div className="absolute -top-3 -left-3 w-full h-full border-2 border-teal-200 rounded-[1.5rem] md:rounded-[2rem]" />

                                <div className="relative h-[280px] sm:h-[350px] md:h-[450px] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-2xl">
                                    <Image
                                        src={Clinic1}
                                        alt="Dentistree Clinic"
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 1024px) 100vw, 50vw"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent" />
                                </div>

                                {/* Floating badge */}
                                <motion.div
                                    initial={{ scale: 0, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.5, type: "spring" }}
                                    className="absolute -top-6 -right-6 glass rounded-2xl px-5 py-4 shadow-xl hidden md:flex items-center gap-3"
                                >
                                    <div className="h-12 w-12 rounded-xl gradient-primary flex items-center justify-center text-white">
                                        <Sparkles className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-slate-800">Premium Care</p>
                                        <p className="text-sm text-slate-500">Modern Facility</p>
                                    </div>
                                </motion.div>

                                {/* Bottom floating card */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.6 }}
                                    className="absolute bottom-4 left-4 right-4 sm:-bottom-6 sm:left-4 sm:right-auto glass rounded-2xl p-4 shadow-xl"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="flex gap-0.5">
                                            {[1, 2, 3, 4, 5].map((i) => (
                                                <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 fill-amber-400 text-amber-400" />
                                            ))}
                                        </div>
                                        <div className="text-left">
                                            <p className="font-semibold text-slate-800 text-sm sm:text-base">5.0 Rating</p>
                                            <p className="text-xs sm:text-sm text-slate-500">33+ Reviews</p>
                                        </div>
                                    </div>
                                </motion.div>
                            </motion.div>

                            {/* Content Side */}
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={staggerContainer}
                                className="space-y-6"
                            >
                                <motion.div variants={fadeInUp}>
                                    <div className="inline-flex items-center gap-2 rounded-full bg-teal-50 px-4 py-2 border border-teal-100 mb-4">
                                        <Stethoscope className="h-4 w-4 text-teal-600" />
                                        <span className="text-sm font-medium text-teal-700">Our Promise</span>
                                    </div>
                                    <h2 className="font-display text-3xl md:text-4xl font-semibold text-slate-800">
                                        Excellence in Every Detail
                                    </h2>
                                </motion.div>

                                <motion.p variants={fadeInUp} className="text-lg text-slate-600 leading-relaxed">
                                    At Dentistree, we believe every patient deserves exceptional care. Our commitment to
                                    clinical excellence, patient comfort, and transparent communication sets us apart.
                                </motion.p>

                                <motion.div variants={fadeInUp} className="space-y-4 pt-4">
                                    {[
                                        "Evidence-based treatment protocols",
                                        "State-of-the-art sterilization",
                                        "Gentle, pain-free procedures",
                                        "Honest, upfront pricing",
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <div className="h-6 w-6 rounded-full gradient-primary flex items-center justify-center">
                                                <CheckCircle2 className="h-4 w-4 text-white" />
                                            </div>
                                            <span className="text-slate-700 font-medium">{item}</span>
                                        </div>
                                    ))}
                                </motion.div>

                                <motion.div variants={fadeInUp} className="pt-4">
                                    <Button
                                        size="lg"
                                        className="rounded-full px-8 py-6 text-base gradient-primary hover:opacity-90 shadow-premium-lg"
                                        asChild
                                    >
                                        <Link href="/#contact">
                                            Book Consultation
                                            <ArrowRight className="ml-2 h-5 w-5" />
                                        </Link>
                                    </Button>
                                </motion.div>
                            </motion.div>
                        </div>

                        {/* Services Grid */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-12"
                        >
                            <div className="inline-flex items-center gap-2 rounded-full bg-teal-50 px-4 py-2 border border-teal-100 mb-4">
                                <Sparkles className="h-4 w-4 text-teal-600" />
                                <span className="text-sm font-medium text-teal-700">What Sets Us Apart</span>
                            </div>
                            <h2 className="font-display text-3xl md:text-4xl font-semibold text-slate-800">
                                The Dentistree Advantage
                            </h2>
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={staggerContainer}
                            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                        >
                            {services.map((service, idx) => (
                                <motion.div
                                    key={idx}
                                    variants={fadeInUp}
                                    whileHover={{ y: -8, transition: { duration: 0.3 } }}
                                    className="group relative bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-xl hover:border-transparent transition-all duration-500"
                                >
                                    {/* Hover glow */}
                                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl`} />

                                    <div className={`h-14 w-14 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center text-white mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                        {service.icon}
                                    </div>
                                    <h3 className="font-display text-xl font-semibold text-slate-800 mb-3 group-hover:text-teal-700 transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="text-slate-600 leading-relaxed">{service.description}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* Stats Section */}
                <section className="py-16 md:py-24 bg-white">
                    <div className="container px-4 md:px-6 max-w-6xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-12"
                        >
                            <div className="inline-flex items-center gap-2 rounded-full bg-amber-50 px-4 py-2 border border-amber-100 mb-4">
                                <Award className="h-4 w-4 text-amber-500" />
                                <span className="text-sm font-medium text-amber-700">Our Track Record</span>
                            </div>
                            <h2 className="font-display text-3xl md:text-4xl font-semibold text-slate-800">
                                Numbers That Speak
                            </h2>
                        </motion.div>

                        <motion.div
                            ref={statsRef}
                            initial="hidden"
                            animate={isStatsInView ? "visible" : "hidden"}
                            variants={staggerContainer}
                            className="grid grid-cols-2 lg:grid-cols-4 gap-6"
                        >
                            {stats.map((stat, index) => (
                                <StatCounter
                                    key={index}
                                    icon={stat.icon}
                                    value={stat.value}
                                    label={stat.label}
                                    suffix={stat.suffix}
                                    gradient={stat.gradient}
                                    delay={index * 0.1}
                                    isInView={isStatsInView}
                                />
                            ))}
                        </motion.div>
                    </div>
                </section>





                {/* CTA Section */}
                <section className="py-16 md:py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
                    {/* Decorative elements */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl" />

                    <div className="container px-4 md:px-6 relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center max-w-3xl mx-auto"
                        >
                            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-4 py-2 border border-white/20 mb-6">
                                <Calendar className="h-4 w-4 text-teal-400" />
                                <span className="text-sm font-medium text-white/90">Ready to Start?</span>
                            </div>

                            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-6">
                                Experience the{" "}
                                <span className="text-gradient-gold">Dentistree Difference</span>
                            </h2>
                            <p className="text-lg md:text-xl text-white/70 mb-10 leading-relaxed">
                                Join thousands of happy families who trust us with their smiles. Book your consultation today.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button
                                    size="lg"
                                    className="rounded-full px-8 py-6 text-base font-medium gradient-primary hover:opacity-90 shadow-xl"
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
                                    <Link href="tel:+918237156777">
                                        <Phone className="mr-2 h-5 w-5" />
                                        Call Now
                                    </Link>
                                </Button>
                            </div>

                            {/* Contact info */}
                            <div className="flex flex-wrap items-center justify-center gap-6 mt-10 text-white/60 text-sm">
                                <div className="flex items-center gap-2">
                                    <MapPin className="h-4 w-4 text-teal-400" />
                                    <span>Nanded City, Sinhagad Road, Pune</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Clock className="h-4 w-4 text-teal-400" />
                                    <span>Mon - Sat: 10 AM - 8 PM</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </main>

            <Footer />
        </div >
    )
}

interface StatCounterProps {
    icon: React.ReactNode
    value: number
    label: string
    suffix: string
    gradient: string
    delay: number
    isInView: boolean
}

function StatCounter({ icon, value, label, suffix, gradient, delay, isInView }: StatCounterProps) {
    const countRef = useRef(null)
    const [hasAnimated, setHasAnimated] = useState(false)

    const springValue = useSpring(0, {
        stiffness: 50,
        damping: 10,
    })

    useEffect(() => {
        if (isInView && !hasAnimated) {
            springValue.set(value)
            setHasAnimated(true)
        }
    }, [isInView, value, springValue, hasAnimated])

    const displayValue = useTransform(springValue, (latest) => Math.floor(latest))

    return (
        <motion.div
            className="bg-[#faf8f5] p-6 rounded-2xl flex flex-col items-center text-center group hover:shadow-xl transition-all duration-300 border border-slate-100"
            variants={fadeInUp}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
        >
            <motion.div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-4 text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
            >
                {icon}
            </motion.div>
            <motion.div ref={countRef} className="text-3xl md:text-4xl font-display font-bold text-slate-800 flex items-center">
                <motion.span>{displayValue}</motion.span>
                <span className="text-teal-600">{suffix}</span>
            </motion.div>
            <p className="text-slate-500 font-medium mt-2">{label}</p>
        </motion.div>
    )
}
