import React from "react";
import Image from "next/image";
import { FooterLogo, Call, Mail, Location } from "../public/assets/footer";
import Link from "next/link";
import SocialLink from "./SocialLink";
import socialMediaLinks from "@/data/social";
import FooterLink from "./FooterLink";
import footerMenuLinks from "@/data/footer";

const Footer = () => {
  return (
    <footer className="bg-tertiary bg-cover bg-left lg:bg-top  bg-[url('/assets/footer/footer-hexagons.png')]">
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
                    {socialMediaLinks.map((data, index) => {
                      return (
                        <SocialLink
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
            <div className="col-span-6 lg:col-span-3  ">
              <div>
                <ul className="mt-2 space-y-2">
                  {footerMenuLinks.slice(0, 4).map((data, id) => {
                    return (
                      <FooterLink key={id} title={data.title} url={data.url} />
                    );
                  })}
                </ul>
              </div>
            </div>
            <div className="col-span-6 lg:col-span-2  lg:col-start-7 lg:col-end-9 ">
              <div>
                <ul className="mt-2 space-y-2">
                  {footerMenuLinks.slice(4).map((data, id) => {
                    return (
                      <FooterLink key={id} title={data.title} url={data.url} />
                    );
                  })}
                </ul>
              </div>
            </div>

            <div className="col-span-12  lg:col-span-3 lg:col-start-9 lg:col-end-13 ">
              <ul className="mt-2 space-y-2">
                <li>
                  <div className="flex  lg:items-center lg:flex-row">
                    <div className="flex items-center justify-center w-10 h-10 mb-4 mr-2 rounded-full  lg:mb-0">
                      <Image src={Call} alt="social icon logo" />
                    </div>
                    <h6 className="font-normal text-secondary-300 leading-5 mt-2 lg:mt-0">
                      <Link href="tel:+23490400032453">
                        + 234 (0) 90400032453
                      </Link>
                    </h6>
                  </div>
                </li>

                <li>
                  <div className="flex  lg:items-center lg:flex-row">
                    <div className="flex items-center justify-center w-10 h-10 mb-4 mr-2 rounded-full  lg:mb-0">
                      <Image src={Mail} alt="social icon logo" />
                    </div>
                    <h6 className="font-normal text-secondary-300 leading-5 mt-2 lg:mt-0">
                      <Link href="mailto:contactus@amcovad.com">
                        contactus@amcovad.com
                      </Link>
                    </h6>
                  </div>
                </li>
                <li>
                  <div className="flex  lg:items-center lg:flex-row">
                    <div className="flex items-center justify-center w-10 h-10 mb-4 mr-2 rounded-full  lg:mb-0">
                      <Image src={Location} alt="social icon logo" />
                    </div>
                    <p className="font-normal text-secondary-300 leading-5 mt-2 lg:mt-0">
                      3rd Floor, Central District Area, Abuja.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
