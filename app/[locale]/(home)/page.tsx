import { FeaturesList } from "@/app/[locale]/(home)/_components/features-list";
import { FeaturesListSkeleton } from "@/app/[locale]/(home)/_components/features-list/features-list-skeleton";
import { HeroSection } from "@/app/[locale]/(home)/_components/hero-section";
import { BackgroundParticles } from "@/app/[locale]/(home)/_components/hero-section/background-particles";
import { Hydration } from "@/components/utils/hydration";
import { QueryBoundary } from "@/components/utils/query-boundary";
import { rootJsonLd } from "@/data/json-ld";
import { tanstack } from "@/orpc";
import { JsonLdProvider } from "@/providers/json-ld-provider";

const HomePage: NextPage = () => {
  const featuresQueryOpt = tanstack.features.list.queryOptions();

  return (
    <main className="pt-14">
      <div className="container">
        <BackgroundParticles />
        <HeroSection />
      </div>
      <div className="container mt-8">
        <h2 className="mb-4 text-center font-bold text-3xl md:text-4xl lg:text-5xl">
          <span id="features" /> Features
        </h2>
        <p className="mb-10 text-balance text-center text-muted-foreground md:text-lg lg:text-xl">
          A Next.js boilerplate with better authentication and Drizzle
          integration
        </p>
        <div className="flex flex-col gap-y-4">
          <Hydration queryOpt={featuresQueryOpt}>
            <QueryBoundary
              loadingFallback={<FeaturesListSkeleton />}
              queryKey={featuresQueryOpt.queryKey}
            >
              <FeaturesList />
            </QueryBoundary>
          </Hydration>
        </div>
      </div>
      <JsonLdProvider>{rootJsonLd}</JsonLdProvider>
    </main>
  );
};

export default HomePage;
