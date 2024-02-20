"use client";

import { Button } from "@/components/atoms/Button";
import { Typography } from "@/components/atoms/Typography";
import { Icon } from "@/shared/Icon";

import styles from "./HeaderPrivateInner.module.scss";

export const HeaderPrivateInner = () => {
  return (
    <div className={styles.headerInner}>
      <div className={styles.headerInnerTitle}>
        <Icon icon="calendar" size={styles.headerInnerIcon} />
        <Typography mode="subtitle">Mi calendario</Typography>
      </div>
      <Button href="/home" className={styles.headerInnerClose}>
        <Icon icon="close" size={styles.headerInnerCloseIcon} />
      </Button>
    </div>
  );
};
