import type { Metadata } from "next";
import ContactClient from "./ContactClient";

const BASE_URL = "https://www.formbyguide.co.uk";

export const metadata: Metadata = {
  title: "Contact Us | FormbyGuide.co.uk",
  description: "Get in touch with the FormbyGuide team. List your business, enquire about advertising, report an issue, or just say hello.",
  alternates: { canonical: `${BASE_URL}/contact` },
  openGraph: {
    title: "Contact Us | FormbyGuide.co.uk",
    description: "Get in touch with the FormbyGuide team. List your business, enquire about advertising, or just say hello.",
    url: `${BASE_URL}/contact`,
    type: "website",
    siteName: "FormbyGuide.co.uk",
    locale: "en_GB",
    images: [{ url: `${BASE_URL}/og-default.png`, width: 1200, height: 630, alt: "FormbyGuide.co.uk" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | FormbyGuide.co.uk",
    description: "Get in touch with the FormbyGuide team. List your business, enquire about advertising, or just say hello.",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
