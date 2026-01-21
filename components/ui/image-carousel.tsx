"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface CarouselProps {
    images: { src: string; alt: string }[]
    className?: string
    aspectRatio?: string
}

export function ImageCarousel({ images, className = "", aspectRatio = "aspect-[4/3]" }: CarouselProps) {
    const [index, setIndex] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length)
        }, 5000)
        return () => clearInterval(timer)
    }, [images.length])

    const nextSlide = () => setIndex((prev) => (prev + 1) % images.length)
    const prevSlide = () => setIndex((prev) => (prev - 1 + images.length) % images.length)

    return (
        <div className={`relative overflow-hidden group bg-white ${aspectRatio} ${className}`}>
            <AnimatePresence mode="wait">
                <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 flex items-center justify-center p-4"
                >
                    <div className="relative w-full h-full">
                        <Image
                            src={images[index].src}
                            alt={images[index].alt}
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <button
                onClick={(e) => { e.stopPropagation(); prevSlide(); }}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white shadow-md text-slate-800 opacity-0 group-hover:opacity-100 transition-opacity"
                aria-label="Previous image"
            >
                <ChevronLeft className="w-5 h-5" />
            </button>
            <button
                onClick={(e) => { e.stopPropagation(); nextSlide(); }}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white shadow-md text-slate-800 opacity-0 group-hover:opacity-100 transition-opacity"
                aria-label="Next image"
            >
                <ChevronRight className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                {images.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setIndex(i)}
                        className={`w-2 h-2 rounded-full transition-all ${i === index ? "bg-teal-600 w-6" : "bg-slate-300 hover:bg-slate-400"
                            }`}
                        aria-label={`Go to slide ${i + 1}`}
                    />
                ))}
            </div>
        </div>
    )
}
