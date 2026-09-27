import { Section } from "./ui/Section";
import { Reveal } from "./ui/Reveal";

const items = [
  "Working web prototype",
  "Core user workflow",
  "Key product screens",
  "Responsive interface",
  "Realistic sample data",
  "Deployed demo URL",
  "Basic backend/API where required",
  "1–2 rounds of revisions",
  "Clear direction for the next phase",
];

export function WhatYouGet() {
  return (
    <Section>
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.16em] text-bronze-400">
          Deliverables
        </p>
        <h2 className="mt-3 text-3xl font-medium tracking-tight sm:text-4xl">
          What you walk away with
        </h2>
      </Reveal>
      <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, i) => (
          <Reveal key={item} delay={i * 40}>
            <li className="flex items-center gap-3 rounded-2xl border border-white/8 bg-ink-900/50 px-4 py-4 text-sm text-ink-100">
              <CheckIcon />
              {item}
            </li>
          </Reveal>
        ))}
      </ul>
      <p className="mt-8 max-w-2xl text-sm leading-relaxed text-ink-300">
        The goal isn&apos;t to build everything. It&apos;s to build enough to
        learn something important.
      </p>
    </Section>
  );
}

function CheckIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      aria-hidden="true"
      className="shrink-0 text-bronze-400"
    >
      <path
        d="M4 9.2 7.1 12.4 14 5.2"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
