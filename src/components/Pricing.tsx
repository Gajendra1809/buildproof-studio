import { Button } from "./ui/Button";
import { Section } from "./ui/Section";
import { Reveal } from "./ui/Reveal";

const included = [
  "Discovery session",
  "Product workflow definition",
  "UI design",
  "Core prototype development",
  "Deployment",
  "Demo walkthrough",
  "1–2 revision rounds",
];

export function Pricing() {
  return (
    <Section id="sprint">
      <Reveal>
        <div className="mx-auto max-w-2xl rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-transparent p-6 sm:p-10">
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-bronze-400">
            BuildProof Sprint
          </p>
          <h2 className="mt-3 text-3xl font-medium tracking-tight sm:text-4xl">
            A focused sprint to turn your software idea into a working prototype.
          </h2>
          <p className="mt-6 text-sm text-ink-300">Typical duration: 14–21 days</p>
          <ul className="mt-8 grid gap-2 sm:grid-cols-2">
            {included.map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-ink-200">
                <span className="h-1 w-1 rounded-full bg-bronze-400" />
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <Button href="#contact">Discuss My Idea</Button>
          </div>
          <p className="mt-5 text-xs leading-relaxed text-ink-400">
            Pricing is based on a discussion of scope and complexity — we
            don&apos;t publish a fixed rate. If you continue with us for the
            MVP, we can discuss how the prototype work relates to the next
            project.
          </p>
        </div>
      </Reveal>
    </Section>
  );
}
