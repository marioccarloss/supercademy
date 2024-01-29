import Link from "next/link";

import useNavigation, { Nav } from "@/hooks/useNavigation";
import { Typography } from "@/components/atoms/Typography";
import { Button } from "@/components/atoms/Button";
import { Icon } from "@/shared/Icon";

import styles from "./Navigation.module.scss";

export const Navigation = () => {
  const { navigation } = useNavigation();

  return (
    <nav className={styles.navigation}>
      <Button mode="icon" className={styles.navigation__logo}>
        <Icon icon="isotype" size={styles.navigation__logoIcon} />
      </Button>
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
      <Button mode="icon">
        <Icon icon="emojiMonsterItem" />
        <Typography>Bárbara</Typography>
      </Button>
    </nav>
  );
};
