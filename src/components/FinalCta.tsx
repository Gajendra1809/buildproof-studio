import { Button } from "./ui/Button";
import { Section } from "./ui/Section";

export function FinalCta() {
  return (
    <Section className="pb-24 pt-8 sm:pb-32">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">
          Don&apos;t spend months building an assumption.
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-ink-300">
          Build something. Put it in front of people. Learn what works.
        </p>
        <div className="mt-8">
          <Button href="#contact">Build My Prototype</Button>
        </div>
      </div>
    </Section>
  );
}
