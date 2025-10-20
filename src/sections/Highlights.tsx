import { motion } from 'framer-motion';
import { highlights } from '../data/siteContent';

export function Highlights() {
  return (
    <section className="relative border-b border-white/5 bg-slate-950 py-16">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="container grid gap-6 md:grid-cols-3">
        {highlights.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ delay: index * 0.1 }}
            className="glass-card rounded-3xl p-6"
          >
            <h3 className="text-lg font-semibold uppercase tracking-[0.3em] text-brand">
              {item.title}
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-white/70">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
