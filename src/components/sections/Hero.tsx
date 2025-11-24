import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Section } from '../ui/Section';
import { portfolioData } from '../../data/portfolio';

export const Hero = () => {
    return (
        <Section id="home" className="min-h-screen flex items-center justify-center pt-16">
            <div className="text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
                        Hi, I'm <span className="text-blue-600">{portfolioData.personal.name}</span>
                    </h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <p className="text-md md:text-xl lg:text-2xl text-gray-600 mb-8 max-w-md md:max-w-xl lg:max-w-2xl mx-auto">
                        Developer attending {portfolioData.personal.college} in {portfolioData.personal.location}.
                        Looking for opportunities to build impactful projects.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <a
                        href={portfolioData.personal.resume}
                        target="_blank"
                        className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                    >
                        View Resume
                        <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                    <a
                        href="#contact"
                        className="inline-flex items-center justify-center px-8 py-3 border border-gray-300 text-base font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50 transition-colors"
                    >
                        Contact Me
                    </a>
                </motion.div>
            </div>
        </Section>
    );
};
