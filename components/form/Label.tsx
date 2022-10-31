import React from "react";
import { useFormContext } from "react-hook-form";
import classNames from "classnames";
import { showError, showSuccess } from "../../utils/form-helpers";
import { LabelProps } from "@/types/index";

export function Label({
  className,
  checked,
  children,
  feedBack,
  floatLabel,
  floatLabelClass,
  htmlFor,
  name,
  text,
}: LabelProps) {
  const {
    formState: { dirtyFields, errors },
  } = useFormContext();

  const hasErrors = !!errors?.[name];
  const isValid = !!dirtyFields?.[name] && !hasErrors;

  return (
    <label
      htmlFor={htmlFor || name}
      className={classNames(
        "font-Inter",
        {
          "absolute text-sm text-secondary-700 duration-300 transform p-2 scale-75 top-2 left-2 z-10 origin-[0] peer-focus:left-2  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 ":
            floatLabel,
        },
        { "pointer-events-none": checked },
        {
          "block mb-1.5 cursor-pointer text-secondary-700 font-normal ":
            !floatLabel,
        },
        { [className]: !floatLabel },
        { [floatLabelClass]: floatLabel },
        { "text-success-600": showSuccess(isValid, feedBack) },
        { "text-secondary-800": !hasErrors && !isValid },
        { "text-danger-500": showError(hasErrors, feedBack) }
      )}
    >
      {text}
      {children}
    </label>
  );
}

Label.defaultProps = {
  className: "text-xs",
  feedBack: "FEEDBACK.ALL",
  floatLabel: null,
  floatLabelClass:
    "bg-secondary-25 peer-focus:bg-secondary-25 -translate-y-7 peer-focus:-translate-y-7",
  htmlFor: null,
  name: null,
  text: null,
};
