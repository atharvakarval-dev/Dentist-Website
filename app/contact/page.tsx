"use client"

import React, { useRef } from "react"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import Footer from "@/components/layout/Footer"
import { AppointmentForm } from "@/components/appointment-form"
import {
    Phone,
    Clock,
    MapPin,
    AlertCircle,
    ArrowRight,
    Shield,
    Mail,
    Car,
    ExternalLink,
    Lock
} from "lucide-react"

export default function ContactPage() {
    const formRef = useRef<HTMLDivElement>(null)
    const mapRef = useRef<HTMLElement>(null)

    return (
        <div className="flex flex-col min-h-screen bg-white">
            <Navbar />

            <main className="flex-1">


                {/* 2. Conversion Hero */}
                <section className="relative bg-gradient-to-br from-dental-cream to-white py-20 md:py-32 overflow-hidden">
                    <div className="container mx-auto px-4 text-center relative z-10">
                        {/* Breadcrumb */}
                        <p className="text-dental-teal font-semibold mb-4 text-sm uppercase tracking-wider">
                            Contact Us
                        </p>

                        {/* Headline */}
                        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-dental-charcoal mb-6 leading-tight">
                            Let's Perfect<br />
                            <span className="text-dental-teal italic">Your Smile</span>
                        </h1>

                        {/* Subhead */}
                        <p className="text-xl md:text-2xl text-slate-600 mb-10 max-w-2xl mx-auto">
                            Book your appointment today or reach out with any questions.
                        </p>

                        {/* CTAs */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <a href="tel:+918237156777"
                                className="group flex items-center gap-3 bg-dental-teal text-white px-8 py-5 rounded-full font-semibold text-lg hover:bg-teal-700 transition-all shadow-xl hover:shadow-2xl hover:scale-105 min-w-[280px] justify-center">
                                <Phone className="w-6 h-6" />
                                <span>+91 82371 56777</span>
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </a>

                            <button
                                onClick={() => formRef.current?.scrollIntoView({ behavior: 'smooth' })}
                                className="px-8 py-5 border-2 border-dental-teal text-dental-teal rounded-full font-semibold text-lg hover:bg-dental-teal/5 transition-all min-w-[280px]">
                                Book Online
                            </button>
                        </div>

                        {/* Trust Signals */}
                        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm text-slate-600">
                            <div className="flex items-center gap-2">
                                <Clock className="w-5 h-5 text-amber-500" />
                                <span>Same-day appointments available</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Shield className="w-5 h-5 text-dental-teal" />
                                <span>Top-rated facility</span>
                            </div>
                        </div>
                    </div>

                    {/* Decorative Blob */}
                    <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />
                </section>

                {/* 3. Quick Contact Cards */}
                <section className="py-16 bg-white border-y border-gray-100">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">

                            {/* Phone Card */}
                            <a href="tel:+918237156777"
                                className="group text-center p-8 rounded-2xl bg-gradient-to-br from-teal-50 to-teal-100/30 hover:shadow-xl transition-all hover:scale-105 border border-teal-100">
                                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-dental-teal/10 flex items-center justify-center group-hover:bg-dental-teal/20 transition-colors">
                                    <Phone className="w-8 h-8 text-dental-teal" />
                                </div>
                                <h3 className="font-display text-xl mb-2 text-dental-charcoal font-semibold">
                                    Call Us
                                </h3>
                                <p className="text-xl md:text-2xl font-bold text-dental-teal mb-2">
                                    +91 82371 56777
                                </p>
                                <p className="text-sm text-slate-600">
                                    Mon-Sun: 10am - 9pm
                                </p>
                            </a>

                            {/* Hours Card */}
                            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50/30 border border-amber-100">
                                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-amber-500/10 flex items-center justify-center">
                                    <Clock className="w-8 h-8 text-amber-600" />
                                </div>
                                <h3 className="font-display text-xl mb-2 text-dental-charcoal font-semibold">
                                    Office Hours
                                </h3>
                                <div className="text-sm text-slate-700 space-y-1">
                                    <p><strong>Mon-Sun:</strong> 10:00 AM - 9:00 PM</p>
                                    <p className="text-xs text-slate-500 mt-1">Open 7 days a week</p>
                                </div>
                                <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-800 rounded-full text-xs font-semibold">
                                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                                    Open Now
                                </div>
                            </div>

                            {/* Location Card */}
                            <button
                                onClick={() => mapRef.current?.scrollIntoView({ behavior: 'smooth' })}
                                className="group text-center p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-gray-100/30 hover:shadow-xl transition-all hover:scale-105 border border-slate-100">
                                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-slate-200/50 flex items-center justify-center group-hover:bg-slate-200 transition-colors">
                                    <MapPin className="w-8 h-8 text-slate-700" />
                                </div>
                                <h3 className="font-display text-xl mb-2 text-dental-charcoal font-semibold">
                                    Visit Us
                                </h3>
                                <p className="text-slate-700 text-sm leading-relaxed mb-4">
                                    R B Ingale Plaza, Sinhagad Road,<br />
                                    Pune 411041
                                </p>
                                <p className="text-sm text-dental-teal font-semibold group-hover:underline">
                                    Get Directions →
                                </p>
                            </button>

                        </div>
                    </div>
                </section>

                {/* 4. Appointment Form Section */}
                <section ref={formRef} className="py-24 bg-dental-cream">
                    <div className="container mx-auto px-4">
                        <div className="max-w-3xl mx-auto">
                            {/* Section Header */}
                            <div className="text-center mb-12">
                                <h2 className="font-display text-4xl md:text-5xl text-dental-charcoal mb-4">
                                    Book Your <span className="text-dental-teal italic">Appointment</span>
                                </h2>
                                <p className="text-lg text-slate-600">
                                    Fill out the form below and we'll confirm your appointment via WhatsApp.
                                </p>
                            </div>

                            {/* Form Card */}
                            <div className="bg-white rounded-[2.5rem] shadow-2xl p-8 md:p-12 border border-slate-100">
                                <AppointmentForm />

                                {/* Trust Signals */}
                                <div className="mt-8 pt-8 border-t border-slate-100 flex flex-wrap items-center justify-center gap-6 md:gap-8 text-xs md:text-sm text-slate-500">
                                    <div className="flex items-center gap-2">
                                        <Lock className="w-4 h-4 text-dental-teal" />
                                        <span>Secure Booking</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Shield className="w-4 h-4 text-dental-teal" />
                                        <span>Data Privacy</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Clock className="w-4 h-4 text-dental-teal" />
                                        <span>Fast Confirmation</span>
                                    </div>
                                </div>
                            </div>

                            {/* Alternative Contact */}
                            <div className="mt-12 text-center">
                                <p className="text-slate-600 mb-4">
                                    Prefer to talk? We're here to help.
                                </p>
                                <div className="flex flex-wrap items-center justify-center gap-4">
                                    <a href="tel:+918237156777" className="flex items-center gap-2 text-dental-teal hover:underline font-semibold text-lg">
                                        <Phone className="w-5 h-5" />
                                        +91 82371 56777
                                    </a>
                                    <span className="text-slate-300 hidden sm:inline">|</span>
                                    <a href="mailto:dentistree.pune@gmail.com" className="flex items-center gap-2 text-dental-teal hover:underline font-semibold text-lg">
                                        <Mail className="w-5 h-5" />
                                        dentistree.pune@gmail.com
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 5. Map Section */}
                <section ref={mapRef} className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="grid lg:grid-cols-[400px_1fr] gap-12 items-start">
                            {/* Details */}
                            <div className="space-y-8">
                                <h2 className="font-display text-4xl text-dental-charcoal">
                                    How to Find Us
                                </h2>

                                <div className="space-y-6 text-slate-700">
                                    <div className="flex items-start gap-4">
                                        <div className="p-3 rounded-full bg-teal-50 text-dental-teal">
                                            <MapPin className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <p className="font-bold text-lg text-dental-charcoal mb-1">Address</p>
                                            <p className="leading-relaxed">
                                                R B Ingale Plaza, Ground Floor 5,<br />
                                                Next to Uttam Sweets,<br />
                                                Near Nanded City Circle,<br />
                                                Sinhagad Road, Pune 411041
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="p-3 rounded-full bg-teal-50 text-dental-teal">
                                            <Car className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <p className="font-bold text-lg text-dental-charcoal mb-1">Parking</p>
                                            <p>Ample parking space available for patients.</p>
                                        </div>
                                    </div>

                                </div>

                                <a href="https://maps.google.com/?q=Dentistree+Clinic+Pune"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-8 py-4 bg-dental-teal text-white rounded-full hover:bg-teal-700 transition-colors font-semibold text-lg shadow-lg hover:shadow-xl">
                                    Open in Google Maps
                                    <ExternalLink className="w-5 h-5" />
                                </a>
                            </div>

                            {/* Embedded Map */}
                            <div className="w-full h-[500px] rounded-[2rem] overflow-hidden shadow-2xl border border-slate-100 grayscale-[20%] hover:grayscale-0 transition-all duration-700">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4490.983345762452!2d73.78167094077102!3d18.460213706848812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc29580a5c8612f%3A0xd16cce358b8cabfd!2sDentistree%20Clinic!5e0!3m2!1sen!2sin!4v1768597640729!5m2!1sen!2sin"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Dentistree Clinic Location"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}
