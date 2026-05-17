"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, Mail, MessageSquare } from "lucide-react";
import { Reveal } from "../ui/Reveal";

type FormState = {
  name: string;
  business: string;
  email: string;
  goal: string;
};

const initial: FormState = { name: "", business: "", email: "", goal: "" };

export function Contact() {
  const [form, setForm] = useState<FormState>(initial);
  const [submitted, setSubmitted] = useState(false);

  const onChange =
    (key: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="eyebrow">
              <span
                className="h-1.5 w-1.5 rounded-full"
                style={{ background: "var(--gold)" }}
              />
              Contact
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="section-title mt-4 text-balance">
              Let&apos;s map your{" "}
              <span className="font-serif italic text-gold">automation.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="muted mt-4 text-base sm:text-lg">
              Tell us what slows you down. We&apos;ll show you where AI helps.
            </p>
          </Reveal>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-4 lg:grid-cols-[1.4fr_1fr]">
          <Reveal>
            <div className="card-glass glass-shine p-6 sm:p-8">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center py-8 text-center"
                >
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 14 }}
                    className="grid h-14 w-14 place-items-center rounded-full"
                    style={{
                      background:
                        "linear-gradient(180deg, #f5ecd0 0%, #dcbe6b 35%, #caa44a 65%, #9a6f26 100%)",
                      color: "#1a1620",
                      boxShadow:
                        "inset 0 1px 0 0 rgba(255,255,255,0.45), 0 8px 22px rgba(202,164,74,0.4)",
                    }}
                  >
                    <Check className="h-7 w-7" strokeWidth={2.5} />
                  </motion.span>
                  <h3
                    className="mt-5 font-display text-2xl font-semibold"
                    style={{ color: "var(--fg-strong)" }}
                  >
                    Request received
                  </h3>
                  <p className="muted mt-2 max-w-sm text-sm">
                    We&apos;ll reply within one business day.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setForm(initial);
                      setSubmitted(false);
                    }}
                    className="btn-ghost mt-6"
                  >
                    Send another
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-4" noValidate>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field
                      label="Name"
                      id="name"
                      value={form.name}
                      onChange={onChange("name")}
                      placeholder="Alex Morgan"
                      required
                    />
                    <Field
                      label="Business"
                      id="business"
                      value={form.business}
                      onChange={onChange("business")}
                      placeholder="Morgan HVAC"
                      required
                    />
                  </div>
                  <Field
                    label="Email"
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={onChange("email")}
                    placeholder="you@business.com"
                    required
                  />
                  <div>
                    <Label htmlFor="goal">What do you want to automate?</Label>
                    <textarea
                      id="goal"
                      value={form.goal}
                      onChange={onChange("goal")}
                      rows={3}
                      placeholder="e.g. We miss too many calls during peak hours."
                      className="mt-1.5 w-full resize-none rounded-xl px-3.5 py-2.5 text-sm transition focus:outline-none"
                      style={{
                        background: "var(--glass)",
                        border: "1px solid var(--border-strong)",
                        color: "var(--fg)",
                      }}
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn-primary w-full sm:w-auto"
                  >
                    Send Request
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </form>
              )}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="space-y-3">
              <ContactCard
                icon={Mail}
                title="Email us"
                value="hello@onboardy.com"
              />
              <ContactCard
                icon={MessageSquare}
                title="Live chat"
                value="Mon–Fri, 9am–6pm"
              />
              <div
                className="card-glass glass-shine p-5"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(202,164,74,0.18), rgba(202,164,74,0.04))",
                  borderColor: "var(--border-gold)",
                }}
              >
                <p
                  className="text-[10px] font-semibold uppercase tracking-[0.22em]"
                  style={{ color: "var(--gold)" }}
                >
                  Quick start
                </p>
                <p
                  className="mt-2 text-sm leading-relaxed"
                  style={{ color: "var(--fg-strong)" }}
                >
                  Most audits take 30 minutes. We&apos;ll map your flow and
                  show where automation saves time.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ContactCard({
  icon: Icon,
  title,
  value,
}: {
  icon: React.ElementType;
  title: string;
  value: string;
}) {
  return (
    <div className="card-glass glass-shine flex items-center gap-3 p-4">
      <span
        className="grid h-10 w-10 place-items-center rounded-xl"
        style={{
          background:
            "linear-gradient(135deg, rgba(202,164,74,0.22), rgba(202,164,74,0.04))",
          border: "1px solid var(--border-gold)",
        }}
      >
        <Icon className="h-4 w-4" style={{ color: "var(--gold)" }} />
      </span>
      <div>
        <p
          className="text-[10px] font-semibold uppercase tracking-widest"
          style={{ color: "var(--fg-faint)" }}
        >
          {title}
        </p>
        <p
          className="text-sm font-medium"
          style={{ color: "var(--fg-strong)" }}
        >
          {value}
        </p>
      </div>
    </div>
  );
}

function Label({
  htmlFor,
  children,
}: {
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="block text-[10px] font-semibold uppercase tracking-[0.18em]"
      style={{ color: "var(--fg-faint)" }}
    >
      {children}
    </label>
  );
}

type FieldProps = {
  label: string;
  id: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
};

function Field({
  label,
  id,
  type = "text",
  value,
  onChange,
  placeholder,
  required,
}: FieldProps) {
  return (
    <div>
      <Label htmlFor={id}>{label}</Label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="mt-1.5 w-full rounded-xl px-3.5 py-2.5 text-sm transition focus:outline-none"
        style={{
          background: "var(--glass)",
          border: "1px solid var(--border-strong)",
          color: "var(--fg)",
        }}
      />
    </div>
  );
}
