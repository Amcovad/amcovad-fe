"use client";
import React from "react";
import Button from "@/components/form/Button";
import Input from "@/components/form/Input";
import Textarea from "@/components/form/Textarea";
import Image from "next/image";
import HookForm from "@/components/form/Form";
import contactImg from "../../public/assets/contact/contact-img.png";
import smContactImg from "../../public/assets/contact/sm-contact-img.png";
import PageContainer from "@/components/PageContainer";
import { contactUsSchema } from "../../schema/contactUsSchema";

const Contact = () => {
  const onSubmit = (data: any) => {
    alert(JSON.stringify(data));
  };
  return (
    <PageContainer>
      <div className=" 2xl:container 2xl:mx-auto overflow-hidden">
        <div className="w-screen mx-auto">
          <div className="hidden md:block w-full pt-12">
            <Image src={contactImg} alt="contact page image" />
          </div>
          <div className="md:hidden w-full pt-4">
            <Image
              src={smContactImg}
              // width="100%"
              // height="100%"
              layout="responsive"
              objectFit="contain"
              alt="small contact hero image"
              style={{ height: "100%", width: "100%" }}
            />
          </div>
        </div>
        <div className="pt-4 lg:pt-12 pb-12 px-4">
          <div className="ml-20 max-w-6xl flex flex-col md:flex-row">
            <div className="w-full lg:w-2/3">
              <div className=" md:px-12 lg:px-0 lg:pl-20 ">
                <h2 className="text-2xl font-Poppins font-semibold text-secondary-600 ">
                  Fill the contact form
                </h2>
                <p className="text-sm py-6 font-Poppins font-normal text-secondary-500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquet in fames bibendum rhoncus, sit. Turpis est nam
                  pellentesque fames.
                </p>
                <HookForm onSubmit={onSubmit} schema={contactUsSchema}>
                  <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                    <div className="col-span-full ">
                      <Input
                        label="Your name here"
                        name="fullName"
                        type="text"
                      />
                    </div>
                    <div className="col-span-full sm:col-span-3">
                      <Input label="Your email" name="email" type="text" />
                    </div>
                    <div className="col-span-full sm:col-span-3">
                      <Input label="Phone" name="phone" type="number" />
                    </div>

                    <div className="col-span-full ">
                      <Input label="Subject" name="subject" type="text" />
                    </div>
                    <div className="col-span-full">
                      <Textarea
                        rows={5}
                        label="Your message"
                        name="message"
                        className="bg-secondary-25"
                      />
                    </div>
                  </div>
                  <div className="pt-2">
                    <Button className="text-neutral-white lg:h-12 lg:px-9  ">
                      Send message
                    </Button>
                  </div>
                </HookForm>
              </div>
            </div>
            <div className=" w-full md:w-1/3 pl-9 hidden lg:block ">
              <h2 className="text-2xl font-Poppins font-semibold text-secondary-600">
                HEADQUARTER
              </h2>
              <div className="pt-4">
                <h2 className="text-lg font-bold pb-1 font-Poppins text-secondary-600">
                  Lagos Address
                </h2>
                <p className="text-base font-normal font-Poppins pb-3 text-[#5A6D77]">
                  3rd Floor, Central District Area, Abuja.
                </p>
              </div>
              <div className="text-base font-medium text-[#5A6D77]">
                <p>
                  <b className="text-primary-500 font-Poppins pb-4">Tel:</b>{" "}
                  08055xxxxxxxxx, 08022xxxxxxxxxxx
                </p>
                <p>
                  <b className="text-primary-500 font-Poppins">Email:</b>{" "}
                  amcovad@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default Contact;
