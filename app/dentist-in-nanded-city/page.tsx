"use client"

import { useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { Navbar } from "@/components/navbar"
import Footer from "@/components/layout/Footer"
import { Button } from "@/components/ui/button"
import {
    MapPin,
    Phone,
    ArrowRight,
    Star,
    Sparkles,
    Shield,
    Clock,
    Check,
    Calendar,
    Users,
    Heart,
    Award
} from "lucide-react"

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

function FeatureCard({ icon: Icon, title, description }: { icon: any, title: string, description: string }) {
    return (
        <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group">
            <div className="w-12 h-12 rounded-2xl bg-teal-50 flex items-center justify-center mb-6 group-hover:bg-dental-teal group-hover:text-white transition-colors">
                <Icon className="w-6 h-6 text-dental-teal group-hover:text-white transition-colors" />
            </div>
            <h3 className="font-display text-xl font-semibold text-dental-charcoal mb-3">{title}</h3>
            <p className="text-slate-600 leading-relaxed">{description}</p>
        </div>
    )
}

export default function NandedCityPage() {
    const { scrollY } = useScroll()
    const heroOpacity = useTransform(scrollY, [0, 400], [1, 0])
    const heroY = useTransform(scrollY, [0, 400], [0, 100])

    return (
        <div className="bg-dental-cream min-h-screen flex flex-col font-sans">
            <Navbar />

            <main className="flex-1">

                {/* === HERO SECTION === */}
                <section className="relative pt-32 lg:pt-48 pb-20 lg:pb-32 overflow-hidden">
                    <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <motion.div style={{ opacity: heroOpacity, y: heroY }}>
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-100 text-dental-teal text-xs font-semibold uppercase tracking-wide mb-6">
                                    <MapPin className="w-3 h-3" />
                                    Located in Nanded City
                                </div>
                                <h1 className="font-display text-5xl md:text-7xl font-medium text-dental-charcoal mb-6 tracking-tight leading-[1.1]">
                                    Premium <br />
                                    Dental Care in <br />
                                    <span className="text-dental-teal italic">Nanded City</span>
                                </h1>
                                <p className="text-xl text-slate-600 max-w-lg leading-relaxed mb-10">
                                    Your trusted neighborhood dentist. Dr. Poonam Bambarkar offers specialized treatments right here at R B Ingale Plaza, Nanded City.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Button size="lg" className="rounded-full h-14 px-8 text-lg bg-dental-teal text-white hover:bg-teal-700 shadow-[0_10px_40px_-10px_rgba(13,148,136,0.5)] transition-all duration-300 hover:-translate-y-1" asChild>
                                        <Link href="/contact">Book Consultation</Link>
                                    </Button>
                                    <Button variant="outline" size="lg" className="rounded-full h-14 px-8 text-lg border-2 border-slate-200 text-dental-slate hover:border-dental-teal hover:text-dental-teal bg-transparent hover:bg-teal-50/50 transition-colors duration-300" asChild>
                                        <Link href="tel:+918237156777">
                                            <Phone className="w-5 h-5 mr-2" />
                                            +91 82371 56777
                                        </Link>
                                    </Button>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8 }}
                                className="relative lg:h-[600px] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-teal-900/10"
                            >
                                <Image
                                    src="/assets/Clinic2.png"
                                    alt="Dentistree Clinic Nanded City"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
                                <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/50">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full bg-dental-teal/10 flex items-center justify-center flex-shrink-0">
                                            <MapPin className="w-6 h-6 text-dental-teal" />
                                        </div>
                                        <div>
                                            <p className="font-bold text-dental-charcoal">R B Ingale Plaza</p>
                                            <p className="text-sm text-slate-600">Ground Floor 5, Nanded City Circle</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* === WHY CHOOSE US === */}
                <section className="py-24 bg-white relative">
                    <div className="container px-4 md:px-6">
                        <SectionHeader
                            center
                            label="Local & Trusted"
                            title="Nanded City's Preferred Dental Clinic"
                            subtitle="We are proud to serve the Nanded City community with ethical, transparent, and high-quality dental care."
                        />

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <FeatureCard
                                icon={Clock}
                                title="Convenient Timings"
                                description="Open 7 days a week (Mon-Sun) to suit your busy schedule within the township."
                            />
                            <FeatureCard
                                icon={Award}
                                title="Specialist Care"
                                description="From pediatric dentistry for your kids to implants for seniors, we cover it all."
                            />
                            <FeatureCard
                                icon={Sparkles}
                                title="Modern Facility"
                                description="State-of-the-art clinic with strict sterilization steps right at your doorstep."
                            />
                        </div>
                    </div>
                </section>

                {/* === SERVICES HIGHLIGHT === */}
                <section className="py-24 bg-dental-cream">
                    <div className="container px-4 md:px-6">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <SectionHeader
                                    label="Expert Treatments"
                                    title={
                                        <>
                                            Advanced Dentistry <br />
                                            <span className="text-dental-teal">Close to Home</span>
                                        </>
                                    }
                                    subtitle="Why travel far when world-class dental treatments are available right inside Nanded City?"
                                />
                                <div className="space-y-6">
                                    {[
                                        "Painless Root Canals - Single sitting expert care",
                                        "Dental Implants - Restore your smile permanently",
                                        "Kids Dentistry - Flouride, sealants & habit breaking",
                                        "Orthodontics - Invisible braces & metal braces",
                                        "Cosmetic Dentistry - Veneers & whitening"
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                                            <div className="w-8 h-8 rounded-full bg-teal-50 flex items-center justify-center flex-shrink-0">
                                                <Check className="w-4 h-4 text-dental-teal" strokeWidth={3} />
                                            </div>
                                            <span className="font-medium text-dental-charcoal">{item}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-10">
                                    <Button size="lg" variant="outline" className="rounded-full px-8 border-dental-teal text-dental-teal hover:bg-dental-teal hover:text-white transition-all" asChild>
                                        <Link href="/services">Explore Treatments</Link>
                                    </Button>
                                </div>
                            </div>
                            <div className="relative">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-4 translate-y-8">
                                        <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg">
                                            <Image src="/assets/client-10.jpeg" alt="Dr Poonam" fill className="object-cover" />
                                        </div>
                                        <div className="relative h-48 rounded-2xl overflow-hidden shadow-lg">
                                            <Image src="/assets/invisible-braces.jpg" alt="Aligners" fill className="object-cover" />
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="relative h-48 rounded-2xl overflow-hidden shadow-lg">
                                            <Image src="/assets/Patient.png" alt="Happy Patient" fill className="object-cover" />
                                        </div>
                                        <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg">
                                            <Image src="/assets/clinic1.png" alt="Clinic Interior" fill className="object-cover" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* === CTA / LOCATION === */}
                <section className="py-24 bg-dental-charcoal relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-dental-charcoal to-slate-900 z-0" />
                    <div className="container relative z-10 px-4 text-center">
                        <div className="max-w-3xl mx-auto">
                            <h2 className="font-display text-4xl md:text-5xl text-white mb-8">
                                Your Local Dentist at Nanded City
                            </h2>
                            <p className="text-xl text-slate-300 mb-12">
                                Walk in for a consultation. We are located at R B Ingale Plaza, right next to Uttam Sweets.
                            </p>

                            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/10 mb-12 text-left flex flex-col md:flex-row gap-8 items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-dental-teal flex items-center justify-center text-white">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-white font-semibold text-lg">Dentistree Dental Hospital</p>
                                        <p className="text-slate-300">R B Ingale Plaza, Nanded City, Pune</p>
                                    </div>
                                </div>
                                <Button className="bg-white text-dental-teal hover:bg-teal-50 rounded-full px-8 h-12" asChild>
                                    <Link href="https://maps.google.com/?q=Dentistree+Clinic+Pune" target="_blank">
                                        Get Directions
                                    </Link>
                                </Button>
                            </div>

                            <Button size="lg" className="h-16 rounded-full px-12 text-xl bg-dental-teal text-white hover:bg-teal-600 shadow-2xl shadow-teal-900/50" asChild>
                                <Link href="/contact">Book Your Appointment</Link>
                            </Button>
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    )
}
