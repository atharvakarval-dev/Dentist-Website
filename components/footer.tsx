import Link from "next/link"
import { Smile } from "lucide-react"

export function Footer() {
    return (
        <footer className="bg-slate-900 text-slate-300 py-12 md:py-16">
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
                            <Link href="/services" className="hover:text-primary transition-colors">Services</Link>
                            <Link href="/#about" className="hover:text-primary transition-colors">About Us</Link>
                            <Link href="/#contact" className="hover:text-primary transition-colors">Contact</Link>
                            <Link href="/#contact" className="hover:text-primary transition-colors">Book Appointment</Link>
                        </nav>
                    </div>
                    <div>
                        <h4 className="font-bold text-white mb-4">Services</h4>
                        <nav className="flex flex-col gap-2 text-sm">
                            <Link href="/services" className="hover:text-primary transition-colors">Root Canal</Link>
                            <Link href="/services" className="hover:text-primary transition-colors">Implants</Link>
                            <Link href="/services" className="hover:text-primary transition-colors">Cosmetic Dentistry</Link>
                            <Link href="/services" className="hover:text-primary transition-colors">Pediatric Care</Link>
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
        </footer>
    )
}
