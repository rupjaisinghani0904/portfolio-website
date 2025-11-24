import { useState, useEffect } from 'react';

export const useScrollSpy = (sectionIds: string[], offset: number = 375) => {
    const [activeSection, setActiveSection] = useState<string>('');

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + offset;

            // Find the section that is currently in view
            for (const sectionId of sectionIds) {
                const element = document.getElementById(sectionId);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetHeight = element.offsetHeight;

                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(sectionId);
                        return; // Found the active section, stop searching
                    }
                }
            }
        };

        // Initial check
        handleScroll();

        // Throttling with requestAnimationFrame for performance
        let ticking = false;
        const onScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    handleScroll();
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, [sectionIds, offset]);

    return activeSection;
};
