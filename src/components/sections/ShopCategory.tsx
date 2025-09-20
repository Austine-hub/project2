import React, { useState, useRef, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './ShopCategory.module.css';

interface Category {
  id: number;
  title: string;
  image: string;
  alt: string;
}

const ShopCategory: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(4);
  const carouselRef = useRef<HTMLDivElement>(null);

  const categories: Category[] = [
    {
      id: 1,
      title: 'Cough & Cold',
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=300&fit=crop&crop=center',
      alt: 'Woman with tissue for cough and cold',
    },
    {
      id: 2,
      title: 'Chronic Diseases',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop&crop=center',
      alt: 'Medicine box for chronic diseases',
    },
    {
      id: 3,
      title: 'Vitamins & Supplements',
      image: 'https://images.unsplash.com/photo-1550572017-edd951b55104?w=400&h=300&fit=crop&crop=center',
      alt: 'Vitamin and supplement bottles',
    },
    {
      id: 4,
      title: 'Reproductive Health',
      image: 'https://images.unsplash.com/photo-1516302752625-fcc3c50ae61f?w=400&h=300&fit=crop&crop=center',
      alt: 'Couple for reproductive health',
    },
    {
      id: 5,
      title: 'Medical Accessories',
      image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=300&fit=crop&crop=center',
      alt: 'Person using medical device',
    },
    {
      id: 6,
      title: 'Other Ailments',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop&crop=center',
      alt: 'Woman with hand on chest for other ailments',
    },
  ];

  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < 640) setItemsPerView(2);
      else if (window.innerWidth < 1024) setItemsPerView(3);
      else setItemsPerView(4);
    };

    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);
    return () => window.removeEventListener('resize', updateItemsPerView);
  }, []);

  const maxIndex = Math.max(0, categories.length - itemsPerView);

  const scrollLeft = useCallback(() => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  }, []);

  const scrollRight = useCallback(() => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  }, [maxIndex]);

  const handleCategoryClick = useCallback((category: Category) => {
    console.log('Category clicked:', category.title);
  }, []);

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>
        Shop by category
      </h2>

      <div className={styles.carouselWrapper}>
        {/* Left Nav */}
        {currentIndex > 0 && (
          <button
            className={`${styles.navButton} ${styles.navButtonLeft}`}
            onClick={scrollLeft}
            aria-label="Previous categories"
          >
            <ChevronLeft size={20} />
          </button>
        )}

        {/* Carousel */}
        <div className={styles.carousel} ref={carouselRef}>
          <div
            className={styles.categoryList}
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
            }}
          >
            {categories.map((category) => (
              <div
                key={category.id}
                className={styles.categoryItem}
                onClick={() => handleCategoryClick(category)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleCategoryClick(category);
                  }
                }}
              >
                <div className={styles.imageContainer}>
                  <img
                    src={category.image}
                    alt={category.alt}
                    className={styles.categoryImage}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <h3 className={styles.categoryTitle}>
                  {category.title}
                </h3>
              </div>
            ))}
          </div>
        </div>

        {/* Right Nav */}
        {currentIndex < maxIndex && (
          <button
            className={`${styles.navButton} ${styles.navButtonRight}`}
            onClick={scrollRight}
            aria-label="Next categories"
          >
            <ChevronRight size={20} />
          </button>
        )}
      </div>
    </section>
  );
};

export default ShopCategory;