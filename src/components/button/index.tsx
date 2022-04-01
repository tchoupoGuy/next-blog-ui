import React, { ReactNode } from "react";
import { Button as AntButton } from "antd";
// import cn from "classnames";

interface ButtonProps {
  children?: ReactNode;
  fullWidth?: boolean;
  loading?: boolean;
  onClick?: (...data: any[]) => void;
  type?: "default" | "primary" | "ghost" | "link";
  htmlType?: "button" | "submit" | "reset";
  className?: string;
  size?: "small" | "large";
  icon?: ReactNode;
  disabled?: boolean;
  id?: string;
}

export default function Button({
  children,
  className,
  fullWidth,
  htmlType = "button",
  loading,
  onClick,
  type = "default",
  size = "large",
  icon,
  disabled,
  id,
}: ButtonProps) {
  return (
    <AntButton
      icon={icon}
      // className={cn(className, {
      //   "border-none": !!icon,
      // })}
      className={className}
      htmlType={htmlType}
      block={fullWidth}
      loading={loading}
      onClick={onClick}
      //shape={icon ? 'circle' : 'round'}
      size={size}
      type={type}
      disabled={disabled}
      id={id}
    >
      {children}
    </AntButton>
  );
}
