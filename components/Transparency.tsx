"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { TestTube2, FolderOpen, BarChart3 } from "lucide-react";

const pillars = [
  {
    icon: TestTube2,
    num: "01",
    title: "Every Batch Tested",
    detail: "Third-party lab verification",
  },
  {
    icon: FolderOpen,
    num: "02",
    title: "Documentation",
    detail: "Available upon request",
  },
  {
    icon: BarChart3,
    num: "03",
    title: "Clear CBD Content",
    detail: "Labelled per product",
  },
];

export default function Transparency() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className=" py-32 relative overflow-hidden">
      <div
        aria-hidden
        className="absolute -top-[20%] -right-[10%] w-[55vw] h-[55vw] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(122,158,126,0.07) 0%, transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="absolute -bottom-[15%] -left-[8%] w-[40vw] h-[40vw] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(201,169,110,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="container relative z-10" ref={ref}>
        <div className="max-w-175">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-4 mb-8"
          >
            <span className="divider divider-sm divider-gold block" />
            <span className="font-bold text-[0.6875rem] tracking-[0.22em] uppercase text-ink">
              Quality Assurance
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-h2-lg font-extrabold tracking-[-0.02em] text-ink m-0 mb-10"
          >
            Transparency <span className="text-gold">First</span>
          </motion.h2>

          {/* Body */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-body-lg font-normal text-inktext-ink-light m-0"
          >
            Every batch is third-party tested. Documentation available upon
            request. Clear CBD content per product.
          </motion.p>
        </div>

        {/* Pillar cards */}
        <div className="transparency-grid">
          {pillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 28 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.55,
                  delay: 0.25 + i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="bg-transparent rounded-(--radius-xl) border border-ink/8 p-8 backdrop-blur"
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="icon-wrap w-18 h-18 bg-[rgba(122,158,126,0.15)]">
                    <Icon
                      size={32}
                      color="var(--color-primary-dark)"
                      strokeWidth={1.75}
                    />
                  </span>
                  <span className="font-bold text-[2rem] tracking-widest text-gold opacity-70">
                    {p.num}
                  </span>
                </div>
                <div className="font-bold text-base text-ink mb-1.5">
                  {p.title}
                </div>
                <div className="font-normal text-[0.8125rem] text-ink-light leading-snug">
                  {p.detail}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
