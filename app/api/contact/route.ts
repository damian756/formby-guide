import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { DELIVERY_EMAIL } from "@/lib/contact";
import { buildAutoReply, buildEnquiryEmail, logSendError, parseEnquiry } from "@/lib/enquiry-email";

// Every enquiry (contact form, advertising, claim a listing) goes to one inbox.
const TO_EMAIL = DELIVERY_EMAIL;
// Sent from the site's own Resend-verified domain. RESEND_FROM_EMAIL (Vercel) overrides it.
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || "FormbyGuide <noreply@formbyguide.co.uk>";

export async function POST(req: NextRequest) {
  try {
    const parsed = parseEnquiry(await req.json());
    // Honeypot filled: answer as if sent, send nothing.
    if (parsed.kind === "honeypot") return NextResponse.json({ success: true });
    if (parsed.kind === "error") return NextResponse.json({ error: parsed.error }, { status: 400 });

    const { enquiry, replyTo } = parsed;
    const resend = new Resend(process.env.RESEND_API_KEY);

    try {
      const { error } = await resend.emails.send(buildEnquiryEmail(enquiry, { from: FROM_EMAIL, to: TO_EMAIL, replyTo }));
      if (error) {
        logSendError("enquiry", error);
        return NextResponse.json({ error: "Failed to send email. Please try again." }, { status: 500 });
      }
    } catch (err) {
      logSendError("enquiry", err);
      return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 });
    }

    // Auto-reply to sender. The enquiry has arrived either way, so a failure is logged only.
    try {
      const { error } = await resend.emails.send(buildAutoReply({ from: FROM_EMAIL, to: replyTo }));
      if (error) logSendError("auto-reply", error);
    } catch (err) {
      logSendError("auto-reply", err);
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[contact] route error:", err instanceof Error ? err.name : "Error");
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }
}
