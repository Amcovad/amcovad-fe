import React from "react";
import TestimonialCard from "./TestimonialCard";
import testimony from "../../data/testimony";

const Testimonials = () => {
  return (
    <section className="py-20 bg-primary-600">
      <div className="2xl:container  2xl:mx-auto items-center px-4 xl:px-8 md:px-32 lg:px-12">
        <div className="flex flex-wrap items-center ">
          <div className=" w-full lg:px-6 xl:px-24 lg:w-3/5 ">
            <div className="w-full relative ">
              <div className=" lg:max-w-[336px]">
                <h2 className="mb-4 text-3xl max-w-[14rem] md:max-w-[17.25rem] font-RozhaOne text-white font-bold leading-tight tracking-tight sm:text-4xl font-heading">
                  Real Story from real Amcovad.
                </h2>
                <p className="mb-4 font-Inter text-sm md:text-base font-normal tracking-tight text-secondary-25 xl:mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Elementum et accumsan nulla
                </p>
              </div>

              <div className="lg:pl-10 xl:pl-4 2xl:pl-8">
                {testimony.slice(0, 1).map((data, index) => {
                  return (
                    <TestimonialCard
                      bigCard={true}
                      key={index}
                      image={data.image}
                      name={data.name}
                      rating={data.rating}
                      testimony={data.testimony}
                    />
                  );
                })}
              </div>
            </div>
          </div>
          <div className=" hidden lg:block w-full px-2 mb-12 lg:w-2/5  lg:mb-0">
            {testimony
              .slice(1)
              .map(({ image, name, rating, testimony }, index) => {
                return (
                  <TestimonialCard
                    bigCard={false}
                    key={index}
                    image={image}
                    name={name}
                    rating={rating}
                    testimony={testimony}
                  />
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
