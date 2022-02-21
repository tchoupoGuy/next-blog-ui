import React from "react";

import FormField, { FormFieldProps } from "@next/components/form/field";
import DateInput, { DateInputProps } from "@next/components/input/date/index";

type FormFieldDateInputProps = FormFieldProps & DateInputProps;

export default function DatePickerInput(
  props: Omit<FormFieldDateInputProps, "children">
) {
  return (
    <FormField {...props}>
      <DateInput {...props} />
    </FormField>
  );
}
