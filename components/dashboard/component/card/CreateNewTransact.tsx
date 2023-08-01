import classNames from "classnames";
import Link from "next/link";
import React from "react";

type CreateNewTransactType = {
  backGround: string;
  borderColor: string;
  btn: any;
  Icon: any;
  iconColor: string;
  textColor: string;
  title: string;
  url: string;
};

const CreateNewTransact = ({
  backGround,
  borderColor,
  btn,
  Icon,
  iconColor,
  textColor,
  title,
  url,
}: CreateNewTransactType) => {
  return (
    <div
      className={classNames(
        "relative w-80 h-80 lg:w-96 lg:h-96 border rounded",
        borderColor,
        backGround
      )}
    >
      <div className=" top-12 lg:top-16 absolute inset-x-0 flex items-center flex-col justify-center">
        <Icon size={64} color={iconColor} variant="Bulk" />
        <p
          className={classNames(
            "font-Inter text-base pt-8 max-w-[200px] text-center",
            textColor
          )}
        >
          {title}
        </p>
      </div>

      <div className="absolute bottom-14 inset-x-0 flex items-center flex-col justify-center">
        <Link href={url}>
          <a>{btn}</a>
        </Link>
      </div>
    </div>
  );
};

export default CreateNewTransact;
