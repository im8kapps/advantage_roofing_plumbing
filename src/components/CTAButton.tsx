import clsx from 'clsx';
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import type { LinkProps } from 'react-router-dom';

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
    to?: undefined;
  };

type CTAButtonLinkProps = BaseProps &
  Omit<LinkProps, 'to' | 'className' | 'children'> & {
    to: string;
    href?: undefined;
  };

type CTAButtonProps = CTAButtonAnchorProps | CTAButtonButtonProps | CTAButtonLinkProps;

const variants: Record<Variant, string> = {
  primary:
    'bg-brand text-slate-950 hover:bg-brand-light focus-visible:ring-brand-light',
  ghost:
    'bg-white/10 text-white hover:bg-white/20 focus-visible:ring-white/30 border border-white/20',
};

export function CTAButton(props: CTAButtonProps) {
  if ('to' in props && typeof props.to === 'string') {
    const { children, className, variant = 'primary', to, ...rest } = props as CTAButtonLinkProps;
    const linkProps = rest as Omit<CTAButtonLinkProps, 'children' | 'className' | 'variant' | 'to'>;

    const buttonClasses = clsx(
      'inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-widest transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950',
      variants[variant],
      className,
    );

    return (
      <Link to={to} className={buttonClasses} {...linkProps}>
        {children}
      </Link>
    );
  }

  if ('href' in props && typeof props.href === 'string') {
    const { children, className, variant = 'primary', href, ...rest } = props as CTAButtonAnchorProps;
    const anchorProps = rest as Omit<CTAButtonAnchorProps, 'children' | 'className' | 'variant' | 'href'>;

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
