import React from "react";
import Link from "next/link";

type FooterLinkProps = {
  url: string;
  title: string;
};
const FooterLink = ({ title, url }: FooterLinkProps) => {
  return (
    <li className="text-secondary-300 transition-colors duration-300 ">
      <Link href={url} passHref>
        <a>{title}</a>
      </Link>
    </li>
  );
};

export default FooterLink;
