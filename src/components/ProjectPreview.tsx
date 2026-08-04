import Link from "next/link";
import type { Project } from "@/data/projects";

type ProjectPreviewProps = {
  project: Project;
  index: number;
};

export function ProjectPreview({ project, index }: ProjectPreviewProps) {
  return (
    <article className="group grid gap-3 border-t border-rule py-10 first:border-t-0 first:pt-0 sm:grid-cols-[4rem_1fr] sm:gap-8">
      <span className="font-mono text-xs tracking-widest text-muted">
        {String(index + 1).padStart(2, "0")}
      </span>
      <div className="space-y-4">
        <div className="space-y-2">
          <p className="text-sm text-accent">{project.theme}</p>
          <h3 className="font-serif text-3xl tracking-tight text-ink sm:text-4xl">
            <Link
              href={`/projects/${project.slug}`}
              className="link-underline transition-colors group-hover:text-accent"
            >
              {project.title}
            </Link>
          </h3>
        </div>
        <p className="max-w-2xl text-base leading-relaxed text-muted">
          {project.summary}
        </p>
        <ul className="max-w-2xl space-y-1.5 text-sm leading-relaxed text-foreground/80">
          {project.questions.map((question) => (
            <li key={question} className="flex gap-2">
              <span aria-hidden className="text-accent">
                —
              </span>
              <span>{question}</span>
            </li>
          ))}
        </ul>
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex text-sm text-ink link-underline"
        >
          Notes in progress
        </Link>
      </div>
    </article>
  );
}
