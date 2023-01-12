export type ButtonProps = {
  className: string;
  children: any;
  color: string;
  disabled?: boolean;
  icon?: JSX.Element | React.ReactNode;
  leftIcon: any;
  onClick?: () => void;
  outline: boolean;
  rightIcon: any;
  size: string;
};

export type CommonTypes = {
  className?: string;
  feedBack?: string;
  floatLabel?: boolean;
  name?: string;
};

export type TooltipTypes = {
  showTooltipArrow?: boolean;
  toolTipColor?: string;
  toolTipTitle?: string;
  toolTipContent?: string;
  toolTipPlacement?: placements;
  toolTipIcon?: JSX.Element | React.ReactNode;
};

type LabelTypes = {
  checked?: boolean;
  children?: any;
  floatLabelClass: string;
  htmlFor: string;
  text: any;
};

type InputTypes = {
  Icon: JSX.Element | React.ReactNode;
  leadingIcon?: JSX.Element | React.ReactNode;
  labelClassName?: string;
  toolTip?: boolean;
  hintText?: string;
  text?: any;
  placeholder: string;
  label: string;
  type: string;
};

type TextAreaTypes = {
  leadingIcon?: JSX.Element | React.ReactNode;
  label?: string;
  labelClassName?: string;
  toolTip?: boolean;
  hintText?: string;
  text?: any;
  placeholder?: string;
  rows?: number;
};

type placements =
  | "top"
  | "bottom"
  | "right"
  | "left"
  | "bottomStart"
  | "bottomEnd"
  | "topStart"
  | "topEnd"
  | "leftStart"
  | "rightStart"
  | "leftEnd"
  | "rightEnd"
  | "auto"
  | "autoVertical"
  | "autoVerticalStart"
  | "autoVerticalEnd"
  | "autoHorizontal"
  | "autoHorizontalStart"
  | "autoHorizontalEnd";

type SelectFieldTypes = {
  children?: any[];
  containerClassName?: string;
  label?: string;
  labelClassName?: string;
  leadingIcon?: JSX.Element | React.ReactNode;
  toolTip?: boolean;
  hintText?: string;
};
export type LabelProps = LabelTypes & CommonTypes;

export type InputProps = InputTypes & CommonTypes & TooltipTypes;

export type TextAreaProps = TextAreaTypes & CommonTypes & TooltipTypes;

export type SelectFieldProps = SelectFieldTypes & CommonTypes & TooltipTypes;

export type ToolTipProps = {
  arrow?: boolean;
  children?: JSX.Element | React.ReactNode;
  color?: string;
  content?: string;
  placement?: placements;
  toolTipIcon?: JSX.Element | React.ReactNode;
  title?: string;
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
  light: string;
  danger: string;
  warning: string;
  success: string;
};

export type Styles = {
  solid: ColorType;
  outline: ColorType;
};
