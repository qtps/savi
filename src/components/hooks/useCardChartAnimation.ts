'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { RefObject } from 'react';

gsap.registerPlugin(ScrollTrigger);

interface CardChartAnimationParams {
  containerRef: RefObject<HTMLDivElement | null>;
  barRefs: RefObject<(HTMLDivElement | null)[]>;
  mainAmountRef: RefObject<HTMLHeadingElement | null>;
  volumeRefs: RefObject<(HTMLSpanElement | null)[]>;
  targetAmount: number;
  volumeValues: number[];
}

export const useCardChartAnimation = ({
  containerRef,
  barRefs,
  mainAmountRef,
  volumeRefs,
  targetAmount,
  volumeValues,
}: CardChartAnimationParams) => {
  useGSAP(
    () => {
      //  Bar Chart Entrance Animation
      if (barRefs.current && barRefs.current.length > 0) {
        gsap.fromTo(
          barRefs.current.filter(Boolean),
          { scaleY: 0, transformOrigin: 'bottom' },
          {
            scaleY: 1,
            duration: 1.2,
            stagger: 0.1,
            ease: 'back.out(1.2)',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reset',
            },
          },
        );
      }

      const mainCounter = { val: 0 };
      gsap.to(mainCounter, {
        val: targetAmount,
        duration: 1.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reset',
        },
        onUpdate: () => {
          if (mainAmountRef.current) {
            mainAmountRef.current.textContent = `$${mainCounter.val.toFixed(2)}`;
          }
        },
      });

      volumeValues.forEach((targetVal, index) => {
        const volumeCounter = { val: 0 };
        const el = volumeRefs.current[index];

        if (el) {
          gsap.to(volumeCounter, {
            val: targetVal,
            duration: 1.5 + index * 0.1, //
            ease: 'power2.out',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reset',
            },
            onUpdate: () => {
              el.textContent =
                targetVal === 0 ? '$00' : `$${Math.round(volumeCounter.val)}`;
            },
          });
        }
      });
    },
    { scope: containerRef },
  );
};
