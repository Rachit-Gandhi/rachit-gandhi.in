import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import styles from "./BlogListItem.module.css";

type BlogListItemProps = {
  title: string;
  date: string;
  slug: string;
  image?: string;
};

export default function BlogListItem({ title, date, slug }: BlogListItemProps) {
  return (
    <Link to={`/blog/${slug}`} className={styles.item}>
      <div className={styles.header}>
        <span className={styles.title}>{title}</span>
      </div>
      <div className={styles.date}>{date}</div>
      <div className={styles.icon}>
        <ArrowUpRight size={14} />
      </div>
    </Link>
  );
}
