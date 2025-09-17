import type { FC, PropsWithChildren } from "react";

interface ShowProps extends PropsWithChildren {
  show: boolean;
}

export const Show: FC<ShowProps> = ({ children, show }) => {
  return show ? children : null;
};
