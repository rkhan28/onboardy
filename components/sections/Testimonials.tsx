"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { Reveal } from "../ui/Reveal";
import { TESTIMONIALS } from "@/lib/data";

export function Testimonials() {
  return (
    <section className="relative py-20 sm:py-24">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="eyebrow">
              <span
                className="h-1.5 w-1.5 rounded-full"
                style={{ background: "var(--gold)" }}
              />
              Operators
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="section-title mt-4 text-balance">
              Real teams.{" "}
              <span className="font-serif italic text-gold">Real lift.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="muted mt-4 text-base sm:text-lg">
              Two slots ready for your testimonials.
            </p>
          </Reveal>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-5 md:grid-cols-2">
          {TESTIMONIALS.map((t, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.7,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="card-glass glass-shine relative overflow-hidden p-5 sm:p-7 md:p-8"
            >
              <span
                aria-hidden
                className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full blur-2xl"
                style={{
                  background:
                    "radial-gradient(closest-side, rgba(202,164,74,0.25), transparent 70%)",
                }}
              />

              <Quote
                className="h-8 w-8 opacity-40"
                style={{ color: "var(--gold)" }}
              />

              <blockquote
                className="relative mt-5 font-serif text-base leading-relaxed sm:text-lg md:text-xl"
                style={{ color: "var(--fg-strong)" }}
              >
                <span className="opacity-80">“</span>
                {t.quote}
                <span className="opacity-80">”</span>
              </blockquote>

              <div className="mt-6 flex items-center gap-3">
                {/* Placeholder avatar — gold gradient monogram */}
                <span
                  className="grid h-11 w-11 place-items-center rounded-full font-display text-sm font-semibold"
                  style={{
                    background:
                      "linear-gradient(180deg, #f5ecd0 0%, #dcbe6b 35%, #caa44a 65%, #9a6f26 100%)",
                    color: "#1a1620",
                    boxShadow:
                      "inset 0 1px 0 0 rgba(255,255,255,0.45), 0 6px 18px rgba(202,164,74,0.3)",
                  }}
                  aria-hidden
                >
                  {initials(t.name)}
                </span>
                <figcaption className="flex-1">
                  <p
                    className="font-display text-sm font-semibold"
                    style={{ color: "var(--fg-strong)" }}
                  >
                    {t.name}
                  </p>
                  <p
                    className="text-xs"
                    style={{ color: "var(--fg-faint)" }}
                  >
                    {t.role} · {t.business}
                  </p>
                </figcaption>
                <div className="flex items-center gap-0.5">
                  {[0, 1, 2, 3, 4].map((s) => (
                    <Star
                      key={s}
                      className="h-3.5 w-3.5"
                      style={{ color: "var(--gold)" }}
                      fill="currentColor"
                    />
                  ))}
                </div>
              </div>
            </motion.figure>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p
            className="mt-6 text-center text-xs"
            style={{ color: "var(--fg-faint)" }}
          >
            Placeholder content — swap with real testimonials in{" "}
            <code
              className="rounded px-1.5 py-0.5"
              style={{
                background: "var(--glass-strong)",
                color: "var(--fg-muted)",
              }}
            >
              lib/data.ts
            </code>
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function initials(name: string): string {
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}
