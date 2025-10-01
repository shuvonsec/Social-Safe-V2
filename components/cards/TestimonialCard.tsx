interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
}

export function TestimonialCard({ quote, name, role }: TestimonialCardProps) {
  return (
    <figure className="flex h-full flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <blockquote className="text-sm text-slate-700">“{quote}”</blockquote>
      <figcaption className="mt-4 text-sm font-semibold text-slate-900">
        {name}
        <span className="ml-1 font-normal text-slate-500">— {role}</span>
      </figcaption>
    </figure>
  );
}
