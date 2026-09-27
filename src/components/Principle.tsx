import { Container } from "./ui/Container";

export function Principle() {
  return (
    <div className="py-6 sm:py-10">
      <Container>
        <blockquote className="border-l-2 border-bronze-400/80 pl-6 sm:pl-8">
          <p className="max-w-3xl text-2xl font-medium tracking-tight text-ink-50 sm:text-3xl">
            We are not here to build everything. We are here to build the right
            first thing.
          </p>
        </blockquote>
      </Container>
    </div>
  );
}
