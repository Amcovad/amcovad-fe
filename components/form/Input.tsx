import React, { useState } from "react";
import { useFormContext } from "react-hook-form";
import { EyeSlash, InfoCircle, PasswordCheck, TickCircle } from "iconsax-react";
import { Label } from "./Label";
import { ErrorMessage } from "./ErrorMessage";
import classNames from "classnames";
import { showError, showSuccess } from "../../utils/form-helpers";
import { InputProps } from "@/types/index";
import ToolTip from "./Tooltip";
import { FEEDBACK } from "@/utils/constant";

const Input = ({
  className,
  toolTipColor,
  feedBack,
  floatLabel,
  Icon,
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
  label,
  type,
}: InputProps) => {
  const {
    register,
    formState: { dirtyFields, errors },
  } = useFormContext();

  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword((show) => !show);
  };

  const PasswordIcon = showPassword ? (
    <EyeSlash
      size="18px"
      color="#A9ABAD"
      variant="Bold"
      onClick={handleShowPassword}
    />
  ) : (
    <PasswordCheck
      size="18px"
      color="#A9ABAD"
      variant="Bold"
      onClick={handleShowPassword}
    />
  );
  const isPasswordField = type === "password";
  const inputIcon = isPasswordField ? PasswordIcon : Icon;

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
          type={isPasswordField ? (showPassword ? "text" : "password") : type}
          id={name}
          {...register(name)}
          className={classNames(
            "block py-3.5 px-1 w-full text-base bg-secondary-25 border-secondary-100 border-2 rounded-md focus:outline-none focus:ring-0 peer",
            className,
            { "pl-10 pr-8": leadingIcon },
            {
              "placeholder-transparent border-secondary-300 placeholder:text-secondary-25 focus:placeholder:text-secondary-700  appearance-none bg-secondary-25 text-secondary-700 focus:ring-0 peer placeholder-opacity-0":
                floatLabel && !placeholder,
            },
            { "pl-2": !leadingIcon && !floatLabel },
            {
              errorClassName: showError(hasErrors, feedBack),
            },
            {
              successClassName: showSuccess(isValid, feedBack),
            },
            {
              focusClassName: !hasErrors && !isValid,
            },
            {
              " placeHolderClassName": placeholder && !floatLabel,
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

Input.defaultProps = {
  feedBack: "FEEDBACK.ALL",
  label: null,
  type: "text",
  placeholder: null,
  Icon: null,
};
export default Input;
