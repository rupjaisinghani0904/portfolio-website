
import { ExternalLink } from 'lucide-react';
import { Section } from '../ui/Section';
import { SectionTitle } from '../ui/SectionTitle';
import { Card } from '../ui/Card';
import { portfolioData } from '../../data/portfolio';

export const Projects = () => {
    return (
        <Section id="projects" className="bg-white">
            <SectionTitle
                title="Featured Projects"
                subtitle="A selection of my recent work and side projects."
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {portfolioData.projects.map((project, index) => (
                    <Card key={project.id} delay={index * 0.1} className="flex flex-col h-full">
                        <div className="flex-1">
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                            <p className="text-gray-600 mb-4">{project.description}</p>
                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-2 py-1 text-xs font-medium text-gray-600 bg-gray-100 rounded-md"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <a
                            href={project.link}
                            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors"
                        >
                            View Project <ExternalLink className="ml-1 w-4 h-4" />
                        </a>
                    </Card>
                ))}
            </div>
        </Section>
    );
};
