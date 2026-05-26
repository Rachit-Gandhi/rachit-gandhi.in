import BlogListItem from "../molecules/BlogListItem";
import { posts } from "../../data/blogPosts";
import styles from "./BlogList.module.css";

export default function BlogList() {
  return (
    <div className={styles.list}>
      {posts.map((p) => (
        <BlogListItem key={p.slug} {...p} />
      ))}
    </div>
  );
}
