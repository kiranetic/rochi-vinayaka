import { ButtonHTMLAttributes, forwardRef } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link';
    size?: 'sm' | 'md' | 'lg';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={cn(
                    'inline-flex items-center justify-center transition-all duration-200 ease-out focus:outline-none focus:ring-2 focus:ring-bronze/50 disabled:opacity-50 disabled:pointer-events-none uppercase tracking-[0.08em] font-semibold text-sm active:scale-[0.98]',
                    {
                        'bg-bronze text-paper hover:bg-bronze-light': variant === 'primary',
                        'border border-bronze text-bronze hover:bg-bronze hover:text-paper': variant === 'secondary' || variant === 'outline',
                        'text-bronze hover:text-bronze-light underline-offset-4 hover:underline': variant === 'link',
                        'hover:bg-stone text-charcoal': variant === 'ghost',
                        'h-10 px-6 py-2': size === 'md',
                        'h-8 px-4 text-xs': size === 'sm',
                        'h-12 px-8 text-base': size === 'lg',
                    },
                    className
                )}
                {...props}
            />
        );
    }
);

Button.displayName = 'Button';

export { Button, cn };
