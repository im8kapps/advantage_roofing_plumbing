import clsx from 'clsx';
import { Link } from 'react-router-dom';
import type { BlogPost } from '../lib/blog';

interface BlogCardProps {
  post: BlogPost;
  className?: string;
}

export function BlogCard({ post, className }: BlogCardProps) {
  return (
    <article
      className={clsx(
        'glass-card flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/5',
        className,
      )}
    >
      {post.heroImage ? (
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={post.heroImage}
            alt=""
            className="h-full w-full object-cover"
            loading="lazy"
          />
          <span className="sr-only">Featured image for {post.title}</span>
        </div>
      ) : null}
      <div className="flex flex-1 flex-col gap-4 p-8">
        <p className="text-xs uppercase tracking-[0.35em] text-brand-light">
          {post.formattedDate}
        </p>
        <h3 className="text-xl font-semibold uppercase tracking-[0.2em] text-white">
          {post.title}
        </h3>
        <p className="text-sm leading-relaxed text-white/70">{post.summary}</p>
        <div className="mt-auto pt-4">
          <Link
            to={`/blog/${post.slug}`}
            className="text-sm font-semibold uppercase tracking-[0.3em] text-brand transition hover:text-brand-light"
          >
            Read more
          </Link>
        </div>
      </div>
    </article>
  );
}
