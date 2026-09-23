import { assets } from "@/app/lib/assets";

const KeyInsights = () => {
  return (
    <section className="bg-neutral-2 py-16 px-4 sm:px-6 lg:px-8 font-sans container mx-auto">
      <div className="w-full h-auto">
        {/* Top Section: Brand Logos */}
        <div className="text-center mb-16">
          <p className="text-slate-500 text-sm md:text-base font-normal mb-8">
            Trusted by thousands from worldwide
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-80">
            {/* Brand 1 */}
            <div className="flex items-center gap-2 text-slate-700 font-bold text-lg md:text-xl">
              <span>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={assets.icons.rotashow} alt="RotaShow" />
              </span>
              <span>RotaShow</span>
            </div>
            {/* Brand 2 */}
            <div className="flex items-center gap-2 text-slate-700 font-bold text-lg md:text-xl">
              <span>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={assets.icons.waves} alt="waves" />
              </span>
              <span>waves</span>
            </div>
            {/* Brand 3 */}
            <div className="flex items-center gap-2 text-slate-700 font-bold text-lg md:text-xl">
              <span>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={assets.icons.rotashow} alt="RotaShow" />
              </span>
              <span>RotaShow</span>
            </div>
            {/* Brand 4 */}
            <div className="flex items-center gap-2 text-slate-700 font-bold text-lg md:text-xl">
              <span>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={assets.icons.travelers} alt="Travelers" />
              </span>
              <span>travelers.</span>
            </div>
            {/* Brand 5 */}
            <div className="flex items-center gap-2 text-slate-700 font-bold text-lg md:text-xl">
              <span>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={assets.icons.goldlines} alt="goldlines" />
              </span>
              <span>goldlines</span>
            </div>
            {/* Brand 6 */}
            <div className="flex items-center gap-1 text-slate-700 font-bold text-lg md:text-xl">
              <span>Velocity</span>

              <span>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={assets.icons.velocity} alt="velocity" />
              </span>
            </div>
          </div>
        </div>

        {/* Main Section: Key Insights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Side Content */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-[1.15] font-manrope">
              Key Insights Track Your Financial System
            </h2>
            <p className="text-slate-500 text-sm sm:text-base leading-relaxed max-w-md">
              Effortlessly Track, Manage, and Optimize Your Personal and
              Business Finances. Your Comprehensive Companion.
            </p>
            <div className="flex items-center  gap-5 ">
              <button className="bg-[#111111] hover:bg-black text-white px-7 py-3.5 rounded-full font-medium text-sm transition-colors">
                Get the App Now
              </button>
              <button className="bg-[#2563eb] hover:bg-blue-700 text-white w-12 h-12 rounded-full flex items-center justify-center transition-colors">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={assets.icons.upperArrow} alt="upper-arrow" />
              </button>
            </div>
          </div>

          {/* Right Side Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Card 1------------------------------------------------- */}
            <div className="bg-white p-8 rounded-3xl flex flex-col justify-between space-y-8 shadow-xs">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[#2563eb] flex items-center justify-center text-white">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={assets.icons.satisfaction} alt="satisfaction" />
                </div>
                <span className="text-[#2563eb] font-medium text-sm sm:text-base">
                  Satisfaction
                </span>
              </div>
              <div className="space-y-3">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl sm:text-5xl font-bold text-slate-900">
                    80%
                  </span>
                  <span className="text-slate-700 text-lg sm:text-xl font-medium">
                    of users
                  </span>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed">
                  improved their savings within the first three months.
                </p>
              </div>
            </div>

            {/* Card 2 -----------------------------------------*/}
            <div className="bg-white p-8 rounded-3xl flex flex-col justify-between space-y-8 shadow-xs">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[#2563eb] flex items-center justify-center text-white">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={assets.icons.message} alt="satisfaction" />
                </div>
                <span className="text-[#2563eb] font-medium text-sm sm:text-base">
                  Feedbacks
                </span>
              </div>
              <div className="space-y-3">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl sm:text-5xl font-bold text-slate-900">
                    500k
                  </span>
                  <span className="text-slate-700 text-lg sm:text-xl font-medium">
                    reviews
                  </span>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed">
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
