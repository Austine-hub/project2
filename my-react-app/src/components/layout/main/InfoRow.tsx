import React from "react";
import InfoBox from "./InfoBox";

interface InfoRowProps {
  boxes: any[];
  gridCols?: string;
  sectionLabel?: string;
  className?: string;
  gap?: string;
}

const InfoRow: React.FC<InfoRowProps> = ({
  boxes = [],
  gridCols = "md:grid-cols-3",
  sectionLabel,
  className = "",
  gap = "gap-6",
}) => {
  return (
    <section aria-label={sectionLabel} className={`grid ${gridCols} ${gap} ${className}`}>
      {boxes.map((box, i) => <InfoBox key={i} {...box} />)}
    </section>
  );
};

export default InfoRow;
