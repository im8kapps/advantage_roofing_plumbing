import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Phone, X } from "lucide-react";
import { CTAButton } from "./CTAButton";
import { navLinks, business } from "../data/siteContent";

const navItemVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0 },
};

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-40 bg-slate-950/80 backdrop-blur-lg shadow-md">
      <div className="container flex items-center justify-between py-4">
        <a
          href="/"
          className="font-display text-xl md:text-2xl uppercase tracking-[0.3em] text-white hover:text-brand transition"
        >
          Advantage Roofing
        </a>

        <nav className="hidden items-center gap-10 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm uppercase tracking-[0.25em] text-white/70 hover:text-white transition"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <CTAButton
            href={`tel:${business.phone.replace(/\D/g, "")}`}
            className="shadow-glow"
          >
            <Phone className="size-4" aria-hidden="true" />
            Call Now
          </CTAButton>
          <CTAButton href="/#contact" variant="ghost">
            Request Quote
          </CTAButton>
        </div>

        <button
          className="inline-flex rounded-full bg-white/10 p-2 text-white lg:hidden hover:bg-white/20 transition"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
        >
          {mobileOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            id="mobile-nav"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-white/10 bg-slate-950/95 lg:hidden"
          >
            <ul className="flex flex-col space-y-2 px-6 py-4">
              {navLinks.map((link, index) => (
                <motion.li
                  key={link.label}
                  variants={navItemVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: index * 0.05 }}
                >
                  <a
                    href={link.href}
                    className="block rounded-lg px-3 py-2 text-sm uppercase tracking-[0.25em] text-white/80 transition hover:bg-white/10"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
              <li className="pt-2">
                <CTAButton
                  href={`tel:${business.phone.replace(/\D/g, "")}`}
                  className="w-full justify-center"
                  onClick={() => setMobileOpen(false)}
                >
                  <Phone className="size-4" aria-hidden="true" />
                  Call Now
                </CTAButton>
              </li>
              <li>
                <CTAButton
                  href="/#contact"
                  variant="ghost"
                  className="w-full justify-center"
                  onClick={() => setMobileOpen(false)}
                >
                  Request Quote
                </CTAButton>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
