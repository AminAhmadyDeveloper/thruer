import type { AutoFormFieldProps } from "@autoform/react";
import type React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { For } from "@/components/utils/for";

export const SelectField: React.FC<AutoFormFieldProps> = ({
  field,
  inputProps,
  error,
  id,
}) => {
  // biome-ignore lint/correctness/noUnusedVariables: remove key from props
  const { key, ...props } = inputProps;

  return (
    <Select
      {...props}
      defaultValue={field.default}
      onValueChange={(value) => {
        const syntheticEvent = {
          target: {
            value,
            name: field.key,
          },
        } as React.ChangeEvent<HTMLInputElement>;
        props.onChange(syntheticEvent);
      }}
    >
      <SelectTrigger className={error ? "border-destructive" : ""} id={id}>
        <SelectValue placeholder="Select an option" />
      </SelectTrigger>
      <SelectContent>
        <For each={field.options || []}>
          {([keyItem, labelItem]) => (
            <SelectItem key={keyItem} value={keyItem}>
              {labelItem}
            </SelectItem>
          )}
        </For>
      </SelectContent>
    </Select>
  );
};
