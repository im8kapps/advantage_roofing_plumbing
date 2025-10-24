import { BlogHeader } from '../components/BlogHeader';
import { BlogCard } from '../components/BlogCard';
import { CTAButton } from '../components/CTAButton';
import { getAllPosts } from '../lib/blog';
import { Footer } from '../sections/Footer';

export function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <BlogHeader />
      <main className="pb-24 pt-32">
        <section className="container space-y-12">
          <div className="space-y-6 max-w-3xl">
            <p className="text-xs uppercase tracking-[0.4em] text-brand">Blog</p>
            <h1 className="text-4xl font-semibold uppercase tracking-[0.15em] md:text-5xl">
              Field-tested advice for smarter projects
            </h1>
            <p className="text-base text-white/70 leading-relaxed">
              Explore quick, actionable insights from our roofing, plumbing, and remodel crews.
              Each article breaks down the maintenance and planning steps homeowners ask about most.
            </p>
          </div>

          {posts.length === 0 ? (
            <div className="rounded-3xl border border-dashed border-white/20 bg-white/5 p-12 text-center">
              <p className="text-sm uppercase tracking-[0.3em] text-white/60">
                Blog posts will appear here soon.
              </p>
              <div className="mt-6 flex justify-center">
                <CTAButton to="/#contact">Request a quote</CTAButton>
              </div>
            </div>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {posts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          )}
        </section>
      </main>
      <Footer showNav={false} />
    </div>
  );
}
