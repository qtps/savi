import type { ButtonHTMLAttributes } from "react";

type PrimaryButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function PrimaryButton({
  className = "",
  ...props
}: Readonly<PrimaryButtonProps>) {
  return (
    <button
      className={`inline-flex items-center justify-center rounded-full bg-[#17231e] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#2c493d] ${className}`}
      {...props}
    />
  );
}
