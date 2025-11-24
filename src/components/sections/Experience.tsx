import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Section } from '../ui/Section';
import { SectionTitle } from '../ui/SectionTitle';
import { Card } from '../ui/Card';
import { portfolioData } from '../../data/portfolio';
import { cn } from '../../utils/cn';

const ExperienceCard = ({ exp, index }: { exp: typeof portfolioData.experience[0], index: number }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <Card delay={index * 0.1} className="relative">
            {/* Mobile Date - Top of card */}
            <div className="md:hidden mb-4">
                <span className="inline-block px-3 py-1 text-sm font-semibold text-blue-600 bg-blue-50 rounded-full">
                    {exp.period}
                </span>
            </div>

            <div className="flex flex-row gap-4">
                {/* Logo Section */}
                <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center overflow-hidden">
                        {exp.logo ? (
                            <img
                                src={exp.logo}
                                alt={`${exp.company} logo`}
                                className="w-full h-full object-contain p-1"
                            />
                        ) : (
                            <span className="text-xl md:text-2xl font-bold text-gray-300">
                                {exp.company.charAt(0)}
                            </span>
                        )}
                    </div>
                </div>

                {/* Content Section */}
                <div className="flex-grow">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
                        <div className="flex justify-between items-center w-full md:w-auto md:block">
                            <div>
                                <h3 className="text-lg md:text-xl font-bold text-gray-900">{exp.role}</h3>
                                <div className="flex items-center gap-2 mt-1">
                                    <span className="text-md md:text-lg text-gray-700 font-medium">{exp.company}</span>
                                    {exp.team && (
                                        <>
                                            <span className="text-gray-300 text-md md:text-lg">•</span>
                                            <span className="text-gray-500 text-md md:text-lg">{exp.team}</span>
                                        </>
                                    )}
                                </div>
                            </div>

                            {/* Mobile Toggle Button */}
                            <button
                                onClick={() => setIsExpanded(!isExpanded)}
                                className="md:hidden p-0 text-blue-600 hover:bg-blue-50 rounded-full transition-colors"
                                aria-label={isExpanded ? "Show less" : "Show description"}
                            >
                                {isExpanded ? (
                                    <ChevronUp className="w-6 h-6" />
                                ) : (
                                    <ChevronDown className="w-6 h-6" />
                                )}
                            </button>
                        </div>

                        {/* Desktop Date */}
                        <span className="hidden md:inline-block px-3 py-1 text-sm font-semibold text-blue-600 bg-blue-50 rounded-full mt-2 md:mt-0 w-fit">
                            {exp.period}
                        </span>
                    </div>

                    <div className={cn(
                        "text-gray-600 leading-relaxed mt-3 transition-all duration-300",
                        !isExpanded && "hidden md:block"
                    )}>
                        {Array.isArray(exp.description) ? (
                            <ul className="list-disc list-outside ml-4 space-y-2">
                                {exp.description.map((point, i) => (
                                    <li key={i}>{point}</li>
                                ))}
                            </ul>
                        ) : (
                            <p>{exp.description}</p>
                        )}
                    </div>
                </div>
            </div>
        </Card >
    );
};

export const Experience = () => {
    return (
        <Section id="experience" className="bg-gray-50">
            <SectionTitle
                title="Experience"
                subtitle="My professional journey and career highlights."
            />
            <div className="max-w-5xl mx-auto space-y-6">
                {portfolioData.experience.map((exp, index) => (
                    <ExperienceCard key={exp.id} exp={exp} index={index} />
                ))}
            </div>
        </Section>
    );
};
