import { Controller, Mode, useForm } from "react-hook-form";
import React, { ReactNode, useCallback } from "react";

import Button from "@next/components/button";
import { useTranslation } from "react-i18next";
import { yupResolver } from "@hookform/resolvers/yup";

import * as yup from "yup";

export type FormSchema<T> = yup.Schema<T | undefined>;

interface FormProps<T = any> {
  mode?: Mode;
  children: ReactNode;
  defaultValues?: T;
  schema?: FormSchema<T>;
  onSubmit: (values: T, event?: Event) => void;
  className?: string;
  displayFeedback?: boolean;
  form?: FormProps;
}

const parseError = (error: any) => ({
  message: error?.message?.toString(),
  hasError: !!error,
});
/**
 * Magically binds custom components to the react-hook-form context
 */
export default function Form<T = any>({
  children,
  defaultValues = {} as T,
  schema,
  mode,
  onSubmit,
  className,
  displayFeedback = true,
}: FormProps<T>) {
  const { t } = useTranslation();

  const { control, handleSubmit, formState } = useForm({
    mode,
    resolver: schema && yupResolver(schema),
    defaultValues: defaultValues as any,
  });
  const { dirtyFields, isSubmitted, isSubmitting, isDirty, errors } = formState;

  const getValidationStatus = useCallback(
    (name: string, hasError: boolean) => {
      if (hasError && isSubmitted) return "error";
      if (!hasError && (dirtyFields as any)[name]) return "success";
      return "";
    },
    [dirtyFields, isSubmitted]
  );

  const parseChildren = (children: ReactNode, recursionLevel = 0): any[] =>
    React.Children.map(children, (child: any) => {
      const { type, props } = child;
      const { name, children } = props || {};

      // Recursively pass field state to children, allow 1 level of recursion only
      if (children instanceof Array && recursionLevel <= 1) {
        return React.cloneElement(child, {
          ...props,
          children: parseChildren(children, recursionLevel + 1),
        });
      }

      // Share the `isSubmitting` status with the bubmit button
      // eslint-disable-next-line react/prop-types
      if (type === Button && props.htmlType === "submit") {
        return React.cloneElement(child, {
          loading: isSubmitting,
          ...props,
        });
      }

      // If the `name` prop is set we assume we are dealing with a form field component and we bind
      // it to the current context
      // defaultValue for the request
      // initialValue for UI
      if (name) {
        const { hasError, message } = parseError((errors as any)[name]);
        return (
          <Controller
            validationStatus={getValidationStatus(name, hasError)}
            helpText={hasError && isSubmitted ? t(message) : undefined}
            hasFeedback={displayFeedback && isDirty}
            as={type}
            control={control}
            {...props}
            //defaultValue={(defaultValues as any)?.[name]}
            initialValue={(defaultValues as any)?.[name]}
          />
        );
      }

      return child;
    }) as any[];

  return (
    <form
      className={className}
      onSubmit={handleSubmit(onSubmit as any)}
      noValidate
    >
      {parseChildren(children)}
    </form>
  );
}
