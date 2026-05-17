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
    title: "AI Receptionist",
    description: "Answers calls, qualifies leads, books appointments.",
    icon: PhoneCall,
  },
  {
    title: "Missed Call Recovery",
    description: "Instant SMS that turns missed calls into bookings.",
    icon: Zap,
  },
  {
    title: "Conversion Websites",
    description: "Fast, modern sites built to capture leads.",
    icon: Globe,
  },
  {
    title: "CRM & Workflows",
    description: "One dashboard for leads, jobs, and follow-ups.",
    icon: LayoutDashboard,
  },
  {
    title: "Review Engine",
    description: "Automated review requests after every job.",
    icon: Star,
  },
  {
    title: "Smart Chatbot",
    description: "Trained on your services, FAQs, and booking flow.",
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
      "Your testimonial goes here. Share what changed after working with Onboardy — fewer missed calls, more bookings, time back in your week.",
    name: "Your Client Name",
    role: "Owner",
    business: "Their Business Name",
  },
  {
    quote:
      "A second testimonial slot — perfect for a different industry or use case. Replace this copy with a real quote when you have one.",
    name: "Your Client Name",
    role: "Operations Lead",
    business: "Their Business Name",
  },
];
