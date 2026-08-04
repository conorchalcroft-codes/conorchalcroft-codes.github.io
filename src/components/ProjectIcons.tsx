import type { ReactNode, SVGProps } from "react";
import type { ProjectIconId } from "@/data/projects";

type IconProps = SVGProps<SVGSVGElement>;

function IconBase({
  children,
  ...props
}: IconProps & { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      {...props}
    >
      {children}
    </svg>
  );
}

/** Classic football — filled centre pentagon so it reads at small size */
export function FootynomicsIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <circle cx="20" cy="20" r="13.5" stroke="currentColor" strokeWidth="1.6" />
      {/* Iconic black pentagon */}
      <path
        d="M20 12.2 15.4 15.5 17.2 21h5.6l1.8-5.5Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="0.4"
        strokeLinejoin="round"
      />
      {/* Seams radiating to the panels */}
      <path
        d="M15.4 15.5 9.5 13.2M24.6 15.5 30.5 13.2M17.2 21 11.5 27M22.8 21 28.5 27M20 12.2V7.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      {/* Lower hexagon panel edges */}
      <path
        d="M11.5 27 14.8 32.5M28.5 27 25.2 32.5M14.8 32.5h10.4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Side panel hints */}
      <path
        d="M9.5 13.2 8 20.5 11.5 27M30.5 13.2 32 20.5 28.5 27"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </IconBase>
  );
}

/**
 * Classical agora / stoa — pediment and columns,
 * the civic space for public reasoning and debate.
 */
export function AgoraIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      {/* Pediment */}
      <path
        d="M6 16 20 6l14 10"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Entablature */}
      <path
        d="M8 16h24"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      {/* Columns */}
      <path
        d="M11 16v14M17 16v14M23 16v14M29 16v14"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      {/* Stylobate / base */}
      <path
        d="M7 30h26"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M5.5 33.5h29"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </IconBase>
  );
}

/** Atom — scientific / physics-informed ML */
export function FirstPrinciplesIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <circle cx="20" cy="20" r="2.4" fill="currentColor" />
      <ellipse
        cx="20"
        cy="20"
        rx="13"
        ry="5.5"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <ellipse
        cx="20"
        cy="20"
        rx="13"
        ry="5.5"
        stroke="currentColor"
        strokeWidth="1.5"
        transform="rotate(60 20 20)"
      />
      <ellipse
        cx="20"
        cy="20"
        rx="13"
        ry="5.5"
        stroke="currentColor"
        strokeWidth="1.5"
        transform="rotate(120 20 20)"
      />
    </IconBase>
  );
}

const projectIcons = {
  footynomics: FootynomicsIcon,
  agora: AgoraIcon,
  "first-principles": FirstPrinciplesIcon,
} as const;

export function ProjectIcon({
  id,
  ...props
}: IconProps & { id: ProjectIconId }) {
  const Icon = projectIcons[id];
  return <Icon {...props} />;
}
