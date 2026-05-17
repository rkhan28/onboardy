"use client";

/**
 * Fictional client logos rendered as SVG.
 * These are NOT real brands — abstract / generic marks on purpose.
 * They use currentColor so the theme controls their tone.
 */

type LogoProps = { className?: string };

export const ClientLogos: { name: string; Component: (p: LogoProps) => JSX.Element }[] = [
  {
    name: "Northpeak",
    Component: ({ className }) => (
      <svg viewBox="0 0 160 28" className={className} fill="none">
        <path
          d="M4 22 L14 6 L24 22 Z M19 22 L29 6 L39 22 Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <text
          x="48"
          y="19"
          fontFamily="Sora, system-ui"
          fontSize="14"
          fontWeight="600"
          fill="currentColor"
          letterSpacing="0.2"
        >
          northpeak
        </text>
      </svg>
    ),
  },
  {
    name: "Halocrest",
    Component: ({ className }) => (
      <svg viewBox="0 0 160 28" className={className} fill="none">
        <circle cx="14" cy="14" r="9" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="14" cy="14" r="3.5" fill="currentColor" />
        <text
          x="32"
          y="19"
          fontFamily="Sora, system-ui"
          fontSize="14"
          fontWeight="600"
          fill="currentColor"
        >
          HALOCREST
        </text>
      </svg>
    ),
  },
  {
    name: "Forge & Field",
    Component: ({ className }) => (
      <svg viewBox="0 0 160 28" className={className} fill="none">
        <path
          d="M5 22 L5 8 L13 14 L21 8 L21 22"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
        <text
          x="30"
          y="19"
          fontFamily="Sora, system-ui"
          fontSize="13"
          fontWeight="700"
          fill="currentColor"
        >
          Forge &amp; Field
        </text>
      </svg>
    ),
  },
  {
    name: "Lumen Lane",
    Component: ({ className }) => (
      <svg viewBox="0 0 160 28" className={className} fill="none">
        <path
          d="M6 14 a8 8 0 1 1 16 0 a8 8 0 1 1 -16 0 M14 6 v16"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <text
          x="30"
          y="19"
          fontFamily="Sora, system-ui"
          fontSize="14"
          fontStyle="italic"
          fontWeight="500"
          fill="currentColor"
        >
          lumen lane
        </text>
      </svg>
    ),
  },
  {
    name: "Vector",
    Component: ({ className }) => (
      <svg viewBox="0 0 160 28" className={className} fill="none">
        <path
          d="M4 14 L14 6 L24 14 L14 22 Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <circle cx="14" cy="14" r="2" fill="currentColor" />
        <text
          x="32"
          y="19"
          fontFamily="Sora, system-ui"
          fontSize="14"
          fontWeight="700"
          fill="currentColor"
          letterSpacing="1"
        >
          VECTOR
        </text>
      </svg>
    ),
  },
  {
    name: "Brightside Co.",
    Component: ({ className }) => (
      <svg viewBox="0 0 170 28" className={className} fill="none">
        <circle cx="14" cy="14" r="5" fill="currentColor" />
        <g stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
          <path d="M14 3 v3 M14 22 v3 M3 14 h3 M22 14 h3 M6.5 6.5 l2 2 M19.5 19.5 l2 2 M6.5 21.5 l2-2 M19.5 8.5 l2-2" />
        </g>
        <text
          x="34"
          y="19"
          fontFamily="Sora, system-ui"
          fontSize="14"
          fontWeight="600"
          fill="currentColor"
        >
          Brightside Co.
        </text>
      </svg>
    ),
  },
  {
    name: "Atlas Trades",
    Component: ({ className }) => (
      <svg viewBox="0 0 170 28" className={className} fill="none">
        <rect
          x="5"
          y="5"
          width="18"
          height="18"
          rx="3"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <path
          d="M5 14 h18 M14 5 v18"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <text
          x="32"
          y="19"
          fontFamily="Sora, system-ui"
          fontSize="14"
          fontWeight="700"
          fill="currentColor"
        >
          ATLAS TRADES
        </text>
      </svg>
    ),
  },
  {
    name: "Verde Bloom",
    Component: ({ className }) => (
      <svg viewBox="0 0 170 28" className={className} fill="none">
        <path
          d="M14 22 C 6 22 4 14 8 8 C 12 14 12 18 14 22 Z M14 22 C 22 22 24 14 20 8 C 16 14 16 18 14 22 Z"
          fill="currentColor"
        />
        <text
          x="32"
          y="19"
          fontFamily="Sora, system-ui"
          fontSize="14"
          fontWeight="500"
          fill="currentColor"
          letterSpacing="0.5"
        >
          verde bloom
        </text>
      </svg>
    ),
  },
  {
    name: "Pulse Clinic",
    Component: ({ className }) => (
      <svg viewBox="0 0 170 28" className={className} fill="none">
        <path
          d="M3 14 h5 l2-5 l3 10 l3-7 l2 2 h7"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
          strokeLinecap="round"
          fill="none"
        />
        <text
          x="34"
          y="19"
          fontFamily="Sora, system-ui"
          fontSize="14"
          fontWeight="600"
          fill="currentColor"
        >
          Pulse Clinic
        </text>
      </svg>
    ),
  },
  {
    name: "Ember & Oak",
    Component: ({ className }) => (
      <svg viewBox="0 0 170 28" className={className} fill="none">
        <path
          d="M14 4 C 18 10 22 12 22 17 a8 8 0 0 1 -16 0 C 6 12 10 10 14 4 Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <text
          x="30"
          y="19"
          fontFamily="Sora, system-ui"
          fontSize="13"
          fontWeight="600"
          fill="currentColor"
          fontStyle="italic"
        >
          Ember &amp; Oak
        </text>
      </svg>
    ),
  },
  {
    name: "Quanta Realty",
    Component: ({ className }) => (
      <svg viewBox="0 0 170 28" className={className} fill="none">
        <path
          d="M5 22 V12 L14 5 L23 12 V22 H5 Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <circle cx="14" cy="16" r="2.5" fill="currentColor" />
        <text
          x="32"
          y="19"
          fontFamily="Sora, system-ui"
          fontSize="13"
          fontWeight="700"
          fill="currentColor"
          letterSpacing="1.2"
        >
          QUANTA REALTY
        </text>
      </svg>
    ),
  },
  {
    name: "Drift Mobile",
    Component: ({ className }) => (
      <svg viewBox="0 0 170 28" className={className} fill="none">
        <path
          d="M4 18 Q 8 6 14 14 T 24 18"
          stroke="currentColor"
          strokeWidth="1.8"
          fill="none"
          strokeLinecap="round"
        />
        <circle cx="24" cy="18" r="2" fill="currentColor" />
        <text
          x="32"
          y="19"
          fontFamily="Sora, system-ui"
          fontSize="14"
          fontWeight="500"
          fill="currentColor"
        >
          drift mobile
        </text>
      </svg>
    ),
  },
];
