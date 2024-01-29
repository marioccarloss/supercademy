import {
  HTMLAttributes,
  LabelHTMLAttributes,
  ReactNode,
  ReactElement,
} from "react";
import classNames from "../../shared/classNames";
import styles from "./Typography.module.scss";

type HtmlTypographyProps = HTMLAttributes<HTMLHeadingElement> & {
  htmlFor?: undefined;
};

type LabelProps = LabelHTMLAttributes<HTMLLabelElement> & {
  htmlFor?: string;
};
export interface TypographyProps {
  mode?:
    | "title"
    | "subtitle"
    | "body"
    | "caption"
    | "label"
    | "secondary"
    | "disabled";
  size?:
    | "extra-large"
    | "large"
    | "medium"
    | "medium-regular"
    | "medium-bold"
    | "small"
    | "extra-small";
  align?: "left" | "right" | "center" | "justify";
  icon?: ReactNode;
  children: ReactNode;
}

interface Overload {
  (props: HtmlTypographyProps & TypographyProps): ReactElement;
  (props: LabelProps & TypographyProps): ReactElement;
}

const hasFor = (props: HtmlTypographyProps | LabelProps): props is LabelProps =>
  "htmlFor" in props;

const hasIcon = (props: TypographyProps): props is TypographyProps =>
  "icon" in props;

export const Typography: Overload = ({
  mode = "",
  size = "",
  icon = false,
  align = "left",
  ...props
}) => {
  const components = {
    className: classNames(
      styles.typo,
      styles[`typo--${mode}`],
      styles[`typo--${size}`],
      icon ? styles["typo--icon"] : "",
      styles[`typo--${align}`],
    ),
    ...props,
  };

  if (!hasFor(components)) {
    if (mode === "title") {
      return <h1 {...components} />;
    }

    if (mode === "subtitle") {
      return <h2 {...components} />;
    }

    if (mode === "body") {
      return <p {...components} />;
    }

    if (mode === "caption") {
      return <p {...components} />;
    }

    if (hasIcon(components)) {
      return <span {...components} />;
    }
  }

  if (mode === "label" && hasFor(components)) {
    return <label {...components} />;
  }

  return <span {...components} />;
};
