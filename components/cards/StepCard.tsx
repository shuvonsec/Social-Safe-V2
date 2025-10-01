interface StepCardProps {
  step: number;
  title: string;
  description: string;
}

export function StepCard({ step, title, description }: StepCardProps) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-lg font-bold text-white">
        {step}
      </div>
      <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm text-slate-600">{description}</p>
    </article>
  );
}
