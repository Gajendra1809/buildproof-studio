import { Section } from "./ui/Section";
import { Reveal } from "./ui/Reveal";

const cards = [
  {
    title: "I have a startup idea",
    body: "Turn your concept into something you can actually demonstrate — to customers, partners, or investors.",
  },
  {
    title: "I run a business",
    body: "Turn a manual process into a working software solution you can try with your team before a larger build.",
  },
  {
    title: "I want to validate an idea",
    body: "Build something small and real before making a large investment. Learn first, then spend.",
  },
  {
    title: "I’m an agency or consultant",
    body: "Bring us in as your technical execution partner when you need a prototype without standing up a full engineering team.",
  },
];

export function WhoItsFor() {
  return (
    <Section>
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.16em] text-bronze-400">
          Who this is for
        </p>
        <h2 className="mt-3 max-w-xl text-3xl font-medium tracking-tight sm:text-4xl">
          If you have an idea and a reason to test it.
        </h2>
      </Reveal>
      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {cards.map((card, i) => (
          <Reveal key={card.title} delay={i * 70}>
            <article className="h-full rounded-2xl border border-white/8 bg-white/[0.02] p-6 transition hover:border-white/16 hover:bg-white/[0.04]">
              <h3 className="text-lg font-medium tracking-tight">{card.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-300">{card.body}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
