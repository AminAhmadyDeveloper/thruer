import Image from "next/image";
import { images } from "@/images";

export const HeroSectionImage = () => {
  return (
    <Image
      alt={images["light-house-score"].src}
      className="min-w-full rounded-xl"
      height={1040}
      priority
      src={images["light-house-score"]}
      width={1912}
    />
  );
};
