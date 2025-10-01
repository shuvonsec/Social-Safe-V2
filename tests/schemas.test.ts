import { describe, expect, it } from "vitest";
import { caseSchema } from "@/lib/schemas";

describe("caseSchema", () => {
  const base = {
    name: "Test User",
    email: "test@example.com",
    phone: "",
    platform: "Instagram" as const,
    urgency: "Normal" as const,
    message: "Account hacked, email changed, need help",
    transcript: [],
    honey: ""
  };

  it("accepts valid payload", () => {
    const parsed = caseSchema.parse(base);
    expect(parsed.name).toBe("Test User");
  });

  it("rejects password content", () => {
    expect(() =>
      caseSchema.parse({
        ...base,
        message: "Here is my password 12345"
      })
    ).toThrowError(/do not share passwords/);
  });

  it("rejects honeypot", () => {
    expect(() =>
      caseSchema.parse({
        ...base,
        honey: "robot"
      })
    ).toThrow();
  });
});
