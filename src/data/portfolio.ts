import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

export const portfolioData = {
    personal: {
        name: "Rup Jaisinghani",
        title: "Scale AI",
        email: "rup@example.com",
        college: "Northeastern University",
        location: "Boston, MA",
        about: "I am an Honors student at Northeastern University, pursuing a Combined Major in Computer Science and Mathematics. My academic and professional journey is driven by the challenge of solving complex problems and the vision of creating innovative technology. I am deeply interested in the dynamic landscape surrounding tech, observing market trends and investment to inform where meaningful disruption can occur. I have hands-on software engineering experience with technologies accross the stack. My goal is to apply this analytical foundation and technical acumen to engineer impactful and ethical technologies that provide real world value.",
        socials: [
            {
                name: "GitHub",
                url: "https://github.com",
                icon: Github,
            },
            {
                name: "LinkedIn",
                url: "https://linkedin.com",
                icon: Linkedin,
            },
            {
                name: "Twitter",
                url: "https://twitter.com",
                icon: Twitter,
            },
            {
                name: "Email",
                url: "mailto:rup@example.com",
                icon: Mail,
            },
        ],
        skills: [
            "Python",
            "Java",
            "React",
            "TypeScript",
            "Node.js",
            "Next.js",
            "Tailwind CSS",
            "PostgreSQL",
            "MongoDB",
            "GCP",
            "Git"
        ],
    },
    experience: [
        {
            id: 1,
            role: "Frontend Developer Coop",
            company: "Klaviyo, Inc.",
            logo: "src/assets/klaviyo_logo.jpeg",
            period: "Jan 2026 - Jun 2026",
            description: "Incoming Frontend Developer Co-op.",
            team: ""
        },
        {
            id: 2,
            role: "GenAI Technical Advisor Intern",
            company: "Scale AI",
            logo: "src/assets/scaleai_logo.jpeg",
            period: "Jun 2025 - Dec 2025",
            description: "Working on Generative AI model evaluation and improvement.",
            team: ""
        },
        {
            id: 3,
            role: "Backend Developer Coop",
            company: "Priceline.com",
            logo: "src/assets/priceline.logo.jpeg",
            period: "Jan 2025 - Jun 2025",
            description: "Developed scalable backend services for fintech solutions.",
            team: "Fintech"
        },
        {
            id: 4,
            role: "Investment Analyst Intern",
            company: "Partners Group",
            logo: "src/assets/partners_group_logo.jpeg",
            period: "Jun 2024 - Aug 2024",
            description: "Analyzed private credit investment opportunities.",
            team: "Private Credit"
        },
    ],
    projects: [
        {
            id: 1,
            title: "E-commerce Platform",
            description: "A full-featured e-commerce platform built with Next.js, Stripe, and Tailwind CSS.",
            tags: ["Next.js", "TypeScript", "Stripe", "Tailwind"],
            link: "#",
        },
        {
            id: 2,
            title: "Task Management App",
            description: "A collaborative task management tool with real-time updates using Socket.io.",
            tags: ["React", "Node.js", "Socket.io", "MongoDB"],
            link: "#",
        },
        {
            id: 3,
            title: "Portfolio Website",
            description: "A modern portfolio website built with React and Framer Motion.",
            tags: ["React", "Framer Motion", "Tailwind"],
            link: "#",
        },
    ],
};
