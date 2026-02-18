
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="bg-slate-900 text-white pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="inline-block mb-4">
                            <div className="relative h-16 w-48">
                                <Image
                                    src="/assets/logo.png"
                                    alt="Dentistree Dental Clinic - Best Dentist in Nanded City"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </Link>
                        <p className="text-slate-400 mb-6 max-w-sm">
                            Comprehensive Dental Care for Kids, Adults & Seniors. Prevention • Restoration • Aesthetics • Implants • Orthodontics
                        </p>
                        <div className="flex gap-4">
                            {/* Social Links placeholders? */}
                        </div>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><Link href="/" className="text-slate-400 hover:text-dental-teal transition-colors">Home</Link></li>
                            <li><Link href="/services" className="text-slate-400 hover:text-dental-teal transition-colors">Services</Link></li>
                            <li><Link href="/about" className="text-slate-400 hover:text-dental-teal transition-colors">About Us</Link></li>
                            <li><Link href="/contact" className="text-slate-400 hover:text-dental-teal transition-colors">Contact</Link></li>
                        </ul>
                        <div className="mt-6">
                            <Link
                                href="/reviews"
                                target="_blank"
                                className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white text-sm font-medium rounded-lg transition-colors border border-slate-700 hover:border-dental-teal"
                            >
                                <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>
                                Review us on Google
                            </Link>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-white">Areas We Serve</h4>
                        <ul className="space-y-2">
                            <li><Link href="/dentist-in-nanded-city" className="text-slate-400 hover:text-dental-teal transition-colors">Dentist in Nanded City</Link></li>
                            <li><Link href="/dentist-in-sinhagad-road" className="text-slate-400 hover:text-dental-teal transition-colors">Dentist on Sinhagad Road</Link></li>
                            <li><Link href="/dentist-in-shivne" className="text-slate-400 hover:text-dental-teal transition-colors">Dentist in Shivne</Link></li>
                            <li><Link href="/dentist-in-dhayari" className="text-slate-400 hover:text-dental-teal transition-colors">Dentist in Dhayari</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-white">Contact Us</h4>
                        <address className="not-italic text-slate-400 space-y-3">
                            <p>
                                Ingale Plaza, Shop No. 1,<br />
                                Next to Uttam Sweets, Nanded City Road,<br />
                                Sinhagad Road, Pune 411068
                            </p>
                            <div className="flex flex-col gap-1">
                                <a href="tel:+918237156777" className="hover:text-dental-teal transition-colors font-medium text-white block">
                                    +91 82371 56777
                                </a>
                                <a href="mailto:info@dentistreedental.com" className="hover:text-dental-teal transition-colors block">
                                    info@dentistreedental.com
                                </a>
                            </div>
                        </address>
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
