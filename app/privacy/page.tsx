import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Shield } from "lucide-react";

const BASE_URL = "https://www.formbyguide.co.uk";

export const metadata: Metadata = {
  title: "Privacy Policy | FormbyGuide.co.uk",
  description: "Privacy Policy for FormbyGuide.co.uk — how we collect, use and protect your personal data in accordance with UK GDPR.",
  alternates: { canonical: `${BASE_URL}/privacy` },
  openGraph: {
    title: "Privacy Policy | FormbyGuide.co.uk",
    description: "Privacy Policy for FormbyGuide.co.uk — how we collect, use and protect your personal data in accordance with UK GDPR.",
    url: `${BASE_URL}/privacy`,
    type: "website",
    siteName: "FormbyGuide.co.uk",
    locale: "en_GB",
    images: [{ url: `${BASE_URL}/og-default.png`, width: 1200, height: 630, alt: "FormbyGuide.co.uk" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | FormbyGuide.co.uk",
    description: "Privacy Policy for FormbyGuide.co.uk — how we collect, use and protect your personal data in accordance with UK GDPR.",
  },
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#F7F9F6]">
      <section className="bg-[#1C3220]">
        <div className="h-1 bg-gradient-to-r from-transparent via-[#C9A96E] to-transparent" />
        <div className="container mx-auto px-4 py-14 max-w-3xl">
          <Link href="/" className="inline-flex items-center gap-1.5 text-white/60 hover:text-white text-sm mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to guide
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <Shield className="w-8 h-8 text-[#C9A96E]" />
            <p className="text-[#C9A96E] text-xs font-bold uppercase tracking-widest">Legal</p>
          </div>
          <h1 className="font-display text-4xl font-bold text-white mb-2">Privacy Policy</h1>
          <p className="text-white/50 text-sm">Last updated: 20 February 2026</p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <div className="bg-white rounded-2xl border border-gray-100 p-8 md:p-10 space-y-10">

          <section>
            <h2 className="font-display text-xl font-bold text-[#1C3220] mb-4">1. Who we are</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              FormbyGuide.co.uk is operated by <strong>Churchtown Media</strong>, a digital media company based in Merseyside, England.
            </p>
            <p className="text-gray-600 leading-relaxed mb-3">
              We are committed to protecting your personal data in accordance with the <strong>UK General Data Protection Regulation (UK GDPR)</strong> and the Data Protection Act 2018.
            </p>
            <p className="text-gray-600 leading-relaxed">
              <strong>Contact:</strong>{" "}
              <a href="mailto:privacy@formbyguide.co.uk" className="text-[#2E6B3E] hover:underline">
                privacy@formbyguide.co.uk
              </a>
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-[#1C3220] mb-4">2. What data we collect</h2>
            <div className="space-y-4">
              {[
                {
                  title: "Contact forms",
                  desc: "Your name, email address, and message contents when you use our contact or business enquiry forms.",
                },
                {
                  title: "Business listing submissions",
                  desc: "Business name, address, phone number, website URL, and description when you claim or submit a listing.",
                },
                {
                  title: "Billing information",
                  desc: "Handled entirely by Stripe, our payment processor. We do not store or have access to card details.",
                },
                {
                  title: "Usage data",
                  desc: "Privacy-friendly, cookieless page view analytics via Plausible. No personal data or IP addresses are collected or stored.",
                },
              ].map(({ title, desc }) => (
                <div key={title} className="flex gap-4">
                  <div className="w-2 h-2 rounded-full bg-[#C9A96E] mt-2 flex-none" />
                  <div>
                    <p className="font-semibold text-[#1C3220] text-sm">{title}</p>
                    <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-[#1C3220] mb-4">3. Why we collect it (legal basis)</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-[#F7F9F6]">
                    <th className="text-left p-3 font-semibold text-[#1C3220] border border-gray-100">Purpose</th>
                    <th className="text-left p-3 font-semibold text-[#1C3220] border border-gray-100">Legal basis</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Contact enquiries", "Legitimate interest and your consent"],
                    ["Business listings", "Performance of a contract (your listing agreement)"],
                    ["Payment processing", "Performance of a contract"],
                    ["Analytics", "Legitimate interest in understanding site usage"],
                  ].map(([purpose, basis]) => (
                    <tr key={purpose}>
                      <td className="p-3 border border-gray-100 text-gray-700">{purpose}</td>
                      <td className="p-3 border border-gray-100 text-gray-500">{basis}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-[#1C3220] mb-4">4. How long we keep it</h2>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li className="flex gap-3"><span className="text-[#C9A96E]">→</span> Contact form submissions: <strong>12 months</strong></li>
              <li className="flex gap-3"><span className="text-[#C9A96E]">→</span> Business listing data: <strong>for the duration of your listing plus 6 months</strong></li>
              <li className="flex gap-3"><span className="text-[#C9A96E]">→</span> Analytics data: <strong>aggregated, no personal data retained</strong> (Plausible Analytics)</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-[#1C3220] mb-4">5. Third parties we share data with</h2>
            <div className="space-y-3">
              {[
                { name: "Plausible (Analytics)", detail: "Privacy-friendly, cookieless analytics. All data is aggregated and processed in the EU. No personal data is collected." },
                { name: "Stripe", detail: "Payment processing for paid business listings. Subject to Stripe's own privacy policy." },
                { name: "Vercel", detail: "Website hosting infrastructure. Data is processed in UK/EU-region data centres where possible." },
                { name: "Resend", detail: "Transactional email delivery for contact form submissions. Emails are processed and delivered via Resend's infrastructure." },
              ].map(({ name, detail }) => (
                <div key={name} className="bg-[#F7F9F6] rounded-xl p-4">
                  <p className="font-semibold text-[#1C3220] text-sm mb-1">{name}</p>
                  <p className="text-gray-500 text-sm">{detail}</p>
                </div>
              ))}
            </div>
            <p className="text-gray-500 text-sm mt-4 font-medium">We do not sell your personal data to any third party.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-[#1C3220] mb-4">6. Cookies</h2>
            <div className="overflow-x-auto rounded-xl border border-gray-100">
              <table className="w-full text-sm">
                <thead className="bg-[#F7F9F6]">
                  <tr>
                    <th className="text-left px-4 py-3 text-xs font-semibold text-[#1C3220] uppercase tracking-wider">Type</th>
                    <th className="text-left px-4 py-3 text-xs font-semibold text-[#1C3220] uppercase tracking-wider">Purpose</th>
                    <th className="text-left px-4 py-3 text-xs font-semibold text-[#1C3220] uppercase tracking-wider">Consent required</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {[
                    ["Essential", "Site functionality (session, security)", "No — always active"],
                    ["Analytics (Plausible)", "Understanding how visitors use the site — cookieless, no consent needed", "No"],
                  ].map(([type, purpose, required]) => (
                    <tr key={type}>
                      <td className="px-4 py-3 font-semibold text-[#1C3220] align-top whitespace-nowrap">{type}</td>
                      <td className="px-4 py-3 text-gray-600 align-top">{purpose}</td>
                      <td className="px-4 py-3 align-top whitespace-nowrap font-medium text-[#C9A96E]">{required}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-gray-500 text-sm mt-3">No advertising or cross-site tracking cookies are used.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-[#1C3220] mb-4">7. Your rights</h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">Under UK GDPR you have the right to:</p>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                "Access your personal data",
                "Correct inaccurate data",
                "Request deletion of your data",
                "Object to or restrict processing",
                "Data portability",
                "Withdraw consent at any time",
              ].map((right) => (
                <div key={right} className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C9A96E] flex-none" />
                  {right}
                </div>
              ))}
            </div>
            <p className="text-gray-600 text-sm mt-4">
              To exercise any of these rights, email{" "}
              <a href="mailto:privacy@formbyguide.co.uk" className="text-[#2E6B3E] hover:underline">
                privacy@formbyguide.co.uk
              </a>. You may also lodge a complaint with the{" "}
              <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-[#2E6B3E] hover:underline">
                Information Commissioner&apos;s Office (ICO)
              </a>.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-[#1C3220] mb-4">8. Changes to this policy</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              We may update this policy from time to time. When we do, we will update the &ldquo;last updated&rdquo; date at the top of this page. Continued use of the site constitutes acceptance of the updated policy.
            </p>
          </section>

        </div>

        <div className="mt-8 text-center text-sm text-gray-400">
          Questions?{" "}
          <Link href="/contact" className="text-[#2E6B3E] hover:underline">Contact us</Link>
          {" "}·{" "}
          <Link href="/terms" className="text-[#2E6B3E] hover:underline">Terms &amp; Conditions</Link>
        </div>
      </div>
    </div>
  );
}
