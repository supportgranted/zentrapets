"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X } from "lucide-react";
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
      <span
        translate="no"
        className="font-bold text-[0.6875rem] tracking-[0.2em] uppercase text-[var(--color-ink-light)]"
      >
        {label}
      </span>
      <span className="flex-1 block h-px bg-[var(--color-border)]" />
    </div>
  );
}

function ProductGrid({
  items,
  delay = 0,
  onSelect,
}: {
  items: Product[];
  delay?: number;
  onSelect: (p: Product) => void;
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
          <ProductCard product={p} index={i} onClick={() => onSelect(p)} />
        </motion.div>
      ))}
    </div>
  );
}

export default function Products() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [selected, setSelected] = useState<Product | null>(null);

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
          <h2 className="text-h2 font-extrabold tracking-[-0.02em] text-[var(--color-ink)] m-0">
            The ZENTRA{" "}
            <span className="text-[var(--color-primary)]">Collection</span>
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
          <ProductGrid items={oils} delay={0.2} onSelect={setSelected} />
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <SectionLabel colorClass="divider-gold" label="Bites" />
        </motion.div>
        <ProductGrid items={bites} onSelect={setSelected} />
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-6 bg-black/70 backdrop-blur-sm cursor-pointer"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.88, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.88, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative bg-white rounded-[var(--radius-xl)] overflow-hidden max-w-lg w-full shadow-2xl cursor-default"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Cerrar */}
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 z-10 w-9 h-9 bg-white/90 backdrop-blur rounded-full border border-[var(--color-border)] flex items-center justify-center cursor-pointer hover:bg-[var(--color-surface)] transition-colors"
              >
                <X size={16} color="var(--color-ink)" strokeWidth={2} />
              </button>

              {/* Imagen */}
              {selected.image ? (
                <div className="relative aspect-square">
                  <Image
                    src={selected.image}
                    alt={selected.name}
                    fill
                    className="object-contain p-8"
                    sizes="512px"
                  />
                </div>
              ) : (
                <div className="aspect-square flex items-center justify-center bg-[var(--color-surface)]">
                  <span className="font-bold text-[0.625rem] tracking-[0.25em] uppercase text-[var(--color-ink-light)]">
                    Image coming soon
                  </span>
                </div>
              )}

              {/* Info */}
              <div className="p-6 border-t border-[var(--color-border)]">
                <div className="font-extrabold text-[1.25rem] text-[var(--color-ink)] mb-1">
                  {selected.name}
                </div>
                {selected.subtitle && (
                  <div className="font-semibold text-[0.6875rem] tracking-[0.1em] uppercase text-[var(--color-primary-dark)] mb-3">
                    {selected.subtitle}
                  </div>
                )}
                <p className="font-normal text-[0.9rem] text-[var(--color-ink-muted)] leading-relaxed m-0">
                  {selected.tagline}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
/*
bites
*/
