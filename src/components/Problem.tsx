import { Section } from "./ui/Section";
import { Reveal } from "./ui/Reveal";

const temptations = [
  "Hiring a full development team",
  "Designing every screen",
  "Building mobile apps first",
  "Setting up production infrastructure",
  "Payments, admin panels, and extras",
  "Dozens of features from the original idea",
];

export function Problem() {
  return (
    <Section>
      <Reveal>
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-bronze-400">
              The problem
            </p>
            <h2 className="mt-3 max-w-xl text-3xl font-medium tracking-tight text-ink-50 sm:text-4xl">
              Building the whole thing shouldn&apos;t be your first step.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-300">
              Someone has an idea. Then they start planning the entire product —
              months of work and lakhs of investment — before answering the only
              question that matters:
            </p>
            <p className="mt-6 max-w-lg text-xl font-medium tracking-tight text-ink-50 sm:text-2xl">
              Does anyone actually want this?
            </p>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-300">
              BuildProof Studio exists so you can find out without committing to a full
              build first.
            </p>
          </div>
          <ul className="space-y-2">
            {temptations.map((item) => (
              <li
                key={item}
                className="rounded-xl border border-white/8 bg-white/[0.025] px-4 py-3.5 text-sm text-ink-200"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </Section>
  );
}
