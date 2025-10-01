"use client";

import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { TestimonialCard } from "@/components/cards/TestimonialCard";
import { StepCard } from "@/components/cards/StepCard";
import { FormField } from "@/components/forms/FormField";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { CASE_URL, OPS_URL, TRUST_BADGE, WHATSAPP_URL } from "@/lib/constants";
import { caseSchema, platformOptions, urgencyOptions, type CaseInput } from "@/lib/schemas";
import { usePageview } from "@/lib/analytics";

const services = [
  {
    title: "Instagram Account Recovery",
    description: "Hacked, email changed, or disabled.",
    includedIn: "Basic/Standard/Priority"
  },
  {
    title: "Facebook Account/Page Recovery",
    description: "Owner verification, admin hijack remediation.",
    includedIn: "Standard/Priority"
  },
  {
    title: "TikTok Account Recovery",
    description: "Locked, banned, or restricted.",
    includedIn: "Standard/Priority"
  },
  {
    title: "X / Twitter Access Recovery",
    description: "Compromised login, suspended handles.",
    includedIn: "Standard/Priority"
  },
  {
    title: "YouTube/Google Brand Recovery",
    description: "Channel hijacks, brand account access.",
    includedIn: "Priority"
  },
  {
    title: "Impersonation Takedown",
    description: "Remove fake profiles with evidence packs.",
    includedIn: "Standard/Priority"
  },
  {
    title: "Shadowban Review",
    description: "Policy review to restore reach.",
    includedIn: "Basic/Standard"
  },
  {
    title: "2FA Setup & Hardening",
    description: "App-based 2FA, backup codes, hygiene.",
    includedIn: "Standard/Priority"
  }
];

const testimonials = [
  {
    quote: "They recovered our agency client’s Instagram in two days without asking for any risky information.",
    name: "Alicia",
    role: "Agency Director"
  },
  {
    quote: "Clear playbook, constant updates, and we’re back online selling on Facebook Shop.",
    name: "Hafiz",
    role: "SME Owner"
  },
  {
    quote: "Priority tier was worth it. They handled the impersonation report end-to-end.",
    name: "Maya",
    role: "Content Creator"
  }
];

const steps = [
  {
    step: 1,
    title: "Share the incident",
    description: "Tell us what happened, the platform involved, and any warnings received."
  },
  {
    step: 2,
    title: "Analyst triage",
    description: "We verify ownership, gather safe evidence, and draft compliant appeals."
  },
  {
    step: 3,
    title: "Recovery & hardening",
    description: "We work with you on secure recovery, 2FA, and impersonation takedowns if needed."
  }
];

