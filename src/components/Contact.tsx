"use client";

import { FormEvent, useState } from "react";
import { Section } from "./ui/Section";

type Status = "idle" | "sending" | "done" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    setStatus("sending");
    setMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          what: data.what,
          who: data.who,
          demonstrate: data.demonstrate,
          website: data.website,
        }),
      });

      const payload = (await response.json().catch(() => ({}))) as {
        error?: string;
      };

      if (!response.ok) {
        setStatus("error");
        setMessage(payload.error || "Something went wrong. Please try again.");
        return;
      }

      setStatus("done");
      form.reset();
    } catch {
      setStatus("error");
      setMessage("Could not reach the server. Check your connection and try again.");
    }
  }

  return (
    <Section id="contact">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-bronze-400">
            Contact
          </p>
          <h2 className="mt-3 text-3xl font-medium tracking-tight sm:text-4xl">
            Tell us what you&apos;re trying to prove.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-300">
            Share the idea as it stands. We&apos;ll come back with questions,
            a sense of scope, and whether a BuildProof Sprint is the right first
            step.
          </p>
        </div>

        <form
          onSubmit={onSubmit}
          className="relative rounded-3xl border border-white/10 bg-white/[0.02] p-5 sm:p-8"
        >
          <Field label="Name" name="name" autoComplete="name" required />
          <Field
            label="Email"
            name="email"
            type="email"
            autoComplete="email"
            required
          />
          <Field
            label="What are you trying to build?"
            name="what"
            as="textarea"
            required
          />
          <Field label="Who is it for?" name="who" as="textarea" required />
          <Field
            label="What would you like the prototype to demonstrate?"
            name="demonstrate"
            as="textarea"
            required
          />
          <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
            <label htmlFor="website">Website</label>
            <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
          </div>
          <button
            type="submit"
            disabled={status === "sending"}
            className="inline-flex w-full items-center justify-center rounded-full bg-ink-50 px-5 py-3 text-sm font-medium text-ink-950 transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
          >
            {status === "sending" ? "Sending…" : "Start with BuildProof Studio"}
          </button>

          {status === "done" && (
            <p className="mt-4 text-sm text-bronze-300" role="status">
              Thanks — your idea is in. We&apos;ll reply to the email you shared.
            </p>
          )}
          {status === "error" && (
            <p className="mt-4 text-sm text-red-300" role="alert">
              {message}
            </p>
          )}
        </form>
      </div>
    </Section>
  );
}

function Field({
  label,
  name,
  type = "text",
  as,
  required,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  as?: "textarea";
  required?: boolean;
  autoComplete?: string;
}) {
  const cls =
    "w-full rounded-xl border border-white/10 bg-ink-950 px-3 py-2.5 text-sm text-ink-50 placeholder:text-ink-500";

  return (
    <div className="mb-4">
      <label htmlFor={name} className="mb-2 block text-sm text-ink-200">
        {label}
      </label>
      {as === "textarea" ? (
        <textarea id={name} name={name} required={required} rows={3} className={cls} />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          required={required}
          autoComplete={autoComplete}
          className={cls}
        />
      )}
    </div>
  );
}
