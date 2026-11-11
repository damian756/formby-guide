// Standing rule (Damian, 11 Nov 2026): the site never links to these organisations.
// Naming them in copy is fine; linking to them is not. That covers page copy, data
// files, schema (url, sameAs) and anything that comes from listing data, such as a
// listing's stored website. tests/no-blocked-links.test.mjs reads this list and fails
// if any of these domains appears anywhere else in app/, lib/, components/ or public/.
//
// Southport BID, Sefton Council, VisitSouthport, YourSouthport, Southport Market and the
// Mikhail hotel and leisure group's venues.
export const BLOCKED_DOMAINS = [
  "sefton.gov.uk",
  "visitseftonandwestlancs.co.uk",
  "visitsouthport.com",
  "yoursouthport.com",
  "southportbid.com",
  "southportmarket.com",
  "southportmarket.co.uk",
  "mhalg.com",
  "thegrand.co.uk",
  "boldhotel.com",
  "lordstreethotel.com",
  "mavericksbar.co.uk",
  "punchtarmeys.co.uk",
  "arcains.co.uk",
  "hotshotsdarts.co.uk",
  "brewerytapliverpool.com",
  "doctorduncansliverpool.com",
  "ecclestonarms.co.uk",
] as const;

// True when the URL's host is one of the domains above or a subdomain of one
// ("www.sefton.gov.uk", "SEFTON.GOV.UK", "sefton.gov.uk/parking", "http://...").
// A value that cannot be read as a URL is not blocked here.
export function isBlockedUrl(url: string | null | undefined): boolean {
  if (!url) return false;
  const raw = url.trim();
  let host: string;
  try {
    host = new URL(/^[a-z][a-z0-9+.-]*:\/\//i.test(raw) ? raw : `https://${raw}`).hostname;
  } catch {
    return false;
  }
  host = host.toLowerCase().replace(/\.$/, "");
  return BLOCKED_DOMAINS.some((d) => host === d || host.endsWith(`.${d}`));
}
