"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { TrendingUp, ShoppingBag, Leaf, Zap } from "lucide-react";

const insights = [
  { icon: TrendingUp, label: "Sustainable growth in the pet wellness segment" },
  { icon: ShoppingBag, label: "Clear preference for clean-label products" },
  { icon: Leaf, label: "Consumers actively seeking natural alternatives" },
  { icon: Zap, label: "Expanding into new functional categories" },
];

export default function CentralMessage() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const anim = (delay = 0) => ({
    initial: { opacity: 0, y: 24 },
    animate: inView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as any },
  });

  return (
    <section className="bg-[var(--color-surface)] border-t border-b border-[var(--color-border)] py-32 overflow-hidden relative">
      <div
        aria-hidden
        className="absolute -right-[0.06em] top-1/2 -translate-y-1/2 font-black leading-none select-none pointer-events-none tracking-[-0.05em] text-[clamp(16rem,30vw,28rem)]"
        style={{ color: "rgba(122,158,126,0.04)" }}
      >
        Z
      </div>

      <div className="container relative z-10" ref={ref}>
        <div className="b2b-grid items-start">
          {/* Left */}
          <div className="max-w-[520px]">
            <motion.span {...anim(0)} className="label-tag mb-8 block">
              Market Opportunity
            </motion.span>

            <motion.h2
              {...anim(0.1)}
              className="text-h2 font-extrabold tracking-[-0.02em] text-[var(--color-ink)] m-0 mb-6"
            >
              A Fast-Growing Category Within the{" "}
              <span className="text-[var(--color-primary)]">Pet Wellness</span>{" "}
              Space
            </motion.h2>

            <motion.p
              {...anim(0.2)}
              className="text-body-lg font-normal text-[var(--color-ink-muted)] m-0 mb-8"
            >
              The pet care market is evolving toward more natural, functional
              solutions aligned with daily wellness. A new retail opportunity is
              opening up for brands that position themselves early.
            </motion.p>

            <motion.div
              {...anim(0.3)}
              className="bg-white rounded-[var(--radius-xl)] border border-[var(--color-border)] p-6 inline-block"
            >
              <div
                className="font-extrabold text-[var(--color-primary)] mb-1"
                style={{
                  fontSize: "clamp(1.5rem,2.5vw,2rem)",
                  letterSpacing: "-0.02em",
                  lineHeight: 1,
                }}
              >
                Built for Compliance.
              </div>
              <div
                className="font-extrabold text-[var(--color-gold)] mb-3"
                style={{
                  fontSize: "clamp(1.5rem,2.5vw,2rem)",
                  letterSpacing: "-0.02em",
                  lineHeight: 1,
                }}
              >
                Designed for Trust.
              </div>
              <p className="font-normal text-[0.875rem] text-[var(--color-ink-muted)] m-0 max-w-[320px] leading-relaxed">
                ZENTRA products are developed with a clear focus on safety,
                transparency, and retail-ready positioning for modern pet brands
                entering cannabinoid-based wellness.
              </p>
            </motion.div>
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
            className="flex flex-col gap-3"
          >
            <p className="font-bold text-[0.6875rem] tracking-[0.22em] uppercase text-[var(--color-ink-light)] mb-2">
              Smart Insights for the Category
            </p>

            {insights.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 16 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.45, delay: 0.3 + i * 0.08 }}
                  className="bg-white rounded-[var(--radius-lg)] border border-[var(--color-border)] p-5 flex items-center gap-4"
                >
                  <span
                    className={`icon-wrap w-10 h-10 flex-shrink-0 ${i % 2 === 0 ? "icon-wrap-primary" : "icon-wrap-gold"}`}
                  >
                    <Icon
                      size={17}
                      color={
                        i % 2 === 0
                          ? "var(--color-primary-dark)"
                          : "var(--color-gold)"
                      }
                      strokeWidth={2}
                    />
                  </span>
                  <span className="font-semibold text-[0.9rem] text-[var(--color-ink)] leading-snug">
                    {item.label}
                  </span>
                </motion.div>
              );
            })}

            <div className="bg-[var(--color-primary-subtle)] rounded-[var(--radius-xl)] p-6 mt-2 flex items-center gap-4">
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                aria-hidden
              >
                <circle
                  cx="24"
                  cy="24"
                  r="22"
                  stroke="var(--color-primary)"
                  strokeWidth="1.5"
                  strokeOpacity="0.3"
                />
                <circle
                  cx="24"
                  cy="24"
                  r="6"
                  fill="var(--color-primary)"
                  fillOpacity="0.2"
                />
                <circle
                  cx="24"
                  cy="8"
                  r="3"
                  fill="var(--color-primary)"
                  fillOpacity="0.4"
                />
                <circle
                  cx="24"
                  cy="40"
                  r="3"
                  fill="var(--color-primary)"
                  fillOpacity="0.4"
                />
                <circle
                  cx="8"
                  cy="24"
                  r="3"
                  fill="var(--color-gold)"
                  fillOpacity="0.5"
                />
                <circle
                  cx="40"
                  cy="24"
                  r="3"
                  fill="var(--color-gold)"
                  fillOpacity="0.5"
                />
                <line
                  x1="24"
                  y1="18"
                  x2="24"
                  y2="11"
                  stroke="var(--color-primary)"
                  strokeWidth="1"
                  strokeOpacity="0.3"
                />
                <line
                  x1="24"
                  y1="30"
                  x2="24"
                  y2="37"
                  stroke="var(--color-primary)"
                  strokeWidth="1"
                  strokeOpacity="0.3"
                />
                <line
                  x1="18"
                  y1="24"
                  x2="11"
                  y2="24"
                  stroke="var(--color-gold)"
                  strokeWidth="1"
                  strokeOpacity="0.3"
                />
                <line
                  x1="30"
                  y1="24"
                  x2="37"
                  y2="24"
                  stroke="var(--color-gold)"
                  strokeWidth="1"
                  strokeOpacity="0.3"
                />
              </svg>
              <div>
                <div className="font-bold text-[0.875rem] text-[var(--color-primary-dark)] mb-0.5">
                  CBD is gaining ground in pet wellness
                </div>
                <div className="font-normal text-[0.8125rem] text-[var(--color-ink-muted)]">
                  Lifestyle · Daily Use · Clean-Label Approach
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
