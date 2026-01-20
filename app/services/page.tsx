"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import Footer from "@/components/layout/Footer"

import { FocusRail, FocusRailItem } from "@/components/focus-rail"
import { ResultGallery } from "@/components/result-gallery"
import { motion, AnimatePresence } from "framer-motion"
import {
    ShieldCheck,
    Activity,
    Zap,
    Crown,
    Sparkles,
    Smile,
    Layers,
    Shield,
    Sun,
    Puzzle,
    Phone,
    Baby,
    ArrowRight,
    Check,
    Calendar,
    Stethoscope,
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
        imageSrc: "/assests/Patient.png",
        meta: "Patient Care",
    },
    {
        id: 5,
        title: "Advanced Technology",
        description: "Digital diagnostics and modern treatment methods",
        imageSrc: "/assests/2025-08-13.webp",
        meta: "Technology",
    },
    {
        id: 6,
        title: "Patient Smiles",
        description: "Real results from our happy patients",
        imageSrc: "/assests/client3.png",
        meta: "Success Stories",
    },
    {
        id: 7,
        title: "Confident Grin",
        description: "Restoring confidence one smile at a time",
        imageSrc: "/assests/client4.png",
        meta: "Success Stories",
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
            staggerChildren: 0.08,
            delayChildren: 0.1,
        },
    },
}

// Service card with gradient accent
interface ServiceCardProps {
    title: string
    description: string
    features?: string[]
    icon?: React.ReactNode
    gradient: string
}

