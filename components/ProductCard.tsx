"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export interface Product {
  id: string;
  sku: string;
  category: "oils" | "bites";
  name: string;
  subtitle: string | null;
  tagline: string;
  thcCompliant: boolean;
  thirdPartyTested: boolean;
  image?: string | null;
  active?: boolean;
  order?: number;
  tag?: string | null;
}

interface Props {
  product: Product;
  index: number;
  onClick?: () => void;
}

export default function ProductCard({ product, index, onClick }: Props) {
  const isOil = product.category === "oils";
  const accent = index % 2 === 0 ? "var(--color-primary)" : "var(--color-gold)";

  return (
    <motion.article
      onClick={onClick}
      whileHover={{ y: -6, boxShadow: "var(--shadow-lg)" }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      className="card flex flex-col cursor-pointer"
    >
      {/* Image area */}
      <div
        className={`product-img-area relative  ${isOil ? "aspect-[4/5]" : "aspect-[5/4]"}`}
      >
        <span className="absolute top-4 left-4 z-10 bg-white/85 backdrop-blur border border-[var(--color-border)] rounded-full px-3 py-1 font-bold text-[0.5625rem] tracking-[0.18em] uppercase text-[var(--color-ink-muted)]">
          {isOil ? "Oil" : "Bites"}
        </span>

        {product.image ? (
          <Image
            src={product.image}
            alt={`${product.name} — ${product.subtitle ?? product.category}`}
            fill
            className="object-contain p-6"
            sizes="(max-width: 520px) 100vw, (max-width: 860px) 50vw, 33vw"
          />
        ) : (
          <div className="flex flex-col items-center justify-center gap-3 w-full h-full">
            <div
              className="absolute inset-6 rounded-[var(--radius-lg)] border-2 border-dashed opacity-25"
              style={{ borderColor: accent }}
            />
            {isOil ? (
              <svg
                width="56"
                height="88"
                viewBox="0 0 56 88"
                fill="none"
                aria-hidden
              >
                <rect
                  x="20"
                  y="1"
                  width="14"
                  height="10"
                  rx="3"
                  fill={accent}
                  opacity="0.35"
                />
                <rect
                  x="15"
                  y="11"
                  width="24"
                  height="4"
                  rx="1.5"
                  fill={accent}
                  opacity="0.2"
                />
                <path
                  d="M12 15 Q6 22 6 33 L6 70 Q6 80 16 80 L40 80 Q50 80 50 70 L50 33 Q50 22 44 15 Z"
                  fill={accent}
                  opacity="0.13"
                  stroke={accent}
                  strokeWidth="1.25"
                  strokeOpacity="0.35"
                />
                <ellipse
                  cx="28"
                  cy="50"
                  rx="11"
                  ry="14"
                  fill={accent}
                  opacity="0.07"
                />
                <line
                  x1="17"
                  y1="57"
                  x2="39"
                  y2="57"
                  stroke={accent}
                  strokeWidth="0.75"
                  strokeOpacity="0.25"
                />
              </svg>
            ) : (
              <svg
                width="76"
                height="76"
                viewBox="0 0 76 76"
                fill="none"
                aria-hidden
              >
                <rect
                  x="6"
                  y="6"
                  width="27"
                  height="27"
                  rx="8"
                  fill={accent}
                  opacity="0.15"
                  stroke={accent}
                  strokeWidth="1.25"
                  strokeOpacity="0.3"
                />
                <rect
                  x="43"
                  y="6"
                  width="27"
                  height="27"
                  rx="8"
                  fill={accent}
                  opacity="0.10"
                  stroke={accent}
                  strokeWidth="1.25"
                  strokeOpacity="0.3"
                />
                <rect
                  x="6"
                  y="43"
                  width="27"
                  height="27"
                  rx="8"
                  fill={accent}
                  opacity="0.10"
                  stroke={accent}
                  strokeWidth="1.25"
                  strokeOpacity="0.3"
                />
                <rect
                  x="43"
                  y="43"
                  width="27"
                  height="27"
                  rx="8"
                  fill={accent}
                  opacity="0.15"
                  stroke={accent}
                  strokeWidth="1.25"
                  strokeOpacity="0.3"
                />
                <circle cx="19" cy="19" r="4" fill={accent} opacity="0.25" />
                <circle cx="57" cy="57" r="4" fill={accent} opacity="0.25" />
              </svg>
            )}
            <span
              className="relative z-10 font-bold text-[0.5rem] tracking-[0.28em] uppercase opacity-30"
              style={{ color: accent }}
            >
              Product Image
            </span>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="p-6 flex flex-col gap-1.5 flex-1">
        <h3 className="font-extrabold text-[1.125rem] tracking-[-0.01em] text-[var(--color-ink)] m-0">
          {product.name}
        </h3>
        {product.subtitle && (
          <p className="font-semibold text-[0.6875rem] tracking-[0.1em] uppercase text-[var(--color-primary-dark)] m-0">
            {product.subtitle}
          </p>
        )}
        <span className="divider divider-sm divider-gold my-2 block" />
        <p className="font-normal text-[0.875rem] text-[var(--color-ink-muted)] leading-relaxed m-0 flex-1">
          {product.tagline}
        </p>
        <div className="flex gap-2 flex-wrap mt-5">
          {product.thirdPartyTested && (
            <span className="badge badge-primary">
              <span className="badge-dot" />
              Tested
            </span>
          )}
          {product.thcCompliant && (
            <span className="badge badge-gold">
              <span className="badge-dot" />
              THC &lt;0.3%
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
}
