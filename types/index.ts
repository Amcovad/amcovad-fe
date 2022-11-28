export type ButtonProps = {
  className: string;
  children: any;
  color: string;
  icon: JSX.Element | React.ReactNode;
  leftIcon: any;
  onClick?: () => void;
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
  showTooltipArrow: boolean;
  text: any;
  toolTipColor: string;
  toolTipTitle: string;
  toolTipContent: string;
  toolTipPlacement: any;
  toolTipIcon: JSX.Element | React.ReactNode;
  placeholder: string;
  label: string;
  type: string;
};

export type TextAreaProps = {
  className: string;
  feedBack: string;
  floatLabel: boolean;
  leadingIcon: any;
  label: string;
  labelClassName: string;
  toolTip: boolean;
  hintText: string;
  name: string;
  showTooltipArrow: boolean;
  text: any;
  toolTipColor: string;
  toolTipTitle: string;
  toolTipContent: string;
  toolTipPlacement: placements;
  toolTipIcon: JSX.Element | React.ReactNode;
  placeholder: string;
  rows: number;
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

export type ToolTipProps = {
  arrow: boolean;
  children: JSX.Element | React.ReactNode;
  color: string;
  content: string;
  placement: placements;
  toolTipIcon: JSX.Element | React.ReactNode;
  title: string;
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
