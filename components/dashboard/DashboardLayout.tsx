import React from "react";
import SideBar from "./SideBar";
import Navbar from "./Navbar";
import classNames from "classnames";
import Alert from "@/components/dashboard/component/Alert";

type alertProp = {
  message: string;
  type: "danger" | "info" | "success" | "warning";
};
type DashboardLayoutProp = {
  alert: alertProp;
  children: JSX.Element | React.ReactNode;
  sideWidget: JSX.Element | React.ReactNode;
  title: string;
};
const DashboardLayout = ({
  alert: { message, type },
  children,
  sideWidget,
  title,
}: DashboardLayoutProp) => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col lg:flex-row gap-x-3 pt-16 lg:pt-[5.39rem] flex-no-wrap">
        <div className="relative w-[20%] min-w-[20%]">
          <div className=" w-full">
            <SideBar />
          </div>
        </div>
        <div
          className={classNames("relative w-full ", {
            "lg:w-[52%]": sideWidget,
          })}
        >
          <div
            className={classNames(
              "w-full lg:fixed lg:overflow-y-auto scrollbar h-full",
              { "lg:w-[80%]": sideWidget }
            )}
          >
            <div
              className={classNames(
                "lg:w-[65%] w-full pt-4 lg:pb-20 lg:mb-16 ",
                { "lg:w-[65%]": sideWidget },
                { "lg:w-[78%]": !sideWidget }
              )}
            >
              <div className=" relative">
                <Alert type={type} message={message} />
                <h1 className="text-2xl pl-3 lg:pl-0 leading-9 font-Poppins mb-5 mt-3 lg:text-3xl lg:font-Inter lg:leading-10 font-bold text-secondary-800 ">
                  {title}
                </h1>
                {children}
              </div>
            </div>
          </div>
        </div>
        {sideWidget && (
          <div className="relative w-full lg:w-[27%]">
            <div className=" w-full lg:w-[27%] lg:fixed lg:right-0 sm:overflow-y-auto scrollbar h-full ">
              {sideWidget}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

DashboardLayout.defaultProps = {
  alert: { message: null, type: null },
  children: null,
  sideWidget: null,
  title: null,
};

export default DashboardLayout;
