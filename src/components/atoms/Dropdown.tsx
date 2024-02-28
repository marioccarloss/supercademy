import {
  ChangeEvent,
  KeyboardEvent,
  MouseEvent,
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
    <div
      className={styles.dropdown__container}
      style={{
        height: `${options.length < 3 ? options.length * 40 + "px" : "6.875rem"}`,
      }}
    >
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
    onSelect: (option: string) => void;
  }): ReactElement;
};

export const Dropdown: DropdownOverload = ({
  options,
  label = "",
  placeholder = "",
  onSelect = () => {},
}) => {
  const [showDropDown, setShowDropDown] = useState<boolean>(false);
  const [selectOption, setSelectOption] = useState<string>("");
  const [filteredOptions, setFilteredOptions] = useState<string[]>(options);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const toggleDropDown = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setShowDropDown(!showDropDown);
  };

  const optionSelection = (option: string): void => {
    setSelectOption(option);
    onSelect(option);
    setSearchTerm("");
    setFilteredOptions(options);
    setShowDropDown(false);
  };

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setShowDropDown(true);
    const term = event.target.value;
    setSearchTerm(term);

    const filtered = options.filter((option) =>
      option.toLowerCase().includes(term.toLowerCase()),
    );

    setFilteredOptions(filtered);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && filteredOptions.length > 0) {
      optionSelection(filteredOptions[0]);
      setShowDropDown(false);
    }
  };

  const handleFocus = () => {
    setShowDropDown(true);
  };

  useEffect(() => {
    setShowDropDown(showDropDown);
  }, [showDropDown, filteredOptions]);

  return (
    <div className={styles.dropdown}>
      <Typography mode="label" align="left">
        {label}
      </Typography>
      <div className={styles.dropdown__content}>
        <input
          type="search"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder={!selectOption ? placeholder : selectOption}
          className={`${styles.dropdown__searchInput} ${selectOption && styles.dropdown__searchInputSelected}`}
          onFocus={handleFocus}
          onKeyDown={handleKeyDown}
        />
        <button
          className={
            showDropDown
              ? `${styles.dropdown__buttonActive}`
              : `${styles.dropdown__button}`
          }
          onClick={toggleDropDown}
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
              options={filteredOptions}
              showDropDown={showDropDown}
              toggleDropDown={toggleDropDown}
              optionSelection={optionSelection}
            />
          )}
        </button>
      </div>
    </div>
  );
};
