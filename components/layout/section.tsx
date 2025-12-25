import { ReactNode } from 'react';
import { cn } from '../ui/button';

interface SectionProps {
    children: ReactNode;
    className?: string;
    id?: string;
    background?: 'paper' | 'stone' | 'slate';
    fade?: boolean; // For entrance animation placeholder
}

export function Section({ children, className, id, background = 'paper', fade = true }: SectionProps) {
    return (
        <section
            id={id}
            className={cn(
                'py-20 md:py-32 relative', // Min 100px vertical on desktop (py-32 = 8rem = 128px)
                {
                    'bg-paper': background === 'paper',
                    'bg-stone': background === 'stone',
                    'bg-slate text-stone': background === 'slate',
                },
                className
            )}
        >
            {/* Animation wrapper can be added here later */}
            {children}
        </section>
    );
}
