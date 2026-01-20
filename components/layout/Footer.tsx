
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="bg-slate-900 text-white pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="inline-block mb-4">
                            <div className="relative h-16 w-48">
                                <Image
                                    src="/assests/logo.png"
                                    alt="Dentistree Logo"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </Link>
                        <p className="text-slate-400 mb-4">
                            Comprehensive Dental Care for Kids, Adults & Seniors. Prevention • Restoration • Aesthetics • Implants • Orthodontics
                        </p>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><Link href="/" className="text-slate-400 hover:text-primary transition-colors">Home</Link></li>
                            <li><Link href="/services" className="text-slate-400 hover:text-primary transition-colors">Services</Link></li>
                            <li><Link href="/about" className="text-slate-400 hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link href="/contact" className="text-slate-400 hover:text-primary transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-white">Services</h4>
                        <ul className="space-y-2">
                            <li><span className="text-slate-400">Preventive Dentistry</span></li>
                            <li><span className="text-slate-400">Root Canal Treatment</span></li>
                            <li><span className="text-slate-400">Dental Implants</span></li>
                            <li><span className="text-slate-400">Orthodontics & Braces</span></li>
                            <li><span className="text-slate-400">Pediatric Dentistry</span></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-white">Contact Us</h4>
                        <ul className="space-y-2 text-slate-400">
                            <li>Nanded City, Sinhagad Road</li>
                            <li>Pune, Maharashtra</li>
                            <li className="pt-2">
                                <a href="tel:+918237156777" className="hover:text-primary transition-colors">+91 82371 56777</a>
                            </li>
                            <li>
                                <a href="mailto:info@dentistreedental.com" className="hover:text-primary transition-colors">info@dentistreedental.com</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 text-center text-slate-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} Dentistree Dental Clinic. All rights reserved.</p>
                    <p className="mt-2">Led by Dr. Poonam Bambarkar (BDS) | 15+ Years of Clinical Experience</p>
                </div>
            </div>
        </footer>
    );
}
