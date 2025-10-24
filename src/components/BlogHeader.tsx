import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Phone, X } from 'lucide-react';
import { CTAButton } from './CTAButton';
import { business } from '../data/siteContent';

const blogNavLinks = [
  { label: 'Home', to: '/' },
  { label: 'All Posts', to: '/blog' },
];

export function BlogHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-40 bg-slate-950/90 backdrop-blur border-b border-white/10">
      <div className="container flex items-center justify-between py-4">
        <Link
          to="/"
          className="font-display text-xl md:text-2xl uppercase tracking-[0.3em] text-white transition hover:text-brand"
          onClick={() => setMobileOpen(false)}
        >
          Advantage Roofing
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {blogNavLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-sm uppercase tracking-[0.25em] text-white/70 transition hover:text-white"
            >
              {link.label}
            </Link>
          ))}
          <CTAButton to="/#contact" variant="ghost">
            Request Quote
          </CTAButton>
          <CTAButton href={`tel:${business.phone.replace(/\D/g, '')}`} className="shadow-glow">
            <Phone className="size-4" aria-hidden="true" />
            Call Now
          </CTAButton>
        </nav>

        <button
          className="inline-flex rounded-full bg-white/10 p-2 text-white lg:hidden hover:bg-white/20 transition"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-expanded={mobileOpen}
          aria-controls="blog-mobile-nav"
        >
          {mobileOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {mobileOpen ? (
        <nav id="blog-mobile-nav" className="border-t border-white/10 bg-slate-950/95 lg:hidden">
          <ul className="flex flex-col space-y-2 px-6 py-4">
            {blogNavLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="block rounded-lg px-3 py-2 text-sm uppercase tracking-[0.25em] text-white/80 transition hover:bg-white/10"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <CTAButton to="/#contact" variant="ghost" className="w-full justify-center" onClick={() => setMobileOpen(false)}>
                Request Quote
              </CTAButton>
            </li>
            <li>
              <CTAButton
                href={`tel:${business.phone.replace(/\D/g, '')}`}
                className="w-full justify-center"
                onClick={() => setMobileOpen(false)}
              >
                <Phone className="size-4" aria-hidden="true" />
                Call Now
              </CTAButton>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
