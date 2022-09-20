import React, { useState } from "react";
import Image from "next/image";
import aboutImg from "@/public/assets/about/about-image.png";
import tabData from "../data/about/tab";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const About = () => {
  const [visibleTab, setVisibleTab] = useState(tabData[0].id);

  const style = {
    tabActive: `text-black border-b-[4px] border-primary-400 text-primary-400 `,
    tabContent: ` py-1 m-0 `,
    tabTitle: ` inline-block text-sm font-Inter font-medium p-4 lg:p-3 text-black cursor-pointer `,
  };
  const tabTitles = tabData.map((item, index) => (
    <li
      key={index}
      onClick={() => setVisibleTab(item.id)}
      className={
        visibleTab === item.id
          ? ` ${style.tabTitle} ${style.tabActive}`
          : ` ${style.tabTitle}`
      }
    >
      {item.tabTitle}
    </li>
  ));

  const tabContent = tabData.map((item, index) => (
    <div
      className="text-sm mt-6 leading-6 text-secondary-700"
      key={index}
      style={visibleTab === item.id ? {} : { display: "none" }}
    >
      <h4 className="font-RozhaOne my-3 text-2xl lg:text-4xl text-black">
        {item.tabTitle.split(" ").slice(0, -1).join(" ")}{" "}
        <span className="text-primary-500">
          {item.tabTitle.split(" ").slice(-1).join(" ")}
        </span>
      </h4>
      {item.tabContent}
    </div>
  ));
  return (
    <>
      <Navbar />
      <div>
        <div className=" 2xl:container 2xl:mx-auto overflow-hidden">
          <div className="w-screen mx-auto">
            <div className=" w-full pt-20 lg:pt-16 ">
              <Image src={aboutImg} className="h-96" alt="contact page image" />
            </div>
          </div>

          <div className=" py-6 px-2 lg:py-12 mx-auto lg:max-w-2xl">
            <ul className="flex flex-wrap justify-start lg:space-x-5 list-none border-b-[1px] border-[#C4C4C4]">
              {tabTitles}
            </ul>

            <div className={`${style.tabContent} `}>{tabContent}</div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
