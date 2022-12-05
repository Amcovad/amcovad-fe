import React from "react";
import { useFormContext } from "react-hook-form";
import classNames from "classnames";
import ToolTip from "./Tooltip";
import { FEEDBACK } from "@/utils/constant";
import { ErrorMessage } from "./ErrorMessage";
import { Label } from "./Label";
import { showError, showSuccess } from "../../utils/form-helpers";
import { ArrowDown2, InfoCircle, TickCircle } from "iconsax-react";
import { CommonTypes, SelectFieldProps, TooltipTypes } from "@/types/index";

export function SelectField({
  children,
  className,
  containerClassName,
  floatLabel,
  feedBack,
  label,
  labelClassName,
  leadingIcon,
  name,
  toolTip,
  hintText,
  toolTipTitle,
  toolTipContent,
  toolTipColor,
  toolTipPlacement,
  toolTipIcon,
  showTooltipArrow,
}: SelectFieldProps) {
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
          feedBack={FEEDBACK.NONE}
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
      <div
        className={classNames(
          "relative z-0 mb-2 w-full group",
          containerClassName
        )}
      >
        {leadingIcon && (
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            {leadingIcon}
          </div>
        )}
        <select
          id={name}
          {...register(name)}
          className={classNames(
            "block py-3.5 px-2 w-full text-base appearance-none transition ease-in-out bg-secondary-25 border-secondary-100 border-2 rounded-md focus:outline-none focus:ring-0 peer",
            className,
            { "pl-10 pr-8": leadingIcon },
            {
              "mt-6 placeholder-transparent border-secondary-300 appearance-none bg-secondary-25 text-secondary-700 focus:ring-0 peer":
                floatLabel,
            },
            {
              errorClassName: showError(hasErrors, feedBack),
            },
            {
              successClassName: showSuccess(isValid, feedBack),
            },
            {
              focusClassName: !hasErrors && !isValid,
            }
          )}
        >
          {children}
        </select>

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

        <div
          className={classNames(
            "absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none"
          )}
        >
          <ArrowDown2 size="18px" color="#A9ABAD" variant="Bold" />
        </div>

        {toolTip && floatLabel && (
          <div
            className={classNames(
              "absolute right-0 flex items-center inset-y-0",
              { "pr-8": !hasErrors && !isValid },
              { hidden: toolTip === hasErrors || isValid }
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
              "absolute right-0 flex items-center pointer-events-none inset-y-0",
              {
                "pr-8": hasErrors,
              }
            )}
          >
            <InfoCircle size="18px" />
          </div>
        )}

        {isValid &&
          (feedBack === FEEDBACK.SUCCESS || feedBack === FEEDBACK.ALL) && (
            <div
              className={classNames(
                "absolute right-0 flex items-center pointer-events-none inset-y-0",
                {
                  "pr-8": isValid,
                }
              )}
            >
              <TickCircle size="18px" />
            </div>
          )}
      </div>
      {hintText && (
        <p className="pt-1 text-sm text-secondary-700">{hintText} </p>
      )}
    </>
  );
}

SelectField.defaultProps = {
  feedBack: "FEEDBACK.ALL",
  floatLabel: false,
  label: null,
  leadingIcon: null,
  toolTip: false,
  hintText: null,
};
type SelectTypes = {
  defaultOption: string;
  label: string;
  leadingIcon?: JSX.Element | React.ReactNode;
  toolTip?: boolean;
  options: any[];
  hintText: string;
};
type SelectProp = CommonTypes & TooltipTypes & SelectTypes;
const Select = ({
  defaultOption,
  floatLabel,
  feedBack,
  label,
  leadingIcon,
  name,
  options,
  toolTip,
  hintText,
  showTooltipArrow,
  toolTipTitle,
  toolTipContent,
  toolTipColor,
  toolTipPlacement,
  toolTipIcon,
}: SelectProp) => {
  return (
    <>
      <SelectField
        floatLabel={floatLabel}
        feedBack={feedBack}
        label={label ? label : defaultOption}
        leadingIcon={leadingIcon}
        name={name}
        toolTip={toolTip}
        hintText={hintText}
        toolTipTitle={toolTipTitle}
        toolTipContent={toolTipContent}
        showTooltipArrow={showTooltipArrow}
        toolTipColor={toolTipColor}
        toolTipPlacement={toolTipPlacement}
        toolTipIcon={toolTipIcon}
      >
        {defaultOption && (
          <option key={name} value="">
            {defaultOption}
          </option>
        )}
        {options.map(({ title, value }, id) => {
          if (!value || !title) return null;
          const optionTitle = title || value;
          const optionValue = value || title;
          return (
            <option key={id} value={optionValue}>
              {optionTitle}
            </option>
          );
        })}
      </SelectField>
      <ErrorMessage name={name} />
    </>
  );
};

export default Select;

Select.defaultProps = {
  defaultOption: null,
  label: null,
  options: [],
};
