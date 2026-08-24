import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Notes on Bayesian modelling, scientific ML, and multi-agent apps.",
};

const upcomingNotes = [
  {
    title: "How Agora actually works",
    lab: "Agora",
  },
  {
    title: "Scoring football models without leaking the future",
    lab: "Footynomics",
  },
  {
    title: "A hierarchical Bayesian football model",
    lab: "Footynomics",
  },
  {
    title: "Physics-informed neural networks",
    lab: "First Principles",
  },
];

export default function WritingPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:px-8 sm:py-24">
      <header className="mb-14 space-y-4">
        <p className="font-mono text-xs tracking-[0.2em] text-muted uppercase">
          Writing
        </p>
        <h1 className="font-serif text-4xl tracking-tight text-ink sm:text-5xl">
          Notes from the lab
        </h1>
        <p className="text-lg leading-relaxed text-muted">
          I&apos;ll write some of this up properly at some point. Nothing
          published yet, but these are on the list.
        </p>
      </header>

      <ul className="divide-y divide-rule border-y border-rule">
        {upcomingNotes.map(({ title, lab }) => (
          <li
            key={title}
            className="flex flex-col gap-2 py-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
          >
            <div className="space-y-1">
              <span className="font-serif text-xl text-ink">{title}</span>
              <p className="font-mono text-[0.65rem] tracking-[0.14em] text-muted uppercase">
                {lab}
              </p>
            </div>
            <span className="shrink-0 font-mono text-xs tracking-wide text-muted">
              Soon
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
