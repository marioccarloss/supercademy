import { ReactNode } from "react";

import classNames from "@/shared/classNames";
import styles from "./Card.module.scss";

type CardProps = {
  mode?: "primary" | "secondary" | "tertiary" | "inverted" | "primary-selected";
  size?: "large" | "medium" | "small";
  children?: ReactNode;
};

export const Card = ({
  mode = "primary",
  size = "medium",
  children = "",
  ...props
}: CardProps) => {
  const components = {
    className: classNames(
      styles.card,
      styles[`card--${mode}`],
      styles[`card--${size}`],
    ),
    ...props,
  };

  return <div {...components}>{children}</div>;
};
