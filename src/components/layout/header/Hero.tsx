import React, { useState, useEffect } from "react";
import styles from "./Hero.module.css";

// Import your images
import pharmacistImg from "@/assets/smiling-pharmacist.jpg";
import pharmacyImg from "@/assets/black1.png";
import medicineImg from "@/assets/black2.png";
// Add more images as needed

const Hero = () => {
  // Array of images for the carousel
  const images = [
    {
      src: pharmacistImg,
      alt: "Friendly pharmacist assisting a patient"
    },
    {
      src: pharmacyImg,
      alt: "Modern pharmacy interior"
    },
    {
      src: medicineImg,
      alt: "Quality medications and healthcare products"
    }
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-advance images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 15000); // Change image every 15 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [images.length]);

  // Manual navigation functions
  const goToPrevious = () => {
    setCurrentImageIndex(
      currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex(
      currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1
    );
  };

  const goToSlide = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className={styles.hero}>
      {/* === Carousel Container === */}
      <div className={styles.carouselContainer}>
        {/* === Images === */}
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className={`${styles.heroImg} ${
              index === currentImageIndex ? styles.active : ''
            }`}
          />
        ))}

        {/* === Navigation Arrows === */}
        <button 
          className={`${styles.navBtn} ${styles.prevBtn}`}
          onClick={goToPrevious}
          aria-label="Previous image"
        >
          &#8249;
        </button>
        <button 
          className={`${styles.navBtn} ${styles.nextBtn}`}
          onClick={goToNext}
          aria-label="Next image"
        >
          &#8250;
        </button>

        {/* === Dot Indicators === */}
        <div className={styles.indicators}>
          {images.map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${
                index === currentImageIndex ? styles.activeDot : ''
              }`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* === Pause/Play Button (Optional) === */}
        <button 
          className={styles.pauseBtn}
          onClick={() => {
            // You can implement pause/play functionality here
            // This would require additional state management
          }}
          aria-label="Pause slideshow"
        >
          ⏸️
        </button>
      </div>

      {/* === Overlay Content === */}
      <div className={styles.overlay}>
        <h2 className={styles.title}>Your Trusted Health Partner</h2>
        <p className={styles.subtitle}>
          Safe. Reliable. Compassionate Care for You &amp; Your Family.
        </p>
        <a href="#services" className={styles.ctaBtn}>
          Explore Our Services
        </a>
      </div>
    </div>
  );
};

export default Hero;