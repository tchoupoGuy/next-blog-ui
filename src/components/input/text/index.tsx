import React, { ReactNode } from "react";
import { Input } from "antd";

export type InputType = "email" | "number" | "password" | "tel" | "text";

export interface TextInputProps<T = any> {
  onChange?: (values: T) => void;

  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;

  placeholder?: string;
  prefix?: ReactNode;
  initialValue?: any;
  type?: InputType;
  name?: string;
  min?: string;
  max?: string;
  disabled?: boolean;
}

export default function TextInput({
  onChange,
  placeholder,
  prefix,
  type = "text",
  initialValue,
  name,
  max,
  min,
  onBlur,
  disabled,
}: TextInputProps) {
  const Element = type === "password" ? Input.Password : Input;

  return (
    <Element
      name={name}
      onChange={onChange}
      onBlur={onBlur}
      placeholder={placeholder}
      prefix={prefix}
      size="large"
      type={type}
      min={min}
      max={max}
      disabled={disabled}
      defaultValue={initialValue}
    />
  );
}
