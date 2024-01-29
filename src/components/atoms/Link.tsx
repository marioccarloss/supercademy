import { ReactNode, ReactElement, AnchorHTMLAttributes } from "react";
import LinkNext from "next/link";
import classNames from "../../shared/classNames";
import styles from "./Link.module.scss";

interface LinkButtonProps {
  mode?: "primary" | "secondary" | "tertiary" | "inverted" | "icon";
  size?: "large" | "medium" | "small";
  align?: "left" | "right" | "center";
  href: string;
  as?: string;
  children: ReactNode;
}

type AnchorProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  as?: string;
};

interface Overload {
  (props: AnchorProps & LinkButtonProps): ReactElement;
}

export const Link: Overload = ({
  mode = "primary",
  size = "large",
  align = "left",
  ...props
}) => {
  const components = {
    className: classNames(
      styles.link,
      styles[`link--${mode}`],
      styles[`link--${size}`],
      styles[`link--${align}`],
    ),
    ...props,
  };

  return <LinkNext {...components} />;
};
