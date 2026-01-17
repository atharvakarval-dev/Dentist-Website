"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { AppointmentForm } from "@/components/appointment-form"
import HeroImage from "../assests/doctor.png"
import AboutImage from "../assests/AboutUs.png"
import Clinic1 from "../assests/clinic1.png"
import {
  ArrowRight,
  Mail,
  MapPin,
  Phone,
  Instagram,
  Linkedin,
  Facebook,
  Sparkles,
  Activity,
  Heart,
  Smile,
  Clock,
  Shield,
  Star,
  Users,
  Award,
  CheckCircle2,
  Stethoscope,
  Gem,
} from "lucide-react"
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

const fadeInScale = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
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

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[#faf8f5]">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section - Premium Elegant Design */}
        <section className="relative overflow-hidden pt-8 pb-16 md:pt-12 md:pb-24 lg:pt-16 lg:pb-32 gradient-hero">
          {/* Decorative elements */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-teal-200/30 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-100/40 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-teal-50/50 to-transparent rounded-full" />

          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="flex flex-col justify-center space-y-6"
              >
                {/* Premium Badge */}
                <motion.div
                  variants={fadeInUp}
                  className="inline-flex w-fit items-center gap-2 rounded-full bg-gradient-to-r from-teal-50 to-emerald-50 px-4 py-2 border border-teal-100 shadow-sm"
                >
                  <div className="h-2 w-2 rounded-full bg-teal-500 animate-pulse" />
                  <span className="text-sm font-medium text-teal-700 tracking-wide">
                    Premium Dental Care Since 2009
                  </span>
                </motion.div>

                {/* Main Heading */}
                <motion.div variants={fadeInUp} className="space-y-4">
                  <h1 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl xl:text-6xl text-slate-800 leading-[1.1]">
                    Where Every Smile
                    <br />
                    <span className="text-gradient-primary">Tells a Story</span>
                  </h1>
                  <p className="max-w-[540px] text-slate-600 text-lg md:text-xl leading-relaxed">
                    Experience the art of gentle dentistry with{" "}
                    <span className="font-semibold text-slate-700">Dr. Poonam Bambarkar</span>
                    —where 15+ years of expertise meets compassionate care for your entire family.
                  </p>
                </motion.div>

                {/* CTAs */}
                <motion.div
                  variants={fadeInUp}
                  className="flex flex-col gap-4 sm:flex-row pt-2"
                >
                  <Button
                    size="lg"
                    className="rounded-full px-8 py-6 text-base font-medium gradient-primary hover:opacity-90 transition-all duration-300 shadow-premium-lg hover:shadow-xl"
                    asChild
                  >
                    <Link href="#contact">
                      <span>Book Your Consultation</span>
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="rounded-full px-8 py-6 text-base font-medium border-2 border-teal-200 text-teal-700 hover:bg-teal-50 hover:border-teal-300 transition-all duration-300"
                    asChild
                  >
                    <Link href="/services">Explore Services</Link>
                  </Button>
                </motion.div>

                {/* Trust Indicators */}
                <motion.div
                  variants={fadeInUp}
                  className="pt-6 flex flex-wrap items-center gap-6"
                >
                  <div className="flex items-center gap-3 px-4 py-3 bg-white/80 rounded-2xl shadow-sm border border-slate-100">
                    <div className="flex -space-x-3">
                      {[1, 2, 3, 4].map((i) => (
                        <div
                          key={i}
                          className="h-10 w-10 rounded-full border-2 border-white bg-gradient-to-br from-teal-100 to-emerald-100 flex items-center justify-center"
                        >
                          <Smile className="h-5 w-5 text-teal-600" />
                        </div>
                      ))}
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">1000+</p>
                      <p className="text-sm text-slate-500">Happy Families</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-3 bg-white/80 rounded-2xl shadow-sm border border-slate-100">
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="font-semibold text-slate-700">4.9</span>
                    <span className="text-slate-500">Rating</span>
                  </div>
                </motion.div>
              </motion.div>

              {/* Hero Image */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={slideInRight}
                className="relative lg:h-[620px] xl:h-[700px] w-full hidden lg:block"
              >
                <div className="relative h-full w-full">
                  {/* Main Image Container */}
                  <div className="relative h-full w-full rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/50">
                    <Image
                      src={HeroImage}
                      alt="Dr. Poonam Bambarkar at Dentistree Clinic"
                      fill
                      className="object-cover"
                      priority
                    />
                    {/* Subtle overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent" />
                  </div>

                  {/* Floating Stats Card */}
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1, duration: 0.6 }}
                    className="absolute -bottom-6 -left-8 glass rounded-2xl p-5 shadow-xl border border-white/30"
                  >
                    <div className="flex items-center gap-4">
                      <div className="h-14 w-14 rounded-2xl gradient-primary flex items-center justify-center text-white shadow-lg">
                        <Award className="h-7 w-7" />
                      </div>
                      <div>
                        <p className="font-display text-2xl font-bold text-slate-800">15+</p>
                        <p className="text-sm text-slate-600">Years of Excellence</p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Floating Badge */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1.2, duration: 0.5, type: "spring" }}
                    className="absolute top-8 -right-4 glass rounded-2xl px-5 py-3 shadow-xl border border-white/30"
                  >
                    <div className="flex items-center gap-2">
                      <Shield className="h-5 w-5 text-teal-600" />
                      <span className="font-medium text-slate-700">100% Sterilized</span>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Premium Features Strip */}
        <section className="py-6 bg-white border-y border-slate-100">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              {[
                { icon: <Heart className="h-5 w-5" />, label: "Family Focused Care", color: "text-rose-500", bg: "bg-rose-50" },
                { icon: <Shield className="h-5 w-5" />, label: "100% Sterilized", color: "text-teal-600", bg: "bg-teal-50" },
                { icon: <Gem className="h-5 w-5" />, label: "Premium Technology", color: "text-amber-500", bg: "bg-amber-50" },
                { icon: <Users className="h-5 w-5" />, label: "Expert Specialists", color: "text-indigo-500", bg: "bg-indigo-50" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className="flex items-center gap-3 px-4 py-3"
                >
                  <div className={`h-11 w-11 rounded-xl ${item.bg} ${item.color} flex items-center justify-center shrink-0`}>
                    {item.icon}
                  </div>
                  <span className="font-medium text-slate-700 text-sm md:text-base">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section - Elegant Design */}
        <section id="about" className="py-20 md:py-28 bg-[#faf8f5]">
          <div className="container px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={slideInLeft}
                className="relative"
              >
                <div className="relative">
                  {/* Decorative frame */}
                  <div className="absolute -top-4 -left-4 w-full h-full border-2 border-teal-200 rounded-[2rem]" />

                  <div className="relative h-[450px] md:h-[550px] rounded-[2rem] overflow-hidden shadow-2xl">
                    <Image
                      src={AboutImage}
                      alt="Dr. Poonam Bambarkar"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent" />
                  </div>

                  {/* Experience Badge */}
                  <div className="absolute -bottom-6 -right-6 h-36 w-36 rounded-3xl gradient-primary flex items-center justify-center text-white shadow-2xl border-4 border-white hidden md:flex animate-float">
                    <div className="text-center">
                      <span className="block text-4xl font-display font-bold">15+</span>
                      <span className="text-sm opacity-90">Years Exp.</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="space-y-6"
              >
                <motion.div variants={fadeInUp} className="space-y-4">
                  <div className="inline-flex items-center gap-2 rounded-full bg-teal-50 px-4 py-2 border border-teal-100">
                    <Stethoscope className="h-4 w-4 text-teal-600" />
                    <span className="text-sm font-medium text-teal-700">Meet Your Doctor</span>
                  </div>
                  <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-slate-800">
                    Dr. Poonam Bambarkar
                  </h2>
                </motion.div>

                <motion.div variants={fadeInUp} className="space-y-4 text-slate-600 leading-relaxed">
                  <p className="text-lg">
                    With over a decade and a half of expertise in dentistry, Dr. Poonam Bambarkar combines{" "}
                    <span className="text-teal-700 font-medium">professional excellence</span> with a deeply{" "}
                    <span className="text-teal-700 font-medium">compassionate approach</span>.
                  </p>
                  <p>
                    Her focus is on delivering personalized treatments using advanced techniques and modern
                    dental technology. Whether you're visiting for a routine cleaning or a complete smile
                    makeover, you are in expert hands.
                  </p>
                </motion.div>

                <motion.div variants={fadeInUp} className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                  {[
                    { icon: <CheckCircle2 className="h-5 w-5 text-teal-600" />, text: "Accurate Diagnosis" },
                    { icon: <CheckCircle2 className="h-5 w-5 text-teal-600" />, text: "Painless Treatments" },
                    { icon: <CheckCircle2 className="h-5 w-5 text-teal-600" />, text: "Preventive Focus" },
                    { icon: <CheckCircle2 className="h-5 w-5 text-teal-600" />, text: "Ethical Practice" },
                  ].map((feat, i) => (
                    <div key={i} className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 shadow-sm border border-slate-100">
                      {feat.icon}
                      <span className="font-medium text-slate-700">{feat.text}</span>
                    </div>
                  ))}
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <Button
                    className="rounded-full px-8 py-6 text-base gradient-primary hover:opacity-90 transition-all shadow-premium-lg mt-4"
                    asChild
                  >
                    <Link href="#contact">
                      Book Consultation
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Section - Premium Cards */}
        <section id="services" className="py-20 md:py-28 bg-white">
          <div className="container px-4 md:px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-teal-50 px-4 py-2 border border-teal-100 mb-6">
                <Sparkles className="h-4 w-4 text-teal-600" />
                <span className="text-sm font-medium text-teal-700">Our Expertise</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-slate-800 mb-4">
                Comprehensive Dental Care
              </h2>
              <p className="text-lg text-slate-600">
                From preventive care to advanced restorative procedures, we offer a full spectrum of premium dental treatments.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {[
                {
                  title: "Root Canal Treatment",
                  desc: "Advanced rotary endodontics for precise, painless infection removal and tooth preservation.",
                  icon: <Activity className="h-6 w-6" />,
                  gradient: "from-rose-500 to-pink-500"
                },
                {
                  title: "Dental Implants",
                  desc: "Permanent, natural-looking replacements for missing teeth using biocompatible materials.",
                  icon: <Gem className="h-6 w-6" />,
                  gradient: "from-teal-500 to-emerald-500"
                },
                {
                  title: "Orthodontics & Braces",
                  desc: "Metal braces and clear aligners to correct misaligned teeth and bite issues.",
                  icon: <Smile className="h-6 w-6" />,
                  gradient: "from-violet-500 to-purple-500"
                },
                {
                  title: "Cosmetic Dentistry",
                  desc: "Smile designing, veneers, and whitening for a brighter, more confident smile.",
                  icon: <Sparkles className="h-6 w-6" />,
                  gradient: "from-amber-500 to-orange-500"
                },
                {
                  title: "Pediatric Dentistry",
                  desc: "Gentle, preventive care for children to ensure healthy oral development.",
                  icon: <Heart className="h-6 w-6" />,
                  gradient: "from-sky-500 to-blue-500"
                },
                {
                  title: "Oral Surgery",
                  desc: "Safe extractions and minor surgical procedures with strict sterilization protocols.",
                  icon: <Shield className="h-6 w-6" />,
                  gradient: "from-slate-600 to-slate-700"
                }
              ].map((service, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className="group relative p-6 rounded-2xl bg-[#faf8f5] border border-slate-100 hover:bg-white hover:shadow-xl hover:border-transparent transition-all duration-500"
                >
                  {/* Hover gradient border effect */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl`} />

                  <div className={`h-14 w-14 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-white mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                  <h3 className="font-display text-xl font-semibold text-slate-800 mb-3">{service.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{service.desc}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-center mt-12"
            >
              <Button
                variant="outline"
                size="lg"
                className="rounded-full px-8 py-6 text-base border-2 border-teal-200 text-teal-700 hover:bg-teal-50 hover:border-teal-300"
                asChild
              >
                <Link href="/services">
                  View All Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Why Choose Us - Premium Section */}
        <section id="why-us" className="py-20 md:py-28 bg-gradient-to-br from-teal-50/50 via-white to-amber-50/30">
          <div className="container px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="order-2 lg:order-1 space-y-8"
              >
                <motion.div variants={fadeInUp} className="space-y-4">
                  <div className="inline-flex items-center gap-2 rounded-full bg-teal-50 px-4 py-2 border border-teal-100">
                    <Award className="h-4 w-4 text-teal-600" />
                    <span className="text-sm font-medium text-teal-700">Why Choose Us</span>
                  </div>
                  <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-slate-800">
                    Why Choose Dentistree?
                  </h2>
                </motion.div>

                <motion.div variants={staggerContainer} className="space-y-5">
                  {[
                    {
                      title: "15+ Years of Trusted Experience",
                      desc: "Clinical expertise backed by thousands of successful treatments and happy patients.",
                      icon: <Award className="h-5 w-5" />
                    },
                    {
                      title: "Modern Sterilization Protocols",
                      desc: "World-class hygiene standards with autoclave sterilization ensuring 100% safety.",
                      icon: <Shield className="h-5 w-5" />
                    },
                    {
                      title: "Family-Friendly Environment",
                      desc: "A warm, welcoming space designed for comfortable visits for all ages.",
                      icon: <Heart className="h-5 w-5" />
                    },
                    {
                      title: "Transparent & Ethical Pricing",
                      desc: "Clear diagnosis and treatment costs upfront with no hidden charges.",
                      icon: <CheckCircle2 className="h-5 w-5" />
                    }
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      variants={fadeInUp}
                      className="flex gap-4 p-5 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
                    >
                      <div className="mt-1 h-11 w-11 rounded-xl gradient-primary flex items-center justify-center text-white shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-800 mb-1">{item.title}</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={slideInRight}
                className="order-1 lg:order-2 relative"
              >
                <div className="relative h-[450px] md:h-[550px] rounded-[2rem] overflow-hidden shadow-2xl">
                  {/* Decorative border */}
                  <div className="absolute -inset-1 bg-gradient-to-br from-teal-300 to-amber-300 rounded-[2.2rem] blur-sm opacity-50" />
                  <div className="relative h-full w-full rounded-[2rem] overflow-hidden border-4 border-white">
                    <Image
                      src={Clinic1}
                      alt="Dentistree Clinic Interior"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Floating card */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="absolute bottom-4 left-4 sm:-bottom-6 sm:-left-6 md:-bottom-8 md:-left-8 glass rounded-2xl p-3 sm:p-4 md:p-5 shadow-xl backdrop-blur-sm"
                >
                  <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                    <div className="flex gap-0.5 sm:gap-1">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <div className="text-left">
                      <p className="font-bold text-slate-800 text-sm sm:text-base">Exceptional Care</p>
                      <p className="text-xs sm:text-sm text-slate-500">4.9 Patient Rating</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact CTA Section - Premium Dark Design */}
        <section id="contact" className="py-20 md:py-28 bg-white">
          <div className="container px-4 md:px-6">
            <div className="rounded-[2.5rem] overflow-hidden shadow-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
              <div className="grid lg:grid-cols-2">
                {/* Left Info Panel */}
                <div className="p-8 md:p-12 lg:p-16 space-y-8 text-white relative overflow-hidden">
                  {/* Decorative elements */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl" />
                  <div className="absolute bottom-0 left-0 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl" />

                  <div className="relative z-10 space-y-6">
                    <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 border border-white/10 backdrop-blur-sm">
                      <Sparkles className="h-4 w-4 text-amber-400" />
                      <span className="text-sm font-medium text-white/90">Book Your Visit</span>
                    </div>

                    <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
                      Ready for a<br />
                      <span className="text-gradient-gold">Healthier Smile?</span>
                    </h2>
                    <p className="text-slate-300 text-lg max-w-md">
                      Schedule your visit today at Dentistree Dental Clinic and experience trusted, premium dental care.
                    </p>
                  </div>

                  <div className="relative z-10 space-y-4 pt-4">
                    {[
                      { icon: <MapPin className="h-5 w-5" />, title: "Visit Us", info: "Nanded City, Sinhagad Road, Pune" },
                      { icon: <Phone className="h-5 w-5" />, title: "Call Us", info: "+91 (Add Number Here)" },
                      { icon: <Clock className="h-5 w-5" />, title: "Timings", info: "Mon - Sat: 10:00 AM - 8:00 PM" },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
                        <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-teal-500 to-emerald-500 flex items-center justify-center">
                          {item.icon}
                        </div>
                        <div>
                          <p className="font-semibold">{item.title}</p>
                          <p className="text-sm text-slate-300">{item.info}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Social links */}
                  <div className="relative z-10 flex gap-3 pt-4">
                    {[
                      { icon: <Facebook className="h-5 w-5" />, href: "#" },
                      { icon: <Instagram className="h-5 w-5" />, href: "#" },
                      { icon: <Linkedin className="h-5 w-5" />, href: "#" },
                    ].map((social, i) => (
                      <Link
                        key={i}
                        href={social.href}
                        className="h-11 w-11 rounded-xl bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors border border-white/10"
                      >
                        {social.icon}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Right Form Panel */}
                <div className="bg-white p-8 md:p-12 lg:p-16">
                  <div className="mb-8">
                    <h3 className="font-display text-2xl md:text-3xl font-semibold text-slate-800 mb-3">
                      Request Appointment
                    </h3>
                    <p className="text-slate-500">
                      Fill in your details and we will confirm your slot via WhatsApp.
                    </p>
                  </div>
                  <AppointmentForm />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer - Premium Design */}
      <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            {/* Brand */}
            <div className="lg:col-span-1 space-y-5">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl gradient-primary text-white shadow-lg">
                  <Smile className="h-6 w-6" />
                </div>
                <span className="font-display text-xl font-semibold text-white">Dentistree</span>
              </div>
              <p className="text-slate-400 leading-relaxed">
                Comprehensive dental care for kids, adults & seniors. Where every smile tells a story.
              </p>
              <div className="flex gap-3">
                {[
                  { icon: <Facebook className="h-4 w-4" />, href: "#" },
                  { icon: <Instagram className="h-4 w-4" />, href: "#" },
                  { icon: <Linkedin className="h-4 w-4" />, href: "#" },
                ].map((social, i) => (
                  <Link
                    key={i}
                    href={social.href}
                    className="h-9 w-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-teal-500 transition-colors"
                  >
                    {social.icon}
                  </Link>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-white mb-5">Quick Links</h4>
              <nav className="flex flex-col gap-3">
                {["Services", "About Us", "Contact", "Book Appointment"].map((link, i) => (
                  <Link
                    key={i}
                    href={link === "Services" ? "/services" : `#${link.toLowerCase().replace(" ", "-")}`}
                    className="text-slate-400 hover:text-teal-400 transition-colors"
                  >
                    {link}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold text-white mb-5">Services</h4>
              <nav className="flex flex-col gap-3">
                {["Root Canal", "Dental Implants", "Cosmetic Dentistry", "Pediatric Care"].map((service, i) => (
                  <Link
                    key={i}
                    href="/services"
                    className="text-slate-400 hover:text-teal-400 transition-colors"
                  >
                    {service}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold text-white mb-5">Visit Us</h4>
              <address className="not-italic text-slate-400 space-y-3">
                <p className="flex items-start gap-2">
                  <MapPin className="h-5 w-5 text-teal-500 shrink-0 mt-0.5" />
                  <span>Nanded City, Sinhagad Road,<br />Pune, Maharashtra</span>
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-teal-500" />
                  +91 (Add Number)
                </p>
                <p className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-teal-500" />
                  Mon - Sat: 10:00 AM - 8:00 PM
                </p>
              </address>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-500">
              © {new Date().getFullYear()} Dentistree Dental Clinic. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-slate-500">
              <Link href="#" className="hover:text-teal-400 transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-teal-400 transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
