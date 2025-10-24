import { CTAButton } from '../components/CTAButton';
import { BlogHeader } from '../components/BlogHeader';
import { Footer } from '../sections/Footer';
import { getPostBySlug } from '../lib/blog';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { business } from '../data/siteContent';
import { ArrowLeft } from 'lucide-react';

export function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  if (!post) {
    return (
      <div className="min-h-screen bg-slate-950 text-white">
        <BlogHeader />
        <main className="pb-24 pt-32">
          <section className="container max-w-2xl space-y-6 text-center">
            <h1 className="text-4xl font-semibold uppercase tracking-[0.2em]">
              Post not found
            </h1>
            <p className="text-base text-white/70 leading-relaxed">
              The article you are looking for might have been renamed or removed.
            </p>
            <div className="flex justify-center gap-4">
              <CTAButton to="/blog" variant="ghost">
                Back to blog
              </CTAButton>
              <CTAButton to="/">Return home</CTAButton>
            </div>
          </section>
        </main>
        <Footer showNav={false} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <BlogHeader />
      <main className="pb-24 pt-32">
        <article className="container max-w-3xl space-y-10">
          <CTAButton to="/blog" variant="ghost" className="inline-flex items-center gap-2 text-xs">
            <ArrowLeft className="size-4" aria-hidden="true" />
            Back to all posts
          </CTAButton>
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.35em] text-brand-light">
              {post.formattedDate}
            </p>
            <h1 className="text-4xl font-semibold uppercase tracking-[0.15em] md:text-5xl">
              {post.title}
            </h1>
            <p className="text-base text-white/70 leading-relaxed">{post.summary}</p>
          </div>

          {post.heroImage ? (
            <div className="overflow-hidden rounded-3xl">
              <img
                src={post.heroImage}
                alt=""
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <span className="sr-only">Featured image for {post.title}</span>
            </div>
          ) : null}

          <ReactMarkdown className="markdown-body text-white/80 leading-relaxed">
            {post.body}
          </ReactMarkdown>

          <div className="flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-white/10 bg-white/5 p-6">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-white/60">
                Need a licensed crew?
              </p>
              <p className="text-lg font-semibold text-white">
                Schedule a walkthrough or emergency visit.
              </p>
            </div>
            <div className="flex gap-3">
              <CTAButton to="/#contact" variant="ghost">
                Request quote
              </CTAButton>
              <CTAButton href={`tel:${business.phone.replace(/\D/g, '')}`}>
                Call {business.phone}
              </CTAButton>
            </div>
          </div>
        </article>
      </main>
      <Footer showNav={false} />
    </div>
  );
}
