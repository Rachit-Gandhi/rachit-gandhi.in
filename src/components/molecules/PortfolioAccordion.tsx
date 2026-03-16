import { useState } from "react";
import styles from "./PortfolioAccordion.module.css";

export type PortfolioItem = {
  title: string;
  description: string;
  bullets?: string[];
  images?: string[];
};

type PortfolioAccordionProps = {
  title: string;
  items: PortfolioItem[];
  linkHref?: string;
  anchorId?: string;
};

export default function PortfolioAccordion({ title, items, linkHref, anchorId }: PortfolioAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className={styles.wrap} id={anchorId}>
      <div className={styles.headingRow}>
        <h3 className={styles.heading}>{title}</h3>
        {linkHref && (
          <a className={styles.link} href={linkHref} aria-label={`${title} link`}>
            ↗
          </a>
        )}
      </div>
      <div className={styles.list}>
        {items.map((item, idx) => (
          <div key={item.title} className={styles.item}>
            <button
              className={styles.itemHeader}
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            >
              <span>{item.title}</span>
              <span className={styles.chev}>{openIndex === idx ? "–" : "+"}</span>
            </button>
            {openIndex === idx && (
              <div className={styles.itemBody}>
                {item.description ? <p>{item.description}</p> : null}
                {item.bullets?.length ? (
                  <ul>
                    {item.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                ) : null}
                {item.images?.length ? (
                  <div className={styles.carousel}>
                    <div className={styles.track}>
                      {item.images.concat(item.images).map((img, i) => (
                        <div className={styles.slide} key={i}>
                          {img ? <img src={img} alt="" /> : "Image"}
                        </div>
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
