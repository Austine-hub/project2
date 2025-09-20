import React from "react";
import { FaLinkedin } from "react-icons/fa";
import styles from "./TeamSection.module.css";

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  imageAlt?: string;
  linkedin?: string;
}

interface TeamSectionProps {
  title?: string;
  members?: TeamMember[];
  className?: string;
}

export const DEFAULT_TEAM_MEMBERS: TeamMember[] = [
  { id: "kebba-jobarteh", name: "Kebba Jobarteh", role: "CEO, Co-Founder", image: "/images/kebba.jpg", imageAlt: "Portrait of Kebba Jobarteh", linkedin: "#" },
  { id: "kuang-chen", name: "Kuang Chen", role: "Co-Founder", image: "/images/kuang.jpg", imageAlt: "Portrait of Kuang Chen", linkedin: "#" },
  { id: "julius-kabangi", name: "Julius Kabangi", role: "CTO, Co-Founder", image: "/images/julius.jpg", imageAlt: "Portrait of Julius Kabangi", linkedin: "#" },
  { id: "robert-onyango", name: "Robert Onyango", role: "Head of Sales", image: "/images/robert.jpg", imageAlt: "Portrait of Robert Onyango", linkedin: "#" },
  { id: "bella-omondi", name: "Bella Omondi", role: "Head of Operations", image: "/images/bella.jpg", imageAlt: "Portrait of Bella Omondi", linkedin: "#" },
  { id: "ahmad-diba", name: "Ahmad Diba", role: "Head of Communications", image: "/images/ahmad.jpg", imageAlt: "Portrait of Ahmad Diba", linkedin: "#" },
  { id: "saket-kanth", name: "Saket Kanth", role: "Head of Product", image: "/images/saket.jpg", imageAlt: "Portrait of Saket Kanth", linkedin: "#" },
  { id: "rebecca-nyakundi", name: "Rebecca Nyakundi", role: "Care Coordination Lead", image: "/images/rebecca.jpg", imageAlt: "Portrait of Rebecca Nyakundi", linkedin: "#" },
];

const TeamSection: React.FC<TeamSectionProps> = ({
  title = "Meet The Team Behind Antara",
  members = DEFAULT_TEAM_MEMBERS,
  className,
}) => {
  return (
    <section className={`${styles.section} ${className || ""}`} aria-labelledby="team-section-title">
      <div className={styles.container}>
        <h2 id="team-section-title" className={styles.title}>{title}</h2>
        <div className={styles.grid}>
          {members.map(member => (
            <article key={member.id} className={styles.card} aria-labelledby={`member-${member.id}`}>
              <div className={styles.imageContainer}>
                <img
                  src={member.image}
                  alt={member.imageAlt || member.name}
                  className={styles.image}
                  loading="lazy"
                />
              </div>
              <div className={styles.details}>
                <h3 id={`member-${member.id}`} className={styles.name}>{member.name}</h3>
                <p className={styles.role}>{member.role}</p>
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.linkedinButton}
                    aria-label={`Visit ${member.name}'s LinkedIn`}
                  >
                    <FaLinkedin size={20} />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;


