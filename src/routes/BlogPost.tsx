import { useParams } from "react-router-dom";
import AboutMeQuirkyBuilder from "../content/blogs/about-me-quirky-builder.mdx";
import ClarifyBeforeCode from "../content/blogs/clarify-before-code.mdx";
import OpenClawPost from "../content/blogs/openclaw-on-codex-and-raspi.mdx";
import SamplePost from "../content/blogs/sample.mdx";

const posts: Record<string, React.FC> = {
  "about-me-quirky-builder": AboutMeQuirkyBuilder,
  "openclaw-on-codex-and-raspi": OpenClawPost,
  "clarify-before-code": ClarifyBeforeCode,
  "sample-post": SamplePost,
};

export default function BlogPost() {
  const { slug } = useParams();
  const Post = slug ? posts[slug] : null;

  if (!Post) return <div>Post not found.</div>;

  return (
    <article>
      <Post />
    </article>
  );
}
