import { useParams } from "react-router-dom";
import AboutMeQuirkyBuilder from "../content/blogs/about-me-quirky-builder.mdx";
import ClarifyBeforeCode from "../content/blogs/clarify-before-code.mdx";
import DeterministicTracesPost from "../content/blogs/deterministic-traces-vs-browser-agents.mdx";
import OpenClawPi5Post from "../content/blogs/openclaw-raspberry-pi5-multi-surface-workflows.mdx";
import OpenClawPost from "../content/blogs/openclaw-on-codex-and-raspi.mdx";
import SamplePost from "../content/blogs/sample.mdx";
import TraceFloReusableSegmentsPost from "../content/blogs/traceflo-reusable-segments-and-network-waits.mdx";
import { posts as postMetas } from "../data/blogPosts";
import styles from "./BlogPost.module.css";

const postComponents: Record<string, React.FC> = {
  "traceflo-reusable-segments-and-network-waits": TraceFloReusableSegmentsPost,
  "deterministic-traces-vs-browser-agents": DeterministicTracesPost,
  "openclaw-raspberry-pi5-multi-surface-workflows": OpenClawPi5Post,
  "about-me-quirky-builder": AboutMeQuirkyBuilder,
  "openclaw-on-codex-and-raspi": OpenClawPost,
  "clarify-before-code": ClarifyBeforeCode,
  "sample-post": SamplePost,
};

export default function BlogPost() {
  const { slug } = useParams();
  const Post = slug ? postComponents[slug] : null;
  const meta = slug ? postMetas.find((post) => post.slug === slug) : null;

  if (!Post) return <div className={styles.notFound}>Post not found.</div>;

  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <a className={styles.backLink} href="/#/blog">
          Blog
        </a>
        <p className={styles.eyebrow}>Engineering Notes</p>
        <h1 className={styles.title}>{meta?.title}</h1>
        {meta?.date ? <p className={styles.meta}>{formatDate(meta.date)}</p> : null}
      </header>
      <article className={styles.article}>
        <Post />
      </article>
    </main>
  );
}

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(`${date}T00:00:00`));
}
