import React from "react";
import { useFormContext } from "react-hook-form";
import { Label, HelperLabel } from "./Label";
import { ErrorMessage } from "./ErrorMessage";
import classNames from "classnames";

type CheckboxProps = {
  checked: boolean;
  checkboxClassName: string;
  containerClassName: string;
  description: string;
  disabled: boolean;
  helperLabel: boolean;
  helperLabelClassName: string;
  label: string;
  name: string;
  size: string;
  value: any;
};

export function Checkbox({
  checked,
  checkboxClassName,
  containerClassName,
  description,
  disabled,
  helperLabel,
  helperLabelClassName,
  label,
  name,
  size,
  value,
}: CheckboxProps) {
  const iconName = {
    checked: {
      sm: "bg-checked-sm",
      md: "bg-checked-md",
    },
    "disabled-checked": {
      sm: "bg-checked-sm-disabled",
      md: "bg-checked-md-disabled",
    },
  };

  const { register } = useFormContext();

  const iconClass =
    (disabled && checked) || disabled ? "disabled-checked" : "checked";

  return (
    <>
      <div className="flex relative">
        <div
          className={classNames(
            "flex items-center",
            { "pointer-events-none": checked },
            containerClassName
          )}
        >
          <input
            checked={checked}
            disabled={disabled}
            id={`checkbox-${name}-${value.toString()}`}
            className={`form-checkbox ${
              disabled || (disabled && checked)
                ? `disabled:${iconName[iconClass][size]}`
                : `checked:${iconName[iconClass][size]}`
            }
            ${size === "md" ? "w-5 h-5" : "w-4 h-4"} ${checkboxClassName}`}
            type="checkbox"
            {...register(name)}
            value={value}
          />
        </div>
        {label && !helperLabel && (
          <Label
            name={name}
            className="ml-2 mb-1 "
            feedBack="FEEDBACK.NONE"
            htmlFor={`checkbox-${name}-${value.toString()}`}
            text={label}
            checked={checked}
          />
        )}
        {helperLabel && (
          <HelperLabel
            name={name}
            htmlFor={`checkbox-${name}-${value.toString()}`}
            helperLabelClassName={helperLabelClassName}
            title={label}
            text={description}
            checked={checked}
          />
        )}
      </div>
    </>
  );
}

Checkbox.defaultProps = {
  checked: null,
  checkboxClassName: "",
  containerClassName: null,
  description: "",
  disabled: false,
  helperLabel: false,
  helperLabelClassName: null,
  label: null,
  size: "sm",
  name: "",
  value: false,
};

type CheckboxGroupProps = {
  checked: boolean;
  checkboxClassName: string;
  description: string;
  disabled: boolean;
  helperLabel: boolean;
  name: string;
  options: any;
  size: string;
};
export function CheckboxGroup({
  checked,
  checkboxClassName,
  description,
  disabled,
  helperLabel,
  name,
  options,
  size,
}: CheckboxGroupProps) {
  return (
    <>
      {options.map(({ label, value }, index) => {
        if (!value || !label) return null;
        const optionLabel = label || value;
        const optionValue = value || label;
        return (
          <Checkbox
            checked={checked}
            disabled={disabled}
            checkboxClassName={checkboxClassName}
            key={index}
            name={name}
            size={size}
            value={optionValue}
            label={optionLabel}
            containerClassName="pb-1"
            description={description}
            helperLabel={helperLabel}
          />
        );
      })}
      <ErrorMessage name={name} />
    </>
  );
}

CheckboxGroup.defaultProps = {
  options: [],
};
