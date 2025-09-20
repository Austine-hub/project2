import React from 'react';
import styles from './AboutUs.module.css';
import { motion } from 'framer-motion';

const timelineData = [
  { year: '2025', text: 'AjanjaCare Pharmacy opened its doors in Juja, Kiambu County.' },
  { year: '2026', text: 'Expanded services to include wellness consultations and organic products.' },
  { year: '2027', text: 'Introduced an online platform for remote consultations and orders.' },
];

const Timeline: React.FC = () => {
  return (
    <section className={styles.timeline}>
      <h2>Our Journey</h2>
      <ul>
        {timelineData.map((item, idx) => (
          <motion.li
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: idx * 0.3 }}
          >
            <span className={styles.year}>{item.year}</span>
            <p>{item.text}</p>
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default Timeline;

