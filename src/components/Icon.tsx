import type { LucideIcon } from 'lucide-react';
import * as Icons from 'lucide-react';
import clsx from 'clsx';

type IconName = keyof typeof Icons;

interface IconProps {
  name: IconName;
  className?: string;
}

const fallbackIcon = Icons.CircleDot;

export function Icon({ name, className }: IconProps) {
  const LucideIcon = (Icons[name] as LucideIcon) ?? fallbackIcon;

  return <LucideIcon className={clsx('size-6', className)} aria-hidden="true" />;
}

export type { IconName };
