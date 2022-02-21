import React from "react";
import { DatePicker } from "antd";
import { Moment } from "moment";

export interface DateInputProps {
  onChange?: () => void;
  placeholder?: string;
  defaultPickerValue?: Moment;
  defaultValue?: Moment;
  format: string;
  showToday?: boolean;
  value?: Moment;
  name?: string;
  showTime?: Moment;
  disabledDate?: { start: string; end: string };
}

export default function DateInput({
  onChange,
  placeholder,
  defaultPickerValue,
  defaultValue,
  format,
  value,
  name,
  disabledDate,
}: DateInputProps) {
  const disableDateRange = (current: Moment) => {
    // If we only have the start date to deactivate date fields

    if (disabledDate?.start && !disabledDate?.end) {
      return current && current.isAfter(disabledDate?.start);
    }
    return false;
  };

  return (
    <DatePicker
      name={name}
      onChange={onChange}
      placeholder={placeholder}
      defaultValue={defaultValue}
      value={value}
      defaultPickerValue={defaultPickerValue}
      format={format}
      showTime
      disabledDate={disableDateRange}
    />
  );
}
