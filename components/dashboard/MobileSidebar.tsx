import React from "react";
import Image from "next/image";
import Link from "next/link";
import NavLink from "./NavLink";
import sidebarData from "@/data/dashboard/sidebar";
import Logo from "@/public/assets/logo/logo.svg";
import { Setting2 } from "iconsax-react";
import { XIcon } from "@/public/assets/dashboard/navBarIcon";

import UserProfileCard from "./UserProfileCard";

type MobileSidebars = {
  onClick: any;
};
const MobileSidebar = ({ onClick }: MobileSidebars) => {
  return (
    <div className="fixed left-0 z-40 w-72 h-screen md:w-96 pb-4 overflow-y-auto lg:hidden overflow-x-hidden">
      <div className="flex flex-col justify-between h-full w-full">
        <div className="bg-secondary-25">
          <div className="flex items-center justify-between px-3  bg-secondary-25 z-50 top-0 sticky">
            <div className="h-16 w-full flex items-center pt-1">
              <Link href="/" passHref>
                <a>
                  <Image src={Logo} width="155" height="35" alt="logo" />
                </a>
              </Link>
            </div>
            <div
              id="closeSideBar"
              className="flex items-center justify-center h-10 w-10"
              onClick={onClick}
            >
              <XIcon width="14px" height="14px" />
            </div>
          </div>
          <UserProfileCard />
          <ul className=" pt-2 ">
            {sidebarData.map((data, index) => {
              return (
                <NavLink
                  key={index}
                  name={data.name}
                  url={data.url}
                  Icon={data.Icon}
                />
              );
            })}
          </ul>
        </div>
        <div className="w-full">
          <div className="w-full flex items-center justify-between ">
            <div className="  px-6 py-2 w-full bg-secondary-300 ">
              <Link href="/settings" passHref>
                <a className="inline-flex items-center w-full text-sm font-normal font-Inter text-secondary-700 focus:text-secondary-700 transition-colors duration-150 hover:text-primary-400 ">
                  <Setting2 size="22" color="#344055" variant="Bulk" />
                  <span className="ml-4">Settings</span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

MobileSidebar.defaultProps = {
  onClick: null,
};

export default MobileSidebar;
