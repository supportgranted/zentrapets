"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { LayoutGrid, Handshake, Mail, Home } from "lucide-react";

// ─── Cambia aquí el logo globalmente ───────────────────
const LOGO_SRC = "/images/logo.png"; // pon tu imagen aquí
const LOGO_FALLBACK = "ZENTRA"; // se muestra si no hay imagen
// ────────────────────────────────────────────────────────

const links = [
  { label: "Home", href: "#", icon: Home },
  { label: "Products", href: "#products", icon: LayoutGrid },
  { label: "Trade", href: "#b2b", icon: Handshake },
  { label: "Contact", href: "#contact", icon: Mail },
];

const desktopLinks = [
  { label: "Products", href: "#products" },
  { label: "Trade", href: "#b2b" },
  { label: "Contact", href: "#contact" },
];

function Logo({ className = "" }: { className?: string }) {
  return LOGO_SRC ? (
    <img
      src={LOGO_SRC}
      alt="ZENTRA"
      className={`h-8 w-auto object-contain ${className}`}
      onError={(e) => {
        (e.currentTarget as HTMLImageElement).style.display = "none";
      }}
    />
  ) : (
    <span
      className={`font-extrabold text-[1.25rem] tracking-[0.14em] uppercase text-[var(--color-primary-dark)] ${className}`}
    >
      {LOGO_FALLBACK}
    </span>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = ["products", "b2b", "contact"];
    const observers: IntersectionObserver[] = [];

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(`#${id}`);
        },
        { threshold: 0.4 },
      );
      obs.observe(el);
      observers.push(obs);
    });

    const onScroll = () => {
      if (window.scrollY < 80) setActive("#");
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observers.forEach((o) => o.disconnect());
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      <div
        className="fixed top-0 left-0 right-0 z-100 sm:hidden flex items-center justify-center px-5 py-3"
        style={{
          background: "rgba(255,255,255,0.95)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid var(--color-border)",
        }}
      >
        <a href="#" className="no-underline flex items-center gap-2">
          <img
            src="/images/icon.png"
            alt="ZENTRA"
            className="h-8 w-auto object-contain"
          />
          <Logo />
        </a>
      </div>

      <div className="fixed top-0 left-0 right-0 z-100 hidden sm:flex justify-center pt-5 px-4 pointer-events-none">
        <motion.nav
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="pointer-events-auto flex items-center px-4 py-2 rounded-full border transition-all duration-300 w-full max-w-7xl"
          style={{
            background: scrolled
              ? "rgba(255,255,255,0.95)"
              : "rgba(255,255,255,0.75)",
            backdropFilter: "blur(20px)",
            borderColor: scrolled ? "var(--color-border)" : "rgba(250,250,250)",
            boxShadow: scrolled ? "0 4px 24px rgba(0,0,0,0.08)" : "none",
          }}
        >
          <a
            href="#"
            className="no-underline px-3 py-1.5 shrink-0 flex items-center gap-2"
          >
            <img
              src="/images/icon.png"
              alt="ZENTRA"
              className="h-8 w-auto object-contain"
            />
            <Logo />
          </a>

          <div className="flex items-center gap-1 mx-auto">
            {desktopLinks.map((l) => {
              const isActive = active === l.href;
              return (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setActive(l.href)}
                  className="relative px-5 py-2 rounded-full font-semibold text-[0.875rem] no-underline transition-all duration-200"
                  style={{
                    color: isActive
                      ? "var(--color-primary-dark)"
                      : "var(--color-ink-muted)",
                    background: isActive
                      ? "var(--color-primary-subtle)"
                      : "transparent",
                  }}
                >
                  {l.label}
                </a>
              );
            })}
          </div>

          <a
            href="#contact"
            className="btn btn-primary py-2 px-6 text-[0.8125rem] shrink-0"
          >
            Get in Touch
          </a>
        </motion.nav>
      </div>
      <motion.div
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed bottom-0 left-0 right-0 z-100 sm:hidden bg-white"
      >
        <div className="flex items-center justify-around px-2 py-2 mb-6">
          {links.map((l) => {
            const Icon = l.icon;
            const isActive = active === l.href;
            return (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setActive(l.href)}
                className="relative flex flex-col items-center gap-1 px-4 py-2 rounded-xl no-underline transition-all duration-200 min-w-15"
                style={{
                  background: isActive
                    ? "var(--color-primary-subtle)"
                    : "transparent",
                }}
              >
                {isActive && (
                  <motion.span
                    layoutId="active-indicator"
                    className="absolute bottom-1 left-1/2 -translate-x-1/2 w-5 h-0.5 rounded-full bg-primary"
                  />
                )}

                <motion.div
                  animate={{ scale: isActive ? 1.15 : 1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                >
                  <Icon
                    size={20}
                    strokeWidth={isActive ? 2.5 : 1.75}
                    color={
                      isActive
                        ? "var(--color-primary-dark)"
                        : "var(--color-ink-light)"
                    }
                  />
                </motion.div>

                <span
                  className="font-bold text-[0.5625rem] tracking-[0.06em]"
                  style={{
                    color: isActive
                      ? "var(--color-primary-dark)"
                      : "var(--color-ink-light)",
                  }}
                >
                  {l.label}
                </span>
              </a>
            );
          })}
        </div>
      </motion.div>
    </>
  );
}
