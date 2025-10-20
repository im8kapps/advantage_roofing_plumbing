import { motion } from 'framer-motion';
import { SectionTitle } from '../components/SectionTitle';
import { business } from '../data/siteContent';

const differentiators = [
  'Coordinated trades: roofing, plumbing, and remodels from one accountable crew.',
  'Detailed scopes and updates—know what is happening on your project every step of the way.',
  'Respect for your home: clean job sites, protected surfaces, and end-of-day walk-throughs.',
  'Flexible scheduling with storm season availability and emergency response.',
];

export function WhyUs() {
  return (
    <section id="why-us" className="relative overflow-hidden bg-slate-950 py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(219,127,43,0.15),transparent_60%)]" />

      <div className="container relative grid gap-16 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)]">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <SectionTitle
            eyebrow="Why homeowners choose us"
            title="Experience that shows in every detail"
            description={`${business.name} treats every project like it is our own home—craftsmanship, clear communication, and accountability start to finish.`}
          />

          <ul className="space-y-4 text-sm leading-relaxed text-white/70">
            {differentiators.map((item) => (
              <li key={item} className="flex gap-4">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-brand" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="glass-card rounded-[3rem] border-white/10 p-10"
        >
          <div className="space-y-6">
            <h3 className="font-display text-4xl uppercase tracking-[0.35em] text-white">
              {business.yearsExperience}
            </h3>
            <p className="text-white/70">
              From emergency leak fixes to full structural rebuilds, we have guided homeowners through
              every kind of project. Our network of certified subs and in-house pros means you get one point
              of contact with the right specialists on the job.
            </p>

            <div className="rounded-2xl bg-white/10 p-6">
              <p className="text-xs uppercase tracking-[0.35em] text-white/60">
                Core promise
              </p>
              <p className="mt-3 text-lg font-semibold text-white">
                Show up, communicate clearly, finish strong, and stand behind the work.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
