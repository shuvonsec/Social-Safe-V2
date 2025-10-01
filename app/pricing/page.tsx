import type { Metadata } from "next";
import { pricingTiers } from "@/lib/data/services";
import { PriceCard } from "@/components/price-card";

export const metadata: Metadata = {
  title: "Pricing — Social Safe",
  description: "Compare Social Safe recovery tiers with transparent success fees and independent operations.",
  alternates: { canonical: "https://www.socialsafe.my/pricing" }
};

export default function PricingPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-12 px-4 py-16">
      <header className="space-y-4 text-center">
        <h1 className="text-4xl font-bold">Pricing</h1>
        <p className="text-sm text-slate-600">
          We charge a RM 100 advance to open a case. This is non-refundable and covers analyst time and evidence preparation.
          You only pay the remaining success fee if we recover access.
        </p>
      </header>
      <div className="grid gap-6 md:grid-cols-3">
        {pricingTiers.map((tier) => (
          <PriceCard key={tier.name} {...tier} />
        ))}
      </div>
      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-semibold">What to know before we start</h2>
        <ul className="mt-4 space-y-3 text-sm text-slate-600">
          <li>Success fees are due only after documented account recovery.</li>
          <li>We operate independently and follow platform policies and applicable laws.</li>
          <li>Cases paused longer than 14 days may require a fresh advance due to platform response windows.</li>
        </ul>
      </section>
    </div>
  );
}
