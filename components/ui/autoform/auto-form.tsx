import {
  type AutoFormUIComponents,
  AutoForm as BaseAutoForm,
} from "@autoform/react";
import { ArrayElementWrapper } from "@/components/ui/autoform/components/array-element-wrapper";
import { ArrayWrapper } from "@/components/ui/autoform/components/array-wrapper";
import { BooleanField } from "@/components/ui/autoform/components/boolean-field";
import { DateField } from "@/components/ui/autoform/components/date-field";
import { ErrorMessage } from "@/components/ui/autoform/components/error-message";
import { FieldWrapper } from "@/components/ui/autoform/components/field-wrapper";
import { Form } from "@/components/ui/autoform/components/form";
import { NumberField } from "@/components/ui/autoform/components/number-field";
import { ObjectWrapper } from "@/components/ui/autoform/components/object-wrapper";
import { SelectField } from "@/components/ui/autoform/components/select-field";
import { StringField } from "@/components/ui/autoform/components/string-field";
import { SubmitButton } from "@/components/ui/autoform/components/submit-button";
import type { AutoFormProps } from "./types";

const ShadcnUIComponents: AutoFormUIComponents = {
  Form,
  FieldWrapper,
  ErrorMessage,
  SubmitButton,
  ObjectWrapper,
  ArrayWrapper,
  ArrayElementWrapper,
};

export const ShadcnAutoFormFieldComponents = {
  string: StringField,
  number: NumberField,
  boolean: BooleanField,
  date: DateField,
  select: SelectField,
} as const;
export type FieldTypes = keyof typeof ShadcnAutoFormFieldComponents;

export function AutoForm<T extends Record<string, never>>({
  uiComponents,
  formComponents,
  ...props
}: AutoFormProps<T>) {
  return (
    <BaseAutoForm
      {...props}
      formComponents={{ ...ShadcnAutoFormFieldComponents, ...formComponents }}
      uiComponents={{ ...ShadcnUIComponents, ...uiComponents }}
    />
  );
}
