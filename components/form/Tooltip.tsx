import React from "react";
import classNames from "classnames";
import { Whisper, Popover, Tooltip } from "rsuite";
import { MoreCircle } from "iconsax-react";
import { ToolTipProps } from "@/types/index";

type CustomComponents = {
  content: any;
  color: string;
  title: string;
};
export default function ToolTip({
  arrow,
  children,
  color = "",
  content = "",
  placement,
  toolTipIcon,
  title = "",
}: ToolTipProps) {
  const CustomComponent = ({ content, color, title }: CustomComponents) => (
    <div
      className={classNames(
        "text-xs text-left font-Inter max-w-xs py-2 px-3 cursor-pointer rounded-md relative",
        { "bg-neutral-white ": color === "neutral-light" },
        { "bg-secondary-800": color === "dark" }
      )}
    >
      <div>
        {title && (
          <p
            className={classNames(
              "font-medium py-1",
              { "text-secondary-700 ": color === "neutral-light" },
              { "text-neutral-white": color === "dark" }
            )}
          >
            {title}
          </p>
        )}
        <p
          className={classNames(
            "font-normal font-Inter leading-[18px]",
            { "text-secondary-500 ": color === "neutral-light" },
            { "text-neutral-white": color === "dark" },
            { "pb-1": title }
          )}
        >
          {content}
        </p>
      </div>
    </div>
  );

  return (
    <Whisper
      placement={placement}
      trigger="click"
      speaker={
        color === "neutral-light" ? (
          <Popover arrow={arrow}>
            <CustomComponent content={content} color={color} title={title} />
          </Popover>
        ) : (
          <Tooltip arrow={arrow}>
            <CustomComponent content={content} color={color} title={title} />
          </Tooltip>
        )
      }
    >
      <span>{children || toolTipIcon}</span>
    </Whisper>
  );
}

ToolTip.defaultProps = {
  arrow: true,
  color: "dark",
  title: null,
  toolTipIcon: <MoreCircle size="16px" color="#A3A9B2" />,
};
