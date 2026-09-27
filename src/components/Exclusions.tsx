import { Section } from "./ui/Section";
import { Reveal } from "./ui/Reveal";

const exclusions = [
  "Complex third-party integrations",
  "Production-scale infrastructure",
  "Advanced security and compliance work",
  "Large-scale data architecture",
  "Complex payment systems",
  "Native mobile applications",
  "Every feature from the original idea",
];

export function Exclusions() {
  return (
    <Section>
      <Reveal>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-bronze-400">
              Scope
            </p>
            <h2 className="mt-3 text-3xl font-medium tracking-tight sm:text-4xl">
              A prototype is not a production product.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink-300">
              The BuildProof Sprint is intentionally focused. That is how we
              keep it fast, affordable, and useful. We cut what does not help
              you prove the idea.
            </p>
            <p className="mt-5 text-base leading-relaxed text-ink-200">
              If the prototype proves the idea, we can scope and build the
              production MVP separately.
            </p>
          </div>
          <div>
            <p className="mb-3 text-sm text-ink-400">Not included in the sprint</p>
            <ul className="divide-y divide-white/8 rounded-2xl border border-white/8">
              {exclusions.map((item) => (
                <li key={item} className="flex items-center gap-3 px-4 py-3.5 text-sm text-ink-200">
                  <span className="font-mono text-ink-500" aria-hidden="true">
                    —
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
