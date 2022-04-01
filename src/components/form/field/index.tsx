import React, { ReactNode } from "react";
import { Form } from "antd";
import { Rule } from "antd/lib/form";

export interface FormFieldProps {
  className?: string;
  children: ReactNode;
  label?: string;
  validationStatus?: "success" | "warning" | "error" | "validating" | "";
  helpText?: string;
  hasFeedback?: boolean;
  name?: string;
  rules?: Rule[];
  required?: boolean;
  initialValue?: any;
}

export type FormFieldElement<T> = T & Omit<FormFieldProps, "children">;

export default function FormField({
  className,
  children,
  label,
  validationStatus = "",
  helpText,
  hasFeedback,
  name,
  required,
  initialValue,
}: FormFieldProps) {
  return (
    <Form.Item
      name={name}
      colon={false}
      className={className}
      hasFeedback={hasFeedback}
      validateStatus={validationStatus}
      label={label}
      help={helpText}
      rules={[{ required: required }]}
      initialValue={initialValue}
    >
      {children}
    </Form.Item>
  );
}
