"use client";

import { useTheme } from "next-themes";
import type { FC } from "react";
import { useEffect, useState } from "react";

import { Particles } from "@/components/ui/particles";

export const BackgroundParticles: FC = () => {
  const { theme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(theme === "dark" ? "#ffffff" : "#000000");
  }, [theme]);

  return (
    <Particles
      className="absolute inset-0"
      quantity={100}
      ease={80}
      color={color}
      refresh
    />
  );
};
