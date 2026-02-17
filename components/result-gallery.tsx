"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence, useInView } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ResultItem {
    imageSrc: string
    description: string
    category?: string
}

const results: ResultItem[] = [
    {
        imageSrc: "/assets/client-5.png",
        description: "Teeth cleaning result",
        category: "Hygiene",
    },
    {
        imageSrc: "/assets/client-6.png",
        description: "Teeth cleaning result",
        category: "Hygiene",
    },
    {
        imageSrc: "/assets/client-7.png",
        description: "Front teeth spacing Treatment",
        category: "Cosmetic",
    },
    {
        imageSrc: "/assets/client-8.png",
        description: "Front teeth spacing Treatment",
        category: "Cosmetic",
    },
    {
        imageSrc: "/assets/client-9.jpeg",
        description: "Front teeth spacing Treatment",
        category: "Cosmetic",
    },
]

export function ResultGallery() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const containerRef = useRef<HTMLDivElement>(null)
    const isInView = useInView(containerRef, { once: true, amount: 0.2 })

    // Auto-advance carousel
    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide()
        }, 5000)
        return () => clearInterval(timer)
    }, [currentIndex])

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % results.length)
    }

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + results.length) % results.length)
    }

    const goToSlide = (index: number) => {
        setCurrentIndex(index)
    }

    return (
        <section ref={containerRef} className="py-20 md:py-28 bg-[#faf8f5] overflow-hidden">
            <div className="container px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 rounded-full bg-teal-50 px-4 py-2 border border-teal-100 mb-6"
                    >
                        <Sparkles className="h-4 w-4 text-teal-600" />
                        <span className="text-sm font-medium text-teal-700">Real Transformations</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-slate-800 mb-6"
                    >
                        See Our Patient Results
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg text-slate-600"
                    >
                        Witness the transformative power of our dental treatments. From routine cleanings to complex cosmetic procedures.
                    </motion.p>
                </div>

                <div className="relative max-w-5xl mx-auto">
                    {/* Main Carousel Display */}
                    <div className="relative aspect-square md:aspect-[16/9] lg:aspect-[2.4/1] rounded-[2rem] overflow-hidden shadow-2xl bg-white border-4 border-white">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, scale: 1.05 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.7 }}
                                className="absolute inset-0 flex items-center justify-center bg-slate-100"
                            >
                                {/* Background blurred image for ambiance */}
                                <div className="absolute inset-0 overflow-hidden">
                                    <Image
                                        src={results[currentIndex].imageSrc}
                                        alt={results[currentIndex].description}
                                        fill
                                        className="object-cover blur-2xl opacity-20"
                                    />
                                </div>

                                {/* Main Image */}
                                <div className="relative h-full w-full flex items-center justify-center p-4 md:p-8">
                                    <div className="relative h-full w-full max-w-4xl rounded-xl overflow-hidden shadow-lg">
                                        <Image
                                            src={results[currentIndex].imageSrc}
                                            alt={results[currentIndex].description}
                                            fill
                                            className="object-contain" // Changed to contain to show full image without cropping
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Navigation Arrows */}
                        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-2 md:px-4 z-20 pointer-events-none">
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={prevSlide}
                                className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white/40 hover:text-white pointer-events-auto transition-transform hover:scale-110 active:scale-95"
                            >
                                <ChevronLeft className="h-6 w-6" />
                                <span className="sr-only">Previous result</span>
                            </Button>
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={nextSlide}
                                className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white/40 hover:text-white pointer-events-auto transition-transform hover:scale-110 active:scale-95"
                            >
                                <ChevronRight className="h-6 w-6" />
                                <span className="sr-only">Next result</span>
                            </Button>
                        </div>
                    </div>

                    {/* Caption Below Image */}
                    <div className="mt-6 text-center">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ y: 10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -10, opacity: 0 }}
                                transition={{ duration: 0.4 }}
                            >
                                <div className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-teal-100/50 text-teal-700 text-xs md:text-sm font-medium mb-3">
                                    {results[currentIndex].category}
                                </div>
                                <h3 className="text-xl md:text-2xl font-display font-semibold text-slate-800">
                                    {results[currentIndex].description}
                                </h3>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Thumbnails / Indicators */}
                    <div className="mt-8 flex justify-center gap-3">
                        {results.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex
                                    ? "w-8 bg-teal-600"
                                    : "w-2 bg-slate-300 hover:bg-teal-300"
                                    }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
