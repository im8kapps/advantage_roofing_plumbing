import type { ComponentType } from 'react';

export interface MDXMeta {
  title: string;
  date: string;
  excerpt: string;
  cover?: string;
  tags?: string[];
  draft?: boolean;
}

declare module '*.mdx' {
  const Component: ComponentType<Record<string, unknown>>;
  export const meta: MDXMeta;
  export default Component;
}
