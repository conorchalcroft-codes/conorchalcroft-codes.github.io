export type Project = {
  slug: string;
  title: string;
  theme: string;
  summary: string;
  questions: string[];
};

export const projects: Project[] = [
  {
    slug: "footynomics",
    title: "Footynomics",
    theme: "Football through Bayesian modelling and statistics",
    summary:
      "An interactive football analytics laboratory exploring how different modelling approaches understand and predict the game — with uncertainty as a first-class citizen.",
    questions: [
      "Why do models make the predictions they do?",
      "How should uncertainty shape what we trust?",
      "Where do Bayesian and ML approaches diverge?",
    ],
  },
  {
    slug: "agora",
    title: "Agora",
    theme: "Collaborative AI reasoning",
    summary:
      "A reasoning laboratory where multiple AI agents debate, weigh evidence, and update beliefs — seeking thoughtful conclusions over confident ones.",
    questions: [
      "Can diverse agents produce more balanced answers?",
      "How do we keep reasoning transparent?",
      "What happens when evidence conflicts?",
    ],
  },
  {
    slug: "first-principles",
    title: "First Principles",
    theme: "Scientific machine learning",
    summary:
      "Exploring how machine learning can incorporate physical knowledge — from PINNs to neural operators — so models respect the laws they approximate.",
    questions: [
      "How do we blend data with physical laws?",
      "When do hybrid models outperform pure ML?",
      "What does scientific trust look like in a learned model?",
    ],
  },
];
