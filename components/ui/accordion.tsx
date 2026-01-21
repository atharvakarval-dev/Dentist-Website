"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

interface AccordionProps {
    items: {
        id: string
        trigger: React.ReactNode
        content: React.ReactNode
    }[]
    className?: string
}

export function Accordion({ items, className }: AccordionProps) {
    const [openItem, setOpenItem] = React.useState<string | null>(null)

    return (
        <div className={cn("space-y-4", className)}>
            {items.map((item) => (
                <div
                    key={item.id}
                    className={cn(
                        "rounded-2xl border transition-all duration-300 overflow-hidden",
                        openItem === item.id
                            ? "bg-white border-teal-100 shadow-lg shadow-teal-900/5"
                            : "bg-white border-slate-100 hover:border-slate-200"
                    )}
                >
                    <button
                        onClick={() => setOpenItem(openItem === item.id ? null : item.id)}
                        className="flex w-full items-center justify-between p-6 text-left"
                    >
                        <span className={cn(
                            "text-lg font-medium transition-colors",
                            openItem === item.id ? "text-dental-teal" : "text-slate-800"
                        )}>
                            {item.trigger}
                        </span>
                        <ChevronDown
                            className={cn(
                                "h-5 w-5 text-slate-400 transition-transform duration-300",
                                openItem === item.id && "rotate-180 text-dental-teal"
                            )}
                        />
                    </button>
                    <AnimatePresence initial={false}>
                        {openItem === item.id && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                            >
                                <div className="px-6 pb-6 pt-0 text-slate-600 leading-relaxed">
                                    {item.content}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            ))}
        </div>
    )
}
