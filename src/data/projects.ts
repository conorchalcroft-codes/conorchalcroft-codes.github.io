export type ProjectIconId = "footynomics" | "agora" | "first-principles";

export type ProjectStatus = "live" | "wip" | "planned";

export type ProjectFeature = {
  name: string;
  detail: string;
};

export type Project = {
  slug: string;
  title: string;
  theme: string;
  summary: string;
  overview: string[];
  features?: ProjectFeature[];
  questions: string[];
  icon: ProjectIconId;
  status: ProjectStatus | ProjectStatus[];
  statusNote?: string;
  appUrl?: string;
};

export function projectStatuses(project: Pick<Project, "status">): ProjectStatus[] {
  return Array.isArray(project.status) ? project.status : [project.status];
}

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
      "Football and data science in the same place. I wanted to try modelling methods on Premier League data, and to learn them by building them rather than just reading about them.",
    overview: [
      "I started Footynomics because I wanted to spend time at the intersection of football and data science. I like the sport, I like the methods, and building something around both felt like a better way to learn the techniques than reading papers and never touching a dataset.",
      "There's a Premier League database behind it, pulled together from a few public sources: matches, expected goals, odds, Elo ratings, player stats. On top of that sits a Streamlit app with several pages, rather than one big dashboard. Different modelling approaches have to live in the same place and get scored the same way, walking forward through the season. The bookmakers stay in as a baseline, so nothing gets to look clever for free.",
      "The point is as much the methods as the football. Bayesian models, older statistical ones, machine learning, a stacked blend. I wanted to see how they behave next to each other, where they disagree, and what you can actually trust once you look at calibration rather than a lucky weekend.",
    ],
    features: [
      {
        name: "Modelling league",
        detail:
          "A walk-forward 1X2 league of competing model philosophies: hierarchical Bayesian, classical football models, a few ML approaches, and a stacked blend. Scored with proper metrics, and compared with the closing odds so the whole thing stays honest.",
      },
      {
        name: "Club School",
        detail:
          "Slower pages that walk through how each modelling approach actually thinks about a match. Useful if you want the method, not just a probability.",
      },
      {
        name: "Matches and seasons",
        detail:
          "Match-level 1X2 probabilities and scorelines, with the uncertainty left in, plus Monte Carlo projections of how the table might finish.",
      },
      {
        name: "Teams and players",
        detail:
          "Form, player lookalikes from per-90 profiles, and a Best Buys view that looks at market value alongside on-pitch numbers.",
      },
      {
        name: "Maps and archetypes",
        detail:
          "Clustering and lower-dimensional views of the league, for when I'm more interested in structure than in a Saturday result.",
      },
    ],
    questions: [
      "If every model has to walk the same season, which modelling philosophy actually holds up?",
      "How should you read a match probability once you can see the uncertainty around it?",
      "When does a Bayesian model beat machine learning on football data — and when does it just look more principled?",
    ],
    icon: "footynomics",
    status: ["live", "wip"],
    statusNote:
      "The app is live, but it's still a work in progress. There's already a fair bit to click through.",
    appUrl: "https://footynomics.streamlit.app/",
  },
  {
    slug: "agora",
    title: "Agora",
    theme: "Collaborative AI reasoning",
    summary:
      "An agentic app I built to get some practice actually deploying one. A few specialised agents try to reason toward an answer together, rather than debate for the sake of it.",
    overview: [
      "Agora was mainly a way to deploy an agentic app end to end, instead of leaving the idea in a notebook. You give a question to a small council of language-model personas. They take it in turns, then a moderator pulls a synthesis together. You can step in if you want: pause between rounds, talk to everyone or just one speaker, send them round again, ask follow-ups.",
      "The interesting part, for me, was getting agents to work a question together rather than argue. They're supposed to be heading toward an answer, not winning a debate.",
      "It's a bit of fun, and I was completely unsubtle about the Greek agora theming. Public square, council of speakers, the lot. Not a serious attempt at automated truth. Confidence scores shift as they go, which is part of the theatre, and there are a few domain packs if you want a more specific council.",
    ],
    questions: [
      "What happens if agents have to work a question together instead of answering alone?",
      "How much of a multi-agent setup is useful, and how much is just a nice show?",
      "What do you actually learn by deploying one of these, rather than diagramming it?",
    ],
    icon: "agora",
    status: "live",
    appUrl: "https://agora-ai.streamlit.app/",
  },
  {
    slug: "first-principles",
    title: "First Principles",
    theme: "Scientific machine learning",
    summary:
      "A deep dive into physics-informed machine learning. I want to learn the methods from the ground up, get some experience using them, and work out where they actually belong — including when they beat classic ML or classic scientific modelling.",
    overview: [
      "This is a deep dive I haven't started building yet. The plan is to learn physics-informed machine learning from the ground up: PINNs, neural operators, that family of methods, and actually use them rather than just reading the papers.",
      "The interesting question, for me, is when these methods are the right tool. Sometimes a model that respects the physics should beat both plain machine learning and a classic numerical solver. Sometimes it shouldn't. I want to understand that boundary by working through it.",
      "No app yet. This page is here so the project has a place to live when I get to it.",
    ],
    questions: [
      "How do you blend data with physical laws?",
      "When do these methods beat classic ML, and when do they beat a classic scientific model?",
      "What would it take to trust a learned model in a scientific setting?",
    ],
    icon: "first-principles",
    status: "planned",
    statusNote: "Not available yet.",
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export const projectsWithApps = projects.filter(
  (project): project is Project & { appUrl: string } => Boolean(project.appUrl),
);
