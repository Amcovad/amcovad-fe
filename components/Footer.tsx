import React from "react";
import Image from "next/image";
import { FooterLogo } from "../public/assets/footer";
import Link from "next/link";
import SocialMediaLink from "./SocialMediaLink";
import FooterMenuLink from "./FooterMenuLink";
import FooterContactLink from "./FooterContactLink";
import footerLinks from "@/data/footer";

const Footer = () => {
  return (
    <footer className="bg-neutral-tertiary bg-cover bg-left lg:bg-top  bg-[url('/assets/footer/footer-hexagons.png')]">
      <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full pb-24 md:px-28 ">
        <div className="2xl:container px-2 py-4 mx-auto">
          <div className="grid gap-4 lg:gap-10  mb-8 lg:grid-cols-12">
            <div className="col-span-12 lg:col-span-3">
              <Link passHref href="/">
                <span className="inline-flex items-center cursor-pointer">
                  <Image src={FooterLogo} alt="footer logo" />
                </span>
              </Link>
              <div className="mt-4 lg:max-w-sm">
                <div className="flex flex-col justify-between pt-1 pb-10 sm:flex-row">
                  <div className="flex items-center mt-4 space-x-4 sm:mt-0">
                    {footerLinks.social.map((data, index) => {
                      return (
                        <SocialMediaLink
                          key={index}
                          src={data.image}
                          url={data.url}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-6 lg:col-span-3 lg:col-start-4 lg:col-end-9 ">
              <div className="">
                <ul className="mt-2 space-y-2 grid grid-flow-col grid-rows-4 gap-x-4 whitespace-nowrap">
                  {footerLinks.routes.map((data, id) => {
                    return (
                      <FooterMenuLink
                        key={id}
                        title={data.title}
                        url={data.url}
                      />
                    );
                  })}
                </ul>
              </div>
            </div>

            <div className="col-span-12  lg:col-span-3 lg:col-start-9 lg:col-end-13 ">
              <ul className="mt-2 space-y-2">
                {footerLinks.contacts.map((data, id) => {
                  return (
                    <FooterContactLink
                      key={id}
                      name={data.name}
                      link={data.link}
                      icon={data.icon}
                    />
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
