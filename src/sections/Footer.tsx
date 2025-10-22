import { navLinks, business } from '../data/siteContent';

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-slate-950 py-12 text-white/60">
      <div className="container flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-2xl uppercase tracking-[0.4em] text-white">
            Advantage Roofing
          </p>
          <p className="mt-2 text-sm">{business.tagline}</p>
          <p className="mt-2 text-xs uppercase tracking-[0.35em]">{business.location}</p>
        </div>
        <nav className="flex flex-wrap gap-x-8 gap-y-3 uppercase tracking-[0.3em] text-xs">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="hover:text-brand">
              {link.label}
            </a>
          ))}
        </nav>
        <div className="text-xs uppercase tracking-[0.3em] text-white/50">
          <p>{business.license}</p>
          <p className="mt-2">© {new Date().getFullYear()} {business.name}</p>
        </div>
      </div>
    </footer>
  );
}
