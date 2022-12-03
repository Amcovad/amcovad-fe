import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import classNames from "classnames";

type NavLinkProp = {
  containerClassName: string;
  icon: JSX.Element | React.ReactNode;
  name: string;
  url: string;
};
const NavLink = ({
  containerClassName,
  icon,
  name,
  url,
}: NavLinkProp) => {
  const { asPath } = useRouter();
  const isActiveIcon = url === asPath;
  return (
    <li
      className={classNames(
        "relative px-6 pb-2 pt-3 my-3  hover:bg-secondary-50",
        {
          "bg-secondary-50 border-r-4 border-primary-500 ": isActiveIcon,
        },
        containerClassName
      )}
    >
      <Link href={url} passHref>
        <a className="inline-flex items-center w-full text-sm font-normal font-Inter text-secondary-700 focus:text-secondary-700 transition-colors duration-150 hover:text-primary-500 ">
          <span
            className={classNames(
              { "text-secondary-800": icon && !isActiveIcon },
              { "text-primary-500": icon && isActiveIcon }
            )}
          >
            {icon}
          </span>
         <span className="ml-4">{name}</span>
        </a>
      </Link>
    </li>
  );
};

NavLink.defaultProps = {
  containerClassName: null,
};

export default NavLink;
