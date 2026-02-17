import { Metadata } from "next";
import { generateBreadcrumbSchema, SITE_URL } from "@/components/seo/schema-config";
import { Accordion } from "@/components/ui/accordion";

export const metadata: Metadata = {
    title: "Best Dentist on Sinhagad Road, Pune | Dentistree Dental Clinic",
    description:
        "Looking for a dentist on Sinhagad Road, Pune? Dentistree Dental Clinic is your nearest top-rated dental clinic. Expert care, modern equipment. Book now!",
    alternates: {
        canonical: `${SITE_URL}/dentist-in-sinhagad-road`,
    },
    openGraph: {
        title: "Best Dentist on Sinhagad Road, Pune | Dentistree Dental Clinic",
        description:
            "Top-rated dental clinic on Sinhagad Road, Pune. Expert dentists, modern technology, affordable treatment. Book your appointment now!",
        url: `${SITE_URL}/dentist-in-sinhagad-road`,
    },
};

export default function SinhagadRoadPage() {
    const breadcrumb = generateBreadcrumbSchema([
        { name: "Home", url: "" },
        { name: "Dentist in Sinhagad Road", url: "/dentist-in-sinhagad-road" },
    ]);

    const faqs = [
        {
            id: "faq-1",
            trigger: "Is this clinic located directly on Sinhagad Road?",
            content: "We are located in Nanded City, which is just off Sinhagad Road near the Nanded City Circle. It's a prime location with easy access and parking."
        },
        {
            id: "faq-2",
            trigger: "Do you provide Root Canal Treatment on Sinhagad Road?",
            content: "Yes, we specialize in painless Root Canal Treatments. Our clinic is equipped with the latest rotary endodontic technology."
        },
        {
            id: "faq-3",
            trigger: "Are you open on Sundays?",
            content: "Yes, understanding the busy schedules of Sinhagad Road residents, we are open on Sundays from 10 AM to 2 PM."
        },
        {
            id: "faq-4",
            trigger: "Do you accept insurance?",
            content: "We accept various payment modes. For specific insurance queries, please call us to check if your provider is covered."
        }
    ];

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
            />

            <main className="container mx-auto px-4 py-12 prose lg:prose-xl">
                {/* ── Hero ─────────────────────────────────────────── */}
                <section>
                    <h1 className="text-4xl font-bold mb-6 text-dental-charcoal">Best Dentist on Sinhagad Road, Pune</h1>
                    <p className="mb-6">
                        Welcome to <strong>Dentistree Dental Clinic</strong> — your trusted
                        dental care partner near <strong>Sinhagad Road, Pune</strong>. Whether you
                        need a routine check-up, teeth whitening, dental implants, or braces,
                        our expert team is here to give you a healthy, confident smile just minutes from Sinhagad Road.
                    </p>
                    <a href="/contact" className="inline-block bg-dental-teal text-white font-bold py-3 px-6 rounded-lg hover:bg-teal-700 transition">Book Appointment</a>
                </section>

                {/* ── Why Choose Us ─────────────────────────────────── */}
                <section className="mt-12">
                    <h2 className="text-2xl font-bold mb-4 text-dental-charcoal">Why We're the Top Dentist on Sinhagad Road</h2>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>⭐ 4.9-star rated clinic with 100+ happy patients</li>
                        <li>🦷 Experienced & qualified dental team</li>
                        <li>🏥 State-of-the-art equipment & sterilisation protocols</li>
                        <li>💰 Affordable pricing with EMI options</li>
                        <li>📍 Conveniently located near Sinhagad Road</li>
                        <li>📅 Flexible timings – Mon to Sun</li>
                    </ul>
                </section>

                {/* ── Services ─────────────────────────────────────── */}
                <section className="mt-12">
                    <h2 className="text-2xl font-bold mb-4 text-dental-charcoal">Our Dental Services on Sinhagad Road</h2>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Teeth Cleaning & Scaling</strong> – Remove plaque & tartar professionally</li>
                        <li><strong>Teeth Whitening</strong> – Brighten your smile in just one visit</li>
                        <li><strong>Dental Implants</strong> – Permanent, natural-looking tooth replacement</li>
                        <li><strong>Braces & Aligners</strong> – Metal, ceramic & invisible aligners</li>
                        <li><strong>Root Canal Treatment</strong> – Save your tooth, eliminate pain</li>
                        <li><strong>Pediatric Dentistry</strong> – Gentle dental care for children</li>
                        <li><strong>Smile Makeover</strong> – Transform your smile completely</li>
                        <li><strong>Tooth Extraction</strong> – Safe & painless extractions</li>
                    </ul>
                </section>

                {/* ── Location Context (for local SEO) ─────────────── */}
                <section className="mt-12 bg-gray-50 p-6 rounded-xl">
                    <h2 className="text-2xl font-bold mb-4 text-dental-charcoal">Easily Accessible from Sinhagad Road & Surrounding Areas</h2>
                    <p className="mb-4">
                        Our dental clinic is conveniently located in <strong>Nanded City</strong>, making it a prime choice for patients from{" "}
                        <strong>Sinhagad Road, Shivne, Dhayari, Narhe, Ambegaon, and Katraj</strong>. We are the top dentist near you.
                    </p>
                    <p className="mb-6">
                        <strong>Address:</strong> Shop No. 1, Nanded City, Near Sinhagad Road,
                        Pune – 411041
                    </p>
                    {/* Google Maps Embed */}
                    <div className="w-full h-64 md:h-80 rounded-lg overflow-hidden shadow-md border border-gray-200">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.5761921379465!2d73.8123456!3d18.4578901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2956037750833%3A0x6b7596567222471!2sDentistree%20Dental%20Clinic!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Dentistree Dental Clinic Location"
                        ></iframe>
                    </div>
                </section>

                {/* ── FAQ Section ──────────────────────────────────── */}
                <section className="mt-12">
                    <h2 className="text-2xl font-bold mb-6 text-dental-charcoal">Common Questions</h2>
                    <Accordion items={faqs} />
                </section>

                {/* ── CTA ──────────────────────────────────────────── */}
                <section className="mt-12 text-center">
                    <h2 className="text-3xl font-bold mb-6 text-dental-charcoal">Book Your Appointment Today</h2>
                    <p className="mb-8 text-lg">
                        Don&apos;t wait for dental problems to worsen. Visit Dentistree Dental
                        Clinic today or call us to book your appointment.
                    </p>
                    <div className="flex gap-4 justify-center">
                        <a href="tel:+918237156777" className="bg-dental-teal text-white font-bold py-3 px-6 rounded-lg hover:bg-teal-700 transition">Call Us Now</a>
                        <a href="/contact" className="border-2 border-dental-teal text-dental-teal font-bold py-3 px-6 rounded-lg hover:bg-teal-50 transition">Book Online</a>
                    </div>
                </section>
            </main>
        </>
    );
}
