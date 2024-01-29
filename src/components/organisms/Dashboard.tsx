import { LayoutPrivate } from "@/components/templates/LayoutPrivate";
import { Typography } from "@/components/atoms/Typography";
import { Icon } from "@/shared/Icon";

import styles from "./Dashboard.module.scss";

export default function Dashboard() {
  return (
    <LayoutPrivate>
      <div className={styles.myProfile}>
        <div className={styles.myProfile__avatar}></div>
        <Typography mode="title" className={styles.myProfile__title}>
          Hola Bárbara, ¿por dónde empezamos hoy?
        </Typography>
        <div className={styles.myProfile__choose}>
          <div className={styles.myProfile__card}>
            <Icon icon="emojiBookmark" size={styles.myProfile__icon} />
            <Typography mode="label" className={styles.myProfile__name}>
              Deberes/exámenes
            </Typography>
          </div>
          <div className={styles.myProfile__card}>
            <Icon icon="emojiGraduation" size={styles.myProfile__icon} />
            <Typography mode="label" className={styles.myProfile__name}>
              Selectividad
            </Typography>
          </div>
          <div className={styles.myProfile__card}>
            <Icon icon="emojiLanguage" size={styles.myProfile__icon} />
            <Typography mode="label" className={styles.myProfile__name}>
              Clases de conversación
            </Typography>
          </div>
        </div>
      </div>
    </LayoutPrivate>
  );
}
