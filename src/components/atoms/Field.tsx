import { useState, ReactElement, InputHTMLAttributes, ReactNode } from "react";

import { Icon, IconsType } from "@/shared/Icon";

import classNames from "@/shared/classNames";
import styles from "./Field.module.scss";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  type?: "text" | "password" | "email" | "number";
  label?: string;
  error?: string;
  icon?: IconsType;
  children?: ReactNode;
};

export interface FieldProps {
  size?: "large" | "small";
}

interface Overload {
  (props: InputProps & FieldProps): ReactElement;
}

const PasswordField: Overload = ({ size = "large", ...props }) => {
  const { label, error, ...inputProps } = props;

  const [visible, setVisible] = useState<boolean>(false);

  const inputClassNames = classNames(styles.field, styles[`field--${size}`], {
    [styles.error]: Boolean(error),
  });

  return (
    <div className={inputClassNames}>
      {label && <label>{label}</label>}
      <div className={styles.field__container}>
        <input {...inputProps} type={visible ? "text" : "password"} />
        <Icon
          icon={visible ? "iconEyeSlash" : "iconEye"}
          onClick={() => setVisible(!visible)}
        />
      </div>
      {error && <span className={styles.error__message}>{error}</span>}
    </div>
  );
};

export const Field: Overload = ({ size = "large", type, ...props }) => {
  const { label, error, ...inputProps } = props;

  const inputClassNames = classNames(styles.field, styles[`field--${size}`], {
    [styles.error]: Boolean(error),
  });

  if (type === "password") {
    return <PasswordField {...props} />;
  }

  return (
    <div className={inputClassNames}>
      {label && <label>{label}</label>}
      <div className={styles.field__container}>
        <input {...inputProps} />
      </div>
      {error && <span className={styles.error__message}>{error}</span>}
    </div>
  );
};
