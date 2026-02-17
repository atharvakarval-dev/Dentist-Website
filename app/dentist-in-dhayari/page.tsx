import { Metadata } from "next";
import { generateBreadcrumbSchema, SITE_URL } from "@/components/seo/schema-config";
import { Accordion } from "@/components/ui/accordion";

export const metadata: Metadata = {
    title: "Best Dentist in Dhayari, Pune | Dentistree Dental Clinic",
    description:
        "Top dentist near Dhayari, Pune. Visit Dentistree Dental Clinic for affordable, expert dental treatment – implants, braces, root canal, teeth whitening & more.",
    alternates: {
        canonical: `${SITE_URL}/dentist-in-dhayari`,
    },
    openGraph: {
        title: "Best Dentist in Dhayari, Pune | Dentistree Dental Clinic",
        description:
            "Top dentist near Dhayari, Pune. Expert dental treatment – implants, braces, root canal. Book your appointment now!",
        url: `${SITE_URL}/dentist-in-dhayari`,
    },
};

export default function DhayariPage() {
    const breadcrumb = generateBreadcrumbSchema([
        { name: "Home", url: "" },
        { name: "Dentist in Dhayari", url: "/dentist-in-dhayari" },
    ]);

    const faqs = [
        {
            id: "faq-1",
            trigger: "How close is Nanded City to Dhayari?",
            content: "Nanded City is directly adjacent to Dhayari. Our clinic is very easy to reach, just a short 5-10 minute trip for most Dhayari residents."
        },
        {
            id: "faq-2",
            trigger: "Do you have specialists for kids?",
            content: "Yes, our pediatric dental experts are trained to handle children's dental needs with patience and care, making us a favorite among families in Dhayari."
        },
        {
            id: "faq-3",
            trigger: "Are the dental treatments painful?",
            content: "We prioritize pain-free dentistry using the latest aesthetics and gentle techniques to ensure your comfort during every procedure."
        },
        {
            id: "faq-4",
            trigger: "How can I book an appointment?",
            content: "You can book easily by calling us or using the book appointment button on this page. We welcome patients from all over Dhayari."
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
                    <h1 className="text-4xl font-bold mb-6 text-dental-charcoal">Best Dentist in Dhayari, Pune</h1>
                    <p className="mb-6">
                        Welcome to <strong>Dentistree Dental Clinic</strong> — your trusted
                        dental care partner near <strong>Dhayari, Pune</strong>. Whether you
                        need a routine check-up, teeth whitening, dental implants, or braces,
                        our expert team is here to give you a healthy, confident smile just a short distance from Dhayari.
                    </p>
                    <a href="/contact" className="inline-block bg-dental-teal text-white font-bold py-3 px-6 rounded-lg hover:bg-teal-700 transition">Book Appointment</a>
                </section>

                {/* ── Why Choose Us ─────────────────────────────────── */}
                <section className="mt-12">
                    <h2 className="text-2xl font-bold mb-4 text-dental-charcoal">Why We're the Top Dentist Near Dhayari</h2>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>⭐ 4.9-star rated clinic with 100+ happy patients</li>
                        <li>🦷 Experienced & qualified dental team</li>
                        <li>🏥 State-of-the-art equipment & sterilisation protocols</li>
                        <li>💰 Affordable pricing with EMI options</li>
                        <li>📍 Conveniently located near Dhayari and Sinhagad Road</li>
                        <li>📅 Flexible timings – Mon to Sun</li>
                    </ul>
                </section>

                {/* ── Services ─────────────────────────────────────── */}
                <section className="mt-12">
                    <h2 className="text-2xl font-bold mb-4 text-dental-charcoal">Our Dental Services for Dhayari Residents</h2>
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
                    <h2 className="text-2xl font-bold mb-4 text-dental-charcoal">Serving Dhayari & Surrounding Areas</h2>
                    <p className="mb-4">
                        Our dental clinic is centrally located in <strong>Nanded City</strong>, offering easy access for patients from{" "}
                        <strong>Dhayari, Shivne, Sinhagad Road, Narhe, Ambegaon, and Katraj</strong>. We are the preferred dental clinic for Dhayari residents.
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
                    <h2 className="text-2xl font-bold mb-6 text-dental-charcoal">Frequently Asked Questions</h2>
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
