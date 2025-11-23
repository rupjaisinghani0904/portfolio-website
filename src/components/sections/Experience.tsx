
import { Section } from '../ui/Section';
import { SectionTitle } from '../ui/SectionTitle';
import { Card } from '../ui/Card';
import { portfolioData } from '../../data/portfolio';

export const Experience = () => {
    return (
        <Section id="experience" className="bg-gray-50">
            <SectionTitle
                title="Experience"
                subtitle="My professional journey and career highlights."
            />
            <div className="max-w-4xl mx-auto space-y-6">
                {portfolioData.experience.map((exp, index) => (
                    <Card key={exp.id} delay={index * 0.1} className="flex flex-col md:flex-row gap-6">
                        {/* Logo Section */}
                        <div className="flex-shrink-0">
                            <div className="w-16 h-16 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center overflow-hidden">
                                {exp.logo ? (
                                    <img
                                        src={exp.logo}
                                        alt={`${exp.company} logo`}
                                        className="w-full h-full object-contain p-2"
                                    />
                                ) : (
                                    <span className="text-2xl font-bold text-gray-300">
                                        {exp.company.charAt(0)}
                                    </span>
                                )}
                            </div>
                        </div>

                        {/* Content Section */}
                        <div className="flex-grow">
                            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900">{exp.role}</h3>
                                    <div className="flex items-center gap-2 mt-1">
                                        <span className="text-lg text-gray-700 font-medium">{exp.company}</span>
                                        {exp.team && (
                                            <>
                                                <span className="text-gray-300">•</span>
                                                <span className="text-gray-500">{exp.team}</span>
                                            </>
                                        )}
                                    </div>
                                </div>
                                <span className="inline-block px-3 py-1 text-sm font-semibold text-blue-600 bg-blue-50 rounded-full mt-2 md:mt-0 w-fit">
                                    {exp.period}
                                </span>
                            </div>
                            <p className="text-gray-600 leading-relaxed mt-3">
                                {exp.description}
                            </p>
                        </div>
                    </Card>
                ))}
            </div>
        </Section>
    );
};
