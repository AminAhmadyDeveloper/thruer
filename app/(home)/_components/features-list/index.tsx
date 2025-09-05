"use client";

import { useSuspenseQuery } from "@tanstack/react-query";
import type { FC } from "react";
import { CardSpotlight } from "@/app/(home)/_components/features-list/card-spotlight";
import { FeaturesIcon } from "@/app/(home)/_components/features-list/features-icon";
import { For } from "@/components/utils/for";
import { tanstack } from "@/orpc";

export const FeaturesList: FC = () => {
  const { data: features } = useSuspenseQuery(
    tanstack.features.list.queryOptions(),
  );

  return (
    <For each={features}>
      {(feature) => {
        return (
          <CardSpotlight
            description={feature.description}
            key={feature.name}
            logo={<FeaturesIcon className="size-12" iconName={feature.logo} />}
            name={feature.name}
            color={feature.brandColor}
          />
        );
      }}
    </For>
  );
};
