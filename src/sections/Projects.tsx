import { motion } from 'framer-motion';
import { SectionTitle } from '../components/SectionTitle';
import { projectGallery } from '../data/siteContent';

export function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden bg-slate-900 py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(219,127,43,0.12),transparent_65%)]" />
      <div className="container relative space-y-14">
        <SectionTitle
          eyebrow="Recent work"
          title="Featured roofing + plumbing projects"
          description="A rotating mix of storm restorations, remodels, and mechanical upgrades delivered with tight timelines and quality finishes."
          align="center"
        />

        <div className="grid gap-8 lg:grid-cols-3">
          {projectGallery.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: index * 0.15 }}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-lg"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                <span className="absolute bottom-4 left-4 rounded-full bg-brand/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-950">
                  Completed
                </span>
              </div>
              <div className="space-y-3 p-6">
                <h3 className="text-lg font-semibold uppercase tracking-[0.3em] text-white">
                  {project.title}
                </h3>
                <p className="text-sm text-white/70 leading-relaxed">{project.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
