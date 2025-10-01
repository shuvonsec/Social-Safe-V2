import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function currencyMYR(amount: number) {
  return new Intl.NumberFormat("en-MY", {
    style: "currency",
    currency: "MYR",
    minimumFractionDigits: 0
  }).format(amount);
}

export function redactPII(value: string) {
  return value.replace(/([\w.-]+)@([\w.-]+)/g, "[redacted]@$2");
}
