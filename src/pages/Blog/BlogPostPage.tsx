import clsx from 'clsx';
import { MDXProvider } from '@mdx-js/react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { getPostBySlug } from '../../lib/blog';

const mdxComponents = {
  h2: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      {...props}
      className={clsx(
        'font-display text-3xl uppercase tracking-[0.2em] text-white',
        className,
      )}
    />
  ),
  h3: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      {...props}
      className={clsx(
        'font-display text-2xl uppercase tracking-[0.2em] text-brand',
        className,
      )}
    />
  ),
  p: ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p
      {...props}
      className={clsx('text-base leading-relaxed text-white/80', className)}
    />
  ),
  ul: ({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
    <ul
      {...props}
      className={clsx(
        'list-disc space-y-2 pl-6 text-white/80 marker:text-brand',
        className,
      )}
    />
  ),
  ol: ({ className, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
    <ol
      {...props}
      className={clsx(
        'list-decimal space-y-2 pl-6 text-white/80 marker:text-brand',
        className,
      )}
    />
  ),
  blockquote: ({
    className,
    ...props
  }: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote
      {...props}
      className={clsx(
        'border-l-4 border-brand/80 pl-6 text-lg italic text-white',
        className,
      )}
    />
  ),
  a: ({ className, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a
      {...props}
      className={clsx(
        'font-semibold text-brand underline underline-offset-4 hover:text-brand-light',
        className,
      )}
    />
  ),
  img: ({
    className,
    alt,
    ...props
  }: React.ImgHTMLAttributes<HTMLImageElement>) => (
    <img
      {...props}
      alt={alt ?? ''}
      className={clsx(
        'my-6 w-full rounded-3xl border border-white/10 object-cover',
        className,
      )}
    />
  ),
};

export function BlogPostPage() {
  const params = useParams<{ slug: string }>();

  if (!params.slug) {
    return <Navigate to="/blog" replace />;
  }

  const post = getPostBySlug(params.slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const PostComponent = post.Component;

  return (
    <div className="bg-slate-950 text-white">
      <article className="container space-y-10 py-28">
        <div className="space-y-4">
          <Link
            to="/blog"
            className="text-xs font-semibold uppercase tracking-[0.35em] text-white/60 hover:text-brand"
          >
            ← Back to all posts
          </Link>
          <p className="text-xs uppercase tracking-[0.35em] text-brand-light">
            {new Date(post.meta.date).toLocaleDateString('en-US', {
              month: 'long',
              day: 'numeric',
              year: 'numeric',
            })}{' '}
            • {post.readingTime}
          </p>
          <h1 className="font-display text-5xl uppercase tracking-[0.15em] leading-tight text-white">
            {post.meta.title}
          </h1>
          {post.meta.tags && post.meta.tags.length > 0 && (
            <div className="flex flex-wrap gap-3">
              {post.meta.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/20 px-3 py-1 text-xs uppercase tracking-[0.3em] text-white/60"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {post.meta.cover && (
          <img
            src={post.meta.cover}
            alt={post.meta.title}
            className="w-full rounded-[2.5rem] border border-white/10 object-cover"
            loading="lazy"
          />
        )}

        <MDXProvider components={mdxComponents}>
          <div className="prose prose-invert max-w-none space-y-6 text-white/80">
            <PostComponent />
          </div>
        </MDXProvider>

        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
          <p className="text-sm uppercase tracking-[0.35em] text-white/60">
            Have a project in mind?
          </p>
          <p className="mt-3 text-lg text-white">
            Call us at{' '}
            <a
              href="tel:3174057390"
              className="font-semibold text-brand hover:text-brand-light"
            >
              317-405-7390
            </a>{' '}
            or email{' '}
            <a
              href="mailto:Advan.Co.llc@Gmail.com"
              className="font-semibold text-brand hover:text-brand-light"
            >
              Advan.Co.llc@Gmail.com
            </a>{' '}
            to talk through the scope.
          </p>
        </div>
      </article>
    </div>
  );
}
