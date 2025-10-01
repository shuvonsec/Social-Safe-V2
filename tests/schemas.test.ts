import { describe, expect, it } from "vitest";
import { assistSchema, createCaseSchema } from "@/lib/schemas/case";

describe("createCaseSchema", () => {
  const validPayload = {
    name: "Jane Doe",
    email: "jane@example.com",
    phone: "+60123456789",
    platform: "Instagram" as const,
    urgency: "Normal" as const,
    message: "Account hacked",
    honeypot: ""
  };

  it("accepts valid payload", () => {
    expect(createCaseSchema.parse(validPayload).name).toBe("Jane Doe");
  });

  it("rejects passwords in message", () => {
    const result = createCaseSchema.safeParse({ ...validPayload, message: "My password is secret" });
    expect(result.success).toBe(false);
  });
});

describe("assistSchema", () => {
  it("requires messages", () => {
    const result = assistSchema.safeParse({
      messages: [{ role: "user", content: "Hi" }]
    });
    expect(result.success).toBe(true);
  });

  it("rejects empty arrays", () => {
    const result = assistSchema.safeParse({ messages: [] });
    expect(result.success).toBe(false);
  });
});
