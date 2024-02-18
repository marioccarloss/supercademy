import { Button } from "@/components/atoms/Button";
import { Typography } from "@/components/atoms/Typography";
import { LayoutPrivate } from "@/components/templates/LayoutPrivate";
import { Icon } from "@/shared/Icon";
import Image from "next/image";

import image from "@/assets/images/teacher.jpg";
import styles from "@/components/organisms/HomePrivate.module.scss";

export const HomePrivate = () => {
  return (
    <LayoutPrivate>
      <div className={styles.homePrivate}>
        <div className={styles.homePrivate__avatarWrapper}>
          <div className={styles.homePrivate__avatar}>
            <Image src={image} alt="teacher" />
          </div>
          <button type="button" className={styles.homePrivate__avatarCta}>
            <Icon icon="iconSoundOn" size={styles.homePrivate__iconSound} />
          </button>
        </div>
        <Typography mode="title" className={styles.homePrivate__title}>
          Hola Bárbara, ¿por dónde empezamos hoy?
        </Typography>
        <div className={styles.homePrivate__choose}>
          <Button
            className={`${styles.homePrivate__card + " " + styles.homePrivate__cardActive}`}
          >
            <Icon icon="emojiBookmark" size={styles.homePrivate__icon} />
            <Typography mode="label" className={styles.homePrivate__name}>
              Deberes/exámenes
            </Typography>
          </Button>
          <Button className={styles.homePrivate__card}>
            <Icon icon="emojiGraduation" size={styles.homePrivate__icon} />
            <Typography mode="label" className={styles.homePrivate__name}>
              Selectividad
            </Typography>
          </Button>
          <Button className={styles.homePrivate__card}>
            <Icon icon="emojiLanguage" size={styles.homePrivate__icon} />
            <Typography mode="label" className={styles.homePrivate__name}>
              Clases de conversación
            </Typography>
          </Button>
        </div>
      </div>
    </LayoutPrivate>
  );
};
