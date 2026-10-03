// Icons gulo pore ekhane import kore niben (e.g., Lucide React ba Tailwind Icons)
// import { Wallet, PieChart } from 'lucide-react';
import { assets } from '@/app/lib/assets';

const TrackAndReach = () => {
  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-16 font-sans">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        {/* Left Column - Content */}
        <div className="space-y-12">
          {/* Main Heading & Subtitle */}
          <div className="space-y-6">
            <h1 className="text-4xl leading-[1.15] font-bold tracking-tight text-gray-900 md:text-5xl">
              Set, Track, and Reach <br className="hidden sm:inline" />
              Your Spending Targets.
            </h1>
            <p className="max-w-md text-lg leading-relaxed text-gray-500">
              Take control of your money with Savi. Track your spending, save
              smartly, and invest wisely—all in one easy-to-use app.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {/* Feature 1 */}
            <div className="space-y-4">
              {/* Icon Container */}
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-white shadow-md">
                {/* TODO: Ager icon ta pore ekhane add korben */}
                {/* eslint-disable-next-line @next/next/no-img-element  */}
                <img
                  src={assets.icons.walletAdd}
                  alt="Wallet Icon"
                  className="h-6 w-6"
                />
              </div>
              <h3 className="text-xl leading-snug font-bold text-gray-900">
                Customizable <br />
                Budgets
              </h3>
              <p className="text-sm leading-relaxed text-gray-500">
                Achieve your savings goals with automated plans tailored to your
                needs
              </p>
            </div>

            {/* Feature 2 */}
            <div className="space-y-4">
              {/* Icon Container */}
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-white shadow-md">
                {/* TODO: Ager icon ta pore ekhane add korben */}
                {/* eslint-disable-next-line @next/next/no-img-element  */}
                <img
                  src={assets.icons.dollar}
                  alt="Pie Chart Icon"
                  className="h-6 w-6 brightness-0 invert"
                />
              </div>
              <h3 className="text-xl leading-snug font-bold text-gray-900">
                Detailed Spending <br />
                Analytics
              </h3>
              <p className="text-sm leading-relaxed text-gray-500">
                Provides a comprehensive monthly overview of users can save
                money.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column - Image & Background */}
        <div className="relative flex min-h-125 items-center justify-center overflow-hidden rounded-3xl bg-gray-50 p-8 md:p-12">
          {/* TODO: Dynamic Wave Background Image */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={assets.images.bgTwo}
            alt="Wave Background"
            className="absolute inset-0 h-full w-full object-cover opacity-40"
          />

          {/* App Screen / Mobile Frame Container */}
          <div className="relative -bottom-12 z-10 w-full bg-[rgba(251,252,253,1)]">
            {/* Temporary Placeholder UI structure matching screenshot */}
            <div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={assets.images.singleMobile}
                alt="Mobile UI Overview"
                className="block h-auto w-full transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrackAndReach;
