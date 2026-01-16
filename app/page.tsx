"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { AppointmentForm } from "@/components/appointment-form"
import {
  ArrowRight,
  Mail,
  MapPin,
  Phone,
  Instagram,
  Twitter,
  Linkedin,
  Facebook,
  Sparkles,
  Zap,
  Activity,
  Heart,
  Smile,
  Clock,
  Shield,
  Star,
  Users,
  Calendar,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemFadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-12 md:py-16 lg:py-20 xl:py-24 bg-gradient-to-br from-blue-50 to-white">
          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="flex flex-col justify-center space-y-4"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="inline-flex w-fit items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800"
                >
                  <Sparkles className="mr-1 h-3 w-3" />
                  Where Healthy Smiles Grow
                </motion.div>
                <div className="space-y-4">
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-slate-900"
                  >
                    Experience Dentistry with a <br />
                    <span className="text-primary">Personal Touch</span>
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    className="max-w-[600px] text-slate-600 md:text-xl"
                  >
                    Led by Dr. Poonam Bambarkar with 15+ years of experience. We provide comprehensive care for kids,
                    adults, and seniors in a comfortable, family-friendly environment.
                  </motion.p>
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.6 }}
                  className="flex flex-col gap-3 sm:flex-row pt-4"
                >
                  <Button size="lg" className="rounded-full px-8 shadow-lg shadow-blue-500/20" asChild>
                    <Link href="#contact">
                      Book Your Visit
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" className="rounded-full px-8" asChild>
                    <Link href="/services">Our Services</Link>
                  </Button>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.8, duration: 1 }}
                  className="pt-8 flex items-center gap-4 text-sm text-slate-500"
                >
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="h-8 w-8 rounded-full border-2 border-white bg-gray-200" />
                    ))}
                  </div>
                  <p>Trusted by 1000+ local families</p>
                </motion.div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative lg:h-[600px] xl:h-[700px] w-full hidden lg:block"
              >
                {/* Abstract BG Shape */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-100/50 rounded-full blur-3xl -z-10" />

                <div className="relative h-full w-full rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white">
                  <Image
                    src="https://raw.githubusercontent.com/designali-in/designali/2a5d38f658ab24084e3260cdba2259fdc44ae2cd/apps/www/public/placeholder.svg?height=800&width=600"
                    alt="Happy Patient"
                    fill
                    className="object-cover"
                    priority
                  />

                  {/* Floating Card */}
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1, duration: 0.5 }}
                    className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-lg border border-white/50"
                  >
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                        <Shield className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="font-bold text-slate-900">15+ Years Experience</p>
                        <p className="text-sm text-slate-600">Trusted Clinical Excellence</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Highlights / Features */}
        <section className="py-12 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { icon: <Heart className="h-6 w-6" />, label: "Family Focused", color: "text-red-500", bg: "bg-red-50" },
                { icon: <Shield className="h-6 w-6" />, label: "Sterilized & Safe", color: "text-blue-500", bg: "bg-blue-50" },
                { icon: <Star className="h-6 w-6" />, label: "Advanced Care", color: "text-yellow-500", bg: "bg-yellow-50" },
                { icon: <Users className="h-6 w-6" />, label: "Expert Team", color: "text-green-500", bg: "bg-green-50" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex flex-col items-center text-center gap-2"
                >
                  <div className={`h-12 w-12 rounded-2xl ${item.bg} ${item.color} flex items-center justify-center mb-2`}>
                    {item.icon}
                  </div>
                  <span className="font-semibold text-slate-900">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* About Dr. Poonam */}
        <section id="about" className="section-padding py-20 bg-slate-50">
          <div className="container px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-xl">
                  <Image
                    src="https://raw.githubusercontent.com/designali-in/designali/2a5d38f658ab24084e3260cdba2259fdc44ae2cd/apps/www/public/placeholder.svg?height=800&width=600"
                    alt="Dr. Poonam Bambarkar"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 h-32 w-32 bg-primary rounded-full flex items-center justify-center text-white hidden md:flex border-4 border-white shadow-lg">
                  <div className="text-center">
                    <span className="block text-3xl font-bold">15+</span>
                    <span className="text-xs">Years Exp.</span>
                  </div>
                </div>
              </motion.div>
              <div className="space-y-6">
                <div className="inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800">
                  Meet Your Doctor
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-slate-900">Dr. Poonam Bambarkar</h2>
                <p className="text-lg text-slate-600">
                  With over a decade and a half of expertise in dentistry, Dr. Poonam Bambarkar combines professional excellence with a compassionate approach.
                </p>
                <p className="text-slate-600">
                  Her focus is on delivering personalized treatments using advanced techniques and modern dental technology. Whether you're visiting for a routine cleaning or a complete smile makeover, you are in expert hands.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                  {[
                    "Accurate Diagnosis",
                    "Painless Treatments",
                    "Preventive Focus",
                    "Ethical Practice"
                  ].map((feat, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                      <span className="font-medium text-slate-800">{feat}</span>
                    </div>
                  ))}
                </div>
                <Button className="rounded-full px-8 mt-4" asChild>
                  <Link href="#contact">Book Consultation</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="py-20 bg-white">
          <div className="container px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-slate-900 mb-4">Comprehensive Dental Care</h2>
              <p className="text-lg text-slate-600">From preventive care to advanced restorative procedures, we offer a full spectrum of dental treatments.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Root Canal Treatment",
                  desc: "Advanced rotary endodontics for precise, painless infection removal and tooth preservation.",
                  icon: <Activity className="h-6 w-6" />
                },
                {
                  title: "Dental Implants",
                  desc: "Permanent, natural-looking replacements for missing teeth using biocompatible materials.",
                  icon: <Zap className="h-6 w-6" />
                },
                {
                  title: "Orthodontics & Braces",
                  desc: "Metal braces and clear aligners to correct misaligned teeth and bite issues.",
                  icon: <Smile className="h-6 w-6" />
                },
                {
                  title: "Cosmetic Dentistry",
                  desc: "Smile designing, veneers, and whitening for a brighter, more confident smile.",
                  icon: <Sparkles className="h-6 w-6" />
                },
                {
                  title: "Pediatric Dentistry",
                  desc: "Gentle, preventive care for children to ensure healthy oral development.",
                  icon: <Heart className="h-6 w-6" />
                },
                {
                  title: "Oral Surgery",
                  desc: "Safe extractions and minor surgical procedures with strict sterilization protocols.",
                  icon: <Shield className="h-6 w-6" />
                }
              ].map((service, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -5 }}
                  className="p-6 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="h-12 w-12 rounded-xl bg-white border border-slate-100 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{service.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section id="why-us" className="py-20 bg-primary/5">
          <div className="container px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 space-y-8">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-slate-900">Why Choose Dentistree?</h2>
                <div className="space-y-6">
                  {[
                    {
                      title: "15+ Years Experience",
                      desc: "Trusted clinical expertise you can rely on."
                    },
                    {
                      title: "Modern Sterilization",
                      desc: "Strict hygiene protocols for your safety."
                    },
                    {
                      title: "Family Friendly",
                      desc: "A warm environment for kids, adults, and seniors."
                    },
                    {
                      title: "Transparent Pricing",
                      desc: "Clear diagnosis and treatment costs upfront."
                    }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="mt-1 h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0">
                        <div className="h-2 w-2 rounded-full bg-current" />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-900">{item.title}</h3>
                        <p className="text-slate-600 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="order-1 lg:order-2 relative h-[400px] rounded-3xl overflow-hidden bg-white shadow-xl p-2 border-2 border-dashed border-primary/20">
                <div className="relative h-full w-full rounded-2xl overflow-hidden bg-slate-100">
                  <Image
                    src="https://raw.githubusercontent.com/designali-in/designali/2a5d38f658ab24084e3260cdba2259fdc44ae2cd/apps/www/public/placeholder.svg?height=800&width=800"
                    alt="Clinic Interior"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section id="contact" className="py-20 bg-white">
          <div className="container px-4 md:px-6">
            <div className="rounded-[2.5rem] bg-slate-900 overflow-hidden shadow-2xl">
              <div className="grid lg:grid-cols-2">
                <div className="p-8 md:p-12 lg:p-16 space-y-6 text-white">
                  <h2 className="text-3xl md:text-4xl font-bold">Ready for a Healthier, Brighter Smile?</h2>
                  <p className="text-slate-400 text-lg">Schedule your visit today at Dentistree Dental Clinic and experience trusted dental care.</p>

                  <div className="space-y-4 pt-4">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                        <MapPin className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-semibold">Visit Us</p>
                        <p className="text-sm text-slate-400">Nanded City, Sinhagad Road, Pune</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                        <Phone className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-semibold">Call Us</p>
                        <p className="text-sm text-slate-400">+91 (Add Number Here)</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                        <Clock className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-semibold">Timings</p>
                        <p className="text-sm text-slate-400">Mon - Sat: 10:00 AM - 8:00 PM</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-8 md:p-12 lg:p-16">
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Request Appointment</h3>
                    <p className="text-slate-500">Fill in your details and we will confirm your slot via WhatsApp.</p>
                  </div>
                  <AppointmentForm />
                </div>
              </div>
            </div>
          </div>
        </section>

      </main >

      {/* Footer */}
      < footer className="bg-slate-900 text-slate-300 py-12 md:py-16" >
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-1 space-y-4">
              <div className="flex items-center gap-2 text-white">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Smile className="h-5 w-5" />
                </div>
                <span className="text-lg font-bold">Dentistree</span>
              </div>
              <p className="text-sm text-slate-400">
                Comprehensive dental care for kids, adults & seniors.
                Prevention • Restoration • Aesthetics
              </p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Quick Links</h4>
              <nav className="flex flex-col gap-2 text-sm">
                <Link href="#services" className="hover:text-primary transition-colors">Services</Link>
                <Link href="#about" className="hover:text-primary transition-colors">About Us</Link>
                <Link href="#contact" className="hover:text-primary transition-colors">Contact</Link>
                <Link href="#" className="hover:text-primary transition-colors">Book Appointment</Link>
              </nav>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Services</h4>
              <nav className="flex flex-col gap-2 text-sm">
                <Link href="#" className="hover:text-primary transition-colors">Root Canal</Link>
                <Link href="#" className="hover:text-primary transition-colors">Implants</Link>
                <Link href="#" className="hover:text-primary transition-colors">Cosmetic Dentistry</Link>
                <Link href="#" className="hover:text-primary transition-colors">Pediatric Care</Link>
              </nav>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Visit Us</h4>
              <address className="not-italic text-sm text-slate-400 space-y-2">
                <p>Nanded City, Sinhagad Road,</p>
                <p>Pune, Maharashtra</p>
                <p className="pt-2">Call: +91 (Add Number)</p>
              </address>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
            <p>&copy; {new Date().getFullYear()} Dentistree Dental Clinic. All rights reserved.</p>
            <div className="flex gap-4">
              <Link href="#" className="hover:text-white">Privacy Policy</Link>
              <Link href="#" className="hover:text-white">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer >
    </div >
  )
}

