export type BlogPostMeta = {
  title: string;
  date: string;
  slug: string;
  image?: string;
};

export const posts: BlogPostMeta[] = [
  {
    title: "Deterministic Traces vs Browser Agents, Part 1: Designing the Benchmark",
    date: "2026-06-17",
    slug: "deterministic-traces-vs-browser-agents",
  },
  {
    title: "OpenClaw on Raspberry Pi 4 (4GB): Why Multi-Surface Workflows Beat One Mega-Bot",
    date: "2026-03-21",
    slug: "openclaw-raspberry-pi5-multi-surface-workflows",
  },
  {
    title: "About Me: Backend Brain, AI Curiosity, and Controlled Chaos",
    date: "2026-03-16",
    slug: "about-me-quirky-builder",
  },
  {
    title: "OpenClaw + Home Raspberry Pi (4 GB): My Practical AI Setup",
    date: "2026-03-16",
    slug: "openclaw-on-codex-and-raspi",
  },
  {
    title: "Clarify Before Code: A Practical Framework for Building Better AI-Assisted Software",
    date: "2026-03-16",
    slug: "clarify-before-code",
  },
];
