import BlogListItem from "../molecules/BlogListItem";
import styles from "./BlogList.module.css";

export const posts = [
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

export default function BlogList() {
  return (
    <div className={styles.list}>
      {posts.map((p) => (
        <BlogListItem key={p.slug} {...p} />
      ))}
    </div>
  );
}
