'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { RefObject } from 'react';

gsap.registerPlugin(ScrollTrigger);

interface ProgressAnimationParams {
  containerRef: RefObject<HTMLDivElement | null>;
  spendingBarRef: RefObject<HTMLDivElement | null>;
  savingsBarRef: RefObject<HTMLDivElement | null>;
  spendingTextRef: RefObject<HTMLSpanElement | null>;
  savingsTextRef: RefObject<HTMLSpanElement | null>;
}

export const useProgressAnimation = ({
  containerRef,
  spendingBarRef,
  savingsBarRef,
  spendingTextRef,
  savingsTextRef,
}: ProgressAnimationParams) => {
  useGSAP(
    () => {
      // Spending Progress Animation (35%)
      const spendingVal = { value: 0 };
      gsap.fromTo(
        spendingBarRef.current,
        { width: '0%' },
        {
          width: '35%',
          duration: 1.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reset',
          },
        },
      );

      gsap.to(spendingVal, {
        value: 35,
        duration: 1.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reset',
        },
        onUpdate: () => {
          if (spendingTextRef.current) {
            spendingTextRef.current.textContent = `${Math.round(spendingVal.value)}%`;
          }
        },
      });

      // Savings Progress Animation (79%)
      const savingsVal = { value: 0 };
      gsap.fromTo(
        savingsBarRef.current,
        { width: '0%' },
        {
          width: '79%',
          duration: 1.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reset',
          },
        },
      );

      gsap.to(savingsVal, {
        value: 79,
        duration: 1.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reset',
        },
        onUpdate: () => {
          if (savingsTextRef.current) {
            savingsTextRef.current.textContent = `${Math.round(savingsVal.value)}%`;
          }
        },
      });
    },
    { scope: containerRef },
  );
};
