import { ReactElement } from "react";
import { Typography } from "@/components/atoms/Typography";
import { Icon } from "@/shared/Icon";
import styles from "./Checkbox.module.scss";

type CheckboxProps = {
  label: string;
  isChecked: boolean;
  onChange: () => void;
  toggleCheckbox: () => void;
};

type CheckboxOverload = {
  (props: CheckboxProps): ReactElement;
};

export const Checkbox: CheckboxOverload = ({
  label,
  isChecked,
  toggleCheckbox,
}) => {
  return (
    <div className={styles.checkbox}>
      <label className={styles.checkbox__label}>
        <Typography mode="label" align="left">
          {label}
        </Typography>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={toggleCheckbox}
          className={styles.checkbox__input}
        />
        <div className={styles.checkbox__icon}>
          {isChecked && <Icon icon="check" size={styles.checkbox__checkIcon} />}
        </div>
      </label>
    </div>
  );
};
