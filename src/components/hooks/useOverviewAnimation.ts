import { useEffect, type RefObject } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useOverviewAnimation = (
  containerRef: RefObject<HTMLElement>,
  targetPercentage: number = 95,
) => {
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const ctx = gsap.context(() => {
      // 1. Arc Dashoffset Animation (0% to 95%)
      const progressBar =
        container.querySelector<SVGGeometryElement>('.progress-bar-path');
      if (progressBar) {
        const totalLength = progressBar.getTotalLength();

        gsap.set(progressBar, {
          strokeDasharray: totalLength,
          strokeDashoffset: totalLength,
        });

        // 95% progress target
        const targetOffset =
          totalLength - totalLength * (targetPercentage / 100);

        gsap.to(progressBar, {
          strokeDashoffset: targetOffset,
          duration: 1.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: container,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        });
      }

      // 2. Percentage Counter Animation
      const percentText =
        container.querySelector<HTMLElement>('.percentage-text');
      if (percentText) {
        const counterObj = { value: 0 };
        gsap.to(counterObj, {
          value: targetPercentage,
          duration: 1.8,
          ease: 'power2.out',
          onUpdate: () => {
            percentText.innerText = `${Math.round(counterObj.value)}%`;
          },
          scrollTrigger: {
            trigger: container,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        });
      }

      // 3. Amount Counter Animation
      const amountElements =
        container.querySelectorAll<HTMLElement>('.amount-text');
      amountElements.forEach((el) => {
        const targetVal = Number.parseFloat(el.dataset.target || '0');
        const counterObj = { value: 0 };

        gsap.to(counterObj, {
          value: targetVal,
          duration: 1.5,
          delay: 0.2,
          ease: 'power2.out',
          onUpdate: () => {
            el.innerText = `$${counterObj.value.toFixed(2)}`;
          },
          scrollTrigger: {
            trigger: container,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        });
      });
    }, container);

    return () => ctx.revert();
  }, [containerRef, targetPercentage]);
};
