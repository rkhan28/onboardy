"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  Sparkles,
  PhoneCall,
  Bot,
  CalendarCheck,
  Star,
  Mic,
  Zap,
} from "lucide-react";
import { ClientLogos } from "../ui/ClientLogos";

// ── Scripted live-demo conversation ──
type Msg =
  | { kind: "system"; text: string }
  | { kind: "customer"; text: string }
  | { kind: "ai"; text: string }
  | { kind: "event"; text: string };

const script: Msg[] = [
  { kind: "system", text: "Incoming call · +1 (415) 555-0142" },
  { kind: "ai", text: "Hi, thanks for calling Northpeak HVAC — how can I help?" },
  { kind: "customer", text: "AC stopped working. Need someone today if possible." },
  { kind: "ai", text: "Got it. I have an opening at 2:40 PM today. Book it?" },
  { kind: "customer", text: "Yes please." },
  { kind: "event", text: "Booked · 2:40 PM · Synced to CRM" },
];

const stats = [
  { value: "12s", label: "Avg. reply" },
  { value: "3×", label: "Booked leads" },
  { value: "24/7", label: "Always on" },
  { value: "100%", label: "Handoff" },
];

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 sm:pt-32">
      <Aurora />

      <div className="container-x relative">
        {/* Headline */}
        <div className="mx-auto max-w-4xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="eyebrow"
          >
            <Sparkles className="h-3 w-3" style={{ color: "var(--gold)" }} />
            Voice AI · Booking AI · Review AI
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 font-display text-[2rem] font-semibold leading-[1.05] tracking-tight text-balance sm:text-5xl md:text-6xl lg:text-7xl"
            style={{ color: "var(--fg-strong)" }}
          >
            Every call answered.{" "}
            <span className="font-serif italic text-gold">
              Every lead booked.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="muted mx-auto mt-5 max-w-xl text-base sm:text-lg"
          >
            An AI receptionist, CRM, and booking funnel — running 24/7 so your
            team never misses revenue.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center"
          >
            <a href="#contact" className="btn-primary group">
              Book a Free Audit
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a href="#features" className="btn-ghost">
              See it work
            </a>
          </motion.div>
        </div>

        {/* Transparent logo carousel — sits right under the CTAs */}
        <LogoCarousel />

        {/* Unified live demo panel */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-10 max-w-5xl sm:mt-12"
        >
          <LiveDemoPanel />
        </motion.div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// Live demo panel — animated AI conversation + live stats
// ─────────────────────────────────────────────
function LiveDemoPanel() {
  return (
    <div className="card-glass glass-shine relative overflow-hidden p-0 sm:p-0">
      {/* Top status bar */}
      <div
        className="flex items-center justify-between gap-2 border-b px-4 py-3 sm:px-6"
        style={{ borderColor: "var(--border)" }}
      >
        <div className="flex min-w-0 items-center gap-2.5">
          <span
            className="grid h-7 w-7 shrink-0 place-items-center rounded-lg"
            style={{
              background:
                "linear-gradient(135deg, rgba(202,164,74,0.25), rgba(202,164,74,0.05))",
              border: "1px solid var(--border-gold)",
            }}
          >
            <Mic className="h-3.5 w-3.5" style={{ color: "var(--gold)" }} />
          </span>
          <div className="min-w-0">
            <p
              className="text-[10px] font-semibold uppercase tracking-[0.18em]"
              style={{ color: "var(--fg-faint)" }}
            >
              Live demo
            </p>
            <p
              className="truncate text-xs font-medium"
              style={{ color: "var(--fg)" }}
            >
              <span className="hidden sm:inline">AI Receptionist handling an inbound call</span>
              <span className="sm:hidden">AI handling a call</span>
            </p>
          </div>
        </div>
        <LiveBadge />
      </div>

      {/* Body: conversation + stats sidebar */}
      <div className="grid lg:grid-cols-[1.5fr_1fr]">
        <ConversationStream />
        <StatsRail />
      </div>
    </div>
  );
}

function LiveBadge() {
  return (
    <span
      className="flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest"
      style={{
        background:
          "linear-gradient(135deg, rgba(202,164,74,0.22), rgba(202,164,74,0.06))",
        border: "1px solid var(--border-gold)",
        color: "var(--gold)",
      }}
    >
      <span className="relative flex h-1.5 w-1.5">
        <span
          className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"
          style={{ background: "var(--gold)" }}
        />
        <span
          className="relative inline-flex h-1.5 w-1.5 rounded-full"
          style={{ background: "var(--gold)" }}
        />
      </span>
      Live
    </span>
  );
}

function ConversationStream() {
  const [step, setStep] = useState(0);
  const [showTyping, setShowTyping] = useState(false);

  // Auto-cycle the script; restart from top with a brief pause
  useEffect(() => {
    if (step >= script.length) {
      const reset = setTimeout(() => setStep(0), 3200);
      return () => clearTimeout(reset);
    }
    const msg = script[step];
    // AI messages get a typing indicator before they appear
    const isAI = msg.kind === "ai";
    if (isAI) {
      setShowTyping(true);
      const typing = setTimeout(() => {
        setShowTyping(false);
        setStep((s) => s + 1);
      }, 1100);
      return () => clearTimeout(typing);
    }
    const next = setTimeout(() => setStep((s) => s + 1), 1500);
    return () => clearTimeout(next);
  }, [step]);

  const visible = script.slice(0, step);

  return (
    <div
      className="relative min-h-[320px] border-b p-4 sm:p-6 lg:border-b-0 lg:border-r"
      style={{ borderColor: "var(--border)" }}
    >
      <div className="space-y-2.5">
        <AnimatePresence initial={false}>
          {visible.map((msg, i) => (
            <MessageBubble key={i} msg={msg} />
          ))}
          {showTyping && <TypingIndicator key="typing" />}
        </AnimatePresence>
      </div>
    </div>
  );
}

function MessageBubble({ msg }: { msg: Msg }) {
  if (msg.kind === "system") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="flex items-center justify-center"
      >
        <span
          className="flex items-center gap-2 rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-widest"
          style={{
            background: "var(--glass)",
            border: "1px solid var(--border)",
            color: "var(--fg-faint)",
          }}
        >
          <PhoneCall className="h-3 w-3" />
          {msg.text}
        </span>
      </motion.div>
    );
  }

  if (msg.kind === "event") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 8 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 180, damping: 16 }}
        className="flex items-center justify-center pt-1"
      >
        <span
          className="flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-semibold"
          style={{
            background:
              "linear-gradient(135deg, rgba(202,164,74,0.25), rgba(202,164,74,0.08))",
            border: "1px solid var(--border-gold)",
            color: "var(--gold)",
            boxShadow: "0 0 24px rgba(202,164,74,0.25)",
          }}
        >
          <CalendarCheck className="h-3.5 w-3.5" />
          {msg.text}
        </span>
      </motion.div>
    );
  }

  const isAI = msg.kind === "ai";
  return (
    <motion.div
      initial={{ opacity: 0, y: 10, x: isAI ? -8 : 8 }}
      animate={{ opacity: 1, y: 0, x: 0 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className={`flex ${isAI ? "justify-start" : "justify-end"} gap-2`}
    >
      {isAI && (
        <span
          className="grid h-7 w-7 shrink-0 place-items-center rounded-full"
          style={{
            background:
              "linear-gradient(180deg, #f5ecd0 0%, #dcbe6b 50%, #caa44a 100%)",
            color: "#1a1620",
            boxShadow: "inset 0 1px 0 0 rgba(255,255,255,0.45)",
          }}
        >
          <Bot className="h-3.5 w-3.5" />
        </span>
      )}
      <div
        className="max-w-[82%] rounded-2xl px-3.5 py-2 text-sm leading-relaxed sm:max-w-[78%]"
        style={
          isAI
            ? {
                background: "var(--glass-strong)",
                border: "1px solid var(--border-strong)",
                color: "var(--fg-strong)",
                borderTopLeftRadius: 6,
              }
            : {
                background:
                  "linear-gradient(135deg, rgba(202,164,74,0.2), rgba(202,164,74,0.08))",
                border: "1px solid var(--border-gold)",
                color: "var(--fg-strong)",
                borderTopRightRadius: 6,
              }
        }
      >
        {msg.text}
      </div>
    </motion.div>
  );
}

function TypingIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="flex items-center gap-2"
    >
      <span
        className="grid h-7 w-7 shrink-0 place-items-center rounded-full"
        style={{
          background:
            "linear-gradient(180deg, #f5ecd0 0%, #dcbe6b 50%, #caa44a 100%)",
          color: "#1a1620",
        }}
      >
        <Bot className="h-3.5 w-3.5" />
      </span>
      <div
        className="flex items-center gap-1 rounded-2xl px-3 py-2.5"
        style={{
          background: "var(--glass-strong)",
          border: "1px solid var(--border-strong)",
          borderTopLeftRadius: 6,
        }}
      >
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className="block h-1.5 w-1.5 rounded-full"
            style={{ background: "var(--gold)" }}
            animate={{ opacity: [0.3, 1, 0.3], y: [0, -2, 0] }}
            transition={{
              duration: 1,
              repeat: Infinity,
              delay: i * 0.15,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}

// Stats rail — lives inside the same panel as the chat
function StatsRail() {
  return (
    <div className="grid grid-cols-2 gap-2.5 p-4 sm:gap-3 sm:p-6 lg:grid-cols-1 lg:gap-2.5">
      {stats.map((s, i) => (
        <motion.div
          key={s.label}
          initial={{ opacity: 0, x: 12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 + i * 0.08, duration: 0.5 }}
          className="rounded-xl p-3.5 transition-all duration-500 hover:scale-[1.02]"
          style={{
            background: "var(--glass)",
            border: "1px solid var(--border)",
          }}
        >
          <p
            className="font-display text-xl font-semibold tracking-tight sm:text-2xl"
            style={{ color: "var(--fg-strong)" }}
          >
            {s.value}
          </p>
          <p
            className="mt-0.5 text-[10px] font-semibold uppercase tracking-widest"
            style={{ color: "var(--fg-faint)" }}
          >
            {s.label}
          </p>
        </motion.div>
      ))}
      <motion.div
        initial={{ opacity: 0, x: 12 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 1, duration: 0.5 }}
        className="col-span-2 flex items-center gap-2 rounded-xl p-3.5 lg:col-span-1"
        style={{
          background:
            "linear-gradient(135deg, rgba(202,164,74,0.15), rgba(202,164,74,0.03))",
          border: "1px solid var(--border-gold)",
        }}
      >
        <Zap className="h-4 w-4" style={{ color: "var(--gold)" }} />
        <p
          className="text-xs font-medium"
          style={{ color: "var(--fg-strong)" }}
        >
          End-to-end in under 60s
        </p>
      </motion.div>
    </div>
  );
}

// ─────────────────────────────────────────────
// Logo carousel + aurora
// ─────────────────────────────────────────────
function LogoCarousel() {
  const doubled = [...ClientLogos, ...ClientLogos];
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.4 }}
      className="mx-auto mt-10 max-w-5xl sm:mt-12"
    >
      <p
        className="text-center text-[10px] font-semibold uppercase tracking-[0.28em]"
        style={{ color: "var(--fg-faint)" }}
      >
        Trusted by service businesses like
      </p>
      <div className="mask-fade-x mt-5 overflow-hidden">
        <div className="flex w-max animate-marquee items-center gap-8 sm:gap-12 md:gap-16">
          {doubled.map((logo, i) => {
            const L = logo.Component;
            return (
              <div
                key={`${logo.name}-${i}`}
                className="shrink-0 opacity-50 transition-all duration-500 hover:opacity-100"
                style={{ color: "var(--fg)" }}
              >
                <L className="h-6 w-auto sm:h-7" />
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
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
