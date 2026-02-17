"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { FocusRail, FocusRailItem } from "@/components/focus-rail"
import { Navbar } from "@/components/navbar"
import Footer from "@/components/layout/Footer"
import { ImageCarousel } from "@/components/ui/image-carousel"
import { Button } from "@/components/ui/button"
import {
    Sparkles,
    Shield,
    Crown,
    Activity,
    Puzzle,
    Zap,
    Smile,
    Baby,
    ArrowRight,
    Check,
    Phone,
    Star,
    ArrowUpRight,
    Award,
    Heart,
    Users,
    Microscope
} from "lucide-react"

// --- Data & Assets ---

const galleryItems: FocusRailItem[] = [
    {
        id: 1,
        title: "Modern Treatment Room",
        description: "State-of-the-art dental equipment",
        imageSrc: "/assests/clinic1.png",
        meta: "Facility",
    },
    {
        id: 2,
        title: "Patient Comfort",
        description: "Relaxing waiting area",
        imageSrc: "/assests/Clinic2.png",
        meta: "Facility",
    },
    {
        id: 3,
        title: "Expert Care",
        description: "Dr. Poonam Bambarkar",
        imageSrc: "/assests/client-10.jpeg",
        meta: "Team",
    },
    {
        id: 4,
        title: "Happy Smiles",
        description: "Patient transformations",
        imageSrc: "/assests/Patient.png",
        meta: "Results",
    },
    {
        id: 5,
        title: "Advanced Technology",
        description: "Digital diagnostics",
        imageSrc: "/assests/client-6.png",
        meta: "Tech",
    },
]

const services = [
    {
        id: "rootcanal",
        title: "Root Canal Treatment",
        description: "Save your natural tooth with our advanced rotary technology and comfort protocols.",
        icon: Zap,
        featured: true,
        features: ["Microscopic Endo", "Single Visit", "Painless"],
        href: "/services/root-canal-treatment"
    },
    {
        id: "restorative",
        title: "Fillings, Crowns & Bridges",
        description: "Restore damaged teeth with durable, natural-looking materials for long-lasting function.",
        icon: Shield,
        features: ["Zirconia Crowns", "Composite Fillings", "5-Year Warranty"],
        href: "/services/restorative"
    },
    {
        id: "cosmetic",
        title: "Cosmetic Dentistry", // Updated title to match page
        description: "Professional cleaning, whitening, and veneers for a brighter, healthier smile.",
        icon: Sparkles,
        features: ["Zoom Whitening", "Veneers", "Smile Design"],
        href: "/services/cosmetic-dentistry"
    },
    {
        id: "implants",
        title: "Dental Implants",
        description: "Permanent, natural-looking replacements for missing teeth.",
        icon: Award,
        features: ["Titanium Implants", "Bone Grafting", "Lifetime Warranty"],
        href: "/services/dental-implants"
    },
    {
        id: "ortho",
        title: "Orthodontics & Braces",
        description: "Straighten your teeth with modern braces and invisible aligners.",
        icon: Star,
        features: ["Invisalign", "Metal Braces", "Retainers"],
        href: "/services/orthodontics"
    },
    {
        id: "pediatric",
        title: "Pediatric Dentistry",
        description: "Fun, gentle care for your little ones to build healthy habits.",
        icon: Baby,
        features: ["Fluoride Varnish", "Sealants", "No-Tears Care"],
        href: "/services/pediatric-dentistry"
    },
    {
        id: "oral-surgery",
        title: "Extraction & Replacement",
        description: "Gentle extractions and immediate replacement options when necessary.",
        icon: Heart,
        features: ["Wisdom Teeth", "Painless Extraction", "Socket Preservation"],
        href: "/services/extraction-replacement"
    },
    {
        id: "prosthodontics",
        title: "Full / Partial Denture",
        description: "Comfortable, custom-fitted dentures to restore your smile and function.",
        icon: Users,
        features: ["BPS Dentures", "Flexible partials", "Implant-supported"],
        href: "/services/full-partial-dentures"
    },
    {
        id: "diagnostics",
        title: "Digital X-Ray",
        description: "Low-radiation, high-precision imaging for accurate diagnosis.",
        icon: Microscope,
        features: ["RVG Sensors", "OPG", "Instant Results"],
        href: "/services/digital-diagnostics"
    }
]

// --- Components ---

