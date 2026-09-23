import type { ButtonHTMLAttributes } from "react";

type SecondaryButtonProps = Readonly<ButtonHTMLAttributes<HTMLButtonElement>>;

export function SecondaryButton({
  className = "",
  ...props
}: SecondaryButtonProps) {
  return (
    <button
      className={`inline-flex items-center justify-center rounded-full border border-[#b9c6bd] px-5 py-3 text-sm font-semibold text-[#17231e] transition hover:border-[#17231e] ${className}`}
      {...props}
    />
  );
}
