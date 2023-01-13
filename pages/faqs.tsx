import React, { useState } from "react";
import Image from "next/image";
import faqImg from "../public/assets/faqs/faq-image.png";
import Button from "@/components/form/Button";
import faqData from "@/data/faqs/faqsData";
import PageContainer from "@/components/PageContainer";
import TabWithAccordion from "@/components/TabWithAccordion";
import CallToAction from "@/components/sections/CallToAction";

const Faqs = () => {
  return (
    <>
      <PageContainer>
        <div>
          <div className=" 2xl:container 2xl:mx-auto overflow-hidden">
            <div className="w-screen mx-auto">
              <div className=" w-full pt-20 lg:pt-14 ">
                <Image src={faqImg} className="h-96" alt="contact page image" />
              </div>
            </div>
            <TabWithAccordion data={faqData} />
          </div>
        </div>
        <CallToAction />
      </PageContainer>
    </>
  );
};

export default Faqs;
