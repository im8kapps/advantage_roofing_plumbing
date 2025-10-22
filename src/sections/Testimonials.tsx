import { motion } from 'framer-motion';
import { SectionTitle } from '../components/SectionTitle';
import { testimonials } from '../data/siteContent';

export function Testimonials() {
  return (
    <section id="testimonials" className="relative overflow-hidden bg-slate-900 py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(219,127,43,0.2),transparent_65%)]" />
      <div className="container relative space-y-14">
        <SectionTitle
          eyebrow="Google Reviews"
          title="Neighbors who trust our team"
          description="Pulled from our Google Business listing—real experiences from homeowners across central Indiana."
          align="center"
        />

        <div className="grid gap-8 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <motion.blockquote
              key={testimonial.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: index * 0.1 }}
              className="glass-card h-full rounded-3xl p-8 text-white/80"
            >
              <p className="text-lg leading-relaxed">&ldquo;{testimonial.quote}&rdquo;</p>
              <footer className="mt-6 text-sm uppercase tracking-[0.3em] text-brand">
                {testimonial.name} • {testimonial.location}
              </footer>
            </motion.blockquote>
          ))}
        </div>

        <div className="mx-auto w-full max-w-4xl">
          <div className="glass-card overflow-hidden rounded-3xl border border-white/10">
            <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-white/60">Live listing</p>
                <p className="mt-1 text-sm font-semibold text-white">Advantage Company Contracting Roofing and Plumbing on Google</p>
              </div>
              <a
                href="https://www.google.com/maps/place/Advantage+Company+Contracting+Roofing+and+Plumbing/"
                target="_blank"
                rel="noreferrer"
                className="text-xs font-semibold uppercase tracking-[0.35em] text-brand hover:text-brand-light"
              >
                View all reviews
              </a>
            </div>
            <iframe
              title="Google reviews for Advantage Company Contracting Roofing and Plumbing"
              src="https://maps.google.com/maps?cid=0x6dc8c5290c67e593&output=embed&hl=en"
              className="h-[420px] w-full"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
