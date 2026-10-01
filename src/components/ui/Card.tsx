import { assets } from '@/app/lib/assets';
import gsap from 'gsap';

// Props Type Definition
interface CardProps {
  title?: React.ReactNode;
  description1?: React.ReactNode;
  description2?: React.ReactNode;
  buttonText?: string;
  onPrimaryButtonClick?: () => void;
  onIconButtonClick?: () => void;
  iconSrc?: string;
  className?: string;
}

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

const Card: React.FC<CardProps> = ({
  title = (
    <>
      Automated Transaction <br /> Categorization
    </>
  ),
  description1 = 'Automatically categorizes transactions into predefined categories such as groceries, dining, entertainment, and utilities using machine learning.',
  description2 = 'Take control of your money with Savi. Track your spending, save smartly, and invest in one easy-to-use app. Download app and start exploring.',
  buttonText = 'Get the App Now',
  onPrimaryButtonClick,
  onIconButtonClick,
  iconSrc = assets.icons.upperArrow,
  className = '',
}) => {
  return (
    <div className={`w-full space-y-6 text-left md:w-1/2 ${className}`}>
      <h1 className="text-3xl leading-tight font-bold text-gray-900 md:text-4xl">
        {title}
      </h1>

      {(description1 || description2) && (
        <div className="space-y-4 text-sm leading-relaxed text-gray-600 md:text-base">
          {description1 && <p>{description1}</p>}
          {description2 && <p>{description2}</p>}
        </div>
      )}

      {/* Buttons Section */}
      <div className="flex items-center gap-3 sm:gap-5">
        <button
          onClick={(e) => {
            createRipple(e);
            if (onPrimaryButtonClick) onPrimaryButtonClick();
          }}
          className="relative transform-gpu overflow-hidden rounded-full bg-[#111111] px-6 py-3 text-sm font-medium text-white transition-transform duration-300 ease-out will-change-transform outline-none select-none focus:outline-none active:scale-95 sm:px-7 sm:py-3.5 md:hover:scale-105 md:hover:shadow-xl"
        >
          {buttonText}
        </button>

        <button
          onClick={(e) => {
            createRipple(e);
            if (onIconButtonClick) onIconButtonClick();
          }}
          className="relative flex h-11 w-11 transform-gpu items-center justify-center overflow-hidden rounded-full bg-[#2563eb] text-white transition-transform duration-300 ease-out will-change-transform outline-none select-none focus:outline-none active:scale-90 active:rotate-45 sm:h-12 sm:w-12 md:hover:scale-110 md:hover:rotate-45 md:hover:shadow-lg"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={iconSrc}
            alt="upper-arrow"
            className="pointer-events-none h-5 w-5 object-contain"
          />
        </button>
      </div>
    </div>
  );
};

export default Card;
