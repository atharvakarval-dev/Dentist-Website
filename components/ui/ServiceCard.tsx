import { ArrowRight, Check } from "lucide-react";

interface ServiceCardProps {
    title: string;
    description: string;
    features?: string[];
    icon?: React.ReactNode;
}

export default function ServiceCard({ title, description, features, icon }: ServiceCardProps) {
    return (
        <div className="group relative bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-xl hover:border-primary/20 transition-all duration-300 flex flex-col h-full overflow-hidden">
            {/* Hover Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

            <div className="relative z-10">
                <div className="w-14 h-14 bg-blue-50 text-primary rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                    {icon}
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">{title}</h3>
                <p className="text-slate-600 leading-relaxed mb-6">{description}</p>

                {features && features.length > 0 && (
                    <ul className="space-y-3 mb-8 flex-grow">
                        {features.map((feature, index) => (
                            <li key={index} className="flex items-start text-slate-700 text-sm font-medium">
                                <span className="bg-green-100 text-green-600 rounded-full p-0.5 mr-3 mt-0.5 flex-shrink-0">
                                    <Check className="w-3 h-3" strokeWidth={3} />
                                </span>
                                {feature}
                            </li>
                        ))}
                    </ul>
                )}

                <div className="mt-auto pt-6 border-t border-slate-100 flex items-center text-primary font-semibold text-sm group/btn cursor-pointer">
                    Book Consultation
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </div>
            </div>
        </div>
    );
}
