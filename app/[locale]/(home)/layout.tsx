import { Fragment, type PropsWithChildren } from "react";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";

const HomeLayout: NextLayout<PropsWithChildren> = ({ children }) => {
  return (
    <Fragment>
      <Header />
      {children}
      <Footer />
    </Fragment>
  );
};

export default HomeLayout;