export function HomeContent() {
  usePageview("/", "Home");
  const [status, setStatus] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<CaseInput>({
    resolver: zodResolver(caseSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      platform: "Instagram",
      urgency: "Normal",
      message: "",
      honey: ""
    }
  });

  const onSubmit = form.handleSubmit(async (values) => {
    setStatus(null);
    setError(null);
    try {
      const res = await fetch(CASE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          phone: values.phone || undefined,
          platform: values.platform,
          urgency: values.urgency,
          message: values.message
        })
      });
      if (!res.ok) {
        throw new Error("Case submission failed");
      }
      const data = await res.json();
      setStatus(`Case created: ${data.id}`);
      await fetch(OPS_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ caseId: data.id, email: values.email, platform: values.platform })
      });
      form.reset();
    } catch (submissionError) {
      setError("We couldn’t submit your case. Please try again.");
    }
  });

  return (
    <div className="space-y-20">
      <section
        className="rounded-2xl bg-hero-gradient p-10 shadow-soft"
        aria-labelledby="hero-heading"
      >
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div className="space-y-6">
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
              <h1 id="hero-heading" className="text-4xl font-bold text-slate-900">
                Recover Your Social Media Accounts — Fast, Secure, Ethical
              </h1>
              <p className="text-lg text-slate-700">
                Locked out, hacked, or disabled? We restore access to Instagram, Facebook, TikTok, X/Twitter, YouTube and more.
              </p>
              <p className="text-sm font-medium text-slate-600">{TRUST_BADGE}</p>
            </motion.div>
            <div className="flex flex-wrap items-center gap-4">
              <Button asChild size="lg">
                <a href="#recovery-form">Start My Recovery</a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href={WHATSAPP_URL} target="_blank" rel="noreferrer noopener">
                  Message us on WhatsApp
                </Link>
              </Button>
            </div>
            <div className="flex items-center gap-3 rounded-2xl bg-white/80 p-4 text-sm text-slate-700">
              <ShieldCheck className="h-5 w-5 text-blue-600" aria-hidden="true" />
              <p>
                We operate lawfully, independently, and never ask for your passwords or recovery codes.
              </p>
            </div>
          </div>
          <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-lg">
            <h2 className="text-lg font-semibold text-slate-900">What we handle</h2>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              <li>Account hijacks and lockouts</li>
              <li>Disabled creator and business pages</li>
              <li>Impersonation and shadowban triage</li>
              <li>Post-recovery hardening and 2FA setup</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="services" aria-labelledby="services-heading" className="space-y-10">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 id="services-heading" className="text-3xl font-bold text-slate-900">
              Full-spectrum social account response
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Instagram, Facebook, TikTok, X/Twitter, YouTube — we navigate platform policies and documentation so you don’t have to.
            </p>
          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </section>

      <section id="testimonials" aria-labelledby="testimonials-heading" className="space-y-8">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 id="testimonials-heading" className="text-3xl font-bold text-slate-900">
              Proof from Malaysian brands and creators
            </h2>
            <p className="text-sm text-slate-600">
              Hear how we restored vital channels without compromising security.
            </p>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} {...testimonial} />
          ))}
        </div>
      </section>

      <WhatsAppCTA />

      <section aria-labelledby="steps-heading" className="space-y-6">
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <h2 id="steps-heading" className="text-3xl font-bold text-slate-900">
            How Social Safe works
          </h2>
          <p className="text-sm text-slate-600">
            Transparent playbooks, documented evidence packs, and constant updates.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((step) => (
            <StepCard key={step.step} {...step} />
          ))}
        </div>
      </section>

      <section id="recovery-form" aria-labelledby="recovery-heading" className="space-y-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-4">
            <h2 id="recovery-heading" className="text-3xl font-bold text-slate-900">
              Start Your Recovery
            </h2>
            <p className="text-sm text-slate-600">
              Submit the secure intake form. We’ll reply within business hours with next steps. We’ll never ask for your passwords or 2FA codes.
            </p>
            <p className="rounded-2xl bg-white p-4 text-sm text-slate-700 shadow-sm">
              We charge a RM 100 advance to open a case. This is non-refundable and covers analyst time and evidence preparation. You only pay the remaining success fee if we recover access.
            </p>
          </div>
          <form
            onSubmit={onSubmit}
            className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            noValidate
          >
            <FormField label="Full name" htmlFor="name" error={form.formState.errors.name?.message}>
              <input
                type="text"
                {...form.register("name")}
                className="w-full rounded-2xl border border-slate-200 p-3 text-sm"
                autoComplete="name"
              />
            </FormField>
            <FormField label="Email" htmlFor="email" error={form.formState.errors.email?.message}>
              <input
                type="email"
                {...form.register("email")}
                className="w-full rounded-2xl border border-slate-200 p-3 text-sm"
                autoComplete="email"
              />
            </FormField>
            <FormField
              label="Phone (optional)"
              htmlFor="phone"
              helpText="Only used for urgent coordination."
              error={form.formState.errors.phone?.message}
            >
              <input
                type="tel"
                {...form.register("phone")}
                className="w-full rounded-2xl border border-slate-200 p-3 text-sm"
                autoComplete="tel"
              />
            </FormField>
            <FormField
              label="Platform"
              htmlFor="platform"
              error={form.formState.errors.platform?.message}
            >
              <select
                {...form.register("platform")}
                className="w-full rounded-2xl border border-slate-200 bg-white p-3 text-sm"
              >
                {platformOptions.map((platform) => (
                  <option key={platform} value={platform}>
                    {platform}
                  </option>
                ))}
              </select>
            </FormField>
            <FormField
              label="Urgency"
              htmlFor="urgency"
              error={form.formState.errors.urgency?.message}
            >
              <select
                {...form.register("urgency")}
                className="w-full rounded-2xl border border-slate-200 bg-white p-3 text-sm"
              >
                {urgencyOptions.map((urgency) => (
                  <option key={urgency} value={urgency}>
                    {urgency}
                  </option>
                ))}
              </select>
            </FormField>
            <FormField
              label="What happened?"
              htmlFor="message"
              helpText="Please do not include passwords, passcodes, or 2FA codes."
              error={form.formState.errors.message?.message}
            >
              <textarea
                {...form.register("message")}
                className="min-h-[120px] w-full rounded-2xl border border-slate-200 p-3 text-sm"
                placeholder="Share what changed, any emails from the platform, and what you’ve tried."
              />
            </FormField>
            <div className="hidden">
              <label htmlFor="honey">Do not fill</label>
              <input id="honey" type="text" {...form.register("honey")} tabIndex={-1} autoComplete="off" />
            </div>
            <Button type="submit" className="w-full">
              Start My Recovery
            </Button>
            {status ? (
              <p className="rounded-2xl bg-emerald-100 px-3 py-2 text-sm font-semibold text-emerald-700">
                {status}
              </p>
            ) : null}
            {error ? (
              <p className="rounded-2xl bg-red-100 px-3 py-2 text-sm font-semibold text-red-700">
                {error}
              </p>
            ) : null}
          </form>
        </div>
      </section>

      <section aria-labelledby="team-heading" className="space-y-6">
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <h2 id="team-heading" className="text-3xl font-bold text-slate-900">
            Meet the team
          </h2>
          <p className="text-sm text-slate-600">
            Social Safe is led by security professionals recognised by global platforms.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-900">Shuvonsec — Founder & CEO. Cybersecurity researcher, ethical hacker & bug bounty hunter with global recognition.</h3>
          </article>
        </div>
      </section>
    </div>
  );
}
