"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { assets } from "@/app/lib/assets";
import { PrimaryButton } from "../ui/primary-btn";

const menuItems = [
  { label: "All Pages", href: "#all" },
  { label: "Pricing", href: "#pricing" },
  { label: "Features", href: "#features" },
  { label: "Reviews", href: "#reviews" },
];

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handlePointerDown = (event: MouseEvent) => {
      const target = event.target as Node;
      if (menuRef.current && menuRef.current.contains(target)) return;
      setIsMenuOpen(false);
    };

    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, []);

  return (
    <header className="relative z-50 w-full bg-white/60 backdrop-blur-sm">
      <div className="mx-auto flex container items-center justify-between px-4 py-6 xl:px-0">
        {/* Logo */}
        <Link
          href="#top"
          className="flex items-center gap-2 text-[2rem] font-semibold tracking-[-0.06em] text-[#17231e]"
        >
          <Image
            src={assets.icons.emoji}
            alt=""
            width={30}
            height={30}
            aria-hidden="true"
            className="inline-block "
          />
          <span>Savi</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-10 overflow-visible text-[1.05rem] font-medium text-[#53635a] md:flex">
          <div ref={menuRef} className="relative z-20">
            <button
              type="button"
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="flex items-center gap-2 transition hover:text-[#17231e]"
            >
              <span>All Pages</span>
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-200 ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {isMenuOpen && (
              <div className="absolute left-0 top-full z-50 mt-3 w-44 rounded-2xl border border-[#e7e2d6] bg-white p-2 shadow-[0_12px_30px_rgba(26,35,30,0.08)]">
                {menuItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block rounded-xl px-3 py-2 text-sm text-[#2d3b36] transition hover:bg-[#f3f1ea] hover:text-[#17231e]"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="#pricing" className="transition hover:text-[#17231e]">
            Pricing
          </Link>
          <Link href="#features" className="transition hover:text-[#17231e]">
            Features
          </Link>
          <Link href="#reviews" className="transition hover:text-[#17231e]">
            Reviews
          </Link>
        </nav>

        {/* Desktop CTA Button */}
        <Link href="#get-started" className="hidden md:inline-block">
          <PrimaryButton className="rounded-[999px] bg-[#1e2423] px-6 py-3 text-[0.95rem] font-semibold text-white shadow-sm hover:bg-[#2b3734]">
            Get the App Now
          </PrimaryButton>
        </Link>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          aria-label="Toggle Mobile Menu"
          aria-expanded={isMobileMenuOpen}
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          className="flex  text-[#17231e] focus:outline-none md:hidden"
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="absolute left-0 top-full w-full border-b border-[#e7e2d6] bg-white/95 px-6 py-6 shadow-lg backdrop-blur-md md:hidden">
          <nav className="flex flex-col gap-4 text-[1.05rem] font-medium text-[#53635a]">
            <Link
              href="#pricing"
              onClick={() => setIsMobileMenuOpen(false)}
              className="transition hover:text-[#17231e]"
            >
              Pricing
            </Link>
            <Link
              href="#features"
              onClick={() => setIsMobileMenuOpen(false)}
              className="transition hover:text-[#17231e]"
            >
              Features
            </Link>
            <Link
              href="#reviews"
              onClick={() => setIsMobileMenuOpen(false)}
              className="transition hover:text-[#17231e]"
            >
              Reviews
            </Link>

            {/* Sub-menu links in Mobile */}
            <div className="my-2 border-t border-[#e7e2d6] pt-3">
              <span className="mb-2 block text-xs font-semibold uppercase tracking-wider text-[#819287]">
                Pages
              </span>
              <div className="flex flex-col gap-2 pl-2">
                {menuItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-sm text-[#2d3b36] hover:text-[#17231e]"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile CTA Button */}
            <div className="pt-2">
              <Link
                href="#get-started"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <PrimaryButton className="w-full justify-center rounded-[999px] bg-[#1e2423] px-6 py-3 text-[0.95rem] font-semibold text-white shadow-sm hover:bg-[#2b3734]">
                  Get the App Now
                </PrimaryButton>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
