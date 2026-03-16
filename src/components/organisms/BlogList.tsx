import BlogListItem from "../molecules/BlogListItem";
import styles from "./BlogList.module.css";

export const posts = [
  {
    title: "How I Use OpenClaw Daily (Codex Subscription + Home Raspberry Pi)",
    date: "2026-03-16",
    slug: "openclaw-on-codex-and-raspi",
  },
  {
    title: "Clarify Before Code: A Practical Framework for Building Better AI-Assisted Software",
    date: "2026-03-16",
    slug: "clarify-before-code",
  },
  {
    title: "Sample Blog Post",
    date: "2026-03-03",
    slug: "sample-post",
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
