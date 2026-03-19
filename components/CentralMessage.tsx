"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function CentralMessage() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const anim: any = (delay = 0) => ({
    initial: { opacity: 0, y: 24 },
    animate: inView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
  });

  return (
    <section className=" py-32 overflow-hidden relative">
      <div
        aria-hidden
        className="absolute -right-[0.10em] top-1/2 -translate-y-1/2 font-black leading-none select-none pointer-events-none tracking-[-0.05em]"
        style={{
          fontSize: "clamp(38rem, 40vw, 48rem)",
          color: "rgba(122,158,126,0.04)",
        }}
      >
        Z
      </div>

      <div className="container relative z-10" ref={ref}>
        <div className="max-w-170">
          <motion.span {...anim(0)} className="label-tag mb-8 block">
            Our Commitment
          </motion.span>

          <motion.h2
            {...anim(0.1)}
            className="text-h2 font-extrabold tracking-[-0.02em] text-ink m-0 mb-8"
          >
            Built for <span className="text-primary">Compliance.</span>
            <br />
            Designed for <span className="text-gold">Trust.</span>
          </motion.h2>

          <motion.p
            {...anim(0.2)}
            className="text-body-lg font-normal text-ink-muted m-0"
          >
            ZENTRA products are developed with a clear focus on safety,
            transparency, and retail-ready positioning for modern pet brands
            entering cannabinoid-based wellness.
          </motion.p>

          {/* Stats */}
          <motion.div {...anim(0.3)} className="stats-grid">
            {[
              {
                value: "100%",
                label: "Tested batches",
                color: "text-[var(--color-primary)]",
              },
              {
                value: "<0.3%",
                label: "THC compliant",
                color: "text-[var(--color-gold)]",
              },
              {
                value: "B2B",
                label: "Retail-ready",
                color: "text-[var(--color-primary-dark)]",
              },
            ].map((stat, i) => (
              <div key={i}>
                <div
                  className={`font-extrabold tracking-[-0.02em] leading-none mb-2 ${stat.color}`}
                  style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}
                >
                  {stat.value}
                </div>
                <div className="font-bold text-[0.75rem] tracking-[0.08em] uppercase text-ink-light">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
