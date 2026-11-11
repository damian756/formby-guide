import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { DELIVERY_EMAIL } from "@/lib/contact";
import { buildAutoReply, buildEnquiryEmail, logSendError, plainAddress } from "@/lib/enquiry-email";

// Every enquiry (contact form, advertising, claim a listing) goes to one inbox.
const TO_EMAIL = DELIVERY_EMAIL;
// Sent from the site's own Resend-verified domain. RESEND_FROM_EMAIL (Vercel) overrides it.
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || "FormbyGuide <noreply@formbyguide.co.uk>";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, subject, message, businessName } = body as {
      name: string;
      email: string;
      subject: string;
      message: string;
      businessName?: string;
    };

    // Basic validation
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json({ error: "Name, email and message are required." }, { status: 400 });
    }
    const replyTo = plainAddress(email);
    if (!replyTo || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
    }
    if (message.length > 3000) {
      return NextResponse.json({ error: "Message is too long (max 3000 characters)." }, { status: 400 });
    }

    const enquiry = { name, email: replyTo, subject, message, businessName };
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
      const { error } = await resend.emails.send(buildAutoReply(enquiry, { from: FROM_EMAIL, to: replyTo }));
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
