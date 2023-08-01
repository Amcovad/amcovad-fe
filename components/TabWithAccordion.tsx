import React, { useState } from "react";
import classNames from "classnames";
import AccordionLayout from "@/components/Accordion/Accordion";

type Data = {
  data?: any;
};

const TabWithAccordion = ({ data }: Data) => {
  const [visibleTab, setVisibleTab] = useState(0);

  const TabTitles = Object.keys(data).map((title, index) => (
    <li
      key={index}
      onClick={() => setVisibleTab(index)}
      className={classNames(
        "inline-block text-sm font-Inter font-medium p-4 lg:p-3 text-neutral-black cursor-pointer ",
        {
          "border-b-[4px] border-primary-400 rounded-sm mb-[-3px] text-primary-400":
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
      <h4 className="font-RozhaOne my-3 text-2xl lg:text-4xl text-neutral-black">
        {item}
      </h4>
      <div className="flex flex-col justify-center items-center w-full">
        <AccordionLayout options={data[item]} />
      </div>
    </div>
  ));

  return (
    <div className=" py-6 px-2 lg:py-12 mx-auto lg:max-w-4xl">
      <ul className="flex flex-wrap justify-start lg:space-x-5 list-none border-b-[2px] border-[#C4C4C4]">
        {TabTitles}
      </ul>

      <div className="py-1">{TabContent}</div>
    </div>
  );
};

export default TabWithAccordion;
