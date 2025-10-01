const tokensPerMinute = Number(process.env.RATE_LIMIT_TOKENS_PER_MINUTE ?? 30);

const buckets = new Map<string, { tokens: number; updatedAt: number }>();

export function checkRateLimit(key: string) {
  const now = Date.now();
  const bucket = buckets.get(key);
  const refillRate = tokensPerMinute / 60000; // tokens per ms
  if (!bucket) {
    buckets.set(key, { tokens: tokensPerMinute - 1, updatedAt: now });
    return true;
  }
  const elapsed = now - bucket.updatedAt;
  const tokens = Math.min(
    tokensPerMinute,
    bucket.tokens + elapsed * refillRate
  );
  if (tokens < 1) {
    bucket.tokens = tokens;
    bucket.updatedAt = now;
    return false;
  }
  bucket.tokens = tokens - 1;
  bucket.updatedAt = now;
  return true;
}
