"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("zentra-cookies");
    if (!accepted) setTimeout(() => setVisible(true), 1800);
  }, []);

  const accept = () => {
    localStorage.setItem("zentra-cookies", "accepted");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[300] w-[calc(100%-2rem)] max-w-[560px] bg-white rounded-[var(--radius-xl)] border border-[var(--color-border)] shadow-2xl p-5 flex items-center gap-4 flex-wrap"
        >
          <p className="font-normal text-[0.8125rem] text-[var(--color-ink-muted)] leading-relaxed flex-1 min-w-[200px] m-0">
            We use cookies to improve your experience.{" "}
            <a
              href="/legal/privacy"
              className="text-[var(--color-primary-dark)] underline underline-offset-2"
            >
              Privacy Policy
            </a>
          </p>
          <div className="flex items-center gap-3 flex-shrink-0">
            <button
              onClick={accept}
              className="btn btn-primary py-2 px-5 text-[0.75rem]"
            >
              Accept
            </button>
            <button
              onClick={() => setVisible(false)}
              className="w-8 h-8 flex items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] hover:bg-[var(--color-border)] transition-colors cursor-pointer"
            >
              <X size={14} color="var(--color-ink-muted)" strokeWidth={2} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
