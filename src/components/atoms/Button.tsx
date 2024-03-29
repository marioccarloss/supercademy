import classNames from "@/shared/classNames";
import Link from "next/link";
import {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactElement,
  ReactNode,
} from "react";
import styles from "./Button.module.scss";

type HtmlButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: undefined;
};

type AnchorProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  as?: string;
};

export interface ButtonProps {
  mode?:
    | "primary"
    | "secondary"
    | "tertiary"
    | "inverted"
    | "icon"
    | "calendar-primary"
    | "calendar-secondary"
    | "calendar-tertiary"
    | "disabled";
  size?: "large" | "medium" | "small";
  children: ReactNode;
}

interface Overload {
  (props: HtmlButtonProps & ButtonProps): ReactElement;
  (props: AnchorProps & ButtonProps): ReactElement;
}

const hasHref = (props: HtmlButtonProps | AnchorProps): props is AnchorProps =>
  "href" in props;

export const Button: Overload = ({
  mode = "primary",
  size = "medium",
  ...props
}) => {
  const components = {
    className: classNames(
      styles.btn,
      styles[`btn--${mode}`],
      styles[`btn--${size}`],
    ),
    ...props,
  };

  if (hasHref(components)) {
    return <Link {...components} />;
  }

  return <button {...components} />;
};
