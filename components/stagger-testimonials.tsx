"use client"

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { cn } from '@/lib/utils';

const SQRT_5000 = Math.sqrt(5000);

// Mapped real testimonials from user input
const testimonials = [
    {
        tempId: 0,
        testimonial: "My braces treatment has started at this clinic and I’m very satisfied with the care so far. The dentist explained each step, answered all my questions, and handled everything very gently.",
        by: "Jaykumar Girase",
        imgSrc: "https://i.pravatar.cc/150?u=jaykumar"
    },
    {
        tempId: 1,
        testimonial: "I visited the clinic twice and had a great experience. The first time I went for a toothache, the doctor diagnosed a cavity but instead of suggesting expensive procedures, recommended the most convenient option.",
        by: "Mainak Bhowmick",
        imgSrc: "https://i.pravatar.cc/150?u=mainak"
    },
    {
        tempId: 2,
        testimonial: "My 3-year-old child needed treatment... the doctor handled him with so much patience and care. They explained the problem clearly in simple terms.",
        by: "Anand Kamble",
        imgSrc: "https://i.pravatar.cc/150?u=anand"
    },
    {
        tempId: 3,
        testimonial: "Dentistree dental clinic is clean and healthy place... Dr Poonam is very friendly, informative, well versed and prioritize patient comfort.",
        by: "Rahul Surkar",
        imgSrc: "https://i.pravatar.cc/150?u=rahul"
    },
    {
        tempId: 4,
        testimonial: "Dr Poonam's precision and gentleness were exemplary. The modern, well-organized set-up is impressive.",
        by: "Shridhar Bhave",
        imgSrc: "https://i.pravatar.cc/150?u=shridhar"
    },
    {
        tempId: 5,
        testimonial: "I had severe tooth pain, so Poonam Mam did my root canal and fixed the cap on my teeth in a very reasonable price.",
        by: "Meena Kadam",
        imgSrc: "https://i.pravatar.cc/150?u=meena"
    },
    {
        tempId: 6,
        testimonial: "Dr Poonam is very experienced and suggests best possible treatment... She is very caring and did treatment painlessly.",
        by: "Nitesh Rahangdale",
        imgSrc: "https://i.pravatar.cc/150?u=nitesh"
    },
    {
        tempId: 7,
        testimonial: "I was very fearful and in a lot of pain... Dr. Poonam made me feel comfortable... and treated me without any pain.",
        by: "Ankita Dangat",
        imgSrc: "https://i.pravatar.cc/150?u=ankita"
    },
    {
        tempId: 8,
        testimonial: "Had a root canal with Dr. Poonam... The experience was smooth and comfortable. Dr. Poonam was clear in explanation and highly skilled.",
        by: "Supriya Bambarkar",
        imgSrc: "https://i.pravatar.cc/150?u=supriya"
    },
    {
        tempId: 9,
        testimonial: "I couldn't be happier with my experience. Dr Poonam provided exceptional care from start to finish.",
        by: "Deepali Pawar",
        imgSrc: "https://i.pravatar.cc/150?u=deepali"
    },
    {
        tempId: 10,
        testimonial: "I had a wonderful experience... She is very knowledgeable and experienced. I regularly visit her clinic every six months for check-ups.",
        by: "Pallavi Chavan",
        imgSrc: "https://i.pravatar.cc/150?u=pallavi"
    },
    {
        tempId: 11,
        testimonial: "I'm absolutely thrilled with the dental treatment! The procedure was quick and virtually painless. My smile looks amazing!",
        by: "Teju Deshmane",
        imgSrc: "https://i.pravatar.cc/150?u=teju"
    }
];

