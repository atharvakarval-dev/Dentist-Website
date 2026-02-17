"use client"

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { cn } from '@/lib/utils';

const testimonials = [
    {
        tempId: 0,
        testimonial: "My braces treatment has started at this clinic and I’m very satisfied with the care so far. The dentist explained each step, answered all my questions, and handled everything very gently.",
        by: "Jaykumar Girase",
    },
    {
        tempId: 1,
        testimonial: "I visited the clinic twice and had a great experience on both occasions. The first time I went for a toothache and was diagnosed with a cavity. Instead of suggesting any expensive procedure, the doctor recommended the most convenient option.",
        by: "Mainak Bhowmick",
    },
    {
        tempId: 2,
        testimonial: "My 3-year-old child needed treatment... the doctor handled him with so much patience and care. They explained the problem clearly in simple terms.",
        by: "Anand Kamble",
    },
    {
        tempId: 3,
        testimonial: "Dentistree dental clinic is clean and healthy place for all sorts of dental treatments.. The Doctor Poonam very friendly, informative, well versed and prioritize patient comfort.",
        by: "Rahul Surkar",
    },
    {
        tempId: 4,
        testimonial: "I visited Dentistree Dental Clinic for a routine check-up and flossing. Dr Poonam's precision and gentleness were exemplary. The modern, well-organized set-up is impressive.",
        by: "Shridhar Bhave",
    },
    {
        tempId: 5,
        testimonial: "I had severe tooth pain, so Poonam Mam did my root canal and fixed the cap on my teeth in a very reasonable price. Now I am absolutely fine.",
        by: "Meena Kadam",
    },
    {
        tempId: 6,
        testimonial: "I got tooth scaling, composite filling treatment. A good treatment by Dr Poonam, she is very experienced and suggests best possible treatment and explains the procedure very well.",
        by: "Nitesh Rahangdale",
    },
    {
        tempId: 7,
        testimonial: "The dentist was very friendly and cooperative while treating my daughter’s teeth. I would happily recommend this clinic to other parents as well.",
        by: "Trupti Birje",
    },
    {
        tempId: 8,
        testimonial: "I was very fearful and in a lot of pain before the treatment, but Dr. Poonam made me feel comfortable, explained everything clearly, and treated me without any pain.",
        by: "Ankita Dangat",
    },
    {
        tempId: 9,
        testimonial: "Had a root canal with Dr. Poonam at Dentistree dental clinic, Nanded city, Pune. The experience was smooth and comfortable. Dr. Poonam was clear in explanation and highly skilled.",
        by: "Supriya Bambarkar",
    },
    {
        tempId: 10,
        testimonial: "I visited Dentistree Dental Clinic a month ago to get root canal treatment and bridge work done and I couldn't be happier with my experience. Dr Poonam provided exceptional care from start to finish.",
        by: "Deepali Pawar",
    },
    {
        tempId: 11,
        testimonial: "My experience in this clinic was very good. Treatment of rootcanal was very nice. Thankyou Dr poonam Bambarkar",
        by: "Trisha Kancharlawar",
    },
    {
        tempId: 12,
        testimonial: "I recently had my first-ever root canal treatment at Dentistree Clinic in Nanded City, Pune, and I’m extremely impressed with the experience. Dr. Poonam was very patient and took the time to explain everything clearly, including why the root canal was necessary to save my tooth.",
        by: "Saee Patil",
    },
    {
        tempId: 13,
        testimonial: "I had a wonderful experience with Dr. Poonam Bambarkar Dentistree Dental Clinic Nanded City. She is very knowledgeable and experienced. I regularly visit her clinic every six months for check-ups and cleaning.",
        by: "Pallavi Chavan",
    },
    {
        tempId: 14,
        testimonial: "I'm absolutely thrilled with the dental treatment I received! The dentist was professional, friendly, and explained everything clearly. The procedure was quick and virtually painless. My smile looks amazing!",
        by: "Teju Deshmane",
    },
    {
        tempId: 15,
        testimonial: "Dr. Poonam Bambarkar has excellent light hands and very comfortable experience. She explains all the treatment well n follows up too. Done my root canal treatment and cleaning.",
        by: "Nilesh Dangat",
    },
    {
        tempId: 16,
        testimonial: "Dr. Poonam Bambadkar made my root canal treatment a breeze! The procedure was quick, and the pain was minimal. I'm so relieved and grateful for their expertise. Highly recommend!",
        by: "Priyanka Raut",
    },
    {
        tempId: 17,
        testimonial: "She is very kind, experienced & her treatment style is unique. Good Dentist I ever seen.",
        by: "Romit Lahiri",
    },
    {
        tempId: 18,
        testimonial: "I can recommend Dr Poonam Ma'am. Am very happy with the care and patience shown with my dental checkup, cleaning and filling. Thank you Dr Poonam Ma'am.",
        by: "Prasad Kolase",
    },
    {
        tempId: 19,
        testimonial: "After removing my third consistent tooth from my oral cavity, Dr. Poonam advised me for bridge option. The procedure was very well explained by this Sweet Doctor... she has given my smile back.",
        by: "Swati Shinde",
    },
    {
        tempId: 20,
        testimonial: "clean and comfortable environment, clear explanations of treatment options, gentle procedures, timely appointments, efficient service, and the excellent dentist's skill in addressing dental concerns.",
        by: "Manoj Ahire",
    },
    {
        tempId: 21,
        testimonial: "I visited the Dentistree Dental clinic for my son’s treatment, Dr. Poonam handled my naughty kid very patiently and treated him . Thank you Poonam mam",
        by: "Kanchana Revankar",
    },
    {
        tempId: 22,
        testimonial: "Good treatment and best counselling. Thank you so much Dr poonam Mam.",
        by: "Akshay Karale",
    },
    {
        tempId: 23,
        testimonial: "I had my first root canal here and had a great experience with Doctor Poonam.",
        by: "Gauri Shinde",
    },
    {
        tempId: 24,
        testimonial: "Experience doctor. Peaceful ambience. Respectful staff. World class treatment",
        by: "Amritkar Fishalla",
    },
    {
        tempId: 25,
        testimonial: "Best dental Dr in pune",
        by: "Rani Khase",
    },
    {
        tempId: 26,
        testimonial: "Best place for the dental care and treatment.",
        by: "Aparna Pitre",
    },
    {
        tempId: 27,
        testimonial: "The experience was awesome 👍😎",
        by: "Priyanka Rawat",
    },
    {
        tempId: 28,
        testimonial: "A brave young patient who trusted us for his check-up. We love making dental visits fun and comfortable for kids!",
        by: "Happy Little Patient",
        image: "/assets/client-10.jpeg"
    }
];

