import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
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
      {image ? (
        <div className={styles.image}>
          <img src={image} alt={title} />
        </div>
      ) : null}
      <div className={styles.header}>
        <div className={styles.title}>{title}</div>
        <ArrowUpRight size={16} className={styles.icon} />
      </div>
      <div className={styles.date}>{date}</div>
    </Link>
  );
}
