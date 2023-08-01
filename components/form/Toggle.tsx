import React from "react";
import { useFormContext } from "react-hook-form";
import classNames from "classnames";
import { ErrorMessage } from "./ErrorMessage";
import { Label, HelperLabel } from "./Label";

type ToogleType = {
  checked?: boolean;
  className: string;
  containerClassName: string;
  description?: string;
  disabled?: boolean;
  helperLabel?: string;
  helperLabelClassName?: string;
  label: string;
  name?: string;
};

const Toggle = ({
  checked,
  className,
  containerClassName,
  description,
  disabled,
  helperLabel,
  helperLabelClassName,
  label,
  name,
}: ToogleType) => {
  const { register } = useFormContext();
  return (
    <>
      <div className="flex ">
        <div
          className={classNames(
            "relative flex items-center",
            containerClassName
          )}
        >
          <div className="relative">
            <input
              checked={checked}
              disabled={disabled}
              type="checkbox"
              {...register(name)}
              id={name}
              value={true}
              className={classNames(
                "peer appearance-none cursor-pointer bg-secondary-50 border border-secondary-50 rounded-xl checked:border-primary-500 checked:bg-primary-500 w-10 h-5 focus:shadow-primary-xs",
                {
                  "checked:border-primary-500 checked:bg-primary-500":
                    !disabled,
                  "checked:border-secondary-50 checked:bg-secondary-50":
                    disabled,
                },
                className
              )}
            />
            <span
              className={classNames(
                "peer-checked:bg-neutral-white transition-all duration-200 pointer-events-none w-4 h-4 block absolute top-[2px] left-1 rounded-full bg-neutral-white",
                { "peer-disabled:left-5": disabled },
                { "peer-checked:left-5": !disabled }
              )}
            />
          </div>
          {label && !helperLabel && (
            <Label
              name={name}
              htmlFor={name}
              text={label}
              className="ml-2 mb-1 text-base"
            />
          )}
        </div>
        {helperLabel && (
          <HelperLabel
            name={name}
            htmlFor={name}
            helperLabelClassName={helperLabelClassName}
            title={label}
            text={description}
          />
        )}
      </div>
      <ErrorMessage name={name} />
    </>
  );
};

Toggle.defaultProps = {
  className: null,
  containerClassName: null,
  label: null,
};

export default Toggle;
