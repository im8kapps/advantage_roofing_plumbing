import { motion } from 'framer-motion';
import { CTAButton } from '../components/CTAButton';
import { StatsBar } from '../components/StatsBar';
import { business } from '../data/siteContent';

export function Hero() {
  return (
    <section
      id="hero"
      className="relative isolate overflow-hidden bg-hero-gradient pt-32 pb-24 text-white"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom_left,rgba(219,127,43,0.25),transparent_45%)]" />
      <div className="container relative grid items-center gap-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <p className="text-sm uppercase tracking-[0.4em] text-brand-light">
            Cloverdale & Central Indiana
          </p>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl uppercase tracking-[0.2em] leading-[1.1]">
            Built Right. Backed by Reliability.
          </h1>
          <p className="max-w-2xl text-lg text-white/80">
            {business.name} delivers full-scope roofing, plumbing, and remodel projects with one experienced,
            trusted crew. Responsive service, transparent pricing, and craftsmanship that stands up to Indiana
            weather.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <CTAButton href="#contact" className="shadow-glow">
              Request a Site Visit
            </CTAButton>
            <CTAButton href={`tel:${business.phone.replace(/\D/g, '')}`} variant="ghost">
              Call {business.phone}
            </CTAButton>
          </div>
          <div className="flex flex-wrap items-center gap-6 text-sm uppercase tracking-[0.35em] text-white/60">
            <span>{business.license}</span>
            <span>{business.yearsExperience}</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="relative"
        >
          <div className="glass-card rounded-[3rem] border-white/20 p-6 shadow-glow">
            <div className="aspect-[4/5] overflow-hidden rounded-[2.5rem] border border-white/20">
              <img
                src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=900&q=80"
                alt="Contractor reviewing remodeling plans in a modern kitchen space."
                className="h-full w-full object-cover"
              />
            </div>
            <div className="-mt-10 flex gap-4">
              <div className="glass-card w-1/2 rounded-2xl p-4 text-xs uppercase tracking-[0.3em] text-white/70">
                <p>Emergency Ready</p>
                <p className="mt-2 text-2xl font-display tracking-[0.3em] text-brand">
                  24/7
                </p>
              </div>
              <div className="glass-card w-1/2 rounded-2xl bg-brand/10 p-4 text-xs uppercase tracking-[0.3em] text-white/70">
                <p>Service Area</p>
                <p className="mt-2 text-2xl font-display tracking-[0.3em] text-white">
                  Indiana+
                </p>
              </div>
            </div>
          </div>
          <div className="absolute -left-14 -top-12 hidden h-24 w-24 rounded-full bg-brand/20 blur-3xl lg:block" />
        </motion.div>
      </div>

      <div className="container mt-16">
        <StatsBar />
      </div>
    </section>
  );
}
