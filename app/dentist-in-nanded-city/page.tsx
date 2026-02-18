"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import Footer from "@/components/layout/Footer"
import {
    MapPin,
    Phone,
    Star,
    Sparkles,
    Clock,
    Check,
    Award,
    ChevronRight,
    CalendarCheck,
} from "lucide-react"
import { JsonLd } from "@/components/seo/json-ld"
import { ReviewsSection } from "@/components/reviews-section"
import { FAQSection } from "@/components/faq-section"
import { AppointmentForm } from "@/components/appointment-form"

// ─────────────────────────────────────────────────────────────────────────────
// Constants — single source of truth; easy to update without hunting the JSX
// ─────────────────────────────────────────────────────────────────────────────

const CLINIC = {
    name: "Dentistree Dental Clinic",
    address: "Ingale Plaza, Shop No. 1, Next to Uttam Sweets, Nanded City Road, Sinhagad Road",
    locality: "Pune",
    postalCode: "411068",
    phone: "+918237156777",
    phoneDisplay: "+91 82371 56777",
    email: "info@dentistreedental.com",
    url: "https://dentistreedental.com/dentist-in-nanded-city",
    lat: 18.4735,
    lng: 73.8235,
    hours: { opens: "10:00", closes: "21:00" },
    mapsUrl: "https://maps.google.com/?q=Dentistree+Dental+Clinic+Nanded+City+Pune+411068",
} as const

const SERVICES = [
    "Root Canal Treatment — advanced rotary tech, single-sitting",
    "Dental Implants — restore your smile permanently",
    "Fillings, Crowns & Bridges — natural-looking restorations",
    "Kids Dentistry — fun & fear-free care for 450+ happy children",
    "Orthodontics — invisible & metal braces",
    "Cosmetic Dentistry — veneers & whitening",
] as const

const FEATURES = [
    {
        icon: Clock,
        title: "Open 7 Days, Zero Wait",
        description:
            "Mon – Sun, 10 am to 9 pm with a zero-wait policy and dedicated 45-minute appointment slots — because your time matters.",
    },
    {
        icon: Award,
        title: "15+ Years of Expertise",
        description:
            "Dr. Poonam Bambarkar (BDS) brings 15+ years of precision dentistry — from your child's first check-up to full-arch implants for seniors.",
    },
    {
        icon: Sparkles,
        title: "100% Sterile Facility",
        description:
            "Hospital-grade sterilisation exceeding safety standards, digital X-rays, and the latest rotary equipment — right inside the township.",
    },
] as const

// ─────────────────────────────────────────────────────────────────────────────
// Structured Data
// ─────────────────────────────────────────────────────────────────────────────

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
        streetAddress: CLINIC.address,
        addressLocality: CLINIC.locality,
        postalCode: CLINIC.postalCode,
        addressCountry: "IN",
    },
    geo: {
        "@type": "GeoCoordinates",
        latitude: CLINIC.lat,
        longitude: CLINIC.lng,
    },
    openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: CLINIC.hours.opens,
        closes: CLINIC.hours.closes,
    },
    priceRange: "₹₹",
    description:
        "Voted top dentist in Pune. Dr. Poonam Bambarkar (BDS, 15+ years) offers painless root canals, implants, orthodontics, kids dentistry and cosmetic treatments at Ingale Plaza, Nanded City. Open 7 days.",
    // 5.0 / 30+ reviews as shown on homepage — update reviewCount regularly
    aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5.0",
        reviewCount: "30",
        bestRating: "5",
    },
    hasMap: CLINIC.mapsUrl,
    medicalSpecialty: "Dentistry",
}

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
        {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://dentistreedental.com"
        },
        {
            "@type": "ListItem",
            "position": 2,
            "name": "Dentist in Pune",
            "item": "https://dentistreedental.com/dentist-in-pune" // Hypothetical parent
        },
        {
            "@type": "ListItem",
            "position": 3,
            "name": "Nanded City",
            "item": CLINIC.url
        }
    ]
}

// ─────────────────────────────────────────────────────────────────────────────
// Sub-components
// ─────────────────────────────────────────────────────────────────────────────

