import { FeaturesList } from "@/app/(home)/_components/features-list";
import { HeroSection } from "@/app/(home)/_components/hero-section";
import { rootJsonLd } from "@/data/json-ld";
import { images } from "@/images";
import { JsonLdProvider } from "@/providers/json-ld-provider";

const HomePage: NextPage = () => {
  return (
    <main className="flex flex-col items-center">
      <HeroSection
        button={{ text: "Discover Features", url: "/#features" }}
        description="Jump Start your project in seconds, bundled with built-in Authentication, Database, I18n, Forms, SEO, Logging, Error Reporting, Testing, Deployment, Monitoring, and more!"
        heading="Thruer - Next.js Boilerplate"
        imageSrc={images["light-house-score"]}
      />
      <div className="container mt-8">
        <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl lg:text-5xl">
          <p id="features" /> Features
        </h2>
        <p className="mb-10 text-center text-balance text-muted-foreground md:text-lg lg:text-xl">
          Explore the Powerful Features of Next.js Boilerplate
        </p>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3">
          <FeaturesList />
        </div>
      </div>
      <JsonLdProvider>{rootJsonLd}</JsonLdProvider>
    </main>
  );
};

export default HomePage;
