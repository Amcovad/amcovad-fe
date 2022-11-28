import React from "react";
import Link from "next/link";
type Navlinks = {
  title: string;
  url: string;
};

const NavLink = ({ title, url }: Navlinks) => {
  return (
    <li>
      <Link
        passHref
        href={url}
        className="font-medium tracking-wide !text-black transition-colors duration-200 font-Inter text-sm"
      >
        {title}
      </Link>
    </li>
  );
};

export default NavLink;
