import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import styles from "./BlogListItem.module.css";

type BlogListItemProps = {
  title: string;
  date: string;
  slug: string;
  image?: string;
};

export default function BlogListItem({ title, date, slug, image }: BlogListItemProps) {
  return (
    <Link to={`/blog/${slug}`} className={styles.item}>
      <div className={styles.thumb}>{image ? <img src={image} alt={title} /> : <span>Read post →</span>}</div>
      <div className={styles.content}>
        <div className={styles.title}>{title}</div>
        <div className={styles.date}>{date}</div>
      </div>
      <ArrowUpRight size={16} className={styles.icon} />
    </Link>
  );
}
