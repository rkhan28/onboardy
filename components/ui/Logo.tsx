"use client";

import { motion } from "framer-motion";

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
          background:
            "linear-gradient(180deg, #f5ecd0 0%, #dcbe6b 35%, #caa44a 65%, #9a6f26 100%)",
          boxShadow:
            "inset 0 1px 0 0 rgba(255,255,255,0.45), 0 8px 22px rgba(202,164,74,0.4)",
        }}
      >
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
          <path
            d="M4 12 a8 8 0 1 1 16 0 a8 8 0 1 1 -16 0"
            stroke="#1a1620"
            strokeWidth="2"
          />
          <circle cx="12" cy="12" r="2.5" fill="#1a1620" />
        </svg>
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-1000 group-hover:translate-x-full"
        />
      </motion.span>
      <span
        className="font-display text-lg font-semibold tracking-tight"
        style={{ color: "var(--fg-strong)" }}
      >
        Onboardy
      </span>
    </a>
  );
}
