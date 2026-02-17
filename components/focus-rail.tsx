"use client";

import * as React from "react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

export type FocusRailItem = {
    id: string | number;
    title: string;
    description?: string;
    imageSrc: string;
    href?: string;
    meta?: string;
};

interface FocusRailProps {
    items: FocusRailItem[];
    initialIndex?: number;
    loop?: boolean;
    autoPlay?: boolean;
    interval?: number;
    className?: string;
}

/**
 * Helper to wrap indices (e.g., -1 becomes length-1)
 */
function wrap(min: number, max: number, v: number) {
    const rangeSize = max - min;
    return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
}

/**
 * Physics Configuration
 * Base spring for spatial movement (x/z)
 */
const BASE_SPRING = {
    type: "spring",
    stiffness: 300,
    damping: 30,
    mass: 1,
};

/**
 * Scale Spring
 * Bouncier spring specifically for the visual "Click/Tap" feedback on the center card
 */
const TAP_SPRING = {
    type: "spring",
    stiffness: 450,
    damping: 18, // Lower damping = subtle overshoot/wobble "tap"
    mass: 1,
};

export function FocusRail({
    items,
    initialIndex = 0,
    loop = true,
    autoPlay = false,
    interval = 4000,
    className,
}: FocusRailProps) {
    const [active, setActive] = React.useState(initialIndex);
    const [isHovering, setIsHovering] = React.useState(false);
    const lastWheelTime = React.useRef<number>(0);

    const count = items.length;
    const activeIndex = wrap(0, count, active);
    const activeItem = items[activeIndex];

    // --- NAVIGATION HANDLERS ---
    const handlePrev = React.useCallback(() => {
        if (!loop && active === 0) return;
        setActive((p) => p - 1);
    }, [loop, active]);

    const handleNext = React.useCallback(() => {
        if (!loop && active === count - 1) return;
        setActive((p) => p + 1);
    }, [loop, active, count]);

    // --- MOUSE WHEEL / TRACKPAD LOGIC ---
    const onWheel = React.useCallback(
        (e: React.WheelEvent) => {
            const now = Date.now();
            // Debounce: prevent rapid firing from inertia scrolling (400ms lockout)
            if (now - lastWheelTime.current < 400) return;

            // Detect horizontal scroll primarily, but also fallback to vertical if shift is held
            const isHorizontal = Math.abs(e.deltaX) > Math.abs(e.deltaY);
            const delta = isHorizontal ? e.deltaX : e.deltaY;

            // Threshold to avoid accidental micro-scrolls
            if (Math.abs(delta) > 20) {
                if (delta > 0) {
                    handleNext();
                } else {
                    handlePrev();
                }
                lastWheelTime.current = now;
            }
        },
        [handleNext, handlePrev]
    );

    // Autoplay logic
    React.useEffect(() => {
        if (!autoPlay || isHovering) return;
        const timer = setInterval(() => handleNext(), interval);
        return () => clearInterval(timer);
    }, [autoPlay, isHovering, handleNext, interval]);

    // Keyboard navigation
    const onKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "ArrowLeft") handlePrev();
        if (e.key === "ArrowRight") handleNext();
    };

    // --- SWIPE / DRAG LOGIC ---
    const swipeConfidenceThreshold = 10000;
    const swipePower = (offset: number, velocity: number) => {
        return Math.abs(offset) * velocity;
    };

    const onDragEnd = (e: MouseEvent | TouchEvent | PointerEvent, { offset, velocity }: PanInfo) => {
        const swipe = swipePower(offset.x, velocity.x);

        if (swipe < -swipeConfidenceThreshold) {
            handleNext();
        } else if (swipe > swipeConfidenceThreshold) {
            handlePrev();
        }
    };

    const visibleIndices = [-2, -1, 0, 1, 2];

    return (
        <div
            className={cn(
                "group relative flex h-[600px] md:h-[700px] w-full flex-col bg-gradient-to-b from-[#faf8f5] to-white text-slate-800 outline-none select-none rounded-3xl border border-slate-100 shadow-xl",
                className
            )}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            tabIndex={0}
            onKeyDown={onKeyDown}
            onWheel={onWheel}
        >
            {/* Background Ambience - Light Theme */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-96 h-96 bg-teal-100/40 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-72 h-72 bg-amber-100/30 rounded-full blur-3xl" />
            </div>

            {/* Main Stage */}
            <div className="relative z-10 flex flex-1 flex-col justify-center px-4 md:px-8 py-8 md:py-10">
                {/* DRAGGABLE RAIL CONTAINER */}
                <motion.div
                    className="relative mx-auto flex h-[380px] md:h-[480px] w-full max-w-6xl items-center justify-center perspective-[1200px] cursor-grab active:cursor-grabbing"
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.2}
                    onDragEnd={onDragEnd}
                >
                    {visibleIndices.map((offset) => {
                        const absIndex = active + offset;
                        const index = wrap(0, count, absIndex);
                        const item = items[index];

                        if (!loop && (absIndex < 0 || absIndex >= count)) return null;

                        const isCenter = offset === 0;
                        const dist = Math.abs(offset);

                        // Dynamic transforms
                        const xOffset = offset * 280;
                        const zOffset = -dist * 180;
                        const scale = isCenter ? 1 : 0.85;
                        const rotateY = offset * -20;

                        const opacity = isCenter ? 1 : Math.max(0.1, 1 - dist * 0.5);
                        const blur = isCenter ? 0 : dist * 6;
                        const brightness = isCenter ? 1 : 0.5;

                        return (
                            <motion.div
                                key={absIndex}
                                className={cn(
                                    "absolute aspect-[4/5] w-[260px] md:w-[340px] rounded-2xl border border-slate-200 bg-white shadow-2xl transition-shadow duration-300",
                                    isCenter ? "z-20 shadow-teal-500/20 ring-2 ring-teal-500/20" : "z-10"
                                )}
                                initial={false}
                                animate={{
                                    x: xOffset,
                                    z: zOffset,
                                    scale: scale,
                                    rotateY: rotateY,
                                    filter: `blur(${blur}px) brightness(${brightness})`,
                                }}
                                transition={{
                                    type: "spring",
                                    stiffness: 300,
                                    damping: 30,
                                    mass: 1,
                                }}
                                style={{
                                    transformStyle: "preserve-3d",
                                }}
                                onClick={() => {
                                    if (offset !== 0) setActive((p) => p + offset);
                                }}
                            >
                                <Image
                                    src={item.imageSrc}
                                    alt={item.title}
                                    fill
                                    className="rounded-2xl object-cover pointer-events-none"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    priority={isCenter}
                                />

                                {/* Lighting layers */}
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />
                                <div className="absolute inset-0 rounded-2xl bg-black/10 pointer-events-none mix-blend-multiply" />
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* Info & Controls */}
                <div className="mx-auto mt-6 md:mt-10 mb-4 flex w-full max-w-4xl flex-col items-center justify-between gap-4 md:gap-6 md:flex-row pointer-events-auto">
                    <div className="flex flex-1 flex-col items-center text-center md:items-start md:text-left min-h-[80px] md:h-32 justify-center">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeItem.id}
                                initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
                                transition={{ duration: 0.3 }}
                                className="space-y-1 md:space-y-2"
                            >
                                {activeItem.meta && (
                                    <span className="text-xs font-medium uppercase tracking-wider text-teal-600">
                                        {activeItem.meta}
                                    </span>
                                )}
                                <h2 className="text-xl md:text-3xl font-display font-bold tracking-tight text-slate-800">
                                    {activeItem.title}
                                </h2>
                                {activeItem.description && (
                                    <p className="max-w-md text-sm md:text-base text-slate-600">
                                        {activeItem.description}
                                    </p>
                                )}
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <div className="flex items-center gap-3 md:gap-4">
                        <div className="flex items-center gap-1 rounded-full bg-white p-1 ring-1 ring-slate-200 shadow-lg">
                            <button
                                onClick={handlePrev}
                                className="rounded-full p-2.5 md:p-3 text-slate-500 transition hover:bg-teal-50 hover:text-teal-600 active:scale-95"
                                aria-label="Previous"
                            >
                                <ChevronLeft className="h-4 w-4 md:h-5 md:w-5" />
                            </button>
                            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-50">
                                <span className="text-sm font-semibold text-teal-600">{activeIndex + 1}</span>
                                <span className="text-xs text-slate-400">/</span>
                                <span className="text-sm font-medium text-slate-500">{count}</span>
                            </div>
                            <button
                                onClick={handleNext}
                                className="rounded-full p-2 md:p-3 text-slate-500 transition hover:bg-teal-50 hover:text-teal-600 active:scale-95"
                                aria-label="Next"
                            >
                                <ChevronRight className="h-4 w-4 md:h-5 md:w-5" />
                            </button>
                        </div>

                        {activeItem.href && (
                            <Link
                                href={activeItem.href}
                                className="group flex items-center gap-2 rounded-full gradient-primary px-4 md:px-5 py-2 md:py-3 text-sm font-semibold text-white transition-transform hover:scale-105 active:scale-95 shadow-lg"
                            >
                                Explore
                                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
