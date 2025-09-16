import Image from "next/image";
import { images } from "@/images";

export const HeroSectionImage = () => {
  return (
    <Image
      src={images["light-house-score"]}
      alt={images["light-house-score"].src}
      width={1912}
      height={1040}
      className="min-w-full rounded-xl"
      priority
    />
  );
};
