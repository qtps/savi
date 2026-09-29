import { assets } from '@/app/lib/assets';
import Image from 'next/image';

const AppleBtn = () => {
  return (
    <button className="bg-neutral-4 flex items-center gap-2 rounded-full px-3 py-2 text-white max-[360px]:px-2 max-[360px]:py-1 sm:px-6 sm:py-3 md:px-8 md:py-4">
      <Image
        src={assets.icons.apple}
        alt="Apple logo"
        width={28}
        height={28}
        className="h-auto w-4 max-[360px]:w-3 sm:w-9"
      />

      <div className="flex flex-col items-start gap-0">
        <span className="text-[10px] max-[360px]:text-[9px] sm:text-sm md:text-base">
          Download on the
        </span>
        <span className="text-xs font-semibold max-[360px]:text-[11px] sm:text-lg md:text-xl">
          App Store
        </span>
      </div>
    </button>
  );
};

export default AppleBtn;
