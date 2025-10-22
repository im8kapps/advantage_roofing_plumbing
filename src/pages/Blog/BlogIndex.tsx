import { Link } from 'react-router-dom';
import { getAllPosts } from '../../lib/blog';

const posts = getAllPosts();

export function BlogIndex() {
  return (
    <div className="bg-slate-950 text-white">
      <section className="container flex flex-col gap-12 py-28">
        <div className="max-w-3xl space-y-4">
          <p className="text-xs uppercase tracking-[0.4em] text-brand-light">
            News & Projects
          </p>
          <h1 className="font-display text-5xl uppercase tracking-[0.15em]">
            Advantage field notes
          </h1>
          <p className="text-lg text-white/80">
            Seasonal checklists, emergency tips, and case studies from jobs across
            Cloverdale and central Indiana. Posts update whenever the crew finishes
            a project worth sharing.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="glass-card flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 transition hover:border-brand/40"
            >
              {post.meta.cover && (
                <img
                  src={post.meta.cover}
                  alt={post.meta.title}
                  className="h-52 w-full object-cover"
                  loading="lazy"
                />
              )}
              <div className="flex flex-1 flex-col space-y-4 p-8">
                <p className="text-xs uppercase tracking-[0.35em] text-white/50">
                  {new Date(post.meta.date).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric',
                  })}{' '}
                  • {post.readingTime}
                </p>
                <h2 className="text-xl font-semibold uppercase tracking-[0.25em] text-white">
                  {post.meta.title}
                </h2>
                <p className="text-sm text-white/70 leading-relaxed">
                  {post.meta.excerpt}
                </p>
                <div className="mt-auto">
                  <Link
                    to={`/blog/${post.slug}`}
                    className="text-sm font-semibold uppercase tracking-[0.3em] text-brand hover:text-brand-light"
                  >
                    Read more →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
