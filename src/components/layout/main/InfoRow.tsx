// src/components/layout/main/InfoRow.tsx
import React from "react";
import styles from "./InfoRow.module.css";
import InfoBox, { InfoBoxProps } from "./InfoBox";
import { infoRowData } from "./infoRowData";

type Props = {
  sectionLabel?: string;
  boxes?: InfoBoxProps[];
};

export default function InfoRow({
  sectionLabel = "About Our Pharmacy",
  boxes = infoRowData,
}: Props) {
  return (
    <section className={styles.section} aria-label={sectionLabel}>
      <h2 className={styles.sectionTitle}>{sectionLabel}</h2>
      <div className={styles.grid}>
        {boxes.map((box, idx) => (
          <InfoBox key={idx} {...box} />
        ))}
      </div>
    </section>
  );
}

