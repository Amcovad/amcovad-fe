import classNames from "classnames";
import Link from "next/link";
import React from "react";
import { styles } from "./CreateNewTransact.styles";
import { ColorType } from "@/utils/colors";
import Button from "@/components/form/Button";
export type CreateNewTransactType = {
  btnTitle: string;
  color: ColorType;
  Icon: any;
  iconColor: string;
  title: string;
  url: string;
};

const CreateNewTransact = ({
  btnTitle,
  color,
  Icon,
  iconColor,
  title,
  url,
}: CreateNewTransactType) => {
  return (
    <div className={classNames(styles.base, styles.variant.background[color])}>
      <div className={classNames(styles.topDivClass)}>
        <Icon size={64} color={iconColor} variant="Bulk" />
        <p className={classNames(styles.textBase, styles.variant.text[color])}>
          {title}
        </p>
      </div>

      <div className={classNames(styles.bottomDivClass)}>
        <Link href={url}>
          <a>
            <Button color={color} size="lg">
              {btnTitle}
            </Button>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default CreateNewTransact;
