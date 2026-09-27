import { Section } from "./ui/Section";
import { Reveal } from "./ui/Reveal";

const outcomes = [
  "Demonstrate the idea",
  "Show it to potential customers",
  "Get early, specific feedback",
  "Present it to partners or investors",
  "See what should actually be built",
  "Decide whether to invest in an MVP",
];

export function Solution() {
  return (
    <Section className="pt-0">
      <Reveal>
        <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-6 sm:p-10">
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-bronze-400">
            The approach
          </p>
          <h2 className="mt-3 max-w-2xl text-3xl font-medium tracking-tight sm:text-4xl">
            Build the smallest thing that proves the idea.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-300">
            We don&apos;t start by asking what software you want built. We start
            by asking what you&apos;re trying to prove. Then we identify the
            core workflow and turn it into a focused, working web prototype —
            something you can actually put in front of people, not a throwaway
            mock.
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {outcomes.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-ink-100">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-bronze-400" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </Section>
  );
}
