import { describe, expect, it } from "vitest";
import { currencyMYR, redactPII } from "@/lib/utils";

describe("currencyMYR", () => {
  it("formats without decimals", () => {
    expect(currencyMYR(199)).toBe("RM199");
  });
});

describe("redactPII", () => {
  it("redacts email usernames", () => {
    expect(redactPII("Contact john.doe@example.com now")).toContain("[redacted]@example.com");
  });
});
