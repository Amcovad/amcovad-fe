import Image from "next/image";
import React from "react";
import Button from "@/components/form/Button";

const NewFriendToast = () => {
  return (
    <div
      className="p-3 pl-6 w-full border hidden lg:flex border-secondary-50  bg-neutral-white rounded-lg shadow "
      role="alert"
    >
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center ">
          <div className="inline-block relative shrink-0">
            <Image
              className="w-10 h-10 rounded-full"
              src="/assets/dashboard/User-Jumoke.jpg"
              width={40}
              height={40}
              objectFit="cover"
              alt="user image"
            />
            <span className="inline-flex absolute right-0 bottom-1 border border-neutral-white justify-center items-center w-3 h-3 bg-green-600 rounded-full">
              <span className="sr-only">active user</span>
            </span>
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium font-Inter text-secondary-800">
              Jumoke Philips wants to join your network{" "}
            </p>
          </div>
        </div>
        <div>
          <Button color="neutral-light" size="xs" className="">
            Decline
          </Button>
          <Button className="ml-1" size="xs">
            Accept
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NewFriendToast;
