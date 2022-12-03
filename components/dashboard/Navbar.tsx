import React, { useState } from "react";
import { HamburgerIcon2 } from "@/public/assets/dashboard/navBarIcon";
import ManageProfile from "./ManageProfile";
import MobileSidebar from "./MobileSidebar";
import {
  SearchNormal1,
  Notification,
  MessageText1,
  Profile2User,
} from "iconsax-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <div className="fixed top-0 lg:ml-[20%] z-40 w-full lg:w-4/5">
        <nav className="bg-secondary-200 ">
          <div className="container px-6 pb-2 md:py-2 lg:py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center justify-between">
                <div className="flex pt-3 md:pt-1 items-center cursor-pointer lg:hidden ">
                  <span className="" onClick={() => setIsMenuOpen(true)}>
                    <HamburgerIcon2 />
                  </span>
                  <span className=" ml-6 md:pl-10 hidden">
                    <SearchNormal1 size="18" color="#858C99" />
                  </span>
                </div>
                <div className="relative w-[300px] lg:block hidden py-1 ">
                  <div className="absolute right-0 top-4 mr-3 cursor-pointer ">
                    <SearchNormal1 size="18" color="#858C99" />
                  </div>
                  <input
                    className="border font-Poppins text-base font-normal tracking-wide text-secondary-500 border-secondary-300 bg-secondary-25 focus:outline-none focus:border-primary-300 rounded w-full pl-4 py-2.5"
                    type="text"
                    placeholder="Search"
                  />
                </div>
              </div>

              <div className="flex justify-end items-center ">
                <div className="flex items-center mt-4 md:mt-0">
                  <div className="w-full flex items-center pl-3 lg:mr-10 justify-end">
                    <div className="h-full cursor-pointer mr-8 gap-x-6 lg:gap-x-8 flex items-center justify-center ">
                      <div className="relative">
                        <Notification
                          size="24"
                          color="#344055"
                          variant="Bulk"
                        />
                        <span className="bg-danger-500 border-[0.0938rem] border-white right-1 top-0 w-2.5 h-2.5 absolute rounded-full"></span>
                      </div>
                      <div className="relative hidden lg:flex">
                        <MessageText1
                          size="24"
                          color="#344055"
                          variant="Bulk"
                        />
                        <span className="bg-danger-500 border-[0.0938rem] border-white right-0 top-0 w-2.5 h-2.5 absolute rounded-full"></span>
                      </div>
                      <div className="relative">
                        <Profile2User
                          size="24"
                          color="#344055"
                          variant="Bulk"
                        />
                        <span className="bg-danger-500 border-[0.0938rem] border-white right-0 top-0 w-2.5 h-2.5 absolute rounded-full"></span>
                      </div>
                    </div>
                    <ManageProfile />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
      {setIsMenuOpen && (
        <div
          className={
            isMenuOpen
              ? "w-full h-screen transition-all duration-1000 fixed top-0 z-40  transform  translate-x-0 "
              : "w-full h-screen transition-all duration-1000 absolute z-40 transform -translate-x-full"
          }
          id="mobile-nav"
        >
          <div
            className=" bg-secondary-25 opacity-90 fixed z-40 h-full transition-all duration-1000  overflow-y-auto scrollbar w-full lg:hidden"
            onClick={() => setIsMenuOpen((show) => !show)}
          />
          <MobileSidebar onClick={() => setIsMenuOpen((show) => !show)} />
        </div>
      )}
    </>
  );
};

export default Navbar;
