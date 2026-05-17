"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  PhoneCall,
  Bot,
  CalendarCheck,
  Star,
} from "lucide-react";
import { ClientLogos } from "../ui/ClientLogos";
import { STATS } from "@/lib/data";

const flow = [
  { icon: PhoneCall, label: "Call in" },
  { icon: Bot, label: "AI replies" },
  { icon: CalendarCheck, label: "Booked" },
  { icon: Star, label: "Review" },
];

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 sm:pt-32">
      <Aurora />

      <div className="container-x relative">
        <div className="mx-auto max-w-4xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="eyebrow"
          >
            <Sparkles className="h-3 w-3" style={{ color: "var(--gold)" }} />
            AI automation for service businesses
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-balance sm:text-5xl md:text-6xl lg:text-7xl"
            style={{ color: "var(--fg-strong)" }}
          >
            Turn missed leads into{" "}
            <span className="font-serif italic text-gold">
              booked customers.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="muted mx-auto mt-5 max-w-xl text-base sm:text-lg"
          >
            AI receptionists, booking funnels, and CRM systems — built so your
            business runs smoother from first call to final review.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <a href="#contact" className="btn-primary group">
              Book a Free Audit
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a href="#features" className="btn-ghost">
              See features
            </a>
          </motion.div>
        </div>

        {/* Transparent logo carousel — floating marks, no card backgrounds */}
        <LogoCarousel />

        {/* Live flow + stats */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="mt-12 grid items-center gap-4 sm:mt-16 lg:grid-cols-[1.3fr_1fr]"
        >
          <FlowCard />
          <StatsCard />
        </motion.div>
      </div>
    </section>
  );
}

function Aurora() {
  return (
    <>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 grid-bg opacity-60 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]"
      />
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4 }}
        className="pointer-events-none absolute -top-32 left-1/2 -z-10 h-[520px] w-[820px] -translate-x-1/2 animate-aurora rounded-full"
        style={{
          background:
            "radial-gradient(closest-side, rgba(202,164,74,0.22), transparent 70%)",
          filter: "blur(50px)",
        }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-[8%] top-44 -z-10 h-80 w-80 animate-aurora rounded-full"
        style={{
          background:
            "radial-gradient(closest-side, rgba(96,64,132,0.32), transparent 70%)",
          filter: "blur(50px)",
          animationDelay: "-7s",
        }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute right-[8%] top-64 -z-10 h-80 w-80 animate-aurora rounded-full"
        style={{
          background:
            "radial-gradient(closest-side, rgba(220,190,107,0.16), transparent 70%)",
          filter: "blur(50px)",
          animationDelay: "-14s",
        }}
      />
    </>
  );
}

function LogoCarousel() {
  const doubled = [...ClientLogos, ...ClientLogos];
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.4 }}
      className="mx-auto mt-12 max-w-5xl sm:mt-14"
    >
      <p
        className="text-center text-[10px] font-semibold uppercase tracking-[0.28em]"
        style={{ color: "var(--fg-faint)" }}
      >
        Trusted by service businesses like
      </p>
      {/* Transparent — no card, no glass background, just the marks */}
      <div className="mask-fade-x mt-5 overflow-hidden">
        <div className="flex w-max animate-marquee items-center gap-12 sm:gap-16">
          {doubled.map((logo, i) => {
            const L = logo.Component;
            return (
              <div
                key={`${logo.name}-${i}`}
                className="shrink-0 opacity-50 transition-all duration-500 hover:opacity-100"
                style={{ color: "var(--fg)" }}
              >
                <L className="h-7 w-auto" />
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}

function FlowCard() {
  return (
    <div className="card-glass glass-shine relative overflow-hidden p-5 sm:p-6">
      <div className="flex items-center justify-between">
        <span
          className="text-[10px] font-semibold uppercase tracking-widest"
          style={{ color: "var(--fg-faint)" }}
        >
          Live flow
        </span>
        <span
          className="flex items-center gap-1.5 text-[10px] font-medium"
          style={{ color: "var(--gold)" }}
        >
          <span className="relative flex h-2 w-2">
            <span
              className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"
              style={{ background: "var(--gold)" }}
            />
            <span
              className="relative inline-flex h-2 w-2 rounded-full"
              style={{ background: "var(--gold)" }}
            />
          </span>
          Running
        </span>
      </div>

      <div className="mt-5 flex items-center justify-between gap-2 overflow-x-auto">
        {flow.map((node, i) => {
          const Icon = node.icon;
          return (
            <div key={node.label} className="flex items-center gap-2 sm:gap-3">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.5 }}
                className="flex flex-col items-center gap-1.5"
              >
                <span
                  className="grid h-11 w-11 place-items-center rounded-xl"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(202,164,74,0.18), rgba(202,164,74,0.04))",
                    border: "1px solid var(--border-gold)",
                    boxShadow:
                      "inset 0 1px 0 0 rgba(247,239,217,0.12)",
                  }}
                >
                  <Icon className="h-4 w-4" style={{ color: "var(--gold)" }} />
                </span>
                <span
                  className="text-[11px] font-medium"
                  style={{ color: "var(--fg-muted)" }}
                >
                  {node.label}
                </span>
              </motion.div>
              {i < flow.length - 1 && (
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.25 + i * 0.12, duration: 0.6 }}
                  className="h-px w-6 origin-left sm:w-10"
                  style={{
                    background:
                      "linear-gradient(90deg, var(--gold), transparent)",
                  }}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function StatsCard() {
  return (
    <div className="grid grid-cols-2 gap-3 sm:gap-4">
      {STATS.map((s, i) => (
        <motion.div
          key={s.label}
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 + i * 0.1, duration: 0.6 }}
          className="card-glass glass-shine p-4"
        >
          <p
            className="font-display text-2xl font-semibold tracking-tight sm:text-3xl"
            style={{ color: "var(--fg-strong)" }}
          >
            {s.value}
          </p>
          <p
            className="mt-1 text-[10px] font-semibold uppercase tracking-widest"
            style={{ color: "var(--fg-faint)" }}
          >
            {s.label}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
