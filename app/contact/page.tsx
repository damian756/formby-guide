import type { Metadata } from "next";
import ContactClient from "./ContactClient";
import { ADVERTISING_SUBJECT } from "@/lib/contact-form";
import { describeSpace } from "@/lib/ad-slots";

const BASE_URL = "https://www.formbyguide.co.uk";

export const metadata: Metadata = {
  title: "Contact Us",
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

type Props = { searchParams: Promise<{ topic?: string | string[]; space?: string | string[] }> };

// Links from the advertise page arrive as /contact?topic=advertise&space=<id>:
// preselect the advertising subject and name the space in the message.
export default async function ContactPage({ searchParams }: Props) {
  const { topic, space } = await searchParams;
  const spaceTitle = describeSpace(typeof space === "string" ? space : undefined);
  const isAdvertising = topic === "advertise" || spaceTitle !== null;
  return (
    <ContactClient
      initialSubject={isAdvertising ? ADVERTISING_SUBJECT : undefined}
      initialMessage={spaceTitle ? `I'm interested in: ${spaceTitle}\n\n` : undefined}
    />
  );
}
