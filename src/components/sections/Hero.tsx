import { assets } from '@/app/lib/assets';
import AppleBtn from '../ui/AppleBtn';
import Playbtn from '../ui/PlayBtn';
import Image from 'next/image';

const Hero = () => {
  const mobileImgSrc = assets.images.mobileThree;

  return (
    <section className="relative container mx-auto pt-10 sm:pt-16 md:pt-20 lg:pt-24 2xl:pt-20">
      <Image
        src={assets.images.vectorCurve}
        alt="gravity curve"
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover opacity-6"
      />

      <div className="z-10 container mx-auto flex flex-col items-center px-4 text-center">
        {/* Top Text Content */}
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-4 sm:gap-6">
          <h1 className="font-manrope text-3xl leading-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-7xl">
            Take Control of Your Financial Future with Ease
          </h1>

          <p className="mx-auto max-w-xl text-sm leading-relaxed text-gray-600 sm:text-base md:text-lg">
            Take control of your money with Savi. Track your spending, save
            smartly all in one easy-to-use app.
          </p>

          {/* Buttons */}
          <div className="flex items-center justify-center gap-4 pt-2">
            <AppleBtn />
            <Playbtn />
          </div>

          {/* Bottom Mobile Mockup Image */}
          <div className="xsm:h-82 xlm:h-86 mx-h-203 relative mt-8 flex w-full items-center justify-center overflow-hidden sm:mt-12 sm:h-133 md:h-162 lg:h-203">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={mobileImgSrc}
              alt="Savi App Preview"
              className="absolute -top-5 left-0 h-auto w-full max-w-237.5 lg:max-w-287.5"
            />

            <div className="xsm:w-40 xsm:gap-0 xsm:hidden xmm:hidden xlm:block xsm:top-0 xsm:right-0 xmm:top-5 xmm:right-5 absolute flex flex-col items-start gap-3 sm:top-9 sm:right-5 sm:w-60 sm:gap-2 md:top-20 md:right-20 lg:top-28 lg:right-25 lg:w-75 xl:top-20 xl:-right-30 xl:w-130">
              {/* Star Rating */}
              <div className="xmm:gap-0 xmm:mb-1 flex items-center sm:gap-1">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Image
                    key={index}
                    src={assets.icons.star}
                    alt="star icon"
                    width={32}
                    height={32}
                    className="h-5 w-5"
                  />
                ))}
              </div>

              <h2 className="xsm:text-md font-manrope text-left font-bold sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
                500k+
              </h2>
              <p className="xmm:text-xs text-left text-gray-600 sm:text-base lg:text-xl xl:text-3xl">
                Trusted and Downloaded by thousands <br /> of peoples around the
                world.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
