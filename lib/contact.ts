// Our email addresses. Server code only: never import this file from a
// "use client" component, so the delivery address stays out of the browser.
// Checked by tests/enquiry-email.test.mjs.

// Where every enquiry is delivered: the `to` of the contact form, advertising
// and claim-a-listing notifications. One inbox. Never shown to visitors.
export const DELIVERY_EMAIL = "damian@churchtownmedia.co.uk";

// The only address of ours a visitor sees: mailto links, the footer, the
// advertise, privacy and terms pages. Change the public address here.
export const DISPLAY_EMAIL = "hello@seftoncoast.network";
