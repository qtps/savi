'use client';

import React, { useState, useRef, useEffect } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  PieChart,
  Wallet,
  Zap,
  LucideIcon,
} from 'lucide-react';

import { useNevigatAnimation } from '../hooks/useNevigatAnimation';

export interface SlideItem {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
  statLabel: string;
  statValue: string;
  chartHeights: string[];
  appImageFront?: string;
}

const NevigatThrough: React.FC = () => {
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const slides: SlideItem[] = [
    {
      id: 1,
      title: 'Enhanced Financial Awareness',
      description:
        'Automated features reduce the need for manual expense tracking, saving users valuable time.',
      icon: ShieldCheck,
      statLabel: 'Average Spendings',
      statValue: '$346.79',
      chartHeights: ['60%', '90%', '100%', '70%', '85%'],
      appImageFront: '/images/singleMobile.svg',
    },
    {
      id: 2,
      title: 'Smart Expense Tracking',
      description:
        'Categorize every single penny effortlessly with AI-powered tagging and instant spend insights.',
      icon: PieChart,
      statLabel: 'Monthly Savings',
      statValue: '$1,280.50',
      chartHeights: ['40%', '75%', '85%', '95%', '100%'],
      appImageFront: '/images/visa.png',
    },
    {
      id: 3,
      title: 'Automated Savings Goals',
      description:
        'Set personalized targets and let smart algorithms continuously transfer spare change into high-yield vaults.',
      icon: Wallet,
      statLabel: 'Goal Reached',
      statValue: '88%',
      chartHeights: ['50%', '65%', '80%', '88%', '92%'],
      appImageFront: '/images/slide3-front.png',
    },
    {
      id: 4,
      title: 'Instant Budget Alerts',
      description:
        'Receive real-time notifications when approaching threshold limits on subscriptions or recurring orders.',
      icon: Zap,
      statLabel: 'Daily Budget',
      statValue: '$45.00',
      chartHeights: ['80%', '60%', '90%', '50%', '70%'],
      appImageFront: '/images/slide4-front.png',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const slideContentRef = useRef<HTMLDivElement | null>(null);
  const chartBarsRef = useRef<HTMLDivElement | null>(null);

  // Animation trigger hook
  useNevigatAnimation(currentIndex, slideContentRef, chartBarsRef);

  const handlePrev = (): void => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1,
    );
  };

  const handleNext = (): void => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const currentSlide = slides[currentIndex];
  const CurrentIcon = currentSlide.icon;

  if (!isMounted) return null;

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-12 font-sans select-none">
      <div className="relative grid grid-cols-1 items-center gap-8 overflow-hidden rounded-[36px] border border-gray-900 bg-[#0b0b0b] p-8 text-white shadow-2xl md:p-12 lg:grid-cols-12 lg:p-16">
        {/* Left Column */}
        <div className="space-y-2 lg:col-span-4">
          <h2 className="text-3xl leading-tight font-normal tracking-tight text-gray-300 md:text-4xl lg:text-5xl">
            Navigate through
          </h2>
          <h2 className="text-3xl leading-tight font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
            our App Now
          </h2>
        </div>

        {/* Center Column */}
        <div className="relative flex items-center justify-center py-8 lg:col-span-4">
          <div className="relative z-10 flex w-full max-w-85 items-center justify-center">
            <div className="relative z-20 w-55 transform overflow-hidden rounded-2xl text-gray-900 shadow-2xl sm:w-60">
              {currentSlide.appImageFront ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={currentSlide.appImageFront}
                  alt={currentSlide.title}
                  className="block h-auto w-full object-cover"
                />
              ) : (
                <div className="space-y-3 bg-white p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1.5">
                      <span className="inline-block h-2.5 w-2.5 rounded-full bg-blue-600"></span>
                      <span className="text-xs font-bold text-gray-800">
                        Savi
                      </span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-500">
                      <CurrentIcon size={14} className="text-blue-600" />
                      <div className="h-4 w-4 rounded-full bg-gray-200"></div>
                    </div>
                  </div>

                  <h3 className="text-sm leading-snug font-bold text-gray-900">
                    Take Control of Your Money
                  </h3>

                  <div className="space-y-2 rounded-2xl bg-blue-600 p-3.5 text-white shadow-lg">
                    <p className="text-[10px] font-medium text-blue-100">
                      {currentSlide.statLabel}
                    </p>
                    <p className="text-xl font-bold tracking-tight">
                      {currentSlide.statValue}
                    </p>

                    <div
                      ref={chartBarsRef}
                      className="flex h-14 items-end justify-between gap-1 pt-2"
                    >
                      {currentSlide.chartHeights.map((h, i) => (
                        <div
                          key={`${currentSlide.id}-${h}`}
                          style={{ height: h }}
                          className={`w-3 rounded-full transition-all duration-300 ${
                            i === 2 ? 'bg-white' : 'bg-white/70'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6 lg:col-span-4 lg:pl-6">
          <div
            ref={slideContentRef}
            className="flex min-h-35 flex-col justify-center space-y-3"
          >
            <div className="flex items-center text-blue-400">
              <CurrentIcon size={20} />
            </div>

            <h3 className="text-2xl leading-snug font-bold tracking-wide text-white md:text-3xl">
              {currentSlide.title}
            </h3>

            <p className="max-w-sm text-sm leading-relaxed text-gray-400">
              {currentSlide.description}
            </p>
          </div>

          <div className="flex items-center space-x-4 pt-2">
            <button
              onClick={handlePrev}
              className="group flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg shadow-blue-900/30 transition-all duration-200 hover:bg-blue-500 active:scale-95"
              aria-label="Previous Slide"
            >
              <ArrowLeft
                size={20}
                className="transition-transform group-hover:-translate-x-0.5"
              />
            </button>

            <button
              onClick={handleNext}
              className="group flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg shadow-blue-900/30 transition-all duration-200 hover:bg-blue-500 active:scale-95"
              aria-label="Next Slide"
            >
              <ArrowRight
                size={20}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NevigatThrough;