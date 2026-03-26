"use client";

import { motion, useAnimationFrame } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useRef, useState } from "react";

const stagger: any = {
  hidden: {},
  show: { transition: { staggerChildren: 0.13, delayChildren: 0.3 } },
};
const fadeUp: any = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

// Ticker words
const tickerWords = [
  "WELLNESS",
  "COMPLIANCE",
  "TRUST",
  "RETAIL-READY",
  "CANNABINOID",
  "TRANSPARENCY",
  "PREMIUM",
  "USA",
  "WELLNESS",
  "COMPLIANCE",
  "TRUST",
  "RETAIL-READY",
  "CANNABINOID",
  "TRANSPARENCY",
  "PREMIUM",
  "USA",
];

function Ticker() {
  const x = useRef(0);
  const [pos, setPos] = useState(0);

  useAnimationFrame((_, delta) => {
    x.current -= delta * 0.045;
    // reset when one full set scrolled
    if (x.current < -2400) x.current = 0;
    setPos(x.current);
  });

  return (
    <div className="absolute bottom-0 left-0 right-0 overflow-hidden border-t border-[var(--color-border)] py-3 bg-white/60 backdrop-blur-sm z-20">
      <div
        className="flex gap-12 whitespace-nowrap"
        style={{ transform: `translateX(${pos}px)`, willChange: "transform" }}
      >
        {tickerWords.map((word, i) => (
          <span key={i} className="flex items-center gap-12">
            <span
              translate="no"
              className="font-extrabold text-[0.625rem] tracking-[0.35em] text-[var(--color-ink-light)]"
            >
              {word}
            </span>
            <span className="text-[var(--color-gold)] text-[0.5rem]">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-svh flex flex-col justify-center bg-white overflow-hidden">
      {/* Giant background word */}
      <div
        aria-hidden
        translate="no"
        className="absolute left-1/2 top-1/2 font-serif -translate-x-1/2 text-primary/5 -translate-y-1/2 pointer-events-none select-none font-extrabold text-[350px] leading-none tracking-widest whitespace-nowrap z-0"
      >
        ZENTRA
      </div>

      {/* Soft blob */}
      <div
        aria-hidden
        className="absolute -top-[10%] -right-[8%] w-[55vw] h-[70vh] rounded-[50%_40%_60%_45%] pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(ellipse at center, var(--color-primary-subtle) 0%, transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="absolute -bottom-[20%] -left-[10%] w-[40vw] h-[50vh] rounded-full pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(ellipse at center, var(--color-gold-subtle) 0%, transparent 70%)",
        }}
      />

      {/* Main content */}
      <div className="container relative z-10 flex flex-col items-center max-w-7xl lg:mt-6 mt-32 lg:flex-row">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="max-w-190 flex-1"
        >
          <motion.div variants={fadeUp} className="mb-6">
            <span className="hero-pill">
              <span className="hero-pill-dot" />A brand by Heliora Group LLC,
              USA
            </span>
          </motion.div>

          {/* H1 with outlined accent word */}
          <motion.h1
            variants={fadeUp}
            className="text-hero font-extrabold tracking-[-0.02em] text-[var(--color-ink)] m-0 mb-[0.1em] leading-[1.05]"
          >
            <span translate="no" className="font-serif text-gold">
              ZENTRA
            </span>{" "}
            <span translate="no" className="relative inline-block">
              Pet
            </span>{" "}
            <span className="text-[var(--color-primary)]">Wellness,</span>
            <br />
            Simplified
          </motion.h1>

          <motion.span
            variants={fadeUp}
            className="divider divider-lg divider-gold my-8 block"
          />

          <motion.p
            variants={fadeUp}
            className="text-body-lg font-normal text-[var(--color-ink-muted)] max-w-100 m-0 mb-2"
          >
            Reliable cannabinoid-based solutions designed for modern pet brands.
          </motion.p>
          <motion.p
            variants={fadeUp}
            className="font-semibold text-[0.9375rem] text-[var(--color-primary-dark)] tracking-[0.03em] m-0"
          >
            Positioned for retail-ready integration.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-12 flex gap-4 flex-wrap">
            <a href="#products" className="btn btn-primary">
              View Products
            </a>
            <a href="#b2b" className="btn btn-outline ">
              Trade Enquiries
            </a>
          </motion.div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="lg:flex-1 lg:w-1/2 w-full h-200 relative"
        >
          <img
            className="w-full h-full rounded-2xl object-contain"
            src="/images/hero-image.png"
            alt="ZENTRA Pet Wellness products"
          />
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.6 }}
        className="absolute bottom-14 left-1/2 -translate-x-1/2 flex flex-col items-center z-20"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDown size={18} color="var(--color-primary)" strokeWidth={2} />
        </motion.div>
      </motion.div>

      {/* Ticker */}
      <Ticker />
    </section>
  );
}
