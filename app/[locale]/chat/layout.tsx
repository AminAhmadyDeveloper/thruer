import { headers } from "next/headers";
import { getLocale } from "next-intl/server";
import { Fragment, type PropsWithChildren } from "react";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { redirect } from "@/i18n/navigation";
import { auth } from "@/server/auth";

const Layout: NextLayout<PropsWithChildren> = async ({ children }) => {
  const authStore = await auth.api.getSession({ headers: await headers() });

  if (!authStore?.session) {
    return redirect({ href: "/auth/sign-in", locale: await getLocale() });
  }

  return (
    <Fragment>
      <Header />
      {children}
      <Footer />
    </Fragment>
  );
};

export default Layout;
