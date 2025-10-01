import { NextRequest, NextResponse } from "next/server";
import { createCase } from "@/lib/db";
import { createCaseSchema } from "@/lib/schemas/case";
import { rateLimit } from "@/lib/rate-limit";
import { notifyOps } from "@/lib/notify-ops";
import { redactPII } from "@/lib/utils";

export async function POST(request: NextRequest) {
  const ip = request.ip ?? request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "anonymous";
  const limit = rateLimit(ip);
  if (!limit.success) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429, headers: { "Retry-After": String(limit.retryAfter) } });
  }

  let payload: unknown;
  try {
    payload = await request.json();
  } catch (error) {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const parseResult = createCaseSchema.safeParse(payload);
  if (!parseResult.success) {
    const error = parseResult.error.flatten();
    return NextResponse.json({ error: error.fieldErrors }, { status: 400 });
  }

  const { honeypot, ...data } = parseResult.data;

  try {
    const record = await createCase({ ...data, locale: "en-MY" });
    await notifyOps({ caseId: record.id, email: record.email, platform: record.platform });
    return NextResponse.json({ id: record.id }, { status: 200 });
  } catch (error) {
    console.error("case creation failed", redactPII(String(error)));
    return NextResponse.json({ error: "Unable to create case" }, { status: 500 });
  }
}
