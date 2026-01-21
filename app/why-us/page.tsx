"use client"

import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import Footer from "@/components/layout/Footer"
import { motion, useScroll, useTransform } from "framer-motion"
import {
    ShieldCheck,
    Award,
    Heart,
    Users,
    ArrowRight,
    Star,
    CheckCircle2,
    Sparkles,
    Microscope,
    Baby,
    Clock,
    Zap
} from "lucide-react"
import { Button } from "@/components/ui/button"

// --- Animation Variants (Matching About Page) ---
const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" as const }
    }
}

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2
        }
    }
}

export default function WhyUsPage() {
    const { scrollYProgress } = useScroll()
    const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1])

    return (
        <div className="bg-white min-h-screen flex flex-col font-sans selection:bg-teal-100 selection:text-teal-900">
            {/* Progress Bar */}
            <motion.div
                style={{ scaleX }}
                className="fixed top-0 left-0 right-0 h-1 bg-dental-teal origin-left z-50"
            />
            <Navbar />

            <main className="flex-1">

                {/* 
                  === HERO SECTION ===
                  Style: Clean, Editorial, "Dental Cream" Gradient
                */}
                <section className="relative min-h-[85vh] flex items-center justify-center bg-gradient-to-b from-dental-cream via-white to-white overflow-hidden pt-20">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                        style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230d9488' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                        }}
                    />

                    <div className="container px-4 md:px-6 relative z-10">
                        <div className="max-w-5xl mx-auto text-center">

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-50 border border-teal-100 text-dental-teal font-semibold text-xs tracking-widest uppercase mb-8"
                            >
                                <Zap className="w-3 h-3" />
                                The Dentistree Difference
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2, duration: 0.8 }}
                                className="font-display text-5xl md:text-7xl lg:text-8xl font-medium text-dental-charcoal mb-8 leading-[1.1]"
                            >
                                Not Just Better Dentistry. <br />
                                <span className="text-dental-teal italic relative inline-block">
                                    Better Care.
                                    <svg className="absolute w-full h-3 -bottom-1.5 left-0 text-amber-300 opacity-60 z-[-1]" viewBox="0 0 100 10" preserveAspectRatio="none">
                                        <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="none" />
                                    </svg>
                                </span>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.8 }}
                                className="text-xl md:text-2xl text-slate-500 leading-relaxed mb-12 max-w-3xl mx-auto font-light"
                            >
                                In a world of corporate clinics, we chose a different path.
                                Unrushed appointments, transparent pricing, and a doctor who actually remembers your name.
                            </motion.p>

                            {/* Trust Stats Bar - 2+1 Layout */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6, duration: 0.8 }}
                                className="flex flex-col items-center gap-4 md:gap-6 mt-12 w-full max-w-lg md:max-w-none mx-auto"
                            >
                                {/* Top Row: 2 Cards */}
                                <div className="grid grid-cols-2 gap-3 md:gap-6 w-full md:w-auto">
                                    {[
                                        { icon: Star, label: "Google Rating", value: "5.0", color: "text-amber-400" },
                                        { icon: Users, label: "Happy Patients", value: "12K+", color: "text-teal-600" }
                                    ].map((item, i) => (
                                        <div key={i} className="group flex flex-col md:flex-row items-center md:items-center justify-center md:justify-start gap-2 md:gap-4 px-3 py-4 md:px-8 md:py-5 bg-white rounded-2xl border border-stone-100 shadow-[0_2px_20px_-12px_rgba(0,0,0,0.1)] hover:shadow-xl hover:-translate-y-1 transition-all duration-500 w-full md:w-auto md:min-w-[260px]">
                                            <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-slate-50 flex items-center justify-center shrink-0 border border-slate-100 group-hover:border-teal-100 group-hover:bg-teal-50 transition-colors duration-500">
                                                <item.icon className={`w-5 h-5 md:w-6 md:h-6 ${item.color} transition-transform duration-500 group-hover:scale-110`} />
                                            </div>
                                            <div className="flex flex-col text-center md:text-left">
                                                <span className="font-display text-xl md:text-2xl font-bold text-slate-800 leading-none mb-1">{item.value}</span>
                                                <span className="text-[10px] md:text-xs font-semibold text-slate-400 uppercase tracking-wider md:tracking-widest">{item.label}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Bottom Row: 1 Card */}
                                <div className="flex justify-center w-full md:w-auto">
                                    <div className="group flex flex-row items-center gap-4 px-6 py-4 md:px-8 md:py-5 bg-white rounded-2xl border border-stone-100 shadow-[0_2px_20px_-12px_rgba(0,0,0,0.1)] hover:shadow-xl hover:-translate-y-1 transition-all duration-500 w-full max-w-[280px] md:max-w-none md:w-auto md:min-w-[260px]">
                                        <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-slate-50 flex items-center justify-center shrink-0 border border-slate-100 group-hover:border-teal-100 group-hover:bg-teal-50 transition-colors duration-500">
                                            <Award className="w-6 h-6 text-indigo-500 transition-transform duration-500 group-hover:scale-110" />
                                        </div>
                                        <div className="flex flex-col text-left">
                                            <span className="font-display text-xl md:text-2xl font-bold text-slate-800 leading-none mb-1">15+</span>
                                            <span className="text-[10px] md:text-xs font-semibold text-slate-400 uppercase tracking-wider md:tracking-widest">Years Trust</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* 
                  === SECTION 2: CLINICAL EXCELLENCE (Split Layout) === 
                  Refrence: "Meet Your Doctor" Style
                */}
                <section className="py-24 bg-white border-t border-stone-100">
                    <div className="container px-4 md:px-6">
                        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
                            {/* Text Side */}
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                className="space-y-8 order-2 lg:order-1"
                            >
                                <SectionHeader
                                    label="Clinical Excellence"
                                    title={<>Precision Meets <span className="text-dental-teal italic">Comfort</span></>}
                                    subtitle="We don't just fix teeth. We engineer healthy smiles using the latest advancements in dental science."
                                />

                                <ul className="space-y-6">
                                    {[
                                        {
                                            title: "Microscopic Precision",
                                            desc: "We use magnification for treatments to ensure we conserve as much natural tooth structure as possible."
                                        },
                                        {
                                            title: "Painless Protocols",
                                            desc: "From numbing gels to gentle injection techniques, we've mastered the art of pain-free dentistry."
                                        },
                                        {
                                            title: "Digital Diagnostics",
                                            desc: "Low-radiation digital X-rays give us an instant, crystal-clear view of your oral health."
                                        }
                                    ].map((item, i) => (
                                        <li key={i} className="flex gap-4">
                                            <div className="w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center shrink-0 border border-teal-100">
                                                <CheckCircle2 className="w-5 h-5 text-dental-teal" />
                                            </div>
                                            <div>
                                                <h4 className="font-display text-lg font-bold text-dental-charcoal mb-1">{item.title}</h4>
                                                <p className="text-slate-600 leading-relaxed text-sm">{item.desc}</p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>

                            {/* Image Side */}
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="relative order-1 lg:order-2 h-[600px]"
                            >
                                <div className="absolute inset-0 bg-dental-cream rounded-[2.5rem] transform rotate-3" />
                                <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-teal-900/10 bg-white">
                                    <Image
                                        src="/assests/clinic1.png"
                                        alt="Dentistree Advanced Equipment"
                                        fill
                                        className="object-cover"
                                    />
                                    {/* Overlay Gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
                                </div>

                                {/* Floating Badge */}
                                <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/50">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center text-amber-600">
                                            <ShieldCheck className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <div className="font-display text-lg font-bold text-dental-charcoal">100% Sterile Environment</div>
                                            <div className="text-sm text-slate-500">Exceeding international safety standards</div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* 
                  === SECTION 3: THE ADVANTAGES (Grid) ===
                  Style: "Philosophy" Cards from About
                */}
                <section className="py-24 bg-stone-50">
                    <div className="container px-4 md:px-6">
                        <SectionHeader
                            center
                            label="Why Choose Us"
                            title="The Dentistree Standard"
                            subtitle="It's not one big thing. It's a hundred little things we do differently to respect you and your health."
                        />

                        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-16">
                            {[
                                {
                                    icon: Heart,
                                    title: "Patient-First Approach",
                                    desc: "We listen more than we speak. Your treatment plan is based on your needs, not our sales targets."
                                },
                                {
                                    icon: Microscope,
                                    title: "Advanced Technology",
                                    desc: "Rotary endodontics and digital imaging allow for faster, more accurate, and more comfortable treatments."
                                },
                                {
                                    icon: Clock,
                                    title: "Zero-Wait Policy",
                                    desc: "We respect your time. Our appointments are scheduled to ensure you are seen exactly when promised."
                                },
                                {
                                    icon: Baby,
                                    title: "Family Friendly",
                                    desc: "From toddlers to grandparents, our clinic is designed to make every generation feel at home."
                                },
                                {
                                    icon: ShieldCheck,
                                    title: "Strict Sterilization",
                                    desc: "We follow a rigorous 4-step sterilization protocol. Your safety is our absolute non-negotiable priority."
                                },
                                {
                                    icon: Sparkles,
                                    title: "Transparent Pricing",
                                    desc: "No hidden costs. No surprise bills. We provide detailed estimates before starting any procedure."
                                },
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="bg-white p-8 rounded-3xl border border-stone-100 hover:shadow-xl hover:border-dental-teal/20 transition-all duration-300 group"
                                >
                                    <div className="w-12 h-12 rounded-2xl bg-teal-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                        <item.icon className="w-6 h-6 text-dental-teal" />
                                    </div>
                                    <h3 className="font-display text-xl font-bold text-dental-charcoal mb-3 group-hover:text-dental-teal transition-colors">{item.title}</h3>
                                    <p className="text-slate-600 leading-relaxed text-sm">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 
                  === CTA SECTION ===
                  Style: Consistent Premium Footer CTA
                */}
                <section className="py-32 bg-[#0F172A] relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-dental-teal/20 to-transparent opacity-30" />
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal-500/10 rounded-full blur-[100px]" />

                    <div className="container px-4 text-center relative z-10">
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-8 leading-tight"
                        >
                            Your Smile Deserves <br />
                            <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-teal-400">The Best Care</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto font-light"
                        >
                            Join the thousands of families in Pune who trust Dentistree for their oral health.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="flex flex-col sm:flex-row gap-6 justify-center"
                        >
                            <Button size="lg" className="h-16 rounded-full px-10 text-lg bg-dental-teal text-white hover:bg-teal-600 shadow-xl shadow-teal-900/20" asChild>
                                <Link href="/contact">Book Your Appointment</Link>
                            </Button>
                            <Button variant="outline" size="lg" className="h-16 rounded-full px-10 text-lg border-white/20 text-white hover:bg-white/10 hover:border-white/40 bg-transparent gap-2" asChild>
                                <Link href="tel:+918237156777">
                                    <Zap className="w-5 h-5" />
                                    Call Clinic
                                </Link>
                            </Button>
                        </motion.div>
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    )
}

// --- Helper Component for Headers ---
function SectionHeader({
    label,
    title,
    subtitle,
    center = false,
}: {
    label: string,
    title: React.ReactNode,
    subtitle?: string,
    center?: boolean,
}) {
    return (
        <div className={`mb-12 ${center ? "text-center mx-auto max-w-3xl" : "max-w-2xl"}`}>
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase mb-6 bg-teal-50 text-dental-teal border border-teal-100 ${center ? "mx-auto" : ""}`}
            >
                <Sparkles className="w-3 h-3" />
                {label}
            </motion.div>
            <motion.h2
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="font-display text-4xl md:text-5xl font-medium leading-[1.1] mb-6 text-dental-charcoal"
            >
                {title}
            </motion.h2>
            {subtitle && (
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-lg leading-relaxed text-slate-600"
                >
                    {subtitle}
                </motion.p>
            )}
        </div>
    )
}
