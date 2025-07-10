"use client";

import React, { useCallback, useRef } from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './ImageCarousel.module.css';

export const ImageCarousel = ({ images }) => {
  const autoplay = useRef(
    Autoplay({
      delay: 3000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    })
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true },
    [autoplay.current]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className={styles.embla}>
      <div className={styles.embla__viewport} ref={emblaRef}>
        <div className={styles.embla__container}>
          {images.map((src, index) => (
            <div className={styles.embla__slide} key={index}>
              <Image
                src={src}
                alt={`Foto de evento ${index + 1}`}
                width={600}
                height={400}
                className={styles.carouselImage}
              />
            </div>
          ))}
        </div>
      </div>

      <button className={`${styles.embla__button} ${styles.embla__button__prev}`} onClick={scrollPrev}>
        <ChevronLeft size={32} />
      </button>
      <button className={`${styles.embla__button} ${styles.embla__button__next}`} onClick={scrollNext}>
        <ChevronRight size={32} />
      </button>
    </div>
  );
};