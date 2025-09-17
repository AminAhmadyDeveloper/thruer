"use client";

import Link from "next/link";
import type React from "react";
import { useRef, useState } from "react";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SafeShow } from "@/components/utils/safe-show";
import { useSsr } from "@/hooks/use-ssr";

type FeaturesProps = {
  description: string;
  logo: React.ReactNode;
  link?: string;
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
    if (!divReference.current || isFocused || !isBrowser) {
      return;
    }

    requestAnimationFrame(() => {
      const rect = divReference.current?.getBoundingClientRect();
      setPosition({
        x: event.clientX - (rect?.left ?? 0),
        y: event.clientY - (rect?.top ?? 0),
      });
    });
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
      className="group relative overflow-hidden rounded-xl border bg-white dark:border-gray-800 dark:bg-gradient-to-r dark:from-black dark:to-neutral-950 dark:shadow-2xl"
      onBlur={handleBlur}
      onFocus={handleFocus}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      ref={divReference}
    >
      <div
        className="-inset-px pointer-events-none absolute opacity-0 transition duration-300"
        style={{
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, ${props.color || "var(--primary-transparent)"}, transparent 40%)`,
          opacity,
        }}
      />
      <div
        className="group-hover:!text-foreground ps-6 pt-6"
        style={{ color: props.color?.slice(0, 7) }}
      >
        {props.logo}
      </div>
      <CardHeader className="border-b-0 pb-6">
        <CardTitle className="text-xl">{props.name}</CardTitle>
        <CardDescription>{props.description}</CardDescription>
      </CardHeader>
      <SafeShow on={props.link}>
        {(link) => {
          return (
            <CardFooter>
              <CardAction>
                <Link href={link} target="_blank">
                  Documentation
                </Link>
              </CardAction>
            </CardFooter>
          );
        }}
      </SafeShow>
    </Card>
  );
};
