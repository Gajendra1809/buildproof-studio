const stages = ["Idea", "Prototype", "Validation", "MVP"] as const;

export function HeroVisual() {
  return (
    <div className="mt-14 overflow-hidden sm:mt-16">
      <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl border border-white/10 bg-ink-900/60 p-4 shadow-glow sm:p-6">
        <div className="mb-5 flex items-center justify-between gap-3">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-400">
            Product path
          </p>
          <div className="flex gap-1.5" aria-hidden="true">
            {stages.map((stage) => (
              <span key={stage} className="stage-dot h-2 w-2 rounded-full bg-white/20" />
            ))}
          </div>
        </div>

        <ol className="mb-5 grid grid-cols-4 gap-2 text-center text-[11px] sm:text-xs">
          {stages.map((stage) => (
            <li key={stage} className="text-ink-300">
              {stage}
            </li>
          ))}
        </ol>
        <div className="relative mb-5 hidden h-px overflow-hidden bg-white/10 sm:block" aria-hidden="true">
          <div className="absolute inset-y-0 left-0 h-px w-full pipeline-track">
            <div className="h-px w-1/4 bg-bronze-400" />
          </div>
        </div>

        <div className="overflow-hidden rounded-xl border border-white/8 bg-[#0c0d0f]">
          <div className="flex w-[400%] pipeline-track">
            <Panel title="Idea" caption="A problem worth solving">
              <NoteCard />
            </Panel>
            <Panel title="Prototype" caption="A working product you can show">
              <ProductCard />
            </Panel>
            <Panel title="Validation" caption="Real people, real reactions">
              <FeedbackCard />
            </Panel>
            <Panel title="MVP" caption="Build only what the feedback supports">
              <MvpCard />
            </Panel>
          </div>
        </div>
      </div>
    </div>
  );
}

function Panel({
  title,
  caption,
  children,
}: {
  title: string;
  caption: string;
  children: React.ReactNode;
}) {
  return (
    <div className="w-1/4 shrink-0 p-4 sm:p-6">
      <div className="mb-4 flex items-baseline justify-between gap-3">
        <h2 className="text-sm font-medium text-ink-50">{title}</h2>
        <p className="hidden text-xs text-ink-400 sm:block">{caption}</p>
      </div>
      {children}
    </div>
  );
}

function WindowChrome({ children }: { children: React.ReactNode }) {
  return (
    <div className="overflow-hidden rounded-lg border border-white/10 bg-[#141518]">
      <div className="flex items-center gap-1.5 border-b border-white/8 px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-white/15" />
        <span className="h-2 w-2 rounded-full bg-white/15" />
        <span className="h-2 w-2 rounded-full bg-white/15" />
      </div>
      {children}
    </div>
  );
}

function NoteCard() {
  return (
    <WindowChrome>
      <div className="space-y-3 p-4">
        <div className="h-2.5 w-24 rounded bg-bronze-400/50" />
        <div className="h-2 w-full rounded bg-white/10" />
        <div className="h-2 w-5/6 rounded bg-white/10" />
        <div className="h-2 w-2/3 rounded bg-white/10" />
        <div className="mt-4 grid grid-cols-3 gap-2">
          {["Users", "Problem", "Proof"].map((label) => (
            <div
              key={label}
              className="rounded-md border border-white/8 px-2 py-2 text-center font-mono text-[10px] text-ink-300"
            >
              {label}
            </div>
          ))}
        </div>
      </div>
    </WindowChrome>
  );
}

function ProductCard() {
  return (
    <WindowChrome>
      <div className="grid gap-3 p-4 sm:grid-cols-[140px_1fr]">
        <div className="space-y-2">
          <div className="h-8 rounded-md bg-white/8" />
          <div className="h-2 w-16 rounded bg-white/10" />
          <div className="h-2 w-20 rounded bg-white/10" />
          <div className="h-8 rounded-md bg-bronze-400/20 ring-1 ring-bronze-400/40" />
          <div className="h-2 w-14 rounded bg-white/10" />
        </div>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="h-2.5 w-28 rounded bg-white/20" />
            <div className="h-6 w-16 rounded-full bg-bronze-400/80" />
          </div>
          <div className="h-24 rounded-md border border-white/8 bg-white/[0.03]" />
          <div className="grid grid-cols-3 gap-2">
            <div className="h-10 rounded-md bg-white/8" />
            <div className="h-10 rounded-md bg-white/8" />
            <div className="h-10 rounded-md bg-white/8" />
          </div>
        </div>
      </div>
    </WindowChrome>
  );
}

function FeedbackCard() {
  return (
    <WindowChrome>
      <div className="space-y-3 p-4">
        {[
          { tag: "Would use this", tone: true },
          { tag: "Needs simpler first step", tone: false },
          { tag: "Show this to my team", tone: true },
        ].map((item) => (
          <div
            key={item.tag}
            className="flex items-center justify-between rounded-md border border-white/8 px-3 py-2.5"
          >
            <span className="text-xs text-ink-200">{item.tag}</span>
            <span
              className={`h-2 w-2 rounded-full ${item.tone ? "bg-bronze-400" : "bg-white/25"}`}
            />
          </div>
        ))}
      </div>
    </WindowChrome>
  );
}

function MvpCard() {
  return (
    <WindowChrome>
      <div className="p-4">
        <div className="mb-3 flex gap-2">
          {["Core workflow", "Payments later", "Scale later"].map((label, i) => (
            <span
              key={label}
              className={`rounded-full px-2.5 py-1 font-mono text-[10px] ${
                i === 0
                  ? "bg-bronze-400/20 text-bronze-300"
                  : "bg-white/5 text-ink-400"
              }`}
            >
              {label}
            </span>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="h-20 rounded-md border border-bronze-400/30 bg-bronze-400/10" />
          <div className="h-20 rounded-md border border-white/8 bg-white/[0.03]" />
          <div className="h-12 rounded-md border border-white/8 bg-white/[0.03]" />
          <div className="h-12 rounded-md border border-white/8 bg-white/[0.03]" />
        </div>
      </div>
    </WindowChrome>
  );
}
