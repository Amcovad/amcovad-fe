import Link from "next/link";
import React from "react";

type WidgetCardProps = {
  children: React.ReactNode;
  title: string;
  url: string;
};
const WidgetCard = ({ children, title, url }: WidgetCardProps) => {
  return (
    <div className="py-2 m-2 ">
      <div className="bg-neutral-white border border-secondary-50 rounded-md ">
        <div className="flex items-center border-b border-secondary-50 justify-between p-6">
          <p className="text-base font-semibold leading-6 text-secondary-800">
            {title}
          </p>
          <Link href={url}>
            <a>
              <p className="text-xs leading-normal tracking-wide font-bold cursor-pointer text-right text-primary-500">
                See all
              </p>
            </a>
          </Link>
        </div>
        {children}
      </div>
    </div>
  );
};

WidgetCard.defaultProps = {
  children: null,
  url: "",
};

export default WidgetCard;
