import { NextRequest, NextResponse } from "next/server";
import { assistSchema } from "@/lib/schemas/case";
import { rateLimit } from "@/lib/rate-limit";

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

  const parseResult = assistSchema.safeParse(payload);
  if (!parseResult.success) {
    return NextResponse.json({ error: parseResult.error.flatten().fieldErrors }, { status: 400 });
  }

  const lastMessage = parseResult.data.messages.at(-1);
  const reply = lastMessage
    ? `Thanks for reaching Social Safe. A specialist will review: "${lastMessage.content.slice(0, 140)}"`
    : "Thanks for reaching Social Safe.";

  return NextResponse.json({ reply });
}
