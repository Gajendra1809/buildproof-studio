import { Section } from "./ui/Section";
import { Reveal } from "./ui/Reveal";

const stages = [
  {
    n: "01",
    title: "Idea",
    body: "You have a problem worth solving — and a sense of who it is for.",
  },
  {
    n: "02",
    title: "BuildProof Sprint",
    body: "A working prototype around the core workflow, ready to demonstrate.",
  },
  {
    n: "03",
    title: "Validation",
    body: "Real users react. You learn what lands, what confuses, and what to drop.",
  },
  {
    n: "04",
    title: "MVP",
    body: "Build the production-ready product around what you actually learned.",
  },
  {
    n: "05",
    title: "Scale",
    body: "More features, users, integrations, and infrastructure — when they are justified.",
  },
];

export function Journey() {
  return (
    <Section>
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.16em] text-bronze-400">
          After the sprint
        </p>
        <h2 className="mt-3 max-w-2xl text-3xl font-medium tracking-tight sm:text-4xl">
          If the idea works, we keep building.
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-300">
          You do not need to commit to a huge development project on day one.
          Start with a prototype. Continue only if the idea earns the next
          stage.
        </p>
      </Reveal>
      <ol className="mt-12 space-y-0">
        {stages.map((stage, i) => (
          <li key={stage.n} className="relative grid gap-2 pl-8 sm:grid-cols-[160px_1fr] sm:gap-8 sm:pl-10">
            {i < stages.length - 1 && (
              <span
                className="absolute left-[9px] top-7 h-[calc(100%-8px)] w-px bg-white/10 sm:left-[11px]"
                aria-hidden="true"
              />
            )}
            <span
              className="absolute left-0 top-1.5 flex h-[19px] w-[19px] items-center justify-center rounded-full border border-bronze-400/50 bg-ink-950"
              aria-hidden="true"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-bronze-400" />
            </span>
            <p className="font-mono text-xs text-ink-400">
              Stage {stage.n}
            </p>
            <div className="pb-10">
              <h3 className="text-lg font-medium tracking-tight">{stage.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-300">{stage.body}</p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
