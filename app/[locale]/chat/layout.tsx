import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { Fragment, type PropsWithChildren } from "react";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { auth } from "@/server/auth";

const Layout: NextLayout<PropsWithChildren> = async ({ children }) => {
  const authStore = await auth.api.getSession({ headers: await headers() });

  if (!authStore?.session) {
    return redirect("/auth/sign-in");
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
