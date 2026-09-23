import { assets } from "@/app/lib/assets";
import AppleBtn from "../ui/AppleBtn";
import Playbtn from "../ui/PlayBtn";
import Image from "next/image";

const Hero = () => {
  const mobileImgSrc = assets.images.mobileThree;

  return (
    <section className="relative pt-10 sm:pt-16 md:pt-20 lg:pt-24  2xl:pt-20 container mx-auto">
      <Image
        src={assets.images.vectorCurve}
        alt="gravity curve"
        width={1920}
        height={1080}
        className="absolute inset-0 w-full h-full object-cover opacity-6"
      />

      <div className="container mx-auto px-4 flex flex-col items-center text-center z-10  ">
        {/* Top Text Content */}
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-4 sm:gap-6">
          <h1 className="font-manrope text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-tight">
            Take Control of Your Financial Future with Ease
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-xl mx-auto leading-relaxed">
            Take control of your money with Savi. Track your spending, save
            smartly all in one easy-to-use app.
          </p>

          {/* Buttons */}
          <div className="flex items-center justify-center gap-4 pt-2">
            <AppleBtn />
            <Playbtn />
          </div>

          {/* Bottom Mobile Mockup Image */}
          <div
            className="mt-8 sm:mt-12 w-full xsm:h-82 xlm:h-86 sm:h-133 md:h-162 lg:h-203 mx-h-203  flex justify-center items-center overflow-hidden relative
          
          "
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={mobileImgSrc}
              alt="Savi App Preview"
              className="w-full max-w-237.5 lg:max-w-287.5 h-auto absolute -top-5 left-0 "
            />

            <div
              className="absolute xsm:w-40 sm:w-60 lg:w-75  xl:w-130 xsm:gap-0 xsm:hidden 

               
              xmm:hidden xlm:block sm:gap-2

              xsm:top-0
              xsm:right-0

              xmm:top-5
              xmm:right-5

              sm:top-9
              sm:right-5    
              md:top-20 
              md:right-20
              lg:top-28
              lg:right-25

              xl:top-20
              xl:-right-30 
            
            flex flex-col items-start gap-3"
            >
              {/* Star Rating */}
              <div className="flex items-center xmm:gap-0 xmm:mb-1 sm:gap-1">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Image
                    key={index}
                    src={assets.icons.star}
                    alt="star icon"
                    width={32}
                    height={32}
                    className="w-5 h-5"
                  />
                ))}
              </div>

              <h2
                className="

              xsm:text-md
              sm:text-3xl
              md:text-4xl
              lg:text-5xl
              xl:text-6xl 
              
              font-manrope font-bold
              text-left
              "
              >
                500k+
              </h2>
              <p
                className="xmm:text-xs text-gray-600 text-left 
              sm:text-base lg:text-xl xl:text-3xl"
              >
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
