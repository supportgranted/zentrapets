"use client";
import { Mail } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="relative border-t border-white/6 pt-32 pb-10 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/34315/bordeaux-mastiff-dog-animal.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/80"></div>

      <div className="relative container">
        <div className="flex justify-between items-start flex-wrap gap-8 pb-10 mb-8 border-b border-white">
          <div>
            <div className="font-extrabold text-[1.5rem] tracking-[0.12em] uppercase text-white mb-1.5">
              ZENTRA
            </div>
            <div className="font-medium text-[0.75rem] tracking-[0.08em] uppercase text-white">
              Heliora Group LLC &nbsp;·&nbsp; USA
            </div>
            <p className="font-normal text-[0.875rem] text-white/90 leading-relaxed m-0">
              7901 4TH ST N STE 300 ST. PETERSBURG, FL. US 33702
            </p>
          </div>

          <div className="flex flex-col gap-2 items-end">
            <span className="font-bold text-[0.5625rem] tracking-[0.22em] uppercase text-white">
              Trade Enquiries
            </span>
            <a
              href="mailto:hello@zentrapets.com"
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
              hello@zentrapets.com
            </a>
          </div>
        </div>
        <p className="font-normal text-[0.6875rem] leading-relaxed tracking-[0.02em] text-white max-w-170 mb-6">
          These products are not intended to diagnose, treat, cure, or prevent
          any disease.
        </p>

        <div className="flex justify-between flex-wrap gap-3">
          <span className="font-normal text-[0.6875rem] text-white">
            © {new Date().getFullYear()} Heliora Group LLC. All rights reserved.
          </span>
          <Link
            href="/legal/privacy"
            className="font-normal text-[0.8rem] text-white underline hover:text-white/60 transition-colors no-underline"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
