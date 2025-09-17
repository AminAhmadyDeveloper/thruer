"use client";

import type { FC } from "react";
import { cn } from "@/lib/tailwind-utils";

type TColorProp = string | string[];

type ShineBorderProps = {
  borderRadius?: number;
  borderWidth?: number;
  duration?: number;
  color?: TColorProp;
  className?: string;
  children: React.ReactNode;
};

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
      className={cn(
        "relative grid min-h-[60px] w-fit min-w-[300px] place-items-center rounded-[var(--border-radius)] bg-white p-3 text-black dark:bg-black dark:text-white",
        className
      )}
      style={
        {
          "--border-radius": `${borderRadius}px`,
        } as React.CSSProperties
      }
    >
      <div
        className={`before:![-webkit-mask-composite:xor] before:![mask-composite:exclude] before:absolute before:inset-0 before:aspect-square before:size-full before:rounded-[--border-radius] before:p-[--border-width] before:will-change-[background-position] before:content-[""] motion-safe:before:animate-shine before:[background-image:--background-radial-gradient] before:[background-size:300%_300%] before:[mask:--mask-linear-gradient]`}
        style={
          {
            "--border-width": `${borderWidth}px`,
            "--border-radius": `${borderRadius}px`,
            "--duration": `${duration}s`,
            "--mask-linear-gradient":
              "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            "--background-radial-gradient": `radial-gradient(transparent,transparent, ${Array.isArray(color) ? color.join(",") : color},transparent,transparent)`,
          } as React.CSSProperties
        }
      />
      {children}
    </div>
  );
};
