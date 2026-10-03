import { useCallback, useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

interface Review {
  id: string;
  rating: number;
  title: string;
  description: string;
  name: string;
  role: string;
}

export const useReviewSlider = (
  reviews: Review[],
  setReviews: React.Dispatch<React.SetStateAction<Review[]>>,
  autoPlayDelay: number = 4000,
) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const isAnimatingRef = useRef<boolean>(false);

  // Next Slide Logic
  const slideNext = useCallback(() => {
    if (isAnimatingRef.current || !sliderRef.current || reviews.length === 0)
      return;
    isAnimatingRef.current = true;

    const firstCard = sliderRef.current.children[0] as HTMLElement;
    if (!firstCard) {
      isAnimatingRef.current = false;
      return;
    }

    const cardWidth = firstCard.offsetWidth;
    const gap = 24; // gap-6
    const moveDistance = cardWidth + gap;

    gsap.to(sliderRef.current, {
      x: -moveDistance,
      duration: 0.6,
      ease: 'power2.inOut',
      onComplete: () => {
        setReviews((prev) => {
          if (prev.length === 0) return prev;
          const updated = [...prev];
          const first = updated.shift();
          if (first) updated.push(first);
          return updated;
        });

        requestAnimationFrame(() => {
          if (sliderRef.current) {
            gsap.set(sliderRef.current, { x: 0 });
          }
          isAnimatingRef.current = false;
        });
      },
    });
  }, [reviews.length, setReviews]);

  // Prev Slide Logic
  const slidePrev = useCallback(() => {
    if (isAnimatingRef.current || !sliderRef.current || reviews.length === 0)
      return;
    isAnimatingRef.current = true;

    const lastCard = sliderRef.current.children[
      reviews.length - 1
    ] as HTMLElement;
    if (!lastCard) {
      isAnimatingRef.current = false;
      return;
    }

    const cardWidth = lastCard.offsetWidth;
    const gap = 24;
    const moveDistance = cardWidth + gap;

    // Last  to first position instant move
    setReviews((prev) => {
      if (prev.length === 0) return prev;
      const updated = [...prev];
      const last = updated.pop();
      if (last) updated.unshift(last);
      return updated;
    });

    // React state update complete with smooth animation execution
    requestAnimationFrame(() => {
      if (sliderRef.current) {
        gsap.set(sliderRef.current, { x: -moveDistance });

        gsap.to(sliderRef.current, {
          x: 0,
          duration: 0.6,
          ease: 'power2.inOut',
          onComplete: () => {
            isAnimatingRef.current = false;
          },
        });
      } else {
        isAnimatingRef.current = false;
      }
    });
  }, [reviews.length, setReviews]);

  // Autoplay Effect
  useEffect(() => {
    if (reviews.length === 0 || isPaused) return;

    const interval = setInterval(() => {
      slideNext();
    }, autoPlayDelay);

    return () => clearInterval(interval);
  }, [reviews.length, isPaused, autoPlayDelay, slideNext]);

  return {
    sliderRef,
    slideNext,
    slidePrev,
    setIsPaused,
  };
};
