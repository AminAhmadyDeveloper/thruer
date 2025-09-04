"use client";

import { UserButton } from "@daveyplate/better-auth-ui";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import type { FC } from "react";
import React from "react";
import { LogoSvg } from "@/components/svg/logo-svg";
import { useEventListener } from "@/hooks/use-event-listener";
import { cn } from "@/lib/tailwind-utils";

const menuItems = [
  { href: "#", name: "Features" },
  { href: "/#about-us", name: "About Us" },
  { href: "/#faq", name: "FAQ" },
];

interface HeaderProps {
  bannerOffset?: boolean;
  className?: string;
}

export const Header: FC<HeaderProps> = ({ bannerOffset, className }) => {
  const [menuState, setMenuState] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
  };

  useEventListener("scroll", handleScroll);

  return (
    <header className={className}>
      <nav
        className="fixed z-50 w-full px-2 transition-all duration-300 data-[has-banner=false]:top-0 data-[has-banner=true]:top-14 data-[has-banner=true]:data-[scrolled=true]:top-0"
        data-has-banner={bannerOffset}
        data-scrolled={isScrolled}
        data-state={menuState && "active"}
      >
        <div
          className={cn(
            "container mx-auto mt-2 rounded-2xl px-6 transition-all duration-300 lg:px-12",
            {
              "max-w-7xl rounded-2xl border bg-background/50 backdrop-blur-lg lg:px-5":
                isScrolled,
            },
          )}
        >
          <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
            <div className="flex w-full justify-between lg:w-auto">
              <Link
                aria-label="home"
                className="flex items-center space-x-2"
                href="/"
              >
                <LogoSvg className="size-10 text-primary" />
              </Link>
              <div className="flex items-center gap-x-3">
                <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit lg:hidden">
                  <UserButton variant="ghost" size="sm" />
                </div>
                <button
                  type="button"
                  aria-label={menuState ? "Close Menu" : "Open Menu"}
                  className="relative flex size-8 shrink-0 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-card-foreground text-card lg:hidden"
                  onClick={() => setMenuState(!menuState)}
                >
                  <Menu className="m-auto size-6 duration-200 in-data-[state=active]:scale-0 in-data-[state=active]:rotate-180 in-data-[state=active]:opacity-0" />
                  <X className="absolute inset-0 m-auto size-6 scale-0 -rotate-180 opacity-0 duration-200 in-data-[state=active]:scale-100 in-data-[state=active]:rotate-0 in-data-[state=active]:opacity-100" />
                </button>
              </div>
            </div>

            <div className="absolute inset-0 m-auto hidden size-fit lg:block">
              <ul className="flex gap-8 text-sm">
                {menuItems.map((item) => (
                  <li key={item.name}>
                    <Link
                      className="block text-muted-foreground duration-150 hover:text-accent-foreground"
                      href={item.href}
                    >
                      <span>{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border bg-background p-6 shadow-2xl shadow-zinc-300/20 in-data-[state=active]:block md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none lg:in-data-[state=active]:flex dark:shadow-none dark:lg:bg-transparent">
              <div className="lg:hidden">
                <ul className="space-y-6 text-base">
                  {menuItems.map((item) => (
                    <li key={item.name}>
                      <Link
                        className="block text-muted-foreground duration-150 hover:text-accent-foreground"
                        href={item.href}
                      >
                        <span>{item.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="hidden w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit lg:flex">
                <UserButton variant="ghost" size="sm" />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
