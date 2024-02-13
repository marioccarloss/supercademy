import Image from "next/image";
import { LayoutPrivate } from "@/components/templates/LayoutPrivate";
import { Typography } from "@/components/atoms/Typography";
import { Icon } from "@/shared/Icon";
import { Button } from "@/components/atoms/Button";

import styles from "@/components/organisms/ProfilePrivate.module.scss";
import image from "@/assets/images/teacher.jpg";

export const ProfilePrivate = () => {
  return (
    <LayoutPrivate>
      <div className={styles.myProfile}>
        <div className={styles.myProfile__avatarWrapper}>
          <div className={styles.myProfile__avatar}>
            <Image src={image} alt="teacher" />
          </div>
          <button type="button" className={styles.myProfile__avatarCta}>
            <Icon icon="iconSoundOn" size={styles.myProfile__iconSound} />
          </button>
        </div>
        <Typography mode="title" className={styles.myProfile__title}>
          Hola Bárbara, ¿por dónde empezamos hoy?
        </Typography>
        <div className={styles.myProfile__choose}>
          <Button
            className={`${styles.myProfile__card + " " + styles.myProfile__cardActive}`}
          >
            <Icon icon="emojiBookmark" size={styles.myProfile__icon} />
            <Typography mode="label" className={styles.myProfile__name}>
              Deberes/exámenes
            </Typography>
          </Button>
          <Button className={styles.myProfile__card}>
            <Icon icon="emojiGraduation" size={styles.myProfile__icon} />
            <Typography mode="label" className={styles.myProfile__name}>
              Selectividad
            </Typography>
          </Button>
          <Button className={styles.myProfile__card}>
            <Icon icon="emojiLanguage" size={styles.myProfile__icon} />
            <Typography mode="label" className={styles.myProfile__name}>
              Clases de conversación
            </Typography>
          </Button>
        </div>
      </div>
    </LayoutPrivate>
  );
};
