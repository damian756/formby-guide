// Plain page counts: the page, the day and a number. Nothing about the visitor
// is stored: no IP address, cookie, user agent, referrer or device.

// Known bots, crawlers, link previewers, monitors and scripted clients. The
// user agent is read only to leave these out; it is never stored. Starts from
// the network's list in sefton-links/proxy.ts and adds the common ones that
// list let through.
const BOT_UA =
  /bot|crawl|spider|slurp|facebookexternalhit|embedly|preview|headless|lighthouse|pagespeed|gtmetrix|pingdom|uptime|monitor|curl|wget|python|java\/|okhttp|go-http|node-fetch|axios|httpclient|libwww|scrapy|phantomjs|selenium|puppeteer|playwright|ahrefs|semrush|mj12|petal|bytespider|gptbot|ccbot|claude|anthropic|perplexity|applebot|duckduck|baidu|yandex|sogou|exabot|seznam|vercel/i;

export function isBotUserAgent(ua: string | null | undefined): boolean {
  if (!ua || !ua.trim()) return true;
  return BOT_UA.test(ua);
}

const EXCLUDED_PREFIXES = ["/api", "/admin", "/dashboard", "/_next"];
const SAFE_PATH = /^\/[A-Za-z0-9\-._~%/]*$/;

/** The page path to count, or null if it is not a site page. */
export function cleanCountPath(raw: string): string | null {
  const path = raw.trim().split(/[?#]/)[0];
  if (!path.startsWith("/") || path.startsWith("//")) return null;
  if (path.length > 300) return null;
  if (!SAFE_PATH.test(path)) return null;
  if (EXCLUDED_PREFIXES.some((p) => path === p || path.startsWith(`${p}/`))) return null;
  return path;
}
