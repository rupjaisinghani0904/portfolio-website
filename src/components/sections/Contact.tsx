
import { Section } from '../ui/Section';
import { SectionTitle } from '../ui/SectionTitle';
import { SocialLink } from '../ui/SocialLink';
import { portfolioData } from '../../data/portfolio';

export const Contact = () => {
    return (
        <Section id="contact" className="bg-gray-50 dark:bg-gray-900 max-w-full">
            <SectionTitle
                title="Get in Touch"
                subtitle="Feel free to reach out for collaborations or just a friendly hello."
            />
            <div className="flex justify-center gap-6">
                {portfolioData.personal.socials.map((social) => (
                    <SocialLink
                        key={social.name}
                        href={social.url}
                        icon={social.icon}
                        label={social.name}
                    />
                ))}
            </div>
            <div className="mt-12 text-center text-gray-500 dark:text-gray-400 text-sm">
                <p>© {new Date().getFullYear()} {portfolioData.personal.name}. All rights reserved.</p>
            </div>
        </Section>
    );
};
