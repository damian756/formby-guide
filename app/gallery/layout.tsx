import type { Metadata } from "next";

// The gallery page is a client component, so its metadata lives here. Without it the
// page took the home page's title and canonical.
const PAGE_URL = "https://www.formbyguide.co.uk/gallery";
const DESCRIPTION = "Photos from Formby: the beach, the pinewoods, the wildlife and the signs you see on a visit.";

export const metadata: Metadata = {
  title: "Formby Photo Gallery",
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Formby Photo Gallery",
    description: DESCRIPTION,
    url: PAGE_URL,
    type: "website",
    siteName: "FormbyGuide.co.uk",
    locale: "en_GB",
    images: [{ url: "https://www.formbyguide.co.uk/og-default.png", width: 1200, height: 630, alt: "FormbyGuide.co.uk" }],
  },
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return children;
}
