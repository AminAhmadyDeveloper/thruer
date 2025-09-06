import { Skeleton } from "@/components/ui/skeleton";
import { For } from "@/components/utils/for";

export const FeaturesListSkeleton = () => {
  return (
    <For each={[1, 2, 3, 4, 5, 6]}>
      {(feature) => {
        return <Skeleton className="h-64" key={feature} />;
      }}
    </For>
  );
};
