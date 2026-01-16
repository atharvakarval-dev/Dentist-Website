"use client";

import { useState } from "react";

export default function ContactPage() {
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Thank you for reaching out! We will contact you shortly to schedule your appointment.");
        setFormData({ name: '', email: '', phone: '', message: '' });
    };

    return (
        <div className="bg-slate-50 min-h-screen">
            {/* Header */}
            <section className="bg-gradient-to-br from-primary/10 to-emerald-50 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl font-bold text-slate-900 mb-4">Book Your Appointment</h1>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Ready for a healthier, brighter smile? Schedule your visit today and experience trusted dental care at Dentistree Dental Clinic.
                    </p>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Contact Info */}
                    <div className="lg:col-span-1 space-y-6">
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                            <h3 className="text-xl font-bold text-slate-900 mb-6">📍 Clinic Location</h3>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="font-semibold text-slate-900">Address</h4>
                                    <p className="text-slate-600">Nanded City, Sinhagad Road<br />Pune, Maharashtra</p>
                                </div>

                                <div>
                                    <h4 className="font-semibold text-slate-900">📞 Phone</h4>
                                    <p className="text-slate-600">
                                        <a href="tel:+919876543210" className="hover:text-primary transition-colors font-medium">
                                            +91 98765 43210
                                        </a>
                                    </p>
                                </div>

                                <div>
                                    <h4 className="font-semibold text-slate-900">📧 Email</h4>
                                    <p className="text-slate-600">
                                        <a href="mailto:info@dentistreedental.com" className="hover:text-primary transition-colors">
                                            info@dentistreedental.com
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                            <h3 className="text-xl font-bold text-slate-900 mb-4">🕒 Opening Hours</h3>
                            <ul className="space-y-2 text-slate-600">
                                <li className="flex justify-between">
                                    <span>Monday - Friday</span>
                                    <span className="font-medium">9:00 AM - 8:00 PM</span>
                                </li>
                                <li className="flex justify-between">
                                    <span>Saturday</span>
                                    <span className="font-medium">9:00 AM - 6:00 PM</span>
                                </li>
                                <li className="flex justify-between">
                                    <span>Sunday</span>
                                    <span className="font-medium text-red-500">Closed</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-emerald-50 border border-emerald-100 p-6 rounded-xl">
                            <h3 className="text-lg font-bold text-emerald-800 mb-2">🚨 Emergency Dental Care</h3>
                            <p className="text-emerald-700 text-sm">
                                For dental emergencies, please call us immediately. We prioritize same-day appointments for urgent cases.
                            </p>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-2">
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
                            <h3 className="text-2xl font-bold text-slate-900 mb-2">Send us a Message</h3>
                            <p className="text-slate-600 mb-6">Fill out the form below and we will get back to you shortly.</p>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Full Name *</label>
                                        <input
                                            type="text"
                                            id="name"
                                            required
                                            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                            placeholder="Your full name"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">Phone Number *</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            required
                                            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                            placeholder="+91 XXXXX XXXXX"
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                        placeholder="your@email.com"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">How can we help you? *</label>
                                    <textarea
                                        id="message"
                                        rows={4}
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                                        placeholder="Describe your dental concern or the service you're interested in..."
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    ></textarea>
                                </div>

                                <div className="pt-2">
                                    <button type="submit" className="w-full md:w-auto bg-primary text-white font-bold py-3 px-8 rounded-lg hover:bg-sky-600 transition-colors shadow-md">
                                        Request Appointment
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
