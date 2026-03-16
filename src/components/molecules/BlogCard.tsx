import { Link } from "react-router-dom";
import styles from "./BlogCard.module.css";

type BlogCardProps = {
  title: string;
  date: string;
  slug: string;
  image?: string;
};

export default function BlogCard({ title, date, slug, image }: BlogCardProps) {
  return (
    <Link to={`/blog/${slug}`} className={styles.card}>
      <div className={styles.image}>
        {image ? <img src={image} alt={title} /> : <span>Read post →</span>}
      </div>
      <div className={styles.title}>{title}</div>
      <div className={styles.date}>{date}</div>
    </Link>
  );
}
