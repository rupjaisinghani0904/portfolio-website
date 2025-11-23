import React from 'react';
import { cn } from '../../utils/cn';

interface SectionProps {
    id: string;
    className?: string;
    children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({ id, className, children }) => {
    return (
        <section id={id} className={cn("py-20 px-4 md:px-8 max-w-7xl mx-auto", className)}>
            {children}
        </section>
    );
};
