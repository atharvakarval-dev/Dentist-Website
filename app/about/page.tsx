"use client"

import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import Footer from "@/components/layout/Footer"
import { StaggerTestimonials } from "@/components/stagger-testimonials"
import { motion, useScroll, useTransform } from "framer-motion"
import {
    MapPin,
    ShieldCheck,
    Award,
    Heart,
    Users,
    ArrowRight,
    Star,
    Calendar,
    Phone,
    Clock,
    ChevronDown,
    Quote,
    Sparkles,
    CheckCircle2,
    Video
} from "lucide-react"
import { Button } from "@/components/ui/button"

// --- Animation Variants ---

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

export default function AboutPage() {
    const { scrollYProgress } = useScroll()
    const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1])

    return (
        <div className="bg-white min-h-screen flex flex-col font-sans selection:bg-teal-100 selection:text-teal-900">
            <motion.div
                style={{ scaleX }}
                className="fixed top-0 left-0 right-0 h-1 bg-dental-teal origin-left z-50"
            />
            <Navbar />

            <main className="flex-1">

                {/* 
                  === ACT 1: THE CALL (HERO) ===
                  Purpose: Emotional Connection & Promise
                */}
                <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-b from-dental-cream via-white to-white overflow-hidden pt-20">
                    {/* Background Pattern - Subtle */}
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
                                <MapPin className="w-3 h-3" />
                                Since 2009 • Nanded City, Pune
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2, duration: 0.8 }}
                                className="font-display text-5xl md:text-7xl lg:text-8xl font-medium text-dental-charcoal mb-8 leading-[1.1]"
                            >
                                Where Dental Care <br />
                                Meets Human <span className="text-dental-teal italic relative inline-block">
                                    Connection
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
                                We believe every patient deserves more than a procedure—they deserve a partner.
                                For over 15 years, we've combined medical precision with old-fashioned empathy.
                            </motion.p>

                            {/* Trust Stats */}
                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6, duration: 0.8 }}
                                className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 max-w-4xl mx-auto border-t border-slate-100 pt-12"
                            >
                                {[
                                    { label: "Years Serving", value: "15+" },
                                    { label: "Happy Patients", value: "12K+" },
                                    { label: "Satisfaction", value: "99.8%" },
                                    { label: "Google Rating", value: "5.0" },
                                ].map((stat, i) => (
                                    <div key={i} className="text-center">
                                        <div className="text-4xl md:text-5xl font-bold text-slate-800 mb-2 font-display">{stat.value}</div>
                                        <div className="text-xs md:text-sm font-medium text-slate-500 uppercase tracking-wider">{stat.label}</div>
                                    </div>
                                ))}
                            </motion.div>
                        </div>
                    </div>

                    {/* Scroll Indicator */}
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400 opacity-60"
                    >
                        <span className="text-[10px] uppercase tracking-widest">Our Story</span>
                        <ChevronDown className="w-5 h-5" />
                    </motion.div>
                </section>


                {/* 
                  === ACT 2 (Part A): ORIGIN STORY (THE WHY) ===
                  Purpose: Context & Authenticity
                */}
                <section className="py-24 md:py-32 bg-white relative">
                    <div className="container px-4 md:px-6 max-w-4xl mx-auto">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={fadeInUp}
                            className="space-y-12"
                        >
                            <div className="text-center mb-16">
                                <span className="text-dental-teal font-bold text-sm uppercase tracking-widest mb-4 block">How It Started</span>
                                <h2 className="font-display text-4xl md:text-5xl text-dental-charcoal">
                                    A Promise Made in <span className="italic text-dental-slate">2009</span>
                                </h2>
                            </div>

                            <div className="prose prose-lg md:prose-xl text-slate-600 mx-auto leading-loose font-serif-substitute">
                                <p>
                                    <span className="first-letter:text-5xl first-letter:font-display first-letter:text-dental-teal first-letter:float-left first-letter:mr-3 first-letter:mt-1">W</span>
                                    hen Dentistree opened its doors in Pune, it started with a single dental chair and a simple vision: to create a practice where patients felt like family, not just numbers in a file.
                                </p>
                                <p>
                                    Dr. Poonam Bambarkar saw a gap in conventional dentistry. Technology was advancing, but the human touch was fading. Patients were anxious, confused by complex jargon, and often felt rushed. She knew there had to be a better way.
                                </p>
                                <p>
                                    What began in Nanded City has grown into one of Pune's most trusted dental homes—not through aggressive marketing, but through the quiet power of word-of-mouth from patients who finally found a place where they were <em>heard</em>.
                                </p>
                            </div>

                            <blockquote className="border-l-4 border-amber-300 pl-6 md:pl-10 py-4 my-12 bg-amber-50/50 rounded-r-2xl">
                                <p className="text-xl md:text-2xl font-display text-dental-charcoal italic leading-relaxed mb-4">
                                    "I didn't open Dentistree to be the biggest practice in Pune.
                                    I opened it to be the most trusted. Every smile we save is a promise kept."
                                </p>
                                <footer className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden relative">
                                        <Image src="/assests/doctor.png" fill alt="Dr. Poonam" className="object-cover" />
                                    </div>
                                    <div className="text-sm font-semibold text-slate-800">
                                        Dr. Poonam Bambarkar <span className="text-slate-400 font-normal ml-1"></span>
                                    </div>
                                </footer>
                            </blockquote>
                        </motion.div>
                    </div>
                </section>


                {/* 
                  === ACT 2 (Part B): THE DOCTOR (THE WHO) ===
                  Purpose: Humanize & Verify
                */}
                <section className="py-24 bg-dental-cream border-t border-stone-100">
                    <div className="container px-4 md:px-6">
                        <div className="grid lg:grid-cols-[45%_55%] gap-16 items-center max-w-7xl mx-auto">
                            {/* Image Side */}
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="relative order-2 lg:order-1"
                            >
                                <div className="aspect-[4/5] relative rounded-[2.5rem] overflow-hidden shadow-2xl shadow-teal-900/10">
                                    <Image
                                        src="/assests/doctor.png"
                                        alt="Dr. Poonam Bambarkar"
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, 40vw"
                                    />
                                </div>
                                {/* Solid Credential Card - Legible */}
                                <div className="absolute -bottom-8 -right-4 md:-right-8 bg-white rounded-2xl shadow-xl p-6 md:p-8 max-w-xs border-l-4 border-dental-teal">
                                    <h4 className="font-display text-3xl font-bold text-dental-charcoal mb-1">15+</h4>
                                    <p className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">Years Experience</p>
                                    <ul className="space-y-2 text-sm text-slate-600 font-medium">
                                        <li className="flex items-center gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-dental-teal" /> BDS, Pune
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-dental-teal" /> Cosmetic Specialist
                                        </li>
                                    </ul>
                                </div>
                            </motion.div>

                            {/* Text Side */}
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="order-1 lg:order-2 space-y-8"
                            >
                                <div>
                                    <p className="text-dental-teal font-semibold mb-2 uppercase tracking-wide">Meet Your Doctor</p>
                                    <h2 className="font-display text-4xl md:text-6xl text-dental-charcoal mb-6">
                                        Dr. Poonam Bambarkar
                                    </h2>
                                    <p className="text-xl text-slate-500 font-light">
                                        Dental Surgeon & Cosmetic Specialist
                                    </p>
                                </div>

                                <div className="prose prose-lg text-slate-600 leading-relaxed">
                                    <p>
                                        Dr. Poonam believes that great dentistry sits at the intersection of <strong>art and science</strong>.
                                        But more importantly, she understands the person behind the smile.
                                    </p>
                                    <p>
                                        Since earning her degree, she has treated over 12,000 patients—many of whom hadn't visited a dentist in a decade due to fear. Her approach is simple: <span className="text-dental-teal font-medium">Listen first. Explain everything. Never judge.</span>
                                    </p>
                                    <p>
                                        When she's not at the clinic, you'll find her guiding upcoming dentists or spending time with her family.
                                        She believes that a calm, rested doctor performs the best work.
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-4 pt-4">
                                    {[
                                        "Root Canal Specialist",
                                        "Cosmetic Smile Design",
                                        "Pediatric Friendly",
                                        "Anxiety Management"
                                    ].map((spec, i) => (
                                        <span key={i} className="px-4 py-2 bg-white border border-stone-200 rounded-lg text-sm font-medium text-slate-700 shadow-sm">
                                            {spec}
                                        </span>
                                    ))}
                                </div>

                                <div className="pt-6">
                                    <Button className="h-14 rounded-full px-8 bg-dental-charcoal text-white hover:bg-slate-800 shadow-lg group" asChild>
                                        <Link href="/contact" className="gap-2">
                                            Book Consultation with Dr. Poonam
                                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </Link>
                                    </Button>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>


                {/* 
                  === ACT 2 (Part C): PHILOSOPHY (THE HOW) ===
                  Purpose: Differentiation via Values
                */}
                <section className="py-24 md:py-32 bg-white">
                    <div className="container px-4 md:px-6">
                        <SectionHeader
                            center
                            label="Our Philosophy"
                            title={<>How We Are <span className="italic text-dental-teal">Different</span></>}
                            subtitle="We made deliberate choices about how we run our practice—putting your trust above profit margins."
                        />

                        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-16">
                            {[
                                {
                                    icon: Heart,
                                    title: "We Never Upsell",
                                    desc: "If a tooth can be saved with a filling, we won't push a crown. Our recommendations are always about your health, never our bottom line.",
                                    example: "Honest Diagnostics"
                                },
                                {
                                    icon: Clock,
                                    title: "We Respect Time",
                                    desc: "We book generous slots so you never feel rushed. Your time is as valuable as ours, and we aim to start every appointment on the dot.",
                                    example: "0 Minute Wait Policy"
                                },
                                {
                                    icon: ShieldCheck,
                                    title: "We Invest in Tech",
                                    desc: "We don't chase gadgets, but we invest heavily in tools that improve comfort—like painless injections and digital scanners.",
                                    example: "Advanced Comfort"
                                }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="group p-8 rounded-3xl bg-stone-50 border border-stone-100 hover:bg-white hover:shadow-xl hover:border-dental-teal/20 transition-all duration-500"
                                >
                                    <div className="w-14 h-14 rounded-2xl bg-white border border-stone-100 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform text-dental-teal">
                                        <item.icon className="w-7 h-7" />
                                    </div>
                                    <h3 className="font-display text-xl font-bold text-dental-charcoal mb-4 group-hover:text-dental-teal transition-colors">{item.title}</h3>
                                    <p className="text-slate-600 leading-relaxed mb-6">{item.desc}</p>
                                    <div className="pt-4 border-t border-stone-200">
                                        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">In Practice:</span>
                                        <span className="ml-2 text-sm font-medium text-dental-charcoal">{item.example}</span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>


                {/* 
                  === ACT 3: COMMUNITY (THE IMPACT) ===
                  Purpose: Values in Action
                */}
                <section className="py-24 bg-gradient-to-b from-teal-50/50 to-white overflow-hidden">
                    <div className="container px-4 md:px-6">
                        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                            {/* Content Side */}
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={staggerContainer}
                            >
                                <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100/50 text-teal-800 text-xs font-bold uppercase tracking-wider mb-6">
                                    <Users className="w-3 h-3" />
                                    Beyond the Clinic
                                </motion.div>
                                <motion.h2 variants={fadeInUp} className="font-display text-4xl md:text-5xl lg:text-6xl text-dental-charcoal mb-6">
                                    Serving Pune, <br />
                                    <span className="text-dental-teal italic">One Smile at a Time</span>
                                </motion.h2>
                                <motion.p variants={fadeInUp} className="text-lg text-slate-600 leading-relaxed mb-8">
                                    We believe healthy smiles shouldn't be a privilege. That's why we partner with local schools and NGOs to provide free dental checkups to underserved communities.
                                </motion.p>

                                {/* Impact Metrics */}
                                <motion.div variants={fadeInUp} className="grid grid-cols-2 gap-6 mb-10">
                                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-teal-50">
                                        <div className="text-3xl font-bold text-dental-teal mb-1">2,500+</div>
                                        <div className="text-sm text-slate-500 font-medium">Free Checkups Given</div>
                                    </div>
                                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-amber-50">
                                        <div className="text-3xl font-bold text-amber-500 mb-1">15+</div>
                                        <div className="text-sm text-slate-500 font-medium">Schools Partnered</div>
                                    </div>
                                </motion.div>

                                <motion.ul variants={staggerContainer} className="space-y-4">
                                    {[
                                        "Smile for All Initiative - Monthly Camps",
                                        "School Oral Health Program - Education",
                                        "Zero Cavity Movement - Prevention"
                                    ].map((item, i) => (
                                        <motion.li key={i} variants={fadeInUp} className="flex items-center gap-3 text-slate-700 font-medium">
                                            <div className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center shrink-0">
                                                <Heart className="w-3 h-3 text-teal-600" fill="currentColor" />
                                            </div>
                                            {item}
                                        </motion.li>
                                    ))}
                                </motion.ul>
                            </motion.div>

                            {/* Image Grid Side - Non-Overlapping, Clean */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="grid grid-cols-2 gap-4"
                            >
                                <div className="space-y-4 translate-y-8">
                                    <div className="aspect-[3/4] relative rounded-2xl overflow-hidden shadow-lg">
                                        <Image
                                            src="/assests/children-1.png"
                                            alt="Child at dental camp"
                                            fill
                                            className="object-cover hover:scale-105 transition-transform duration-700"
                                        />
                                    </div>
                                    <div className="bg-dental-teal p-6 rounded-2xl text-white flex flex-col justify-center items-center text-center">
                                        <Sparkles className="w-8 h-8 mb-2 text-teal-200" />
                                        <p className="font-display font-bold text-lg">Giving Back</p>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div className="bg-amber-100 p-6 rounded-2xl text-amber-900 flex flex-col justify-center items-center text-center">
                                        <Heart className="w-8 h-8 mb-2 text-amber-600" />
                                        <p className="font-display font-bold text-lg">Care for All</p>
                                    </div>
                                    <div className="aspect-[3/4] relative rounded-2xl overflow-hidden shadow-lg">
                                        <Image
                                            src="/assests/WhatsApp Image 2026-01-20 at 12.43.45 AM (1).jpeg"
                                            alt="Community outreach"
                                            fill
                                            className="object-cover hover:scale-105 transition-transform duration-700"
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>


                {/* 
                  === SOCIAL PROOF ===
                */}
                <section className="py-24 bg-white">
                    <div className="container px-4 text-center mb-16">
                        <SectionHeader
                            center
                            label="Testimonials"
                            title="Stories of Trust"
                            subtitle="The real measure of our success is the confidence of our patients."
                        />
                    </div>
                    <div className="max-w-[1400px] mx-auto overflow-hidden px-4">
                        <StaggerTestimonials />
                    </div>
                </section>


                {/* 
                  === RESOLUTION: JOIN US (CTA) ===
                  Purpose: Relational Invitation
                */}
                <section className="py-32 bg-[#0F172A] relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-dental-teal/20 to-transparent opacity-30" />
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal-500/10 rounded-full blur-[100px]" />

                    <div className="container px-4 text-center relative z-10">
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="font-display text-5xl md:text-6xl text-white mb-8 leading-tight"
                        >
                            Ready to Experience <br />
                            <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-teal-400">Dentistry Done Differently?</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto"
                        >
                            Whether it's your first visit or you're switching from another practice, we'd love to welcome you to the Dentistree family.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="flex flex-col sm:flex-row gap-6 justify-center"
                        >
                            <Button size="lg" className="h-16 rounded-full px-10 text-lg bg-dental-teal text-white hover:bg-teal-600 shadow-xl shadow-teal-900/20" asChild>
                                <Link href="/contact">Book Your First Visit</Link>
                            </Button>
                            <Button variant="outline" size="lg" className="h-16 rounded-full px-10 text-lg border-white/20 text-white hover:bg-white/10 hover:border-white/40 bg-transparent gap-2" asChild>
                                <Link href="/services">
                                    <Video className="w-5 h-5" />
                                    Take a Virtual Tour
                                </Link>
                            </Button>
                        </motion.div>

                        <div className="mt-10 text-sm text-slate-400">
                            No pressure. Just a conversation about your health.
                        </div>
                    </div>
                </section>

            </main>

            <Footer />
        </div>
    )
}

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
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase mb-6 bg-teal-50 text-dental-teal border border-teal-100"
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
