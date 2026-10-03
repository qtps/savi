import Link from 'next/link';
import { assets } from '@/app/lib/assets';
import PlayBtn from '../ui/PlayBtn';
import AppleBtn from '../ui/AppleBtn';

export function SiteFooter() {
  return (
    <footer className="w-full border-t border-[#dce3dd] bg-white text-sm text-[#68776e]">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-12 lg:px-8">
        {/* Top Content Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Brand & Bio */}
          <div className="flex flex-col gap-4">
            {/* Logo */}
            <div className="flex items-center gap-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={assets.icons.emoji}
                alt="savi icons"
                className="h-10 w-10"
              />
              <span className="text-xl font-bold text-black">Savi</span>
            </div>

            <p className="max-w-xs leading-relaxed">
              Take control of your money with Savi. Track your spending, save
              smartly, and invest wisely—all in one easy-to-use app.
            </p>

            {/* Social Icons (Lucide React) */}
            <div className="flex items-center gap-3 pt-2 text-[#333]">
              <Link href="#" className="hover:opacity-75">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={assets.icons.facebook}
                  alt="Facebook"
                  className="h-10 w-10"
                />
              </Link>
              <Link href="#" className="hover:opacity-75">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={assets.icons.instagram}
                  alt="Instagram"
                  className="h-10 w-10"
                />
              </Link>
              <Link href="#" className="hover:opacity-75">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={assets.icons.twitter}
                  alt="Twitter"
                  className="h-8 w-8"
                />{' '}
                {/* X / Twitter icon */}
              </Link>
              <Link href="#" className="hover:opacity-75">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={assets.icons.linkedin}
                  alt="LinkedIn"
                  className="h-8 w-8"
                />
              </Link>
            </div>
          </div>

          {/* Column 2: Menu */}
          <div className="flex flex-col gap-3">
            <h3 className="font-semibold text-black">Menu</h3>
            <ul className="flex flex-col gap-2.5">
              <li>
                <Link href="#" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Info */}
          <div className="flex flex-col gap-3">
            <h3 className="font-semibold text-black">Info</h3>
            <ul className="flex flex-col gap-2.5">
              <li>
                <Link href="#" className="hover:underline">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Download App & Buttons Placeholder */}
          <div className="flex flex-col gap-3">
            <h3 className="font-semibold text-black">Download the App now</h3>
            <p className="leading-relaxed">
              Track your spending patterns today.
            </p>

            {/* Your Custom Buttons Container */}
            <div className="mt-2 flex flex-col items-start gap-3">
              {/* TODO: Place your App Store / Google Play Button components here */}

              <PlayBtn />
              <AppleBtn />
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-4 text-left">
          <p className="text-xs text-[#68776e]">
            Copyright © 2026 Savi. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
