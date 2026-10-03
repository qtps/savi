'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// Ripple Effect Function
export const createRipple = (event: React.MouseEvent<HTMLButtonElement>) => {
  if (typeof window === 'undefined') return;

  const button = event.currentTarget;
  const rect = button.getBoundingClientRect();

  const size = Math.max(rect.width, rect.height) * 2;
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;

  const circle = document.createElement('span');
  circle.style.position = 'absolute';
  circle.style.borderRadius = '50%';
  circle.style.pointerEvents = 'none';
  circle.style.backgroundColor = 'rgba(255, 255, 255, 0.35)';
  circle.style.width = `${size}px`;
  circle.style.height = `${size}px`;
  circle.style.left = `${x}px`;
  circle.style.top = `${y}px`;

  button.appendChild(circle);

  gsap.fromTo(
    circle,
    {
      xPercent: -50,
      yPercent: -50,
      scale: 0,
      opacity: 0.6,
    },
    {
      scale: 1,
      opacity: 0,
      duration: 0.6,
      ease: 'power2.out',
      onComplete: () => {
        circle.remove();
      },
    },
  );
};

// Custom Hook for Scroll Counter Animation
export const useInsightStatsAnimation = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const stat1Ref = useRef<HTMLSpanElement>(null);
  const stat2Ref = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      // Counter Animation for Card 1 (0% -> 80%)
      const val1 = { value: 0 };
      gsap.to(val1, {
        value: 80,
        duration: 2,
        ease: 'power1.out',
        scrollTrigger: {
          trigger: stat1Ref.current,
          start: 'top 85%',
          once: true,
        },
        onUpdate: () => {
          if (stat1Ref.current) {
            stat1Ref.current.textContent = `${Math.floor(val1.value)}%`;
          }
        },
      });

      // Counter Animation for Card 2 (0k -> 500k)
      const val2 = { value: 0 };
      gsap.to(val2, {
        value: 500,
        duration: 2.2,
        ease: 'power1.out',
        scrollTrigger: {
          trigger: stat2Ref.current,
          start: 'top 85%',
          once: true,
        },
        onUpdate: () => {
          if (stat2Ref.current) {
            stat2Ref.current.textContent = `${Math.floor(val2.value)}k`;
          }
        },
      });
    },
    { scope: containerRef },
  );

  return { containerRef, stat1Ref, stat2Ref };
};
