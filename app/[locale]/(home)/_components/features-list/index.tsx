"use client";

import { useSuspenseQuery } from "@tanstack/react-query";
import type { FC } from "react";
import { CardSpotlight } from "@/app/[locale]/(home)/_components/features-list/card-spotlight";
import { FeaturesIcon } from "@/app/[locale]/(home)/_components/features-list/features-icon";
import { For } from "@/components/utils/for";
import { tanstack } from "@/orpc";

export const FeaturesList: FC = () => {
  const { data: groupedFeatures } = useSuspenseQuery(
    tanstack.features.list.queryOptions(),
  );

  if (!groupedFeatures) return null;

  return (
    <For each={Object.entries(groupedFeatures)}>
      {([category, features]) => (
        <section key={category} className="mb-12">
          <h2 className="text-2xl font-bold mb-6">{category}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <For each={features}>
              {(feature) => (
                <CardSpotlight
                  description={feature.description}
                  key={feature.name}
                  logo={
                    <FeaturesIcon className="size-12" iconName={feature.logo} />
                  }
                  name={feature.name}
                  color={feature.brandColor}
                  link={feature.link}
                />
              )}
            </For>
          </div>
        </section>
      )}
    </For>
  );
};
