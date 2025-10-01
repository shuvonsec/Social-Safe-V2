import type { ReactNode } from "react";
interface FormFieldProps {
  label: string;
  htmlFor: string;
  children: ReactNode;
  description?: string;
  error?: string;
  required?: boolean;
}

export function FormField({ label, htmlFor, children, description, error, required }: FormFieldProps) {
  return (
    <div className="space-y-2">
      <label htmlFor={htmlFor} className="text-sm font-semibold text-slate-700">
        {label}
        {required ? <span className="ml-1 text-red-500" aria-hidden>*</span> : null}
      </label>
      {children}
      {description ? <p className="text-xs text-slate-500">{description}</p> : null}
      {error ? <p className="text-xs text-red-500" role="alert">{error}</p> : null}
    </div>
  );
}
