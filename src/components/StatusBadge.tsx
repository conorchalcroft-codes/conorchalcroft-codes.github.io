import { statusLabels, type ProjectStatus } from "@/data/projects";

const badgeClass: Record<ProjectStatus, string> = {
  live: "bg-accent-soft text-accent",
  wip: "bg-subtle text-ink",
  planned: "border border-rule text-muted",
};

export function StatusBadge({ status }: { status: ProjectStatus }) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 font-mono text-[0.65rem] tracking-[0.14em] uppercase ${badgeClass[status]}`}
    >
      {statusLabels[status]}
    </span>
  );
}
