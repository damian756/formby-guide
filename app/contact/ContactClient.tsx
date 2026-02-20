"use client";

import { useState } from "react";
import Link from "next/link";
import { Send, CheckCircle, AlertCircle, MapPin, Clock } from "lucide-react";

const SUBJECTS = [
  "Claim my listing",
  "Advertise / Featured listing",
  "The Open 2026",
  "Report an issue",
  "General enquiry",
];

export default function ContactClient() {
  const [form, setForm] = useState({ name: "", email: "", subject: SUBJECTS[0], businessName: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const isBusiness = form.subject === "Claim my listing" || form.subject === "Advertise / Featured listing";

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
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
      <div className="bg-[#1C3220] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#C9A96E]/8 rounded-full -translate-y-16 translate-x-16 blur-3xl" />
        </div>
        <div className="h-1 bg-gradient-to-r from-transparent via-[#C9A96E] to-transparent" />
        <div className="relative container mx-auto px-4 max-w-5xl py-12">
          <h1 className="font-display text-4xl font-bold text-white mb-2">Get in Touch</h1>
          <p className="text-white/60">List your business, advertise, or just say hello.</p>
        </div>
        <div className="relative h-6 overflow-hidden">
          <svg viewBox="0 0 1440 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute bottom-0 w-full" preserveAspectRatio="none">
            <path d="M0 24L720 8L1440 24V24H0Z" fill="#F7F9F6"/>
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-5xl py-12">
        <div className="grid md:grid-cols-5 gap-8">

          {/* Sidebar */}
          <div className="md:col-span-2 space-y-5">
            <div className="bg-white rounded-2xl border border-[#1C3220]/8 p-6">
              <h2 className="font-display font-bold text-[#1C3220] mb-4">Contact Info</h2>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#C9A96E]/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 text-[#2E6B3E]" />
                  </div>
                  <div>
                    <p className="text-xs text-[#1C3220]/40 uppercase tracking-wider mb-0.5">Based in</p>
                    <p className="text-[#1C3220] text-sm font-medium">Formby / Southport, Merseyside</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#C9A96E]/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-4 h-4 text-[#2E6B3E]" />
                  </div>
                  <div>
                    <p className="text-xs text-[#1C3220]/40 uppercase tracking-wider mb-0.5">Response time</p>
                    <p className="text-[#1C3220] text-sm font-medium">1–2 business days</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#1C3220] rounded-2xl p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#C9A96E]/10 rounded-full -translate-y-8 translate-x-8 blur-2xl" />
              <div className="relative">
                <p className="font-display font-bold text-white mb-2">Want to list your business?</p>
                <p className="text-white/60 text-sm mb-4">It&apos;s free to get started. Upgrade anytime for more visibility.</p>
                <Link href="/claim-listing" className="block text-center bg-[#C9A96E] text-white px-4 py-2.5 rounded-full font-bold text-sm hover:bg-[#b8944f] transition">
                  Claim Your Free Listing →
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-[#1C3220]/8 p-6">
              <p className="text-xs text-[#1C3220]/40 uppercase tracking-wider mb-3">Built by</p>
              <a href="https://churchtownmedia.co.uk" target="_blank" rel="noopener noreferrer" className="text-[#1C3220] font-bold hover:text-[#2E6B3E] transition-colors">
                Churchtown Media ↗
              </a>
              <p className="text-[#1C3220]/40 text-xs mt-1">Web & digital for local businesses</p>
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-3">
            {status === "success" ? (
              <div className="bg-white rounded-2xl border border-green-200 p-10 text-center">
                <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-500" />
                </div>
                <h2 className="font-display text-2xl font-bold text-[#1C3220] mb-2">Message sent!</h2>
                <p className="text-[#1C3220]/60 mb-6">We&apos;ll be in touch within 1–2 business days. Check your inbox for a confirmation.</p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <button
                    onClick={() => { setForm({ name: "", email: "", subject: SUBJECTS[0], businessName: "", message: "" }); setStatus("idle"); }}
                    className="px-6 py-2.5 border border-[#1C3220]/20 rounded-full text-sm font-medium text-[#1C3220]/70 hover:bg-[#E8EDE6] transition"
                  >
                    Send another message
                  </button>
                  <Link href="/" className="px-6 py-2.5 bg-[#2E6B3E] text-white rounded-full text-sm font-bold hover:bg-[#1C3220] transition">
                    Back to the guide →
                  </Link>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-[#1C3220]/8 p-7 space-y-5">
                <h2 className="font-display text-xl font-bold text-[#1C3220]">Send a message</h2>

                {status === "error" && (
                  <div className="flex items-start gap-3 bg-red-50 border border-red-200 rounded-xl p-4">
                    <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                    <p className="text-red-700 text-sm">{errorMsg}</p>
                  </div>
                )}

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
                      placeholder="John Smith"
                      className="w-full px-4 py-3 border border-[#1C3220]/15 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#2E6B3E]/40 focus:border-[#2E6B3E] transition bg-[#F7F9F6]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#1C3220] uppercase tracking-wider mb-1.5">
                      Email address <span className="text-[#2E6B3E]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 border border-[#1C3220]/15 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#2E6B3E]/40 focus:border-[#2E6B3E] transition bg-[#F7F9F6]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#1C3220] uppercase tracking-wider mb-1.5">
                    Enquiry type <span className="text-[#2E6B3E]">*</span>
                  </label>
                  <select
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className="w-full px-4 py-3 border border-[#1C3220]/15 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#2E6B3E]/40 focus:border-[#2E6B3E] transition bg-[#F7F9F6]"
                  >
                    {SUBJECTS.map((s) => <option key={s}>{s}</option>)}
                  </select>
                </div>

                {isBusiness && (
                  <div>
                    <label className="block text-xs font-semibold text-[#1C3220] uppercase tracking-wider mb-1.5">
                      Business name
                    </label>
                    <input
                      type="text"
                      value={form.businessName}
                      onChange={(e) => setForm({ ...form, businessName: e.target.value })}
                      placeholder="e.g. Emily's Restaurant"
                      className="w-full px-4 py-3 border border-[#1C3220]/15 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#2E6B3E]/40 focus:border-[#2E6B3E] transition bg-[#F7F9F6]"
                    />
                  </div>
                )}

                <div>
                  <label className="block text-xs font-semibold text-[#1C3220] uppercase tracking-wider mb-1.5">
                    Message <span className="text-[#2E6B3E]">*</span>
                  </label>
                  <textarea
                    required
                    rows={6}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us what you need..."
                    className="w-full px-4 py-3 border border-[#1C3220]/15 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#2E6B3E]/40 focus:border-[#2E6B3E] transition bg-[#F7F9F6] resize-none"
                  />
                  <p className="text-xs text-[#1C3220]/40 mt-1 text-right">{form.message.length}/3000</p>
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full flex items-center justify-center gap-2 bg-[#1C3220] hover:bg-[#2E6B3E] disabled:opacity-60 text-white py-3.5 rounded-full font-bold text-sm transition-colors"
                >
                  {status === "sending" ? (
                    <><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />Sending…</>
                  ) : (
                    <><Send className="w-4 h-4" />Send Message</>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
