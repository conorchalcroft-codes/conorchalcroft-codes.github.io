import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "About this personal site for projects in machine learning, AI, and scientific computing.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:px-8 sm:py-24">
      <header className="mb-12 space-y-4">
        <p className="font-mono text-xs tracking-[0.2em] text-muted uppercase">
          About
        </p>
        <h1 className="font-serif text-4xl tracking-tight text-ink sm:text-5xl">
          About this site
        </h1>
      </header>

      <div className="space-y-6 text-lg leading-relaxed text-muted">
        <p>
          This is a personal site for projects I&apos;m building in and around
          machine learning, statistics and scientific computing. I like exploring
          ideas by actually making something, then seeing where it goes.
        </p>
        <p>
          <Link href="/projects/footynomics" className="text-ink link-underline">
            Footynomics
          </Link>{" "}
          is the football one: using data science to understand the game, and
          using the game to learn the methods.{" "}
          <Link href="/projects/agora" className="text-ink link-underline">
            Agora
          </Link>{" "}
          is an agentic app I built to get some hands-on experience deploying
          that kind of system. The agents try to reason toward an answer
          together rather than debate for the sake of it. It&apos;s a bit of
          fun, not super serious.{" "}
          <Link
            href="/projects/first-principles"
            className="text-ink link-underline"
          >
            First Principles
          </Link>{" "}
          will be a deep dive into physics-informed machine learning. That one
          isn&apos;t available yet.
        </p>
        <p>
          If something here is interesting,{" "}
          <Link href="/contact" className="text-ink link-underline">
            say hello
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
