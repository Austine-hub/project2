// src/components/layout/main/infoRowData.ts
// Import images so bundlers (Vite, Webpack, CRA, Next.js) handle them correctly
import { InfoBoxProps } from "../../../types/InfoBox.types";
import pharmacy1 from "@/assets/photos/pharmacy1.png";
import pharmacy2 from "@/assets/photos/pharmacy2.png";
import pharmacy3 from "@/assets/photos/pharmacy3.png";

export const infoRowData: InfoBoxProps[] = [
  {
    title: "Trusted Pharmacy Care",
    points: [
      "Licensed professionals at your service",
      "Safe, effective, and affordable medication",
    ],
    image: pharmacy1,
    imageAlt: "Trusted pharmacist",
  },
  {
    title: "Patient-Centered Support",
    points: [
      "Medication adherence counseling",
      "Confidential and compassionate care",
    ],
    image: pharmacy2,
    imageAlt: "Patient consultation",
  },
  {
    title: "Hospital Partnerships",
    points: [
      "Reliable supply chain for clinics",
      "Emergency drug availability",
    ],
    image: pharmacy3,
    imageAlt: "Hospital collaboration",
  },
];
