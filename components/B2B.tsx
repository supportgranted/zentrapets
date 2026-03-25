"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const closing = [
  "Retail-ready approach",
  "Flexible integration",
  "Transparent product logic",
  "Third-party support",
];

const features = [
  { label: "Private Label", desc: "Your brand, our formulations" },
  { label: "Bulk Supply", desc: "Scalable orders for retail integration" },
  { label: "Documentation", desc: "COAs and batch records available" },
  { label: "USA-Ready", desc: "Compliant positioning for US market" },
];

export default function B2B() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const anim = (delay = 0) => ({
    initial: { opacity: 0, y: 24 },
    animate: inView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as any },
  });

  return (
    <section id="b2b" className="bg-white py-32 relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 70% at 90% 50%, var(--color-primary-subtle) 0%, transparent 70%)",
        }}
      />

      <div className="container relative z-10" ref={ref}>
        <motion.div
          {...anim(0)}
          className="text-center mb-16 max-w-150 mx-auto"
        >
          <span className="label-tag justify-center mb-6 flex">
            For Trade Partners
          </span>
          <h2 className="text-h2 font-extrabold tracking-[-0.02em] text--ink m-0 mb-4">
            Designed to integrate.{" "}
            <span className="text-primary">Built to scale.</span>
          </h2>
          <p className="font-normal text-base text-ink-muted leading-relaxed m-0">
            ZENTRA is structured for strategic partners seeking flexibility and
            differentiation within pet wellness.
          </p>
        </motion.div>

        <div className="b2b-grid">
          {/* Left */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="bg-surface rounded-(--radius-xl) border border-border p-8 mb-8"
            >
              <p className="font-bold text-[0.6875rem] tracking-[0.22em] uppercase text-ink-light mb-6">
                Private label and bulk supply available
              </p>
              <div className="flex flex-col gap-4">
                {closing.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -12 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.25 + i * 0.08 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2
                      size={18}
                      color="var(--color-primary)"
                      strokeWidth={2}
                      className="flex-shrink-0"
                    />
                    <span className="font-semibold text-[0.9375rem] text-[var(--color-ink)]">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.p
              {...anim(0.35)}
              className="font-normal text-base text-[var(--color-ink-muted)] leading-relaxed mb-8"
            >
              A smarter way to participate in the future of pet wellness. Reach
              out to discuss integration options for your retail or distribution
              operation.
            </motion.p>

            <motion.a
              {...anim(0.4)}
              href="mailto:hello@zentrapets.com"
              className="btn btn-primary"
            >
              hello@zentrapets.com <ArrowRight size={16} strokeWidth={2.5} />
            </motion.a>
          </div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{
              duration: 0.65,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1] as any,
            }}
            className="flex flex-col gap-4"
          >
            <div className="bg-[var(--color-ink)] rounded-[var(--radius-xl)] px-6 py-10 flex items-center gap-6 mb-2">
              <div>
                <div className="font-extrabold text-[1.125rem] text-white mb-1 leading-tight">
                  ZENTRA Premium Strategic Partner
                </div>
                <div className="font-normal text-[0.8125rem] text-white/50">
                  Premium Pet Wellness Solutions
                </div>
              </div>
            </div>

            <div className="bg-[var(--color-surface)] rounded-[var(--radius-xl)] border border-[var(--color-border)] overflow-hidden">
              {features.map((f, i) => (
                <div
                  key={i}
                  className={`flex items-start gap-4 px-7 py-5 ${i < features.length - 1 ? "border-b border-[var(--color-border)]" : ""} ${i % 2 === 0 ? "bg-white" : ""}`}
                >
                  <span
                    className={`icon-wrap w-9 h-9 flex-shrink-0 ${i % 2 === 0 ? "icon-wrap-primary" : "icon-wrap-gold"}`}
                  >
                    <span
                      className="font-bold text-[0.5625rem]"
                      style={{
                        color:
                          i % 2 === 0
                            ? "var(--color-primary-dark)"
                            : "var(--color-gold)",
                      }}
                    >
                      0{i + 1}
                    </span>
                  </span>
                  <div>
                    <div className="font-bold text-[0.9375rem] text-[var(--color-ink)] mb-0.5">
                      {f.label}
                    </div>
                    <div className="font-normal text-[0.8125rem] text-[var(--color-ink-light)]">
                      {f.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
