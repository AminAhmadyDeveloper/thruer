import Image from "next/image";
import { images } from "@/images";

export const HeroSectionImage = () => {
  return (
    <Image
      src={images["light-house-score"]}
      alt={images["light-house-score"].src}
      width={1024}
      height={512}
      className="min-w-full rounded-xl"
      priority
    />
  );
};
