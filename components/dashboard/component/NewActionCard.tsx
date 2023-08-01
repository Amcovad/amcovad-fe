import React from "react";
import classNames from "classnames";
import Link from "next/link";
import { styles } from "./NewActionCard.styles";
import { ColorType } from "@/utils/colors";
type NewActionCardProp = {
  color: ColorType;
  icon: JSX.Element | React.ReactNode;
  title: string;
  url: string;
};
const NewActionCard = ({
  color,
  icon,

  title,
  url,
}: NewActionCardProp) => {
  return (
    <div className={classNames(styles.base, styles.variant.background[color])}>
      <Link href={url} passHref>
        <a className={classNames(styles.linkContainer)}>
          <span className={classNames(styles.variant.text[color])}>{icon}</span>
          <p
            className={classNames(styles.textColor, styles.variant.text[color])}
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
