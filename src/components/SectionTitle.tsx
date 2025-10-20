import clsx from 'clsx';
import type { ReactNode } from 'react';

interface SectionTitleProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionTitle({
  eyebrow,
  title,
  description,
  align = 'left',
  className,
}: SectionTitleProps) {
  return (
    <div className={clsx('space-y-4', align === 'center' && 'text-center mx-auto max-w-3xl', className)}>
      {eyebrow && (
        <p className="text-brand uppercase tracking-[0.4em] text-xs font-semibold">
          {eyebrow}
        </p>
      )}
      <h2 className={clsx('section-heading', align === 'center' && 'mx-auto')}>
        {title}
      </h2>
      {description && (
        <p className="text-base text-white/70 leading-relaxed">{description}</p>
      )}
    </div>
  );
}
