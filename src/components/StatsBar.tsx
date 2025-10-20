import { motion } from 'framer-motion';
import { stats } from '../data/siteContent';

export function StatsBar() {
  return (
    <div className="glass-card grid gap-6 rounded-3xl p-6 md:grid-cols-3">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ delay: index * 0.1 }}
          className="space-y-1 text-center md:text-left"
        >
          <p className="text-3xl font-display uppercase tracking-[0.3em] text-brand">{stat.value}</p>
          <p className="text-sm uppercase tracking-[0.35em] text-white/60">
            {stat.label}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
