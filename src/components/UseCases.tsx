import { Section } from "./ui/Section";
import { Reveal } from "./ui/Reveal";

const cases = [
  {
    label: "Business operations",
    quote: "Replace a spreadsheet-based workflow with a working internal tool.",
  },
  {
    label: "Marketplace",
    quote: "Test the core buyer/seller workflow before building the entire marketplace.",
  },
  {
    label: "SaaS",
    quote: "Turn a SaaS concept into a clickable, functional product experience.",
  },
  {
    label: "Customer portal",
    quote: "Give customers a working portal before investing in a complete platform.",
  },
  {
    label: "AI product",
    quote: "Test an AI-powered workflow with real users before building the complete product.",
  },
];

export function UseCases() {
  return (
    <Section>
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.16em] text-bronze-400">
          Example work
        </p>
        <h2 className="mt-3 max-w-xl text-3xl font-medium tracking-tight sm:text-4xl">
          The kind of ideas we turn into prototypes.
        </h2>
      </Reveal>
      <div className="mt-10 grid gap-3">
        {cases.map((item, i) => (
          <Reveal key={item.label} delay={i * 50}>
            <article className="grid gap-2 rounded-2xl border border-white/8 px-5 py-5 sm:grid-cols-[200px_1fr] sm:items-baseline sm:gap-8">
              <h3 className="font-mono text-xs uppercase tracking-[0.12em] text-bronze-400">
                {item.label}
              </h3>
              <p className="text-base text-ink-100">{item.quote}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
