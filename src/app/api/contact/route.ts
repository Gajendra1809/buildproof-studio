import { NextResponse } from "next/server";

const MAX = {
  name: 120,
  email: 200,
  what: 4000,
  who: 2000,
  demonstrate: 4000,
} as const;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Payload = {
  name: string;
  email: string;
  what: string;
  who: string;
  demonstrate: string;
  website?: string;
};

function readString(value: unknown, max: number) {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, max);
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;

  if (!apiKey || !toEmail) {
    return NextResponse.json(
      {
        error:
          "Contact email is not configured yet. Add RESEND_API_KEY and CONTACT_TO_EMAIL.",
      },
      { status: 503 }
    );
  }

  let body: Payload;
  try {
    body = (await request.json()) as Payload;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  if (readString(body.website, 200)) {
    return NextResponse.json({ ok: true });
  }

  const name = readString(body.name, MAX.name);
  const email = readString(body.email, MAX.email).toLowerCase();
  const what = readString(body.what, MAX.what);
  const who = readString(body.who, MAX.who);
  const demonstrate = readString(body.demonstrate, MAX.demonstrate);

  if (!name || !email || !what || !who || !demonstrate) {
    return NextResponse.json(
      { error: "Please fill in all required fields." },
      { status: 400 }
    );
  }

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email." }, { status: 400 });
  }

  // Sandbox sender. To use a BuildProof Studio address, verify a domain at resend.com/domains
  // and set CONTACT_FROM_EMAIL to something like BuildProof Studio <hello@yourdomain.com>.
  const from = process.env.CONTACT_FROM_EMAIL || "BuildProof Studio <onboarding@resend.dev>";
  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    "",
    "What they are trying to build:",
    what,
    "",
    "Who it is for:",
    who,
    "",
    "What the prototype should demonstrate:",
    demonstrate,
  ].join("\n");

  const html = `
    <div style="font-family:Georgia,serif;background:#08090a;color:#f3f1ec;padding:32px">
      <p style="color:#d4a574;font-size:12px;letter-spacing:0.16em;text-transform:uppercase;margin:0 0 16px">BuildProof Studio enquiry</p>
      <h1 style="font-size:22px;font-weight:500;margin:0 0 24px">New prototype conversation</h1>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>What they are trying to build</strong></p>
      <p style="white-space:pre-wrap;color:#cfc8b8">${escapeHtml(what)}</p>
      <p><strong>Who it is for</strong></p>
      <p style="white-space:pre-wrap;color:#cfc8b8">${escapeHtml(who)}</p>
      <p><strong>What the prototype should demonstrate</strong></p>
      <p style="white-space:pre-wrap;color:#cfc8b8">${escapeHtml(demonstrate)}</p>
    </div>
  `;

  const payload: Record<string, unknown> = {
    from,
    to: [toEmail],
      subject: `BuildProof Studio enquiry from ${name}`,
    text,
    html,
  };

  const replyDomain = email.split("@")[1];
  if (replyDomain && !["example.com", "test.com", "email.com"].includes(replyDomain)) {
    payload.reply_to = email;
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const detail = await res.text();
    console.error("Resend error", res.status, detail);
    return NextResponse.json(
      { error: resendUserMessage(res.status, detail) },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}

function resendUserMessage(status: number, detail: string) {
  const lower = detail.toLowerCase();
  if (status === 403 && lower.includes("own email")) {
    return "CONTACT_TO_EMAIL must be the same address you used to create the Resend account until you verify your own domain.";
  }
  if (status === 403 && lower.includes("not verified")) {
    return "Resend needs a verified sending domain, or the sandbox sender onboarding@resend.dev with CONTACT_TO_EMAIL set to your Resend login email.";
  }
  if (status === 401) {
    return "Resend rejected the API key. Check RESEND_API_KEY in .env.local.";
  }
  return "Could not send the message. Please try again.";
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
