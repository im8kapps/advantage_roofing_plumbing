import { motion } from "framer-motion";
import { CTAButton } from "../components/CTAButton";
import { business } from "../data/siteContent";
import heroVideo from "../assets/images/output-bg.mp4";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative isolate overflow-hidden bg-slate-950 pt-20 md:pt-32 pb-20 text-white"
    >
      <video
        className="absolute inset-0 -z-20 h-full w-full object-cover"
        src={heroVideo}
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
        role="presentation"
      />
      <div className="absolute inset-0 -z-10 bg-slate-950/70" />
      <div className="absolute inset-0 -z-10 bg-hero-gradient opacity-50 mix-blend-screen" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom_left,rgba(219,127,43,0.18),transparent_60%)]" />

      <div className="container relative flex flex-col items-start gap-10 lg:flex-row lg:items-center lg:justify-between">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8 max-w-2xl rounded-xl bg-slate-950/70 p-6 backdrop-blur"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-brand-light text-white">
            Cloverdale & Central Indiana
          </p>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl uppercase tracking-[0.1em] leading-[1.1] text-white">
            Built Right.
            <br className="hidden sm:inline" />
            <span className="text-brand">Backed by Reliability.</span>
          </h1>
          <p className="max-w-2xl text-lg text-white">
            {business.name} delivers full-scope roofing, plumbing, and remodel
            projects with one experienced, trusted crew. Responsive service,
            transparent pricing, and craftsmanship that stands up to Indiana
            weather.
          </p>
          <div className="flex flex-wrap items-center gap-6">
            <CTAButton href="/#contact" className="shadow-glow">
              Request a site visit
            </CTAButton>
            <a
              href={`tel:${business.phone.replace(/\D/g, "")}`}
              className="text-sm font-semibold uppercase tracking-[0.3em] text-white transition hover:text-brand"
            >
              Call {business.phone}
            </a>
          </div>
          <p className="text-xs uppercase tracking-[0.3em] text-white">
            {business.license} • {business.yearsExperience}
          </p>

          <div className="mt-4 flex gap-4 text-xs uppercase tracking-wide text-white/80">
            <span>Locally Owned</span>
            <span>Licensed & Insured</span>
            <span>Storm-Ready</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
