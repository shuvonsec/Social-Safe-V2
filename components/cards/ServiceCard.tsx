import { BadgeCheck } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  includedIn: string;
}

export function ServiceCard({ title, description, includedIn }: ServiceCardProps) {
  return (
    <article className="group flex h-full flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg focus-within:shadow-lg">
      <div>
        <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
        <p className="mt-2 text-sm text-slate-600">{description}</p>
      </div>
      <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
        <BadgeCheck className="h-4 w-4" aria-hidden="true" />
        <span>Included in: {includedIn}</span>
      </div>
    </article>
  );
}
