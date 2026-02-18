"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronRight, ArrowRight, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.08,
        },
    },
}

const itemFadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const },
    },
}

const navItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Why Us", href: "/why-us" },
    { name: "Contact", href: "/contact" },
]

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const [isVisible, setIsVisible] = useState(true)
    const lastScrollY = useRef(0)
    const pathname = usePathname()

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY

            // Determine if scrolled from top (for styling)
            setScrolled(currentScrollY > 20)

            // Determine scroll direction for visibility
            // We use a small buffer to prevent jitter
            if (currentScrollY < 10) {
                setIsVisible(true)
            } else if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
                // Scrolling down
                setIsVisible(false)
            } else if (currentScrollY < lastScrollY.current) {
                // Scrolling up
                setIsVisible(true)
            }

            lastScrollY.current = currentScrollY
        }

        window.addEventListener("scroll", handleScroll, { passive: true })
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    // Lock body scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "unset"
        }
        return () => {
            document.body.style.overflow = "unset"
        }
    }, [isMenuOpen])

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <>
            <div className={`fixed top-0 left-0 right-0 z-50 flex flex-col transition-transform duration-300 ${isVisible || isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>

                {/* Main Navbar */}
                <header
                    className={`w-full transition-colors duration-300 ${scrolled
                        ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100"
                        : "bg-[#faf8f5]/80 backdrop-blur-sm"
                        }`}
                >
                    <div className="container flex h-20 items-center justify-between px-4 md:px-6">
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-3 group">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                            >
                                <Image
                                    src="/assets/logo.png"
                                    alt="Dentistree Logo"
                                    width={50}
                                    height={50}
                                    className="object-contain"
                                    priority
                                />
                            </motion.div>
                            <div className="flex flex-col">
                                <span className="font-display text-xl font-semibold text-slate-800 group-hover:text-teal-700 transition-colors">
                                    Dentistree
                                </span>
                                <span className="text-[11px] font-medium text-slate-500 tracking-wide uppercase">
                                    Dental Clinic
                                </span>
                            </div>
                        </Link>

                        {/* Desktop Navigation */}
                        <nav className="hidden lg:flex items-center gap-1">
                            {navItems.map((item) => {
                                const isActive = pathname === item.href
                                return (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className="relative px-4 py-2 group"
                                    >
                                        <span className={`text-sm font-medium transition-colors ${isActive
                                            ? "text-teal-700"
                                            : "text-slate-600 group-hover:text-teal-600"
                                            }`}>
                                            {item.name}
                                        </span>
                                        {/* Active indicator */}
                                        {isActive && (
                                            <motion.div
                                                layoutId="navbar-active"
                                                className="absolute bottom-0 left-2 right-2 h-0.5 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full"
                                                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                            />
                                        )}
                                        {/* Hover indicator */}
                                        <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-teal-200 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform origin-center" />
                                    </Link>
                                )
                            })}
                        </nav>

                        {/* Desktop CTA */}
                        <div className="hidden lg:flex items-center gap-4">
                            <Link
                                href="tel:+918237156777"
                                className="flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-teal-600 transition-colors"
                            >
                                <div className="h-8 w-8 rounded-full bg-teal-50 flex items-center justify-center">
                                    <Phone className="h-4 w-4 text-teal-600" />
                                </div>
                                <span className="hidden xl:block">Call Us</span>
                            </Link>
                            <Button
                                size="sm"
                                className="rounded-full px-6 py-5 gradient-primary hover:opacity-90 shadow-sm hover:shadow-md transition-all"
                                asChild
                            >
                                <Link href="/contact" className="flex items-center gap-2">
                                    Book Appointment
                                    <ArrowRight className="h-4 w-4" />
                                </Link>
                            </Button>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="flex lg:hidden p-2 rounded-xl hover:bg-slate-100 transition-colors"
                            onClick={toggleMenu}
                            aria-label="Toggle menu"
                        >
                            <Menu className="h-6 w-6 text-slate-700" />
                        </button>
                    </div>
                </header>
            </div>

            {/* Mobile Menu - Moved OUTSIDE the transformed container to correct stacking context */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-[100] lg:hidden"
                    >
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
                            onClick={toggleMenu}
                        />

                        {/* Menu Panel */}
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            className="absolute right-0 top-0 h-full w-[85%] max-w-sm bg-white shadow-2xl flex flex-col"
                        >
                            {/* Mobile Header */}
                            <div className="flex items-center justify-between p-4 border-b border-slate-100 flex-shrink-0">
                                <Link href="/" className="flex items-center gap-2" onClick={toggleMenu}>
                                    <Image
                                        src="/assets/logo.png"
                                        alt="Dentistree Logo"
                                        width={40}
                                        height={40}
                                        className="object-contain"
                                    />
                                    <div className="flex flex-col">
                                        <span className="font-display text-lg font-semibold text-slate-800">
                                            Dentistree
                                        </span>
                                        <span className="text-[10px] font-medium text-slate-500 uppercase tracking-wide">
                                            Dental Clinic
                                        </span>
                                    </div>
                                </Link>
                                <button
                                    onClick={toggleMenu}
                                    className="p-2 rounded-xl hover:bg-slate-100 transition-colors"
                                    aria-label="Close menu"
                                >
                                    <X className="h-5 w-5 text-slate-600" />
                                </button>
                            </div>

                            {/* Mobile Navigation - Scrollable */}
                            <motion.nav
                                variants={staggerContainer}
                                initial="hidden"
                                animate="visible"
                                className="p-4 space-y-1 flex-1 overflow-y-auto"
                            >
                                {navItems.map((item) => {
                                    const isActive = pathname === item.href
                                    return (
                                        <motion.div key={item.name} variants={itemFadeIn}>
                                            <Link
                                                href={item.href}
                                                className={`flex items-center justify-between p-4 rounded-xl transition-all ${isActive
                                                    ? "bg-gradient-to-r from-teal-50 to-emerald-50 border border-teal-100"
                                                    : "hover:bg-slate-50"
                                                    }`}
                                                onClick={toggleMenu}
                                            >
                                                <span className={`text-base font-medium ${isActive ? "text-teal-700" : "text-slate-700"
                                                    }`}>
                                                    {item.name}
                                                </span>
                                                <ChevronRight className={`h-4 w-4 ${isActive ? "text-teal-500" : "text-slate-400"
                                                    }`} />
                                            </Link>
                                        </motion.div>
                                    )
                                })}
                            </motion.nav>

                            {/* Mobile CTA - Fixed at bottom of menu */}
                            <div className="p-4 bg-gradient-to-t from-white via-white to-transparent flex-shrink-0 border-t border-slate-50">
                                <div className="space-y-3">
                                    <Link
                                        href="tel:+918237156777"
                                        className="flex items-center justify-center gap-2 p-4 rounded-xl border border-slate-200 text-slate-700 font-medium hover:bg-slate-50 transition-colors"
                                        onClick={toggleMenu}
                                    >
                                        <Phone className="h-4 w-4" />
                                        Call Now
                                    </Link>
                                    <Button
                                        className="w-full rounded-xl py-6 gradient-primary"
                                        size="lg"
                                        asChild
                                        onClick={toggleMenu}
                                    >
                                        <Link href="/contact" className="flex items-center gap-2">
                                            Book Appointment
                                            <ArrowRight className="h-4 w-4" />
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
