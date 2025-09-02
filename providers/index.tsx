import { type FC, Fragment, type PropsWithChildren } from "react";
import { StylesProvider } from "@/providers/styles-provider";

export const Providers: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Fragment>
      <StylesProvider />
      {children}
    </Fragment>
  );
};
