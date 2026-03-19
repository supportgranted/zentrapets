"use client";
import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="relative border-t border-white/6 pt-16 pb-10 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/6291566/pexels-photo-6291566.jpeg')",
      }}
    >
      <div className="absolute inset-0 bg-black/80"></div>

      <div className="relative container">
        <div className="flex justify-between items-start flex-wrap gap-8 pb-10 mb-8 border-b border-white/7">
          <div>
            <div className="font-extrabold text-[1.5rem] tracking-[0.12em] uppercase text-white mb-1.5">
              ZENTRA
            </div>
            <div className="font-medium text-[0.75rem] tracking-[0.08em] uppercase text-white/30">
              Heliora Group LLC &nbsp;·&nbsp; USA
            </div>
          </div>

          <div className="flex flex-col gap-2 items-end">
            <span className="font-bold text-[0.5625rem] tracking-[0.22em] uppercase text-white/25">
              Trade Enquiries
            </span>
            <a
              href="mailto:info@zentrapets.com"
              className="inline-flex items-center gap-2 font-semibold text-[0.9375rem] no-underline transition-colors duration-200"
              style={{ color: "var(--color-gold)" }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "#fff")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.color =
                  "var(--color-gold)")
              }
            >
              <Mail size={15} strokeWidth={2} />
              info@zentrapets.com
            </a>
          </div>
        </div>
        <p className="font-normal text-[0.6875rem] leading-relaxed tracking-[0.02em] text-white/25 max-w-170 mb-6">
          These products are not intended to diagnose, treat, cure, or prevent
          any disease.
        </p>

        <div className="flex justify-between flex-wrap gap-3">
          <span className="font-normal text-[0.6875rem] text-white/18">
            © {new Date().getFullYear()} Heliora Group LLC. All rights reserved.
          </span>
          <span className="font-normal text-[0.6875rem] text-white/18">
            Pet Wellness, Simplified
          </span>
        </div>
      </div>
    </footer>
  );
}
