import { NextRequest, NextResponse } from "next/server";
import { notifyOpsSchema } from "@/lib/schemas/case";
import { rateLimit } from "@/lib/rate-limit";
import { redactPII } from "@/lib/utils";

export async function POST(request: NextRequest) {
  const ip = request.ip ?? request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "anonymous";
  const limit = rateLimit(ip);
  if (!limit.success) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }

  let payload: unknown;
  try {
    payload = await request.json();
  } catch (error) {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const parseResult = notifyOpsSchema.safeParse(payload);
  if (!parseResult.success) {
    return NextResponse.json({ error: parseResult.error.flatten().fieldErrors }, { status: 400 });
  }

  console.info("ops notification", redactPII(JSON.stringify(parseResult.data)));
  return NextResponse.json({ ok: true });
}
