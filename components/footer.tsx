import Link from "next/link"
import { Smile, Facebook, Instagram, Linkedin, MapPin, Phone, Clock } from "lucide-react"

export function Footer() {
    return (
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
                            {[
                                { label: "Services", href: "/services" },
                                { label: "About Us", href: "/about" },
                                { label: "Why Choose Us", href: "/why-us" },
                                { label: "Contact", href: "/#contact" },
                            ].map((link, i) => (
                                <Link
                                    key={i}
                                    href={link.href}
                                    className="text-slate-400 hover:text-teal-400 transition-colors"
                                >
                                    {link.label}
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
                                Mon - Sat: 10 AM - 8 PM
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
    )
}
