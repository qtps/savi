import { useEffect, RefObject } from 'react';
import gsap from 'gsap';

export const useNevigatAnimation = (
  currentIndex: number,
  slideContentRef: RefObject<HTMLElement | null>,
  chartBarsRef: RefObject<HTMLElement | null>,
) => {
  useEffect(() => {
    // Component properly mount
    const animationFrame = requestAnimationFrame(() => {
      // Slide Content Animation (Fade in & Slide up)
      if (slideContentRef.current) {
        gsap.fromTo(
          slideContentRef.current,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.45, ease: 'power2.out' },
        );
      }

      // Chart Bars Scale Animation
      if (chartBarsRef.current) {
        const bars = chartBarsRef.current.children;
        if (bars.length > 0) {
          gsap.fromTo(
            bars,
            { scaleY: 0.2, transformOrigin: 'bottom' },
            { scaleY: 1, duration: 0.5, stagger: 0.05, ease: 'back.out(1.5)' },
          );
        }
      }
    });

    // Cleanup animation frame on unmount/re-render
    return () => cancelAnimationFrame(animationFrame);
  }, [currentIndex, slideContentRef, chartBarsRef]);
};
