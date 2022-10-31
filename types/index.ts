export type ButtonProps = {
  className: string;
  children: any;
  color: string;
  icon: JSX.Element | React.ReactNode;
  leftIcon: any;
  onClick: any;
  outline: boolean;
  rightIcon: any;
  size: string;
};
export type LabelProps = {
  className: string;
  checked?: boolean;
  children?: any;
  feedBack: string;
  floatLabel: boolean;
  floatLabelClass: string;
  htmlFor: string;
  name: string;
  text: any;
};
export type InputProps = {
  className: string;
  feedBack: string;
  floatLabel: boolean;
  Icon: JSX.Element | React.ReactNode;
  leadingIcon: any;
  labelClassName: string;
  toolTip: boolean;
  hintText: string;
  name: string;
  text: any;
  placeholder: string;
  label: string;
  type: string;
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
