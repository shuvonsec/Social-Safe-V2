import { useEffect } from "react";

type PageviewAdapter = {
  track: (data: { path: string; title?: string }) => void;
};

const adapters: PageviewAdapter[] = [];

export function registerAnalyticsAdapter(adapter: PageviewAdapter) {
  adapters.push(adapter);
}

export function usePageview(path: string, title?: string) {
  useEffect(() => {
    for (const adapter of adapters) {
      try {
        adapter.track({ path, title });
      } catch (error) {
        console.warn("analytics adapter failed", (error as Error).message);
      }
    }
  }, [path, title]);
}
