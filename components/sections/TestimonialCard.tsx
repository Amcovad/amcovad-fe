import React from "react";
import Image from "next/image";
import classNames from "classnames";
import { Star1 } from "iconsax-react";

type TestimonialCards = {
  bigCard: boolean;
  containerClassName?: string;
  image: string;
  name: string;
  rating: number;
  testimony: JSX.Element | React.ReactNode;
};

const TestimonialCard = ({
  bigCard,
  containerClassName,
  image,
  name,
  rating,
  testimony,
}: TestimonialCards) => {
  const paragraphsStyle =
    "mt-2 max-w-[420px] xl:max-w-[480px] text-[0.8125rem] md:text-sm text-secondary-600 font-Inter font-normal";

  return (
    <div
      className={classNames(
        "bg-secondary-25 px-8 rounded-md py-8 mb-6 shadow sm:inline-block",
        { "lg:max-w-lg xl:max-w-xl xl:ml-12 w-full": bigCard },
        containerClassName
      )}
    >
      <div className="flex items-start text-left">
        <div className="flex-shrink-0">
          <div className="inline-block relative h-16 w-16  ">
            <Image
              alt="testimiials image"
              layout="fill"
              src={image}
              className="mx-auto object-cover rounded "
            />
          </div>
        </div>
        <div className="ml-6">
          <p className="flex items-baseline">
            <span className="text-secondary-700  font-bold">{name}</span>
          </p>
          <div className="flex items-center mt-1">
            <span className="text-gray-500  pr-1 text-sm">{rating}</span>
            <Star1 size="13" color="#01B3F8" />
          </div>
        </div>
      </div>
      <div className="mt-3">
        <div className="mt-2 max-w-[420px] xl:max-w-[480px] text-[0.8125rem] md:text-sm text-secondary-600 font-Inter font-normal">
          {testimony}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