interface TestimonialCardProps {
    position: number;
    testimonial: typeof testimonials[0];
    handleMove: (steps: number) => void;
    cardDimensions: { width: number; height: number };
    isMobile: boolean;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
    position,
    testimonial,
    handleMove,
    cardDimensions,
    isMobile
}) => {
    const isCenter = position === 0;

    return (
        <div
            onClick={() => handleMove(position)}
            className={cn(
                "absolute left-1/2 top-1/2 cursor-pointer border px-5 py-6 sm:px-6 sm:py-8 sm:p-10 transition-all duration-500 ease-in-out flex flex-col justify-between rounded-[1.5rem] sm:rounded-[2rem]",
                isCenter
                    ? "z-20 bg-white text-slate-900 border-primary shadow-2xl scale-100 opacity-100 ring-1 sm:ring-4 ring-primary/5"
                    : "z-10 bg-slate-50 text-slate-400 border-slate-200 shadow-sm opacity-40 scale-90 blur-[1px]"
            )}
            style={{
                width: cardDimensions.width,
                height: cardDimensions.height,
                transform: `
          translate(-50%, -50%) 
          translateX(${(cardDimensions.width / (isMobile ? 1.2 : 1.5)) * position}px)
          translateY(${isCenter ? 0 : 20}px)
          rotate(${isCenter ? 0 : position * 4}deg)
        `,
            }}
        >


            <div className="flex items-center gap-1 mb-6 relative z-10">
                {[1, 2, 3, 4, 5].map(i => (
                    <Star key={i} className={cn("w-4 h-4 fill-current", isCenter ? "text-yellow-400" : "text-slate-200")} />
                ))}
            </div>

            <h3 className={cn(
                "text-base sm:text-l md:text-xl font-medium leading-relaxed tracking-wide relative z-10 line-clamp-6",
                isCenter ? "text-slate-800" : "text-slate-400"
            )}>
                "{testimonial.testimonial}"
            </h3>

            <div className={cn(
                "flex items-center gap-4 mt-auto pt-6 border-t relative z-10 w-full",
                isCenter ? "border-slate-100" : "border-slate-200"
            )}>
                <div className="shrink-0 relative">
                    <div className={cn("absolute inset-0 rounded-full blur-sm opacity-20", isCenter ? "bg-primary" : "bg-transparent")} />
                    {/* @ts-ignore */}
                    {testimonial.image ? (
                        <div className={cn(
                            "h-12 w-12 rounded-full overflow-hidden border-2 relative",
                            isCenter ? "border-white shadow-md" : "border-slate-100 opacity-70"
                        )}>
                            {/* Using img for simplicity if Next.js Image causes issues with local file paths dynamically in this context, but Next Image is preferred. User provided simple path. */}
                            {/* @ts-ignore */}
                            <img src={testimonial.image} alt={testimonial.by} className="h-full w-full object-cover" />
                        </div>
                    ) : (
                        <div className={cn(
                            "h-12 w-12 rounded-full flex items-center justify-center font-bold text-lg border-2 relative",
                            isCenter ? "bg-gradient-to-br from-teal-500 to-emerald-500 text-white border-white shadow-md" : "bg-slate-100 text-slate-400 border-slate-100"
                        )}>
                            {testimonial.by.charAt(0)}
                        </div>
                    )}
                </div>
                <div className="flex flex-col min-w-0">
                    <p className={cn(
                        "font-bold text-sm sm:text-base truncate",
                        isCenter ? "text-slate-900" : "text-slate-400"
                    )}>
                        {testimonial.by}
                    </p>
                    <p className={cn(
                        "text-xs font-medium uppercase tracking-wider",
                        isCenter ? "text-primary/80" : "text-slate-300"
                    )}>
                        Patient
                    </p>
                </div>
            </div>
        </div>
    );
};

