import { Section } from "./ui/Section";
import { Reveal } from "./ui/Reveal";

const steps = [
  {
    n: "01",
    title: "Tell us the idea",
    body: "You explain the problem, the people it is for, and what you’re trying to build. A full spec is not required.",
  },
  {
    n: "02",
    title: "Find the core",
    body: "We identify the smallest workflow that needs to exist for the concept to be real — and leave the rest for later.",
  },
  {
    n: "03",
    title: "Build the prototype",
    body: "We design and develop the key screens and that workflow into a working web prototype, then put it online.",
  },
  {
    n: "04",
    title: "Test & decide",
    body: "You put it in front of real users and use the feedback to decide what comes next — including whether to build an MVP.",
  },
];

export function HowItWorks() {
  return (
    <Section id="how-it-works">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.16em] text-bronze-400">
          How it works
        </p>
        <h2 className="mt-3 max-w-xl text-3xl font-medium tracking-tight sm:text-4xl">
          Four steps. One focused sprint.
        </h2>
      </Reveal>
      <ol className="mt-10 grid gap-4 sm:grid-cols-2">
        {steps.map((step, i) => (
          <Reveal key={step.n} delay={i * 80}>
            <li className="h-full rounded-2xl border border-white/8 bg-white/[0.02] p-6">
              <p className="font-mono text-xs text-bronze-400">{step.n}</p>
              <h3 className="mt-3 text-lg font-medium tracking-tight">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-300">{step.body}</p>
            </li>
          </Reveal>
        ))}
      </ol>
      <p className="mt-10 text-center font-mono text-sm tracking-wide text-bronze-400">
        Prototype → Feedback → MVP
      </p>
    </Section>
  );
}
