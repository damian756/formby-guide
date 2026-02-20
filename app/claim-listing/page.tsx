import type { Metadata } from "next";
import ClaimListingClient from "./ClaimListingClient";

const BASE_URL = "https://www.formbyguide.co.uk";

export const metadata: Metadata = {
  title: "Claim Your Business Listing | FormbyGuide.co.uk",
  description: "Is your Formby business on our guide? Claim your free listing to update your details, opening hours, and get more visibility with locals and visitors.",
  alternates: { canonical: `${BASE_URL}/claim-listing` },
  openGraph: {
    title: "Claim Your Business Listing | FormbyGuide.co.uk",
    description: "Claim your free Formby business listing. Update your details, opening hours, and upgrade for featured placement.",
    url: `${BASE_URL}/claim-listing`,
  },
};

export default function ClaimListingPage() {
  return <ClaimListingClient />;
}
