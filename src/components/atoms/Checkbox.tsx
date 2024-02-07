import { useState } from "react";

import styles from "./Checkbox.module.scss";

interface CheckboxProps {
  label: string;
}

export const Checkbox = ({ label }: CheckboxProps) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  return (
    <label className={styles.checkbox}>
      <input type="checkbox" checked={isChecked} onChange={toggleCheckbox} />
      {!isChecked ? (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="1"
            y="1"
            width="22"
            height="22"
            rx="3"
            stroke="#64EE85"
            strokeWidth="2"
          />
        </svg>
      ) : (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="1"
            y="1"
            width="22"
            height="22"
            rx="3"
            fill="#64EE85"
            stroke="#64EE85"
            strokeWidth="2"
          />
          <path
            d="M6 12.2427L10.2426 16.4853L18.727 8"
            stroke="#0A3042"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
      {label}
    </label>
  );
};
