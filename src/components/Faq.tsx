"use client";

import { useState } from "react";
import { Section } from "./ui/Section";

const faqs = [
  {
    q: "Do I need a technical specification?",
    a: "No. You can start with the idea, the problem, the people it is for, and the outcome you want. We will help define the initial scope.",
  },
  {
    q: "Is this a production-ready application?",
    a: "No. The BuildProof Sprint is designed to validate the core concept. A production MVP is a separate phase.",
  },
  {
    q: "How long does it take?",
    a: "Most prototype sprints are designed around 14–21 days, depending on scope.",
  },
  {
    q: "How much does it cost?",
    a: "We share a quote after we understand the idea, the core workflow, and what the prototype needs to demonstrate. There is no fixed public price.",
  },
  {
    q: "What technologies do you use?",
    a: "We use modern web technologies that fit the project. The important part is a working prototype you can demonstrate — not a particular stack.",
  },
  {
    q: "Can you build the full product after the prototype?",
    a: "Yes. If the prototype validates the idea, we can scope and build the production MVP as the next phase.",
  },
  {
    q: "What if I only have an idea?",
    a: "That is enough to start the conversation. We will help identify what needs to be proven first.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Section id="faq">
      <p className="font-mono text-xs uppercase tracking-[0.16em] text-bronze-400">FAQ</p>
      <h2 className="mt-3 text-3xl font-medium tracking-tight sm:text-4xl">
        Straight answers.
      </h2>
      <div className="mt-8 divide-y divide-white/8 rounded-2xl border border-white/8">
        {faqs.map((item, i) => {
          const isOpen = open === i;
          return (
            <div key={item.q}>
              <h3>
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-medium tracking-tight sm:text-base"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  {item.q}
                  <span
                    className={`text-ink-400 transition ${isOpen ? "rotate-45" : ""}`}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>
              </h3>
              <div
                hidden={!isOpen}
                className="px-5 pb-5 text-sm leading-relaxed text-ink-300"
              >
                {item.a}
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
