import type { PropsWithChildren, ReactElement, ReactNode } from "react";
import { Children, Fragment, isValidElement } from "react";

interface BranchProps extends PropsWithChildren {
  condition?: boolean;
}

export const If = ({ children }: BranchProps) => <>{children}</>;
export const ElseIf = ({ children }: BranchProps) => <>{children}</>;
export const Else = ({ children }: { children: ReactNode }) => <>{children}</>;

interface ConditionProps {
  children: ReactNode;
}

export function Condition({ children }: ConditionProps): null | ReactElement {
  const childArray = Children.toArray(children);

  let elseNode: ReactNode = null;

  for (const child of childArray) {
    if (!isValidElement(child)) continue;

    const element = child as ReactElement<{
      children: ReactNode;
      condition?: boolean;
    }>;

    if (
      (element.type === If || element.type === ElseIf) &&
      element.props.condition
    ) {
      return <Fragment>{element.props.children}</Fragment>;
    }

    if (element.type === Else) {
      elseNode = element.props.children;
    }
  }

  return <>{elseNode}</>;
}
