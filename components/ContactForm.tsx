"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    interest: "",
    message: "",
    honeypot: "", // anti-bot
  });

  const handleChange = (e: any) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e: any) => {
    e.preventDefault();

    // Anti-bot: si honeypot tiene valor, ignorar silenciosamente
    if (form.honeypot) return;

    const subject = `ZENTRA Trade Enquiry — ${form.company || form.name}`;
    const body = `Name: ${form.name}
Company: ${form.company}
Email: ${form.email}
Interest: ${form.interest}

Message:
${form.message}

---
Sent from zentrapets.com contact form`;

    window.location.href = `mailto:hello@zentrapets.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <section id="contact" className="bg-surface border-t border-border py-28">
      <div className="container">
        <div className="b2b-grid items-start">
          {/* Left — copy */}
          <div className="max-w-110">
            <span className="label-tag mb-8 block">Get in Touch</span>
            <h2 className="text-h2 font-extrabold tracking-[-0.02em] text-color-ink m-0 mb-6">
              Ready to <span className="text-primary">integrate ZENTRA</span>{" "}
              into your portfolio?
            </h2>
            <p className="font-normal text-base text-ink-muted leading-relaxed mb-8 m-0">
              Whether you are exploring private label, bulk supply, or retail
              integration — we are here to help you move forward with
              confidence.
            </p>

            <div className="flex flex-col gap-4">
              {[
                "Private label opportunities",
                "Bulk supply arrangements",
                "Retail integration support",
                "Documentation & COA requests",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2
                    size={16}
                    color="var(--color-primary)"
                    strokeWidth={2}
                    className="shrink-0"
                  />
                  <span className="font-semibold text-[0.9rem] text-ink-muted">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            {sent ? (
              <div className="bg-white rounded-(--radius-xl) border border-border p-12 flex flex-col items-center text-center gap-4">
                <div className="icon-wrap icon-wrap-primary w-16 h-16">
                  <CheckCircle2
                    size={28}
                    color="var(--color-primary-dark)"
                    strokeWidth={1.75}
                  />
                </div>
                <h3 className="font-extrabold text-[1.25rem] text-ink m-0">
                  Your email client is ready
                </h3>
                <p className="font-normal text-[0.9rem] text-ink-muted m-0 max-w-75 leading-relaxed">
                  Your message has been prepared. Send it from your email app
                  and we will get back to you shortly.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="btn btn-outline mt-2 text-[0.8125rem] py-2 px-6"
                >
                  Send another
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-xl border border-border p-8 flex flex-col gap-5"
              >
                {/* Honeypot — oculto para humanos */}
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="website">Website</label>
                  <input
                    id="website"
                    name="honeypot"
                    type="text"
                    value={form.honeypot}
                    onChange={handleChange}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="font-bold text-[0.6875rem] tracking-widest uppercase text-[var(--color-ink-light)]">
                      Name{" "}
                      <span className="text-[var(--color-primary)]">*</span>
                    </label>
                    <input
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-[var(--radius-md)] px-4 py-3 font-normal text-[0.9rem] text-[var(--color-ink)] placeholder:text-[var(--color-ink-light)] outline-none focus:border-[var(--color-primary)] transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="font-bold text-[0.6875rem] tracking-[0.1em] uppercase text-[var(--color-ink-light)]">
                      Company
                    </label>
                    <input
                      name="company"
                      type="text"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Your company"
                      className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-[var(--radius-md)] px-4 py-3 font-normal text-[0.9rem] text-[var(--color-ink)] placeholder:text-[var(--color-ink-light)] outline-none focus:border-[var(--color-primary)] transition-colors"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="font-bold text-[0.6875rem] tracking-[0.1em] uppercase text-[var(--color-ink-light)]">
                    Email <span className="text-[var(--color-primary)]">*</span>
                  </label>
                  <input
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="hello@yourcompany.com"
                    className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-[var(--radius-md)] px-4 py-3 font-normal text-[0.9rem] text-[var(--color-ink)] placeholder:text-[var(--color-ink-light)] outline-none focus:border-[var(--color-primary)] transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="font-bold text-[0.6875rem] tracking-[0.1em] uppercase text-[var(--color-ink-light)]">
                    I am interested in
                  </label>
                  <select
                    name="interest"
                    value={form.interest}
                    onChange={handleChange}
                    className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-[var(--radius-md)] px-4 py-3 font-normal text-[0.9rem] text-[var(--color-ink)] outline-none focus:border-[var(--color-primary)] transition-colors cursor-pointer appearance-none"
                  >
                    <option value="">Select an option</option>
                    <option value="Private Label">Private Label</option>
                    <option value="Bulk Supply">Bulk Supply</option>
                    <option value="Retail Integration">
                      Retail Integration
                    </option>
                    <option value="Documentation / COA">
                      Documentation / COA
                    </option>
                    <option value="General Enquiry">General Enquiry</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="font-bold text-[0.6875rem] tracking-[0.1em] uppercase text-[var(--color-ink-light)]">
                    Message{" "}
                    <span className="text-[var(--color-primary)]">*</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us about your project or enquiry..."
                    className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-[var(--radius-md)] px-4 py-3 font-normal text-[0.9rem] text-[var(--color-ink)] placeholder:text-[var(--color-ink-light)] outline-none focus:border-[var(--color-primary)] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary w-full justify-center mt-2"
                >
                  <Send size={15} strokeWidth={2} />
                  Send Enquiry
                </button>

                <p className="font-normal text-[0.6875rem] text-[var(--color-ink-light)] text-center m-0">
                  This will open your email client with your message ready to
                  send.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
