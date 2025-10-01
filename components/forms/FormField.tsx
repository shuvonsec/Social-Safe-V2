import * as React from "react";
import { cn } from "@/lib/utils";

interface FormFieldProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
  helpText?: string;
  error?: string;
}

export function FormField({
  label,
  htmlFor,
  children,
  helpText,
  error,
  className,
  ...props
}: FormFieldProps) {
  const descriptionId = helpText ? `${htmlFor}-description` : undefined;
  const errorId = error ? `${htmlFor}-error` : undefined;
  return (
    <div className={cn("space-y-2", className)} {...props}>
      <label
        className="text-sm font-medium text-slate-800"
        htmlFor={htmlFor}
      >
        {label}
      </label>
      {React.isValidElement(children)
        ? React.cloneElement(children, {
            id: htmlFor,
            "aria-describedby": [descriptionId, errorId]
              .filter(Boolean)
              .join(" ")
              .trim() || undefined,
            "aria-invalid": Boolean(error) || undefined
          })
        : children}
      {helpText && !error ? (
        <p id={descriptionId} className="text-xs text-slate-500">
          {helpText}
        </p>
      ) : null}
      {error ? (
        <p id={errorId} className="text-xs font-medium text-red-600">
          {error}
        </p>
      ) : null}
    </div>
  );
}
