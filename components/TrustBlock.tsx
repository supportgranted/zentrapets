"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FlaskConical,
  ShieldCheck,
  ScanLine,
  BookOpen,
  MapPin,
} from "lucide-react";

const items = [
  { icon: FlaskConical, label: "Third-party tested" },
  { icon: ShieldCheck, label: "THC compliant (<0.3%)" },
  { icon: ScanLine, label: "Batch traceability" },
  {
    icon: BookOpen,
    label: "Developed with a clear regulatory framework in mind",
  },
  { icon: MapPin, label: "USA-ready positioning" },
];

export default function TrustBlock() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className=" py-8">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="label-tag">Standards &amp; Compliance</span>
        </motion.div>
        <div className="trust-grid">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.09 }}
                className="bg-white p-8 flex flex-col gap-4"
              >
                <span className="icon-wrap icon-wrap-primary w-10 h-10">
                  <Icon
                    size={18}
                    color="var(--color-primary-dark)"
                    strokeWidth={1.75}
                  />
                </span>
                <span className="font-semibold text-[0.875rem] text-ink leading-snug">
                  {item.label}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
