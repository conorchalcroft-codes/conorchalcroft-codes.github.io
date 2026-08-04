import Link from "next/link";
import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-rule/70">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div className="space-y-1">
          <p className="font-serif text-foreground">{site.name}</p>
          <p>Exploring ideas and building things I find interesting.</p>
        </div>
        <div className="flex flex-wrap gap-x-5 gap-y-2">
          <a
            href={site.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline text-foreground"
          >
            GitHub
          </a>
          <a
            href={site.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline text-foreground"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${site.links.email}`}
            className="link-underline text-foreground"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
