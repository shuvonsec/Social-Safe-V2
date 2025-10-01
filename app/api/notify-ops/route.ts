import { NextResponse } from "next/server";
import { notifyOpsSchema } from "@/lib/schemas";
import { checkRateLimit } from "@/lib/rate-limit";

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for") ?? "anonymous";
  if (!checkRateLimit(`ops:${ip}`)) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }

  try {
    const json = await request.json();
    const payload = notifyOpsSchema.parse(json);
    console.info("[notify-ops]", {
      email: payload.email,
      platform: payload.platform,
      caseId: payload.caseId
    });
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[notify-ops]", { message: (error as Error).message });
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
