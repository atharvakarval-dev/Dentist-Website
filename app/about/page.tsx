"use client"

import Image from "next/image"
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { StaggerTestimonials } from "@/components/stagger-testimonials";
import { motion } from "framer-motion";
import { MapPin, Syringe, ShieldCheck, Stethoscope } from "lucide-react";

export default function AboutPage() {
    return (
        <div className="bg-slate-50 min-h-screen flex flex-col">
            <Navbar />

            <main className="flex-1">
                {/* Hero Section */}
                <section className="relative py-20 bg-slate-900 text-white overflow-hidden">
                    <div className="absolute inset-0 bg-blue-900/20" />
                    <div className="container relative z-10 px-4 md:px-6 text-center">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-6xl font-bold mb-6"
                        >
                            About <span className="text-primary">Dentistree</span>
                        </motion.h1>
                        <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto">
                            Comprehensive dental care in Nanded City, Pune. Combining 15+ years of experience with modern technology.
                        </p>
                    </div>
                </section>

                {/* Professional Profile Section */}
                <section className="py-20">
                    <div className="container px-4 md:px-6">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                                className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl skew-x-1"
                            >
                                <Image
                                    src="https://raw.githubusercontent.com/designali-in/designali/2a5d38f658ab24084e3260cdba2259fdc44ae2cd/apps/www/public/placeholder.svg?height=1000&width=800"
                                    alt="Dr. Poonam Bambarkar"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                                    <h3 className="text-2xl font-bold text-white">Dr. Poonam Bambarkar</h3>
                                    <p className="text-primary-foreground/90">Clinical Director & Chief Dentist (BDS)</p>
                                </div>
                            </motion.div>

                            <div className="space-y-8">
                                <div>
                                    <span className="text-primary font-bold tracking-wider uppercase text-sm">Professional Profile</span>
                                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">Excellence in Dentistry</h2>
                                </div>

                                <p className="text-slate-600 text-lg leading-relaxed">
                                    Dentistree Dental Clinic is a comprehensive dental care center located in <strong className="text-slate-900">Nanded City, Sinhagad Road, Pune</strong>, equipped to handle wide-ranging dental needs under one roof.
                                </p>

                                <p className="text-slate-600 text-lg leading-relaxed">
                                    Under the guidance of <strong className="text-slate-900">Dr. Poonam Bambarkar (BDS)</strong>, who brings over 15 years of clinical experience, the clinic emphasizes accurate diagnosis, evidence-based treatment protocols, and patient safety.
                                </p>

                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex gap-4">
                                        <div className="bg-blue-50 text-blue-600 h-12 w-12 rounded-xl flex items-center justify-center shrink-0">
                                            <ShieldCheck className="h-6 w-6" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900">Safety First</h4>
                                            <p className="text-sm text-slate-600">Strict sterilization protocols per modern guidelines.</p>
                                        </div>
                                    </div>
                                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex gap-4">
                                        <div className="bg-emerald-50 text-emerald-600 h-12 w-12 rounded-xl flex items-center justify-center shrink-0">
                                            <Stethoscope className="h-6 w-6" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900">Expert Diagnosis</h4>
                                            <p className="text-sm text-slate-600">Accurate, evidence-based treatment plans.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-2 text-slate-500 text-sm pt-4">
                                    <MapPin className="h-4 w-4" />
                                    <span>Nanded City, Sinhagad Road, Pune</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Testimonials Section */}
                <section className="py-10 bg-slate-100/50">
                    <div className="container px-4 md:px-6 text-center mb-12">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Patient Stories</h2>
                        <div className="flex items-center justify-center gap-2 text-yellow-500 mb-4">
                            <span className="text-2xl font-bold text-slate-900">5.0</span>
                            {[1, 2, 3, 4, 5].map((i) => (
                                <Star key={i} className="h-5 w-5 fill-current" />
                            ))}
                            <span className="text-slate-500 text-sm ml-2">(33+ Google Reviews)</span>
                        </div>
                        <p className="text-slate-600 max-w-2xl mx-auto">
                            See what our patients have to say about their experience at Dentistree.
                        </p>
                    </div>

                    <div className="max-w-[1400px] mx-auto overflow-hidden">
                        <StaggerTestimonials />
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}

function Star({ className }: { className?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
    )
}
