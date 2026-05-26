import { Link } from "react-router-dom";
import BlogCard from "../molecules/BlogCard";
import { posts } from "../../data/blogPosts";
import styles from "./BlogSection.module.css";

export default function BlogSection() {
  return (
    <section className={styles.section} id="blog">
      <div className={styles.label}>
        <h3 className={styles.title}>Blog</h3>
        <Link className={styles.link} to="/blog">See all</Link>
      </div>
      <div className={styles.cards}>
        {posts.slice(0, 3).map((post) => (
          <BlogCard key={post.slug} title={post.title} date={post.date} slug={post.slug} image={post.image} />
        ))}
      </div>
    </section>
  );
}
