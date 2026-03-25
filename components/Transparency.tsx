"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import CertBadges from "@/components/CertBadges";

const pillars = [
  {
    num: "01",
    title: "Batch-level analytics",
    detail: "Third-party lab verification on every batch",
  },
  {
    num: "02",
    title: "Consistent & reliable CBD content",
    detail: "Precision protocols for purity and stability",
  },
  {
    num: "03",
    title: "Full product traceability",
    detail: "Complete chain of documentation available",
  },
  {
    num: "04",
    title: "International laboratory standards",
    detail: "Verified under ILAC-MRA accredited labs",
  },
];

const techPoints = [
  "Batch-level COA issued by a U.S. laboratory",
  "Consistent quality across batches",
  "Clean label formulation",
];

export default function Transparency() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="bg-white py-20 relative overflow-hidden">
      <div className="container relative z-10 bg-white" ref={ref}>
        <div className="b2b-grid items-start mb-16">
          {/* Left */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-4 mb-8"
            >
              <span className="divider divider-sm divider-gold block" />
              <span className="font-bold text-[0.6875rem] tracking-[0.22em] uppercase text-black/35">
                Quality Assurance
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1] as any,
              }}
              className="text-6xl font-extrabold tracking-[-0.02em] text-black m-0 mb-6"
            >
              Proven Technical Confidence{" "}
              <span className="text-gold">for Demanding Retail</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-body-lg font-normal text-black/60 m-0 mb-6"
            >
              Formulation developed and verified under international laboratory
              standards. Each batch is analyzed using precision protocols that
              ensure consistency, purity, and commercial reliability.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-semibold text-[0.9375rem] text-black/70 italic mb-10"
            >
              ZENTRA is not positioned through marketing, but through verifiable
              technical validation.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="flex flex-col gap-3"
            >
              {techPoints.map((p, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2
                    size={16}
                    color="var(--color-gold)"
                    strokeWidth={2}
                    className="shrink-0"
                  />
                  <span className="font-semibold text-[0.875rem] text-black/70">
                    {p}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — drop + certs */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{
              duration: 0.65,
              delay: 0.25,
              ease: [0.22, 1, 0.36, 1] as any,
            }}
            className="flex flex-col items-center gap-8 bg-white"
          >
            <div className=" flex items-center justify-center w-full max-w-70  mx-auto">
              <img
                src="/images/banner.jpeg"
                alt=""
                className="w-80 h-80 pt-2"
              />
            </div>

            <div className="w-full">
              <p className="font-bold text-[0.5625rem] tracking-[0.2em] uppercase text-black/30 mb-4 text-center">
                Certifications & Accreditations
              </p>

              <CertBadges />
            </div>
          </motion.div>
        </div>

        {/* 4-pillar grid */}
        <div
          className="grid gap-4"
          style={{ gridTemplateColumns: "repeat(4, 1fr)" }}
        >
          {pillars.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.55,
                delay: 0.4 + i * 0.08,
                ease: [0.22, 1, 0.36, 1] as any,
              }}
              className="bg-gray-50 rounded-[var(--radius-xl)] border border-black/8 p-6 backdrop-blur"
            >
              <span className="font-bold text-[2rem] tracking-[0.1em] text-[var(--color-gold)] opacity-70 block mb-4">
                {p.num}
              </span>
              <div className="font-bold text-base text-black mb-1.5">
                {p.title}
              </div>
              <div className="font-normal text-[0.8125rem] text-black leading-snug">
                {p.detail}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-16 text-center"
        >
          <p className="font-extrabold text-black/20 tracking-[0.3em] uppercase text-[0.6875rem]">
            Transparency First · Every Batch Tested · Documentation Available
            Upon Request · Clear CBD Content Per Product
          </p>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) { [style*="repeat(4, 1fr)"] { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 480px) { [style*="repeat(4, 1fr)"] { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