export const StaggerTestimonials: React.FC = () => {
    const [cardDimensions, setCardDimensions] = useState({ width: 320, height: 420 }); // Better mobile defaults
    const [isMobile, setIsMobile] = useState(false);
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
            const mobile = window.matchMedia("(max-width: 640px)").matches;
            setIsMobile(mobile);
            // Taller, narrower cards for mobile legibility, wider for desktop
            setCardDimensions(mobile
                ? { width: Math.min(window.innerWidth - 40, 340), height: 480 }
                : { width: 420, height: 500 }
            );
        };

        updateSize();
        window.addEventListener("resize", updateSize);
        return () => window.removeEventListener("resize", updateSize);
    }, []);

    return (
        <div
            className="relative w-full overflow-hidden py-12 md:py-20"
            style={{ height: 600 }}
        >
            <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-slate-50 to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-50 to-transparent z-10 pointer-events-none" />

            {testimonialsList.map((testimonial, index) => {
                const position = testimonialsList.length % 2
                    ? index - (testimonialsList.length + 1) / 2
                    : index - testimonialsList.length / 2;

                if (Math.abs(position) > 2) return null;

                return (
                    <TestimonialCard
                        key={testimonial.tempId}
                        testimonial={testimonial}
                        handleMove={handleMove}
                        position={position}
                        cardDimensions={cardDimensions}
                        isMobile={isMobile}
                    />
                );
            })}

            <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-6 z-30">
                <button
                    onClick={() => handleMove(-1)}
                    className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center transition-all rounded-full shadow-lg bg-white border border-slate-200 text-slate-700 hover:bg-primary hover:text-white hover:scale-110 active:scale-95 active:bg-primary active:text-white touch-manipulation"
                    aria-label="Previous testimonial"
                >
                    <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
                <button
                    onClick={() => handleMove(1)}
                    className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center transition-all rounded-full shadow-lg bg-white border border-slate-200 text-slate-700 hover:bg-primary hover:text-white hover:scale-110 active:scale-95 active:bg-primary active:text-white touch-manipulation"
                    aria-label="Next testimonial"
                >
                    <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
            </div>
        </div>
    );
};
