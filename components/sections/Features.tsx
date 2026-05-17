"use client";

import { motion } from "framer-motion";
import { FEATURES } from "@/lib/data";
import { Reveal } from "../ui/Reveal";

export function Features() {
  return (
    <section id="features" className="relative py-24 sm:py-28 lg:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, var(--border-gold), transparent)",
        }}
      />
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="eyebrow">
              <span
                className="h-1.5 w-1.5 rounded-full"
                style={{ background: "var(--gold)" }}
              />
              Features
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="section-title mt-4">
              Everything you need.{" "}
              <span className="font-serif italic text-gold">
                Nothing you don&apos;t.
              </span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="muted mt-4 text-base sm:text-lg">
              Six systems, one platform. Built to capture leads, book customers,
              and run on autopilot.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.article
                key={f.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.07,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="card-glass glass-shine group relative overflow-hidden"
              >
                <span
                  aria-hidden
                  className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full opacity-0 blur-2xl transition-opacity duration-700 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(closest-side, rgba(202,164,74,0.5), transparent 70%)",
                  }}
                />
                <div className="relative">
                  <span
                    className="grid h-11 w-11 place-items-center rounded-xl transition-transform duration-700 group-hover:scale-110 group-hover:rotate-3"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(202,164,74,0.22), rgba(202,164,74,0.04))",
                      border: "1px solid var(--border-gold)",
                      boxShadow:
                        "inset 0 1px 0 0 rgba(247,239,217,0.14)",
                    }}
                  >
                    <Icon
                      className="h-5 w-5"
                      style={{ color: "var(--gold)" }}
                    />
                  </span>
                  <h3
                    className="mt-5 font-display text-lg font-semibold tracking-tight"
                    style={{ color: "var(--fg-strong)" }}
                  >
                    {f.title}
                  </h3>
                  <p className="muted mt-2 text-sm leading-relaxed">
                    {f.description}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
