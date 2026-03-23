"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Tag, Package, FileText, CheckCircle2, ArrowRight } from "lucide-react";

const features = [
  { icon: Tag, title: "Private Label", desc: "Your brand, our formulations" },
  {
    icon: Package,
    title: "Bulk Supply",
    desc: "Scalable orders for retail integration",
  },
  {
    icon: FileText,
    title: "Documentation",
    desc: "COAs and batch records available",
  },
  {
    icon: CheckCircle2,
    title: "USA-Ready",
    desc: "Compliant positioning for US market",
  },
];

export default function B2B() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const anim: any = (delay = 0) => ({
    initial: { opacity: 0, y: 24 },
    animate: inView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
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
        <div className="b2b-grid">
          <div>
            <motion.span
              {...anim(0)}
              className="label-tag label-tag--primary mb-7 block"
            >
              For Trade Partners
            </motion.span>

            <motion.h2
              {...anim(0.1)}
              className="text-h2 font-extrabold tracking-[-0.02em] text-ink m-0 mb-8"
            >
              Private label and bulk{" "}
              <span className="text-primary">supply available</span>
            </motion.h2>

            <motion.p
              {...anim(0.2)}
              className="font-normal text-base text-ink-muted leading-relaxed mb-10"
            >
              Reach out to discuss integration options, private label
              opportunities, and bulk supply arrangements for your retail or
              distribution operation.
            </motion.p>

            <motion.a
              {...anim(0.3)}
              href="mailto:info@zentrapets.com"
              className="btn btn-primary"
            >
              info@zentrapets.com
              <ArrowRight size={16} strokeWidth={2.5} />
            </motion.a>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{
              duration: 0.65,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="bg-surface rounded-(--radius-xl) border border-border overflow-hidden"
          >
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <div
                  key={i}
                  className={`flex items-start gap-4 px-7 py-6 ${i < features.length - 1 ? "border-b border-border" : ""} ${i % 2 === 0 ? "bg-white" : ""}`}
                >
                  <span
                    className={`icon-wrap w-16 h-16 shrink-0 ${i % 2 === 0 ? "icon-wrap-primary" : "icon-wrap-gold"}`}
                  >
                    <Icon
                      size={32}
                      color={
                        i % 2 === 0
                          ? "var(--color-primary-dark)"
                          : "var(--color-gold)"
                      }
                      strokeWidth={2}
                    />
                  </span>
                  <div>
                    <div className="font-bold text-[0.9375rem] text-ink mb-0.5">
                      {f.title}
                    </div>
                    <div className="font-normal text-[0.8125rem] text-ink-light">
                      {f.desc}
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
