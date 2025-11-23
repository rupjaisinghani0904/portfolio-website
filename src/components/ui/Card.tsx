import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

interface CardProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
}

export const Card: React.FC<CardProps> = ({ children, className, delay = 0 }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay }}
            className={cn(
                "bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 border border-gray-100",
                className
            )}
        >
            {children}
        </motion.div>
    );
};
