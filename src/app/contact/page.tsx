import type { Metadata } from "next";
import { EmailIcon, GitHubIcon, LinkedInIcon } from "@/components/SocialIcons";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch about the projects, or just to say hi.",
};

const contacts = [
  {
    label: "Email",
    href: `mailto:${site.links.email}`,
    value: site.links.email,
    Icon: EmailIcon,
    external: false,
  },
  {
    label: "GitHub",
    href: site.links.github,
    value: "conorchalcroft-codes",
    Icon: GitHubIcon,
    external: true,
  },
  {
    label: "LinkedIn",
    href: site.links.linkedin,
    value: "conorchalcroft",
    Icon: LinkedInIcon,
    external: true,
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
          Get in touch
        </h1>
        <p className="text-lg leading-relaxed text-muted">
          If you want to chat about any of this, or just say hi, you can reach
          me here.
        </p>
      </header>

      <ul className="divide-y divide-rule border-y border-rule">
        {contacts.map(({ label, href, value, Icon, external }) => (
          <li
            key={label}
            className="flex flex-col gap-3 py-5 sm:flex-row sm:items-center sm:justify-between sm:gap-8"
          >
            <span className="inline-flex items-center gap-2.5 font-mono text-xs tracking-[0.15em] text-muted uppercase">
              <Icon className="h-4 w-4 text-accent" />
              {label}
            </span>
            <a
              href={href}
              className="font-serif text-xl text-ink link-underline"
              {...(external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              {value}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
