"use client"

import { useState, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { Navbar } from "@/components/navbar"
import Footer from "@/components/layout/Footer"
import { Button } from "@/components/ui/button"
import { JsonLd } from "@/components/seo/json-ld"
import {
    MapPin, Phone, Star, Check, X, ChevronRight,
    CalendarCheck, Clock, Shield, Smile, ChevronDown,
    ArrowUpRight, Stethoscope, Baby, Sparkles, Zap,
} from "lucide-react"

// ─────────────────────────────────────────────────────────────────────────────
// DATA — single source of truth
// ─────────────────────────────────────────────────────────────────────────────

const CLINIC = {
    name: "Dentistree Dental Clinic",
    address: "Ingale Plaza, Shop No. 1, Next to Uttam Sweets, Nanded City Road, Sinhagad Road, Pune 411068",
    phone: "+918237156777",
    phoneDisplay: "+91 82371 56777",
    email: "info@dentistreedental.com",
    url: "https://dentistreedental.com/dentist-in-nanded-city",
    mapsUrl: "https://maps.google.com/?q=Dentistree+Dental+Clinic+Nanded+City+Pune+411068",
    lat: 18.4735,
    lng: 73.8235,
} as const

const STATS = [
    { value: "5.0", unit: "★", label: "Google Rating" },
    { value: "30+", unit: "", label: "Verified Reviews" },
    { value: "450+", unit: "", label: "Happy Kids Treated" },
    { value: "15+", unit: "yrs", label: "Clinical Experience" },
] as const

const SERVICES = [
    {
        icon: Zap,
        title: "Root Canal Treatment",
        subtitle: "Endodontics",
        desc: "Save your natural tooth with advanced rotary tech. Single-sitting, anxiety-free.",
        href: "/services/root-canal-treatment",
    },
    {
        icon: Shield,
        title: "Fillings, Crowns & Bridges",
        subtitle: "Restorative",
        desc: "Durable, natural-looking restorations that blend seamlessly with your smile.",
        href: "/services/restorative",
    },
    {
        icon: Baby,
        title: "Paediatric Dentistry",
        subtitle: "Kids",
        desc: "Fun, fear-free care for little ones. 450+ kids trust us. Yours will too.",
        href: "/services/pediatric-dentistry",
    },
    {
        icon: Sparkles,
        title: "Cosmetic Dentistry",
        subtitle: "Aesthetics",
        desc: "Veneers, whitening and smile makeovers that restore your confidence.",
        href: "/services",
    },
    {
        icon: Smile,
        title: "Orthodontics",
        subtitle: "Braces & Aligners",
        desc: "Invisible aligners and metal braces — for teens and adults alike.",
        href: "/services",
    },
    {
        icon: Stethoscope,
        title: "Dental Implants",
        subtitle: "Implantology",
        desc: "Permanent tooth replacement that looks, feels and functions like the real thing.",
        href: "/services",
    },
] as const

const STEPS = [
    {
        num: "01",
        title: "Warm Welcome, No Waiting",
        desc: "We value your time. Walk in and get settled immediately — zero-wait policy, every time.",
    },
    {
        num: "02",
        title: "Digital Scan & Diagnosis",
        desc: "Advanced cameras show you exactly what's going on. No guessing, no jargon.",
    },
    {
        num: "03",
        title: "Honest Conversation",
        desc: "We discuss options that fit your budget and goals. You decide. You're in control.",
    },
] as const

const TYPICAL = [
    "Long, unpredictable wait times",
    "Confusing medical jargon",
    "Pushed into expensive treatments",
    "Rushed 10-minute appointments",
]

const DENTISTREE_WAY = [
    "Zero-wait policy, always",
    "Visual explainers & photos",
    "Conservative, ethical care",
    "45-minute dedicated slots",
]

const FAQS = [
    {
        q: "Do you treat specialised cases for children?",
        a: "Yes. Dr. Poonam Bambarkar is paediatric-trained and has treated 450+ children. We handle habit-breaking, fluoride treatments, sealants, and complex paediatric cases in a fear-free environment.",
    },
    {
        q: "What if my child is afraid of the dentist?",
        a: "We're a fear-free clinic. Our entire workflow — from the decor to the communication style — is designed to make kids feel safe. Most kids leave smiling. It's our most common feedback from parents.",
    },
    {
        q: "Are you accepting new patients?",
        a: "Yes! We're actively welcoming new patients and their families. You can walk in or book online — whichever is easier for you.",
    },
    {
        q: "Are your prices transparent?",
        a: "100%. We quote treatment costs before starting anything. No surprise bills. Our philosophy is conservative, ethical care — we will never push a treatment you don't need.",
    },
] as const

const nandedCitySchema = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: CLINIC.name,
    image: "https://dentistreedental.com/assets/Clinic2.png",
    "@id": CLINIC.url,
    url: CLINIC.url,
    telephone: CLINIC.phone,
    email: CLINIC.email,
    address: {
        "@type": "PostalAddress",
        streetAddress: "Ingale Plaza, Shop No. 1, Next to Uttam Sweets, Nanded City Road, Sinhagad Road",
        addressLocality: "Pune",
        postalCode: "411068",
        addressCountry: "IN",
    },
    geo: { "@type": "GeoCoordinates", latitude: CLINIC.lat, longitude: CLINIC.lng },
    openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "10:00",
        closes: "21:00",
    },
    priceRange: "₹₹",
    description: "Voted top dentist in Pune. Dr. Poonam Bambarkar (BDS, 15+ years) at Ingale Plaza, Nanded City. Root canals, implants, kids dentistry. Open 7 days.",
    aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", reviewCount: "30", bestRating: "5" },
    hasMap: CLINIC.mapsUrl,
    medicalSpecialty: "Dentistry",
}

