'use client';

import React, { useRef } from 'react';
import { useCardChartAnimation } from '@/src/components/hooks/useCardChartAnimation';
import { assets } from '@/app/lib/assets';

const SpendingCard = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const barRefs = useRef<(HTMLDivElement | null)[]>([]);

  const mainAmountRef = useRef<HTMLHeadingElement>(null);
  const volumeRefs = useRef<(HTMLSpanElement | null)[]>([]);

  // Dynamic values for the chart and counter
  const targetAmount = 346.79;
  const volumeValues = [4000, 3000, 2000, 1000, 0];

  const bars = [
    { id: 'bar-1', height: 'h-28', striped: false },
    { id: 'bar-2', height: 'h-20', striped: false },
    { id: 'bar-3', height: 'h-32', striped: true },
    { id: 'bar-4', height: 'h-36', striped: false },
    { id: 'bar-5', height: 'h-24', striped: false },
  ];

  // GSAP Hook Call
  useCardChartAnimation({
    containerRef,
    barRefs,
    mainAmountRef,
    volumeRefs,
    targetAmount,
    volumeValues,
  });

  return (
    <div
      ref={containerRef}
      className="bg-neutral-2 mx-auto w-full max-w-sm rounded-[36px] p-5 shadow-xl transition-shadow hover:shadow-2xl"
    >
      {/* Top Blue Main Card */}
      <div className="relative rounded-[28px] bg-[#0066FF] p-6 text-white shadow-md">
        {/* Top Header */}
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm font-medium opacity-80">Average Spendings</p>
            {/* dynamic amount ref */}
            <h2
              ref={mainAmountRef}
              className="mt-1 text-4xl font-bold tracking-tight"
            >
              $0.00
            </h2>
          </div>
          <button className="flex h-7 w-7 items-center justify-center rounded-full bg-black/90 text-white">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={assets.icons.arrow} alt="arrow" className="h-2 w-2" />
          </button>
        </div>

        {/* Chart & Volume Section */}
        <div className="mt-8 flex items-end justify-between gap-2">
          {/* Bar Chart Area */}
          <div className="flex h-36 items-end gap-2.5">
            {bars.map((bar, index) => (
              <div
                key={bar.id}
                ref={(el) => {
                  barRefs.current[index] = el;
                }}
                className={`xlm:w-5 w-3 rounded-full sm:w-7 ${bar.height} ${
                  bar.striped ? 'bg-white/20 backdrop-blur-sm' : 'bg-white'
                }`}
                style={
                  bar.striped
                    ? {
                        backgroundImage:
                          'repeating-linear-gradient(-45deg, rgba(255,255,255,0.3), rgba(255,255,255,0.3) 4px, transparent 4px, transparent 10px)',
                      }
                    : {}
                }
              />
            ))}
          </div>

          {/* Volume Labels Area */}
          <div className="flex flex-col items-end space-y-2 text-xs font-medium text-white/80">
            <span className="text-[11px] font-semibold text-white">Volume</span>
            {volumeValues.map((val, index) => (
              <span
                key={index}
                ref={(el) => {
                  volumeRefs.current[index] = el;
                }}
              >
                $0
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom 2 Mini Cards */}
      <div className="mt-4 grid grid-cols-2 gap-3">
        {/* Card 1 */}
        <div className="flex flex-col justify-between rounded-3xl bg-[#F7F8FA] p-4">
          <div className="flex items-center justify-between">
            <div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={assets.icons.dollar} alt="Dollar Icons" />
            </div>
            <button className="flex h-6 w-6 items-center justify-center rounded-full bg-black text-white">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={assets.icons.arrow} alt="arrow" />
            </button>
          </div>
          <div className="mt-6 space-y-1">
            <p className="text-xs leading-tight font-medium text-gray-600">
              Premium Leather Jacket
            </p>
            <p className="text-sm font-bold text-gray-900">$346.79</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col justify-between rounded-3xl bg-[#F7F8FA] p-4">
          <div className="flex items-center justify-between">
            <div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={assets.icons.dollar} alt="Dollar Icons" />
            </div>
            <button className="flex h-6 w-6 items-center justify-center rounded-full bg-black text-white">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={assets.icons.arrow} alt="arrow" />
            </button>
          </div>
          <div className="mt-6 space-y-1">
            <p className="text-xs leading-tight font-medium text-gray-600">
              Average Spending Goal
            </p>
            <p className="text-sm font-bold text-gray-900">$464.82</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpendingCard;
