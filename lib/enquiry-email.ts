// Pure helpers for the contact-form emails: field limits, the honeypot, request
// checking, escaping, the reply-to check, the two messages, and error logging.
// No imports, so tests/enquiry-email.test.mjs can load this file directly with
// Node, and the client forms can import the limits. Nothing here sends anything.

export type Enquiry = {
  name: string;
  email: string;
  subject: string;
  message: string;
  businessName?: string;
};

export type OutgoingEmail = {
  from: string;
  to: string;
  replyTo?: string;
  subject: string;
  html: string;
};

/** Longest accepted value for each field, in characters. */
export const LIMITS = { name: 100, subject: 100, businessName: 100, message: 3000 } as const;

/**
 * Hidden field on the contact and claim-listing forms. People never see it;
 * a bot that fills it gets an ok response and nothing is sent.
 */
export const HONEYPOT_FIELD = "website";

export type ParsedEnquiry =
  | { kind: "ok"; enquiry: Enquiry; replyTo: string }
  | { kind: "honeypot" }
  | { kind: "error"; error: string };

const FIELD_LABEL: Record<keyof typeof LIMITS, string> = {
  name: "Name",
  subject: "Subject",
  businessName: "Business name",
  message: "Message",
};

/** Check a contact-route request body. Sends nothing. */
export function parseEnquiry(body: unknown): ParsedEnquiry {
  const b = (typeof body === "object" && body !== null ? body : {}) as Record<string, unknown>;

  const trap = b[HONEYPOT_FIELD];
  if (trap !== undefined && trap !== null && String(trap).trim() !== "") return { kind: "honeypot" };

  for (const key of ["name", "email", "subject", "message", "businessName"]) {
    if (b[key] !== undefined && b[key] !== null && typeof b[key] !== "string") {
      return { kind: "error", error: "Invalid request." };
    }
  }
  const str = (key: string) => (typeof b[key] === "string" ? (b[key] as string) : "");
  const name = str("name").trim();
  const email = str("email").trim();
  const subject = str("subject").trim();
  const message = str("message").trim();
  const businessName = str("businessName").trim();

  if (!name || !email || !message) return { kind: "error", error: "Name, email and message are required." };
  const replyTo = plainAddress(email);
  if (!replyTo || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return { kind: "error", error: "Invalid email address." };

  const values = { name, subject, businessName, message };
  for (const key of Object.keys(LIMITS) as (keyof typeof LIMITS)[]) {
    if (values[key].length > LIMITS[key]) {
      return { kind: "error", error: `${FIELD_LABEL[key]} is too long (max ${LIMITS[key]} characters).` };
    }
  }

  return {
    kind: "ok",
    enquiry: { name, email: replyTo, subject, message, businessName: businessName || undefined },
    replyTo,
  };
}

/** Escape a user-supplied value for an HTML email body. */
export function escapeHtml(value: unknown): string {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/** A value safe for an email subject line: no CR or LF. */
export function cleanSubject(value: unknown): string {
  return String(value ?? "").replace(/[\r\n]+/g, " ").trim();
}

/**
 * The enquirer's address if it is one plain address (no commas, angle
 * brackets, quotes, semicolons, spaces or newlines; at most 254 characters),
 * otherwise null.
 */
export function plainAddress(value: unknown): string | null {
  if (typeof value !== "string") return null;
  const email = value.trim();
  if (email.length === 0 || email.length > 254) return null;
  if (/[\s,<>;"]/.test(email)) return null;
  if (!/^[^@]+@[^@]+\.[^@]+$/.test(email)) return null;
  return email;
}

const HEADER = `
          <div style="border-bottom: 3px solid #C9A96E; padding-bottom: 16px; margin-bottom: 24px;">
            <h1 style="font-size: 24px; color: #1C3220; margin: 0;">
              Formby<span style="color: #2E6B3E;">Guide</span><span style="color: #999; font-size: 14px;">.co.uk</span>
            </h1>`;

/** The enquiry sent to our inbox, replying to the enquirer. */
export function buildEnquiryEmail(enquiry: Enquiry, opts: { from: string; to: string; replyTo: string }): OutgoingEmail {
  const topic = `${cleanSubject(enquiry.subject)}${enquiry.businessName ? `: ${cleanSubject(enquiry.businessName)}` : ""}`;
  const name = escapeHtml(enquiry.name);
  const email = escapeHtml(enquiry.email);
  return {
    from: opts.from,
    to: opts.to,
    replyTo: opts.replyTo,
    subject: `[FormbyGuide] ${topic}`,
    html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; background: #F7F9F6; padding: 32px; border-radius: 8px;">${HEADER}
            <p style="color: #666; font-size: 13px; margin: 4px 0 0;">New contact form submission</p>
          </div>

          <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
            <tr>
              <td style="padding: 8px 0; color: #888; font-size: 13px; width: 110px; vertical-align: top;">Subject</td>
              <td style="padding: 8px 0; color: #1C3220; font-weight: bold;">${escapeHtml(topic)}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #888; font-size: 13px; vertical-align: top;">From</td>
              <td style="padding: 8px 0; color: #1C3220;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #888; font-size: 13px; vertical-align: top;">Email</td>
              <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #2E6B3E;">${email}</a></td>
            </tr>
          </table>

          <div style="background: white; border: 1px solid #e5e7eb; border-radius: 6px; padding: 20px; margin-bottom: 24px;">
            <p style="color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 12px;">Message</p>
            <p style="color: #1C3220; line-height: 1.7; margin: 0; white-space: pre-wrap;">${escapeHtml(enquiry.message)}</p>
          </div>

          <p style="color: #999; font-size: 12px; text-align: center;">
            Reply directly to this email to respond to ${name}.<br/>
            FormbyGuide.co.uk: Built by <a href="https://churchtownmedia.co.uk" style="color: #2E6B3E;">Churchtown Media</a>
          </p>
        </div>
      `,
  };
}

/**
 * The acknowledgement sent back to the enquirer. Fixed text only: nothing the
 * enquirer typed (not even their name) goes into it, so the form cannot be used
 * to send someone else a message.
 */
export function buildAutoReply(opts: { from: string; to: string }): OutgoingEmail {
  return {
    from: opts.from,
    to: opts.to,
    subject: "Thanks for getting in touch: FormbyGuide.co.uk",
    html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; background: #F7F9F6; padding: 32px; border-radius: 8px;">${HEADER}
          </div>
          <p style="color: #1C3220; font-size: 16px;">Hello,</p>
          <p style="color: #555; line-height: 1.7;">
            Thanks for getting in touch. We've received your message and will get back to you within 1 to 2 working days.
          </p>
          <p style="color: #555; line-height: 1.7;">
            In the meantime, feel free to explore the guide at
            <a href="https://www.formbyguide.co.uk" style="color: #2E6B3E;">formbyguide.co.uk</a>.
          </p>
          <p style="color: #1C3220; margin-top: 24px;">The FormbyGuide Team</p>
          <p style="color: #999; font-size: 12px; margin-top: 24px;">
            Built by <a href="https://churchtownmedia.co.uk" style="color: #2E6B3E;">Churchtown Media</a>
          </p>
        </div>
      `,
  };
}

/**
 * Log a failed send so it shows in Vercel's logs: the error's name and message
 * only, never the enquirer's text.
 */
export function logSendError(which: string, error: unknown, log: (line: string) => void = console.error): void {
  const e = (typeof error === "object" && error !== null ? error : {}) as { name?: unknown; message?: unknown };
  const name = typeof e.name === "string" ? e.name : "Error";
  const message = typeof e.message === "string" ? e.message : typeof error === "string" ? error : "unknown error";
  log(`[contact] ${which} email failed: ${name}: ${message}`);
}
