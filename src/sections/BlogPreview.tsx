import { Link } from 'react-router-dom';
import { SectionTitle } from '../components/SectionTitle';
import { getAllPosts } from '../lib/blog';

const featuredPosts = getAllPosts().slice(0, 3);

export function BlogPreview() {
  if (featuredPosts.length === 0) {
    return null;
  }

  return (
    <section id="blog" className="bg-slate-950 py-24">
      <div className="container space-y-12">
        <SectionTitle
          eyebrow="From the job site"
          title="Latest insights & project stories"
          description="Quick reads from the Advantage crew—seasonal tips, plumbing checklists, and behind-the-scenes project recaps."
        />

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {featuredPosts.map((post) => (
            <article
              key={post.slug}
              className="glass-card flex h-full flex-col overflow-hidden rounded-3xl border border-white/10"
            >
              {post.meta.cover && (
                <img
                  src={post.meta.cover}
                  alt={post.meta.title}
                  className="h-48 w-full object-cover"
                  loading="lazy"
                />
              )}
              <div className="flex flex-1 flex-col space-y-4 p-8">
                <p className="text-xs uppercase tracking-[0.35em] text-white/50">
                  {new Date(post.meta.date).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </p>
                <h3 className="text-xl font-semibold uppercase tracking-[0.25em] text-white">
                  {post.meta.title}
                </h3>
                <p className="text-sm text-white/70 leading-relaxed">
                  {post.meta.excerpt}
                </p>
                <div className="mt-auto">
                  <Link
                    to={`/blog/${post.slug}`}
                    className="text-sm font-semibold uppercase tracking-[0.3em] text-brand hover:text-brand-light"
                  >
                    Read post →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="flex justify-center">
          <Link
            to="/blog"
            className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold uppercase tracking-[0.4em] text-white hover:border-brand hover:text-brand"
          >
            View all posts
          </Link>
        </div>
      </div>
    </section>
  );
}
