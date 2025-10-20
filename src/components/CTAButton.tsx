import clsx from 'clsx';
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';

type Variant = 'primary' | 'ghost';

type BaseProps = {
  variant?: Variant;
  className?: string;
  children: ReactNode;
};

type CTAButtonAnchorProps = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type CTAButtonButtonProps = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type CTAButtonProps = CTAButtonAnchorProps | CTAButtonButtonProps;

const variants: Record<Variant, string> = {
  primary:
    'bg-brand text-slate-950 hover:bg-brand-light focus-visible:ring-brand-light',
  ghost:
    'bg-white/10 text-white hover:bg-white/20 focus-visible:ring-white/30 border border-white/20',
};

export function CTAButton(props: CTAButtonProps) {
  if ('href' in props) {
    const { children, className, variant = 'primary', href, ...rest } = props;
    const anchorProps = rest as Omit<
      CTAButtonAnchorProps,
      'children' | 'className' | 'variant' | 'href'
    >;

    const buttonClasses = clsx(
      'inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-widest transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950',
      variants[variant],
      className,
    );

    return (
      <a href={href} className={buttonClasses} {...anchorProps}>
        {children}
      </a>
    );
  }

  const { children, className, variant = 'primary', ...rest } = props;
  const buttonProps = rest as Omit<CTAButtonButtonProps, 'children' | 'className' | 'variant'>;

  const buttonClasses = clsx(
    'inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-widest transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950',
    variants[variant],
    className,
  );

  return (
    <button className={buttonClasses} {...buttonProps}>
      {children}
    </button>
  );
}
