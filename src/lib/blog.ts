import type { ComponentType } from 'react';
import type { MDXMeta } from '../types/mdx';

export interface BlogMeta extends MDXMeta {
  cover?: string;
}

export interface BlogPost {
  slug: string;
  meta: BlogMeta;
  Component: ComponentType<Record<string, unknown>>;
  readingTime: string;
}

type BlogModule = {
  default: ComponentType<Record<string, unknown>>;
  meta: BlogMeta;
};

const compiledModules = import.meta.glob('../content/blog/*.mdx', {
  eager: true,
}) as Record<string, BlogModule>;

const rawModules = import.meta.glob('../content/blog/*.mdx', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>;

function formatReadingTime(text: string): string {
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.round(words / 200));
  return `${minutes} min read`;
}

const blogPosts: BlogPost[] = Object.entries(compiledModules)
  .map(([path, module]) => {
    const rawContent = rawModules[path];

    if (!module.meta) {
      throw new Error(`Blog post at ${path} is missing a exported meta object.`);
    }

    const slug = path
      .split('/')
      .pop()
      ?.replace(/\.mdx?$/, '');

    if (!slug) {
      throw new Error(`Unable to derive slug for blog post at ${path}.`);
    }

    return {
      slug,
      meta: module.meta,
      Component: module.default,
      readingTime: formatReadingTime(rawContent),
    };
  })
  .filter((post) => !post.meta.draft)
  .sort(
    (a, b) =>
      new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime(),
  );

export function getAllPosts(): BlogPost[] {
  return blogPosts;
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
