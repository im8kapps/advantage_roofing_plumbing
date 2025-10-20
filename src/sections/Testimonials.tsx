import { motion } from 'framer-motion';
import { SectionTitle } from '../components/SectionTitle';
import { testimonials } from '../data/siteContent';

export function Testimonials() {
  return (
    <section id="testimonials" className="relative overflow-hidden bg-slate-900 py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(219,127,43,0.2),transparent_65%)]" />
      <div className="container relative space-y-14">
        <SectionTitle
          eyebrow="Testimonials"
          title="Neighbors who trust our team"
          description="Word-of-mouth built this company. Here is what recent clients had to say after finishing their projects."
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
      </div>
    </section>
  );
}
