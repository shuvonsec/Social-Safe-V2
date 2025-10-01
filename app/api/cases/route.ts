import { NextResponse } from "next/server";
import { caseSchema } from "@/lib/schemas";
import { checkRateLimit } from "@/lib/rate-limit";
import { createCase } from "@/lib/store/cases";

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for") ?? "anonymous";
  if (!checkRateLimit(`cases:${ip}`)) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }

  try {
    const json = await request.json();
    const parsed = caseSchema.omit({ honey: true }).parse({ ...json, honey: "" });
    const record = await createCase(parsed);
    return NextResponse.json({ id: record.id });
  } catch (error) {
    console.error("[case-api]", { message: (error as Error).message });
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
