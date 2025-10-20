import { motion } from 'framer-motion';
import { SectionTitle } from '../components/SectionTitle';
import { processSteps } from '../data/siteContent';

export function Process() {
  return (
    <section id="process" className="bg-slate-950 py-24">
      <div className="container space-y-16">
        <SectionTitle
          eyebrow="How it works"
          title="A straightforward project journey"
          description="From the first call to the final walkthrough, you have a dedicated point of contact guiding the work and communicating at every milestone."
          align="center"
        />

        <ol className="relative grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <motion.li
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: index * 0.1 }}
              className="glass-card flex flex-col rounded-3xl p-6"
            >
              <span className="mb-4 inline-flex size-10 items-center justify-center rounded-full bg-brand/20 text-sm font-semibold uppercase tracking-[0.3em] text-brand">
                {index + 1}
              </span>
              <h3 className="text-lg font-semibold uppercase tracking-[0.3em] text-white">
                {step.title}
              </h3>
              <p className="mt-3 text-sm text-white/70 leading-relaxed">{step.detail}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
