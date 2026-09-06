'use client';

import * as React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
}

const baseClasses =
  'inline-flex items-center justify-center rounded-md font-medium transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 active:scale-[0.97]';

const variantClasses: Record<NonNullable<ButtonProps['variant']>, string> = {
  primary:
    'bg-ink text-background shadow-sm hover:-translate-y-0.5 hover:bg-stone-800 hover:shadow-md',
  secondary:
    'bg-surface text-ink ring-1 ring-inset ring-stone-900/10 hover:-translate-y-0.5 hover:ring-stone-900/20',
  ghost: 'bg-transparent text-ink hover:bg-stone-900/5',
  danger: 'bg-red-600 text-white shadow-sm hover:-translate-y-0.5 hover:bg-red-500 hover:shadow-md',
};

const sizeClasses: Record<NonNullable<ButtonProps['size']>, string> = {
  sm: 'h-8 px-3 text-xs',
  md: 'h-10 px-4 text-sm',
  lg: 'h-12 px-6 text-base',
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={[baseClasses, variantClasses[variant], sizeClasses[size], className]
          .filter(Boolean)
          .join(' ')}
        {...props}
      />
    );
  },
);

Button.displayName = 'Button';
