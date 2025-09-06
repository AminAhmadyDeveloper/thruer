"use client";

import type React from "react";
import { useRef, useState } from "react";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useSsr } from "@/hooks/use-ssr";

type FeaturesProps = {
  description: string;
  logo: React.ReactNode;
  name: string;
  color?: string;
};

export const CardSpotlight = (props: FeaturesProps) => {
  const divReference = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);
  const { isBrowser } = useSsr();

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!divReference.current || isFocused || !isBrowser) return;

    const div = divReference.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: event.clientX - rect.left, y: event.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <Card
      className="relative overflow-hidden rounded-xl border bg-white dark:border-gray-800 dark:bg-gradient-to-r dark:from-black dark:to-neutral-950 dark:shadow-2xl"
      onBlur={handleBlur}
      onFocus={handleFocus}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      ref={divReference}
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
        style={{
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, ${props.color || "var(--primary-transparent)"}, transparent 40%)`,
          opacity,
        }}
      />
      <div className="ps-6 pt-6">{props.logo}</div>
      <CardHeader className="border-b-0 pb-6">
        <CardTitle className="text-xl">{props.name}</CardTitle>
        <CardDescription>{props.description}</CardDescription>
      </CardHeader>
    </Card>
  );
};
