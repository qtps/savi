'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { assets } from '@/app/lib/assets';

const KeyFeaturesCard = () => {
  const cardRef = useRef<HTMLDivElement>(null);

  // GSAP 3D Tilt & Dynamic Shadow Handler
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Rotation degrees calculation
    const rotateX = ((y - centerY) / centerY) * -12;
    const rotateY = ((x - centerX) / centerX) * 12;

    // Dynamic Shadow Position (Angle wise shadow movement)
    const shadowX = (centerX - x) / 6;
    const shadowY = (centerY - y) / 6;

    gsap.to(card, {
      rotateX: rotateX,
      rotateY: rotateY,
      boxShadow: `${shadowX}px ${shadowY + 15}px 30px rgba(0, 0, 0, 0.18)`,
      duration: 0.4,
      ease: 'power2.out',
      transformPerspective: 1000,
      transformOrigin: 'center center',
    });
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;

    // Default position & soft shadow
    gsap.to(cardRef.current, {
      rotateX: 0,
      rotateY: 0,
      boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.08)',
      duration: 0.6,
      ease: 'power2.out',
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Main Grid/Flex Container (Responsive: Mobile-e flex-col, Desktop flex-row) */}
      <div className="flex flex-col gap-6 lg:flex-row lg:gap-8">
        {/* ===================== CARD 1: Savings ===================== */}
        <div className="flex flex-1 flex-col justify-between rounded-3xl bg-[#f8f9fa] p-6 sm:p-8 lg:p-10">
          {/* Top Content */}
          <div className="space-y-4">
            {/* Tag / Badge */}
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2563eb] text-white">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={assets.icons.dollar}
                  alt="dollar icon"
                  className="h-5 w-5 brightness-0 invert"
                />
              </div>
              <span className="text-sm font-semibold text-[#2563eb]">
                Savings
              </span>
            </div>

            {/* Title */}
            <h3 className="text-2xl leading-snug font-bold text-slate-900 sm:text-3xl">
              Achieve Savings with automated plans
            </h3>

            {/* Description */}
            <p className="text-sm leading-relaxed text-slate-500 sm:text-base">
              Gain deep insights into your financial health with our advanced
              analytics tools.
            </p>
          </div>

          {/* Bottom Card Mockup Area */}
          <div className="mt-8 rounded-2xl bg-white p-4 shadow-xs sm:p-6">
            {/* Card Graphic Area (With 3D Tilt & Dynamic Shadow) */}
            <div className="perspective:[1000px] flex justify-center">
              <div
                ref={cardRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className="cursor-pointer rounded-2xl shadow-[0px_10px_20px_rgba(0,0,0,0.08)] will-change-transform"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={assets.images.visa}
                  alt="visa card"
                  width={500}
                  height={300}
                  className="pointer-events-none rounded-2xl object-contain"
                />
              </div>
            </div>

            {/* Sub Action Buttons */}
            <div className="mt-4 flex items-center justify-between gap-3">
              <button className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-slate-50 py-3 text-xs font-medium text-slate-600 sm:text-sm">
                <div>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={assets.icons.wallet} alt="wallet" />
                </div>
                Send money
              </button>
              <button className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-slate-50 py-3 text-xs font-medium text-slate-600 sm:text-sm">
                <div>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={assets.icons.wallet} alt="wallet" />
                </div>
                Receive money
              </button>
            </div>
          </div>
        </div>

        {/* ===================== CARD 2: Tracking ===================== */}
        <div className="flex flex-1 flex-col justify-between rounded-3xl bg-[#f8f9fa] p-6 sm:p-8 lg:p-10">
          {/* Top Content */}
          <div className="space-y-4">
            {/* Tag / Badge */}
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2563eb] text-white">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={assets.icons.chart}
                  alt="chart icon"
                  className="h-5 w-5 brightness-0 invert"
                />
              </div>
              <span className="text-sm font-semibold text-[#2563eb]">
                Tracking
              </span>
            </div>

            {/* Title */}
            <h3 className="text-2xl leading-snug font-bold text-slate-900 sm:text-3xl">
              Smart Tracking to Monitor Your Spending
            </h3>

            {/* Description */}
            <p className="text-sm leading-relaxed text-slate-500 sm:text-base">
              Track your spending patterns. Gain deep insights into your
              financial health.
            </p>
          </div>

          {/* Bottom Tracking Graphic Area */}
          <div className="mt-8 rounded-2xl bg-white p-4 shadow-xs sm:p-6">
            {/* Pie Chart / Analytics Mockup */}
            <div className="flex items-center gap-4 py-2">
              <div className="">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={assets.images.pieChart} alt="chart" />
              </div>
              <div className="flex-1 space-y-1">
                <p className="text-xs font-semibold text-slate-800 sm:text-sm">
                  Ensuring you save targets without any hassle.
                </p>
                <p className="text-xs text-slate-400">
                  Achieve your savings goals with automated plans and needs.
                </p>
              </div>
            </div>

            {/* Transaction List Items */}
            <div className="mt-4 space-y-3">
              {/* Item 1 */}
              <div className="flex items-center justify-between rounded-xl border border-slate-100 p-3">
                <div className="flex items-center gap-3">
                  <div />
                  {/* Icon Placeholder */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={assets.icons.speed} alt="" />
                  <div>
                    <p className="text-xs font-semibold text-slate-800 sm:text-sm">
                      Payment for Shopify
                    </p>
                    <p className="text-[10px] text-slate-400">
                      12 January 2024
                    </p>
                  </div>
                </div>
                <span className="text-xs font-bold text-slate-900 sm:text-sm">
                  $763.00
                </span>
              </div>

              {/* Item 2 */}
              <div className="flex items-center justify-between rounded-xl border border-slate-100 p-3 opacity-60">
                <div className="flex items-center gap-3">
                  <div />
                  {/* Icon Placeholder */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={assets.icons.wing} alt="" />
                  <div>
                    <p className="text-xs font-semibold text-slate-800 sm:text-sm">
                      Payment for Shopify
                    </p>
                    <p className="text-[10px] text-slate-400">
                      12 January 2024
                    </p>
                  </div>
                </div>
                <span className="text-xs font-bold text-slate-900 sm:text-sm">
                  $763.00
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyFeaturesCard;
