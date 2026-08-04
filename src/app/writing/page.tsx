import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Notes and essays on Bayesian modelling, scientific ML, and multi-agent reasoning.",
};

const upcomingNotes = [
  "Building a hierarchical Bayesian football model",
  "Understanding physics-informed neural networks",
  "Designing multi-agent AI systems",
  "Lessons from implementing ML projects",
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
          Longer-form thinking on the work above — methods, mistakes, and the
          ideas that stuck. Nothing published yet; these are the threads in
          progress.
        </p>
      </header>

      <ul className="divide-y divide-rule border-y border-rule">
        {upcomingNotes.map((title) => (
          <li
            key={title}
            className="flex items-baseline justify-between gap-6 py-5"
          >
            <span className="font-serif text-xl text-ink">{title}</span>
            <span className="shrink-0 font-mono text-xs tracking-wide text-muted">
              Soon
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