function ServiceCard({ title, description, features, icon, gradient }: ServiceCardProps) {
    return (
        <motion.div
            variants={fadeInUp}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className="group relative bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-100 hover:shadow-xl hover:border-transparent transition-all duration-500 flex flex-col h-full overflow-hidden"
        >
            {/* Hover gradient glow */}
            <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl`} />

            {/* Subtle top accent line */}
            <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${gradient} rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity`} />

            <div className="relative z-10 flex flex-col h-full">
                <div className={`w-14 h-14 bg-gradient-to-br ${gradient} text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {icon}
                </div>

                <h3 className="font-display text-xl md:text-2xl font-semibold text-slate-800 mb-3 group-hover:text-teal-700 transition-colors">{title}</h3>
                <p className="text-slate-600 leading-relaxed mb-6 flex-grow">{description}</p>

                {features && features.length > 0 && (
                    <ul className="space-y-2 mb-6">
                        {features.map((feature, index) => (
                            <li key={index} className="flex items-center text-slate-700 text-sm">
                                <span className="bg-teal-100 text-teal-600 rounded-full p-1 mr-3 flex-shrink-0">
                                    <Check className="w-3 h-3" strokeWidth={3} />
                                </span>
                                {feature}
                            </li>
                        ))}
                    </ul>
                )}

                <div className="mt-auto pt-5 border-t border-slate-100 flex items-center text-teal-600 font-medium text-sm cursor-pointer group/btn">
                    <Link href="/#contact" className="flex items-center">
                        Book Consultation
                        <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </motion.div>
    )
}

export default function ServicesPage() {
    const services = [
        {
            title: "Tooth cleaning & Whitening",
            description: "Complete professional cleaning (scaling) to remove plaque and tartar, combined with safe whitening treatments for a brighter, healthier smile.",
            icon: <Sparkles className="w-7 h-7" />,
            features: ["Scale & Polish", "Stain Removal", "Safe Whitening"],
            gradient: "from-teal-500 to-emerald-500"
        },
        {
            title: "Extraction and Replacement",
            description: "Safe tooth extractions when necessary, followed by effective replacement options to restore function and aesthetics.",
            icon: <Shield className="w-7 h-7" />,
            features: ["Painless Extraction", "Socket Preservation", "Tooth Replacement"],
            gradient: "from-slate-600 to-slate-700"
        },
        {
            title: "Fillings , Crowns & Bridges",
            description: "Restorative solutions for damaged teeth. We use tooth-colored fillings, high-strength zirconia crowns, and bridges to restore functionality.",
            icon: <Crown className="w-7 h-7" />,
            features: ["Composite Fillings", "Zirconia Crowns", "Ceramic Bridges"],
            gradient: "from-amber-500 to-orange-500"
        },
        {
            title: "Root Canal Treatment",
            description: "Advanced endodontic therapy to save infected teeth. We use modern rotary systems for precise, single-visit root canal treatments.",
            icon: <Activity className="w-7 h-7" />,
            features: ["Pain Relief", "Single Sitting", "Rotary Endo"],
            gradient: "from-rose-500 to-pink-500"
        },
        {
            title: "Full / Partial Denture",
            description: "Custom-crafted dentures to replace some or all missing teeth. We offer flexible and rigid options for maximum comfort and stability.",
            icon: <Puzzle className="w-7 h-7" />,
            features: ["Custom Fit", "Natural Look", "Comfortable Bite"],
            gradient: "from-fuchsia-500 to-pink-500"
        },
        {
            title: "Dental Implant",
            description: "The gold standard for tooth replacement. Titanium implants provide a permanent, natural-feeling foundation for replacement teeth.",
            icon: <Zap className="w-7 h-7" />,
            features: ["Titanium Implants", "Permanent Solution", "Bone Preservation"],
            gradient: "from-violet-500 to-purple-500"
        },
        {
            title: "Braces Treatment",
            description: "Orthodontic corrections for aligning teeth. We offer metal braces, ceramic braces, and clear aligners for all age groups.",
            icon: <Smile className="w-7 h-7" />,
            features: ["Teeth Alignment", "Bite Correction", "Invisible Options"],
            gradient: "from-indigo-500 to-violet-500"
        },
        {
            title: "Pediatric (Children) Dental Treatments",
            description: "Specialized care for children in a friendly environment. We focus on prevention, fluoride treatments, and habit breaking.",
            icon: <Baby className="w-7 h-7" />,
            features: ["Cavity Prevention", "Fluoride", "Gentle Care"],
            gradient: "from-amber-400 to-yellow-500"
        },
    ]

    const [currentImageIndex, setCurrentImageIndex] = useState(0)
    const carouselImages = [
        {
            src: "/assests/invisible braces the right choice_page-0001.jpg",
            aspect: "aspect-[3/4] max-w-sm" // Portrait poster
        },
        {
            src: "/assests/invisible-braces.jpeg",
            aspect: "aspect-[4/3] max-w-2xl" // Landscape photo
        }
    ]

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length)
        }, 4000)
        return () => clearInterval(timer)
    }, [])

    return (
        <div className="bg-[#faf8f5] min-h-screen flex flex-col">
            <Navbar />

            <main className="flex-1">
                {/* Hero Header */}
                <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-28 overflow-hidden gradient-hero">
                    {/* Decorative elements */}
                    <div className="absolute top-10 right-10 w-72 h-72 bg-teal-200/30 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-100/40 rounded-full blur-3xl" />

                    <div className="container relative z-10 px-4 sm:px-6 lg:px-8 text-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center gap-2 rounded-full bg-teal-50 px-4 py-2 border border-teal-100 mb-6"
                        >
                            <Stethoscope className="h-4 w-4 text-teal-600" />
                            <span className="text-sm font-medium text-teal-700">Our Expertise</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1, duration: 0.7 }}
                            className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-slate-800 mb-6 tracking-tight"
                        >
                            Premium{" "}
                            <span className="text-gradient-primary">Dental Services</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.7 }}
                            className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed mb-12"
                        >
                            We provide a full spectrum of dental treatments with precision, safety, and minimally invasive techniques for optimal results.
                        </motion.p>

                        {/* Integrated Carousel */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            className="max-w-5xl mx-auto"
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

                {/* Feature Spotlight - Invisible Braces */}
                <section className="py-20 bg-[#faf8f5]">
                    <div className="container px-4 md:px-6 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="max-w-4xl mx-auto"
                        >
                            <div className="inline-flex items-center gap-2 rounded-full bg-violet-50 px-4 py-2 border border-violet-100 mb-6">
                                <Sparkles className="h-4 w-4 text-violet-600" />
                                <span className="text-sm font-medium text-violet-700">Recommended Treatment</span>
                            </div>
                            <h2 className="font-display text-3xl md:text-4xl font-semibold text-slate-800 mb-8">
                                Why Choose Invisible Braces?
                            </h2>

                            <motion.div
                                layout
                                className={`relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white bg-white mx-auto transition-all duration-500 ease-in-out ${carouselImages[currentImageIndex].aspect}`}
                            >
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={currentImageIndex}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.5 }}
                                        className="absolute inset-0 bg-white"
                                    >
                                        <Image
                                            src={carouselImages[currentImageIndex].src}
                                            alt="Invisible Braces - The Right Choice"
                                            fill
                                            className="object-contain"
                                            priority
                                        />
                                    </motion.div>
                                </AnimatePresence>

                                {/* Carousel Indicators */}
                                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
                                    {carouselImages.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setCurrentImageIndex(index)}
                                            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 shadow-sm ${currentImageIndex === index
                                                ? "bg-teal-600 w-6"
                                                : "bg-white/70 hover:bg-white"
                                                }`}
                                            aria-label={`Go to slide ${index + 1}`}
                                        />
                                    ))}
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </section>

                {/* Services Grid */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12 md:mb-16"
                    >
                        <div className="inline-flex items-center gap-2 rounded-full bg-teal-50 px-4 py-2 border border-teal-100 mb-4">
                            <Sparkles className="h-4 w-4 text-teal-600" />
                            <span className="text-sm font-medium text-teal-700">Our Treatments</span>
                        </div>
                        <h2 className="font-display text-3xl md:text-4xl font-semibold text-slate-800">
                            Comprehensive Care Solutions
                        </h2>
                    </motion.div>

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
                    >
                        {services.map((service, idx) => (
                            <ServiceCard key={idx} {...service} />
                        ))}
                    </motion.div>
                </section>

                {/* Real Results Gallery */}
                <ResultGallery />



                {/* Modern Technology Section */}
                <section className="py-20 md:py-28 bg-white overflow-hidden">
                    <div className="container px-4 md:px-6">
                        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={{
                                    hidden: { opacity: 0, x: -50 },
                                    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
                                }}
                                className="relative order-2 lg:order-1"
                            >
                                <div className="absolute -inset-4 bg-gradient-to-tr from-teal-100 to-blue-100 rounded-[2.5rem] -z-10 blur-2xl opacity-70" />
                                <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white">
                                    <div className="aspect-[4/3] relative">
                                        <Image // Using next/image requires import from "next/image", ensuring it is used.
                                            src="/assests/2025-08-13.webp"
                                            alt="Advanced Dental Technology at Dentistree"
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 1024px) 100vw, 50vw"
                                        />
                                    </div>
                                    <div className="absolute bottom-6 left-6 right-6">
                                        <div className="bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-white/50 flex items-center gap-4">
                                            <div className="h-12 w-12 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0">
                                                <Zap className="h-6 w-6 text-teal-600" />
                                            </div>
                                            <div>
                                                <p className="font-semibold text-slate-800">Latest Equipment</p>
                                                <p className="text-sm text-slate-600">For precise diagnosis</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={staggerContainer}
                                className="order-1 lg:order-2"
                            >
                                <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 border border-blue-100 mb-6">
                                    <Activity className="h-4 w-4 text-blue-600" />
                                    <span className="text-sm font-medium text-blue-700">Advanced Technology</span>
                                </motion.div>
                                <motion.h2 variants={fadeInUp} className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-slate-800 mb-6">
                                    Precision Care with Modern Tech
                                </motion.h2>
                                <motion.p variants={fadeInUp} className="text-lg text-slate-600 mb-8 leading-relaxed">
                                    We believe that the best care is supported by the best technology. Our clinic is equipped with cutting-edge diagnostic and treatment tools to ensure every procedure is as safe, precise, and comfortable as possible.
                                </motion.p>

                                <motion.ul variants={fadeInUp} className="space-y-4">
                                    {[
                                        "Digital X-Rays for instant, low-radiation imaging",
                                        "Rotary Endodontics for faster, better root canals",
                                        "Intraoral Cameras for transparent diagnosis",
                                        "Advanced Sterilization Autoclaves"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <div className="mt-1 h-5 w-5 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0">
                                                <Check className="h-3 w-3 text-teal-600" strokeWidth={3} />
                                            </div>
                                            <span className="text-slate-700">{item}</span>
                                        </li>
                                    ))}
                                </motion.ul>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-16 md:py-24 bg-gradient-to-br from-teal-600 via-teal-700 to-emerald-700 relative overflow-hidden">
                    {/* Decorative elements */}
                    <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2" />
                    <div className="absolute bottom-0 right-0 w-72 h-72 bg-amber-300/10 rounded-full blur-3xl translate-y-1/2" />

                    <div className="container px-4 md:px-6 relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center max-w-3xl mx-auto"
                        >
                            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-4 py-2 border border-white/20 mb-6">
                                <Calendar className="h-4 w-4 text-amber-300" />
                                <span className="text-sm font-medium text-white/90">Book Your Visit</span>
                            </div>

                            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-6">
                                Ready to Transform Your Smile?
                            </h2>
                            <p className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed">
                                Schedule a consultation with Dr. Poonam Bambarkar today and take the first step towards a healthier, brighter smile.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button
                                    size="lg"
                                    className="rounded-full px-8 py-6 text-base font-medium bg-white text-teal-700 hover:bg-white/90 shadow-xl"
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
                        </motion.div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}
