import { CTAButton } from '../components/CTAButton';
import { SectionTitle } from '../components/SectionTitle';
import { getFeaturedPosts } from '../lib/blog';
import { BlogCard } from '../components/BlogCard';

export function Blog() {
  const posts = getFeaturedPosts();

  return (
    <section id="blog" className="bg-slate-950 py-24">
      <div className="container space-y-16">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <SectionTitle
            eyebrow="Insights"
            title="Latest tips from the field"
            description="Short reads that help homeowners protect their roofing, plumbing, and remodel investments."
          />
          <CTAButton to="/blog" className="self-start md:self-auto">
            View all posts
          </CTAButton>
        </div>

        {posts.length === 0 ? (
          <p className="text-center text-sm uppercase tracking-[0.3em] text-white/60">
            Blog posts will appear here once published.
          </p>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
