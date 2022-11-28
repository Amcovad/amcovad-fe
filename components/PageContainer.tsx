import Head from "next/head";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
type PageContainerProps = {
  children: JSX.Element | React.ReactNode;
};
const PageContainer = ({ children }: PageContainerProps) => {
  return (
    <>
      <Head>
        <title> Amcovad | Digital approach to a secure deal and transcations</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          property="og:title"
          name="description"
          content="Amcovad | Digital approach to a secure deal and transactions"
          key="title"
        />
      </Head>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};
export default PageContainer;
