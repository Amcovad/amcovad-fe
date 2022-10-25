import React from "react";
import classNames from "classnames";
import { ButtonProps, Sizes, Styles } from "../../types/index";

const Button = ({
  className,
  children,
  color,
  icon,
  leftIcon,
  onClick,
  outline,
  rightIcon,
  size,
}: ButtonProps) => {
  const sizes: Sizes = {
    xs: "py-1.5 px-3 text-xs",
    sm: "py-2 px-[1.125rem] text-sm",
    md: "py-2.5 px-4 text-base",
    lg: "py-2.5 px-[1.125rem] text-lg",
    xl: "px-6 py-3.5",
  };

  const styles: Styles = {
    solid: {
      primary:
        "text-white bg-primary-500 hover:bg-primary-600 hover:text-white focus:shadow-primary-xs ",
      secondary:
        "text-white bg-secondary-800 hover:bg-secondary-900 hover:text-white focus:shadow-secondary-xs",
      light:
        "text-secondary-500 bg-secondary-50 hover:bg-secondary-100 hover:text-secondary-600 focus:shadow-secondary-xs",
      danger:
        "text-white bg-danger-600 hover:bg-danger-500 hover:text-white focus:shadow-danger-xs",
      warning:
        "text-white bg-warning-500 hover:bg-warning-600 hover:text-white focus:shadow-warning-xs",
      success:
        "text-white bg-success-600 hover:bg-success-500 hover:text-white focus:shadow-success-xs",
    },
    outline: {
      primary:
        "text-secondary-600 border border-secondary-600 hover:bg-secondary-600 hover:border-secondary-600 hover:text-white focus:shadow-primary-xs",
      secondary:
        "text-primary-500 border border-primary-500 hover:bg-secondary-600 hover:border-secondary-600 hover:text-white focus:shadow-secondary-xs ",
      danger:
        "text-danger-600 border border-danger-600 hover:bg-danger-500 hover:border-danger-500 hover:text-white focus:shadow-danger-xs ",
      warning:
        "text-warning-600 border border-warning-600 hover:bg-warning-500 hover:border-warning-500 hover:text-white focus:shadow-warning-xs ",
      success:
        "text-success-600 border border-success-600 hover:bg-success-500 hover:border-success-500 hover:text-white focus:shadow-success-xs ",
    },
  };

  const outlineClass = outline ? "outline" : "solid";

  return (
    <button
      onClick={onClick}
      className={classNames(
        "transition duration-150 focus:outline-none font-Inter font-medium rounded text-center inline-flex items-center justify-center mr-2",
        styles[outlineClass][color],
        sizes[size],
        className
      )}
    >
      {leftIcon && <span className="mr-2 -ml-1 w-5 h-5">{leftIcon}</span>}
      {icon && <span className="w-5 h-5">{icon}</span>}
      {children}
      {rightIcon && <span className="ml-2 -mr-1 w-5 h-5">{rightIcon}</span>}
    </button>
  );
};

Button.defaultProps = {
  color: "primary",
  className: "",
  leftIcon: null,
  outline: false,
  onClick: () => {},
  rightIcon: null,
  size: "sm",
};

export default Button;
