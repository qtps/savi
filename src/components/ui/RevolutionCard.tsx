'use client';

import React, { useRef } from 'react';
import { assets } from '@/app/lib/assets';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Card from './Card';

gsap.registerPlugin(ScrollTrigger);

const RevolutionCard = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const spendingBarRef = useRef<HTMLDivElement>(null);
  const savingsBarRef = useRef<HTMLDivElement>(null);
  const spendingTextRef = useRef<HTMLSpanElement>(null);
  const savingsTextRef = useRef<HTMLSpanElement>(null);

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
            start: 'top 80%', // স্
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

  return (
    <div
      ref={containerRef}
      className="mx-auto flex max-w-5xl flex-col items-center gap-10 rounded-3xl bg-white p-6 md:flex-row"
    >
      {/* Left Side - Card UI */}
      <div className="bg-neutral-2 flex w-full items-center justify-center rounded-3xl p-6 md:w-1/2 md:p-10">
        <div className="w-full max-w-sm space-y-6 rounded-3xl bg-white p-6 shadow-sm">
          {/* Top Blue Card */}
          <div className="relative flex items-end justify-between rounded-2xl bg-[#1A6CFF] p-5 text-white">
            {/* Top Right Arrow Icon Placeholder */}
            <div className="absolute top-4 right-4 flex h-6 w-6 items-center justify-center rounded-full bg-black p-1.5">
              <span className="text-xs text-white">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={assets.icons.arrow} alt="arrow" />
              </span>
            </div>

            <div>
              <h2 className="text-3xl font-bold">$326.79</h2>
            </div>

            <div className="mt-5 text-right">
              <p className="text-xs opacity-90">Average</p>
              <p className="text-xs opacity-90">Spending Goal</p>
            </div>
          </div>

          {/* Challenge Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-900">Challenge</h3>

            {/* Spending Progress Box */}
            <div className="space-y-3 rounded-2xl bg-[#F8F8F8] p-4">
              <div className="flex items-center justify-between text-sm font-medium text-gray-700">
                <span>Spending this month</span>
                <span ref={spendingTextRef} className="font-bold text-gray-900">
                  0%
                </span>
              </div>
              <div className="flex h-7 w-full items-center rounded-full bg-white p-1">
                <div
                  ref={spendingBarRef}
                  className="h-full rounded-full bg-[#1A6CFF]"
                  style={{
                    backgroundImage:
                      'linear-gradient(45deg, rgba(255,255,255,0.15) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0.15) 75%, transparent 75%, transparent)',
                    backgroundSize: '1rem 1rem',
                  }}
                ></div>
              </div>
            </div>

            {/* Savings Progress Box */}
            <div className="space-y-3 rounded-2xl bg-[#F8F8F8] p-4">
              <div className="flex items-center justify-between text-sm font-medium text-gray-700">
                <span>Savings this month</span>
                <span ref={savingsTextRef} className="font-bold text-gray-900">
                  0%
                </span>
              </div>
              <div className="flex h-7 w-full items-center rounded-full bg-white p-1">
                <div
                  ref={savingsBarRef}
                  className="h-full rounded-full bg-[#1A6CFF]"
                  style={{
                    backgroundImage:
                      'linear-gradient(45deg, rgba(255,255,255,0.15) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0.15) 75%, transparent 75%, transparent)',
                    backgroundSize: '1rem 1rem',
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Content */}
      <Card
        title="Automated Transaction Categorization"
        description1="Automatically categorizes transactions into predefined categories such as groceries, dining, entertainment, and utilities using machine learning."
        description2="Take control of your money with Savi. Track your spending, save smartly, and invest in one easy-to-use app.
        Start exploring now."
      />
    </div>
  );
};

export default RevolutionCard;
