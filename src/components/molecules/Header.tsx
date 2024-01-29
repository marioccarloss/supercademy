import Link from "next/link";
import { Icon } from "@/shared/Icon";
import { Button } from "@/components/atoms/Button";
import styles from "./Header.module.scss";

type Props = {
  closeable?: boolean;
  centered?: boolean;
};

export const Header = ({ closeable = false, centered = false }: Props) => {
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
    </div>
  );
};
