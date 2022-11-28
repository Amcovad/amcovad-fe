import React from "react";
import { useFormContext } from "react-hook-form";
import { Label } from "./Label";
import { ErrorMessage } from "./ErrorMessage";
import classNames from "classnames";
import { showError, showSuccess } from "@/utils/form-helpers";
import ToolTip from "@/components/form/Tooltip";
import { InfoCircle, TickCircle } from "iconsax-react";
import { TextAreaProps } from "@/types/index";

const Textarea = ({
  className,
  floatLabel,
  feedBack,
  label,
  leadingIcon,
  labelClassName,
  name,
  placeholder,
  rows,
  toolTip,
  hintText,
  showTooltipArrow,
  toolTipTitle,
  toolTipContent,
  toolTipColor,
  toolTipPlacement,
  toolTipIcon,
}: TextAreaProps) => {
  const {
    register,
    formState: { dirtyFields, errors },
  } = useFormContext();

  const hasErrors = !!errors?.[name];
  const isValid = !!dirtyFields?.[name] && !hasErrors;

  return (
    <>
      {label && !floatLabel && (
        <Label
          feedBack="FEEDBACK.NONE"
          className="text-base flex items-center gap-x-2"
          name={name}
          htmlFor={name}
          text={label}
        >
          {toolTip && (
            <ToolTip
              arrow={showTooltipArrow}
              title={toolTipTitle}
              content={toolTipContent}
              placement={toolTipPlacement}
              color={toolTipColor}
              toolTipIcon={toolTipIcon}
            />
          )}
        </Label>
      )}

      <div className="relative z-0 mb-2 w-full group">
        {leadingIcon && (
          <div className="absolute top-5 left-0 flex items-center pl-3 pointer-events-none">
            {leadingIcon}
          </div>
        )}
        <textarea
          rows={rows}
          placeholder={placeholder ? placeholder : label}
          {...register(name)}
          className={classNames(
            "block py-3.5 px-1 w-full text-base bg-secondary-25 border-secondary-100 border-2 rounded-md focus:outline-none focus:ring-0 peer",
            className,
            { "pl-10 pr-8": leadingIcon },
            {
              "placeholder-transparent border-secondary-300 appearance-none bg-secondary-25 text-secondary-700 focus:ring-0 peer":
                floatLabel,
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
              " placeHolderClassName": placeholder,
            }
          )}
        ></textarea>

        {floatLabel && (
          <Label
            name={name}
            feedBack={feedBack}
            htmlFor={name}
            floatLabel
            text={label}
            floatLabelClass={labelClassName}
          />
        )}

        {toolTip && floatLabel && (
          <div
            className={classNames(
              "absolute right-0 flex items-center top-5",
              { "pr-3": !isValid && !hasErrors },
              { "pr-8": hasErrors },
              { hidden: isValid }
            )}
          >
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
              "absolute right-0 flex items-center text-danger-500 pointer-events-none top-5",
              {
                "pr-3": hasErrors,
              }
            )}
          >
            <InfoCircle size="18px" />
          </div>
        )}

        {isValid &&
          (feedBack === "FEEDBACK.SUCCESS" || feedBack === "FEEDBACK.ALL") && (
            <div
              className={classNames(
                "absolute right-0 flex items-center text-success-500 pointer-events-none top-5",
                {
                  "pr-3": isValid,
                }
              )}
            >
              <TickCircle size="18px" />
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

Textarea.defaultProps = {
  className: null,
  feedBack: "FEEDBACK.ALL",
  label: null,
  rows: "3",
  labelClassName:
    "bg-secondary-25 peer-focus:bg-secondary-25 -translate-y-7 peer-focus:-translate-y-7",
  placeholder: null,
};
export default Textarea;
