interface StepCardProps {
  step: number;
  title: string;
  description: string;
}

export function StepCard({ step, title, description }: StepCardProps) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-base font-semibold text-primary">
          {step}
        </span>
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <p className="mt-3 text-sm text-slate-600">{description}</p>
    </article>
  );
}
