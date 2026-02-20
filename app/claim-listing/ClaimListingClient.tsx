"use client";

import { useState } from "react";
import Link from "next/link";
import { Send, CheckCircle, AlertCircle, Building2, Mail, MessageSquare } from "lucide-react";

export default function ClaimListingClient() {
  const [form, setForm] = useState({ name: "", email: "", businessName: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          subject: "Claim my listing",
          businessName: form.businessName,
          message: form.message || `${form.name} is requesting to claim the listing for ${form.businessName}.`,
        }),
      });
      const data = await res.json();
      if (!res.ok) { setErrorMsg(data.error || "Something went wrong."); setStatus("error"); return; }
      setStatus("success");
    } catch {
      setErrorMsg("Network error. Please check your connection and try again.");
      setStatus("error");
    }
  }

  return (
    <div className="min-h-screen bg-[#F7F9F6]">
      {/* Hero */}
      <section className="bg-[#1C3220] relative overflow-hidden">
        <div className="h-1 bg-gradient-to-r from-transparent via-[#C9A96E] to-transparent" />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#C9A96E]/5 rounded-full -translate-y-24 translate-x-24 blur-3xl" />
        </div>
        <div className="relative container mx-auto px-4 max-w-6xl py-16 md:py-24">
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">Claim Your Listing</h1>
            <p className="text-xl text-white/70 leading-relaxed">Update your details, manage your info, and get more visibility with Formby visitors.</p>
          </div>
        </div>
        <div className="relative h-8 overflow-hidden">
          <svg viewBox="0 0 1440 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute bottom-0 w-full" preserveAspectRatio="none">
            <path d="M0 32L720 12L1440 32V32H0Z" fill="#F7F9F6"/>
          </svg>
        </div>
      </section>

      <div className="container mx-auto px-4 max-w-6xl py-12">
        <div className="grid md:grid-cols-5 gap-8">

          {/* Sidebar */}
          <div className="md:col-span-2 space-y-5">
            <div className="bg-white rounded-2xl border border-[#1C3220]/8 p-6">
              <h2 className="font-display font-bold text-[#1C3220] mb-4">What you get</h2>
              <ul className="space-y-3">
                {[
                  "Update your name, address & contact details",
                  "Add or correct opening hours",
                  "Add your website and social links",
                  "Respond to your listing details",
                  "Upgrade to Featured for more visibility",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-[#1C3220]/70">
                    <span className="w-4 h-4 rounded-full bg-[#2E6B3E]/10 text-[#2E6B3E] flex items-center justify-center flex-shrink-0 text-[10px] font-bold mt-0.5">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#1C3220] rounded-2xl p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#C9A96E]/10 rounded-full -translate-y-8 translate-x-8 blur-2xl" />
              <div className="relative">
                <p className="text-[#C9A96E] text-xs font-bold uppercase tracking-widest mb-2">Featured listing</p>
                <p className="font-display font-bold text-white mb-2">More visibility — coming soon</p>
                <p className="text-white/60 text-sm mb-4">Appear at the top of your category with a prominent featured badge. Paid tiers launching soon.</p>
                <Link href="/contact" className="block text-center border border-[#C9A96E]/40 text-[#C9A96E] px-4 py-2 rounded-full font-bold text-sm hover:bg-[#C9A96E]/10 transition">
                  Enquire about advertising →
                </Link>
              </div>
            </div>

            <p className="text-sm text-[#1C3220]/40 text-center">
              Not listed yet?{" "}
              <Link href="/contact" className="text-[#2E6B3E] font-semibold hover:underline">
                Contact us to get added →
              </Link>
            </p>
          </div>

          {/* Form */}
          <div className="md:col-span-3">
            {status === "success" ? (
              <div className="bg-white rounded-2xl border border-green-100 p-10 text-center">
                <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-500" />
                </div>
                <h2 className="font-display text-2xl font-bold text-[#1C3220] mb-2">Request sent!</h2>
                <p className="text-[#1C3220]/60 mb-6">
                  We&apos;ve received your claim request for <strong>{form.businessName}</strong>. We&apos;ll be in touch within 1–2 business days to verify ownership.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <button
                    onClick={() => { setForm({ name: "", email: "", businessName: "", message: "" }); setStatus("idle"); }}
                    className="px-6 py-2.5 border border-[#1C3220]/20 rounded-full text-sm font-medium text-[#1C3220]/70 hover:bg-[#E8EDE6] transition"
                  >
                    Submit another
                  </button>
                  <Link href="/" className="px-6 py-2.5 bg-[#2E6B3E] text-white rounded-full text-sm font-bold hover:bg-[#1C3220] transition">
                    Back to the guide →
                  </Link>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-[#1C3220]/8 p-7 space-y-5">
                <h2 className="font-display text-xl font-bold text-[#1C3220]">Request to claim a listing</h2>

                {status === "error" && (
                  <div className="flex items-start gap-3 bg-red-50 border border-red-200 rounded-xl p-4">
                    <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                    <p className="text-red-700 text-sm">{errorMsg}</p>
                  </div>
                )}

                <div>
                  <label className="block text-xs font-semibold text-[#1C3220] uppercase tracking-wider mb-1.5">
                    <span className="inline-flex items-center gap-1.5">
                      <Building2 className="w-3.5 h-3.5 text-[#2E6B3E]" /> Business name <span className="text-[#2E6B3E]">*</span>
                    </span>
                  </label>
                  <input
                    type="text"
                    required
                    value={form.businessName}
                    onChange={(e) => setForm({ ...form, businessName: e.target.value })}
                    placeholder="e.g. Emily's Restaurant"
                    className="w-full px-4 py-3 border border-[#1C3220]/15 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#2E6B3E]/40 focus:border-[#2E6B3E] transition bg-[#F7F9F6]"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#1C3220] uppercase tracking-wider mb-1.5">
                      Your name <span className="text-[#2E6B3E]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Jane Smith"
                      className="w-full px-4 py-3 border border-[#1C3220]/15 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#2E6B3E]/40 focus:border-[#2E6B3E] transition bg-[#F7F9F6]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#1C3220] uppercase tracking-wider mb-1.5">
                      <span className="inline-flex items-center gap-1.5">
                        <Mail className="w-3.5 h-3.5 text-[#2E6B3E]" /> Email <span className="text-[#2E6B3E]">*</span>
                      </span>
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="you@yourbusiness.com"
                      className="w-full px-4 py-3 border border-[#1C3220]/15 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#2E6B3E]/40 focus:border-[#2E6B3E] transition bg-[#F7F9F6]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#1C3220] uppercase tracking-wider mb-1.5">
                    <span className="inline-flex items-center gap-1.5">
                      <MessageSquare className="w-3.5 h-3.5 text-[#2E6B3E]" /> Anything to add? <span className="text-[#1C3220]/40 font-normal normal-case">(optional)</span>
                    </span>
                  </label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="e.g. our phone number has changed, we'd like to add opening hours..."
                    className="w-full px-4 py-3 border border-[#1C3220]/15 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#2E6B3E]/40 focus:border-[#2E6B3E] transition bg-[#F7F9F6] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full flex items-center justify-center gap-2 bg-[#1C3220] hover:bg-[#2E6B3E] disabled:opacity-60 text-white py-3.5 rounded-full font-bold text-sm transition-colors"
                >
                  {status === "sending" ? (
                    <><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />Sending…</>
                  ) : (
                    <><Send className="w-4 h-4" />Request to Claim Listing</>
                  )}
                </button>

                <p className="text-xs text-[#1C3220]/40 text-center">
                  We&apos;ll email you within 1–2 business days to verify ownership.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
