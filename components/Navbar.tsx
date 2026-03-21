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
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* HEADER */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white/90 backdrop-blur-lg py-3" : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          {/* LOGO */}
          <a href="#" className="flex items-center gap-2">
            <img className="h-9" src="/images/logo.png" alt="logo" />
            <span className="font-serif text-lg tracking-widest uppercase">
              ZENTRA
            </span>
          </a>

          {/* DESKTOP */}
          <nav className="hidden sm:flex items-center gap-8">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="nav-link">
                {l.label}
              </a>
            ))}
            <a
              href="mailto:info@zentrapets.com"
              className="btn btn-primary text-sm px-4 py-2"
            >
              Contact
            </a>
          </nav>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setMobileOpen(true)}
            className="sm:hidden p-2"
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </motion.header>

      {/* MOBILE MENU (FULLSCREEN) */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="sm:hidden flex fixed  flex-col inset-0 z-50 bg-white/80 backdrop-blur-md select-none "
          >
            <div className="flex items-center justify-between px-4 py-4">
              <a href="#" className="flex items-center gap-2">
                <img className="h-9" src="/images/logo.png" alt="logo" />
                <span className="font-serif text-lg tracking-widest uppercase">
                  ZENTRA
                </span>
              </a>
              <button onClick={() => setMobileOpen(false)}>
                <X size={26} />
              </button>
            </div>
            <div className="flex flex-col justify-center items-start text-left mt-20 gap-6 px-6 py-10 text-lg font-semibold">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  className=" pb-3 font-bold hover:font-extrabold transition-all duration-100"
                >
                  + {l.label}
                </a>
              ))}
              <a
                href="mailto:info@zentrapets.com"
                className=" pb-3 font-bold hover:font-extrabold transition-all duration-100"
              >
                + Get in Touch
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
