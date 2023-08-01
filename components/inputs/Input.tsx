import React, { FC, InputHTMLAttributes } from "react";

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  errorMessage?: any;
}

const TextInput: FC<TextInputProps> = ({
  label,
  placeholder,
  id,
  name,
  errorMessage,
  ...rest
}) => {
  return (
    <div className="flex flex-col gap-y-2 font-normal text-sm">
      {label && <label htmlFor={id}>{label}</label>}
      <input
        type="text"
        id={id}
        className="block py-3.5 px-2 w-full text-base bg-secondary-25 border-secondary-100 border rounded-md focus:outline-none focus:ring-0 peer has-placeHolder-className"
        placeholder={placeholder}
        {...rest}
      />
      {errorMessage && <p className="text-red-600">{errorMessage}</p>}
    </div>
  );
};

// peer focus:outline-none focus:border-[#1B4B66] invalid:outline-none invalid:border-[#B00020] focus:shadow-sm

export default TextInput;
