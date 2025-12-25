import { ReactNode } from 'react';
import { cn } from '../ui/button'; // Reusing cn utility, usually should be in lib/utils

interface ContainerProps {
    children: ReactNode;
    className?: string;
    size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
}

// Design System: "Text max-width: editorial column (never full-width)"
// But layout has full width sections.
// We'll use 'lg' (max-w-7xl) as default for general content, 'sm' for editorial text.

export function Container({ children, className, size = 'lg' }: ContainerProps) {
    return (
        <div
            className={cn(
                'mx-auto px-6 md:px-12 w-full',
                {
                    'max-w-3xl': size === 'sm', // Editorial width
                    'max-w-5xl': size === 'md',
                    'max-w-7xl': size === 'lg', // Standard desktop
                    'max-w-[1400px]': size === 'xl', // Wide
                    'max-w-full': size === 'full',
                },
                className
            )}
        >
            {children}
        </div>
    );
}
