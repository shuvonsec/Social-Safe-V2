"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { registerAnalyticsAdapter, usePageView } from "@/lib/analytics";

const loggingAdapter = {
  trackPageView: (path: string) => {
    if (process.env.NODE_ENV !== "production") {
      console.debug("pageview", path);
    }
  }
};

let registered = false;

export function AnalyticsProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    if (!registered) {
      registerAnalyticsAdapter(loggingAdapter);
      registered = true;
    }
  }, []);

  usePageView(pathname);

  return <>{children}</>;
}
