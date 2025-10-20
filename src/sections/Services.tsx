import { motion } from 'framer-motion';
import { Icon } from '../components/Icon';
import { SectionTitle } from '../components/SectionTitle';
import { services } from '../data/siteContent';

export function Services() {
  return (
    <section id="services" className="bg-slate-950 py-24">
      <div className="container space-y-16">
        <SectionTitle
          eyebrow="Services"
          title="Full-scope contracting under one roof"
          description="Roofing, plumbing, and remodeling experts delivering cohesive project management and durable results."
          align="center"
        />

        <div className="grid gap-8 md:grid-cols-2">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: index * 0.1 }}
              className="glass-card relative overflow-hidden rounded-3xl border-white/10 p-8"
            >
              <div className="absolute -right-24 top-1/2 hidden h-40 w-40 -translate-y-1/2 rounded-full bg-brand/10 blur-3xl md:block" />
              <div className="flex items-center gap-4">
                <span className="rounded-full bg-brand/20 p-3">
                  <Icon name={service.icon as never} className="size-6 text-brand" />
                </span>
                <h3 className="text-xl font-semibold uppercase tracking-[0.3em] text-white">
                  {service.title}
                </h3>
              </div>
              <p className="mt-4 text-sm text-white/70 leading-relaxed">
                {service.description}
              </p>
              <ul className="mt-6 space-y-2 text-sm text-white/60">
                {service.items.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="h-1 w-6 rounded-full bg-brand" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
