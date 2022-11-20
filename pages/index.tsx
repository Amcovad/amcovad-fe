import type { NextPage } from "next";
import Blog from "../components/Blog";
import Head from "next/head";
import WelcomeArea from "@/components/sections/WelcomeArea";
import HowItWork from "@/components/sections/HowItWork";
import Testimonials from "@/components/sections/Testimonials";
import PageContainer from "@/components/PageContainer";

const Home: NextPage = () => {
  return (
    <div>
      <PageContainer >
       <Head>
        <title>Home-Page | Amcovad </title>        
        <meta property="og:title" name="description" content="Home-Page | Amcovad" key="title"/>
      </Head>      
     
        <WelcomeArea />
        <HowItWork />
        <Testimonials />
        <Blog />
     
      </PageContainer>
    </div>
  );
};

export default Home;
