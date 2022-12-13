import React from "react";
import { DatePicker } from "rsuite";
import { Controller, useFormContext } from "react-hook-form";
import classNames from "classnames";
import { Label } from "./Label";
import { ErrorMessage } from "./ErrorMessage";

type DatepickerProps = {
  name?: any;
  label?: string;
  labelClassName?: string;
  placeholder?: string;
};
const Datepicker = ({
  name,
  label,
  labelClassName,
  placeholder,
}: DatepickerProps) => {
  const { control } = useFormContext();
  return (
    <>
      {label && (
        <Label
          name={name}
          htmlFor={name}
          text={label}
          className={classNames("text-sm text-secondary-700", labelClassName)}
        />
      )}
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <DatePicker
            size="lg"
            oneTap
            format="dd-MM-yyyy"
            isoWeek
            appearance="default"
            placeholder={placeholder}
            style={{ width: "100%" }}
            value={field.value}
            onChange={(e) => field.onChange(e)}
          />
        )}
      />
      <ErrorMessage name={name} />
    </>
  );
};

Datepicker.defaultProps = {
  label: null,
  placeholder: null,
};

export default Datepicker;
