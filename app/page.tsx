import Link from "next/link";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { services, testimonials, team } from "@/lib/data/services";
import { ServiceCard } from "@/components/service-card";
import { TestimonialCard } from "@/components/testimonial-card";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { StepCard } from "@/components/step-card";
import { HeroIntakeCard } from "@/components/hero-intake-card";

export const metadata: Metadata = {
  title: "SocialSafe.my — Social Account Recovery in Malaysia.",
  description:
    "Hacked, locked, or disabled? Social Safe restores access to Instagram, Facebook, TikTok, X/Twitter and YouTube. Fast, secure, and ethical.",
  alternates: { canonical: "https://www.socialsafe.my/" }
};

const whatsappUrl = process.env.NEXT_PUBLIC_WHATSAPP_URL ?? "https://wa.me/";

export default function HomePage() {
  return (
    <div className="mx-auto max-w-6xl space-y-24 px-4 py-16">
      <section className="grid gap-10 md:grid-cols-2 md:items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700">
            Trusted by creators, SMEs, and agencies across Malaysia
          </div>
          <h1 className="text-4xl font-bold leading-tight md:text-5xl">
            Recover Your Social Media Accounts — Fast, Secure, Ethical
          </h1>
          <p className="text-lg text-slate-600">
            Locked out, hacked, or disabled? We restore access to Instagram, Facebook, TikTok, X/Twitter, YouTube and more.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                Start My Recovery
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="#services">Explore Services</Link>
            </Button>
          </div>
          <p className="text-sm text-slate-500">
            We operate independently and follow platform policies and applicable laws.
          </p>
        </div>
        <HeroIntakeCard />
      </section>

      <section id="services" className="space-y-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-3xl font-semibold">Specialist recovery services</h2>
            <p className="text-sm text-slate-600">Every engagement is ethical, lawful, and compliant with platform policies.</p>
          </div>
          <Button asChild variant="outline">
            <Link href="/pricing">View Pricing</Link>
          </Button>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <h2 className="text-3xl font-semibold">How we help</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <StepCard
            step={1}
            title="Rapid triage"
            description="We confirm the incident scope, secure access channels, and prepare platform-compliant evidence."
          />
          <StepCard
            step={2}
            title="Platform escalation"
            description="We submit verified recovery requests, appeal forms, and impersonation takedowns backed by documentation."
          />
          <StepCard
            step={3}
            title="Hardening & handoff"
            description="Post-recovery we help you enable 2FA, review admins, and share future-proofing guidelines."
          />
        </div>
      </section>

      <WhatsAppCTA />

      <section id="testimonials" className="space-y-6">
        <h2 className="text-3xl font-semibold">Client testimonials</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} {...testimonial} />
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-semibold">Meet the team</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {team.map((member) => (
            <article
              key={member.name}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              aria-label={`Team member ${member.name}`}
            >
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-sm text-slate-500">{member.role}</p>
              <p className="mt-3 text-sm text-slate-600">{member.bio}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
