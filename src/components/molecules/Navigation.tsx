"use client";

import Link from "next/link";

import { Typography } from "@/components/atoms/Typography";
import { Button } from "@/components/atoms/Button";
import { Icon } from "@/shared/Icon";

import styles from "./Navigation.module.scss";

import useNavigation, { Nav } from "@/hooks/useNavigation";

import { useNavigationStore } from "@/store/useNavigationStore";

type NavigationProps = {
  isOpen: boolean;
};

export const Navigation = ({ isOpen }: NavigationProps) => {
  const { navigation } = useNavigation();

  const setOpenNavigation = useNavigationStore((state) => state.setOpened);

  const handleNavigationToggle = () => {
    setOpenNavigation(false);
  };

  return (
    <nav
      className={`${!isOpen ? styles.navigation : styles.navigation + " " + styles.navigationOpen}`}
    >
      <div className={styles.navigation__home}>
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
          <li key={item.id} className={styles.navigation__item}>
            <Link href={item.path}>
              <Icon icon={item.icon} size={styles.navigation__icon} />
              <Typography className={styles.navigation__name}>
                {item.name}
              </Typography>
            </Link>
          </li>
        ))}
      </ul>
      <Button mode="icon" className={styles.navigation__dropdown}>
        <Icon icon="emojiMonsterItem" size={styles.navigation__dropdownIcon} />
        <Typography>Bárbara</Typography>
      </Button>
    </nav>
  );
};
