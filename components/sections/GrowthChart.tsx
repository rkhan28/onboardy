"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { TrendingUp, ArrowUpRight } from "lucide-react";
import { Reveal } from "../ui/Reveal";

// Twelve months — Before Onboardy vs After
const data = [
  { m: "Jan", before: 38, after: 38 },
  { m: "Feb", before: 41, after: 44 },
  { m: "Mar", before: 39, after: 52 },
  { m: "Apr", before: 44, after: 61 },
  { m: "May", before: 42, after: 72 },
  { m: "Jun", before: 46, after: 84 },
  { m: "Jul", before: 45, after: 96 },
  { m: "Aug", before: 48, after: 108 },
  { m: "Sep", before: 47, after: 122 },
  { m: "Oct", before: 50, after: 138 },
  { m: "Nov", before: 49, after: 154 },
  { m: "Dec", before: 52, after: 172 },
];

// Chart geometry
const W = 720;
const H = 280;
const PAD_L = 36;
const PAD_R = 16;
const PAD_T = 20;
const PAD_B = 36;
const innerW = W - PAD_L - PAD_R;
const innerH = H - PAD_T - PAD_B;
const max = 180;

const x = (i: number) => PAD_L + (i / (data.length - 1)) * innerW;
const y = (v: number) => PAD_T + innerH - (v / max) * innerH;

// Smooth cubic-bezier path through points
function smoothPath(values: number[]) {
  if (values.length < 2) return "";
  let d = `M ${x(0)} ${y(values[0])}`;
  for (let i = 0; i < values.length - 1; i++) {
    const x0 = x(i);
    const y0 = y(values[i]);
    const x1 = x(i + 1);
    const y1 = y(values[i + 1]);
    const cx = (x0 + x1) / 2;
    d += ` C ${cx} ${y0}, ${cx} ${y1}, ${x1} ${y1}`;
  }
  return d;
}

const afterPath = smoothPath(data.map((d) => d.after));
const beforePath = smoothPath(data.map((d) => d.before));
const areaPath = `${afterPath} L ${x(data.length - 1)} ${y(0)} L ${x(0)} ${y(0)} Z`;

