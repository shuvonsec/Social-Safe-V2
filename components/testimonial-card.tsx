interface TestimonialCardProps {
  name: string;
  quote: string;
}

export function TestimonialCard({ name, quote }: TestimonialCardProps) {
  return (
    <figure className="flex h-full flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <blockquote className="text-sm leading-relaxed text-slate-700">“{quote}”</blockquote>
      <figcaption className="mt-4 text-sm font-semibold text-slate-900">{name}</figcaption>
    </figure>
  );
}
