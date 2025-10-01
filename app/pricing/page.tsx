import type { Metadata } from "next";
import { PriceCard } from "@/components/cards/PriceCard";

export const metadata: Metadata = {
  title: "Pricing | Social Safe",
  description:
    "Choose the right Social Safe recovery tier. Basic, Standard, and Priority success fees with transparent advance policy.",
  alternates: {
    canonical: "https://www.socialsafe.my/pricing"
  }
};

const pricing = [
  {
    title: "Basic",
    subtitle: "DIY + AI",
    successFee: 199,
    features: [
      "AI assistant guidance",
      "Security checklist",
      "Email template pack",
      "Shadowban review basics"
    ]
  },
  {
    title: "Standard",
    subtitle: "Most cases",
    successFee: 399,
    features: [
      "One platform recovery",
      "Analyst updates 24–72h",
      "Ownership verification support",
      "Post-recovery hardening",
      "Impersonation takedown included where marked"
    ]
  },
  {
    title: "Priority",
    subtitle: "Urgent & business",
    successFee: 899,
    features: [
      "Fast-track queue under 24h",
      "Multi-platform support",
      "Dedicated case manager",
      "Impersonation takedown pack"
    ]
  }
];

export default function PricingPage() {
  return (
    <div className="space-y-12">
      <section className="space-y-4">
        <h1 className="text-4xl font-bold text-slate-900">Transparent pricing</h1>
        <p className="max-w-2xl text-sm text-slate-600">
          Recovery isn’t one-size-fits-all. Choose a tier that matches your urgency, platform coverage, and analyst involvement.
        </p>
        <p className="rounded-2xl bg-white p-4 text-sm text-slate-700 shadow-sm">
          We charge a RM 100 advance to open a case. This is non-refundable and covers analyst time and evidence preparation. You only pay the remaining success fee if we recover access.
        </p>
      </section>
      <section className="grid gap-6 md:grid-cols-3">
        {pricing.map((plan) => (
          <PriceCard
            key={plan.title}
            title={plan.title}
            subtitle={plan.subtitle}
            successFee={plan.successFee}
            features={plan.features}
          />
        ))}
      </section>
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900">What the advance covers</h2>
        <ul className="space-y-2 text-sm text-slate-600">
          <li>Security analyst review of case evidence</li>
          <li>Preparation of compliant appeals and ownership packets</li>
          <li>Guided communication on what to send platform support</li>
        </ul>
      </section>
    </div>
  );
}
