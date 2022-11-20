import React, { useState, useEffect } from "react";

import Image from "next/image";
import Button from "./form/Button";
import Link from "next/link";
import { Logo, HamburgerMenu, WhiteLogo } from "@/public/assets/logo";
import NavLink from "./NavLink";
import navBarLink from "@/data/menu";
import classNames from "classnames";

type Menus = {
  children: React.PropsWithChildren<React.ReactNode>;
  isMenuOpen: boolean;
};
type MenuItems = {
  title: string;
  url: string;
};

type Navbars = {
  isAuthPage: boolean;
};
const style = {
  container: `relative top-1/4 w-full text-left pl-16 md:pl-32 mt-8`,
  item: `text-3xl text-white cursor-pointer  hover:secondary-25`,
  logo: `absolute top-8 left-8 md:left-20`,
  menu: {
    open: `h-full w-full `,
    close: `w-0 h-full`,
    default: `overflow-x-hidden md:overflow-hidden transition-all duration-700 fixed z-10 top-0 left-0 bg-primary-500`,
  },
};

const Menu = ({ children, isMenuOpen }: Menus) => {
  return (
    <div
      className={`${style.menu.default} ${
        isMenuOpen ? style.menu.open : style.menu.close
      }`}
    >
      {children}
    </div>
  );
};

const MenuContainer = ({
  children,
}: React.PropsWithChildren<React.ReactNode>) => {
  return <div className={style.container}>{children}</div>;
};

const MenuItem = ({ title, url }: MenuItems) => {
  return (
    <div className="p-2">
      <Link href={url} passHref>
        <span className={style.item}>{title}</span>
      </Link>
    </div>
  );
};

const Navbar = ({ isAuthPage }: Navbars) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });

  const isSticky = (e) => {
    const header = document.querySelector(".mobile-bg");
    const scrollTop = window.scrollY;
    scrollTop >= 150
      ? header.classList.add("is-sticky")
      : header.classList.remove("is-sticky");
  };

  return (
    <header
      className={classNames(
        "z-50 outline-[5px]",
        {
          "fixed lg:border-b lg:border-primary-200 2xl:mx-auto w-full":
            !isAuthPage,
        },
        {
          "lg:hidden w-screen": isAuthPage,
        }
      )}
    >
      <div
        className={classNames(
          "py-2 mx-auto px-4 md:max-w-full lg:px-8",
          { "mobile-bg lg:bg-secondary-25 md:px-20 2xl:px-60": !isAuthPage },
          {
            "mobile-bg sm:max-w-xl lg:max-w-screen-xl md:px-24": isAuthPage,
          }
        )}
      >
        <div
          className={classNames(
            "relative flex items-center justify-between",
            { "lg:pl-8 lg:pr-16 pt-1.5": !isAuthPage },
            {
              "lg:px-20 mt-5": isAuthPage,
            }
          )}
        >
          <Link href="/" passHref>
            <a
              className={classNames(
                { "xl:pl-11": !isAuthPage },
                "inline-flex items-center cursor-pointer "
              )}
            >
              <Image src={Logo} width="160" height="36" alt="logo" />
            </a>
          </Link>
          <ul className="items-center hidden space-x-8 lg:flex">
            {navBarLink.map((data, index) => {
              return <NavLink key={index} title={data.title} url={data.url} />;
            })}
          </ul>
          <ul className="items-center hidden lg:flex">
            <li>
              <Link href="/sign-in">
                <a>
                  <Button outline className="uppercase">
                    Sign in
                  </Button>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/sign-up">
                <a>
                  <Button className="ml-4 uppercase">Try it now</Button>
                </a>
              </Link>
            </li>
          </ul>

          <div className="lg:hidden ">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2  -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline "
              onClick={() => setIsMenuOpen(true)}
            >
              <Image
                src={HamburgerMenu}
                width="30px"
                height="30px"
                alt="hamburger icon"
              />
            </button>
            {setIsMenuOpen && (
              <Menu isMenuOpen={isMenuOpen}>
                <>
                  <div className="relative">
                    <div className={style.logo}>
                      <Image
                        src={WhiteLogo}
                        width="160"
                        height="36"
                        alt="icon logo"
                      />
                    </div>
                  </div>
                  <button
                    aria-label="Close"
                    className="absolute top-3 right-5 text-5xl text-white cursor-pointer "
                    onClick={() => setIsMenuOpen()}
                  >
                    &times;
                  </button>
                  <MenuContainer>
                    {navBarLink.map((data, index) => {
                      return (
                        <MenuItem
                          key={index}
                          title={data.title}
                          url={data.url}
                        />
                      );
                    })}
                    <MenuItem url="/sign-up" title="Sign Up" />
                  </MenuContainer>
                </>
              </Menu>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

Navbar.defaultProps = {
  isAuthPage: false,
};

export default Navbar;
