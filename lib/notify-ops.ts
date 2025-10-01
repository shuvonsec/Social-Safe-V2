import { OPS_URL } from "./constants";
import { notifyOpsSchema } from "./schemas";

export async function notifyOps(input: unknown) {
  const payload = notifyOpsSchema.parse(input);
  if (process.env.NODE_ENV === "test") {
    return { ok: true };
  }
  try {
    const res = await fetch(OPS_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
    if (!res.ok) {
      throw new Error(`Failed to notify ops: ${res.status}`);
    }
    return res.json();
  } catch (error) {
    console.error("[notifyOps]", {
      message: (error as Error).message,
      caseId: payload.caseId ?? "n/a"
    });
    return { ok: false };
  }
}
