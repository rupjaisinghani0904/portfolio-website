import { GraduationCap, MapPin, Code, Building2 } from 'lucide-react';
import { Section } from '../ui/Section';
import { SectionTitle } from '../ui/SectionTitle';
import { Card } from '../ui/Card';
import { portfolioData } from '../../data/portfolio';

export const About = () => {
    return (
        <Section id="about" className="bg-white max-w-full">
            <SectionTitle title="About Me" />

            <div className="grid md:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
                {/* Left Column: Narrative */}
                <div className="space-y-6">
                    <p className="text-md md:text-lg text-gray-600 leading-relaxed">
                        {portfolioData.personal.about}
                    </p>
                    <p className="text-md md:text-lg text-gray-600 leading-relaxed">
                        I believe in writing clean, maintainable code and am always eager to learn new technologies.
                        When I'm not coding, you can find me playing basketball, watching movies or cooking.
                    </p>
                </div>

                {/* Right Column: Quick Info & Skills */}
                <div className="space-y-6">
                    <Card className="p-6">
                        <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4">Quick Info</h3>
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 text-gray-600">
                                <GraduationCap className="w-5 text-md h-5 text-blue-600" />
                                <span>{portfolioData.personal.college}</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-600">
                                <MapPin className="w-5 text-md h-5 text-blue-600" />
                                <span>{portfolioData.personal.location}</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-600">
                                <Building2 className="w-5 text-md h-5 text-blue-600" />
                                <span>Working at {portfolioData.personal.title}</span>
                            </div>
                        </div>
                    </Card>

                    <Card className="p-6">
                        <div className="flex items-center gap-2 mb-4">
                            <Code className="w-5 h-5 text-blue-600" />
                            <h3 className="text-lg md:text-xl font-bold text-gray-900">Technologies</h3>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {portfolioData.personal.skills.map((skill) => (
                                <span
                                    key={skill}
                                    className="px-3 py-1 text-md font-medium text-blue-600 bg-blue-50 rounded-full"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </Card>
                </div>
            </div>
        </Section>
    );
};
