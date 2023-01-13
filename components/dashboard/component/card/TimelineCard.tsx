import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Message, AddSquare } from "iconsax-react";

const TimelineCard = () => {
  return (
    <div className="px-2 pt-3 lg:py-0 lg:px-0">
      <div
        className="p-3 pl-6 w-full border mx-auto mb-2 lg:mb-5 border-secondary-50  bg-white rounded-md shadow "
        role="alert"
      >
        <div className="">
          <div className="flex items-center pt-3 ">
            <div className="inline-block relative shrink-0">
              <Image
                className="w-14 h-14 rounded-full"
                src="/assets/dashboard/User-image2.jpg"
                width={56}
                height={56}
                objectFit="cover"
                alt="user image"
              />
              <span className="inline-flex absolute right-0 bottom-1 border border-white justify-center items-center w-4 h-4 bg-green-600 rounded-full">
                <span className="sr-only">active user</span>
              </span>
            </div>
            <div className="ml-4">
              <p className="font-bold text-secondary-700 cursor-pointer">
                Aderomoye Yomi
              </p>
              <p className="text-sm font-medium font-Inter text-secondary-500">
                2 hrs ago{" "}
              </p>
            </div>
          </div>

          <p className="text-sm text-secondary-700 py-5 border-b border-dashed border-secondary-50">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla
            dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus
            mollis pharetra. Proin blandit ac massa sed rhoncus{" "}
            <span className="text-primary-500">See more</span>
          </p>
          <div className="py-3">
            <div className="flex items-center justify-between mt-5 pb-2 ">
              <div className="flex items-center -space-x-3">
                <div className="flex items-center justify-center border-2 rounded-full z-10 hover:z-20 border-white">
                  <Image
                    className="rounded-full "
                    width={40}
                    height={40}
                    objectFit="cover"
                    src="/assets/dashboard/User-image3.jpg"
                    alt="user avatar3"
                  />
                </div>
                <div className="flex items-center justify-center border-2 rounded-full z-10 hover:z-20 border-white">
                  <Image
                    className="rounded-full"
                    width={40}
                    height={40}
                    objectFit="cover"
                    src="/assets/dashboard/User-image4.jpg"
                    alt="user avatar4"
                  />
                </div>
                <div className="hidden">
                  <Image
                    className="rounded-full"
                    width={40}
                    height={40}
                    objectFit="cover"
                    src="/assets/dashboard/User-image5.jpg"
                    alt="user avatar5"
                  />
                </div>
                <div className="flex items-center justify-center border-2 rounded-full z-10 hover:z-20 border-white">
                  <Image
                    className="rounded-full"
                    width={40}
                    height={40}
                    objectFit="cover"
                    src="/assets/dashboard/User-image6.jpg"
                    alt="user avatar6"
                  />
                </div>
                <Link href="">
                  <a className="flex justify-center items-center w-10 h-10 text-xs z-30 font-medium text-center text-white hover:text-white active:text-white visited:text-white bg-secondary-800 rounded-full border-2 border-white hover:bg-secondary-900">
                    +99
                  </a>
                </Link>
              </div>
              <div className="flex items-center gap-2 mr-10 cursor-pointer">
                <Message size="24" color="#344055" variant="Bulk" />
                <AddSquare size="24" color="#344055" variant="Bulk" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineCard;
