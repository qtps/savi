'use client';

import { assets } from '@/app/lib/assets';
import gsap from 'gsap';
const createRipple = (event: React.MouseEvent<HTMLButtonElement>) => {
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

const CurrencyExchange = () => {
  return (
    <section className="container mx-auto px-4 py-12 font-sans sm:px-6 sm:py-16 lg:px-8">
      {/* Container Box */}
      <div className="flex flex-col items-center justify-center gap-4 text-center">
        {/* Responsive Heading */}
        <h2 className="max-w-4xl text-3xl leading-tight font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl lg:text-6xl">
          Effortless Currency Exchange for Transactions
        </h2>

        {/* Responsive Subtitle Paragraph */}
        <p className="max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg md:text-xl">
          Take control of your money with Savi. Track your spending, save
          smartly all in one easy-to-use app.
        </p>
      </div>

      <div className="flex flex-col gap-6 lg:flex-row">
        {/* Left Card */}
        <div className="flex flex-1 flex-col justify-between rounded-3xl bg-[#0d0d0d] p-8 text-white shadow-xl md:p-10">
          <div className="space-y-4 pt-20">
            <h3 className="font-manrope text-2xl leading-snug font-bold sm:text-3xl md:text-3xl">
              Effortless Currency Exchange for Global Transactions
            </h3>
            <p className="text-sm text-gray-400 sm:text-base">
              Yes, you can access your financial data from any device with an
              internet connection.
            </p>
          </div>

          {/* Arrow Button Placeholder */}
          <div className="mt-8">
            <button
              onClick={(e) => {
                createRipple(e);
              }}
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

        {/* Right Card */}
        <div className="bg-neutral-2 relative flex flex-[1.5] flex-col justify-between overflow-hidden rounded-3xl p-8 shadow-xl transition-shadow hover:shadow-2xl md:p-10">
          {/* SVG Background Layer Placeholder */}
          <div className="pointer-events-none absolute inset-0 z-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={assets.images.hexagon}
              alt="Hexagon Background"
              className="absolute right-0 -bottom-25 opacity-100"
            />
          </div>

          <div className="relative z-10 space-y-2">
            <h2 className="text-2xl leading-tight font-bold text-gray-900 sm:text-3xl md:text-4xl">
              Send Money Instantly Across Borders
            </h2>
            <p className="max-w-md text-sm text-gray-500 sm:text-base">
              Gain deep insights into your financial health with our advanced
              analytics tools.
            </p>
          </div>

          {/* Currency Input/Exchange Box */}
          <div className="relative z-10 mt-8 flex items-center justify-between gap-4 rounded-2xl p-6">
            <div className="relative flex flex-col gap-6">
              {/* Send Section */}
              <div className="xlm:gap-4 flex items-center justify-between sm:gap-10 md:gap-30">
                <div>
                  <span className="text-xs font-medium text-gray-400">
                    Send
                  </span>
                  <div className="text-xl font-bold text-gray-900 sm:text-2xl">
                    $1800.75
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs font-medium text-gray-400">
                    Currency
                  </span>
                  <div className="text-base font-bold text-gray-900 sm:text-lg">
                    US Dollar
                  </div>
                </div>
              </div>

              {/* Divider & Exchange Icon */}
              <div className="relative flex items-center justify-center border-t border-gray-200">
                <button
                  type="button"
                  className="absolute flex h-8 w-8 items-center justify-center rounded-full bg-gray-400 text-white"
                >
                  {/* Placeholder Exchange Icon */}
                  {/*eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={assets.icons.refresh}
                    alt="Exchange Icon"
                    className=""
                  />
                </button>
              </div>

              {/* Receive Section */}
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-medium text-gray-400">
                    Receive
                  </span>
                  <div className="text-xl font-bold text-gray-900 sm:text-2xl">
                    £1350.45
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs font-medium text-gray-400">
                    Currency
                  </span>
                  <div className="text-base font-bold text-gray-900 sm:text-lg">
                    GB Pound
                  </div>
                </div>
              </div>
            </div>
            <div className="relative z-10 mt-6 flex justify-end">
              <button
                onClick={(e) => {
                  createRipple(e);
                }}
                className="relative flex transform-gpu items-center justify-center overflow-hidden rounded-xl transition-transform duration-300 ease-out will-change-transform outline-none select-none focus:outline-none active:scale-90 active:rotate-45 sm:h-12 sm:w-12 md:hover:scale-110 md:hover:rotate-45 md:hover:shadow-lg"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={assets.icons.emoji}
                  alt="upper-arrow"
                  className="pointer-events-none h-15 w-15 object-contain sm:h-20 sm:w-20 md:w-25"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurrencyExchange;
