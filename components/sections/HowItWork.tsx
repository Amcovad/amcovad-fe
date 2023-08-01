import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import slideData from "@/data/Hero/slide";
import classNames from "classnames";

type Slides = {
  count: number;
  image: string;
  orderLast: boolean;
  title: string;
  text: string;
};

export const Slide = ({ count, image, orderLast, title, text }: Slides) => {
  return (
    <div className="lg:pt-32 bg-transparent">
      <div className="container m-auto px-6 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-2 lg:items-center lg:gap-12 xl:gap-32 ">
          <div
            className={classNames(
              "w-full lg:w-6/12 xl:pl-12 2xl:pl-32 mt-20 lg:mt-0 ",
              { "order-last": orderLast }
            )}
          >
            <div className="pt-1 lg:pt-0 lg:px-10 xl:p-0 ">
              <div className="w-full relative my-20 md:pl-10 lg:pl-0 sm:pr-5 lg:pr-0 md:pb-0">
                <div className="px-2 max-w-[300.96px] md:max-w-[400px] lg:max-w-[387px]">
                  <h1 className=" pb-8 lg:pb-12 text-4xl font-RozhaOne font-normal tracking-tight text-secondary-700 sm:text-5xl md:text-4xl lg:text-5xl xl:text-[52px]">
                    <span className="block">
                      How <span className="text-primary-500">Amcovad </span>
                      secure your transactions.
                    </span>
                  </h1>
                </div>
                <p className="text-secondary-700 z-10 pl-16 pb-4 font-Inter text-[13.6833px] md:text-sm lg:text-base font-[700] mx-auto sm:max-w-md  md:max-w-3xl">
                  {title}
                </p>
                <p className="max-w-[21.25rem] md:max-w-[30rem] lg:max-w-[23.6875rem] z-10 text-[13.6833px] md:text-sm lg:text-base  text-secondary-700 font-Inter font-normal">
                  {text}
                </p>
                <span className="font-Inter block text-[14.875rem] md:text-[12.5rem] lg:text-[16rem] left-[-1.3125rem] md:left-[15px] lg:left-[-1.625rem] top-[3rem] md:top-[1.5rem] lg:top-20 xl:top-24 absolute font-normal text-neutral-black opacity-10">
                  {count}
                </span>
              </div>
            </div>
          </div>
          <div className="hidden lg:block lg:w-6/12 px-auto lg:pl-20 xl:pl-28 2xl:pl-48  ">
            <Image src={image} height="600" width="395" alt="slide image" />
          </div>
        </div>
      </div>
    </div>
  );
};

const HowItWork = () => {
  const slideSettings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
  };
  const slideSettingsMobile = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
  };
  return (
    <>
      <section className="lg:hidden text-secondary-300 h-[615px] md:h-[550px] lg:h-[850px] bg-secondary-25 lg:bg-gradient-section overflow-hidden ">
        <Slider {...slideSettingsMobile}>
          {slideData.map(({ image, text, title }, index) => {
            return (
              <Slide
                key={index}
                count={index + 1}
                image={image}
                title={title}
                text={text}
              />
            );
          })}
        </Slider>
      </section>
      <section className="hidden lg:block text-secondary-300 h-[615px] md:h-[550px] lg:h-[850px] bg-secondary-25 lg:bg-gradient-section overflow-hidden ">
        <Slider {...slideSettings}>
          {slideData.map(({ image, orderLast, title, text }, index) => {
            return (
              <Slide
                key={index}
                count={index + 1}
                image={image}
                orderLast={orderLast}
                title={title}
                text={text}
              />
            );
          })}
        </Slider>
      </section>
    </>
  );
};

HowItWork.defaultProps = {
  count: "1",
  image: null,
  orderLast: false,
  text: null,
  title: null,
};

export default HowItWork;
