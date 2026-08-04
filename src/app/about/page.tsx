import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "About this personal research lab exploring machine learning, AI, and scientific computing.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:px-8 sm:py-24">
      <header className="mb-12 space-y-4">
        <p className="font-mono text-xs tracking-[0.2em] text-muted uppercase">
          About
        </p>
        <h1 className="font-serif text-4xl tracking-tight text-ink sm:text-5xl">
          A space for exploration
        </h1>
      </header>

      <div className="space-y-6 text-lg leading-relaxed text-muted">
        <p>
          This site is where I explore things I&apos;m interested in and build
          projects around them — a digital garden at the intersection of machine
          learning, AI, statistics, and scientific computing.
        </p>
        <p>
          The work is driven by curiosity: comparing modelling approaches,
          making uncertainty visible, and asking whether systems can reason more
          carefully when they collaborate.
        </p>
        <p>
          Expect unfinished edges, open questions, and writing that prioritises
          understanding over polish. If something here resonates,{" "}
          <Link href="/contact" className="text-ink link-underline">
            say hello
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
