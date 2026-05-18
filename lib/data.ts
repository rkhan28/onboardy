import {
  PhoneCall,
  Globe,
  LayoutDashboard,
  Zap,
  Star,
  Bot,
  type LucideIcon,
} from "lucide-react";

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Features", href: "#features" },
  { label: "Contact", href: "#contact" },
];

export type Feature = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const FEATURES: Feature[] = [
  {
    title: "Voice AI Receptionist",
    description:
      "Picks up every call, qualifies the lead, and writes a clean summary to your CRM.",
    icon: PhoneCall,
  },
  {
    title: "Missed Call Recovery",
    description:
      "Auto-SMS within seconds — recovers callers before they dial a competitor.",
    icon: Zap,
  },
  {
    title: "Conversion Websites",
    description:
      "Fast, mobile-first pages with built-in lead capture and tracking.",
    icon: Globe,
  },
  {
    title: "CRM & Workflows",
    description:
      "Pipelines, jobs, and follow-ups in one dashboard — synced across channels.",
    icon: LayoutDashboard,
  },
  {
    title: "Review Engine",
    description:
      "Post-job SMS that pushes happy customers to Google. On autopilot.",
    icon: Star,
  },
  {
    title: "Trained Chatbot",
    description:
      "Web chatbot fluent in your services, hours, pricing logic, and booking flow.",
    icon: Bot,
  },
];

export type Stat = { value: string; label: string };

export const STATS: Stat[] = [
  { value: "12s", label: "Avg. reply time" },
  { value: "3×", label: "More booked leads" },
  { value: "24/7", label: "Always on" },
  { value: "100%", label: "Human handoff" },
];

/**
 * Testimonial placeholders.
 * Swap quote / name / role / business when you have real testimonials.
 */
export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  business: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Your testimonial goes here. Share what changed after deploying Onboardy — fewer missed calls, more bookings, time back in your week.",
    name: "Your Client Name",
    role: "Owner",
    business: "Their Business Name",
  },
  {
    quote:
      "A second slot for a different industry or use case. Replace this copy with a real quote when you have one.",
    name: "Your Client Name",
    role: "Operations Lead",
    business: "Their Business Name",
  },
];
