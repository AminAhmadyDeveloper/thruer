import type { AutoFormFieldProps } from "@autoform/react";
import type React from "react";
import { Input } from "@/components/ui/input";

export const NumberField: React.FC<AutoFormFieldProps> = ({
  inputProps,
  error,
  id,
}) => {
  // biome-ignore lint/correctness/noUnusedVariables: remove key from props
  const { key, ...props } = inputProps;

  return (
    <Input
      className={error ? "border-destructive" : ""}
      id={id}
      type="number"
      {...props}
    />
  );
};
