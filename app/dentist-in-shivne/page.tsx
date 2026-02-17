import { Metadata } from "next";
import { generateBreadcrumbSchema, SITE_URL } from "@/components/seo/schema-config";
import { Accordion } from "@/components/ui/accordion";

export const metadata: Metadata = {
    title: "Best Dentist in Shivne, Pune | Dentistree Dental Clinic",
    description:
        "Top dentist near Shivne, Pune. Dentistree Dental Clinic provides expert dental care – implants, braces, teeth whitening, root canal & more. Book your appointment today!",
    alternates: {
        canonical: `${SITE_URL}/dentist-in-shivne`,
    },
    openGraph: {
        title: "Best Dentist in Shivne, Pune | Dentistree Dental Clinic",
        description:
            "Top dentist near Shivne, Pune. Provide expert dental care – implants, braces, teeth whitening. Book your appointment today!",
        url: `${SITE_URL}/dentist-in-shivne`,
    },
};

export default function ShivnePage() {
    const breadcrumb = generateBreadcrumbSchema([
        { name: "Home", url: "" },
        { name: "Dentist in Shivne", url: "/dentist-in-shivne" },
    ]);

    const faqs = [
        {
            id: "faq-1",
            trigger: "How far is the clinic from Shivne?",
            content: "We are located in Nanded City, just a short 5-10 minute drive from Shivne via the main road. Very convenient for regular dental visits."
        },
        {
            id: "faq-2",
            trigger: "Do you offer dental implants for Shivne residents?",
            content: "Yes, we provide state-of-the-art dental implants. Many of our patients travel from Shivne for our expert implant services."
        },
        {
            id: "faq-3",
            trigger: "Can I get an appointment on weekends?",
            content: "Absolutely! We are open on Saturdays (10 AM - 8 PM) and Sundays (10 AM - 2 PM), making it easy for working professionals from Shivne."
        },
        {
            id: "faq-4",
            trigger: "Do you treat children?",
            content: "Yes, we have a specialized pediatric dentistry department to take care of your child's dental health with utmost care."
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
                    <h1 className="text-4xl font-bold mb-6 text-dental-charcoal">Best Dentist in Shivne, Pune</h1>
                    <p className="mb-6">
                        Welcome to <strong>Dentistree Dental Clinic</strong> — your trusted
                        dental care partner near <strong>Shivne, Pune</strong>. Whether you
                        need a routine check-up, teeth whitening, dental implants, or braces,
                        our expert team is here to give you a healthy, confident smile just a short drive from Shivne.
                    </p>
                    <a href="/contact" className="inline-block bg-dental-teal text-white font-bold py-3 px-6 rounded-lg hover:bg-teal-700 transition">Book Appointment</a>
                </section>

                {/* ── Why Choose Us ─────────────────────────────────── */}
                <section className="mt-12">
                    <h2 className="text-2xl font-bold mb-4 text-dental-charcoal">Why We're the Top Dentist Near Shivne</h2>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>⭐ 4.9-star rated clinic with 100+ happy patients</li>
                        <li>🦷 Experienced & qualified dental team</li>
                        <li>🏥 State-of-the-art equipment & sterilisation protocols</li>
                        <li>💰 Affordable pricing with EMI options</li>
                        <li>📍 Conveniently located in Nanded City, easily accessible from Shivne</li>
                        <li>📅 Flexible timings – Mon to Sun</li>
                    </ul>
                </section>

                {/* ── Services ─────────────────────────────────────── */}
                <section className="mt-12">
                    <h2 className="text-2xl font-bold mb-4 text-dental-charcoal">Our Dental Services for Shivne Residents</h2>
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
                    <h2 className="text-2xl font-bold mb-4 text-dental-charcoal">Easily Accessible from Shivne & Surrounding Areas</h2>
                    <p className="mb-4">
                        Our dental clinic is centrally located in <strong>Nanded City</strong>, making it a convenient choice for patients from{" "}
                        <strong>Shivne, Sinhagad Road, Dhayari, Narhe, Ambegaon, and Katraj</strong>. One of the best dentists near Shivne is just a few minutes away.
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
                    <h2 className="text-2xl font-bold mb-6 text-dental-charcoal">Freqently Asked Questions by Shivne Patients</h2>
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