interface TestimonialCardProps {
    position: number;
    testimonial: typeof testimonials[0];
    handleMove: (steps: number) => void;
    cardSize: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
    position,
    testimonial,
    handleMove,
    cardSize
}) => {
    const isCenter = position === 0;

    return (
        <div
            onClick={() => handleMove(position)}
            className={cn(
                "absolute left-1/2 top-1/2 cursor-pointer border-2 p-8 transition-all duration-500 ease-in-out flex flex-col justify-between",
                isCenter
                    ? "z-10 bg-primary text-primary-foreground border-primary"
                    : "z-0 bg-white text-slate-800 border-slate-200 hover:border-primary/50 shadow-sm"
            )}
            style={{
                width: cardSize,
                height: cardSize,
                // Customized clip path for a modern card shape
                borderRadius: "24px",
                transform: `
          translate(-50%, -50%) 
          translateX(${(cardSize / 1.5) * position}px)
          translateY(${isCenter ? -20 : position % 2 ? 30 : -30}px)
          scale(${isCenter ? 1 : 0.9})
          rotate(${isCenter ? 0 : position * 2}deg)
        `,
                opacity: Math.abs(position) > 2 ? 0 : 1, // Fade out distant cards
                boxShadow: isCenter ? "0px 20px 40px -10px rgba(0,0,0,0.2)" : "0px 5px 15px -5px rgba(0,0,0,0.05)"
            }}
        >
            <div className="absolute top-6 right-6 opacity-20">
                <Quote size={40} />
            </div>

            <div className="flex items-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map(i => (
                    <Star key={i} className={cn("w-4 h-4 fill-current", isCenter ? "text-yellow-300" : "text-yellow-400")} />
                ))}
            </div>

            <h3 className={cn(
                "text-lg sm:text-xl font-medium leading-relaxed line-clamp-4",
                isCenter ? "text-primary-foreground" : "text-slate-700"
            )}>
                "{testimonial.testimonial}"
            </h3>

            <div className="flex items-center gap-4 mt-auto pt-6 border-t border-white/20">
                <img
                    src={testimonial.imgSrc}
                    alt={testimonial.by}
                    className="h-12 w-12 rounded-full object-cover bg-slate-200 border-2 border-white/50"
                />
                <div>
                    <p className={cn(
                        "font-bold text-base",
                        isCenter ? "text-primary-foreground" : "text-slate-900"
                    )}>
                        {testimonial.by}
                    </p>
                    <p className={cn(
                        "text-xs opacity-80",
                        isCenter ? "text-primary-foreground" : "text-slate-500"
                    )}>
                        Patient
                    </p>
                </div>
            </div>
        </div>
    );
};

export const StaggerTestimonials: React.FC = () => {
    const [cardSize, setCardSize] = useState(365);
    const [testimonialsList, setTestimonialsList] = useState(testimonials);

    const handleMove = (steps: number) => {
        const newList = [...testimonialsList];
        if (steps > 0) {
            for (let i = steps; i > 0; i--) {
                const item = newList.shift();
                if (!item) return;
                newList.push({ ...item, tempId: Math.random() });
            }
        } else {
            for (let i = steps; i < 0; i++) {
                const item = newList.pop();
                if (!item) return;
                newList.unshift({ ...item, tempId: Math.random() });
            }
        }
        setTestimonialsList(newList);
    };

    useEffect(() => {
        const updateSize = () => {
            const { matches } = window.matchMedia("(min-width: 640px)");
            setCardSize(matches ? 365 : 290);
        };

        updateSize();
        window.addEventListener("resize", updateSize);
        return () => window.removeEventListener("resize", updateSize);
    }, []);

    return (
        <div
            className="relative w-full overflow-hidden py-10"
            style={{ height: 600 }}
        >
            <div className="absolute inset-0 bg-gradient-to-r from-slate-50 via-transparent to-slate-50 z-10 pointer-events-none" />

            {testimonialsList.map((testimonial, index) => {
                const position = testimonialsList.length % 2
                    ? index - (testimonialsList.length + 1) / 2
                    : index - testimonialsList.length / 2;
                return (
                    <TestimonialCard
                        key={testimonial.tempId}
                        testimonial={testimonial}
                        handleMove={handleMove}
                        position={position}
                        cardSize={cardSize}
                    />
                );
            })}
            <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-4 z-20">
                <button
                    onClick={() => handleMove(-1)}
                    className={cn(
                        "flex h-12 w-12 items-center justify-center text-xl transition-all rounded-full shadow-lg",
                        "bg-white border border-slate-200 text-slate-700 hover:bg-primary hover:text-white hover:scale-110",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                    )}
                    aria-label="Previous testimonial"
                >
                    <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                    onClick={() => handleMove(1)}
                    className={cn(
                        "flex h-12 w-12 items-center justify-center text-xl transition-all rounded-full shadow-lg",
                        "bg-white border border-slate-200 text-slate-700 hover:bg-primary hover:text-white hover:scale-110",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                    )}
                    aria-label="Next testimonial"
                >
                    <ChevronRight className="w-6 h-6" />
                </button>
            </div>
        </div>
    );
};
