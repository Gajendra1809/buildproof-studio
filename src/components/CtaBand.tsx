import { Button } from "./ui/Button";
import { Section } from "./ui/Section";
import { Reveal } from "./ui/Reveal";

export function CtaBand() {
  return (
    <Section className="py-12 sm:py-16">
      <Reveal>
        <div className="rounded-3xl border border-white/10 px-6 py-12 text-center sm:px-12">
          <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">
            Have an idea? Let&apos;s find out what it needs.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-ink-300">
            You don&apos;t need a complete specification. Start with the problem
            you&apos;re trying to solve.
          </p>
          <div className="mt-7">
            <Button href="#contact">Start a Conversation</Button>
          </div>
          <p className="mx-auto mt-4 max-w-md text-sm text-ink-400">
            Tell us what you&apos;re thinking. We&apos;ll help you figure out
            what should actually be built first.
          </p>
        </div>
      </Reveal>
    </Section>
  );
}