function SectionHeader({
    label,
    title,
    subtitle,
    center = false,
    light = false
}: {
    label: string,
    title: React.ReactNode,
    subtitle?: string,
    center?: boolean,
    light?: boolean
}) {
    return (
        <div className={`mb-12 ${center ? "text-center mx-auto max-w-3xl" : "max-w-2xl"}`}>
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase mb-6 ${light
                    ? "bg-white/10 text-white border border-white/20"
                    : "bg-teal-50 text-teal-700 border border-teal-100"
                    }`}
            >
                {light ? <Star className="w-3 h-3 text-dental-gold" /> : <Sparkles className="w-3 h-3 text-dental-teal" />}
                {label}
            </motion.div>
            <motion.h2
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className={`font-display text-4xl md:text-5xl font-medium leading-[1.1] mb-6 ${light ? "text-white" : "text-dental-charcoal"
                    }`}
            >
                {title}
            </motion.h2>
            {subtitle && (
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className={`text-lg leading-relaxed ${light ? "text-white/80" : "text-slate-600"
                        }`}
                >
                    {subtitle}
                </motion.p>
            )}
        </div>
    )
}

function ServiceCard({ service, index }: { service: typeof services[0], index: number }) {
    const isFeatured = service.featured

    return (
        <Link href={service.href} className={`block group relative h-full rounded-3xl transition-all duration-300 ${isFeatured ? "md:col-span-2" : ""}`}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`flex flex-col p-8 h-full rounded-3xl transition-all duration-500
                ${isFeatured
                        ? "bg-gradient-to-br from-teal-50 to-white border border-teal-100/50 shadow-xl"
                        : "bg-white border border-slate-100 group-hover:shadow-lg group-hover:border-teal-50"
                    }
            `}
            >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300
                ${isFeatured ? "bg-teal-600 text-white" : "bg-teal-50 text-teal-600 group-hover:bg-teal-100"}
            `}>
                    <service.icon className="w-7 h-7" />
                </div>

                <h3 className="font-display text-2xl font-semibold text-dental-charcoal mb-3">
                    {service.title}
                </h3>

                <p className="text-slate-600 leading-relaxed mb-8 flex-grow">
                    {service.description}
                </p>

                <ul className="space-y-3 mb-8">
                    {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-3 text-sm font-medium text-slate-700">
                            <Check className="w-4 h-4 text-dental-teal" />
                            {feature}
                        </li>
                    ))}
                </ul>

                <div className="mt-auto pt-6 border-t border-slate-100/50 flex items-center justify-between">
                    <span className="text-sm font-semibold text-dental-teal group-hover:underline decoration-dental-teal/30 underline-offset-4">
                        Learn More
                    </span>
                    <div className="w-8 h-8 rounded-full bg-white border border-slate-100 flex items-center justify-center group-hover:bg-dental-teal group-hover:text-white group-hover:border-transparent transition-all duration-300">
                        <ArrowUpRight className="w-4 h-4" />
                    </div>
                </div>
            </motion.div>
        </Link>
    )
}

// --- Main Page Component ---

