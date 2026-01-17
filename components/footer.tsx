import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Linkedin, MapPin, Phone, Clock, Mail, ArrowRight, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

const quickLinks = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "About Us", href: "/about" },
    { label: "Why Choose Us", href: "/why-us" },
    { label: "Contact", href: "/contact" },
]

const services = [
    "Preventive Care",
    "Root Canal Treatment",
    "Dental Implants",
    "Cosmetic Dentistry",
    "Pediatric Dentistry",
    "Orthodontics",
]

const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
]

export function Footer() {
    return (
        <footer className="relative overflow-hidden">
            {/* Premium CTA Section */}
            <section className="bg-gradient-to-br from-teal-600 via-teal-700 to-emerald-700 relative">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
                <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-72 h-72 bg-amber-300/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

                <div className="container px-4 md:px-6 py-16 md:py-20 relative z-10">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-4">
                            Ready for Your Best Smile?
                        </h2>
                        <p className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed">
                            Schedule your consultation with Dr. Poonam Bambarkar today and experience premium dental care.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button
                                size="lg"
                                className="rounded-full px-8 py-6 text-base font-medium bg-white text-teal-700 hover:bg-white/90 shadow-xl"
                                asChild
                            >
                                <Link href="/contact" className="flex items-center gap-2">
                                    Book Appointment
                                    <ArrowRight className="h-5 w-5" />
                                </Link>
                            </Button>
                            <Button
                                variant="outline"
                                size="lg"
                                className="rounded-full px-8 py-6 text-base font-medium border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50"
                                asChild
                            >
                                <Link href="tel:+910000000000" className="flex items-center gap-2">
                                    <Phone className="h-5 w-5" />
                                    Call Now
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Footer */}
            <div className="bg-slate-900 text-slate-300">
                <div className="container px-4 md:px-6 pt-16 pb-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12">
                        {/* Brand */}
                        <div className="lg:col-span-4 space-y-6">
                            <Link href="/" className="flex items-center gap-3 group">
                                <Image
                                    src="/assests/103386.png"
                                    alt="Dentistree Logo"
                                    width={44}
                                    height={44}
                                    className="object-contain"
                                />
                                <div className="flex flex-col">
                                    <span className="font-display text-xl font-semibold text-white group-hover:text-teal-400 transition-colors">
                                        Dentistree
                                    </span>
                                    <span className="text-[11px] font-medium text-slate-500 uppercase tracking-wide">
                                        Dental Clinic
                                    </span>
                                </div>
                            </Link>
                            <p className="text-slate-400 leading-relaxed max-w-md">
                                Comprehensive dental care for kids, adults & seniors. Where every smile tells a story of health, confidence, and happiness.
                            </p>
                            <div className="flex gap-3">
                                {socialLinks.map((social, i) => (
                                    <Link
                                        key={i}
                                        href={social.href}
                                        aria-label={social.label}
                                        className="h-10 w-10 rounded-xl bg-slate-800 flex items-center justify-center hover:bg-teal-600 hover:scale-110 transition-all duration-300"
                                    >
                                        <social.icon className="h-4 w-4" />
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className="lg:col-span-2">
                            <h4 className="font-display text-lg font-semibold text-white mb-5">Quick Links</h4>
                            <nav className="flex flex-col gap-3">
                                {quickLinks.map((link, i) => (
                                    <Link
                                        key={i}
                                        href={link.href}
                                        className="text-slate-400 hover:text-teal-400 hover:translate-x-1 transition-all duration-200 w-fit"
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </nav>
                        </div>

                        {/* Services */}
                        <div className="lg:col-span-3">
                            <h4 className="font-display text-lg font-semibold text-white mb-5">Our Services</h4>
                            <nav className="flex flex-col gap-3">
                                {services.map((service, i) => (
                                    <Link
                                        key={i}
                                        href="/services"
                                        className="text-slate-400 hover:text-teal-400 hover:translate-x-1 transition-all duration-200 w-fit"
                                    >
                                        {service}
                                    </Link>
                                ))}
                            </nav>
                        </div>

                        {/* Contact Info */}
                        <div className="lg:col-span-3">
                            <h4 className="font-display text-lg font-semibold text-white mb-5">Visit Us</h4>
                            <address className="not-italic space-y-4">
                                <div className="flex items-start gap-3 group">
                                    <div className="h-10 w-10 rounded-xl bg-slate-800 flex items-center justify-center shrink-0 group-hover:bg-teal-600/20 transition-colors">
                                        <MapPin className="h-5 w-5 text-teal-500" />
                                    </div>
                                    <div>
                                        <p className="text-slate-300 font-medium">Location</p>
                                        <p className="text-slate-400 text-sm">Nanded City, Sinhagad Road,<br />Pune, Maharashtra</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 group">
                                    <div className="h-10 w-10 rounded-xl bg-slate-800 flex items-center justify-center shrink-0 group-hover:bg-teal-600/20 transition-colors">
                                        <Phone className="h-5 w-5 text-teal-500" />
                                    </div>
                                    <div>
                                        <p className="text-slate-300 font-medium">Phone</p>
                                        <Link href="tel:+910000000000" className="text-slate-400 text-sm hover:text-teal-400 transition-colors">
                                            +91 (Add Number)
                                        </Link>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 group">
                                    <div className="h-10 w-10 rounded-xl bg-slate-800 flex items-center justify-center shrink-0 group-hover:bg-teal-600/20 transition-colors">
                                        <Clock className="h-5 w-5 text-teal-500" />
                                    </div>
                                    <div>
                                        <p className="text-slate-300 font-medium">Working Hours</p>
                                        <p className="text-slate-400 text-sm">Mon - Sat: 10 AM - 8 PM</p>
                                    </div>
                                </div>
                            </address>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-sm text-slate-500 flex items-center gap-1">
                            © {new Date().getFullYear()} Dentistree Dental Clinic. Made with
                            <Heart className="h-3 w-3 text-rose-500 fill-rose-500" />
                            in Pune
                        </p>
                        <div className="flex gap-6 text-sm text-slate-500">
                            <Link href="#" className="hover:text-teal-400 transition-colors">Privacy Policy</Link>
                            <Link href="#" className="hover:text-teal-400 transition-colors">Terms of Service</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
