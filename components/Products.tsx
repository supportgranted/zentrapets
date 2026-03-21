"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import productsData from "@/data/products.json";
import ProductCard, { type Product } from "./ProductCard";

const products = (productsData as Product[])
  .filter((p) => p.active)
  .sort((a, b) => a.order - b.order);

const oils = products.filter((p) => p.category === "oils");
const bites = products.filter((p) => p.category === "bites");

function SectionLabel({
  colorClass,
  label,
}: {
  colorClass: string;
  label: string;
}) {
  return (
    <div className="flex items-center gap-4 mb-8">
      <span className={`divider divider-sm block ${colorClass}`} />
      <span className="font-bold text-[0.6875rem] tracking-[0.2em] uppercase text-ink-light">
        {label}
      </span>
      <span className="flex-1 block h-px bg-border" />
    </div>
  );
}

function ProductGrid({
  items,
  delay = 0,
}: {
  items: Product[];
  delay?: number;
}) {
  return (
    <div className="product-grid">
      {items.map((p, i) => (
        <motion.div
          key={p.id}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{
            duration: 0.55,
            delay: delay + i * 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <ProductCard product={p} index={i} />
        </motion.div>
      ))}
    </div>
  );
}

export default function Products() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="products" className="bg-white py-28">
      <div className="container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="mb-16"
        >
          <span className="label-tag mb-5 block">Product Range</span>
          <h2 className="text-h2  font-extrabold tracking-[-0.02em] text-ink m-0">
            The ZENTRA <span className="text-primary">Collection</span>
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.15 }}
        >
          <SectionLabel colorClass="divider-primary" label="Oils" />
        </motion.div>
        <div className="mb-16">
          <ProductGrid items={oils} delay={0.2} />
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <SectionLabel colorClass="divider-gold" label="Bites" />
        </motion.div>
        <ProductGrid items={bites} />
      </div>
    </section>
  );
}
