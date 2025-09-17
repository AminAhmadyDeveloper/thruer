"use client";

import { useSuspenseQuery } from "@tanstack/react-query";
import type { FC } from "react";
import { CardSpotlight } from "@/app/[locale]/(home)/_components/features-list/card-spotlight";
import { FeaturesIcon } from "@/app/[locale]/(home)/_components/features-list/features-icon";
import { For } from "@/components/utils/for";
import { tanstack } from "@/orpc";

export const FeaturesList: FC = () => {
  const { data: groupedFeatures } = useSuspenseQuery(
    tanstack.features.list.queryOptions()
  );

  return (
    <For each={groupedFeatures}>
      {(category) => {
        return (
          <section className="mb-12" key={category.title}>
            <h2 className="mb-6 font-bold text-2xl">{category.title}</h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <For each={category.features}>
                {(feature) => (
                  <CardSpotlight
                    color={feature.brandColor}
                    description={feature.description}
                    key={feature.name}
                    link={feature.link}
                    logo={
                      <FeaturesIcon
                        className="size-12"
                        iconName={feature.logo}
                      />
                    }
                    name={feature.name}
                  />
                )}
              </For>
            </div>
          </section>
        );
      }}
    </For>
  );
};
