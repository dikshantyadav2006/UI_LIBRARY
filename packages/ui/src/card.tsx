'use client';

import * as React from 'react';

export type CardProps = React.HTMLAttributes<HTMLDivElement>;

const cardClasses = 'rounded-lg border border-zinc-200 bg-white text-zinc-900 shadow-sm';

export const Card = React.forwardRef<HTMLDivElement, CardProps>(({ className, ...props }, ref) => {
  return (
    <div ref={ref} className={[cardClasses, className].filter(Boolean).join(' ')} {...props} />
  );
});

Card.displayName = 'Card';

export type CardHeaderProps = React.HTMLAttributes<HTMLDivElement>;

export const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={['flex flex-col space-y-1.5 p-6', className].filter(Boolean).join(' ')}
        {...props}
      />
    );
  },
);

CardHeader.displayName = 'CardHeader';

export type CardTitleProps = React.HTMLAttributes<HTMLHeadingElement>;

export const CardTitle = React.forwardRef<HTMLHeadingElement, CardTitleProps>(
  ({ className, ...props }, ref) => {
    return (
      <h3
        ref={ref}
        className={['text-lg font-semibold leading-none tracking-tight', className]
          .filter(Boolean)
          .join(' ')}
        {...props}
      />
    );
  },
);

CardTitle.displayName = 'CardTitle';

export type CardDescriptionProps = React.HTMLAttributes<HTMLParagraphElement>;

export const CardDescription = React.forwardRef<HTMLParagraphElement, CardDescriptionProps>(
  ({ className, ...props }, ref) => {
    return (
      <p
        ref={ref}
        className={['text-sm text-zinc-500', className].filter(Boolean).join(' ')}
        {...props}
      />
    );
  },
);

CardDescription.displayName = 'CardDescription';

export type CardContentProps = React.HTMLAttributes<HTMLDivElement>;

export const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>(
  ({ className, ...props }, ref) => {
    return (
      <div ref={ref} className={['p-6 pt-0', className].filter(Boolean).join(' ')} {...props} />
    );
  },
);

CardContent.displayName = 'CardContent';

export type CardFooterProps = React.HTMLAttributes<HTMLDivElement>;

export const CardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={['flex items-center p-6 pt-0', className].filter(Boolean).join(' ')}
        {...props}
      />
    );
  },
);

CardFooter.displayName = 'CardFooter';
