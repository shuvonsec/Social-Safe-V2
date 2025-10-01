export const SITE_NAME = "Social Safe";
export const SITE_URL = "https://www.socialsafe.my";
export const WHATSAPP_URL =
  process.env.NEXT_PUBLIC_WHATSAPP_URL ?? "https://wa.me/60123456789";
export const ASSIST_URL =
  process.env.NEXT_PUBLIC_SOCIALSAFE_ASSIST_URL ?? "/api/assist";
export const CASE_URL =
  process.env.NEXT_PUBLIC_SOCIALSAFE_CASE_URL ?? "/api/cases";
export const OPS_URL =
  process.env.NEXT_PUBLIC_SOCIALSAFE_OPS_URL ?? "/api/notify-ops";
export const BUSINESS_HOURS_BADGE = "9am–10pm MYT";
export const TRUST_BADGE =
  "Trusted by creators, SMEs, and agencies across Malaysia.";
export const RATE_LIMIT_TOKENS_PER_MINUTE = Number(
  process.env.RATE_LIMIT_TOKENS_PER_MINUTE ?? 30
);
