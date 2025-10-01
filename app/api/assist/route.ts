import { NextResponse } from "next/server";
import { assistSchema } from "@/lib/schemas";
import { checkRateLimit } from "@/lib/rate-limit";

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for") ?? "anonymous";
  if (!checkRateLimit(`assist:${ip}`)) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }

  try {
    const json = await request.json();
    const payload = assistSchema.parse(json);
    const last = payload.messages[payload.messages.length - 1];
    const reply =
      last?.content
        ? `Here’s a quick tip: focus on secure evidence (screenshots, invoices) and avoid sharing passwords. Summarise changes since the incident to speed up analyst review.`
        : "How can I help with your recovery?";
    return NextResponse.json({ reply });
  } catch (error) {
    console.error("[assist]", { message: (error as Error).message });
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
