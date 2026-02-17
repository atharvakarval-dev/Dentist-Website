"use client"

import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import Footer from "@/components/layout/Footer"
import { SectionHeader } from "@/components/ui/section-header"
import { Button } from "@/components/ui/button"
import { Accordion } from "@/components/ui/accordion"
import { motion, useScroll, useTransform } from "framer-motion"
import {
    Check, Phone, Calendar, ArrowRight, Star, Sparkles, ChevronRight,
    Award, Shield, Clock, Users, TrendingUp, Heart
} from "lucide-react"
import { JsonLd } from "@/components/seo/json-ld"
import { useRef } from "react"

interface ServicePageProps {
    title: string
    subtitle: string
    heroImage: string
    overview: string
    benefits: string[]
    process: { title: string; desc: string }[]
    faqs: { id: string; trigger: string; content: string }[]
    ctaTitle?: string
    ctaDesc?: string
    imageAspect?: string
    imageFit?: "cover" | "contain"
    jsonLd?: Record<string, any>
    // NEW: Premium enhancements
    procedureTime?: string
    recoveryTime?: string
    successRate?: string
    patientsSeen?: string
}

// PREMIUM: Trust indicators component
const TrustBadge = ({ icon: Icon, label, value }: { icon: any; label: string; value: string }) => (
    <div className="flex items-center gap-3 px-5 py-3.5 bg-white/80 backdrop-blur-sm rounded-xl border border-stone-200/50 shadow-sm hover:shadow-md transition-all duration-300">
        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-dental-teal/10 flex items-center justify-center">
            <Icon className="w-5 h-5 text-dental-teal" />
        </div>
        <div>
            <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">{label}</p>
            <p className="text-sm font-semibold text-dental-charcoal">{value}</p>
        </div>
    </div>
)

