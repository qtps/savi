'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { assets } from '@/app/lib/assets';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const PlayBtn = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { contextSafe } = useGSAP({ scope: buttonRef });

  // Hover In Animation
  const handleMouseEnter = contextSafe(() => {
    gsap.to(buttonRef.current, {
      scale: 1.05,
      y: -2,
      duration: 0.3,
      ease: 'power2.out',
      force3D: true,
      overwrite: 'auto',
    });
  });

  // Hover Out Animation
  const handleMouseLeave = contextSafe(() => {
    gsap.to(buttonRef.current, {
      scale: 1,
      y: 0,
      duration: 0.3,
      ease: 'power2.out',
      force3D: true,
      overwrite: 'auto',
    });
  });

  // Click / Tap Animation
  const handleMouseDown = contextSafe(() => {
    gsap.to(buttonRef.current, {
      scale: 0.96,
      duration: 0.1,
      ease: 'power2.inOut',
      overwrite: 'auto',
    });
  });

  const handleMouseUp = contextSafe(() => {
    gsap.to(buttonRef.current, {
      scale: 1.05,
      duration: 0.15,
      ease: 'power2.out',
      overwrite: 'auto',
    });
  });

  return (
    <button
      ref={buttonRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      className="bg-neutral-4 flex cursor-pointer items-center gap-2 rounded-full px-3 py-2 text-white will-change-transform hover:shadow-lg hover:shadow-black/20 max-[360px]:px-2 max-[360px]:py-1 sm:px-6 sm:py-3 md:px-8 md:py-4"
    >
      <Image
        src={assets.icons.googlePlay}
        alt="Google Play logo"
        width={28}
        height={28}
        className="h-auto w-4 max-[360px]:w-3 sm:w-8 md:w-10"
      />

      <div className="flex flex-col items-start gap-0 leading-tight">
        <span className="text-[10px] opacity-80 max-[360px]:text-[9px] sm:text-sm md:text-base">
          Get it on
        </span>
        <span className="text-xs font-semibold max-[360px]:text-[11px] sm:text-lg md:text-xl">
          Google Play
        </span>
      </div>
    </button>
  );
};

export default PlayBtn;
