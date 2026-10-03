'use client';

import React from 'react';
import { assets } from '@/app/lib/assets';
import {
  createRipple,
  useInsightStatsAnimation,
} from '@/src/components/hooks/useInsightStatsAnimation';

const KeyInsights = () => {
  const { containerRef, stat1Ref, stat2Ref } = useInsightStatsAnimation();

  return (
    <section
      ref={containerRef}
      className="bg-neutral-2 container mx-auto px-4 py-16 font-sans sm:px-6 lg:px-8"
    >
      <div className="h-auto w-full">
        {/* Top Section: Brand Logos */}
        <div className="mb-16 text-center">
          <p className="mb-8 text-sm font-normal text-slate-500 md:text-base">
            Trusted by thousands from worldwide
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-80 md:gap-12">
            {/* Brand 1 */}
            <div className="flex items-center gap-2 text-lg font-bold text-slate-700 md:text-xl">
              <span>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={assets.icons.rotashow} alt="RotaShow" />
              </span>
              <span>RotaShow</span>
            </div>
            {/* Brand 2 */}
            <div className="flex items-center gap-2 text-lg font-bold text-slate-700 md:text-xl">
              <span>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={assets.icons.waves} alt="waves" />
              </span>
              <span>waves</span>
            </div>
            {/* Brand 3 */}
            <div className="flex items-center gap-2 text-lg font-bold text-slate-700 md:text-xl">
              <span>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={assets.icons.rotashow} alt="RotaShow" />
              </span>
              <span>RotaShow</span>
            </div>
            {/* Brand 4 */}
            <div className="flex items-center gap-2 text-lg font-bold text-slate-700 md:text-xl">
              <span>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={assets.icons.travelers} alt="Travelers" />
              </span>
              <span>travelers.</span>
            </div>
            {/* Brand 5 */}
            <div className="flex items-center gap-2 text-lg font-bold text-slate-700 md:text-xl">
              <span>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={assets.icons.goldlines} alt="goldlines" />
              </span>
              <span>goldlines</span>
            </div>
            {/* Brand 6 */}
            <div className="flex items-center gap-1 text-lg font-bold text-slate-700 md:text-xl">
              <span>Velocity</span>
              <span>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={assets.icons.velocity} alt="velocity" />
              </span>
            </div>
          </div>
        </div>

        {/* Main Section: Key Insights */}
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
          {/* Left Side Content */}
          <div className="space-y-6 lg:col-span-5">
            <h2 className="font-manrope text-3xl leading-[1.15] font-bold text-slate-900 sm:text-4xl lg:text-5xl">
              Key Insights Track Your Financial System
            </h2>
            <p className="max-w-md text-sm leading-relaxed text-slate-500 sm:text-base">
              Effortlessly Track, Manage, and Optimize Your Personal and
              Business Finances. Your Comprehensive Companion.
            </p>

            {/* Button sections */}
            <div className="flex items-center gap-3 sm:gap-5">
              {/* First Button Get the App Now */}
              <button
                onClick={createRipple}
                className="relative transform-gpu overflow-hidden rounded-full bg-[#111111] px-6 py-3 text-sm font-medium text-white transition-transform duration-300 ease-out will-change-transform outline-none select-none focus:outline-none active:scale-95 sm:px-7 sm:py-3.5 md:hover:scale-105 md:hover:shadow-xl"
              >
                Get the App Now
              </button>

              {/* Second Button Arrow*/}
              <button
                onClick={createRipple}
                className="relative flex h-11 w-11 transform-gpu items-center justify-center overflow-hidden rounded-full bg-[#2563eb] text-white transition-transform duration-300 ease-out will-change-transform outline-none select-none focus:outline-none active:scale-90 active:rotate-45 sm:h-12 sm:w-12 md:hover:scale-110 md:hover:rotate-45 md:hover:shadow-lg"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={assets.icons.upperArrow}
                  alt="upper-arrow"
                  className="pointer-events-none h-5 w-5 object-contain"
                />
              </button>
            </div>
          </div>

          {/* Right Side Cards */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-7">
            {/* Card 1 */}
            <div className="flex flex-col justify-between space-y-8 rounded-3xl bg-white p-8 transition-transform duration-300 ease-out hover:scale-105 hover:shadow-xl">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#2563eb] text-white">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={assets.icons.satisfaction} alt="satisfaction" />
                </div>
                <span className="text-sm font-medium text-[#2563eb] sm:text-base">
                  Satisfaction
                </span>
              </div>
              <div className="space-y-3">
                <div className="flex items-baseline gap-2">
                  <span
                    ref={stat1Ref}
                    className="text-4xl font-bold text-slate-900 sm:text-5xl"
                  >
                    0%
                  </span>
                  <span className="text-lg font-medium text-slate-700 sm:text-xl">
                    of users
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-slate-500">
                  improved their savings within the first three months.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col justify-between space-y-8 rounded-3xl bg-white p-8 transition-transform duration-300 ease-out hover:scale-105 hover:shadow-xl">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#2563eb] text-white">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={assets.icons.message} alt="satisfaction" />
                </div>
                <span className="text-sm font-medium text-[#2563eb] sm:text-base">
                  Feedbacks
                </span>
              </div>
              <div className="space-y-3">
                <div className="flex items-baseline gap-2">
                  <span
                    ref={stat2Ref}
                    className="text-4xl font-bold text-slate-900 sm:text-5xl"
                  >
                    0k
                  </span>
                  <span className="text-lg font-medium text-slate-700 sm:text-xl">
                    reviews
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-slate-500">
                  highlighting our app&apos;s effectiveness and ease of use.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyInsights;
