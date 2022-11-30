import React from "react";
import classNames from "classnames";
import Link from "next/link";

type NewActionCardProp = {
  backGround: string;
  borderColor: string;
  icon: JSX.Element | React.ReactNode;
  title: string;
  textColor: string;
  url: string;
};
const NewActionCard = ({
  backGround,
  borderColor,
  icon,
  textColor,
  title,
  url,
}: NewActionCardProp) => {
  return (
    <div
      className={classNames(
        " w-1/2 lg:w-1/4 border m-0.5 flex flex-col  items-center justify-center transition duration-500 hover:scale-105 cursor-pointer rounded-md  h-40 lg:h-52",
        backGround,
        borderColor
      )}
    >
      <Link href={url} passHref>
        <a className="flex flex-col items-center justify-center">
          <span className={textColor}>{icon}</span>
          <p
            className={classNames(
              "w-32 text-center text-sm font-bold mt-3",
              textColor
            )}
          >
            {title}
          </p>
        </a>
      </Link>
    </div>
  );
};

NewActionCard.defaultProps = {
  backGround: "bg-primary-25",
  borderColor: "border-primary-100",
  icon: null,
  textColor: "text-primary-600",
  url: "/",
};

export default NewActionCard;
