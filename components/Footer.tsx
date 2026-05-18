"use client";

import { Github, Linkedin, Twitter } from "lucide-react";
import { Logo } from "./ui/Logo";
import { NAV_LINKS } from "@/lib/data";

const social = [
  { label: "Twitter", icon: Twitter, href: "#" },
  { label: "LinkedIn", icon: Linkedin, href: "#" },
  { label: "GitHub", icon: Github, href: "#" },
];

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative pt-6">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, var(--border-gold), transparent)",
        }}
      />
      <div className="container-x pb-10 pt-10">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <Logo />
            <p
              className="mt-3 max-w-xs text-sm"
              style={{ color: "var(--fg-muted)" }}
            >
              AI automation for service businesses.
            </p>
          </div>

          <nav className="flex items-center gap-1" aria-label="Footer">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full px-3 py-1.5 text-sm font-medium transition hover:text-[color:var(--fg-strong)]"
                style={{ color: "var(--fg-muted)" }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            {social.map((s) => {
              const Icon = s.icon;
              return (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="glass grid h-10 w-10 place-items-center rounded-full transition hover:scale-110"
                >
                  <Icon
                    className="h-4 w-4"
                    style={{ color: "var(--fg)" }}
                  />
                </a>
              );
            })}
          </div>
        </div>

        <div
          className="mt-10 border-t pt-5"
          style={{ borderColor: "var(--border)" }}
        >
          <p className="text-xs" style={{ color: "var(--fg-faint)" }}>
            © {year} Onboardy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
