import React from "react";

import FormField, { FormFieldProps } from "@next/components/form/field";
import SelectInput, { SelectInputProps } from "@next/components/input/select";

export type { SelectOption } from "@next/components/input/select";

type FormFieldSelectProps = FormFieldProps & SelectInputProps;

export default function FormFieldSelect(
  props: Omit<FormFieldSelectProps, "children">
) {
  return (
    <FormField {...props}>
      <SelectInput {...props} />
    </FormField>
  );
}
