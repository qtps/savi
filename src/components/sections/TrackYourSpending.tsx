import { assets } from '@/app/lib/assets';
import Image from 'next/image';

const TrackYourSpending = () => {
  return (
    <section className="container mx-auto px-4 py-8 text-white md:px-0">
      <div className="flex flex-col overflow-hidden rounded-4xl bg-neutral-900 md:flex-row">
        {/* Left Content Side */}
        <div className="flex w-full flex-col justify-center space-y-8 p-6 sm:p-10 md:w-1/2 lg:p-16">
          <div className="space-y-4 md:space-y-6">
            <h1 className="text-xl leading-tight font-semibold tracking-tight sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
              Track your spending, save smartly, and invest wisely—all in one
              easy-to-use app
            </h1>
            <p className="max-w-xl text-base font-normal text-gray-400 sm:text-lg md:text-xl">
              Take control of your money with Savi. Track your spending, save
              smartly, and invest wisely—all in one easy-to-use app.
            </p>
          </div>

          {/* Buttons Section */}
          <div className="flex flex-wrap items-center gap-4 pt-2 sm:pt-4">
            <button className="rounded-full bg-white px-6 py-3.5 text-base font-medium text-black transition hover:bg-gray-200 sm:px-8 sm:py-4 sm:text-lg">
              Get the App Now
            </button>
            <button
              aria-label="Action Button"
              className="flex items-center justify-center rounded-full bg-[#1a65ff] p-3.5 text-white transition hover:bg-blue-600 sm:p-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-5 w-5 sm:h-6 sm:w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </button>
          </div>

          {/* Social Proof / Review Section */}
          <div className="flex flex-wrap items-center gap-4 pt-4 sm:gap-6 sm:pt-8">
            <span className="text-3xl font-bold tracking-tight sm:text-4xl">
              500K+
            </span>
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="flex -space-x-3">
                <div className="h-10 w-10 overflow-hidden rounded-full border-2 border-black bg-gray-600 sm:h-12 sm:w-12">
                  {/* eslint-disable-next-line @next/next/no-img-element  */}
                  <img src={assets.images.avatarOne} alt="avater1" />
                </div>
                <div className="h-10 w-10 overflow-hidden rounded-full border-2 border-black bg-gray-500 sm:h-12 sm:w-12">
                  {/* eslint-disable-next-line @next/next/no-img-element  */}
                  <img src={assets.images.avatarTwo} alt="avater1" />
                </div>
              </div>

              <div className="text-xs leading-snug text-gray-400 sm:text-sm">
                <p className="font-medium text-gray-300">Well reviewed</p>
                <p>by 500K+ customers</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Image Side (As Background Container) */}
        <div className="relative min-h-87.5 w-full md:min-h-full md:w-1/2">
          <Image
            src="/images/mobile.png"
            alt="Mobile devices"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
};

export default TrackYourSpending;
