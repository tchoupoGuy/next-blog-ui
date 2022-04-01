import React from "react";
import { Select } from "antd";
import cn from "classnames";

export type SelectOption = {
  text: string;
  value: string;
};

export interface SelectInputProps {
  className?: string;
  options: SelectOption[];
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  mode?: "tags" | "multiple";
  fullWidth?: boolean;
  defaultFirstOption?: boolean;
}

export default function SelectInput({
  options,
  placeholder,
  value,
  onChange,
  mode,
  className,
  fullWidth = true,
  defaultFirstOption,
}: SelectInputProps) {
  return (
    <Select
      defaultValue={defaultFirstOption ? options[0]?.value : undefined}
      mode={mode}
      placeholder={placeholder}
      className={cn(className, {
        "w-full": fullWidth,
      })}
      size="large"
      value={value}
      onChange={onChange}
    >
      {options.map((option) => (
        <Select.Option key={option.value} value={option.value}>
          {option.text}
        </Select.Option>
      ))}
    </Select>
  );
}
