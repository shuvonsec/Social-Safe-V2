import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/lib/utils";
import { WHATSAPP_URL } from "@/lib/constants";

interface PriceCardProps {
  title: string;
  subtitle: string;
  successFee: number;
  features: string[];
}

export function PriceCard({ title, subtitle, successFee, features }: PriceCardProps) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <header>
        <p className="text-xs font-semibold uppercase tracking-wide text-blue-600">{title}</p>
        <h3 className="mt-1 text-2xl font-bold text-slate-900">{subtitle}</h3>
        <p className="mt-4 text-sm text-slate-600">
          Success fee {formatCurrency(successFee)}
        </p>
      </header>
      <ul className="mt-6 space-y-3 text-sm text-slate-700">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-3">
            <Check className="mt-0.5 h-4 w-4 text-emerald-500" aria-hidden="true" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <div className="mt-8">
        <Button asChild className="w-full">
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer noopener">
            Start My Recovery
          </a>
        </Button>
      </div>
    </article>
  );
}
