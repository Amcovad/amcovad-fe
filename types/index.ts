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

export type Styles = {
  solid: {
    primary: string;
    secondary: string;
    "secondary-50": string;
    danger: string;
    warning: string;
    success: string;
  };
  outline: {
    primary: string;
    secondary: string;
    danger: string;
    warning: string;
    success: string;
  };
};