// ─────────────────────────────────────────────────────────────────────────────
// MICRO COMPONENTS
// ─────────────────────────────────────────────────────────────────────────────

function Chip({ children }: { children: React.ReactNode }) {
    return (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 border border-teal-100 text-dental-teal text-[11px] font-bold uppercase tracking-widest">
            {children}
        </span>
    )
}

function FaqItem({ q, a }: { q: string; a: string }) {
    const [open, setOpen] = useState(false)
    return (
        <div className="border-b border-slate-100 last:border-0">
            <button
                onClick={() => setOpen(!open)}
                className="w-full flex items-center justify-between gap-4 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dental-teal rounded-lg"
                aria-expanded={open}
            >
                <span className="font-semibold text-dental-charcoal text-base leading-snug">{q}</span>
                <ChevronDown
                    className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform duration-300 ${open ? "rotate-180 text-dental-teal" : ""}`}
                    aria-hidden="true"
                />
            </button>
            <AnimatePresence initial={false}>
                {open && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
                        className="overflow-hidden"
                    >
                        <p className="pb-5 text-slate-600 leading-relaxed text-[15px]">{a}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

// ─────────────────────────────────────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────────────────────────────────────

export default function NandedCityPage() {
    const heroRef = useRef<HTMLElement>(null)
    const { scrollY } = useScroll()
    const imgScale = useTransform(scrollY, [0, 500], [1, 1.08])
    const imgOpacity = useTransform(scrollY, [0, 400], [1, 0.6])

    return (
        <div className="bg-dental-cream min-h-screen flex flex-col font-sans">
            <JsonLd data={nandedCitySchema} />

            {/* Skip nav */}
            <a
                href="#main-content"
                className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-[200] bg-white px-4 py-2 rounded-lg shadow-lg text-dental-teal font-semibold text-sm"
            >
                Skip to main content
            </a>

            <Navbar />

            <main id="main-content" className="flex-1">

                {/* ╔═══════════════════════════════════════════════╗
                    ║  HERO — full-bleed, mobile-first               ║
                    ╚═══════════════════════════════════════════════╝ */}
                <section
                    ref={heroRef}
                    aria-label="Dentistree Nanded City — Hero"
                    className="relative min-h-[100svh] flex flex-col justify-end overflow-hidden"
                >
                    {/* Background image with parallax */}
                    <motion.div
                        className="absolute inset-0"
                        style={{ scale: imgScale, opacity: imgOpacity }}
                    >
                        <Image
                            src="/assets/doctor.png"
                            alt="Dr. Poonam Bambarkar at Dentistree Dental Clinic, Nanded City"
                            fill
                            className="object-cover object-top"
                            priority
                            sizes="100vw"
                        />
                    </motion.div>

                    {/* Gradient overlays — top for navbar readability, bottom for copy */}
                    <div
                        className="absolute inset-0 pointer-events-none"
                        aria-hidden="true"
                        style={{
                            background: `
                                linear-gradient(to bottom,
                                    rgba(15,23,42,0.55) 0%,
                                    rgba(15,23,42,0.0) 35%,
                                    rgba(15,23,42,0.0) 45%,
                                    rgba(15,23,42,0.88) 100%
                                )
                            `,
                        }}
                    />

                    {/* Hero content — pinned bottom */}
                    <div className="relative z-10 container px-4 sm:px-6 pb-8 sm:pb-16 pt-32">
                        <div className="max-w-2xl">
                            {/* Badge */}
                            <motion.div
                                initial={{ opacity: 0, y: 12 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                            >
                                <Chip>
                                    <MapPin className="w-3 h-3" aria-hidden="true" />
                                    Nanded City, Pune
                                </Chip>
                            </motion.div>

                            {/* Headline */}
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.18, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                                className="mt-4 font-display text-[clamp(2.6rem,8vw,5rem)] font-medium text-white leading-[1.05] tracking-tight"
                            >
                                The Dentist <br className="hidden sm:block" />
                                Nanded City <br className="hidden sm:block" />
                                <em className="not-italic text-teal-300">Trusts Most.</em>
                            </motion.h1>

                            {/* Sub copy */}
                            <motion.p
                                initial={{ opacity: 0, y: 16 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="mt-4 text-base sm:text-lg text-white/80 max-w-md leading-relaxed"
                            >
                                15+ years of precision care by{" "}
                                <strong className="text-white font-semibold">Dr. Poonam Bambarkar (BDS)</strong>.
                                Root canals, implants, kids dentistry — all inside the township.
                            </motion.p>

                            {/* Trust strip */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.42 }}
                                className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-white/70"
                            >
                                <span className="flex items-center gap-1.5 font-semibold text-amber-400">
                                    <Star className="w-4 h-4 fill-current" aria-hidden="true" />
                                    5.0 · 30+ reviews
                                </span>
                                <span aria-hidden="true" className="text-white/30 hidden sm:block">|</span>
                                <span>Open today 10 am – 9 pm</span>
                                <span aria-hidden="true" className="text-white/30 hidden sm:block">|</span>
                                <span className="text-teal-300 font-medium">Accepting new patients</span>
                            </motion.div>

                            {/* CTA buttons — visible on sm+, mobile uses sticky bar */}
                            <motion.div
                                initial={{ opacity: 0, y: 12 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="mt-8 hidden sm:flex flex-wrap gap-4"
                            >
                                <Button
                                    size="lg"
                                    className="h-14 px-8 rounded-full bg-dental-teal text-white font-semibold hover:bg-teal-600 shadow-[0_8px_32px_rgba(13,148,136,0.45)] hover:-translate-y-0.5 transition-all duration-200 focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
                                    asChild
                                >
                                    <Link href="/contact">
                                        <CalendarCheck className="w-4 h-4 mr-2" aria-hidden="true" />
                                        Book Consultation
                                    </Link>
                                </Button>
                                <Button
                                    variant="outline"
                                    size="lg"
                                    className="h-14 px-8 rounded-full border-2 border-white/30 text-white hover:border-white hover:bg-white/10 bg-transparent font-semibold transition-all duration-200 backdrop-blur-sm focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
                                    asChild
                                >
                                    <Link href={`tel:${CLINIC.phone}`} aria-label={`Call Dentistree at ${CLINIC.phoneDisplay}`}>
                                        <Phone className="w-4 h-4 mr-2" aria-hidden="true" />
                                        {CLINIC.phoneDisplay}
                                    </Link>
                                </Button>
                            </motion.div>
                        </div>
                    </div>

                    {/* Scroll hint */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2 }}
                        className="absolute bottom-28 sm:bottom-6 right-6 z-10 hidden sm:flex flex-col items-center gap-1.5"
                        aria-hidden="true"
                    >
                        <span className="text-[10px] text-white/50 uppercase tracking-[0.2em] rotate-90 origin-center translate-x-6">Scroll</span>
                        <div className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent" />
                    </motion.div>
                </section>

                {/* ╔═══════════════════════════════════════════════╗
                    ║  STATS — dark strip, punchy numbers            ║
                    ╚═══════════════════════════════════════════════╝ */}
                <section aria-label="Key statistics" className="bg-dental-charcoal">
                    <div className="container px-4 sm:px-6">
                        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-white/10">
                            {STATS.map((s, i) => (
                                <motion.div
                                    key={s.label}
                                    initial={{ opacity: 0, y: 16 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-40px" }}
                                    transition={{ delay: i * 0.08 }}
                                    className="flex flex-col items-center justify-center gap-1 py-8 px-4 text-center"
                                >
                                    <span className="font-display text-4xl md:text-5xl font-semibold text-white leading-none tracking-tight">
                                        {s.value}
                                        {s.unit && (
                                            <span className="text-2xl md:text-3xl text-teal-400 ml-0.5">
                                                {s.unit}
                                            </span>
                                        )}
                                    </span>
                                    <span className="text-xs text-slate-400 uppercase tracking-widest mt-1">{s.label}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ╔═══════════════════════════════════════════════╗
                    ║  SERVICES — horizontal scroll on mobile        ║
                    ╚═══════════════════════════════════════════════╝ */}
                <section aria-labelledby="services-heading" className="py-20 md:py-28 bg-dental-cream overflow-hidden">
                    <div className="container px-4 sm:px-6">
                        {/* Header */}
                        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
                            <div>
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                >
                                    <Chip>
                                        <Sparkles className="w-3 h-3" aria-hidden="true" />
                                        Expert Treatments
                                    </Chip>
                                </motion.div>
                                <motion.h2
                                    id="services-heading"
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.08 }}
                                    className="mt-4 font-display text-3xl md:text-4xl lg:text-5xl font-medium text-dental-charcoal leading-[1.1]"
                                >
                                    World-class dentistry,
                                    <br />
                                    <span className="text-dental-teal">inside the township.</span>
                                </motion.h2>
                            </div>
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                className="flex-shrink-0"
                            >
                                <Button
                                    variant="outline"
                                    className="rounded-full border-dental-teal text-dental-teal hover:bg-dental-teal hover:text-white transition-all duration-200 focus-visible:ring-2 focus-visible:ring-dental-teal"
                                    asChild
                                >
                                    <Link href="/services">
                                        All treatments
                                        <ArrowUpRight className="w-4 h-4 ml-1" aria-hidden="true" />
                                    </Link>
                                </Button>
                            </motion.div>
                        </div>

                        {/* Cards — horizontal scroll on mobile, grid on md+ */}
                        <div
                            className="flex gap-4 overflow-x-auto pb-4 -mx-4 px-4 sm:-mx-6 sm:px-6 md:mx-0 md:px-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:overflow-visible md:pb-0 snap-x snap-mandatory md:snap-none scrollbar-hide"
                            role="list"
                        >
                            {SERVICES.map((s, i) => {
                                const Icon = s.icon
                                return (
                                    <motion.div
                                        key={s.title}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, margin: "-30px" }}
                                        transition={{ delay: i * 0.07 }}
                                        role="listitem"
                                        className="flex-shrink-0 w-[72vw] sm:w-[56vw] md:w-auto snap-start"
                                    >
                                        <Link
                                            href={s.href}
                                            className="group flex flex-col h-full bg-white rounded-2xl p-6 border border-slate-100 hover:border-dental-teal hover:shadow-xl hover:shadow-teal-900/8 transition-all duration-300 focus-visible:ring-2 focus-visible:ring-dental-teal focus-visible:outline-none"
                                        >
                                            {/* Icon + specialty */}
                                            <div className="flex items-center justify-between mb-5">
                                                <div className="w-11 h-11 rounded-xl bg-teal-50 flex items-center justify-center group-hover:bg-dental-teal transition-colors duration-300">
                                                    <Icon className="w-5 h-5 text-dental-teal group-hover:text-white transition-colors duration-300" aria-hidden="true" />
                                                </div>
                                                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 group-hover:text-dental-teal transition-colors">
                                                    {s.subtitle}
                                                </span>
                                            </div>
                                            <h3 className="font-display text-lg font-semibold text-dental-charcoal mb-2 leading-snug">
                                                {s.title}
                                            </h3>
                                            <p className="text-slate-500 text-[14px] leading-relaxed flex-1">{s.desc}</p>
                                            <div className="mt-5 flex items-center gap-1 text-dental-teal text-sm font-semibold">
                                                Learn more
                                                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                                            </div>
                                        </Link>
                                    </motion.div>
                                )
                            })}
                        </div>
                    </div>
                </section>

                {/* ╔═══════════════════════════════════════════════╗
                    ║  THE DENTISTREE WAY — best copy on the site    ║
                    ╚═══════════════════════════════════════════════╝ */}
                <section aria-labelledby="comparison-heading" className="py-20 md:py-28 bg-white">
                    <div className="container px-4 sm:px-6">
                        <div className="max-w-3xl mx-auto">
                            {/* Header */}
                            <div className="text-center mb-12">
                                <Chip>Why Dentistree</Chip>
                                <motion.h2
                                    id="comparison-heading"
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.08 }}
                                    className="mt-4 font-display text-3xl md:text-4xl lg:text-5xl font-medium text-dental-charcoal leading-[1.1]"
                                >
                                    The Experience You{" "}
                                    <span className="text-dental-teal">Actually Deserve.</span>
                                </motion.h2>
                                <p className="mt-4 text-slate-500 text-base leading-relaxed">
                                    Why families across Pune have switched to Dentistree.
                                </p>
                            </div>

                            {/* Comparison grid */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.12 }}
                                className="grid sm:grid-cols-2 gap-4"
                            >
                                {/* Typical column */}
                                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                                    <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-5">
                                        Typical Dental Visit
                                    </p>
                                    <ul className="space-y-3.5" aria-label="Typical dental visit drawbacks">
                                        {TYPICAL.map((item) => (
                                            <li key={item} className="flex items-start gap-3">
                                                <span className="w-5 h-5 rounded-full bg-red-50 border border-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                    <X className="w-3 h-3 text-red-400" strokeWidth={3} aria-hidden="true" />
                                                </span>
                                                <span className="text-slate-400 text-[15px] line-through decoration-slate-300">
                                                    {item}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Dentistree column */}
                                <div className="bg-dental-charcoal rounded-2xl p-6 border border-white/5 relative overflow-hidden">
                                    {/* Subtle teal glow */}
                                    <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-teal-500/10 blur-2xl pointer-events-none" aria-hidden="true" />
                                    <p className="text-xs font-bold uppercase tracking-widest text-teal-400 mb-5 relative z-10">
                                        The Dentistree Way
                                    </p>
                                    <ul className="space-y-3.5 relative z-10" aria-label="The Dentistree way benefits">
                                        {DENTISTREE_WAY.map((item) => (
                                            <li key={item} className="flex items-start gap-3">
                                                <span className="w-5 h-5 rounded-full bg-dental-teal flex items-center justify-center flex-shrink-0 mt-0.5">
                                                    <Check className="w-3 h-3 text-white" strokeWidth={3} aria-hidden="true" />
                                                </span>
                                                <span className="text-white text-[15px] font-medium">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="mt-6 text-center"
                            >
                                <Link
                                    href="/why-us"
                                    className="text-dental-teal text-sm font-semibold hover:underline underline-offset-4 inline-flex items-center gap-1 focus-visible:ring-2 focus-visible:ring-dental-teal rounded"
                                >
                                    Read our full promise
                                    <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                                </Link>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* ╔═══════════════════════════════════════════════╗
                    ║  YOUR FIRST VISIT — 3-step process             ║
                    ╚═══════════════════════════════════════════════╝ */}
                <section aria-labelledby="firstvit-heading" className="py-20 md:py-28 bg-dental-cream">
                    <div className="container px-4 sm:px-6">
                        {/* Clinic image banner */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.98 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative h-52 sm:h-72 rounded-2xl md:rounded-3xl overflow-hidden mb-14 shadow-xl shadow-slate-900/10"
                        >
                            <Image
                                src="/assets/clinic1.png"
                                alt="Dentistree Clinic interior — Nanded City"
                                fill
                                className="object-cover"
                                sizes="(max-width: 1280px) 100vw, 1280px"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-dental-charcoal/70 via-dental-charcoal/20 to-transparent" aria-hidden="true" />
                            <div className="absolute inset-0 flex items-center px-8 sm:px-12">
                                <blockquote className="max-w-xs">
                                    <p className="font-display text-xl sm:text-2xl text-white font-medium leading-snug italic">
                                        &ldquo;The most relaxing dental experience I&rsquo;ve ever had.&rdquo;
                                    </p>
                                    <footer className="mt-2 text-white/60 text-sm not-italic">— Google Review</footer>
                                </blockquote>
                            </div>
                        </motion.div>

                        {/* Steps */}
                        <div className="text-center mb-12">
                            <Chip>Your First Visit</Chip>
                            <motion.h2
                                id="firstvit-heading"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.08 }}
                                className="mt-4 font-display text-3xl md:text-4xl lg:text-5xl font-medium text-dental-charcoal leading-[1.1]"
                            >
                                Anxiety-Free Dentistry{" "}
                                <span className="text-dental-teal">Starts Here.</span>
                            </motion.h2>
                            <p className="mt-3 text-slate-500">No judgment. No pressure. Just three simple steps.</p>
                        </div>

                        <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
                            {STEPS.map((step, i) => (
                                <motion.div
                                    key={step.num}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-30px" }}
                                    transition={{ delay: i * 0.1 }}
                                    className="relative bg-white rounded-2xl p-7 border border-slate-100 shadow-sm"
                                >
                                    {/* Step number */}
                                    <span
                                        className="font-display text-5xl font-semibold text-teal-50 select-none absolute top-4 right-5 leading-none"
                                        aria-hidden="true"
                                    >
                                        {step.num}
                                    </span>
                                    <p className="text-xs font-bold uppercase tracking-widest text-dental-teal mb-3">
                                        Step {step.num}
                                    </p>
                                    <h3 className="font-display text-lg font-semibold text-dental-charcoal mb-2 leading-snug">
                                        {step.title}
                                    </h3>
                                    <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ╔═══════════════════════════════════════════════╗
                    ║  FAQ                                           ║
                    ╚═══════════════════════════════════════════════╝ */}
                <section aria-labelledby="faq-heading" className="py-20 md:py-28 bg-white">
                    <div className="container px-4 sm:px-6">
                        <div className="max-w-2xl mx-auto">
                            <div className="text-center mb-10">
                                <Chip>FAQ</Chip>
                                <motion.h2
                                    id="faq-heading"
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.08 }}
                                    className="mt-4 font-display text-3xl md:text-4xl font-medium text-dental-charcoal"
                                >
                                    Common Questions
                                </motion.h2>
                            </div>
                            <motion.div
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.12 }}
                                className="bg-slate-50 rounded-2xl px-6 divide-y divide-slate-100"
                            >
                                {FAQS.map((item) => (
                                    <FaqItem key={item.q} q={item.q} a={item.a} />
                                ))}
                            </motion.div>
                            <p className="text-center mt-6 text-slate-500 text-sm">
                                Can&rsquo;t find your answer?{" "}
                                <Link
                                    href={`tel:${CLINIC.phone}`}
                                    className="text-dental-teal font-semibold hover:underline underline-offset-4 focus-visible:ring-2 focus-visible:ring-dental-teal rounded"
                                >
                                    Give us a call.
                                </Link>
                            </p>
                        </div>
                    </div>
                </section>

                {/* ╔═══════════════════════════════════════════════╗
                    ║  CTA / LOCATION — dark, punchy close           ║
                    ╚═══════════════════════════════════════════════╝ */}
                <section aria-labelledby="cta-heading" className="py-20 md:py-28 bg-dental-charcoal relative overflow-hidden">
                    {/* Ambient glows */}
                    <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-teal-600/10 blur-3xl pointer-events-none" aria-hidden="true" />
                    <div className="absolute -bottom-32 -right-24 w-80 h-80 rounded-full bg-teal-500/8 blur-3xl pointer-events-none" aria-hidden="true" />

                    <div className="container px-4 sm:px-6 relative z-10">
                        <div className="max-w-3xl mx-auto">
                            {/* Main CTA copy */}
                            <div className="text-center mb-10">
                                <motion.h2
                                    id="cta-heading"
                                    initial={{ opacity: 0, y: 16 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="font-display text-3xl md:text-5xl text-white font-medium leading-[1.1]"
                                >
                                    Ready for a smile{" "}
                                    <br className="hidden sm:block" />
                                    you&rsquo;re proud of?
                                </motion.h2>
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 }}
                                    className="mt-4 text-slate-400 text-base leading-relaxed"
                                >
                                    Don&rsquo;t put off your health. Walk in or book online today.
                                </motion.p>
                            </div>

                            {/* Address glass card */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.14 }}
                                className="bg-white/8 backdrop-blur-md rounded-2xl p-6 border border-white/10 mb-8"
                            >
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5">
                                    <div className="flex items-start gap-4">
                                        <div className="w-11 h-11 rounded-full bg-dental-teal flex items-center justify-center flex-shrink-0">
                                            <MapPin className="w-5 h-5 text-white" aria-hidden="true" />
                                        </div>
                                        <address className="not-italic">
                                            <p className="text-white font-semibold text-base leading-snug">{CLINIC.name}</p>
                                            <p className="text-slate-400 text-sm mt-1 leading-relaxed">
                                                Ingale Plaza, Shop No. 1, Next to Uttam Sweets,
                                                <br />Nanded City Road, Sinhagad Road, Pune 411068
                                            </p>
                                            <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2">
                                                <span className="text-teal-400 text-xs font-medium">Mon – Sun · 10 am – 9 pm</span>
                                                <a
                                                    href={`mailto:${CLINIC.email}`}
                                                    className="text-slate-500 text-xs hover:text-teal-400 transition-colors focus-visible:ring-2 focus-visible:ring-dental-teal rounded"
                                                >
                                                    {CLINIC.email}
                                                </a>
                                            </div>
                                        </address>
                                    </div>
                                    <Button
                                        className="flex-shrink-0 bg-white text-dental-teal hover:bg-teal-50 rounded-full px-6 h-11 font-semibold transition-colors focus-visible:ring-2 focus-visible:ring-dental-teal"
                                        asChild
                                    >
                                        <Link
                                            href={CLINIC.mapsUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label="Open Dentistree Nanded City in Google Maps"
                                        >
                                            Get Directions
                                            <ArrowUpRight className="w-4 h-4 ml-1" aria-hidden="true" />
                                        </Link>
                                    </Button>
                                </div>
                            </motion.div>

                            {/* Final CTA row */}
                            <motion.div
                                initial={{ opacity: 0, y: 12 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4"
                            >
                                <Button
                                    size="lg"
                                    className="h-14 px-10 rounded-full bg-dental-teal text-white font-semibold hover:bg-teal-500 shadow-[0_8px_32px_rgba(13,148,136,0.35)] hover:-translate-y-0.5 transition-all duration-200 focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:ring-offset-2 focus-visible:ring-offset-dental-charcoal text-base"
                                    asChild
                                >
                                    <Link href="/contact">
                                        <CalendarCheck className="w-5 h-5 mr-2" aria-hidden="true" />
                                        Book Appointment
                                    </Link>
                                </Button>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="h-14 px-10 rounded-full border-2 border-white/20 text-white hover:border-white hover:bg-white/8 bg-transparent font-semibold transition-all duration-200 text-base"
                                    asChild
                                >
                                    <Link href={`tel:${CLINIC.phone}`} aria-label={`Call Dentistree at ${CLINIC.phoneDisplay}`}>
                                        <Phone className="w-5 h-5 mr-2" aria-hidden="true" />
                                        {CLINIC.phoneDisplay}
                                    </Link>
                                </Button>
                            </motion.div>
                        </div>
                    </div>
                </section>

            </main>

            <Footer />

            {/* ╔═══════════════════════════════════════════════════════╗
                ║  STICKY MOBILE CTA BAR — bottom, always visible       ║
                ║  Hidden on sm+ because desktop has inline CTAs        ║
                ╚═══════════════════════════════════════════════════════╝ */}
            <div
                className="sm:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-slate-100 px-4 py-3 flex gap-3 safe-area-inset-bottom"
                role="complementary"
                aria-label="Quick actions"
            >
                <Button
                    className="flex-1 h-12 rounded-full bg-dental-teal text-white font-semibold text-sm hover:bg-teal-600 shadow-[0_4px_16px_rgba(13,148,136,0.35)] focus-visible:ring-2 focus-visible:ring-dental-teal"
                    asChild
                >
                    <Link href="/contact">
                        <CalendarCheck className="w-4 h-4 mr-2" aria-hidden="true" />
                        Book
                    </Link>
                </Button>
                <Button
                    variant="outline"
                    className="flex-1 h-12 rounded-full border-2 border-dental-teal text-dental-teal font-semibold text-sm hover:bg-teal-50 focus-visible:ring-2 focus-visible:ring-dental-teal"
                    asChild
                >
                    <Link href={`tel:${CLINIC.phone}`} aria-label={`Call Dentistree at ${CLINIC.phoneDisplay}`}>
                        <Phone className="w-4 h-4 mr-2" aria-hidden="true" />
                        Call
                    </Link>
                </Button>
            </div>

        </div>
    )
}