import { assets } from '@/app/lib/assets';
import Image from 'next/image';

const PlayBtn = () => {
  return (
    <button className="bg-neutral-4 flex items-center gap-2 rounded-full px-3 py-2 text-white max-[360px]:px-2 max-[360px]:py-1 sm:px-6 sm:py-3 md:px-8 md:py-4">
      <Image
        src={assets.icons.googlePlay}
        alt="Google Play logo"
        width={28}
        height={28}
        className="h-auto w-4 max-[360px]:w-3 sm:w-8 md:w-10"
      />

      <div className="flex flex-col items-start gap-0">
        <span className="text-[10px] max-[360px]:text-[9px] sm:text-sm md:text-base">
          Get it on
        </span>
        <span className="text-xs font-semibold max-[360px]:text-[11px] sm:text-lg md:text-xl">
          Google Play
        </span>
      </div>
    </button>
  );
};

export default PlayBtn;
