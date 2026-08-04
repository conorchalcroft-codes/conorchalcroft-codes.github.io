import type { Metadata } from "next";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch about research, experiments, or shared questions.",
};

const contacts = [
  {
    label: "Email",
    href: `mailto:${site.links.email}`,
    value: site.links.email,
  },
  {
    label: "GitHub",
    href: site.links.github,
    value: "conorchalcroft-codes",
  },
  {
    label: "LinkedIn",
    href: site.links.linkedin,
    value: "conorchalcroft",
  },
] as const;

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:px-8 sm:py-24">
      <header className="mb-12 space-y-4">
        <p className="font-mono text-xs tracking-[0.2em] text-muted uppercase">
          Contact
        </p>
        <h1 className="font-serif text-4xl tracking-tight text-ink sm:text-5xl">
          Start a conversation
        </h1>
        <p className="text-lg leading-relaxed text-muted">
          Curious about a project, want to compare notes, or just say hello?
          I&apos;d like to hear from you.
        </p>
      </header>

      <ul className="divide-y divide-rule border-y border-rule">
        {contacts.map((contact) => (
          <li
            key={contact.label}
            className="flex flex-col gap-1 py-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8"
          >
            <span className="font-mono text-xs tracking-[0.15em] text-muted uppercase">
              {contact.label}
            </span>
            <a
              href={contact.href}
              className="font-serif text-xl text-ink link-underline"
              {...(contact.href.startsWith("http")
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              {contact.value}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
