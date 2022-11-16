import React, { useState } from "react";
import classNames from "classnames";

type Data = {
  data?: any;
};

const Tab = ({ data }: Data) => {
  const [visibleTab, setVisibleTab] = useState(0);

  const TabTitles = Object.keys(data).map((title, index) => (
    <li
      key={index}
      onClick={() => setVisibleTab(index)}
      className={classNames(
        "inline-block text-sm font-Inter font-medium p-4 lg:p-3 text-black cursor-pointer ",
        {
          "border-b-[4px] border-primary-400 rounded-sm mb-[-2.5px] text-primary-400":
            visibleTab === index,
        }
      )}
    >
      {title}
    </li>
  ));

  const TabContent = Object.keys(data).map((item, index) => (
    <div
      className="text-sm mt-6 leading-6 text-secondary-700"
      key={index}
      style={visibleTab === index ? {} : { display: "none" }}
    >
      <h4 className="font-RozhaOne my-3 text-2xl lg:text-4xl text-black">
        {item.split(" ").slice(0, -1).join(" ")}{" "}
        <span className="text-primary-500">
          {item.split(" ").slice(-1).join(" ")}
        </span>
      </h4>
      <div className="dropcap">{data[item]}</div>
    </div>
  ));

  return (
    <div className=" py-6 px-2 lg:py-12 mx-auto lg:max-w-2xl">
      <ul className="flex flex-wrap justify-start lg:space-x-5 list-none border-b-[2px] border-[#C4C4C4]">
        {TabTitles}
      </ul>

      <div className="py-1">{TabContent}</div>
    </div>
  );
};

export default Tab;
