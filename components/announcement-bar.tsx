"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Calendar, Sparkles } from "lucide-react"

export function AnnouncementBar() {
    const [isVisible, setIsVisible] = useState(true)
    const [messageIndex, setMessageIndex] = useState(0)

    const messages = [
        {
            text: "Accepting New Patients for March 2026",
            icon: <Calendar className="w-4 h-4" />
        }
    ]

    useEffect(() => {
        if (messages.length <= 1) return

        const timer = setInterval(() => {
            setMessageIndex((prev) => (prev + 1) % messages.length)
        }, 5000)
        return () => clearInterval(timer)
    }, [messages.length])

    if (!isVisible) return null

    // Safety fallback for HMR or race conditions
    const currentMessage = messages[messageIndex] || messages[0]

    return (
        <AnimatePresence>
            <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="bg-dental-teal text-white relative z-[60]"
            >
                <div className="container px-4 py-2.5 flex items-center justify-center relative">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={messageIndex}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="flex items-center gap-2 text-xs md:text-sm font-medium tracking-wide"
                        >
                            {currentMessage.icon}
                            <span>{currentMessage.text}</span>
                        </motion.div>
                    </AnimatePresence>

                    <button
                        onClick={() => setIsVisible(false)}
                        className="absolute right-4 p-1 hover:bg-white/10 rounded-full transition-colors"
                        aria-label="Close announcement"
                    >
                        <X className="w-3 h-3 md:w-4 md:h-4 opacity-80" />
                    </button>
                </div>
            </motion.div>
        </AnimatePresence>
    )
}
