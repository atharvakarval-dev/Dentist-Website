"use client"

import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { AppointmentForm } from "@/components/appointment-form"
import { Accordion } from "@/components/ui/accordion"
import Footer from "@/components/layout/Footer"
import {
  ArrowRight,
  MapPin,
  Phone,
  Sparkles,
  Heart,
  Clock,
  Shield,
  Star,
  Users,
  Award,
  CheckCircle2,
  Calendar,
  Zap,
  Microscope,
  Baby
} from "lucide-react"
import { Button } from "@/components/ui/button"

// --- Animation Variants ---
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
  const { scrollYProgress } = useScroll()
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <div className="bg-white min-h-screen flex flex-col font-sans selection:bg-teal-100 selection:text-teal-900">
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-1 bg-dental-teal origin-left z-[100]"
      />

      {/* Navbar now includes Announcement Bar and fixed positioning */}
      <Navbar />

      <main className="flex-1 pt-20"> {/* Increased padding to clear fixed headers */}

        {/* 
                  === HERO SECTION: EMOTIONAL HOOK ===
                  Strategy: Promise -> Vibe -> Action
                */}
        <section className="relative min-h-[85vh] flex items-center bg-gradient-to-b from-dental-cream via-white to-white overflow-hidden pb-12">
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230d9488' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}
          />

          <div className="container px-4 md:px-6 relative z-10 pt-4 md:pt-10">
            <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:gap-20 items-center">

              {/* Text Content - ORDER 1 ON MOBILE NOW */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="order-1 lg:order-1 space-y-6 md:space-y-8 pt-4"
              >
                <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pediatric-sage/20 border border-pediatric-sage/30 text-dental-teal-dark font-semibold text-xs tracking-widest uppercase">
                  <Star className="w-3 h-3 fill-dental-teal" />
                  Voted Top Dentist in Pune
                </motion.div>

                <motion.h1 variants={fadeInUp} className="font-display text-4xl md:text-5xl lg:text-7xl font-medium text-dental-charcoal leading-[1.15] md:leading-[1.1]">
                  Your Smile Deserves <br />
                  More Than Just <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-dental-teal to-teal-600 italic">Dental Work.</span>
                </motion.h1>

                <motion.p variants={fadeInUp} className="text-lg md:text-xl text-slate-500 leading-relaxed max-w-xl font-light">
                  Experience the difference of 15+ years of precision dentistry, combined with the gentle care of a doctor who treats you like family.
                </motion.p>

                <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 pt-2">
                  <Button size="lg" className="h-14 md:h-16 rounded-full px-8 text-lg bg-dental-teal text-white hover:bg-teal-600 shadow-xl shadow-teal-900/10" asChild>
                    <Link href="/contact">Book Your Consultation</Link>
                  </Button>
                  <Button variant="outline" size="lg" className="h-14 md:h-16 rounded-full px-8 text-lg border-stone-200 text-slate-600 hover:bg-stone-50 gap-3" asChild>
                    <Link href="/services">
                      <Zap className="w-5 h-5 text-amber-400 fill-amber-400" />
                      Virtual Tour
                    </Link>
                  </Button>
                </motion.div>

                <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-4 md:gap-6 pt-4 text-sm text-slate-400 font-medium">
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-2">
                      {[1, 2, 3].map(i => (
                        <div key={i} className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white flex items-center justify-center text-[10px] overflow-hidden">
                          <Image src={`/assests/review-${i}.png`} alt="Reviewer" width={32} height={32} className="object-cover" />
                        </div>
                      ))}
                    </div>
                    <span>5.0 Stars (30+ Reviews)</span>
                  </div>
                  <span className="hidden md:block w-1 h-1 rounded-full bg-slate-300" />
                  <span>Accepting New Patients</span>
                </motion.div>
              </motion.div>

              {/* Hero Image - ORDER 2 ON MOBILE */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="order-2 lg:order-2 relative mt-8 lg:mt-0"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-teal-100 to-amber-50 rounded-[3rem] rotate-3 transform" />
                <div className="relative aspect-[4/5] md:aspect-square lg:aspect-[4/5] rounded-[2.5rem] md:rounded-[3rem] overflow-hidden shadow-2xl shadow-teal-900/10 border-4 border-white">
                  <Image
                    src="/assests/doctor-2.png"
                    alt="Dr. Poonam Bambarkar at work"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent" />

                  {/* Floating Trust Badge */}
                  <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 bg-white/95 backdrop-blur-md p-3 md:p-4 rounded-2xl shadow-lg flex items-center gap-3 md:gap-4 max-w-[200px] md:max-w-[240px]">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-dental-teal/10 rounded-xl flex items-center justify-center shrink-0">
                      <Shield className="w-5 h-5 md:w-6 md:h-6 text-dental-teal" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-800 text-xs md:text-sm">100% Sterile</div>
                      <div className="text-[10px] md:text-xs text-slate-500">Exceeds Safety Standards</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>


        {/* 
                  === TRUST STRIP ===
                  Purpose: Immediate Authority
                */}
        <section className="py-12 bg-white border-b border-stone-100">
          <div className="container px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center opacity-80 hover:opacity-100 transition-all duration-500">
              {[
                { label: "450+ Happy Kids", icon: Baby, color: "text-pediatric-coral" },
                { label: "Fear-Free Clinic", icon: Heart, color: "text-pediatric-sage" },
                { label: "Pediatric Trained", icon: Award, color: "text-dental-teal" },
                { label: "15+ Years Exp", icon: Shield, color: "text-pediatric-navy" }
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-center gap-3">
                  <div className={`p-2 rounded-full bg-stone-50 ${item.color}`}>
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-display font-bold text-slate-800 text-lg block leading-none">{item.label.split(' ').slice(0, -1).join(' ')}</span>
                    <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">{item.label.split(' ').slice(-1)}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* 
                  === OUTCOME-FOCUSED SERVICES ===
                  Strategy: Benefit > Feature
                  Ref: "Outcome-focus the copy"
                */}
        <section className="py-24 md:py-32 bg-stone-50">
          <div className="container px-4 md:px-6">
            <SectionHeader
              label="Our Expertise"
              title="Transforming Lives, One Smile at a Time"
              subtitle="We don't just treat teeth. We restore confidence, function, and health using minimally invasive dentistry."
              center
            />

            <div className="grid md:grid-cols-3 gap-6 mt-16">
              {[
                {
                  title: "Root Canal Treatment",
                  desc: "Save your natural tooth with our advanced rotary technology and comfort protocols.",
                  icon: Zap,
                  for: "Endodontics",
                  href: "/services/root-canal-treatment"
                },
                {
                  title: "Fillings, Crowns & Bridges",
                  desc: "Restore damaged teeth with durable, natural-looking materials for long-lasting function.",
                  icon: Shield,
                  for: "Restorative Dentistry",
                  href: "/services/restorative"
                },
                {
                  title: "Pediatric (children) Dental Treatments",
                  desc: "Fun, gentle care for your little ones to build healthy habits.",
                  icon: Baby,
                  for: "Pediatric Dentistry",
                  highlight: true,
                  href: "/services/pediatric-dentistry"
                }
              ].map((item, i) => (
                <Link key={i} href={item.href} className="block group h-full">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className={`relative rounded-3xl p-8 border transition-all duration-300 overflow-hidden h-full
                    ${item.highlight
                        ? "bg-pediatric-cream border-pediatric-sage/50 shadow-lg hover:shadow-xl hover:border-pediatric-sage"
                        : "bg-white border-stone-100 hover:shadow-xl hover:border-teal-100"
                      }`}
                  >
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300
                    ${item.highlight ? "bg-pediatric-sage/20 text-dental-teal-dark" : "bg-dental-cream group-hover:bg-dental-teal text-amber-600 group-hover:text-white"}`}>
                      <item.icon className="w-7 h-7" />
                    </div>
                    <h3 className="font-display text-2xl font-bold text-dental-charcoal mb-2">{item.title}</h3>
                    <p className="text-slate-600 mb-6 leading-relaxed">{item.desc}</p>

                    <div className="pt-6 border-t border-slate-50 flex items-center justify-between mt-auto">
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{item.for}</span>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all 
                      ${item.highlight ? "bg-white text-dental-teal shadow-sm" : "bg-slate-50 group-hover:bg-dental-teal group-hover:text-white"}`}>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link href="/services" className="inline-flex items-center gap-2 text-dental-teal font-semibold hover:text-teal-700 transition-colors border-b border-dental-teal/30 hover:border-dental-teal pb-0.5">
                View Full Service Menu <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>


        {/* 
                  === RISK REVERSAL: THE FIRST VISIT ===
                  Strategy: Walkthrough to reduce anxiety
                */}
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-dental-cream rounded-full blur-[100px] opacity-50" />

          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={slideInLeft}
                className="order-2 lg:order-1"
              >
                <div className="relative aspect-square rounded-[2.5rem] overflow-hidden shadow-2xl">
                  <Image src="/assests/clinic1.png" alt="Clinic Interior" fill className="object-cover" />
                  <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent text-white">
                    <p className="font-display text-2xl">"The most relaxing dental experience I've ever had."</p>
                    <div className="flex gap-1 mt-2 text-amber-400">
                      {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="order-1 lg:order-2 space-y-10"
              >
                <div>
                  <SectionHeader
                    label="Your First Visit"
                    title="Anxiety-Free Dentistry Starts Here"
                    subtitle="No judgment. No pressure. Just a simple 3-step process to get to know you and your health."
                  />
                </div>

                <div className="space-y-8">
                  {[
                    {
                      step: "01",
                      title: "Warm Welcome, No Waiting",
                      desc: "We value your time. Walk in and get settled immediately—no long lobby waits."
                    },
                    {
                      step: "02",
                      title: "Digital Scan & Diagnosis",
                      desc: "We use advanced cameras to show you exactly what's going on. No guessing."
                    },
                    {
                      step: "03",
                      title: "Honest Conversation",
                      desc: "We discuss options that fit your budget and goals. You're in control."
                    }
                  ].map((item, i) => (
                    <motion.div key={i} variants={fadeInUp} className="flex gap-6">
                      <div className="font-display text-4xl text-dental-teal/20 font-bold leading-none shrink-0">{item.step}</div>
                      <div>
                        <h4 className="font-display text-xl font-bold text-slate-800 mb-2">{item.title}</h4>
                        <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>


        {/* 
                  === COMPARISON / WHY US TEASER ===
                  Strategy: Differentiation
                */}
        <section className="py-24 bg-dental-charcoal text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-teal-900/10" />
          <div className="container px-4 md:px-6 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="font-display text-3xl md:text-5xl mb-6">Experience the Upgrade</h2>
              <p className="text-slate-300 text-lg">Why thousands of families across Pune have switched to Dentistree.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-6 text-slate-400">Typical Dental Visit</h3>
                <ul className="space-y-4 text-slate-400">
                  <li className="flex gap-3"><span className="text-red-400 font-bold">×</span> Long wait times</li>
                  <li className="flex gap-3"><span className="text-red-400 font-bold">×</span> Confusing medical jargon</li>
                  <li className="flex gap-3"><span className="text-red-400 font-bold">×</span> Pushing expensive treatments</li>
                  <li className="flex gap-3"><span className="text-red-400 font-bold">×</span> Rushed appointments</li>
                </ul>
              </div>
              <div className="bg-dental-teal p-8 rounded-3xl shadow-xl transform md:scale-105 border border-teal-400/30">
                <h3 className="text-xl font-bold mb-6 text-white">The Dentistree Way</h3>
                <ul className="space-y-4 text-teal-50 font-medium">
                  <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-white" /> Zero-wait policy</li>
                  <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-white" /> Visual explainers & photos</li>
                  <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-white" /> Conservative, ethical care</li>
                  <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-white" /> 45-minute dedicated slots</li>
                </ul>
              </div>
            </div>

            <div className="text-center mt-16">
              <Button variant="link" className="text-white text-lg hover:text-teal-200" asChild>
                <Link href="/why-us">Read Our Full Promise &rarr;</Link>
              </Button>
            </div>
          </div>
        </section>


        {/* 
                  === FAQ / OBJECTION HANDLING ===
                  Strategy: Pre-empt doubts
                */}
        <section className="py-24 bg-dental-cream">
          <div className="container px-4 max-w-3xl mx-auto">
            <SectionHeader
              label="FAQ"
              title="Common Questions"
              subtitle="Got questions? We have answers. If you can't find what you're looking for, just give us a call."
              center
            />

            <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-sm border border-stone-100">
              <Accordion items={[
                {
                  id: "1",
                  trigger: "Do you treat specialized cases for children?",
                  content: "Yes! Dr. Poonam is an expert in pediatric care. We handle everything from first checkups to cavity prevention and habit correction, ensuring your child actually enjoys the dentist."
                },
                {
                  id: "2",
                  trigger: "What if my child is afraid of the dentist?",
                  content: "We use a 'Tell-Show-Do' technique. We introduce tools in a friendly way before doing anything. Our clinic is designed to be a fear-free zone with gentle staff and distractions."
                },
                {
                  id: "3",
                  trigger: "Do you accept new patients?",
                  content: "Yes! We are currently welcoming new patients and families. You can often get an appointment within 24-48 hours."
                },
                {
                  id: "4",
                  trigger: "Are your prices transparent?",
                  content: "Absolutely. We provide a full cost breakdown before any treatment begins. No hidden fees, ever."
                }
              ]} />
            </div>
          </div>
        </section>


        {/* 
                  === FINAL CTA: DUAL PATH ===
                  Strategy: Split funnel
                */}
        <section className="py-20 bg-white">
          <div className="container px-4 text-center pb-20">
            <h2 className="font-display text-4xl md:text-5xl text-dental-charcoal mb-6">Ready for a Healthier Smile?</h2>
            <p className="text-slate-500 text-lg mb-12 max-w-2xl mx-auto">Don't put off your health. Schedule your visit today and experience the difference.</p>

            <div className="flex flex-col sm:flex-row gap-8 justify-center max-w-4xl mx-auto">
              <div className="flex-1 p-8 rounded-3xl bg-teal-50 border border-teal-100 flex flex-col items-center hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-dental-teal rounded-full flex items-center justify-center text-white mb-4">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-xl text-dental-charcoal mb-2">New Patient?</h3>
                <p className="text-sm text-slate-500 mb-6">Start your journey with a comprehensive consultation.</p>
                <Button size="lg" className="w-full rounded-full bg-dental-teal hover:bg-teal-600" asChild>
                  <Link href="/contact">Book First Visit</Link>
                </Button>
              </div>

              <div className="flex-1 p-8 rounded-3xl bg-white border border-slate-100 flex flex-col items-center hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-slate-600 mb-4">
                  <Phone className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-xl text-dental-charcoal mb-2">Have Questions?</h3>
                <p className="text-sm text-slate-500 mb-6">Speak directly with our front desk team.</p>
                <Button variant="outline" size="lg" className="w-full rounded-full" asChild>
                  <Link href="tel:+918237156777">Call +91 82371 56777</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  )
}

// Reuse SectionHeader
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
