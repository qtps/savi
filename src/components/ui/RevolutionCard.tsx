'use client';
import { useRef } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { assets } from '@/app/lib/assets';
import Card from './Card';
import { useProgressAnimation } from '@/src/components/hooks/useProgressAnimation.ts';
import SpendingCard from './SpendingCard';

const RevolutionCard = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const spendingBarRef = useRef<HTMLDivElement>(null);
  const savingsBarRef = useRef<HTMLDivElement>(null);
  const spendingTextRef = useRef<HTMLSpanElement>(null);
  const savingsTextRef = useRef<HTMLSpanElement>(null);

  useProgressAnimation({
    containerRef,
    spendingBarRef,
    savingsBarRef,
    spendingTextRef,
    savingsTextRef,
  });

  return (
    <div>
      <div
        ref={containerRef}
        className="mx-auto flex flex-col items-center gap-10 rounded-3xl bg-white md:flex-row"
      >
        {/* Left Side - Card UI */}
        <div className="bg-neutral-2 flex w-full max-w-xl items-center justify-center rounded-3xl p-6 shadow-xl md:p-10">
          <div className="w-full space-y-6 rounded-3xl bg-white p-6 shadow-sm">
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
                  <span
                    ref={spendingTextRef}
                    className="font-bold text-gray-900"
                  >
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
                  <span
                    ref={savingsTextRef}
                    className="font-bold text-gray-900"
                  >
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

      {/* bottom 4 card sections */}

      <div className="mx-auto mt-10 grid w-full grid-cols-1 gap-6 rounded-3xl bg-white p-6 md:grid-cols-2">
        {/* left card */}

        <Card
          title="Customize alerts to notify you when transaction"
          description1={
            <div className="flex items-start gap-2">
              <span className="mt-1 shrink-0 text-blue-600">
                <CheckCircle2 className="h-8 w-8 fill-blue-600 text-white" />
              </span>{' '}
              Set daily, weekly, or monthly spending limits for specific
              categories or overall spending to avoid overspending.
            </div>
          }

          description2={
            <div className="">
              <div className="flex items-start gap-2">
                <span className="mt-1 shrink-0 text-blue-600">
                  <CheckCircle2 className="h-8 w-8 fill-blue-600 text-white" />
                </span>{' '}
                Set daily, weekly, or monthly spending limits for specific
                categories or overall spending to avoid overspending. <br />
              </div>
              <div className="flex items-start gap-2 pt-2">
                <span className="mt-1 shrink-0 text-blue-600">
                  <CheckCircle2 className="h-8 w-8 fill-blue-600 text-white" />
                </span>{' '}
                Get real-time notifications when you exceed your spending
                limits.
              </div>
            </div>
          }
        />

        <SpendingCard />

        {/* Row 2: Green & Yellow */}
        <div className="flex min-h-37.5 items-center justify-center rounded-2xl bg-emerald-500 p-6 text-xl font-bold text-white shadow-md">
          Hello 3 (Green)
        </div>
        <div className="flex min-h-37.5 items-center justify-center rounded-2xl bg-yellow-400 p-6 text-xl font-bold text-gray-900 shadow-md">
          Hello 4 (Yellow)
        </div>

        {/* Row 3: Ash (Gray) & Black */}
        <div className="flex min-h-37.5 items-center justify-center rounded-2xl bg-gray-400 p-6 text-xl font-bold text-white shadow-md">
          Hello 5 (Ash/Gray)
        </div>
        <div className="flex min-h-37.5 items-center justify-center rounded-2xl bg-black p-6 text-xl font-bold text-white shadow-md">
          Hello 6 (Black)
        </div>
      </div>
    </div>
  );
};

export default RevolutionCard;
