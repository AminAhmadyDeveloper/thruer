import type { FC, ReactNode } from "react";

export interface SwitcherProps {
  children: ReactNode[];
  next: boolean;
}

export const Switcher: FC<SwitcherProps> = ({ children, next }) => {
  return next ? children[1] : children[0];
};
