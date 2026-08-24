import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ExternalAppLink } from "@/components/ExternalAppLink";
import { ProjectIcon } from "@/components/ProjectIcons";
import { StatusBadge } from "@/components/StatusBadge";
import { getProject, projects } from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project" };
  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <article className="mx-auto max-w-3xl px-6 py-16 sm:px-8 sm:py-24">
      <ProjectIcon id={project.icon} className="mb-6 h-11 w-11 text-accent" />
      <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
        <StatusBadge status={project.status} />
        <p className="font-mono text-xs tracking-[0.2em] text-accent uppercase">
          {project.theme}
        </p>
      </div>
      <h1 className="mt-4 font-serif text-4xl tracking-tight text-ink sm:text-5xl">
        {project.title}
      </h1>
      <p className="mt-8 text-lg leading-relaxed text-muted">{project.summary}</p>

      {project.appUrl ? (
        <p className="mt-8">
          <ExternalAppLink
            href={project.appUrl}
            className="inline-flex text-base text-accent link-underline"
          >
            Open the app →
          </ExternalAppLink>
        </p>
      ) : null}

      <section className="mt-14 space-y-5 border-t border-rule pt-10">
        <h2 className="font-serif text-2xl text-ink">In the lab</h2>
        {project.overview.map((paragraph) => (
          <p key={paragraph} className="leading-relaxed text-muted">
            {paragraph}
          </p>
        ))}
      </section>

      <section className="mt-14 space-y-4 border-t border-rule pt-10">
        <h2 className="font-serif text-2xl text-ink">Questions this explores</h2>
        <ul className="space-y-3 text-base leading-relaxed text-foreground/85">
          {project.questions.map((question) => (
            <li key={question} className="flex gap-3">
              <span aria-hidden className="text-accent">
                —
              </span>
              <span>{question}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-14 space-y-4 border-t border-rule pt-10">
        <h2 className="font-serif text-2xl text-ink">Status</h2>
        <p className="leading-relaxed text-muted">{project.statusNote}</p>
      </section>

      <p className="mt-16">
        <Link href="/projects" className="text-sm text-ink link-underline">
          ← All projects
        </Link>
      </p>
    </article>
  );
}
