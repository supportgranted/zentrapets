"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const badges = [
  { src: "/cert/fda.png", alt: "FDA Registered" },
  { src: "/cert/iso.png", alt: "ISO 9001:2015 Certified Company" },
  { src: "/cert/cgmp.png", alt: "GMP Facility" },
  { src: "/cert/a2la.png", alt: "A2LA Accredited 1978" },
  { src: "/cert/ilacmra.png", alt: "ilacmra" },
  { src: "/cert/madeinusa.png", alt: "madeinusa" },
  { src: "/cert/usp.png", alt: "200usp" },
  { src: "/cert/2la.png", alt: "2la" },
];

export default function CertBadges() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="bg-white border-b border-border py-10" ref={ref}>
      <div className="container">
        <div className="flex items-center justify-center flex-wrap gap-10">
          {badges.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="relative w-20 h-20 hover:scale-110 transition-all duration-300"
            >
              <Image src={b.src} alt={b.alt} fill className="object-contain" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
