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
  [key: string]: string;
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
};

type ColorType = {
  [key: string]: string;
  primary: string;
  secondary: string;
  light?: string;
  danger: string;
  warning: string;
  success: string;
};

export type Styles = {
  solid: ColorType;
  outline: ColorType;
};
