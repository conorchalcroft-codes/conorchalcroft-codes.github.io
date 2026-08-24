import type { ReactNode } from "react";

type ExternalAppLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
};

export function ExternalAppLink({
  href,
  children,
  className,
}: ExternalAppLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}
