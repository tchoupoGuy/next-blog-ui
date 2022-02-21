import React, { useCallback } from "react";
import { Radio as AntdRadio } from "antd";
import cn from "classnames";

export interface RadioItem {
  label: string;
  value: string;
}

interface RadioProps {
  className?: string;
  fullWidth?: boolean;
  onChange?: (value: string, item: RadioItem) => void;
  options?: RadioItem[];
  type?: "default" | "button";
  value?: string;
}

export default function Radio({
  className,
  fullWidth,
  onChange,
  options = [],
  type = "default",
  value,
}: RadioProps) {
  const Element = type === "button" ? AntdRadio.Button : AntdRadio;

  const classes = cn(className, {
    "w-full": fullWidth,
    flex: fullWidth,
  });

  const optionClasses = cn({
    "text-center": fullWidth,
    "flex-grow": fullWidth,
  });

  const handleChange = useCallback(
    (e: any) => {
      const { value } = e.target;
      const selectedOption = options.find((option) => option.value === value);

      if (selectedOption) {
        onChange && onChange(value, selectedOption);
      }
    },
    [onChange, options]
  );

  return (
    <AntdRadio.Group value={value} className={classes} onChange={handleChange}>
      {options.map(({ label, value }) => (
        <Element className={optionClasses} key={value} value={value}>
          {label}
        </Element>
      ))}
    </AntdRadio.Group>
  );
}
