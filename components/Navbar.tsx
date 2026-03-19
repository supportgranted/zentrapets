"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Products", href: "#products" },
  { label: "Trade", href: "#b2b" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={[
          "fixed top-0 left-0 right-0 z-100",
          "transition-all duration-300",
          scrolled
            ? "bg-white/92 backdrop-blur-xl  py-3"
            : "bg-transparent py-6",
        ].join(" ")}
      >
        <div className="container flex items-center justify-between">
          <a href="#" className="no-underline flex items-center gap-2">
            <img
              className="h-10"
              src="/images/logo.png"
              alt="ZENTRA Pets logo"
            />
            <span className="font-medium font-serif text-[1.375rem] tracking-[0.12em] uppercase text-ink">
              ZENTRA
            </span>
          </a>

          <nav
            className="hidden sm:flex items-center gap-10"
            aria-label="Main navigation"
          >
            {links.map((l) => (
              <a key={l.href} href={l.href} className="nav-link">
                {l.label}
              </a>
            ))}
            <a
              href="mailto:info@zentrapets.com"
              className="btn btn-primary text-xs py-2 px-5"
            >
              Get in Touch
            </a>
          </nav>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            className="sm:hidden bg-transparent border-0 cursor-pointer text-ink p-1"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.header>
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-nav"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.22 }}
            className="fixed top-16 left-0 right-0 z-99 bg-white/97 backdrop-blur-xl border-b border-border px-5 py-6 flex flex-col gap-4"
          >
            {[
              ...links,
              { label: "Contact", href: "mailto:info@zentrapets.com" },
            ].map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="font-semibold text-base text-ink no-underline py-2 border-b border-border"
              >
                {l.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
