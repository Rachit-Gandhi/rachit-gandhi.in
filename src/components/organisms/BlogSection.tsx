import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import BlogCard from "../molecules/BlogCard";
import { posts } from "./BlogList";
import styles from "./BlogSection.module.css";

export default function BlogSection() {
  return (
    <section className={styles.section} id="blog">
      <div className={styles.header}>
        <h2 className={styles.title}>Blog</h2>
        <Link className={styles.link} to="/blog" aria-label="Blog link">
          <ArrowUpRight size={16} />
        </Link>
      </div>
      <div className={styles.scroll}>
        {posts.slice(0, 3).map((post) => (
          <BlogCard key={post.slug} title={post.title} date={post.date} slug={post.slug} image={post.image} />
        ))}
      </div>
    </section>
  );
}
