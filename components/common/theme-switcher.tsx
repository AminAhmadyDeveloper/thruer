"use client";

import { ComputerIcon, MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { useIsMounted } from "@/hooks/use-is-mounted";

export const ThemeSwitcher = () => {
  const isMounted = useIsMounted();
  const { theme, setTheme } = useTheme();

  if (!isMounted) {
    return null;
  }

  return (
    <ToggleGroup
      className="rounded-full border p-0.5"
      onValueChange={(value) => setTheme(value)}
      size="sm"
      type="single"
      value={theme}
    >
      <ToggleGroupItem
        aria-label="Toggle dark"
        className="!rounded-full aspect-square"
        value="dark"
      >
        <MoonIcon size={12} />
      </ToggleGroupItem>
      <ToggleGroupItem
        aria-label="Toggle system"
        className="!rounded-full aspect-square"
        value="system"
      >
        <ComputerIcon size={12} />
      </ToggleGroupItem>
      <ToggleGroupItem
        aria-label="Toggle light"
        className="!rounded-full aspect-square"
        value="light"
      >
        <SunIcon size={12} />
      </ToggleGroupItem>
    </ToggleGroup>
  );
};