export default function ServicesPage() {
    const headerRef = useRef<HTMLDivElement>(null)
    const { scrollY } = useScroll()
    const heroOpacity = useTransform(scrollY, [0, 400], [1, 0])
    const heroY = useTransform(scrollY, [0, 400], [0, 100])

    return (
        <div className="bg-dental-cream min-h-screen flex flex-col font-sans">
            <Navbar />

            <main className="flex-1">

                {/* 
                  === HERO SECTION === 
                  Top: Text (High Clarity)
                  Bottom: Gallery (Visual Immersion)
                */}
                <section ref={headerRef} className="relative pt-32 lg:pt-48 pb-0 overflow-hidden">
                    <div className="container relative z-10 px-4 sm:px-6 lg:px-8 text-center max-w-4xl mx-auto mb-16 lg:mb-24">
                        <motion.div style={{ opacity: heroOpacity, y: heroY }}>
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className="font-display text-5xl md:text-7xl font-medium text-dental-charcoal mb-6 tracking-tight leading-[1]"
                            >
                                Complete Care for <br className="hidden md:block" />
                                <span className="text-dental-teal italic">Every Smile</span>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2, duration: 0.8 }}
                                className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed mb-10"
                            >
                                Specialized in pediatric dentistry with gentle, modern techniques for the whole family.
                                From first teeth to forever smiles.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="flex flex-col sm:flex-row gap-4 justify-center"
                            >
                                <Button size="lg" className="relative group overflow-hidden rounded-full h-14 pl-8 pr-6 text-lg bg-gradient-to-r from-teal-600 to-dental-teal text-white shadow-[0_10px_40px_-10px_rgba(13,148,136,0.5)] hover:shadow-[0_20px_40px_-10px_rgba(13,148,136,0.6)] transition-all duration-300 hover:-translate-y-1" asChild>
                                    <Link href="/contact" className="flex items-center gap-2">
                                        <span className="relative z-10 font-medium tracking-wide">Book Consultation</span>
                                        <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                                            <ArrowRight className="w-4 h-4 text-white" />
                                        </div>
                                    </Link>
                                </Button>
                                <Button variant="outline" size="lg" className="rounded-full h-14 px-8 text-lg border-2 border-slate-200 text-dental-slate hover:border-dental-teal hover:text-dental-teal bg-transparent hover:bg-teal-50/50 transition-colors duration-300" asChild>
                                    <Link href="tel:+918237156777">
                                        <Phone className="w-5 h-5 mr-2" />
                                        +91 82371 56777
                                    </Link>
                                </Button>
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Full Width Gallery Strip */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 1 }}
                        className="w-full relative h-[50vh] min-h-[400px]"
                    >
                        <FocusRail
                            items={galleryItems}
                            autoPlay={true} // Gentle motion
                            interval={6000}
                        />
                        {/* Gradient Mask for Seamless Transition */}
                        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-dental-cream to-transparent z-10 pointer-events-none" />
                    </motion.div>
                </section>


                {/* 
                  === INVISIBLE BRACES (Signature Treatment) ===
                  Asymmetric Split Layout with Before/After Slider
                */}
                <section className="pt-12 pb-24 lg:pb-32 bg-gradient-to-b from-dental-cream to-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-teal-50/30 -skew-x-12 translate-x-1/3" />

                    <div className="container px-4 md:px-6 relative z-10">
                        <div className="grid lg:grid-cols-[45%_55%] gap-16 items-center">

                            {/* Left: Sticky Text Content */}
                            <div className="lg:sticky lg:top-32 self-start">
                                <SectionHeader
                                    label="Signature Treatment"
                                    title={
                                        <>
                                            Invisible Braces <br />
                                            <span className="text-dental-gold-text italic">Without Compromise</span>
                                        </>
                                    }
                                    subtitle="Worried about teeth alignment? There's a better alternative. Experience the freedom of clear aligners for you or your child."
                                />

                                <div className="space-y-4 mb-10">
                                    <h4 className="font-semibold text-lg text-dental-charcoal mb-4">Why Choose Invisible Aligners?</h4>
                                    {[
                                        "No wires or metal brackets",
                                        "Transparent & charming aesthetic",
                                        "Physically convenient to wear",
                                        "Removable for eating & brushing",
                                        "Freedom to eat your favorite food",
                                        "Reduces gaps and crowding",
                                    ].map((item, i) => (
                                        <div key={i} className="flex gap-3 items-center">
                                            <div className="w-8 h-8 rounded-full bg-teal-50 flex items-center justify-center flex-shrink-0">
                                                <Check className="w-4 h-4 text-dental-teal" strokeWidth={2.5} />
                                            </div>
                                            <p className="font-medium text-slate-700">{item}</p>
                                        </div>
                                    ))}
                                    <div className="pt-4 border-t border-slate-100 mt-6">
                                        <p className="text-dental-teal font-medium italic text-lg">
                                            "Results are splendidly straight teeth and a gorgeous smile."
                                        </p>
                                    </div>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Button className="h-14 rounded-full px-10 text-lg bg-dental-teal text-white hover:bg-teal-700 shadow-xl shadow-teal-900/20 transition-all duration-300 hover:scale-105" asChild>
                                        <Link href="/contact">Book Appointment</Link>
                                    </Button>
                                    <Button variant="outline" className="h-14 rounded-full px-8 text-lg border border-slate-300 text-slate-600 hover:border-dental-teal hover:text-dental-teal bg-white/50 backdrop-blur-sm transition-all duration-300" asChild>
                                        <Link href="tel:+918237156777">
                                            <Phone className="w-5 h-5 mr-2" />
                                            82371 56777
                                        </Link>
                                    </Button>
                                </div>
                            </div>

                            {/* Right: High-Quality Feature Image */}
                            {/* Right: High-Quality Feature Image */}
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="relative rounded-[2.5rem] overflow-hidden shadow-2xl shadow-teal-900/20 bg-white aspect-[4/3] ring-1 ring-slate-100/50"
                            >
                                <Image
                                    src="/assests/invisible-braces.jpg"
                                    alt="Clear Aligner Detail"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />

                                {/* Overlay Card - Premium Glass */}
                                <div className="absolute bottom-8 left-8 bg-white/80 backdrop-blur-xl border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-2 pr-6 rounded-full flex items-center gap-4 hover:bg-white/90 transition-all duration-300 group/card">
                                    <div className="h-12 w-12 bg-white rounded-full flex items-center justify-center shadow-sm group-hover/card:scale-110 transition-transform duration-300">
                                        <Sparkles className="h-5 w-5 text-dental-teal fill-teal-50" />
                                    </div>
                                    <div className="text-left">
                                        <p className="font-bold text-dental-charcoal text-sm leading-tight">Advanced Care</p>
                                        <p className="text-[11px] uppercase tracking-wider text-dental-teal font-semibold mt-0.5">Premium Materials</p>
                                    </div>
                                </div>
                            </motion.div>

                        </div>
                    </div>
                </section>


                {/* 
                  === CLINIC VIDEO SHOWCASE (Cinematic Experience) ===
                */}
                <section className="py-24 bg-white overflow-hidden">
                    <div className="container px-4 md:px-6">
                        <SectionHeader
                            center
                            label="Clinic Experience"
                            title="See the Difference"
                            subtitle="Take a virtual tour of our state-of-the-art facility where comfort meets clinical excellence."
                        />

                        {/* Bento Grid Layout */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 h-auto lg:h-[600px]">

                            {/* Main Feature Video (Left - 2/3 width) */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7 }}
                                className="lg:col-span-2 relative rounded-[2.5rem] overflow-hidden shadow-2xl shadow-slate-200 group"
                            >
                                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/0 transition-colors duration-500 z-10" />
                                <video
                                    src="/assests/clinic-video-1.mp4"
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-105"
                                />
                                {/* Floating Badge */}
                                <div className="absolute top-6 left-6 z-20 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
                                    <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                                    <span className="text-xs font-bold text-slate-800 uppercase tracking-wider">Live Tour</span>
                                </div>
                            </motion.div>

                            {/* Secondary Videos Stack (Right - 1/3 width) */}
                            <div className="flex flex-col gap-6 lg:gap-8">

                                {/* Top Right */}
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.7, delay: 0.2 }}
                                    className="flex-1 relative rounded-[2rem] overflow-hidden shadow-xl shadow-slate-200 group"
                                >
                                    <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/0 transition-colors duration-500 z-10" />
                                    <video
                                        src="/assests/clinic-video-2.mp4"
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                        className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-105"
                                    />
                                    <div className="absolute bottom-4 left-4 z-20">
                                        <p className="text-white font-medium text-sm drop-shadow-md">Advanced Diagnostics</p>
                                    </div>
                                </motion.div>

                                {/* Bottom Right */}
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.7, delay: 0.4 }}
                                    className="flex-1 relative rounded-[2rem] overflow-hidden shadow-xl shadow-slate-200 group"
                                >
                                    <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/0 transition-colors duration-500 z-10" />
                                    <video
                                        src="/assests/clinic-video-3.mp4"
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                        className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-105"
                                    />
                                    <div className="absolute bottom-4 left-4 z-20">
                                        <p className="text-white font-medium text-sm drop-shadow-md">Sterilization Protocols</p>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </section>


                {/* 
                  === SERVICES GRID (Editorial) ===
                */}
                <section className="py-24 lg:py-32 bg-dental-cream">
                    <div className="container px-4 md:px-6">
                        <SectionHeader
                            center
                            label="Comprehensive Care"
                            title="Curated Dental Solutions"
                            subtitle="From preventative hygiene to complex restorative surgeries, we cover every aspect of your oral health with specialized expertise."
                        />

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
                            {services.map((service, index) => (
                                <ServiceCard key={service.id} service={service} index={index} />
                            ))}
                        </div>
                    </div>
                </section>


                {/* 
                  === PEDIATRIC EXCELLENCE ===
                */}
                <section className="py-24 bg-pediatric-cream/50 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-pediatric-sage/20 to-pediatric-coral/20" />
                    <div className="container px-4 md:px-6">
                        <SectionHeader
                            center
                            label="For Little Ones"
                            title="Pediatric Excellence"
                            subtitle="We understand that treating children requires a special touch. Our protocols are designed to build confidence from the very first visit."
                        />

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mt-12">
                            {[
                                {
                                    title: "First Visit Magic",
                                    desc: "We turn the dental chair into a spaceship and instruments into magic wands. No fear, just fun.",
                                    icon: Sparkles,
                                    color: "bg-[#F4A261]/10 text-[#F4A261]"
                                },
                                {
                                    title: "Class B Sterilization",
                                    desc: "We use the highest standard Class B Autoclave to ensure 100% sterile instruments for your child's safety.",
                                    icon: Shield,
                                    color: "bg-[#A8DADC]/20 text-[#264653]"
                                },
                                {
                                    title: "Growth Monitoring",
                                    desc: "We track jaw development and alignment from age 1, catching potential issues early before they become problems.",
                                    icon: Activity,
                                    color: "bg-[#0d9488]/10 text-[#0d9488]"
                                },
                                {
                                    title: "Intra-oral Camera",
                                    desc: "We use tiny cameras to show you and your child exactly what's happening inside their mouth, building trust.",
                                    icon: Microscope,
                                    color: "bg-purple-100 text-purple-600"
                                }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="bg-white p-8 rounded-3xl border border-stone-100 hover:border-pediatric-sage/50 shadow-sm hover:shadow-lg transition-all"
                                >
                                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${item.color}`}>
                                        <item.icon className="w-7 h-7" />
                                    </div>
                                    <h3 className="font-display text-2xl font-bold text-dental-charcoal mb-4">{item.title}</h3>
                                    <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 
                  === TECHNOLOGY (Immersion) ===
                */}
                <section className="py-24 bg-dental-charcoal text-white relative overflow-hidden">
                    {/* Background texture/gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-dental-charcoal to-slate-900 z-0" />
                    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-teal-900/20 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />

                    <div className="container px-4 md:px-6 relative z-10 text-white">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">

                            {/* Image Side */}
                            <div className="lg:order-2 flex flex-col gap-8">
                                <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                                    <Image
                                        src="/assests/2025-08-13.webp" // Tech image
                                        alt="Advanced Dental Technology"
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                {/* Stat Block - Moved out of image */}
                                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex items-center gap-6 backdrop-blur-sm">
                                    <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-dental-teal to-teal-400">
                                        99.8%
                                    </div>
                                    <div className="h-12 w-px bg-white/10" />
                                    <div>
                                        <p className="text-white font-semibold text-lg">Precision Success Rate</p>
                                        <p className="text-white/50 text-sm">Enhanced accuracy with digital diagnostics.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Text Side */}
                            <div className="lg:order-1">
                                <SectionHeader
                                    light
                                    label="Advanced Infrastructure"
                                    title={
                                        <>
                                            Precision Care with <br />
                                            <span className="text-dental-teal">Modern Tech</span>
                                        </>
                                    }
                                    subtitle="We believe the best care is supported by the best technology. Our clinic is equipped with cutting-edge diagnostic and treatment tools."
                                />

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-8 mt-12">
                                    {[
                                        { name: "Digital X-Rays", desc: "Instant, low-radiation imaging." },
                                        { name: "Microscopic Precision", desc: "Root canals performed under high magnification." },
                                        { name: "Intraoral Cameras", desc: "Transparent diagnosis you can see." },
                                        { name: "Class B Autoclave", desc: "100% Sterilization guarantee." }
                                    ].map((tech, i) => (
                                        <div key={i} className="group">
                                            <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 group-hover:bg-teal-500/20 group-hover:border-teal-500/50 transition-all">
                                                <Zap className="w-5 h-5 text-dental-teal" />
                                            </div>
                                            <h4 className="text-lg font-medium text-white mb-2">{tech.name}</h4>
                                            <p className="text-white/60 text-sm leading-relaxed">{tech.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* 
                  === FINAL CTA ===
                */}
                <section className="py-24 bg-gradient-to-br from-dental-teal to-teal-700 relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10 mix-blend-overlay"></div>
                    <div className="container px-4 text-center relative z-10">
                        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-8">
                            Ready to Transform Your Smile?
                        </h2>
                        <p className="text-xl text-teal-50/90 max-w-2xl mx-auto mb-12">
                            Schedule a consultation with Dr. Poonam Bambarkar today and experience the difference.
                        </p>
                        <Button size="lg" className="h-16 rounded-full px-10 text-xl bg-white text-teal-800 hover:bg-teal-50 shadow-2xl" asChild>
                            <Link href="/#contact">Book Your Appointment</Link>
                        </Button>
                    </div>
                </section>

            </main>

            <Footer />
        </div>
    )
}
