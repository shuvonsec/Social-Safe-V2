import { describe, expect, it } from "vitest";
import { formatCurrency } from "@/lib/utils";

describe("formatCurrency", () => {
  it("formats whole numbers in MYR", () => {
    expect(formatCurrency(199)).toBe("RM 199");
  });

  it("supports decimals", () => {
    expect(formatCurrency(399.5)).toBe("RM 400");
  });
});
