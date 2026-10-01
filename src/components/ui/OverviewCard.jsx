import React, { useRef } from 'react';
import { useOverviewAnimation } from '@/src/components/hooks/useOverviewAnimation';
import { assets } from '@/app/lib/assets';

const OverviewCard = () => {
  const cardRef = useRef(null);

  // Hook call
  useOverviewAnimation(cardRef, 95);

  return (
    <div
      ref={cardRef}
      className="mx-auto w-full max-w-xl rounded-4xl border border-gray-100 bg-white pt-6 font-sans text-gray-800 shadow-xl transition-shadow hover:shadow-2xl"
    >
      {/* Top Header */}
      <div className="mb-6 flex items-center justify-between">
        <h2 className="pl-5 text-2xl font-bold tracking-tight text-black">
          Overview
        </h2>

        <button className="mr-5 flex h-8 w-8 items-center justify-center rounded-full bg-black text-white transition-opacity hover:opacity-80">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={assets.icons.arrow} alt="arrow" className="h-3 w-3" />
        </button>
      </div>

      {/* Custom Arc Gauge Section */}
      <div className="relative mt-2 mb-6 flex flex-col items-center justify-center">
        <div className="relative h-36 w-72 overflow-hidden">
          <svg className="h-72 w-72" viewBox="0 0 200 200">
            <defs>
              {/* Stripe / Hatching Pattern for remaining 5% */}
              <pattern
                id="stripe-pattern"
                width="8"
                height="8"
                patternUnits="userSpaceOnUse"
                patternTransform="rotate(0)"
              >
                <line
                  x1="0"
                  y1="2"
                  x2="8"
                  y2="2"
                  stroke="#9ca3af"
                  strokeWidth="1.5"
                />
              </pattern>
            </defs>

            {/* Base Arc with Stripe Background Fill */}
            <path
              d="M 20 100 A 80 80 0 0 1 180 100"
              fill="none"
              stroke="url(#stripe-pattern)"
              strokeWidth="32"
            />

            {/* Gray border backdrop for striped section */}
            <path
              d="M 20 100 A 80 80 0 0 1 180 100"
              fill="none"
              stroke="#e5e7eb"
              strokeWidth="40"
              className="opacity-30"
            />

            {/* Blue Active Fill Arc (GSAP Animated) */}
            <path
              className="progress-bar-path"
              d="M 20 100 A 80 80 0 0 1 180 100"
              fill="none"
              stroke="#166534" // Replace with exact blue shade below
              style={{ stroke: '#1d6bf3' }}
              strokeWidth="40"
            />
          </svg>
        </div>

        {/* Center Text (Percentage & Subtitle) */}
        <div className="absolute bottom-0 flex flex-col items-center text-center">
          <span className="percentage-text text-4xl leading-none font-extrabold text-black">
            0%
          </span>
          <span className="mt-1 text-xs font-medium text-gray-500">
            Spend This Month
          </span>
        </div>
      </div>

      {/* Spending Breakdown Section */}
      <div className="mt-8">
        <h3 className="mb-3 pl-4 text-lg font-bold text-black">
          Spending Breakdown
        </h3>

        <div className="space-y-3">
          {/* List Item 1 */}
          <div className="flex items-center justify-between rounded-2xl p-2 transition-colors hover:bg-gray-50">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gray-100 text-gray-400">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={assets.icons.speed}
                  alt="speed icons"
                  className="h-6 w-6"
                />
              </div>
              <div>
                <p className="text-sm font-bold text-black">Bank Transfer</p>
                <p className="mt-0.5 text-xs text-gray-400">12 January 2024</p>
              </div>
            </div>
            <span
              className="amount-text text-sm font-bold text-black"
              data-target="763.00"
            >
              $0.00
            </span>
          </div>

          {/* List Item 2 */}
          <div className="flex items-center justify-between rounded-2xl p-2 transition-colors hover:bg-gray-50">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gray-100 text-gray-400">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={assets.icons.wing}
                  alt="speed icons"
                  className="h-6 w-6"
                />
              </div>
              <div>
                <p className="text-sm font-bold text-black">Mobile Recharge</p>
                <p className="mt-0.5 text-xs text-gray-400">12 January 2024</p>
              </div>
            </div>
            <span
              className="amount-text text-sm font-bold text-black"
              data-target="763.00"
            >
              $0.00
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewCard;
