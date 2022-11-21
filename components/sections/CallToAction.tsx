import React from "react";
import Image from "next/image";
import Button from "@/components/form/Button";

const CallToAction =()=>{
    return(
        <div className="bg-secondary-25 px-14 py-16 lg:py-20 ">
        <div>
          <div className="mt-2  avatar-group text-center">
            <div className="relative z-20 inline-flex items-center justify-center w-12 h-12 lg:w-14 lg:h-14 -ml-4  transition-all duration-200 border-2 border-white border-solid rounded-full ease-soft-in-out text-size-xs hover:z-40">
              <Image
                src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&h=800&q=60"
                className="w-full rounded-full"
                layout="fill"
                alt="user2"
              />
            </div>

            <div className="relative z-30 inline-flex justify-center w-14 h-14 lg:w-16 lg:h-16 -ml-4  transition-all duration-200 border-2 border-white border-solid rounded-full ease-soft-in-out text-size-xs hover:z-30">
              <Image
                src=" https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=500&q=80"
                className="w-full rounded-full"
                layout="fill"
                alt="user3"
              />
            </div>

            <div className="relative z-20 inline-flex items-center justify-center w-12 h-12 lg:w-14 lg:h-14 -ml-4  transition-all duration-200 border-2 border-white border-solid rounded-full ease-soft-in-out text-size-xs hover:z-30">
              <Image
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&h=500&q=60"
                className="w-full rounded-full"
                layout="fill"
                alt="user3"
              />
            </div>
          </div>
          <div className="text-center">
            <h1 className="font-Inter text-xl md:text-xl font-semibold text-[#002432] py-2">
              Still have questions?
            </h1>
            <p className="py-2 text-[#4A5568] text-sm md:text-base">
              Can’t find the answers you are looking for?
            </p>
            <Button
              className="my-3 font-medium text-base md:text-xl font-Inter text-white capitalize py-3.5 px-7"
              size="xl"
            >
              Contact Us Now
            </Button>
          </div>
        </div>
      </div>
    )
}

export default CallToAction