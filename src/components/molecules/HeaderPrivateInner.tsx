"use client";

import { Button } from "@/components/atoms/Button";
import { Typography } from "@/components/atoms/Typography";
import { Icon } from "@/shared/Icon";
import * as icons from "@/components/atoms/icons/Icons";
import { useNavigationStore } from "@/store/useNavigationStore";

export type IconsType = keyof typeof icons;

import styles from "./HeaderPrivateInner.module.scss";

type Props = {
  title: string;
  emoji: IconsType;
};
export const HeaderPrivateInner = ({ title, emoji }: Props) => {
  const setOpenNavigation = useNavigationStore((state) => state.setOpened);

  const handleNavigationOpened = () => {
    setOpenNavigation(true);
  };

  return (
    <div className={styles.headerInner}>
      <div className={styles.headerInnerTitle} onClick={handleNavigationOpened}>
        <Icon icon={emoji} size={styles.headerInnerIcon} />
        <Typography mode="subtitle">{title}</Typography>
      </div>
      <Button href="/home" className={styles.headerInnerClose}>
        <Icon icon="close" size={styles.headerInnerCloseIcon} />
      </Button>
    </div>
  );
};
