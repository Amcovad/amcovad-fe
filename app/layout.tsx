"use client";
// import "./globals.css";
// import { Inter } from "next/font/google";
// import localFont from "next/font/local";
import { useEffect } from "react";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import "rsuite/dist/rsuite.min.css";
import "tailwindcss/tailwind.css";
// slick-carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "../styles/index.css";
import "react-toastify/dist/ReactToastify.css";

// import type { AppProps } from "next/app";

// import { Providers } from "@/components/Providers";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const inter = Inter({ subsets: ["latin"], variable: "--inter-font" });

// console.log(inter);

// const migraFont = localFont({
//   src: "../../public/._Migra-Extralight.woff2",
//   variable: "--migra-font",
// });

// export const metadata = {
//   title: "Amcovad",
//   description: "",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans`}>
        <Provider store={store}>{children}</Provider>
        <div id="portal" />
      </body>
    </html>
  );
}
