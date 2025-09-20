import React from "react";
import styles from "./MainServices.module.css";

// Corrected import paths based on the file structure
import banner2 from "../../assets/banner2.png";
import banner3 from "../../assets/banner3.png";

type ServiceBox = {
  title: string;
  content?: string[];
  services?: string[];
  image?: string;
  imageAlt?: string;
};

type Props = {
  boxes?: ServiceBox[];
  sectionLabel?: string;
  id?: string; // <-- added id for scrolling
};

const defaultServicesData: ServiceBox[] = [
  {
    title: "One Stop for Total Health Solutions",
    content: [
      "We go beyond medicines; we deliver wellness and personalized care.",
      "Count on our expert team for safe, effective, and compassionate service every time."
    ],
    image: banner2,
    imageAlt: "Pharmacist holding a prescription bag"
  },
  {
    title: "Our Services",
    services: [
      "Prescription Dispensing & Medication Management",
      "Immunizations & Vaccinations",
      "Health Screenings & Diagnostic Tests",
      "Personalized Medication Counseling",
      "Home Delivery & Online Refills",
      "Telepharmacy (Virtual Consultations)"
    ]
  },
  {
    title: "Advanced Services",
    content: [
      "Virtual telepharmacy consultations with licensed pharmacists",
      "Custom compounding of medications for unique patient needs",
      "Wellness products including vitamins, supplements, and herbal care"
    ],
    image: banner3,
    imageAlt: "Advanced pharmaceutical equipment"
  }
];

export default function MainServices({
  boxes = defaultServicesData,
  sectionLabel = "Our Pharmacy Services",
  id // <-- accept id prop
}: Props) {
  return (
    <section id={id} className={styles.section} aria-label={sectionLabel}>
      <h2 className={styles.sectionTitle}>{sectionLabel}</h2>
      <div className={styles.grid}>
        {boxes.map((box, idx) => (
          <div key={idx} className={styles.card}>
            <h3 className={styles.cardTitle}>{box.title}</h3>

            {box.content && (
              <ul className={styles.contentList}>
                {box.content.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}

            {box.services && (
              <ul className={styles.servicesList}>
                {box.services.map((service, i) => (
                  <li key={i}>{service}</li>
                ))}
              </ul>
            )}

            {box.image && (
              <div className={styles.imageWrapper}>
                <img
                  src={box.image}
                  alt={box.imageAlt || "Service image"}
                  className={styles.image}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
