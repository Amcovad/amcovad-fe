import React, { useState, useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { EyeSlash, InfoCircle, PasswordCheck, TickCircle } from "iconsax-react";
import { Label } from "../form/Label";
import { ErrorMessage } from "../form/ErrorMessage";
import classNames from "classnames";
import { showError, showSuccess } from "../../utils/form-helpers";
import { InputProps } from "@/types/index";
import ToolTip from "../form/Tooltip";
import { FEEDBACK } from "@/utils/constant";

const CurrencyInput = ({
  className,
  toolTipColor,
  feedBack = "FEEDBACK.ALL",
  floatLabel,
  Icon = null,
  leadingIcon,
  labelClassName,
  toolTip,
  hintText,
  showTooltipArrow,
  toolTipTitle,
  toolTipContent,
  toolTipPlacement,
  toolTipIcon,
  name,
  placeholder,
  label = "",
  type = "text",
}: InputProps | any) => {
  const {
    register,
    setValue,
    formState: { dirtyFields, errors },
  } = useFormContext();

  const [currencyValue, setCurrencyValue] = useState("");

  const handleInputChange = (e: any) => {
    const inputValue = e.target.value.replace(/[^0-9]/g, ""); // Remove non-numeric characters
    setCurrencyValue(inputValue);
  };

  const formattedValue = Number(currencyValue).toLocaleString();

  useEffect(() => {
    setValue(name, Number(currencyValue), { shouldValidate: true });
  }, [setValue, currencyValue]);

  const inputIcon = Icon;

  const hasErrors = !!errors?.[name];
  const isValid = !!dirtyFields?.[name] && !hasErrors;

  return (
    <>
      {label && !floatLabel && (
        <Label
          feedBack={FEEDBACK.NONE}
          className="text-base flex items-center gap-x-2"
          name={name}
          htmlFor={name}
          text={label}
        >
          {toolTip && (
            <ToolTip
              color={toolTipColor}
              arrow={showTooltipArrow}
              title={toolTipTitle}
              content={toolTipContent}
              placement={toolTipPlacement}
              toolTipIcon={toolTipIcon}
            />
          )}
        </Label>
      )}
      <div className="relative z-0 mb-2 w-full group">
        {leadingIcon && (
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            {leadingIcon}
          </div>
        )}
        <input
          placeholder={placeholder ? placeholder : label}
          type={"text"}
          id={name}
          value={formattedValue}
          onChange={handleInputChange}
          //   {...register(name)}
          className={classNames(
            "block py-3.5 px-1 w-full text-base  border-secondary-100 border rounded-md focus:outline-none focus:ring-0 peer",
            className,
            { "pl-10 pr-8": leadingIcon },
            {
              "placeholder-transparent border-secondary-300 placeholder:text-secondary-25 focus:placeholder:text-secondary-700  appearance-none bg-secondary-25 text-secondary-700 focus:ring-0 peer placeholder-opacity-0":
                floatLabel && !placeholder,
            },
            { "pl-2": !leadingIcon && !floatLabel },
            {
              "has-error-className": showError(hasErrors, feedBack),
            },
            {
              "has-success-className": showSuccess(isValid, feedBack),
            },
            {
              "has-focus-className": !hasErrors && !isValid,
            },
            {
              "has-placeHolder-className": placeholder && !floatLabel,
            }
          )}
        />
        {floatLabel && (
          <Label
            name={name}
            feedBack={feedBack}
            htmlFor={name}
            floatLabel={floatLabel}
            text={label}
            floatLabelClass={labelClassName}
          />
        )}

        {toolTip && floatLabel && (
          <div
            className={classNames(
              "absolute right-0 flex items-center inset-y-0",
              { "pr-8": hasErrors },
              { hidden: isValid },
              { "pr-3": !isValid && !hasErrors }
            )}
          >
            {hasErrors && (
              <div
                className={classNames(
                  "absolute right-0 flex items-center pointer-events-none inset-y-0 pr-3"
                )}
              >
                <InfoCircle size="18px" />
              </div>
            )}
            <ToolTip
              arrow={showTooltipArrow}
              color={toolTipColor}
              title={toolTipTitle}
              content={toolTipContent}
              placement={toolTipPlacement}
              toolTipIcon={toolTipIcon}
            />
          </div>
        )}
        {hasErrors && (
          <div
            className={classNames(
              "absolute right-0 flex items-center text-danger-500 pointer-events-none inset-y-0 pr-3"
            )}
          >
            <InfoCircle size="18px" />
          </div>
        )}

        {isValid &&
          (feedBack === "FEEDBACK.SUCCESS" || feedBack === "FEEDBACK.ALL") && (
            <div
              className={classNames(
                "absolute right-0 flex items-center text-success-500 pointer-events-none inset-y-0 pr-3"
              )}
            >
              <TickCircle size="18px" />
            </div>
          )}

        {inputIcon && !isValid && (
          <div
            className={classNames(
              "absolute inset-y-0 right-0 flex items-center cursor-pointer",
              { "pr-3": !isValid && !hasErrors },
              {
                "pr-9": hasErrors,
              }
            )}
          >
            {inputIcon}
          </div>
        )}
      </div>
      {hintText && (
        <p className="pt-1 text-sm text-secondary-700">{hintText}</p>
      )}
      <ErrorMessage name={name} />
    </>
  );
};

export default CurrencyInput;