export function GrowthChart() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-20 sm:py-24">
      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="eyebrow">
              <span
                className="h-1.5 w-1.5 rounded-full"
                style={{ background: "var(--gold)" }}
              />
              Results
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="section-title mt-4 text-balance">
              Revenue, 90 days{" "}
              <span className="font-serif italic text-gold">
                after deploy.
              </span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="muted mt-4 text-base sm:text-lg">
              Same team, same season — fewer missed leads, faster follow-up.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div
            ref={ref}
            className="card-glass glass-shine relative mt-12 overflow-hidden p-4 sm:p-6 lg:p-8"
          >
            {/* Top legend strip */}
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap items-center gap-4 text-xs">
                <LegendDot color="var(--gold)" label="After Onboardy" filled />
                <LegendDot color="rgba(247,239,217,0.4)" label="Before" />
              </div>
              <div
                className="flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(202,164,74,0.22), rgba(202,164,74,0.06))",
                  border: "1px solid var(--border-gold)",
                  color: "var(--gold)",
                }}
              >
                <TrendingUp className="h-3.5 w-3.5" />
                <AnimatedNumber to={231} inView={inView} />% revenue lift
                <ArrowUpRight className="h-3.5 w-3.5" />
              </div>
            </div>

            {/* The chart */}
            <div className="relative mt-6">
              <svg
                viewBox={`0 0 ${W} ${H}`}
                preserveAspectRatio="xMidYMid meet"
                className="block h-[220px] w-full sm:h-[280px] lg:h-[300px]"
                role="img"
                aria-label="Revenue growth before and after Onboardy"
              >
                <defs>
                  <linearGradient
                    id="goldArea"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop
                      offset="0%"
                      stopColor="rgba(220,190,107,0.45)"
                    />
                    <stop
                      offset="100%"
                      stopColor="rgba(202,164,74,0)"
                    />
                  </linearGradient>
                  <linearGradient
                    id="goldLine"
                    x1="0"
                    y1="0"
                    x2="1"
                    y2="0"
                  >
                    <stop offset="0%" stopColor="#dcbe6b" />
                    <stop offset="50%" stopColor="#f5ecd0" />
                    <stop offset="100%" stopColor="#caa44a" />
                  </linearGradient>
                  <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="3" result="b" />
                    <feMerge>
                      <feMergeNode in="b" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* Horizontal grid */}
                {[0, 0.25, 0.5, 0.75, 1].map((t, i) => (
                  <line
                    key={i}
                    x1={PAD_L}
                    x2={W - PAD_R}
                    y1={PAD_T + innerH * t}
                    y2={PAD_T + innerH * t}
                    stroke="rgba(247,239,217,0.06)"
                    strokeDasharray={i === 4 ? "0" : "3 6"}
                  />
                ))}

                {/* Y-axis labels */}
                {[0, 50, 100, 150].map((v) => (
                  <text
                    key={v}
                    x={PAD_L - 8}
                    y={y(v) + 4}
                    textAnchor="end"
                    fontSize="10"
                    fill="rgba(247,239,217,0.42)"
                    fontFamily="Inter, system-ui"
                  >
                    ${v}k
                  </text>
                ))}

                {/* X-axis labels */}
                {data.map((d, i) =>
                  i % 2 === 0 ? (
                    <text
                      key={d.m}
                      x={x(i)}
                      y={H - 12}
                      textAnchor="middle"
                      fontSize="10"
                      fill="rgba(247,239,217,0.42)"
                      fontFamily="Inter, system-ui"
                    >
                      {d.m}
                    </text>
                  ) : null,
                )}

                {/* Before line - flat, faded */}
                <motion.path
                  d={beforePath}
                  fill="none"
                  stroke="rgba(247,239,217,0.32)"
                  strokeWidth={2}
                  strokeDasharray="5 5"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={inView ? { pathLength: 1 } : {}}
                  transition={{ duration: 1.4, ease: "easeOut", delay: 0.2 }}
                />

                {/* After area fill */}
                <motion.path
                  d={areaPath}
                  fill="url(#goldArea)"
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ duration: 1, delay: 1.6 }}
                />

                {/* After line - bold, gold */}
                <motion.path
                  d={afterPath}
                  fill="none"
                  stroke="url(#goldLine)"
                  strokeWidth={3}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  filter="url(#glow)"
                  initial={{ pathLength: 0 }}
                  animate={inView ? { pathLength: 1 } : {}}
                  transition={{ duration: 2, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
                />

                {/* Data points on the after line */}
                {data.map((d, i) => (
                  <motion.circle
                    key={i}
                    cx={x(i)}
                    cy={y(d.after)}
                    r={3.5}
                    fill="#f5ecd0"
                    stroke="#caa44a"
                    strokeWidth={1.5}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      delay: 0.4 + (i / data.length) * 1.8,
                      duration: 0.3,
                    }}
                  />
                ))}

                {/* Trailing pulse on last point */}
                {inView && (
                  <motion.circle
                    cx={x(data.length - 1)}
                    cy={y(data[data.length - 1].after)}
                    r={3.5}
                    fill="none"
                    stroke="#dcbe6b"
                    strokeWidth={2}
                    initial={{ opacity: 0.8, scale: 1 }}
                    animate={{ opacity: 0, scale: 4 }}
                    transition={{
                      duration: 1.6,
                      repeat: Infinity,
                      delay: 2.4,
                      ease: "easeOut",
                    }}
                  />
                )}
              </svg>
            </div>

            {/* Result tiles */}
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <ResultTile label="Revenue lifted" to={231} suffix="%" inView={inView} />
              <ResultTile label="More booked leads" to={3.4} suffix="×" decimals={1} inView={inView} />
              <ResultTile label="Hours saved / week" to={18} inView={inView} />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function LegendDot({
  color,
  label,
  filled,
}: {
  color: string;
  label: string;
  filled?: boolean;
}) {
  return (
    <span
      className="inline-flex items-center gap-2"
      style={{ color: "var(--fg-muted)" }}
    >
      <span
        className={`inline-block h-2 w-6 rounded-full ${
          filled ? "" : "border border-dashed"
        }`}
        style={{
          background: filled ? color : "transparent",
          borderColor: filled ? "transparent" : color,
        }}
      />
      {label}
    </span>
  );
}

function ResultTile({
  label,
  to,
  suffix = "",
  decimals = 0,
  inView,
}: {
  label: string;
  to: number;
  suffix?: string;
  decimals?: number;
  inView: boolean;
}) {
  return (
    <div
      className="rounded-2xl p-4"
      style={{
        background: "var(--glass)",
        border: "1px solid var(--border)",
      }}
    >
      <p
        className="font-display text-2xl font-semibold tracking-tight sm:text-3xl"
        style={{ color: "var(--fg-strong)" }}
      >
        <AnimatedNumber to={to} decimals={decimals} inView={inView} />
        <span style={{ color: "var(--gold)" }}>{suffix}</span>
      </p>
      <p
        className="mt-1 text-[10px] font-semibold uppercase tracking-widest"
        style={{ color: "var(--fg-faint)" }}
      >
        {label}
      </p>
    </div>
  );
}

/**
 * Counts from 0 to `to` once it enters view.
 */
function AnimatedNumber({
  to,
  decimals = 0,
  inView,
}: {
  to: number;
  decimals?: number;
  inView: boolean;
}) {
  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.4 }}
    >
      <Counter to={to} decimals={decimals} run={inView} />
    </motion.span>
  );
}

function Counter({
  to,
  decimals,
  run,
}: {
  to: number;
  decimals: number;
  run: boolean;
}) {
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!run) return;
    let raf = 0;
    const start = performance.now();
    const dur = 1600;
    const ease = (t: number) => 1 - Math.pow(1 - t, 3);
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / dur);
      setV(to * ease(p));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [to, run]);
  return <>{v.toFixed(decimals)}</>;
}
