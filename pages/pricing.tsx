import React from "react";
import Image from "next/image";
import Button from "@/components/form/Button";
import priceImg from "../public/assets/faqs/faq-image.png";
import SecurityLockImg from "@/public/assets/pricing/lock.svg";
import SecuritySafeImg from "@/public/assets/pricing/security-safe.svg";
import PageContainer from "@/components/PageContainer";
import CallToAction from "@/components/sections/CallToAction";

const Faqs = () => {
  return (
    <PageContainer>
      <div>
        <div className=" 2xl:container 2xl:mx-auto overflow-hidden">
          <div className="w-screen mx-auto">
            <div className=" w-full pt-20 lg:pt-16 ">
              <Image src={priceImg} className="h-96" alt="contact page image" />
            </div>
          </div>

          <div className=" mt-6 py-6 px-2 lg:py-12 mx-auto ">
            <div className="text-center">
              <h4 className="text-secondary-700 text-4xl lg:text-6xl font-RozhaOne">
                START RIGHT NOW
              </h4>
              <p className="text-secondary-700 text-sm md:text-base lg:text-xl font-semibold">
                Unlimited transactions and networking without feature
                limitations forever
              </p>

              <button className="mt-4 font-Inter rounded-md shadow-normal text-primary-500 hover:text-white hover:bg-primary-500 font-medium text-base lg:text-xl px-9 py-5 bg-primary-50">
                Get Started For Free
              </button>

              <div className="my-20  flex flex-col md:flex-row items-center justify-center gap-10">
                <div className="h-[530px] lg:h-[600px] w-[320px]  md:w-[300px] lg:w-[400px] xl:w-[445px] border border-secondary-500 rounded-lg">
                  <div className="border-y-4 flex flex-col items-center relative h-[530px] lg:h-[600px] border-secondary-500 rounded-md">
                    <div className="  flex flex-col items-center justify-between">
                      <div className="text-center p-10 pt-14">
                        <Image
                          src={SecurityLockImg}
                          alt="Security Lock image"
                        />

                        <p className="text-black py-3 text-lg md:text-xl lg:text-3xl xl:text-4xl xl:leading-[44px] font-Inter font-semibold">
                          BASIC SECURITY
                        </p>

                        <div className="text-black pt-6 lg:pt-10 text-sm">
                          <p>Unlimited transactions</p>
                          <p>Network Connections </p>
                          <p>Location tracking </p>
                          <p>Real-time messaging</p>
                        </div>
                      </div>
                    </div>
                    <div className="mb-3 absolute bottom-8 justify-end flex ">
                      <Button
                        color="secondary"
                        className="text-base lg:text-xl"
                        size="xl"
                      >
                        Get Started Now
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="h-[530px] lg:h-[600px] w-[320px] md:w-[300px] lg:w-[400px] xl:w-[445px] border border-warning-500 rounded-lg">
                  <div className="border-y-[6px] flex flex-col items-center relative h-[530px] lg:h-[600px] border-warning-500 rounded-md">
                    <div className="  flex flex-col items-center justify-between">
                      <div className="text-center p-10 pt-14">
                        <Image
                          src={SecuritySafeImg}
                          alt="Security Lock image"
                        />

                        <p className="text-warning-600 py-3 text-lg md:text-xl lg:text-3xl xl:text-4xl xl:leading-[44px] font-Inter font-semibold">
                          PREMIUM SECURITY
                        </p>

                        <div className="text-black pt-6 lg:pt-10 text-sm">
                          <p>Unlimited transactions</p>
                          <p>Network Connections </p>
                          <p>Location tracking </p>
                          <p>Real-time messaging</p>
                        </div>
                      </div>
                    </div>
                    <div className="mb-3 absolute bottom-8 justify-end flex ">
                      <Button
                        color="warning"
                        className="text-base lg:text-xl"
                        size="xl"
                      >
                        Coming Soon
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className=""></div>
          </div>
        </div>
      </div>
      <CallToAction />
    </PageContainer>
  );
};

export default Faqs;
