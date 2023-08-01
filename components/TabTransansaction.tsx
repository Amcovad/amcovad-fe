import React, { useState } from "react";
import classNames from "classnames";
import { Label } from "./form/Label";
import { FEEDBACK } from "@/utils/constant";

type Data = {
  data?: any;
};

const TabTransansaction = ({ data }: Data) => {
  const [visibleTab, setVisibleTab] = useState(1);

  const TabTitles = Object.keys(data).map((title, index) => (
    <button
      key={index}
      onClick={() => setVisibleTab(index)}
      type="button"
      className={classNames(
        "py-3.5 px-10 mr-2 mb-2 text-xl font-medium focus:outline-none font-Inter rounded-md shadow-sm border border-secondary-300 outline-none focus:ring-secondary-300 ",
        { "bg-secondary-50/80 text-secondary-700": visibleTab !== index },
        { "bg-secondary-700 text-secondary-25": visibleTab === index }
      )}
    >
      {title}
    </button>
  ));

  const TabContent = Object.keys(data).map((item, index) => (
    <div key={index} style={visibleTab === index ? {} : { display: "none" }}>
      <div className="">{data[item]}</div>
    </div>
  ));

  return (
    <div className="mx-auto ">
      <Label
        feedBack={FEEDBACK.NONE}
        className="text-base flex items-center gap-x-2 pb-2"
        text="Repayment Plan"
      />
      <div className="flex flex-wrap justify-start lg:space-x-5 pb-6 ">
        {TabTitles}
      </div>

      <div className="py-1">{TabContent}</div>
    </div>
  );
};

export default TabTransansaction;
