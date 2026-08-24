import type { Metadata } from "next";
import { ProjectPreview } from "@/components/ProjectPreview";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Personal research labs exploring football modelling, multi-agent reasoning, and scientific machine learning.",
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16 sm:px-8 sm:py-24">
      <header className="mb-16 max-w-2xl space-y-4">
        <p className="font-mono text-xs tracking-[0.2em] text-muted uppercase">
          Projects
        </p>
        <h1 className="font-serif text-4xl tracking-tight text-ink sm:text-5xl">
          Projects
        </h1>
        <p className="text-lg leading-relaxed text-muted">
          Two of these have apps you can open. First Principles doesn&apos;t,
          yet.
        </p>
      </header>

      <div>
        {projects.map((project, index) => (
          <ProjectPreview key={project.slug} project={project} index={index} />
        ))}
      </div>
    </div>
  );
}
