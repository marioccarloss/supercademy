import Link from "next/link";
import { Button } from "@/components/atoms/Button";
import { Typography } from "@/components/atoms/Typography";

import { Icon } from "@/shared/Icon";

import styles from "./Header.module.scss";

type Props = {
  closeable?: boolean;
  centered?: boolean;
  hasBack?: boolean;
};

export const Header = ({
  closeable = false,
  centered = false,
  hasBack = false,
}: Props) => {
  return (
    <div className={`${centered ? styles.headerCentered : styles.header}`}>
      <Link href="/" className={styles.header__link}>
        <Icon icon="logo" size={styles.header__logo} />
      </Link>
      {closeable ? (
        <Button mode="icon" className={styles.header__button}>
          <Icon icon="close" />
        </Button>
      ) : null}
      {hasBack && (
        <Button mode="icon" className={styles.header__back} href="/choose">
          <Icon icon="arrowBack" size={styles.header__backIcon} />
          <Typography mode="label">Volver a los perfiles</Typography>
        </Button>
      )}
    </div>
  );
};
