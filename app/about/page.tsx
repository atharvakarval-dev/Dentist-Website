"use client"

import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { StaggerTestimonials } from "@/components/stagger-testimonials"
import { FocusRail, FocusRailItem } from "@/components/focus-rail"
import { motion } from "framer-motion"
import Clinic2 from "../../assests/Clinic2.png"
import {
    MapPin,
    ShieldCheck,
    Stethoscope,
    Award,
    Heart,
    Users,
    CheckCircle2,
    ArrowRight,
    Star,
    Calendar,
    Phone,
    Clock,
    Sparkles,
    Images,
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
            staggerChildren: 0.1,
            delayChildren: 0.1,
        },
    },
}

const slideInLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
    },
}

const slideInRight = {
    hidden: { opacity: 0, x: 60 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
    },
}

export default function AboutPage() {
    return (
        <div className="bg-[#faf8f5] min-h-screen flex flex-col">
            <Navbar />

            <main className="flex-1">
                {/* Hero Section */}
                <section className="relative py-20 lg:py-28 overflow-hidden gradient-hero">
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
                            <Heart className="h-4 w-4 text-teal-600" />
                            <span className="text-sm font-medium text-teal-700">Our Story</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1, duration: 0.7 }}
                            className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-slate-800 mb-6 tracking-tight"
                        >
                            About{" "}
                            <span className="text-gradient-primary">Dentistree</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.7 }}
                            className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed"
                        >
                            Comprehensive dental care in Nanded City, Pune. Combining 15+ years of experience with modern technology and compassionate care.
                        </motion.p>
                    </div>
                </section>

                {/* Professional Profile Section */}
                <section className="py-20 md:py-28">
                    <div className="container px-4 md:px-6">
                        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={slideInLeft}
                                className="relative"
                            >
                                {/* Decorative frame */}
                                <div className="absolute -top-4 -left-4 w-full h-full border-2 border-teal-200 rounded-[2rem]" />

                                <div className="relative h-[450px] md:h-[550px] rounded-[2rem] overflow-hidden shadow-2xl">
                                    <Image
                                        src={Clinic2}
                                        alt="Dr. Poonam Bambarkar"
                                        fill
                                        className="object-cover"
                                    />
                                    {/* Overlay with info */}
                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/90 via-slate-900/60 to-transparent p-6 md:p-8">
                                        <h3 className="font-display text-2xl md:text-3xl font-semibold text-white mb-1">
                                            Dr. Poonam Bambarkar
                                        </h3>
                                        <p className="text-teal-300 font-medium">Clinical Director & Chief Dentist (BDS)</p>
                                    </div>
                                </div>

                                {/* Experience Badge */}
                                <motion.div
                                    initial={{ scale: 0, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.5, type: "spring" }}
                                    className="absolute -bottom-6 -right-6 h-32 w-32 rounded-3xl gradient-primary flex items-center justify-center text-white shadow-2xl border-4 border-white hidden md:flex"
                                >
                                    <div className="text-center">
                                        <span className="block text-3xl font-display font-bold">15+</span>
                                        <span className="text-sm opacity-90">Years Exp.</span>
                                    </div>
                                </motion.div>
                            </motion.div>

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
                                        <span className="text-sm font-medium text-teal-700">Professional Profile</span>
                                    </div>
                                    <h2 className="font-display text-3xl md:text-4xl font-semibold text-slate-800">
                                        Excellence in Dentistry
                                    </h2>
                                </motion.div>

                                <motion.div variants={fadeInUp} className="space-y-4 text-slate-600 leading-relaxed">
                                    <p className="text-lg">
                                        Dentistree Dental Clinic is a comprehensive dental care center located in{" "}
                                        <span className="font-semibold text-slate-700">Nanded City, Sinhagad Road, Pune</span>,
                                        equipped to handle wide-ranging dental needs under one roof.
                                    </p>
                                    <p>
                                        Under the guidance of{" "}
                                        <span className="font-semibold text-teal-700">Dr. Poonam Bambarkar (BDS)</span>,
                                        who brings over 15 years of clinical experience, the clinic emphasizes accurate diagnosis,
                                        evidence-based treatment protocols, and patient safety.
                                    </p>
                                </motion.div>

                                <motion.div variants={fadeInUp} className="grid sm:grid-cols-2 gap-4 pt-4">
                                    {[
                                        {
                                            icon: <ShieldCheck className="h-6 w-6" />,
                                            title: "Safety First",
                                            desc: "Strict sterilization protocols per modern guidelines.",
                                            gradient: "from-teal-500 to-emerald-500"
                                        },
                                        {
                                            icon: <Stethoscope className="h-6 w-6" />,
                                            title: "Expert Diagnosis",
                                            desc: "Accurate, evidence-based treatment plans.",
                                            gradient: "from-violet-500 to-purple-500"
                                        },
                                        {
                                            icon: <Heart className="h-6 w-6" />,
                                            title: "Compassionate Care",
                                            desc: "Gentle, patient-focused approach for all ages.",
                                            gradient: "from-rose-500 to-pink-500"
                                        },
                                        {
                                            icon: <Award className="h-6 w-6" />,
                                            title: "Proven Results",
                                            desc: "15+ years of trusted clinical excellence.",
                                            gradient: "from-amber-500 to-orange-500"
                                        },
                                    ].map((item, i) => (
                                        <div key={i} className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow flex gap-4">
                                            <div className={`bg-gradient-to-br ${item.gradient} text-white h-12 w-12 rounded-xl flex items-center justify-center shrink-0 shadow-lg`}>
                                                {item.icon}
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-slate-800 mb-1">{item.title}</h4>
                                                <p className="text-sm text-slate-600">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </motion.div>

                                <motion.div variants={fadeInUp} className="flex items-center gap-2 text-slate-500 text-sm pt-4">
                                    <MapPin className="h-4 w-4 text-teal-600" />
                                    <span>Nanded City, Sinhagad Road, Pune</span>
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Why Choose Us Section */}
                <section className="py-16 md:py-24 bg-white">
                    <div className="container px-4 md:px-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
                        >
                            <div className="inline-flex items-center gap-2 rounded-full bg-teal-50 px-4 py-2 border border-teal-100 mb-4">
                                <Sparkles className="h-4 w-4 text-teal-600" />
                                <span className="text-sm font-medium text-teal-700">Why Choose Us</span>
                            </div>
                            <h2 className="font-display text-3xl md:text-4xl font-semibold text-slate-800 mb-4">
                                What Sets Dentistree Apart
                            </h2>
                            <p className="text-lg text-slate-600">
                                We combine expertise, technology, and compassion to deliver exceptional dental care.
                            </p>
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={staggerContainer}
                            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
                        >
                            {[
                                {
                                    icon: <Award className="h-7 w-7" />,
                                    title: "15+ Years Experience",
                                    desc: "Trusted expertise you can rely on",
                                    gradient: "from-teal-500 to-emerald-500"
                                },
                                {
                                    icon: <Users className="h-7 w-7" />,
                                    title: "1000+ Happy Patients",
                                    desc: "Families who trust us with their smiles",
                                    gradient: "from-sky-500 to-blue-500"
                                },
                                {
                                    icon: <ShieldCheck className="h-7 w-7" />,
                                    title: "100% Sterilized",
                                    desc: "World-class safety standards",
                                    gradient: "from-violet-500 to-purple-500"
                                },
                                {
                                    icon: <Heart className="h-7 w-7" />,
                                    title: "Family Friendly",
                                    desc: "Care for kids, adults & seniors",
                                    gradient: "from-rose-500 to-pink-500"
                                },
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    variants={fadeInUp}
                                    className="text-center p-6 rounded-2xl bg-[#faf8f5] border border-slate-100 hover:shadow-lg transition-shadow"
                                >
                                    <div className={`h-16 w-16 mx-auto bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center text-white mb-5 shadow-lg`}>
                                        {item.icon}
                                    </div>
                                    <h3 className="font-display text-xl font-semibold text-slate-800 mb-2">{item.title}</h3>
                                    <p className="text-slate-600">{item.desc}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* Clinic Gallery Section */}
                <section className="py-16 md:py-24 bg-[#faf8f5]">
                    <div className="container px-4 md:px-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-10"
                        >
                            <div className="inline-flex items-center gap-2 rounded-full bg-teal-50 px-4 py-2 border border-teal-100 mb-4">
                                <Images className="h-4 w-4 text-teal-600" />
                                <span className="text-sm font-medium text-teal-700">Our Clinic</span>
                            </div>
                            <h2 className="font-display text-3xl md:text-4xl font-semibold text-slate-800 mb-4">
                                Take a Tour of Dentistree
                            </h2>
                            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                                Explore our modern facility designed for your comfort and care.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
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

                {/* Testimonials Section */}
                <section className="py-16 md:py-24 bg-[#faf8f5]">
                    <div className="container px-4 md:px-6 text-center mb-12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="inline-flex items-center gap-2 rounded-full bg-amber-50 px-4 py-2 border border-amber-100 mb-4">
                                <Star className="h-4 w-4 text-amber-500 fill-amber-500" />
                                <span className="text-sm font-medium text-amber-700">Patient Stories</span>
                            </div>
                            <h2 className="font-display text-3xl md:text-4xl font-semibold text-slate-800 mb-6">
                                What Our Patients Say
                            </h2>
                            <div className="flex items-center justify-center gap-2 mb-4">
                                <span className="text-3xl font-display font-bold text-slate-800">5.0</span>
                                <div className="flex gap-1">
                                    {[1, 2, 3, 4, 5].map((i) => (
                                        <Star key={i} className="h-6 w-6 fill-amber-400 text-amber-400" />
                                    ))}
                                </div>
                                <span className="text-slate-500 ml-2">(33+ Google Reviews)</span>
                            </div>
                            <p className="text-slate-600 max-w-2xl mx-auto">
                                See what our patients have to say about their experience at Dentistree.
                            </p>
                        </motion.div>
                    </div>

                    <div className="max-w-[1400px] mx-auto overflow-hidden">
                        <StaggerTestimonials />
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
                                <span className="text-sm font-medium text-white/90">Book Your Visit</span>
                            </div>

                            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-6">
                                Ready to Experience{" "}
                                <span className="text-gradient-gold">Premium Care?</span>
                            </h2>
                            <p className="text-lg md:text-xl text-white/70 mb-10 leading-relaxed">
                                Schedule your consultation with Dr. Poonam Bambarkar and take the first step towards a healthier, brighter smile.
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
                                    <Link href="tel:+910000000000">
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
        </div>
    )
}
