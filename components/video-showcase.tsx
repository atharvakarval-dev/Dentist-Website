"use client"

import { motion } from "framer-motion"
import { Video } from "lucide-react"

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
    },
}

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1,
        },
    },
}

const videos = [
    {
        order: 1,
        src: "/assets/clinic-video-1.mp4",
        title: "Advanced Facilities",
        description: "State-of-the-art equipment for precise treatments."
    },
    {
        order: 2,
        src: "/assets/clinic-video-2.mp4",
        title: "Patient Comfort",
        description: "Designed for a relaxing and anxiety-free experience."
    },
    {
        order: 3,
        src: "/assets/clinic-video-3.mp4",
        title: "Modern Clinic Tour",
        description: "A walk through our hygiene-focused treatment areas."
    }
]

export function VideoShowcase() {
    return (
        <section className="py-20 md:py-28 bg-white relative overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-50/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-50/50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

            <div className="container px-4 md:px-6 relative z-10">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 rounded-full bg-teal-50 px-4 py-2 border border-teal-100 mb-6">
                        <Video className="h-4 w-4 text-teal-600" />
                        <span className="text-sm font-medium text-teal-700">Virtual Tour</span>
                    </motion.div>

                    <motion.h2 variants={fadeInUp} className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-slate-800 mb-6">
                        Inside Dentistree
                    </motion.h2>

                    <motion.p variants={fadeInUp} className="text-lg text-slate-600 leading-relaxed">
                        Take a closer look at our modern facilities and the technology we use to create beautiful smiles every day.
                    </motion.p>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                    className="grid md:grid-cols-3 gap-8"
                >
                    {videos.map((video) => (
                        <motion.div
                            key={video.order}
                            variants={fadeInUp}
                            className="group relative bg-[#faf8f5] rounded-3xl overflow-hidden border border-slate-100 shadow-lg hover:shadow-2xl transition-all duration-500"
                        >
                            {/* Video Container */}
                            <div className="relative aspect-[9/16] md:aspect-[3/4] lg:aspect-[9/16] overflow-hidden bg-slate-100">
                                <video
                                    src={video.src}
                                    controls
                                    playsInline
                                    preload="metadata"
                                    className="w-full h-full object-cover"
                                    aria-label={video.title}
                                />
                            </div>

                            {/* Text Content */}
                            <div className="p-6 relative">
                                <div className="absolute inset-0 bg-gradient-to-t from-white/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                                <h3 className="relative z-10 font-display text-xl font-semibold text-slate-800 mb-2 group-hover:text-teal-700 transition-colors">
                                    {video.title}
                                </h3>
                                <p className="relative z-10 text-slate-600 text-sm leading-relaxed">
                                    {video.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
