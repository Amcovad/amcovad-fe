import React from "react";
import Image from "next/image";
import aboutImg from "@/public/assets/about/about-image.png";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Tab from "@/components/Tab";
import content from "@/data/about";

const About = () => {
  return (
    <>
      <Navbar />
      <div>
        <div className=" 2xl:container 2xl:mx-auto overflow-hidden">
          <div className="w-screen mx-auto">
            <div className=" w-full pt-20 lg:pt-16 ">
              <Image src={aboutImg} className="h-96" alt="contact page image" />
            </div>
          </div>
          <Tab data={content} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
