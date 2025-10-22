import { motion } from 'framer-motion';
import { CTAButton } from '../components/CTAButton';
import { SectionTitle } from '../components/SectionTitle';
import { business } from '../data/siteContent';

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-slate-950 py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(219,127,43,0.15),transparent_60%)]" />
      <div className="container relative grid gap-12 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1fr)]">
        <div className="space-y-10">
          <SectionTitle
            eyebrow="Contact"
            title="Ready for your next project?"
            description="Share a few details and we will follow up within one business day to schedule a walkthrough or emergency response."
          />

          <div className="grid gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-white/50">Call</p>
              <a
                href={`tel:${business.phone.replace(/\D/g, '')}`}
                className="mt-2 block text-lg font-semibold text-white transition hover:text-brand"
              >
                {business.phone}
              </a>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-white/50">Email</p>
              <a
                href={`mailto:${business.email}`}
                className="mt-2 block text-lg font-semibold text-white transition hover:text-brand"
              >
                {business.email}
              </a>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-white/50">Visit</p>
              <p className="mt-2 text-sm text-white/70 leading-relaxed">
                {business.address}
              </p>
              <p className="mt-1 text-xs uppercase tracking-[0.35em] text-white/40">
                {business.serviceArea}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <CTAButton href={`tel:${business.phone.replace(/\D/g, '')}`}>Emergency Call</CTAButton>
            <CTAButton href="/#services" variant="ghost">
              Explore Services
            </CTAButton>
          </div>

          <div className="glass-card overflow-hidden rounded-3xl border-white/10">
            <iframe
              title="Advantage Company Contracting Roofing and Plumbing map"
              src="https://maps.google.com/maps?cid=0x6dc8c5290c67e593&output=embed"
              className="h-[320px] w-full md:h-[360px]"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="flex items-center justify-between border-t border-white/10 px-5 py-4 text-xs uppercase tracking-[0.3em] text-white/60">
              <span>View us on Google Maps</span>
              <a
                href="https://www.google.com/maps/place/Advantage+Company+Contracting+Roofing+and+Plumbing/"
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-brand hover:text-brand-light"
              >
                Open
              </a>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="glass-card rounded-[2.5rem] border-white/10 p-10"
        >
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            className="grid gap-6"
          >
            <input type="hidden" name="form-name" value="contact" />
            <div className="grid gap-2">
              <label htmlFor="name" className="text-xs uppercase tracking-[0.35em] text-white/50">
                Name
              </label>
              <input
                id="name"
                name="name"
                required
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/40"
                placeholder="Your name"
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="email" className="text-xs uppercase tracking-[0.35em] text-white/50">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/40"
                placeholder="name@email.com"
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="service" className="text-xs uppercase tracking-[0.35em] text-white/50">
                Service Needed
              </label>
              <select
                id="service"
                name="service"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/40"
              >
                <option value="Roofing">Roofing</option>
                <option value="Plumbing">Plumbing</option>
                <option value="Remodel">Remodel</option>
                <option value="Emergency Repair">Emergency Repair</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="grid gap-2">
              <label htmlFor="message" className="text-xs uppercase tracking-[0.35em] text-white/50">
                Project Details
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/40"
                placeholder="Tell us about what you need help with..."
              />
            </div>
            <CTAButton type="submit" className="justify-center">
              Send Message
            </CTAButton>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
