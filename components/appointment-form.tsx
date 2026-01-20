"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";

export function AppointmentForm() {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        treatment: "",
        date: "",
        time: "",
        notes: "",
    });

    const [minDate, setMinDate] = useState("");

    useEffect(() => {
        setMinDate(new Date().toISOString().split("T")[0]);
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { id, value } = e.target;
        setFormData((prev) => ({ ...prev, [id]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const whatsappNumber = "918237156777";

        // Format the date if it exists
        const formattedDate = formData.date ? new Date(formData.date).toLocaleDateString('en-GB') : 'Not specified';

        const text = `*New Appointment Request* 🦷

*Patient Details*
Name: ${formData.fullName}
Phone: ${formData.phone}
Email: ${formData.email || "Not provided"}

*Appointment Preferences*
Treatment: ${formData.treatment}
Date: ${formattedDate}
Time: ${formData.time}

*Notes*
${formData.notes || "None"}`;

        const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
        window.open(url, "_blank");
    };

    // Refined Input Styles for Premium Feel
    const inputClasses = "h-14 w-full border border-slate-200 bg-slate-50 rounded-xl px-4 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-slate-400 text-slate-800 text-base shadow-sm";
    const labelClasses = "text-sm font-semibold text-slate-600 mb-2 block ml-1";

    return (
        <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
            {/* Personal Details */}
            <div className="grid md:grid-cols-2 gap-5">
                <div className="space-y-1">
                    <Label htmlFor="fullName" className={labelClasses}>Full Name *</Label>
                    <Input
                        id="fullName"
                        required
                        className={inputClasses}
                        placeholder="Ex: John Doe"
                        value={formData.fullName}
                        onChange={handleChange}
                        suppressHydrationWarning
                    />
                </div>
                <div className="space-y-1">
                    <Label htmlFor="phone" className={labelClasses}>Phone Number *</Label>
                    <Input
                        type="tel"
                        id="phone"
                        required
                        className={inputClasses}
                        placeholder="Ex: +91 8237156777"
                        value={formData.phone}
                        onChange={handleChange}
                        suppressHydrationWarning
                    />
                </div>
            </div>

            <div className="space-y-1">
                <Label htmlFor="email" className={labelClasses}>Email Address (Optional)</Label>
                <Input
                    type="email"
                    id="email"
                    className={inputClasses}
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    suppressHydrationWarning
                />
            </div>

            {/* Appointment Details */}
            <div className="space-y-1">
                <Label htmlFor="treatment" className={labelClasses}>Treatment *</Label>
                <div className="relative">
                    <select
                        id="treatment"
                        required
                        className={`${inputClasses} appearance-none cursor-pointer bg-white`}
                        value={formData.treatment}
                        onChange={handleChange}
                        suppressHydrationWarning
                    >
                        <option value="" disabled>Select Treatment Type</option>
                        <option value="Tooth cleaning & Whitening">Tooth cleaning & Whitening</option>
                        <option value="Extraction and Replacement">Extraction and Replacement</option>
                        <option value="Fillings , Crowns & Bridges">Fillings , Crowns & Bridges</option>
                        <option value="Root Canal Treatment">Root Canal Treatment</option>
                        <option value="Full / Partial Denture">Full / Partial Denture</option>
                        <option value="Dental Implant">Dental Implant</option>
                        <option value="Braces Treatment">Braces Treatment</option>
                        <option value="Pediatric (Children) Dental Treatments">Pediatric (Children) Dental Treatments</option>
                        <option value="Other">Other</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
                <div className="space-y-1">
                    <Label htmlFor="date" className={labelClasses}>Preferred Date *</Label>
                    <Input
                        type="date"
                        id="date"
                        required
                        className={inputClasses}
                        value={formData.date}
                        onChange={handleChange}
                        min={minDate}
                        suppressHydrationWarning
                    />
                </div>
                <div className="space-y-1">
                    <Label htmlFor="time" className={labelClasses}>Preferred Time *</Label>
                    <div className="relative">
                        <select
                            id="time"
                            required
                            className={`${inputClasses} appearance-none cursor-pointer bg-white`}
                            value={formData.time}
                            onChange={handleChange}
                            suppressHydrationWarning
                        >
                            <option value="" disabled>Select Time Slot</option>
                            <option value="Morning (10AM - 1PM)">Morning (10AM - 1PM)</option>
                            <option value="Afternoon (1PM - 4PM)">Afternoon (1PM - 4PM)</option>
                            <option value="Evening (5PM - 9PM)">Evening (5PM - 9PM)</option>
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                    </div>
                </div>
            </div>

            <div className="space-y-1">
                <Label htmlFor="notes" className={labelClasses}>Additional Notes</Label>
                <Textarea
                    id="notes"
                    className="min-h-[120px] w-full border border-slate-200 bg-slate-50 rounded-xl p-4 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-base text-slate-800 placeholder:text-slate-400"
                    placeholder="Any specific questions or symptoms?"
                    value={formData.notes}
                    onChange={handleChange}
                    suppressHydrationWarning
                />
            </div>

            <Button
                className="w-full h-14 bg-gradient-to-r from-slate-900 to-slate-800 hover:from-slate-800 hover:to-slate-700 text-white rounded-xl shadow-lg shadow-slate-900/10 transition-all transform active:scale-[0.98] text-lg font-bold tracking-wide flex items-center justify-center gap-2 mt-4"
                type="submit"
                suppressHydrationWarning
            >
                Confirm Appointment
                <Send className="w-5 h-5 ml-1" />
            </Button>
        </form>
    );
}
