"use client";

import type { FC } from "react";

import { cn } from "@/lib/tailwind-utils";

type TColorProp = string | string[];

interface ShineBorderProps {
  borderRadius?: number;
  borderWidth?: number;
  duration?: number;
  color?: TColorProp;
  className?: string;
  children: React.ReactNode;
}

export const ShineBorder: FC<ShineBorderProps> = ({
  borderRadius = 25,
  borderWidth = 1,
  duration = 14,
  color = "#000000",
  className,
  children,
}) => {
  return (
    <div
      style={
        {
          "--border-radius": `${borderRadius}px`,
        } as React.CSSProperties
      }
      className={cn(
        "relative grid min-h-[60px] w-fit min-w-[300px] place-items-center rounded-[var(--border-radius)] bg-background text-foreground",
        className,
      )}
    >
      <div
        style={
          {
            "--border-width": `${borderWidth}px`,
            "--border-radius": `${borderRadius}px`,
            "--duration": `${duration}s`,
            "--mask-linear-gradient": `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
            "--background-radial-gradient": `radial-gradient(transparent,transparent, ${Array.isArray(color) ? color.join(",") : color},transparent,transparent)`,
          } as React.CSSProperties
        }
        className={`motion-safe:before:animate-shine before:absolute before:inset-0 before:aspect-square before:size-full before:rounded-[--border-radius] before:[background-image:--background-radial-gradient] before:[background-size:300%_300%] before:p-[--border-width] before:will-change-[background-position] before:content-[""] before:![-webkit-mask-composite:xor] before:![mask-composite:exclude] before:[mask:--mask-linear-gradient]`}
      ></div>
      {children}
    </div>
  );
};
