import {
  MouseEvent,
  FocusEvent,
  ReactElement,
  useEffect,
  useState,
} from "react";

import { Typography } from "@/components/atoms/Typography";
import { Icon } from "@/shared/Icon";

import styles from "./Dropdown.module.scss";

type DropdownProps = {
  options: string[];
  showDropDown: boolean;
  toggleDropDown: (event: MouseEvent<HTMLButtonElement>) => void;
  optionSelection: (option: string) => void;
};

type SelectOverload = {
  (props: DropdownProps): ReactElement;
};

const Select: SelectOverload = ({ options, optionSelection }) => {
  const [showDropDown, setShowDropDown] = useState<boolean>(false);

  const onClickHandler = (option: string): void => {
    optionSelection(option);
  };

  useEffect(() => {
    setShowDropDown(showDropDown);
  }, [showDropDown]);

  return (
    <div className={styles.dropdown__container}>
      <ul
        className={
          showDropDown
            ? styles.dropdown
            : `${styles.dropdown__list} ${styles.dropdown__listActive}`
        }
      >
        {options.map((option: string, index: number) => {
          return (
            <li
              key={index}
              className={styles.dropdown__item}
              onClick={(): void => {
                onClickHandler(option);
              }}
            >
              {option}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

type DropdownOverload = {
  (props: {
    options: string[];
    label: string;
    placeholder: string;
  }): ReactElement;
};

export const Dropdown: DropdownOverload = ({
  options,
  label = "",
  placeholder = "",
}) => {
  const [showDropDown, setShowDropDown] = useState<boolean>(false);
  const [selectOption, setSelectOption] = useState<string>("");

  const toggleDropDown = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setShowDropDown(!showDropDown);
  };

  const dismissHandler = (event: FocusEvent<HTMLButtonElement>) => {
    if (event.currentTarget === event.target) {
      setShowDropDown(false);
    }
  };

  const optionSelection = (option: string): void => {
    setSelectOption(option);
  };

  return (
    <div className={styles.dropdown}>
      <Typography mode="label" align="left">
        {label}
      </Typography>
      <button
        className={
          showDropDown
            ? `${styles.dropdown__buttonActive}`
            : `${styles.dropdown__button}`
        }
        onClick={toggleDropDown}
        onBlur={(e: FocusEvent<HTMLButtonElement>): void => dismissHandler(e)}
      >
        <div
          className={`${!selectOption ? styles.dropdown__selection : styles.dropdown__selectionActive}`}
        >
          {!selectOption ? placeholder : selectOption}
        </div>
        <div
          className={`${!showDropDown ? styles.dropdown__arrow : styles.dropdown__arrowActive}`}
        >
          <Icon icon="arrow" size={styles.dropdown__icon} />
        </div>
        {showDropDown && (
          <Select
            options={options}
            showDropDown={false}
            toggleDropDown={toggleDropDown}
            optionSelection={optionSelection}
          />
        )}
      </button>
    </div>
  );
};
