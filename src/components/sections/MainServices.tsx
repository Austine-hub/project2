import React from "react";
import styles from "./MainServices.module.css";

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
};

const defaultServicesData: ServiceBox[] = [
  {
    title: "One Stop for Total Health Solutions",
    content: [
      "We go beyond medicines; we deliver wellness and personalized care.",
      "Count on our expert team for safe, effective, and compassionate service every time."
    ],
    image: "photos/banner2.png",
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
    image: "photos/banner3.png",
    imageAlt: "Advanced pharmaceutical equipment"
  }
];

export default function MainServices({
  boxes = defaultServicesData,
  sectionLabel = "Our Pharmacy Services"
}: Props) {
  return (
    <section className={styles.section} aria-label={sectionLabel}>
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
