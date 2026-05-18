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
      "Onboardy helped us respond to inquiries faster and made our booking process feel much smoother. The system keeps leads organized and saves our team time every week.",
    name: "Future Client Story",
    role: "Owner",
    business: "Local Service Company",
  },
  {
    quote:
      "Before Onboardy, customer questions were scattered across calls, texts, and forms. Now our leads are captured, followed up with, and easier to manage from one place.",
    name: "Future Client Story",
    role: "Operations Lead",
    business: "Home Service Business",
  },
  {
    quote:
      "The automation made a clear difference in how quickly we handle new inquiries. It helps answer common questions, guide people toward booking, and notify our team when action is needed.",
    name: "Future Client Story",
    role: "Clinic Manager",
    business: "Wellness Clinic",
  },
  {
    quote:
      "Onboardy gave us a cleaner system for missed calls, follow-ups, and customer intake. It feels like having an extra layer of support without adding more admin work.",
    name: "Future Client Story",
    role: "Founder",
    business: "Local Trades Company",
  },
  {
    quote:
      "The biggest win was speed. New leads no longer sit unanswered, and our team gets a clearer summary of what each customer needs before following up.",
    name: "Future Client Story",
    role: "Business Manager",
    business: "Service-Based Business",
  },
];