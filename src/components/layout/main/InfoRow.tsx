// src/components/layout/main/InfoRow.tsx
import React, { FC } from "react";
import styles from "./InfoRow.module.css";
import InfoBox from "./InfoBox";
import { infoRowData } from "./infoRowData";

// Reuse the InfoBoxProps interface locally
export interface InfoBoxProps {
  title: string;
  points?: string[];
  image?: string;
  imageAlt?: string;
  linkText?: string;
  linkHref?: string;
}

type Props = {
  sectionLabel?: string;
  boxes?: InfoBoxProps[];
};

const InfoRow: FC<Props> = ({
  sectionLabel = "About Our Pharmacy",
  boxes = infoRowData,
}) => {
  return (
    <section className={styles.section} aria-label={sectionLabel}>
      <h2 className={styles.sectionTitle}>{sectionLabel}</h2>
      <div className={styles.grid}>
        {boxes.map((box: InfoBoxProps, idx: number) => (
          <InfoBox key={idx} {...box} />
        ))}
      </div>
    </section>
  );
};

export default InfoRow;

