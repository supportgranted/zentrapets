"use client";
import { motion } from "framer-motion";
import { Download } from "lucide-react";

export default function DossierTab() {
  const TAB_WIDTH = 80;
  const HIDDEN_OFFSET = 120;

  return (
    <motion.a
      href="/docs/zentra-dossier-en.pdf"
      download
      initial={{ x: HIDDEN_OFFSET }}
      animate={{ x: HIDDEN_OFFSET - TAB_WIDTH }}
      whileHover={{ x: 0 }}
      whileTap={{ x: 0 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className="fixed right-0 bottom-40 -translate-y-1/2 z-50"
    >
      <div
        className="flex flex-col items-start justify-center pl-2  bg-primary text-white"
        style={{
          width: "80px",
          height: "200px",
          borderRadius: "12px 0 0 12px",
          boxShadow: "var(--shadow-md)",
        }}
      >
        <Download size={18} className="mb-3" />

        <span
          className="text-xs font-extrabold tracking-widest uppercase"
          style={{
            writingMode: "vertical-rl",
            transform: "rotate(360deg)",
          }}
        >
          Download Dossier
        </span>
      </div>
    </motion.a>
  );
}
