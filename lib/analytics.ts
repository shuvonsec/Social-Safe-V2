"use client";

import { useEffect } from "react";

type AnalyticsAdapter = {
  trackPageView?: (path: string) => void;
};

const listeners: AnalyticsAdapter[] = [];

export function registerAnalyticsAdapter(adapter: AnalyticsAdapter) {
  listeners.push(adapter);
}

export function usePageView(path: string) {
  useEffect(() => {
    listeners.forEach((listener) => listener.trackPageView?.(path));
  }, [path]);
}
