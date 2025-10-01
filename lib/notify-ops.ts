import { redactPII } from "./utils";

export type OpsNotification = {
  caseId?: string;
  email: string;
  platform?: string;
  transcript?: Array<{ role: "user" | "assistant"; content: string }>;
};

export async function notifyOps(payload: OpsNotification) {
  const endpoint = process.env.NEXT_PUBLIC_SOCIALSAFE_OPS_URL ?? "/api/notify-ops";
  try {
    await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });
  } catch (error) {
    console.error("notifyOps error", redactPII(String(error)));
  }
}
