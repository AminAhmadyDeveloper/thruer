import { Skeleton } from "@/components/ui/skeleton";
import { For } from "@/components/utils/for";

export const FeaturesListSkeleton = () => {
  return (
    <For each={[1, 2, 3]}>
      {(category) => (
        <section key={`category-${category}`} className="mb-12">
          <h2 className="text-2xl font-bold mb-6">
            <Skeleton className="h-8 w-48" />
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <For each={[1, 2, 3]}>
              {(feature) => (
                <Skeleton className="h-64" key={`feature-${feature}`} />
              )}
            </For>
          </div>
        </section>
      )}
    </For>
  );
};
