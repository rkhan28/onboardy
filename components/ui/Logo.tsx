"use client";

import { motion } from "framer-motion";

/**
 * Replace /public/logo.svg with your own brand mark (SVG or PNG).
 * Keep it ~64×64 with transparent background for best results.
 */
export function Logo() {
  return (
    <a
      href="#home"
      className="group flex items-center gap-2.5 focus:outline-none"
      aria-label="Onboardy"
    >
      <motion.span
        initial={{ rotate: -8, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative grid h-8 w-8 place-items-center overflow-hidden rounded-xl"
        style={{
          boxShadow:
            "inset 0 1px 0 0 rgba(255,255,255,0.18), 0 6px 18px rgba(202,164,74,0.28)",
        }}
      >
        {/* Replace with your own logo file at /public/logo.svg */}
        <img
          src="/logo.svg"
          alt=""
          className="h-full w-full object-cover"
          aria-hidden
        />
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-1000 group-hover:translate-x-full"
        />
      </motion.span>
      <span
        className="font-serif text-[22px] font-medium leading-none tracking-tight"
        style={{ color: "var(--fg-strong)" }}
      >
        Onboardy
      </span>
    </a>
  );
}
