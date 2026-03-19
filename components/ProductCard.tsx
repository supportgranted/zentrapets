import { motion } from "framer-motion";
import { Droplets } from "lucide-react";
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
}
interface Props {
  product: Product;
  index: number;
}

export default function ProductCard({ product, index }: Props) {
  const isOil = product.category === "oils";

  return (
    <motion.article
      whileHover={{ y: -6, boxShadow: "var(--shadow-lg)" }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      className="card flex flex-col lg:h-130 h-150"
    >
      <div className={`product-img-area relative aspect-5/4`}>
        <span className="absolute top-4 left-4 z-10 bg-white/85 backdrop-blur border border-border rounded-full px-3 py-1 font-bold text-[0.5625rem] tracking-[0.18em] uppercase text-ink-muted">
          {isOil ? "Oil" : "Bites"}
        </span>
        {product.image ? (
          <Image
            src={product.image}
            alt={`${product.name} — ${product.subtitle ?? product.category}`}
            fill
            className="object-contain"
            sizes="(max-width: 520px) 100vw, (max-width: 860px) 50vw, 33vw"
          />
        ) : (
          <div className="flex flex-col items-center justify-center gap-3 w-full h-full">
            <div className="absolute inset-6 rounded-(--radius-lg) border-2 border-dashed opacity-25" />
            <span className="relative z-10 font-bold text-[0.5rem] tracking-[0.28em] uppercase opacity-30">
              Product Image
            </span>
          </div>
        )}
      </div>
      <div className="p-6 flex flex-col gap-1.5 flex-1">
        <h3 className="font-extrabold text-[1.125rem] tracking-[-0.01em] text-ink m-0">
          {product.name}
        </h3>
        {product.subtitle && (
          <p className="font-semibold text-[0.6875rem] tracking-widest uppercase text-dark m-0">
            {product.subtitle}
          </p>
        )}
        <span className="divider divider-sm divider-gold my-2 block" />
        <p className="font-normal text-[0.875rem] text-ink-muted leading-relaxed m-0 flex-1">
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
