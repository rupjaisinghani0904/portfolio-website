import React from 'react';

interface SocialLinkProps {
    href: string;
    icon: React.ElementType;
    label: string;
}

export const SocialLink: React.FC<SocialLinkProps> = ({ href, icon: Icon, label }) => {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-gray-100 rounded-full text-gray-600 hover:bg-gray-200 hover:text-gray-900 transition-colors"
            aria-label={label}
        >
            <Icon className="w-5 h-5" />
        </a>
    );
};
