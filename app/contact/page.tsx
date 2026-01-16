"use client";

import React from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { MapPin, Phone, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { AppointmentForm } from "@/components/appointment-form";

export default function ContactPage() {
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <div className="flex flex-col min-h-screen bg-slate-50">
            <Navbar />

            {/* Mobile-First Hero Section */}
            <section className="relative w-full bg-slate-900 flex items-center justify-center overflow-hidden py-16 lg:py-0 lg:h-[60vh] lg:min-h-[500px]">
                {/* Background Image & Overlay */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2068&auto=format&fit=crop')] bg-cover bg-center opacity-30 mix-blend-overlay"></div>
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-900/0 via-slate-900/60 to-slate-900"></div>
                </div>

                {/* Content */}
                <div className="container px-4 mx-auto relative z-10 text-center">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fadeIn}
                        className="max-w-3xl mx-auto space-y-6"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-lg">
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                            </span>
                            <span className="text-sm font-medium tracking-wide">Accepting New Patients</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white tracking-tight leading-tight">
                            Start Your Journey to a <br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-emerald-300">Perfect Smile</span>
                        </h1>

                        <p className="text-slate-300 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
                            Book your appointment online easily. We are here to provide world-class dental care.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Main Content Area */}
            <div className="container px-4 mx-auto pb-20 -mt-6 lg:-mt-32 relative z-20">
                <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start max-w-7xl mx-auto">

                    {/* Appointment Form (Priority on Mobile) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="lg:col-span-7 order-1 lg:order-2"
                    >
                        <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 p-6 md:p-10 border border-slate-100 overflow-hidden relative">
                            {/* Subtle Decor */}
                            <div className="absolute top-0 right-0 w-40 h-40 bg-blue-50/80 rounded-bl-full -mr-10 -mt-10 z-0"></div>

                            <div className="relative z-10 text-center mb-10">
                                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">Book Your Slot</h2>
                                <p className="text-slate-500">Fill in the form below to schedule your visit.</p>
                            </div>

                            <AppointmentForm />
                        </div>
                    </motion.div>

                    {/* Contact Info (Second on Mobile) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="lg:col-span-5 space-y-8 lg:sticky lg:top-32 order-2 lg:order-1"
                    >
                        {/* Info Card */}
                        <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 p-8 border border-slate-100">
                            <h3 className="text-2xl font-bold text-slate-900 mb-8 border-b border-slate-100 pb-4 text-center lg:text-left">Details</h3>

                            <div className="space-y-8">
                                <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4 text-center lg:text-left">
                                    <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">Our Location</span>
                                        <p className="text-lg font-medium text-slate-800">
                                            Nanded City, Sinhagad Road<br />
                                            Pune, Maharashtra, 411041
                                        </p>
                                    </div>
                                </div>

                                <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4 text-center lg:text-left">
                                    <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">Call Us</span>
                                        <p className="text-lg font-medium text-slate-800">
                                            +91 82371 56777
                                        </p>
                                    </div>
                                </div>

                                <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4 text-center lg:text-left">
                                    <div className="w-14 h-14 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div className="w-full min-w-0">
                                        <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">Email Us</span>
                                        <a href="mailto:dentistree.pune@gmail.com" className="text-lg font-medium text-slate-800 hover:text-blue-600 transition-colors break-words">
                                            dentistree.pune@gmail.com
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Map */}
                        <div className="h-[300px] w-full rounded-3xl overflow-hidden shadow-xl shadow-slate-200/50 border border-slate-100">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4490.983345762452!2d73.78167094077102!3d18.460213706848812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc29580a5c8612f%3A0xd16cce358b8cabfd!2sDentistree%20Clinic!5e0!3m2!1sen!2sin!4v1768597640729!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="grayscale hover:grayscale-0 transition-all duration-700"
                            ></iframe>
                        </div>

                    </motion.div>
                </div>
            </div>

            <Footer />
        </div>
    );
}
