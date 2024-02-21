"use client";

import { useCallback, useRef, useState } from "react";

import { Button } from "@/components/atoms/Button";
import { Typography } from "@/components/atoms/Typography";
import { Icon } from "@/shared/Icon";
import Image, { StaticImageData } from "next/image";

import styles from "./Avatar.module.scss";

type Props = {
  isTop?: boolean;
  image: StaticImageData;
};

export const Avatar = ({ image, isTop = false }: Props) => {
  const toggleRef = useRef<HTMLInputElement>(null);
  const [isSwitchedOn, setSwitchedOn] = useState(true);

  const handleAvatar = useCallback(() => {
    if (toggleRef.current) {
      setSwitchedOn((prevState) => !prevState);
      toggleRef.current.checked = !isSwitchedOn;
    }
  }, [isSwitchedOn]);

  return (
    <div
      className={`${isTop ? styles.avatar__wrapper + " " + styles.avatar__wrapperTop : styles.avatar__wrapper}`}
    >
      <div
        ref={toggleRef}
        className={`${isSwitchedOn ? styles.avatar__image + " " + styles.avatar__imageOn : styles.avatar__image}`}
      >
        <Image src={image} alt="teacher" />
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
