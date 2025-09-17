import { Skeleton } from "@/components/ui/skeleton";
import { For } from "@/components/utils/for";

const COLUMN_COUNT: Readonly<number> = 3 as const;
const ROW_COUNT: Readonly<number> = 3 as const;

export const FeaturesListSkeleton = () => {
  return (
    <For each={Array.from(new Array(COLUMN_COUNT))}>
      {(_category, categoryIndex) => (
        <section className="mb-12" key={`category-${categoryIndex}`}>
          <h2 className="mb-6 font-bold text-2xl">
            <Skeleton className="h-8 w-48" />
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <For each={Array.from(new Array(ROW_COUNT))}>
              {(_feature, featureIndex) => (
                <Skeleton
                  className="h-64"
                  key={`feature-${categoryIndex}-${featureIndex}`}
                />
              )}
            </For>
          </div>
        </section>
      )}
    </For>
  );
};
