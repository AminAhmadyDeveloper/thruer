import { Fragment } from "react";
import { ThemeSwitcher } from "@/components/common/theme-switcher";
import { rootJsonLd } from "@/data/json-ld";
import { JsonLdProvider } from "@/providers/json-ld-provider";

const HomePage: NextPage = () => {
  return (
    <Fragment>
      <ThemeSwitcher />
      <JsonLdProvider>{rootJsonLd}</JsonLdProvider>
    </Fragment>
  );
};

export default HomePage;
