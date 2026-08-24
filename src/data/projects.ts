export type ProjectIconId = "footynomics" | "agora" | "first-principles";

export type ProjectStatus = "live" | "wip" | "planned";

export type Project = {
  slug: string;
  title: string;
  theme: string;
  summary: string;
  overview: string[];
  questions: string[];
  icon: ProjectIconId;
  status: ProjectStatus;
  statusNote: string;
  appUrl?: string;
};

export const statusLabels: Record<ProjectStatus, string> = {
  live: "Live",
  wip: "In progress",
  planned: "Scaffolding",
};

export const projects: Project[] = [
  {
    slug: "footynomics",
    title: "Footynomics",
    theme: "Football through Bayesian modelling and statistics",
    summary:
      "A Premier League analytics lab: competing model philosophies, walk-forward evaluation, and an app that tries to explain the results — open to try, still being built.",
    overview: [
      "Footynomics started from a simple itch: football models are usually asked to pick a winner. I wanted a place to ask why they pick it, how sure they are, and what happens when different modelling philosophies disagree.",
      "The lab pulls together public match, xG, odds, Elo and player data, then runs a walk-forward prediction league — Bayesian, classical, and machine-learning approaches scored over time, not on a shuffled test set. The app is built to show the argument, not just the table: insight first, then the explanation, then the technical layer if you want it.",
      "It is a working product with unfinished rooms. Expect new views, models that haven't settled, and an honest comparison against the market rather than a tipster's certainty.",
    ],
    questions: [
      "Why do models make the predictions they do?",
      "How should uncertainty shape what we trust?",
      "Where do Bayesian and ML approaches diverge?",
    ],
    icon: "footynomics",
    status: "wip",
    statusNote:
      "The app is live and usable, but the lab is still in active development — new models, clearer explanations, and plenty of rough edges.",
    appUrl: "https://footynomics.streamlit.app/",
  },
  {
    slug: "agora",
    title: "Agora",
    theme: "Collaborative AI reasoning",
    summary:
      "A live multi-agent reasoning lab: specialised personas deliberate, challenge each other, and synthesise — with you as the human in the loop.",
    overview: [
      "Most language-model tools give you one voice. Agora is a council. Specialised personas open independently, reply, challenge one another, and a moderator synthesises — with you able to step in at any point.",
      "You can pause between rounds, address the whole table or a single speaker, run another lap of deliberation, and ask questions after the verdict. Confidence shifts are tracked so you can see who moved, and by how much, as the discussion unfolds.",
      "The point is not a cleverer chatbot. It is whether disagreement, evidence, and a human moderator can produce a more careful answer than a single confident reply.",
    ],
    questions: [
      "Can diverse agents produce more balanced answers?",
      "How do we keep reasoning transparent?",
      "What happens when evidence conflicts?",
    ],
    icon: "agora",
    status: "live",
    statusNote:
      "Agora is done and open to use. Notes on the protocol, prompting, and what the deliberations actually look like will land here over time.",
    appUrl: "https://agora-ai.streamlit.app/",
  },
  {
    slug: "first-principles",
    title: "First Principles",
    theme: "Scientific machine learning",
    summary:
      "A future lab for scientific machine learning — physics-informed models, neural operators, and hybrid approaches that try to respect the laws they approximate.",
    overview: [
      "First Principles is the lab I haven't built yet. The question is how machine learning can take on physical knowledge — so a model is not only fitting data, but trying to obey the laws it approximates.",
      "The territory I want to work in: physics-informed neural networks, neural operators, Bayesian scientific ML, and hybrid models that sit between simulation and learning.",
      "There is no app to open. This page is a marker for a project still in the scaffolding stage.",
    ],
    questions: [
      "How do we blend data with physical laws?",
      "When do hybrid models outperform pure ML?",
      "What does scientific trust look like in a learned model?",
    ],
    icon: "first-principles",
    status: "planned",
    statusNote:
      "Scaffolding only — no lab yet. The questions are ready; the work is not.",
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export const projectsWithApps = projects.filter(
  (project): project is Project & { appUrl: string } => Boolean(project.appUrl),
);
