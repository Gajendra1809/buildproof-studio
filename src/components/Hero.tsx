import { Button } from "./ui/Button";
import { Container } from "./ui/Container";
import { HeroVisual } from "./HeroVisual";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24">
      <div
        className="pointer-events-none absolute inset-0 bg-grain"
        aria-hidden="true"
      />
      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-ink-200">
            <span className="h-1.5 w-1.5 rounded-full bg-bronze-400" />
            BuildProof Sprint · 14–21 days
          </p>
          <h1 className="text-balance text-4xl font-medium leading-[1.08] tracking-tight text-ink-50 sm:text-5xl md:text-6xl">
            Have a software idea? Prove it before you build it.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-ink-300 sm:text-lg">
            BuildProof Studio turns software ideas into working prototypes in 14–21
            days, so you can test the concept with real people before investing
            in a full product.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="#contact" className="w-full sm:w-auto">
              Build My Prototype
            </Button>
            <Button href="#how-it-works" variant="secondary" className="w-full sm:w-auto">
              See How It Works
            </Button>
          </div>
          <p className="mt-6 font-mono text-[12px] tracking-wide text-bronze-400/90 sm:text-[13px]">
            From idea → working prototype → real feedback → MVP
          </p>
        </div>
        <HeroVisual />
      </Container>
    </section>
  );
}
