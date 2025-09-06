import { BotIcon } from "lucide-react";
import Image, { type StaticImageData } from "next/image";
import { getTranslations } from "next-intl/server";
import type { FC } from "react";
import { Button } from "@/components/ui/button";
import { Show } from "@/components/utils/show";

export interface HeroSectionProps {
  icon?: React.ReactNode;
  description: string;
  button: {
    text: string;
    icon?: React.ReactNode;
    url: string;
  };
  trustText?: string;
  imageSrc: string | StaticImageData;
  imageAlt?: string;
}

export const HeroSection: FC<HeroSectionProps> = async ({
  icon = <BotIcon className="size-6" />,
  description,
  button,
  trustText = "Trusted by 25.000+ Developers Worldwide",
  imageSrc,
  imageAlt = "placeholder",
}) => {
  const t = await getTranslations("home-page");

  return (
    <section className="overflow-hidden py-32 w-full">
      <div className="flex flex-col gap-5">
        <div className="relative flex flex-col gap-5">
          <div
            style={{ transform: "translate(-50%, -50%)" }}
            className="absolute top-1/2 left-1/2 -z-10 mx-auto size-[800px] rounded-full border [mask-image:linear-gradient(to_top,transparent,transparent,white,white,white,transparent,transparent)] p-16 md:size-[1300px] md:p-32"
          >
            <div className="size-full rounded-full border p-16 md:p-32">
              <div className="size-full rounded-full border" />
            </div>
          </div>
          <span className="mx-auto flex size-16 items-center justify-center rounded-full border md:size-20">
            {icon}
          </span>
          <h2 className="mx-auto max-w-5xl text-center text-3xl font-medium text-balance md:text-6xl">
            {t("title")}
          </h2>
          <p className="mx-auto max-w-3xl text-center text-muted-foreground md:text-lg">
            {description}
          </p>
          <div className="flex flex-col items-center justify-center gap-3 pt-3 pb-12">
            <Button size="lg" asChild>
              <a href={button.url}>{button.text}</a>
            </Button>
            <Show show={!!trustText}>
              <div className="text-xs text-muted-foreground">{trustText}</div>
            </Show>
          </div>
        </div>
        <Image
          src={imageSrc}
          alt={imageAlt}
          className="mx-auto h-full max-h-[524px] w-full max-w-5xl rounded-2xl object-cover object-top"
          width={1024}
          height={512}
        />
      </div>
    </section>
  );
};
