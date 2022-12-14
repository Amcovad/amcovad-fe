import React from "react";
import Image from "next/image";
import { ArrowDown2, Profile, LoginCurve } from "iconsax-react";
import User from "@/public/assets/dashboard/User-image.jpg";
import Link from "next/link";

export const ManageSetting = () => {
  return (
    <div>
      <ul className="pt-2 w-40 px-1 bg-secondary-100 absolute rounded right-0 lg:left-0 shadow mt-12 sm:mt-[4.125rem]">
        <li className="flex justify-between text-secondary-700 p-2 hover:text-primary-500 cursor-pointer items-center">
          <div className="flex items-center">
            <Profile size="18" color="#344055" variant="Bulk" />
            <Link href="/settings/profile" passHref>
              <a>
                <span className="text-sm ml-2">My Profile</span>
              </a>
            </Link>
          </div>
        </li>
        <li className="flex justify-between pb-4 px-2 text-secondary-700 hover:text-primary-500 cursor-pointer items-center mt-3">
          <div className="flex items-center">
            <LoginCurve size="18" color="#344055" />
            <span className="text-sm ml-2">Sign Out</span>
          </div>
        </li>
      </ul>
    </div>
  );
};

const ManageProfile = () => {
  const [profile, setProfile] = React.useState(false);

  return (
    <>
      <div
        className="flex items-center relative cursor-pointer"
        onClick={() => setProfile(!profile)}
      >
        <div className="rounded-full">
          {profile && <ManageSetting />}
          <div className="relative hidden lg:block ">
            <Image
              src={User}
              alt="profile image"
              className="rounded-lg"
              objectFit="cover"
              width={46}
              height={46}
            />
          </div>
          <div className="relative lg:hidden block ">
            <Image
              src={User}
              alt="profile image"
              className="rounded-lg"
              objectFit="cover"
              width={40}
              height={40}
            />
          </div>
        </div>
        <p className="lg:block hidden text-secondary-700 font-Poppins text-base font-normal mx-1"></p>
        <div className="cursor-pointer pl-2 lg:pl-0 lg:block hidden text-secondary-500">
          <ArrowDown2 size="20" color="#344055" variant="Outline" />
        </div>
      </div>
    </>
  );
};

export default ManageProfile;
