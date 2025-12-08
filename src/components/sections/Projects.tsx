
import { ExternalLink } from 'lucide-react';
import { Section } from '../ui/Section';
import { SectionTitle } from '../ui/SectionTitle';
import { Card } from '../ui/Card';
import { portfolioData } from '../../data/portfolio';

const ProjectCard = ({ project, index }: { project: typeof portfolioData.projects[0], index: number }) => {
    return (
        <Card delay={index * 0.1} className="flex flex-col h-full">
            <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                        <span
                            key={tag}
                            className="px-1 py-1 text-xs font-medium text-gray-600 bg-gray-100 dark:text-gray-300 dark:bg-gray-700 rounded-md"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
            <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium transition-colors"
            >
                View Project <ExternalLink className="ml-1 w-4 h-4" />
            </a>
        </Card>
    );
};

export const Projects = () => {
    return (
        <Section id="projects" className="bg-gray-50 dark:bg-gray-900 max-w-full">
            <SectionTitle
                title="Featured Projects"
                subtitle="A selection of my recent work and side projects."
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {portfolioData.projects.map((project, index) => (
                    <ProjectCard key={project.id} project={project} index={index} />
                ))}
            </div>
        </Section>
    );
};
