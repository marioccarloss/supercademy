"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { Button } from "@/components/atoms/Button";
import { Typography } from "@/components/atoms/Typography";
import { Icon } from "@/shared/Icon";

import styles from "./Navigation.module.scss";

import useNavigation, { Nav } from "@/hooks/useNavigation";

import { useNavigationStore } from "@/store/useNavigationStore";

type NavigationProps = {
  isOpen: boolean;
};

export const Navigation = ({ isOpen }: NavigationProps) => {
  const pathname = usePathname();
  const isActive = (path: string) => path === pathname;

  const { navigation } = useNavigation();

  const [openDropdown, setOpenDropdown] = useState<boolean>(false);

  const setOpenNavigation = useNavigationStore((state) => state.setOpened);

  const handleNavigationToggle = () => {
    setOpenNavigation(false);
  };

  const handleDropdown = () => {
    setOpenDropdown(!openDropdown);
  };

  const handleNavigationLink = () => {
    const hasWindow = typeof window !== "undefined";
    if (hasWindow) {
      const media = window.matchMedia("(max-width: 1023px)");
      if (media.matches) {
        setOpenNavigation(false);
      }
    }
  };

  return (
    <nav
      className={`${!isOpen ? styles.navigation : styles.navigation + " " + styles.navigationOpen}`}
    >
      <div
        className={`${isActive("/home") ? styles.navigation__home + " " + styles.navigation__homeActive : styles.navigation__home}`}
      >
        <Button
          mode="icon"
          className={styles.navigation__logo}
          onClick={handleNavigationToggle}
        >
          <Icon icon="logoNav" size={styles.navigation__logoIcon} />
        </Button>
      </div>
      <ul className={styles.navigation__list}>
        {navigation.map((item: Nav) => (
          <li
            key={item.id}
            className={`${isActive(item.path) ? styles.navigation__item + " " + styles.navigation__itemActive : styles.navigation__item}`}
          >
            <Link href={item.path} onClick={handleNavigationLink}>
              <Icon icon={item.icon} size={styles.navigation__icon} />
              <Typography className={styles.navigation__name}>
                {item.name}
              </Typography>
            </Link>
          </li>
        ))}
      </ul>
      <div
        className={`${openDropdown ? styles.navigation__dropdown + " " + styles.navigation__dropdownActive : styles.navigation__dropdown}`}
      >
        <Button
          mode="icon"
          className={styles.navigation__dropdownContainer}
          onClick={handleDropdown}
        >
          <Icon
            icon="emojiMonsterItem"
            size={styles.navigation__dropdownIcon}
          />
          <Typography>Bárbara</Typography>
          <Icon icon="arrowUp" size={styles.navigation__dropdownArrowIcon} />
        </Button>
        <Button
          className={`${styles.navigation__dropdownContainer + " " + styles.navigation__dropdownContainerBottom}`}
        >
          <Icon
            icon="iconLogout"
            size={styles.navigation__dropdownLogoutIcon}
          />
          <Typography>Cambiar alumno</Typography>
        </Button>
      </div>
    </nav>
  );
};
