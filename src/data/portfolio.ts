import { SiGithub, SiLinkedin, SiGmail } from 'react-icons/si';

export const portfolioData = {
    personal: {
        name: "Rup Jaisinghani",
        title: "Scale AI",
        email: "rup@example.com",
        college: "Northeastern University",
        location: "Boston, MA",
        resume: "https://drive.google.com/file/d/1p6azYPgzwAnVZju7GW3fSv-HvJS7tpxA/view?usp=sharing",
        about: "I am an Honors student at Northeastern University, pursuing a Combined Major in Computer Science and Mathematics. My academic and professional journey is driven by the challenge of solving complex problems and the vision of creating innovative technology. I am deeply interested in the dynamic landscape surrounding tech, observing market trends and investment to inform where meaningful disruption can occur. I have hands-on software engineering experience with technologies accross the stack. My goal is to apply this analytical foundation and technical acumen to engineer impactful and ethical technologies that provide real world value.",
        socials: [
            {
                name: "GitHub",
                url: "https://github.com/rupjaisinghani0904",
                icon: SiGithub,
            },
            {
                name: "LinkedIn",
                url: "https://linkedin.com/in/rupjaisinghani",
                icon: SiLinkedin,
            },
            {
                name: "Email",
                url: "mailto:rup.jaisinghani@gmail.com",
                icon: SiGmail,
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
            description: [
                "Incoming Frontend Developer Co-op."
            ],
            team: ""
        },
        {
            id: 2,
            role: "GenAI Technical Advisor Intern",
            company: "Scale AI",
            logo: "src/assets/scaleai_logo.jpeg",
            period: "Jun 2025 - Dec 2025",
            description: [
                "Trained and evaluated industry leading LLMs using RLHF (Reinforcement Learning with Human Feedback) to improve output alignment and reliability.",
                "Designed and implemented complex mathematics and algorithmic prompts to expose model limitations in reasoning, logic, and problem-solving under ambiguous or multi-step conditions.",
                "Applied Chain-of-Thought (CoT) prompting techniques to guide LLMs through structured reasoning tasks, improving step-by-step accuracy in solving advanced coding and math problems."
            ],
            team: ""
        },
        {
            id: 3,
            role: "Backend Developer Coop",
            company: "Priceline.com",
            logo: "src/assets/priceline.logo.jpeg",
            period: "Jan 2025 - Jun 2025",
            description: [
                "Engineered a rule-based error categorization system that enables automated classification of recurring financial errors for the first time, significantly improving resolution times, providing critical visibility into transaction failures.",
                "Implemented a self service Spring Boot API on GCP to empower non-technical teams to directly refine categorizations from the automated Drools engine, ensuring higher data integrity for financial transactions.",
                "Redesigned financial metadata pipelines by extracting and restructuring attributes like rebook totals and insurance fees, improving clarity and accuracy in downstream reporting and complex partner-specific auditing.",
                "Developed dynamic rule engine platform by externalizing Drools logic, enabled management via dedicated CRUD API. Implemented TTL cache to deliver consistent, low latency rule management across distributed system."
            ],
            team: "Fintech"
        },
        {
            id: 4,
            role: "Investment Analyst Intern",
            company: "Partners Group",
            logo: "src/assets/partners_group_logo.jpeg",
            period: "Jun 2024 - Aug 2024",
            description: [
                "Conducted due diligence and execution of 4 prospective direct credit transactions in sectors such as technology, healthcare, and manufacturing, contributing to investment recommendations presented to senior management.",
                "Attended and participated in 5 Investment Committee meetings, recording detailed minutes to document key discussions and decisions, improving team alignment and ensured accurate communication of strategic directions.",
                "Screened 2 potential investments and collaborated cross-functionally to deliver closing presentations summarizing 10+ completed transactions, each valued at $30M+, helping surface key deal insights to support decision-making."
            ],
            team: "Private Credit"
        },
    ],
    projects: [
        {
            id: 1,
            title: "Collaborative Spreadsheet Editor",
            description: "Real-Time Collaborative Spreadsheet Application A full-stack web application that enables users to register, create, and collaboratively edit spreadsheets in real-time.",
            tags: ["React", "Node.js", "WebSockets", "Redis"],
            link: "https://github.com/rupjaisinghani0904/collaborative-spreadsheet-editor",
        },
        {
            id: 2,
            title: "Student Productivity Optimizer",
            description: "A dual-objective application aimed at maximizing student efficiency through algorithmic scheduling and facility usage forecasting.",
            tags: ["Python", "Scikit-learn", "Hill Descent", "Random Forests", "Nueral Networks"],
            link: "https://github.com/mattrwang/neu-productivity-app",
        },
        {
            id: 3,
            title: "LLM-Based Poker Strategy Agent",
            description: "A Retrieval-Augmented Generation (RAG) system designed to execute Game Theory Optimal (GTO) poker strategies based on natural language game descriptions.",
            tags: ["Python", "Qwen LLM", "Retrieval-Augmented Generation", "Supervised Fine-Tuning"],
            link: "#",
        },
    ],
};
