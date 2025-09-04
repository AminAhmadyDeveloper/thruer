import Link from "next/link";
import type { FC } from "react";
import { ThemeSwitcher } from "@/components/common/theme-switcher";
import { LogoSvg } from "@/components/svg/logo-svg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/tailwind-utils";

const twitterUrl = "https://twitter.com/MorningStartHero";

const links = [
  {
    group: "Thruer",
    items: [
      {
        href: "/#features",
        title: "Features",
      },
      {
        href: "/#products",
        title: "Products",
      },
      {
        href: "/#customers",
        title: "Customers",
      },
      {
        href: "/#pricing",
        title: "Pricing",
      },
      {
        href: "/#help",
        title: "Help",
      },
      {
        href: "/#about",
        title: "About Us",
      },
    ],
  },
  {
    group: "Products",
    items: [
      {
        href: "/#startups",
        title: "Startups",
      },
      {
        href: "/#freelancers",
        title: "Freelancers",
      },
      {
        href: "/#companies",
        title: "Companies",
      },
      {
        href: "/#students",
        title: "Students",
      },
      {
        href: "/#work-with-us",
        title: "Work With Us",
      },
      {
        href: "/#designs",
        title: "Designs",
      },
      {
        href: "/#management",
        title: "Management",
      },
    ],
  },
  {
    group: "Company",
    items: [
      {
        href: "/#about",
        title: "About Us",
      },
      {
        href: "/#solutions",
        title: "Solutions",
      },
      {
        href: "/#blog",
        title: "Blog",
      },
      {
        href: "/#news",
        title: "News",
      },
      {
        href: "/#contact",
        title: "Contact Us",
      },
      {
        href: "/#help",
        title: "Help",
      },
    ],
  },
  {
    group: "Legal",
    items: [
      {
        href: "/#license",
        title: "License",
      },
      {
        href: "/#privacy-policy",
        title: "Privacy Policy",
      },
      {
        href: "/#cookies",
        title: "Cookies",
      },
      {
        href: "/#security",
        title: "Security",
      },
    ],
  },
];

const date = new Date();

export const Footer: FC<ReactHtmlElement> = ({ className, ...props }) => {
  return (
    <footer
      className={cn(className, "border-b bg-white pt-20 dark:bg-transparent")}
      {...props}
    >
      <div className="mb-8 border-b md:mb-12">
        <div className="container mx-auto flex flex-wrap items-end justify-between gap-6 px-6 pb-6">
          <Link aria-label="go home" className="block size-fit" href="/#">
            <LogoSvg className="size-9 text-primary" />
          </Link>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <Link
              aria-label="X/Twitter"
              className="block text-muted-foreground hover:text-primary"
              href="#"
              rel="noopener noreferrer"
              target="_blank"
            >
              <svg
                className="size-6"
                height="1em"
                viewBox="0 0 24 24"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title className="hidden">X/Twitter</title>
                <path
                  d="M10.488 14.651L15.25 21h7l-7.858-10.478L20.93 3h-2.65l-5.117 5.886L8.75 3h-7l7.51 10.015L2.32 21h2.65zM16.25 19L5.75 5h2l10.5 14z"
                  fill="currentColor"
                />
              </svg>
            </Link>
            <Link
              aria-label="LinkedIn"
              className="block text-muted-foreground hover:text-primary"
              href="#"
              rel="noopener noreferrer"
              target="_blank"
            >
              <svg
                className="size-6"
                height="1em"
                viewBox="0 0 24 24"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title className="hidden">LinkedIn</title>
                <path
                  d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"
                  fill="currentColor"
                />
              </svg>
            </Link>
            <Link
              aria-label="Facebook"
              className="block text-muted-foreground hover:text-primary"
              href="#"
              rel="noopener noreferrer"
              target="_blank"
            >
              <svg
                className="size-6"
                height="1em"
                viewBox="0 0 24 24"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title className="hidden">Facebook</title>
                <path
                  d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"
                  fill="currentColor"
                ></path>
              </svg>
            </Link>
            <Link
              aria-label="Threads"
              className="block text-muted-foreground hover:text-primary"
              href="#"
              rel="noopener noreferrer"
              target="_blank"
            >
              <svg
                className="size-6"
                height="1em"
                viewBox="0 0 24 24"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title className="hidden">Threads</title>
                <path
                  color="currentColor"
                  d="M19.25 8.505c-1.577-5.867-7-5.5-7-5.5s-7.5-.5-7.5 8.995s7.5 8.996 7.5 8.996s4.458.296 6.5-3.918c.667-1.858.5-5.573-6-5.573c0 0-3 0-3 2.5c0 .976 1 2 2.5 2s3.171-1.027 3.5-3c1-6-4.5-6.5-6-4"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                ></path>
              </svg>
            </Link>
            <Link
              aria-label="Instagram"
              className="block text-muted-foreground hover:text-primary"
              href="#"
              rel="noopener noreferrer"
              target="_blank"
            >
              <svg
                className="size-6"
                height="1em"
                viewBox="0 0 24 24"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title className="hidden">Instagram</title>
                <path
                  d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"
                  fill="currentColor"
                ></path>
              </svg>
            </Link>
            <Link
              aria-label="TikTok"
              className="block text-muted-foreground hover:text-primary"
              href="#"
              rel="noopener noreferrer"
              target="_blank"
            >
              <svg
                className="size-6"
                height="1em"
                viewBox="0 0 24 24"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title className="hidden">TikTok</title>
                <path
                  d="M16.6 5.82s.51.5 0 0A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6c0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64c0 3.33 2.76 5.7 5.69 5.7c3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48"
                  fill="currentColor"
                ></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-6">
        <div className="grid gap-12 md:grid-cols-5 md:gap-0 lg:grid-cols-4">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 md:col-span-5 md:row-start-1 lg:col-span-3">
            {links.map((link) => (
              <div key={link.group} className="space-y-4 text-sm">
                <span className="block font-medium">{link.group}</span>
                {link.items.map((item) => (
                  <Link
                    className="block text-muted-foreground duration-150 hover:text-primary"
                    href={item.href}
                    key={item.href}
                  >
                    <span>{item.title}</span>
                  </Link>
                ))}
              </div>
            ))}
          </div>
          <form className="row-start-1 border-b pb-8 text-sm md:col-span-2 md:border-none lg:col-span-1">
            <div className="space-y-4">
              <Label className="block font-medium" htmlFor="mail">
                News Teller
              </Label>
              <div className="flex gap-2">
                <Input
                  className="h-8 text-sm"
                  id="mail"
                  name="mail"
                  placeholder="Your E-mail..."
                  type="email"
                />
                <Button size="sm">Submit</Button>
              </div>
              <span className="block text-sm text-muted-foreground">
                Don't miss discounts
              </span>
            </div>
          </form>
        </div>
        <div className="mt-12 flex flex-wrap items-end justify-between gap-6 py-6">
          <Link
            className="order-last block text-center text-sm leading-10 text-muted-foreground md:order-first"
            href={twitterUrl}
            target="_blank"
          >
            © {date.getFullYear()} - Software rights belong to thruer.
          </Link>
          <ThemeSwitcher />
        </div>
      </div>
    </footer>
  );
};
