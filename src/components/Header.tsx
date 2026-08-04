import Link from "next/link";
import { site } from "@/data/site";

export function Header() {
  return (
    <header className="relative z-10 border-b border-rule/70">
      <div className="mx-auto flex max-w-5xl items-baseline justify-between gap-6 px-6 py-5 sm:px-8">
        <Link
          href="/"
          className="font-serif text-lg tracking-tight text-ink link-underline"
        >
          {site.name}
        </Link>
        <nav aria-label="Primary" className="flex flex-wrap justify-end gap-x-5 gap-y-2 text-sm text-muted">
          {site.nav
            .filter((item) => item.href !== "/")
            .map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="link-underline transition-colors hover:text-ink"
              >
                {item.label}
              </Link>
            ))}
        </nav>
      </div>
    </header>
  );
}
