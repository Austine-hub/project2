import React from "react";
import styles from "./InfoRow.module.css";
import { InfoBoxProps } from "../../../types/InfoBox.types";

const InfoBox: React.FC<InfoBoxProps> = ({ title, points = [], image, imageAlt, linkText, linkHref }) => {
  return (
    <article className={styles.card}>
      {image && (
        <div className={styles.imageWrapper}>
          <img src={image} alt={imageAlt || "Info image"} className={styles.image} loading="lazy" />
        </div>
      )}
      {title && <h3 className={styles.cardTitle}>{title}</h3>}
      {points.length > 0 && (
        <ul className={styles.list}>
          {points.map((point, idx) => (
            <li key={`${title}-${idx}`}>{point}</li>
          ))}
        </ul>
      )}
      {linkText && linkHref && <a href={linkHref} className={styles.link}>{linkText}</a>}
    </article>
  );
};

export default InfoBox;

