import React from 'react';
import { motion } from 'framer-motion';
import styles from './AboutUs.module.css';
import Timeline from './Timeline';
import TeamMember from '../shared/TeamMember';
import backgroundImage from '../../assets/photos/pharmacy-background.png';

const AboutUs: React.FC = () => {
  return (
    <motion.section
      id="about-us"
      className={styles.aboutUs}
      aria-label="About Us"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Hero / Banner */}
      <div
        className={styles.hero}
        style={{ backgroundImage: `url(${backgroundImage})` }}
        role="banner"
      >
        <h1>Our Story</h1>
        <p>Committed to your health since 2025</p>
      </div>

      {/* Timeline Section */}
      <Timeline />

      {/* Mission Section */}
      <section className={styles.mission} aria-label="Our Mission">
        <h2>Our Mission</h2>
        <p>
          At AjanjaCare Pharmacy, we blend traditional care with modern wellness
          solutions to provide personalized healthcare services to our community.
        </p>
      </section>

      {/* Team Section */}
      <section className={styles.team} aria-label="Meet Our Team">
        <h2>Meet Our Team</h2>
        <div className={styles.teamMembers}>
          <TeamMember name="Ajanja AustineAJ" role="Founder & CEO" />
          <TeamMember name="Jane Doe" role="Pharmacist" />
          <TeamMember name="John Smith" role="Wellness Consultant" />
        </div>
      </section>
    </motion.section>
  );
};

export default AboutUs;
