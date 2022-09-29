export type ButtonProps = {
  className: string;
  children: any;
  color: string;
  icon: any;
  leftIcon: any;
  onClick: any;
  outline: boolean;
  rightIcon: any;
  size: string;
};

export type Sizes = {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
};

type ColorType = {
  primary: string;
  secondary: string;
  "secondary-light"?: string;
  danger: string;
  warning: string;
  success: string;
};

export type Styles = {
  solid: ColorType;
  outline: ColorType;
};
