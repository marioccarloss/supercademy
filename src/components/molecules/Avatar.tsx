"use client";

import Image from "next/image";

import { Button } from "@/components/atoms/Button";
import { Typography } from "@/components/atoms/Typography";
import { useTeacherStore } from "@/store/useTeacherStore";
import { Icon } from "@/shared/Icon";

import { useAvatarStore } from "@/store/useAvatarStore";

import styles from "./Avatar.module.scss";

type Props = {
  isTop?: boolean;
};

export const Avatar = ({ isTop = false }: Props) => {
  const isSwitchedOn = useAvatarStore((state) => state.avatar.isActive);
  const setActiveAvatar = useAvatarStore((state) => state.setActive);

  const teachers = useTeacherStore((state) => state.teacher);
  const teacherSelected = teachers.filter((t) => t.selected)[0];

  const handleAvatar = () => {
    setActiveAvatar(!isSwitchedOn);
  };

  return (
    <div
      className={`${isTop ? styles.avatar__wrapper + " " + styles.avatar__wrapperTop : styles.avatar__wrapper}`}
    >
      <div
        className={`${isSwitchedOn ? styles.avatar__image + " " + styles.avatar__imageOn : styles.avatar__image}`}
      >
        <Image
          src={teacherSelected.image.src}
          alt={teacherSelected.name}
          height={teacherSelected.image.height}
          width={teacherSelected.image.width}
        />
        {isSwitchedOn ? (
          <div
            className={`${styles.avatar__hover + " " + styles.avatar__hoverOn}`}
          >
            <Button href="/teacher" mode="icon">
              <Icon icon="iconPencil" size={styles.avatar__hoverIcon} />
              <Typography>Editar</Typography>
            </Button>
            <Button onClick={handleAvatar} mode="icon">
              <Icon icon="iconSoundOff" size={styles.avatar__hoverIcon} />
              <Typography>Silenciar</Typography>
            </Button>
          </div>
        ) : (
          <div
            className={`${styles.avatar__hover + " " + styles.avatar__hoverOff}`}
          >
            <Button href="/teacher" mode="icon">
              <Icon icon="iconPencil" size={styles.avatar__hoverIcon} />
              <Typography>Editar</Typography>
            </Button>
            <Button onClick={handleAvatar} mode="icon">
              <Icon icon="iconSoundOn" size={styles.avatar__hoverIcon} />
              <Typography>Activar</Typography>
            </Button>
          </div>
        )}
      </div>
      <button
        type="button"
        className={`${isSwitchedOn ? styles.avatar__cta + " " + styles.avatar__ctaOn : styles.avatar__cta}`}
        onClick={handleAvatar}
      >
        <Icon
          icon={`${isSwitchedOn ? "iconConfig" : "iconSoundOff"}`}
          size={styles.homePrivate__iconSound}
        />
      </button>
    </div>
  );
};
