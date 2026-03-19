"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.13, delayChildren: 0.2 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  return (
    <section className="relative min-h-svh flex flex-col justify-center bg-white overflow-hidden">
      <div
        aria-hidden
        className="absolute -top-[10%] -right-[8%] w-[55vw] h-[70vh] rounded-[50%_40%_60%_45%] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, var(--color-primary-subtle) 0%, transparent 70%)",
        }}
      />

      <div className="container relative z-10 flex flex-col items-center max-w-7xl lg:mt-6 mt-32 lg:flex-row">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="max-w-190 flex-1"
        >
          <motion.div variants={fadeUp} className="">
            <span className="hero-pill">
              <span className="hero-pill-dot" />A brand by Heliora Group LLC,
              USA
            </span>
          </motion.div>
          <motion.h1
            variants={fadeUp}
            className="text-hero font-serif font-extrabold tracking-tight text-ink m-0 mb-[0.10em]"
          >
            ZENTRA <span className="text-primary font-sans">Pet Wellness,</span>
            <br />
            <span className="font-sans">Simplified</span>
          </motion.h1>
          <motion.span
            variants={fadeUp}
            className="divider divider-lg divider-gold my-8 block"
          />
          <motion.p
            variants={fadeUp}
            className="text-body-lg font-normal text-ink-muted max-w-130 font-sans m-0 mb-2"
          >
            Reliable cannabinoid-based solutions designed for modern pet brands.
          </motion.p>
          <motion.p
            variants={fadeUp}
            className="font-semibold text-[0.9375rem] text-primary-dark tracking-[0.03em] m-0"
          >
            Positioned for retail-ready integration.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-12 flex gap-4 flex-wrap">
            <a href="#products" className="btn btn-primary">
              View Products
            </a>
            <a href="#b2b" className="btn btn-outline">
              Trade Enquiries
            </a>
          </motion.div>
        </motion.div>
        <div className="lg:flex-1 lg:w-1/2 w-full  h-150">
          <img
            className="w-full h-full rounded-2xl object-cover "
            src="/images/hero-image.png"
            alt=""
          />
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDown size={18} color="var(--color-primary)" strokeWidth={2} />
        </motion.div>
      </motion.div>
    </section>
  );
}
