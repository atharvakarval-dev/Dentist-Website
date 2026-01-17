"use client"

import React from "react"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import Footer from "@/components/layout/Footer"

import { MapPin, Phone, Mail, Clock, Calendar, Sparkles, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { AppointmentForm } from "@/components/appointment-form"
import { Button } from "@/components/ui/button"

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

export default function ContactPage() {
    return (
        <div className="flex flex-col min-h-screen bg-[#faf8f5]">
            <Navbar />

            <main className="flex-1">
                {/* Hero Section */}
                <section className="relative py-12 lg:py-16 overflow-hidden gradient-hero">
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
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-teal-500"></span>
                            </span>
                            <span className="text-sm font-medium text-teal-700">Accepting New Patients</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1, duration: 0.7 }}
                            className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-slate-800 mb-6 tracking-tight"
                        >
                            Start Your Journey to a{" "}
                            <br className="hidden md:block" />
                            <span className="text-gradient-primary">Perfect Smile</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.7 }}
                            className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed"
                        >
                            Book your appointment online easily. We are here to provide world-class dental care for your entire family.
                        </motion.p>
                    </div>
                </section>

                {/* Main Content Area */}
                <section className="py-10 md:py-16">
                    <div className="container px-4 md:px-6 mx-auto max-w-7xl">
                        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">

                            {/* Contact Info (First on larger screens, Second on mobile) */}
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={staggerContainer}
                                className="lg:col-span-5 space-y-6 lg:sticky lg:top-28 order-2 lg:order-1"
                            >
                                {/* Info Card */}
                                <motion.div
                                    variants={fadeInUp}
                                    className="bg-white rounded-3xl shadow-xl p-6 md:p-8 border border-slate-100"
                                >
                                    <h3 className="font-display text-2xl font-semibold text-slate-800 mb-6 pb-4 border-b border-slate-100">
                                        Contact Details
                                    </h3>

                                    <div className="space-y-6">
                                        {[
                                            {
                                                icon: <MapPin className="w-6 h-6" />,
                                                label: "Our Location",
                                                value: "Nanded City, Sinhagad Road\nPune, Maharashtra, 411041",
                                                gradient: "from-teal-500 to-emerald-500",
                                            },
                                            {
                                                icon: <Phone className="w-6 h-6" />,
                                                label: "Call Us",
                                                value: "+91 82371 56777",
                                                gradient: "from-sky-500 to-blue-500",
                                                href: "tel:+918237156777",
                                            },
                                            {
                                                icon: <Mail className="w-6 h-6" />,
                                                label: "Email Us",
                                                value: "dentistree.pune@gmail.com",
                                                gradient: "from-violet-500 to-purple-500",
                                                href: "mailto:dentistree.pune@gmail.com",
                                            },
                                            {
                                                icon: <Clock className="w-6 h-6" />,
                                                label: "Working Hours",
                                                value: "Mon - Sat: 10:00 AM - 8:00 PM",
                                                gradient: "from-amber-500 to-orange-500",
                                            },
                                        ].map((item, i) => (
                                            <div key={i} className="flex items-start gap-4">
                                                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} text-white flex items-center justify-center shrink-0 shadow-lg`}>
                                                    {item.icon}
                                                </div>
                                                <div>
                                                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-1">
                                                        {item.label}
                                                    </span>
                                                    {item.href ? (
                                                        <a
                                                            href={item.href}
                                                            className="text-base font-medium text-slate-800 hover:text-teal-600 transition-colors whitespace-pre-line"
                                                        >
                                                            {item.value}
                                                        </a>
                                                    ) : (
                                                        <p className="text-base font-medium text-slate-800 whitespace-pre-line">
                                                            {item.value}
                                                        </p>
                                                    )}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>

                                {/* Map */}
                                <motion.div
                                    variants={fadeInUp}
                                    className="h-[250px] md:h-[300px] w-full rounded-3xl overflow-hidden shadow-xl border border-slate-100"
                                >
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4490.983345762452!2d73.78167094077102!3d18.460213706848812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc29580a5c8612f%3A0xd16cce358b8cabfd!2sDentistree%20Clinic!5e0!3m2!1sen!2sin!4v1768597640729!5m2!1sen!2sin"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        className="grayscale-[30%] hover:grayscale-0 transition-all duration-700"
                                    ></iframe>
                                </motion.div>
                            </motion.div>

                            {/* Appointment Form (Priority on Mobile) */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="lg:col-span-7 order-1 lg:order-2"
                            >
                                <div className="bg-white rounded-3xl shadow-xl p-6 md:p-10 border border-slate-100 overflow-hidden relative">
                                    {/* Decorative element */}
                                    <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-teal-50 to-emerald-50 rounded-bl-full -mr-10 -mt-10 z-0"></div>

                                    <div className="relative z-10">
                                        <div className="text-center mb-8">
                                            <div className="inline-flex items-center gap-2 rounded-full bg-teal-50 px-4 py-2 border border-teal-100 mb-4">
                                                <Calendar className="h-4 w-4 text-teal-600" />
                                                <span className="text-sm font-medium text-teal-700">Book Appointment</span>
                                            </div>
                                            <h2 className="font-display text-2xl md:text-3xl font-semibold text-slate-800 mb-2">
                                                Schedule Your Visit
                                            </h2>
                                            <p className="text-slate-500">
                                                Fill in the form below and we'll confirm your slot via WhatsApp.
                                            </p>
                                        </div>

                                        <AppointmentForm />
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-16 md:py-20 bg-gradient-to-br from-teal-600 via-teal-700 to-emerald-700 relative overflow-hidden">
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
                                <Sparkles className="h-4 w-4 text-amber-300" />
                                <span className="text-sm font-medium text-white/90">Need Immediate Help?</span>
                            </div>

                            <h2 className="font-display text-3xl md:text-4xl font-semibold text-white mb-6">
                                Have Questions? We're Here to Help
                            </h2>
                            <p className="text-lg text-white/80 mb-8 leading-relaxed">
                                Call us directly for emergency dental care or any queries about our services.
                            </p>

                            <Button
                                size="lg"
                                className="rounded-full px-8 py-6 text-base font-medium bg-white text-teal-700 hover:bg-white/90 shadow-xl"
                                asChild
                            >
                                <Link href="tel:+918237156777">
                                    <Phone className="mr-2 h-5 w-5" />
                                    Call +91 82371 56777
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
