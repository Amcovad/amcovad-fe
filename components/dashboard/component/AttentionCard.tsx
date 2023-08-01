import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Receipt } from "iconsax-react";

const AttentionCard = () => {
  return (
    <div className="p-2">
      <div className="relative bg-primary-500 h-[300px] rounded-md w-full  bg-contain md:bg-none lg:bg-[url('/assets/dashboard/Vector.png')] bg-bottom bg-no-repeat bg-[url('/assets/dashboard/Vector.png')] p-7">
        <div className="flex items-center text-neutral-white justify-between cursor-pointer">
          <p className="text-sm ">Today</p>
          <Receipt size="24" variant="Outline" />
        </div>
        <div className="py-3">
          <div className="flex items-center mt-4 -space-x-3">
            <span className=" flex items-center justify-center border-2 rounded-full hover:z-20 border-neutral-white">
              <Image
                className=" rounded-full "
                width={40}
                height={40}
                objectFit="cover"
                src="/assets/dashboard/User-image3.jpg"
                alt="user avatar3"
              />
            </span>
            <span className="flex items-center justify-center border-2 rounded-full z-10 hover:z-20 border-neutral-white">
              <Image
                className="rounded-full"
                width={40}
                height={40}
                objectFit="cover"
                src="/assets/dashboard/User-image4.jpg"
                alt="user avatar4"
              />
            </span>
            <span className="flex items-center justify-center border-2 rounded-full z-10 hover:z-20 border-neutral-white">
              <Image
                className="m-auto rounded-full"
                width={40}
                height={40}
                objectFit="cover"
                src="/assets/dashboard/User-image5.jpg"
                alt="user avatar5"
              />
            </span>
            <span className="flex items-center justify-center border-2 rounded-full z-10 hover:z-20 border-neutral-white">
              <Image
                className="m-auto rounded-full"
                width={40}
                height={40}
                objectFit="cover"
                src="/assets/dashboard/User-image6.jpg"
                alt="user avatar6"
              />
            </span>
          </div>
          <div className=" text-neutral-white mt-3 ">
            <p className=" text-xl font-semibold">Ajo with Friend</p>
            <p className="text-sm">Payment of your turn with Frank and Jamal</p>
          </div>
        </div>
        <Link href="" passHref>
          <a>
            <p className="text-sm text-secondary-100 hover:text-secondary-200 border-b border-secondary-100 absolute bottom-8">
              View Details
            </p>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default AttentionCard;
