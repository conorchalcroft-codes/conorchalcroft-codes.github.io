import Link from "next/link";
import { ExternalAppLink } from "@/components/ExternalAppLink";
import { ProjectPreview } from "@/components/ProjectPreview";
import { projects, projectsWithApps } from "@/data/projects";
import { site } from "@/data/site";

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="notebook-grid pointer-events-none absolute inset-0 opacity-60"
        />
        <div className="relative mx-auto flex min-h-[calc(100vh-4.5rem)] max-w-5xl flex-col justify-center px-6 py-20 sm:px-8 sm:py-28">
          <p className="fade-up font-mono text-xs tracking-[0.2em] text-accent uppercase">
            Personal research lab
          </p>
          <h1 className="fade-up-delay-1 mt-6 max-w-3xl font-serif text-5xl leading-[1.05] tracking-tight text-ink sm:text-6xl md:text-7xl">
            {site.name}
          </h1>
          <p className="fade-up-delay-2 mt-8 max-w-xl text-lg leading-relaxed text-muted sm:text-xl">
            {site.tagline}
          </p>
          <div className="fade-up-delay-3 mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm">
            <Link href="/projects" className="text-ink link-underline">
              Explore projects
            </Link>
            {projectsWithApps.map((project) => (
              <ExternalAppLink
                key={project.slug}
                href={project.appUrl}
                className="text-accent link-underline"
              >
                Open {project.title} →
              </ExternalAppLink>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-rule bg-surface">
        <div className="mx-auto max-w-5xl px-6 py-20 sm:px-8 sm:py-28">
          <div className="mb-14 max-w-2xl space-y-4">
            <p className="font-mono text-xs tracking-[0.2em] text-muted uppercase">
              Current explorations
            </p>
            <h2 className="font-serif text-3xl tracking-tight text-ink sm:text-4xl">
              Three laboratories, at different stages
            </h2>
            <p className="text-base leading-relaxed text-muted">
              Agora is live. Footynomics is open and still being built. First
              Principles is scaffolding. Each starts from curiosity — not a
              deliverable — and asks better questions about uncertainty,
              reasoning, and scientific principle.
            </p>
          </div>

          <div>
            {projects.map((project, index) => (
              <ProjectPreview
                key={project.slug}
                project={project}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
