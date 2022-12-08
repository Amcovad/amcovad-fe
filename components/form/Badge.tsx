import React from "react";
import classNames from "classnames";
import Image from "next/image";
import { MultiplyIcon } from "@/public/assets/dashboard/navBarIcon";

type ColorType = {
  [key: string]: string;
  primary: string;
  secondary: string;
  danger: string;
  warning: string;
  success: string;
  info: string;
  purple: string;
  pink: string;
  orange: string;
};

type stylesTypes = {
  defaultColor: ColorType;
  badgeGroup: ColorType;
};
const styles: stylesTypes = {
  defaultColor: {
    primary: "bg-primary-400",
    secondary: "bg-secondary-500",
    danger: "bg-danger-500",
    warning: "bg-warning-500",
    success: "bg-success-500",
    info: "bg-info-400",
    purple: "bg-purple-500",
    pink: "bg-pink-500",
    orange: "bg-orange-500",
  },
  badgeGroup: {
    primary: "bg-primary-50 text-primary-600",
    secondary: "bg-secondary-50 text-secondary-500",
    danger: "bg-danger-50 text-danger-600",
    warning: "bg-warning-50 text-warning-600",
    success: "bg-success-50 text-success-600",
    info: "bg-info-50 text-info-600",
    purple: "bg-purple-100 text-purple-600",
    pink: "bg-pink-100 text-pink-600",
    orange: "bg-orange-100 text-orange-600",
  },
};
export const Badge = ({ color, text }: { color: string; text: string }) => {
  return (
    <span
      className={classNames(
        "font-Inter font-medium rounded-2xl text-center inline-flex items-center justify-center gap-1.5 text-xs text-secondary-25 px-2 py-0.5",
        styles.defaultColor[color]
      )}
    >
      {text}
    </span>
  );
};

Badge.defaultProps = {
  color: "primary",
  text: null,
};

type BadgeGroupProps = {
  afterIcon: JSX.Element | React.ReactNode;
  avatar: any;
  badgeText: string;
  color: string;
  text: string;
};
export const BadgeGroup = ({
  afterIcon,
  avatar,
  badgeText,
  color,
  text,
}: BadgeGroupProps) => {
  return (
    <span
      className={classNames(
        "font-Inter py-1 font-medium mr-2 rounded-2xl  inline-flex items-center justify-center gap-1.5",
        { "text-sm pr-3 pl-1.5 text-center": badgeText || text },
        { "w-6 h-5 px-1.5 border": !badgeText && !text },
        styles.badgeGroup[color]
      )}
    >
      {badgeText && <Badge text={badgeText} color={color} />}
      {avatar && (
        <span className="w-4 h-4 ">
          <Image className="rounded-full" src={avatar} alt="Avatar" />
        </span>
      )}
      {text} <span className="w3 h3 cursor-pointer">{afterIcon}</span>
    </span>
  );
};

BadgeGroup.defaultProps = {
  afterIcon: <MultiplyIcon />,
  avatar: null,
  color: "success",
  badgeText: null,
  text: null,
};