export function ServicePageLayout({
    title,
    subtitle,
    heroImage,
    overview,
    benefits,
    process,
    faqs,
    ctaTitle = "Ready to Transform Your Smile?",
    ctaDesc = "Experience world-class dental care in a setting designed for your comfort.",
    imageAspect = "aspect-[4/3]",
    imageFit = "cover",
    jsonLd,
    // NEW: Default values for premium stats
    procedureTime = "60-90 minutes",
    recoveryTime = "Minimal downtime",
    successRate = "98% success rate",
    patientsSeen = "500+ patients"
}: ServicePageProps) {
    const heroRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"]
    })
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

    return (
        <div className="bg-stone-50 min-h-screen flex flex-col font-sans selection:bg-dental-teal/20 selection:text-dental-teal-dark">
            {jsonLd && <JsonLd data={jsonLd} />}
            <Navbar />

            <main className="flex-1 pt-20">
                {/* IMPORTANT: Semantic HTML for SEO */}
                <article itemScope itemType="https://schema.org/MedicalWebPage">

                    {/* HERO SECTION - Enhanced Premium Editorial */}
                    <section
                        ref={heroRef}
                        className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-[#faf8f5] via-white to-teal-50/20"
                        aria-labelledby="hero-title"
                    >
                        {/* Enhanced Abstract Background */}
                        <div className="absolute inset-0 overflow-hidden pointer-events-none">
                            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-b from-teal-50/50 to-transparent" />
                            <div className="absolute -top-24 -right-24 w-96 h-96 bg-dental-gold/5 rounded-full blur-3xl" />
                            <div className="absolute bottom-0 left-0 w-96 h-96 bg-dental-teal/5 rounded-full blur-3xl" />
                            {/* Subtle pattern overlay */}
                            <div className="absolute inset-0 opacity-[0.015] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMSI+PHBhdGggZD0iTTM2IDE0YzMuMzEgMCA2LTIuNjkgNi02cy0yLjY5LTYtNi02LTYgMi42OS02IDYgMi42OSA2IDYgNnptMCAxMmMzLjMxIDAgNi0yLjY5IDYtNnMtMi42OS02LTYtNi02IDIuNjktNiA2IDIuNjkgNiA2IDZ6bTAgMTJjMy4zMSAwIDYtMi42OSA2LTZzLTIuNjktNi02LTYtNiAyLjY5LTYgNiAyLjY5IDYgNiA2ek0xMiAyYzMuMzEgMCA2LTIuNjkgNi02cy0yLjY5LTYtNi02LTYgMi42OS02IDYgMi42OSA2IDYgNnptMCAxMmMzLjMxIDAgNi0yLjY5IDYtNnMtMi42OS02LTYtNi02IDIuNjktNiA2IDIuNjkgNiA2IDZ6bTAgMTJjMy4zMSAwIDYtMi42OSA2LTZzLTIuNjktNi02LTYtNiAyLjY5LTYgNiAyLjY5IDYgNiA2em0wIDEyYzMuMzEgMCA2LTIuNjkgNi02cy0yLjY5LTYtNi02LTYgMi42OS02IDYgMi42OSA2IDYgNnoiLz48L2c+PC9nPjwvc3ZnPg==')]" />
                        </div>

                        <div className="container px-4 md:px-6 relative z-10 w-full py-12 lg:py-0">
                            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                                <motion.div
                                    initial={{ opacity: 0, x: -30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8, ease: "easeOut" }}
                                    className="max-w-2xl"
                                >
                                    {/* Premium badge with better contrast */}
                                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 backdrop-blur-md border border-dental-gold/20 shadow-sm mb-8">
                                        <Sparkles className="w-4 h-4 text-dental-gold" />
                                        <span className="text-xs font-semibold tracking-wider text-slate-700 uppercase">Advanced Dental Solutions</span>
                                    </div>

                                    <h1
                                        id="hero-title"
                                        className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-dental-charcoal mb-6 leading-[1.1] md:leading-[1.1] tracking-tight"
                                        itemProp="name"
                                    >
                                        {title}
                                        <span className="inline-block w-3 h-3 md:w-4 md:h-4 ml-2 md:ml-4 bg-dental-gold rounded-full mb-1 md:mb-2 align-baseline" aria-hidden="true" />
                                    </h1>

                                    <p
                                        className="text-xl md:text-2xl text-slate-600 leading-relaxed font-light mb-10 max-w-lg border-l-2 border-dental-gold pl-6"
                                        itemProp="description"
                                    >
                                        {subtitle}
                                    </p>

                                    {/* NEW: Trust indicators - Quick stats */}
                                    <div className="grid grid-cols-2 gap-3 mb-10">
                                        <TrustBadge icon={Clock} label="Procedure Time" value={procedureTime} />
                                        <TrustBadge icon={TrendingUp} label="Success Rate" value={successRate} />
                                    </div>

                                    {/* CTAs with better accessibility */}
                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <Button
                                            size="lg"
                                            className="rounded-full bg-dental-teal text-white hover:bg-teal-800 transition-all duration-300 h-14 md:h-16 px-10 text-base md:text-lg shadow-lg hover:shadow-xl group"
                                            asChild
                                        >
                                            <Link href="/contact" className="flex items-center gap-2">
                                                <Calendar className="w-5 h-5" />
                                                Book Free Consultation
                                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                            </Link>
                                        </Button>
                                        <Button
                                            size="lg"
                                            variant="outline"
                                            className="rounded-full h-14 md:h-16 px-10 text-base md:text-lg border-2 border-slate-200 hover:bg-white hover:border-dental-teal hover:text-dental-teal transition-all duration-300"
                                            asChild
                                        >
                                            <Link href="#overview" className="flex items-center gap-2">
                                                Learn More
                                                <ChevronRight className="w-4 h-4" />
                                            </Link>
                                        </Button>
                                    </div>

                                    {/* NEW: Micro trust signals */}
                                    <div className="mt-10 flex items-center gap-6 text-sm text-slate-500">
                                        <div className="flex items-center gap-2">
                                            <Shield className="w-4 h-4 text-dental-teal" />
                                            <span>FDA Approved</span>
                                        </div>
                                        <div className="w-px h-4 bg-slate-300" />
                                        <div className="flex items-center gap-2">
                                            <Award className="w-4 h-4 text-dental-gold" />
                                            <span>Certified Specialists</span>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Enhanced image section */}
                                <motion.div
                                    style={{ y }}
                                    className="relative hidden lg:block h-[75vh] xl:h-[80vh] w-full"
                                >
                                    <div className={`absolute inset-0 ${imageAspect} rounded-bl-[120px] rounded-tr-[40px] overflow-hidden shadow-2xl ring-1 ring-black/5`}>
                                        <Image
                                            src={heroImage}
                                            alt={`${title} - Professional dental treatment at Dentistree`}
                                            fill
                                            className={`object-${imageFit} hover:scale-105 transition-transform duration-1000`}
                                            priority
                                            sizes="(max-width: 1024px) 100vw, 50vw"
                                        />
                                        {/* Premium gradient overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-dental-charcoal/30 via-transparent to-transparent mix-blend-multiply" />
                                    </div>

                                    {/* Enhanced Floating Testimonial Card */}
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                                        animate={{ opacity: 1, scale: 1, y: 0 }}
                                        transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
                                        className="absolute -bottom-8 -left-8 xl:-left-16 bg-white p-6 rounded-2xl shadow-2xl max-w-[280px] hidden xl:block border border-stone-100"
                                    >
                                        <div className="flex items-center gap-1 text-dental-gold mb-3">
                                            {[1, 2, 3, 4, 5].map(i => (
                                                <Star key={i} className="w-4 h-4 fill-current" />
                                            ))}
                                        </div>
                                        <p className="text-sm font-medium text-slate-800 leading-relaxed mb-3">
                                            "The level of care and attention to detail is simply unmatched. I felt truly valued."
                                        </p>
                                        <div className="flex items-center gap-3 pt-3 border-t border-stone-100">
                                            <div className="w-8 h-8 rounded-full bg-dental-teal/10 flex items-center justify-center">
                                                <Heart className="w-4 h-4 text-dental-teal" />
                                            </div>
                                            <div className="text-xs">
                                                <p className="font-semibold text-slate-700">Verified Patient</p>
                                                <p className="text-slate-500">Treated in 2024</p>
                                            </div>
                                        </div>
                                    </motion.div>

                                    {/* NEW: Accreditation Badge */}
                                    <motion.div
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.8, duration: 0.5 }}
                                        className="absolute top-8 -right-4 bg-dental-gold text-white px-4 py-2 rounded-l-full shadow-lg hidden xl:flex items-center gap-2"
                                    >
                                        <Award className="w-5 h-5" />
                                        <span className="text-sm font-semibold">Excellence Award 2024</span>
                                    </motion.div>
                                </motion.div>
                            </div>
                        </div>
                    </section>

                    {/* OVERVIEW & BENEFITS - Enhanced with better hierarchy */}
                    <section
                        id="overview"
                        className="py-24 md:py-32 relative bg-white"
                        aria-labelledby="overview-title"
                    >
                        {/* Subtle decorative element */}
                        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-dental-gold/20 to-transparent" />

                        <div className="container px-4 md:px-6">
                            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                                {/* Left Content - Sticky */}
                                <div className="lg:col-span-5 relative">
                                    <div className="lg:sticky lg:top-32">
                                        <SectionHeader
                                            label="Overview"
                                            title="Why Choose This Treatment?"
                                        />
                                        <div className="prose prose-lg text-slate-600 font-light leading-relaxed mt-6">
                                            <p itemProp="about">
                                                {overview.split('**').map((part, index) =>
                                                    index % 2 === 1 ? (
                                                        <strong key={index} className="font-semibold text-dental-teal-dark">
                                                            {part}
                                                        </strong>
                                                    ) : part
                                                )}
                                            </p>
                                        </div>

                                        {/* NEW: Key stats inline */}
                                        <div className="mt-10 grid grid-cols-2 gap-4">
                                            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
                                                <Users className="w-5 h-5 text-dental-teal mb-2" />
                                                <p className="text-2xl font-display font-semibold text-dental-charcoal">{patientsSeen}</p>
                                                <p className="text-xs text-slate-500 uppercase tracking-wide">Successfully Treated</p>
                                            </div>
                                            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
                                                <Clock className="w-5 h-5 text-dental-teal mb-2" />
                                                <p className="text-2xl font-display font-semibold text-dental-charcoal">{recoveryTime}</p>
                                                <p className="text-xs text-slate-500 uppercase tracking-wide">Recovery Time</p>
                                            </div>
                                        </div>

                                        <div className="mt-8 h-px w-24 bg-gradient-to-r from-dental-gold to-transparent" />
                                    </div>
                                </div>

                                {/* Right Cards - Enhanced Premium Grid */}
                                <div className="lg:col-span-7">
                                    <h3 className="text-2xl font-display text-dental-charcoal mb-8">
                                        Key Benefits & Advantages
                                    </h3>
                                    <div className="grid md:grid-cols-2 gap-5">
                                        {benefits.map((benefit, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ opacity: 0, y: 20 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true, margin: "-50px" }}
                                                transition={{ delay: i * 0.08, duration: 0.5 }}
                                                className="group relative bg-gradient-to-br from-white to-stone-50/50 border border-stone-200/60 p-7 rounded-2xl shadow-sm hover:shadow-xl hover:border-dental-teal/30 hover:-translate-y-1 transition-all duration-300 flex flex-col items-start"
                                            >
                                                {/* Number indicator */}
                                                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-dental-teal text-white flex items-center justify-center text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                                                    {i + 1}
                                                </div>

                                                <div className="w-12 h-12 rounded-xl bg-dental-teal/5 flex items-center justify-center mb-5 group-hover:bg-dental-teal group-hover:scale-110 transition-all duration-300 shadow-sm group-hover:shadow-md">
                                                    <Check className="w-5 h-5 text-dental-teal group-hover:text-white transition-colors" strokeWidth={2.5} />
                                                </div>
                                                <h4 className="text-lg md:text-xl font-display font-medium text-dental-charcoal leading-snug group-hover:text-dental-teal-dark transition-colors">
                                                    {benefit.split('**').map((part, index) =>
                                                        index % 2 === 1 ? (
                                                            <span key={index} className="text-dental-teal font-semibold">
                                                                {part}
                                                            </span>
                                                        ) : part
                                                    )}
                                                </h4>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* PROCESS - Enhanced Timeline */}
                    <section
                        className="py-24 md:py-32 bg-gradient-to-b from-stone-50 to-white relative overflow-hidden"
                        aria-labelledby="process-title"
                    >
                        {/* Background decoration */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-dental-teal/[0.02] rounded-full blur-3xl pointer-events-none" />

                        <div className="container px-4 md:px-6 relative z-10">
                            <SectionHeader
                                center
                                label="The Journey"
                                title="Your Experience, Step by Step"
                                subtitle="We believe in transparency and precision at every stage of your treatment."
                            />

                            <div className="mt-16 md:mt-20 relative max-w-5xl mx-auto">
                                {/* Enhanced Connecting Line */}
                                <div className="hidden md:block absolute left-1/2 -ml-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-dental-teal/0 via-dental-teal/40 to-dental-teal/0" />

                                <div className="space-y-8 md:space-y-12">
                                    {process.map((step, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, y: 30 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true, margin: "-100px" }}
                                            transition={{ duration: 0.6, ease: "easeOut" }}
                                            className={`relative flex flex-col md:flex-row md:items-center gap-6 md:gap-10 ${i % 2 === 0 ? "md:flex-row-reverse" : ""
                                                }`}
                                        >
                                            <div className="flex-1 md:w-1/2" />

                                            {/* Enhanced Number Badge */}
                                            <div className="relative z-10 flex-none">
                                                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white shadow-xl border-4 border-dental-teal flex items-center justify-center text-dental-teal font-display text-xl md:text-2xl font-bold mx-auto md:mx-0 relative">
                                                    {i + 1}
                                                    {/* Pulse animation */}
                                                    <span className="absolute inset-0 rounded-full bg-dental-teal/20 animate-ping" />
                                                </div>
                                            </div>

                                            <div className="flex-1 md:w-1/2">
                                                <motion.div
                                                    whileHover={{ scale: 1.02 }}
                                                    className={`p-6 md:p-8 rounded-2xl bg-white border border-stone-200 hover:shadow-lg hover:border-dental-teal/20 transition-all duration-300 ${i % 2 === 0 ? "md:text-right" : ""
                                                        }`}
                                                >
                                                    <h3 className="text-xl md:text-2xl font-display text-dental-teal-dark mb-3 flex items-center gap-2 justify-center md:justify-start">
                                                        {i % 2 === 0 ? (
                                                            <>{step.title} <ChevronRight className="w-5 h-5 text-dental-gold md:hidden" /></>
                                                        ) : (
                                                            <><ChevronRight className="w-5 h-5 text-dental-gold md:hidden" /> {step.title}</>
                                                        )}
                                                    </h3>
                                                    <p className="text-slate-600 leading-relaxed text-center md:text-left">
                                                        {step.desc}
                                                    </p>
                                                </motion.div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* FAQ - Enhanced Minimalist */}
                    <section
                        className="py-24 md:py-32 bg-white"
                        aria-labelledby="faq-title"
                    >
                        <div className="container px-4 md:px-6 max-w-4xl">
                            <SectionHeader
                                center
                                label="Common Questions"
                                title="Everything You Need to Know"
                                subtitle="We've answered the most common questions about this treatment."
                            />
                            <div className="mt-10 md:mt-14 space-y-3">
                                <Accordion items={faqs} />
                            </div>

                            {/* NEW: Still have questions CTA */}
                            <div className="mt-12 text-center p-8 rounded-2xl bg-stone-50 border border-stone-200">
                                <h3 className="text-xl font-display text-dental-charcoal mb-3">
                                    Still have questions?
                                </h3>
                                <p className="text-slate-600 mb-6">
                                    Our dental specialists are here to help you make the right decision.
                                </p>
                                <Button
                                    variant="outline"
                                    className="rounded-full border-2 border-dental-teal text-dental-teal hover:bg-dental-teal hover:text-white"
                                    asChild
                                >
                                    <Link href="/contact" className="flex items-center gap-2">
                                        <Phone className="w-4 h-4" />
                                        Speak with a Specialist
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </section>

                    {/* CTA - Enhanced Premium */}
                    <section className="py-24 md:py-32 relative overflow-hidden bg-gradient-to-br from-dental-teal via-teal-700 to-teal-900">
                        {/* Enhanced background patterns */}
                        <div className="absolute inset-0">
                            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay" />
                            <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-transparent" />
                            {/* Animated gradient orbs */}
                            <motion.div
                                animate={{
                                    scale: [1, 1.2, 1],
                                    opacity: [0.3, 0.5, 0.3]
                                }}
                                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -top-32 -right-32 w-96 h-96 bg-dental-gold/20 rounded-full blur-3xl"
                            />
                            <motion.div
                                animate={{
                                    scale: [1.2, 1, 1.2],
                                    opacity: [0.2, 0.4, 0.2]
                                }}
                                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -bottom-32 -left-32 w-96 h-96 bg-white/10 rounded-full blur-3xl"
                            />
                        </div>

                        <div className="container px-4 md:px-6 relative z-10 text-center">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                {/* Premium badge */}
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8">
                                    <Sparkles className="w-4 h-4 text-dental-gold" />
                                    <span className="text-xs font-semibold tracking-wider text-white uppercase">
                                        Premium Dental Care
                                    </span>
                                </div>

                                <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-6 md:mb-8 leading-tight max-w-4xl mx-auto">
                                    {ctaTitle}
                                </h2>
                                <p className="text-lg md:text-xl text-teal-50 max-w-2xl mx-auto mb-10 md:mb-12 font-light leading-relaxed">
                                    {ctaDesc}
                                </p>

                                {/* Enhanced CTA buttons */}
                                <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6 mb-12">
                                    <Button
                                        size="lg"
                                        className="rounded-full bg-white text-dental-teal-dark hover:bg-dental-gold hover:text-white border-0 h-14 md:h-16 px-10 md:px-12 text-lg font-semibold shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300 w-full sm:w-auto group"
                                        asChild
                                    >
                                        <Link href="/contact" className="flex items-center gap-2">
                                            <Calendar className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                            Schedule Free Consultation
                                        </Link>
                                    </Button>
                                    <Button
                                        size="lg"
                                        variant="outline"
                                        className="rounded-full h-14 md:h-16 px-10 md:px-12 text-lg border-2 border-white/50 text-white hover:bg-white/20 hover:border-white backdrop-blur-sm w-full sm:w-auto"
                                        asChild
                                    >
                                        <Link href="tel:+918237156777" className="flex items-center gap-2 justify-center">
                                            <Phone className="w-5 h-5" />
                                            Call: 82371 56777
                                        </Link>
                                    </Button>
                                </div>

                                {/* NEW: Trust signals in CTA */}
                                <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 text-sm text-white/80">
                                    <div className="flex items-center gap-2">
                                        <Check className="w-4 h-4 text-dental-gold" />
                                        <span>Free Consultation</span>
                                    </div>
                                    <div className="hidden sm:block w-px h-4 bg-white/30" />
                                    <div className="flex items-center gap-2">
                                        <Check className="w-4 h-4 text-dental-gold" />
                                        <span>Flexible Payment Plans</span>
                                    </div>
                                    <div className="hidden sm:block w-px h-4 bg-white/30" />
                                    <div className="flex items-center gap-2">
                                        <Check className="w-4 h-4 text-dental-gold" />
                                        <span>Same-Day Appointments</span>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </section>

                </article>
            </main>
            <Footer />
        </div>
    )
}
