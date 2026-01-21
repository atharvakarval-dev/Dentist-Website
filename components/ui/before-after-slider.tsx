"use client"

import { useState, useRef, useEffect, useCallback } from "react"
import { motion, useMotionValue } from "framer-motion"
import { GripVertical } from "lucide-react"

interface BeforeAfterSliderProps {
    beforeImage: string
    afterImage: string
    beforeLabel?: string
    afterLabel?: string
    className?: string
}

export function BeforeAfterSlider({
    beforeImage,
    afterImage,
    beforeLabel = "Before",
    afterLabel = "After",
    className = "",
}: BeforeAfterSliderProps) {
    const [sliderPosition, setSliderPosition] = useState(50)
    const [isDragging, setIsDragging] = useState(false)
    const containerRef = useRef<HTMLDivElement>(null)

    const handleMove = useCallback(
        (clientX: number) => {
            if (!containerRef.current) return

            const rect = containerRef.current.getBoundingClientRect()
            const x = Math.max(0, Math.min(clientX - rect.left, rect.width))
            const percentage = (x / rect.width) * 100

            setSliderPosition(percentage)
        },
        []
    )

    const onMouseMove = useCallback(
        (e: React.MouseEvent | MouseEvent) => {
            if (!isDragging) return
            handleMove(e.clientX)
        },
        [isDragging, handleMove]
    )

    const onTouchMove = useCallback(
        (e: React.TouchEvent | TouchEvent) => {
            if (!isDragging) return
            handleMove(e.touches[0].clientX)
        },
        [isDragging, handleMove]
    )

    const onMouseUp = useCallback(() => {
        setIsDragging(false)
    }, [])

    useEffect(() => {
        if (isDragging) {
            window.addEventListener("mousemove", onMouseMove)
            window.addEventListener("mouseup", onMouseUp)
            window.addEventListener("touchmove", onTouchMove)
            window.addEventListener("touchend", onMouseUp)
        }

        return () => {
            window.removeEventListener("mousemove", onMouseMove)
            window.removeEventListener("mouseup", onMouseUp)
            window.removeEventListener("touchmove", onTouchMove)
            window.removeEventListener("touchend", onMouseUp)
        }
    }, [isDragging, onMouseMove, onTouchMove, onMouseUp])

    // Handle keyboard interaction for accessibility
    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "ArrowLeft") {
            setSliderPosition((prev) => Math.max(0, prev - 5))
        } else if (e.key === "ArrowRight") {
            setSliderPosition((prev) => Math.min(100, prev + 5))
        }
    }

    return (
        <div
            ref={containerRef}
            className={`relative w-full h-full overflow-hidden select-none group cursor-ew-resize ${className}`}
            onMouseDown={(e) => {
                setIsDragging(true)
                handleMove(e.clientX)
            }}
            onTouchStart={(e) => {
                setIsDragging(true)
                handleMove(e.touches[0].clientX)
            }}
            onKeyDown={handleKeyDown}
            tabIndex={0}
            role="slider"
            aria-label="Compare before and after images"
            aria-valuenow={sliderPosition}
            aria-valuemin={0}
            aria-valuemax={100}
        >
            {/* After Image (Background) */}
            <div className="absolute inset-0">
                <img
                    src={afterImage}
                    alt={afterLabel}
                    className="h-full w-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-black/50 text-white text-xs font-medium px-2 py-1 rounded backdrop-blur-sm">
                    {afterLabel}
                </div>
            </div>

            {/* Before Image (Foreground - Clipped) */}
            <div
                className="absolute inset-0 border-r-2 border-white/50"
                style={{
                    clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
                }}
            >
                <img
                    src={beforeImage}
                    alt={beforeLabel}
                    className="h-full w-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-black/50 text-white text-xs font-medium px-2 py-1 rounded backdrop-blur-sm">
                    {beforeLabel}
                </div>
            </div>

            {/* Slider Handle */}
            <div
                className="absolute inset-y-0"
                style={{ left: `${sliderPosition}%` }}
            >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-xl ring-1 ring-black/5">
                    <GripVertical className="h-5 w-5 text-slate-500" />
                </div>
            </div>
        </div>
    )
}
