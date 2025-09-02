"use client";

import { ComputerIcon, MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { useIsMounted } from "@/hooks/use-is-mounted";

export const ThemeSwitcher = () => {
  const isMounted = useIsMounted();
  const { theme, setTheme } = useTheme();

  if (!isMounted) return null;

  return (
    <ToggleGroup
      className="rounded-full border p-0.5"
      size="sm"
      type="single"
      value={theme}
      onValueChange={(value) => setTheme(value)}
    >
      <ToggleGroupItem
        className="!rounded-full aspect-square"
        value="dark"
        aria-label="Toggle dark"
      >
        <MoonIcon size={12} />
      </ToggleGroupItem>
      <ToggleGroupItem
        className="!rounded-full aspect-square"
        value="system"
        aria-label="Toggle system"
      >
        <ComputerIcon size={12} />
      </ToggleGroupItem>
      <ToggleGroupItem
        className="!rounded-full aspect-square"
        value="light"
        aria-label="Toggle light"
      >
        <SunIcon size={12} />
      </ToggleGroupItem>
    </ToggleGroup>
  );
};
