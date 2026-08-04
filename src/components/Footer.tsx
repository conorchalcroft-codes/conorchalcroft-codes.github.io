import { EmailIcon, GitHubIcon, LinkedInIcon } from "@/components/SocialIcons";
import { site } from "@/data/site";

const socialLinks = [
  {
    label: "GitHub",
    href: site.links.github,
    Icon: GitHubIcon,
    external: true,
  },
  {
    label: "LinkedIn",
    href: site.links.linkedin,
    Icon: LinkedInIcon,
    external: true,
  },
  {
    label: "Email",
    href: `mailto:${site.links.email}`,
    Icon: EmailIcon,
    external: false,
  },
] as const;

export function Footer() {
  return (
    <footer className="mt-auto border-t border-rule/70">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div className="space-y-1">
          <p className="font-serif text-foreground">{site.name}</p>
          <p>Exploring ideas and building things I find interesting.</p>
        </div>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
          {socialLinks.map(({ label, href, Icon, external }) => (
            <a
              key={label}
              href={href}
              className="inline-flex items-center gap-2 text-foreground link-underline"
              {...(external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              <Icon className="h-4 w-4" />
              <span>{label}</span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
