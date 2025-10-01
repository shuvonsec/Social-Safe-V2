"use client";

import { currencyMYR } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface PriceCardProps {
  name: string;
  subtitle: string;
  successFee: number;
  features: readonly string[];
}

export function PriceCard({ name, subtitle, successFee, features }: PriceCardProps) {
  const whatsappUrl = process.env.NEXT_PUBLIC_WHATSAPP_URL ?? "https://wa.me/";
  return (
    <article className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div>
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="text-sm text-slate-500">{subtitle}</p>
        <p className="mt-4 text-3xl font-bold text-slate-900">
          {currencyMYR(successFee)} <span className="text-sm font-medium text-slate-500">success fee</span>
        </p>
      </div>
      <ul className="mt-6 flex flex-1 flex-col gap-3 text-sm text-slate-600">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-2">
            <span aria-hidden className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-green-100 text-success">
              ✓
            </span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Button asChild className="mt-6 w-full">
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
          Start My Recovery
        </a>
      </Button>
    </article>
  );
}
