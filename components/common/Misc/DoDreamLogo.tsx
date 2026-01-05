"use client";

import Link from "next/link";

interface DoDreamLogoProps {
  size?: "xs" | "sm" | "md" | "lg";
  accentColor?: string;
  doorFillColor?: string;
  doorHandleColor?: string;
  href?: string;
  className?: string;
}

const sizeConfig = {
  xs: {
    container: "text-[8px]",
    door: "w-3 h-4",
    text: "font-medium",
  },
  sm: {
    container: "text-xs",
    door: "w-5 h-6",
    text: "font-medium",
  },
  md: {
    container: "text-xl",
    door: "w-8 h-10 mx-1",
    text: "font-medium",
  },
  lg: {
    container: "text-3xl",
    door: "w-8 h-10",
    text: "font-bold",
  },
};

function DoorIcon({
  className,
  fillColor,
  handleColor,
}: {
  className?: string;
  fillColor?: string;
  handleColor?: string;
}) {
  return (
    <span className={`relative inline-flex items-center justify-center ${className}`}>
      <svg viewBox="0 0 24 30" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="2" width="20" height="26" rx="2" className={fillColor || "fill-gold/10"} />
        <rect x="2" y="2" width="20" height="26" rx="2" />
        <circle cx="17" cy="15" r="1.5" className={handleColor || "fill-gold"} />
        <line x1="7" y1="8" x2="17" y2="8" strokeWidth="1" opacity="0.3" />
        <line x1="7" y1="12" x2="14" y2="12" strokeWidth="1" opacity="0.3" />
      </svg>
    </span>
  );
}

export function DoDreamLogo({
  size = "md",
  accentColor = "text-gold",
  doorFillColor,
  doorHandleColor,
  href,
  className = "",
}: DoDreamLogoProps) {
  const config = sizeConfig[size];

  const logoContent = (
    <span className={`flex items-center font-serif ${config.container} ${config.text} tracking-tight ${className}`}>
      <span>Do</span>
      <DoorIcon className={config.door} fillColor={doorFillColor} handleColor={doorHandleColor} />
      <span>Dream</span>
    </span>
  );

  if (href) {
    return (
      <Link href={href} className="flex items-center">
        {logoContent}
      </Link>
    );
  }

  return logoContent;
}

export function DoDreamTextLogo({
  accentColor = "text-gold",
  className = "",
}: Pick<DoDreamLogoProps, "accentColor" | "className">) {
  return (
    <span className={`font-serif ${className}`}>
      Do<span className={accentColor}>×</span>Dream
    </span>
  );
}

export function DoDreamInlineLogo({
  doorFillColor = "fill-white/10",
  doorHandleColor = "fill-gold",
  accentColor = "text-gold",
  className = "",
}: Pick<DoDreamLogoProps, "doorFillColor" | "doorHandleColor" | "accentColor" | "className">) {
  return (
    <span className={`inline-flex items-center gap-2 align-middle ${className}`}>
      <span className="relative w-8 h-10 flex items-center justify-center">
        <svg viewBox="0 0 24 30" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="2" y="2" width="20" height="26" rx="2" className={doorFillColor} />
          <rect x="2" y="2" width="20" height="26" rx="2" />
          <circle cx="17" cy="15" r="1.5" className={doorHandleColor} />
          <line x1="7" y1="8" x2="17" y2="8" strokeWidth="1" opacity="0.3" />
          <line x1="7" y1="12" x2="14" y2="12" strokeWidth="1" opacity="0.3" />
        </svg>
      </span>
      <span className="font-serif">
        Do<span className={accentColor}>×</span>Dream
      </span>
    </span>
  );
}

export default DoDreamLogo;
