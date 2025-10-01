const buckets = new Map<string, { tokens: number; last: number }>();

function getLimit() {
  const envValue = process.env.RATE_LIMIT_TOKENS_PER_MINUTE;
  const parsed = envValue ? Number.parseInt(envValue, 10) : 30;
  return Number.isFinite(parsed) && parsed > 0 ? parsed : 30;
}

export function rateLimit(ip: string) {
  const limit = getLimit();
  const now = Date.now();
  const bucket = buckets.get(ip) ?? { tokens: limit, last: now };
  const elapsed = now - bucket.last;
  const refill = Math.floor((elapsed / 60000) * limit);
  bucket.tokens = Math.min(limit, bucket.tokens + refill);
  bucket.last = now;

  if (bucket.tokens <= 0) {
    buckets.set(ip, bucket);
    return { success: false, retryAfter: Math.ceil(60000 / limit) };
  }

  bucket.tokens -= 1;
  buckets.set(ip, bucket);
  return { success: true };
}
