"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Smile, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
}

const itemFadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 },
    },
}

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [scrollY, setScrollY] = useState(0)
    const pathname = usePathname()
    const isHome = pathname === "/"

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const getLinkHref = (item: string) => {
        if (item === "Home") return "/"
        if (item === "Services") return "/services"
        if (item === "About") return "/about"
        if (item === "Why Us") return "/why-us"
        if (item === "Contact") return "/contact"
        return "/"
    }

    return (
        <>
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                className={`sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 ${scrollY > 50 ? "shadow-md" : ""
                    }`}
            >
                <div className="container flex h-20 items-center justify-between px-4 md:px-6">
                    <Link href="/" className="flex items-center gap-2">
                        <motion.div
                            whileHover={{ rotate: 5, scale: 1.1 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground"
                        >
                            <Smile className="h-6 w-6" />
                        </motion.div>
                        <div className="flex flex-col">
                            <span className="text-xl font-bold leading-none text-primary">Dentistree</span>
                            <span className="text-xs font-medium text-muted-foreground">Dental Clinic</span>
                        </div>
                    </Link>
                    <nav className="hidden md:flex gap-6">
                        {["Home", "Services", "About", "Why Us", "Contact"].map((item) => (
                            <Link
                                key={item}
                                href={getLinkHref(item)}
                                className={`text-sm font-medium transition-colors hover:text-primary ${pathname === getLinkHref(item) ? "text-primary font-semibold" : "text-muted-foreground"
                                    }`}
                            >
                                {item}
                            </Link>
                        ))}
                    </nav>
                    <div className="hidden md:flex items-center gap-4">
                        <Button size="sm" className="rounded-full px-6" asChild>
                            <Link href="/contact">Book Appointment</Link>
                        </Button>
                    </div>
                    <button className="flex md:hidden" onClick={toggleMenu}>
                        <Menu className="h-6 w-6" />
                        <span className="sr-only">Toggle menu</span>
                    </button>
                </div>
            </motion.header>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-white md:hidden"
                    >
                        <div className="container flex h-20 items-center justify-between px-4">
                            <Link href="/" className="flex items-center gap-2" onClick={toggleMenu}>
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                                    <Smile className="h-6 w-6" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-xl font-bold leading-none text-primary">Dentistree</span>
                                    <span className="text-xs font-medium text-muted-foreground">Dental Clinic</span>
                                </div>
                            </Link>
                            <button onClick={toggleMenu}>
                                <X className="h-6 w-6" />
                                <span className="sr-only">Close menu</span>
                            </button>
                        </div>
                        <motion.nav
                            variants={staggerContainer}
                            initial="hidden"
                            animate="visible"
                            className="container grid gap-4 px-4 pb-8 pt-6"
                        >
                            {["Home", "Services", "About", "Why Us", "Contact"].map((item, index) => (
                                <motion.div key={index} variants={itemFadeIn}>
                                    <Link
                                        href={getLinkHref(item)}
                                        className={`flex items-center justify-between rounded-md p-2 text-lg font-medium hover:bg-accent ${pathname === getLinkHref(item) ? "text-primary" : ""
                                            }`}
                                        onClick={toggleMenu}
                                    >
                                        {item}
                                        <ChevronRight className="h-4 w-4" />
                                    </Link>
                                </motion.div>
                            ))}
                            <motion.div variants={itemFadeIn} className="pt-4">
                                <Button className="w-full rounded-full" size="lg" asChild onClick={toggleMenu}>
                                    <Link href="/contact">Book Appointment</Link>
                                </Button>
                            </motion.div>
                        </motion.nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