interface SectionHeaderProps {
    label: string
    title: React.ReactNode
    subtitle?: string
    center?: boolean
    light?: boolean
}

function SectionHeader({ label, title, subtitle, center = false, light = false }: SectionHeaderProps) {
    return (
        <header className={`mb-12 ${center ? "text-center mx-auto max-w-3xl" : "max-w-2xl"}`}>
            <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase mb-5 ${light
                    ? "bg-white/10 text-white border border-white/20"
                    : "bg-teal-50 text-teal-700 border border-teal-100"
                    }`}
            >
                {light ? (
                    <Star className="w-3 h-3 text-dental-gold" aria-hidden="true" />
                ) : (
                    <Sparkles className="w-3 h-3 text-dental-teal" aria-hidden="true" />
                )}
                {label}
            </motion.div>

            <motion.h2
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: 0.08 }}
                className={`font-display text-4xl md:text-5xl font-medium leading-[1.1] mb-5 ${light ? "text-white" : "text-dental-charcoal"
                    }`}
            >
                {title}
            </motion.h2>

            {subtitle && (
                <motion.p
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ delay: 0.16 }}
                    className={`text-lg leading-relaxed ${light ? "text-white/75" : "text-slate-600"}`}
                >
                    {subtitle}
                </motion.p>
            )}
        </header>
    )
}

interface FeatureCardProps {
    icon: React.ElementType
    title: string
    description: string
    index: number
}

function FeatureCard({ icon: Icon, title, description, index }: FeatureCardProps) {
    return (
        <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: index * 0.1 }}
            className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group"
        >
            {/* Icon */}
            <div
                className="w-12 h-12 rounded-2xl bg-teal-50 flex items-center justify-center mb-6 group-hover:bg-dental-teal transition-colors duration-300"
                aria-hidden="true"
            >
                <Icon className="w-6 h-6 text-dental-teal group-hover:text-white transition-colors duration-300" />
            </div>

            <h3 className="font-display text-xl font-semibold text-dental-charcoal mb-3">{title}</h3>
            <p className="text-slate-600 leading-relaxed">{description}</p>
        </motion.article>
    )
}

// ─────────────────────────────────────────────────────────────────────────────
// Reusable CTA button variants — centralised to keep CTAs consistent
// ─────────────────────────────────────────────────────────────────────────────

function PrimaryCta({ children, href }: { children: React.ReactNode; href: string }) {
    return (
        <Button
            size="lg"
            className="rounded-full h-14 px-8 text-base font-semibold bg-dental-teal text-white hover:bg-teal-700 shadow-[0_12px_40px_-8px_rgba(13,148,136,0.45)] transition-all duration-300 hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-dental-teal focus-visible:ring-offset-2"
            asChild
        >
            <Link href={href}>
                <CalendarCheck className="w-4 h-4 mr-2" aria-hidden="true" />
                {children}
            </Link>
        </Button>
    )
}

function SecondaryCta({ children, href, tel }: { children: React.ReactNode; href: string; tel?: boolean }) {
    return (
        <Button
            variant="outline"
            size="lg"
            className="rounded-full h-14 px-8 text-base font-semibold border-2 border-slate-200 text-dental-slate hover:border-dental-teal hover:text-dental-teal bg-transparent hover:bg-teal-50/50 transition-all duration-300 focus-visible:ring-2 focus-visible:ring-dental-teal focus-visible:ring-offset-2"
            asChild
        >
            <Link href={href} aria-label={tel ? `Call Dentistree at ${CLINIC.phoneDisplay}` : undefined}>
                {tel && <Phone className="w-4 h-4 mr-2" aria-hidden="true" />}
                {children}
            </Link>
        </Button>
    )
}

// ─────────────────────────────────────────────────────────────────────────────
// Page
// ─────────────────────────────────────────────────────────────────────────────

export default function NandedCityPage() {
    const heroRef = useRef<HTMLElement>(null)
    const { scrollY } = useScroll()

    // Subtle parallax — reduced motion users will see 0 transform via CSS
    const heroOpacity = useTransform(scrollY, [0, 360], [1, 0])
    const heroY = useTransform(scrollY, [0, 360], [0, 80])

    return (
        <div className="bg-dental-cream min-h-screen flex flex-col font-sans">
            <JsonLd data={nandedCitySchema} />
            <JsonLd data={breadcrumbSchema} />

            {/* Skip-nav for keyboard / screen-reader users */}
            <a
                href="#main-content"
                className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-[200] bg-white px-4 py-2 rounded-lg shadow-lg text-dental-teal font-semibold"
            >
                Skip to main content
            </a>

            <Navbar />

            <main id="main-content" className="flex-1">

                {/* ═══════════════════════════════════════════════════════════
                    HERO
                ════════════════════════════════════════════════════════════ */}
                <section
                    ref={heroRef}
                    aria-label="Hero — Dentistree Nanded City"
                    className="relative pt-32 lg:pt-48 pb-20 lg:pb-32 overflow-hidden"
                >
                    {/* Subtle background mesh */}
                    <div
                        className="absolute inset-0 pointer-events-none"
                        aria-hidden="true"
                        style={{
                            background:
                                "radial-gradient(ellipse 80% 60% at 60% -10%, rgba(13,148,136,0.07) 0%, transparent 70%)",
                        }}
                    />

                    <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">

                            {/* ── Left copy ── */}
                            <motion.div style={{ opacity: heroOpacity, y: heroY }}>
                                {/* Location badge */}
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-100 text-dental-teal text-xs font-semibold uppercase tracking-widest mb-6">
                                    <MapPin className="w-3 h-3" aria-hidden="true" />
                                    <span>Located in Nanded City</span>
                                </div>

                                <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-medium text-dental-charcoal mb-6 tracking-tight leading-[1.1]">
                                    Premium{" "}
                                    <span className="block">Dental Care in</span>
                                    <em className="not-italic text-dental-teal">Nanded City</em>
                                </h1>

                                <p className="text-xl text-slate-600 max-w-lg leading-relaxed mb-4">
                                    Your smile deserves more than just dental work.{" "}
                                    <strong className="font-semibold text-dental-charcoal">
                                        Dr. Poonam Bambarkar (BDS)
                                    </strong>{" "}
                                    brings 15+ years of precision dentistry and gentle care — right at Ingale Plaza, Nanded City.
                                </p>

                                {/* Trust micro-bar — all numbers sourced from live homepage */}
                                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-10 text-sm text-slate-500">
                                    <span className="flex items-center gap-1 font-semibold text-amber-500">
                                        <Star className="w-4 h-4 fill-current" aria-hidden="true" />
                                        5.0
                                    </span>
                                    <span aria-hidden="true" className="text-slate-300">|</span>
                                    <span>30+ Google reviews</span>
                                    <span aria-hidden="true" className="text-slate-300">|</span>
                                    <span>450+ happy kids treated</span>
                                    <span aria-hidden="true" className="text-slate-300">|</span>
                                    <span>Open today 10 am – 9 pm</span>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-4">
                                    <PrimaryCta href="#appointment-form">Book Consultation</PrimaryCta>
                                    <SecondaryCta href={`tel:${CLINIC.phone}`} tel>
                                        {CLINIC.phoneDisplay}
                                    </SecondaryCta>
                                </div>
                            </motion.div>

                            {/* ── Right image ── */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.97, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                                className="relative lg:h-[600px] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-teal-900/10"
                            >
                                <Image
                                    src="/assets/Clinic2.png"
                                    alt="Interior of Dentistree Dental Clinic, Nanded City"
                                    fill
                                    className="object-cover"
                                    priority
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent" aria-hidden="true" />

                                {/* Address card overlay */}
                                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-5 rounded-2xl shadow-lg border border-white/50">
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-dental-teal/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <MapPin className="w-5 h-5 text-dental-teal" aria-hidden="true" />
                                        </div>
                                        <address className="not-italic">
                                            <p className="font-bold text-dental-charcoal leading-tight">
                                                {CLINIC.name}
                                            </p>
                                            <p className="text-sm text-slate-500 mt-0.5">
                                                Ingale Plaza, Shop No. 1 — Nanded City Road
                                            </p>
                                        </address>
                                    </div>
                                </div>
                            </motion.div>

                        </div>
                    </div>
                </section>

                {/* ═══════════════════════════════════════════════════════════
                    WHY CHOOSE US
                ════════════════════════════════════════════════════════════ */}
                <section aria-labelledby="features-heading" className="py-24 bg-white relative">
                    <div className="container px-4 md:px-6">
                        <SectionHeader
                            center
                            label="Voted Top Dentist in Pune"
                            title={
                                <span id="features-heading">
                                    Nanded City&apos;s Preferred Dental Clinic
                                </span>
                            }
                            subtitle="Ethical, transparent and high-quality dental care for every member of your family — all within the township. Conservative treatment, honest pricing, zero pressure."
                        />

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" role="list">
                            {FEATURES.map((f, i) => (
                                <FeatureCard key={f.title} {...f} index={i} />
                            ))}
                        </div>
                    </div>
                </section>

                {/* ═══════════════════════════════════════════════════════════
                    SERVICES HIGHLIGHT
                ════════════════════════════════════════════════════════════ */}
                <section aria-labelledby="services-heading" className="py-24 bg-dental-cream">
                    <div className="container px-4 md:px-6">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">

                            {/* Copy */}
                            <div>
                                <SectionHeader
                                    label="Expert Treatments"
                                    title={
                                        <>
                                            <span id="services-heading">Advanced Dentistry</span>
                                            <br />
                                            <span className="text-dental-teal">Close to Home</span>
                                        </>
                                    }
                                    subtitle="Why travel far for specialist care? Our clinic handles everything from regular cleanings to complex surgeries."
                                />

                                <ul className="space-y-3" aria-label="Our dental services">
                                    {SERVICES.map((item, i) => (
                                        <motion.li
                                            key={i}
                                            initial={{ opacity: 0, x: -16 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true, margin: "-40px" }}
                                            transition={{ delay: i * 0.07 }}
                                            className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-slate-100 hover:border-teal-100 hover:shadow-md transition-all duration-200"
                                        >
                                            <span
                                                className="w-8 h-8 rounded-full bg-teal-50 flex items-center justify-center flex-shrink-0"
                                                aria-hidden="true"
                                            >
                                                <Check className="w-4 h-4 text-dental-teal" strokeWidth={3} />
                                            </span>
                                            <span className="font-medium text-dental-charcoal">{item}</span>
                                        </motion.li>
                                    ))}
                                </ul>

                                <div className="mt-10">
                                    <Button
                                        size="lg"
                                        variant="outline"
                                        className="rounded-full px-8 border-dental-teal text-dental-teal hover:bg-dental-teal hover:text-white transition-all duration-300 focus-visible:ring-2 focus-visible:ring-dental-teal focus-visible:ring-offset-2"
                                        asChild
                                    >
                                        <Link href="/services">
                                            Explore All Treatments
                                            <ChevronRight className="w-4 h-4 ml-1" aria-hidden="true" />
                                        </Link>
                                    </Button>
                                </div>
                            </div>

                            {/* Image mosaic */}
                            <div className="relative" aria-hidden="true">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-4 translate-y-8">
                                        <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg">
                                            <Image
                                                src="/assets/client-10.jpeg"
                                                alt=""
                                                fill
                                                loading="lazy"
                                                className="object-cover"
                                                sizes="(max-width: 1024px) 50vw, 25vw"
                                            />
                                        </div>
                                        <div className="relative h-48 rounded-2xl overflow-hidden shadow-lg">
                                            <Image
                                                src="/assets/invisible-braces.jpg"
                                                alt=""
                                                fill
                                                loading="lazy"
                                                className="object-cover"
                                                sizes="(max-width: 1024px) 50vw, 25vw"
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="relative h-48 rounded-2xl overflow-hidden shadow-lg">
                                            <Image
                                                src="/assets/Patient.png"
                                                alt=""
                                                fill
                                                loading="lazy"
                                                className="object-cover"
                                                sizes="(max-width: 1024px) 50vw, 25vw"
                                            />
                                        </div>
                                        <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg">
                                            <Image
                                                src="/assets/clinic1.png"
                                                alt=""
                                                fill
                                                loading="lazy"
                                                className="object-cover"
                                                sizes="(max-width: 1024px) 50vw, 25vw"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* ═══════════════════════════════════════════════════════════
                    REVIEWS
                ════════════════════════════════════════════════════════════ */}
                <ReviewsSection />

                {/* ═══════════════════════════════════════════════════════════
                    FAQ
                ════════════════════════════════════════════════════════════ */}
                <FAQSection />

                {/* ═══════════════════════════════════════════════════════════
                    CTA / LOCATION / APPOINTMENT
                ════════════════════════════════════════════════════════════ */}
                <section
                    id="appointment-form"
                    aria-labelledby="cta-heading"
                    className="py-24 bg-dental-charcoal relative overflow-hidden"
                >
                    {/* Background gradient */}
                    <div
                        className="absolute inset-0 bg-gradient-to-br from-dental-charcoal to-slate-900"
                        aria-hidden="true"
                    />
                    {/* Subtle radial accent */}
                    <div
                        className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-10"
                        style={{ background: "radial-gradient(circle, #0d9488 0%, transparent 70%)" }}
                        aria-hidden="true"
                    />

                    <div className="container relative z-10 px-4">
                        <div className="grid lg:grid-cols-2 gap-16 items-start">
                            {/* Left: Content & Location */}
                            <div className="text-left">
                                <motion.h2
                                    id="cta-heading"
                                    initial={{ opacity: 0, y: 16 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="font-display text-4xl md:text-5xl text-white font-medium mb-5 leading-[1.15]"
                                >
                                    Your Local Dentist <br className="hidden sm:block" />
                                    at Nanded City
                                </motion.h2>

                                <motion.p
                                    initial={{ opacity: 0, y: 16 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 }}
                                    className="text-xl text-slate-300 mb-12 leading-relaxed"
                                >
                                    Walk in for a consultation. We are at R&nbsp;B Ingale Plaza,{" "}
                                    <strong className="text-white font-semibold">next to Uttam Sweets</strong>.
                                </motion.p>

                                {/* Location card */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.15 }}
                                    className="bg-white/10 backdrop-blur-md rounded-3xl p-7 border border-white/10 mb-12 text-left flex flex-col sm:flex-row gap-6 items-start sm:items-center justify-between"
                                >
                                    <div className="flex items-start gap-4">
                                        <div
                                            className="w-12 h-12 rounded-full bg-dental-teal flex items-center justify-center text-white flex-shrink-0 mt-0.5"
                                            aria-hidden="true"
                                        >
                                            <MapPin className="w-5 h-5" />
                                        </div>
                                        <address className="not-italic">
                                            <p className="text-white font-semibold text-lg leading-tight">
                                                {CLINIC.name}
                                            </p>
                                            <p className="text-slate-300 text-sm mt-1">
                                                Ingale Plaza, Shop No. 1, Nanded City Road, Sinhagad Road, Pune 411068
                                            </p>
                                            <p className="text-slate-400 text-sm mt-0.5">
                                                Mon – Sun · 10:00 am – 9:00 pm
                                            </p>
                                            <a
                                                href={`mailto:${CLINIC.email}`}
                                                className="text-teal-400 text-sm mt-0.5 block hover:text-teal-300 transition-colors"
                                            >
                                                {CLINIC.email}
                                            </a>
                                        </address>
                                    </div>
                                    <Button
                                        className="bg-white text-dental-teal hover:bg-teal-50 rounded-full px-7 h-11 font-semibold flex-shrink-0 transition-colors focus-visible:ring-2 focus-visible:ring-dental-teal focus-visible:ring-offset-2"
                                        asChild
                                    >
                                        <Link
                                            href={CLINIC.mapsUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label="Open Dentistree Nanded City in Google Maps"
                                        >
                                            Get Directions
                                            <ChevronRight className="w-4 h-4 ml-1" aria-hidden="true" />
                                        </Link>
                                    </Button>
                                </motion.div>
                            </div>

                            {/* Right: Appointment Form */}
                            <div className="bg-white p-8 rounded-3xl shadow-xl">
                                <h3 className="text-2xl font-bold text-dental-charcoal mb-6">Request Callback</h3>
                                <AppointmentForm />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}