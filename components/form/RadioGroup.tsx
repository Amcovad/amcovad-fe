import React from "react";
import { useFormContext } from "react-hook-form";
import { Label, HelperLabel } from "./Label";
import { ErrorMessage } from "./ErrorMessage";
import classNames from "classnames";
import { FEEDBACK } from "@/utils/constant";

type RadioProps = {
  checked?: boolean;
  description: string;
  disabled?: boolean;
  helperLabel?: boolean;
  helperLabelClassName: string;
  label: string;
  name?: string;
  radioClassName?: string;
  size?: string;
  value?: any;
};

type sizeType = {
  [key: string]: string;
  sm: string;
  md: string;
};

type iconNameType = {
  radio: sizeType;
  "disabled-radio": sizeType;
};
export function Radio({
  checked,
  description,
  disabled,
  helperLabel,
  helperLabelClassName,
  label,
  name,
  radioClassName,
  size,
  value,
}: RadioProps) {
  const iconName: iconNameType = {
    radio: {
      sm: "checked:bg-radio-sm",
      md: "checked:bg-radio-md",
    },
    "disabled-radio": {
      sm: "disabled:bg-radio-sm-disabled",
      md: "disabled:bg-radio-md-disabled",
    },
  };

  const iconClass =
    (disabled && checked) || disabled ? "disabled-radio" : "radio";
  const { register } = useFormContext();
  return (
    <>
      <div className="inline-flex items-center">
        <input
          checked={checked}
          disabled={disabled}
          className={classNames(
            "form-radio",
            {
              "w-5 h-5": size === "md",
              "w-4 h-4": size !== "md",
            },
            iconName[iconClass][size],
            radioClassName
          )}
          id={`radio-${value}`}
          name={name}
          {...register(name)}
          type="radio"
          value={value}
        />
        {label && !helperLabel && (
          <Label
            name={name}
            className="mx-2 mb-0"
            feedBack={FEEDBACK.NONE}
            htmlFor={`radio-${value}`}
            text={label}
            checked={checked}
          />
        )}
        {helperLabel && (
          <HelperLabel
            name={name}
            htmlFor={`radio-${value}`}
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

Radio.defaultProps = {
  checked: null,
  disabled: false,
  label: null,
  name: "",
  radioClassName: "",
  size: "sm",
  value: "",
};

type RadioGroupProps = {
  checked?: boolean;
  columns?: boolean;
  description?: any;
  disabled?: boolean;
  helperLabel?: boolean;
  helperLabelClassName?: any;
  name: string;
  options: any;
  radioClassName?: string;
  size?: string;
};
const RadioGroup = ({
  checked,
  columns,
  description,
  disabled,
  helperLabel,
  helperLabelClassName,
  name,
  options,
  radioClassName,
  size,
}: RadioGroupProps) => {
  return (
    <>
      <div
        className={classNames("flex flex-wrap ", { "flex-col gap-2": columns })}
      >
        {options.map(
          (
            { label, value }: { label: string; value: string },
            index: number
          ) => {
            if (!value && !label) return null;
            const optionLabel = label || value;
            const optionValue = value || label;

            return (
              <Radio
                checked={checked}
                disabled={disabled}
                description={description}
                helperLabel={helperLabel}
                helperLabelClassName={helperLabelClassName}
                size={size}
                key={index}
                name={name}
                radioClassName={radioClassName}
                value={optionValue}
                label={optionLabel}
              />
            );
          }
        )}
      </div>
      <ErrorMessage name={name} />
    </>
  );
};

RadioGroup.defaultProps = {
  options: [],
};

export default RadioGroup;
