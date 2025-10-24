import { Link } from 'react-router-dom';
import { navLinks, business } from '../data/siteContent';

interface FooterProps {
  showNav?: boolean;
}

export function Footer({ showNav = true }: FooterProps = {}) {
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
        {showNav ? (
          <nav className="flex flex-wrap gap-x-8 gap-y-3 uppercase tracking-[0.3em] text-xs">
            {navLinks.map((link) => (
              <a key={link.id} href={`#${link.id}`} className="hover:text-brand">
                {link.label}
              </a>
            ))}
            <Link to="/blog" className="hover:text-brand">
              Blog
            </Link>
          </nav>
        ) : (
          <nav className="flex flex-wrap gap-x-8 gap-y-3 uppercase tracking-[0.3em] text-xs">
            <Link to="/" className="hover:text-brand">
              Home
            </Link>
            <Link to="/blog" className="hover:text-brand">
              Blog
            </Link>
            <a href={`tel:${business.phone.replace(/\D/g, '')}`} className="hover:text-brand">
              Call {business.phone}
            </a>
          </nav>
        )}
        <div className="text-xs uppercase tracking-[0.3em] text-white/50">
          <p>{business.license}</p>
          <p className="mt-2">© {new Date().getFullYear()} {business.name}</p>
        </div>
      </div>
    </footer>
  );
}
