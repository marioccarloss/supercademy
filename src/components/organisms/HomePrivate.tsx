"use client";

import Image from "next/image";
import { useCallback } from "react";

import image from "@/assets/images/teacher.jpg";
import { Button } from "@/components/atoms/Button";
import { Typography } from "@/components/atoms/Typography";
import { ModalSubjects } from "@/components/molecules/ModalSubjects";
import { LayoutPrivate } from "@/components/templates/LayoutPrivate";
import { Icon } from "@/shared/Icon";
import { useAvatarStore } from "@/store/useAvatarStore";
import { useModalStore } from "@/store/useModalStore";
import styles from "./HomePrivate.module.scss";

export const HomePrivate = () => {
  const isSwitchedOn = useAvatarStore((state) => state.avatar.isActive);
  const setActiveAvatar = useAvatarStore((state) => state.setActive);

  const isOpenSubjectsModal = useModalStore(
    (state) => state.modals.modalSubjects?.isOpen,
  );

  const setModalOpen = useModalStore((state) => state.setModalOpen);

  const handleAvatar = () => {
    setActiveAvatar(!isSwitchedOn);
  };

  const handleModal = useCallback(
    (modalName: string) => {
      setModalOpen(modalName, true);
    },
    [setModalOpen],
  );

  return (
    <>
      <LayoutPrivate>
        <div className={styles.homePrivate}>
          <div className={styles.homePrivate__avatarWrapper}>
            <div
              className={`${isSwitchedOn ? styles.homePrivate__avatar + " " + styles.homePrivate__avatarSwitchedOn : styles.homePrivate__avatar}`}
            >
              <Image src={image} alt="teacher" />
              {isSwitchedOn ? (
                <div
                  className={`${styles.homePrivate__hover + " " + styles.homePrivate__hoverOn}`}
                >
                  <Button href="/teacher" mode="icon">
                    <Icon
                      icon="iconPencil"
                      size={styles.homePrivate__hoverIcon}
                    />
                    <Typography>Editar</Typography>
                  </Button>
                  <Button onClick={handleAvatar} mode="icon">
                    <Icon
                      icon="iconSoundOff"
                      size={styles.homePrivate__hoverIcon}
                    />
                    <Typography>Silenciar</Typography>
                  </Button>
                </div>
              ) : (
                <div
                  className={`${styles.homePrivate__hover + " " + styles.homePrivate__hoverOff}`}
                >
                  <Button href="/teacher" mode="icon">
                    <Icon
                      icon="iconPencil"
                      size={styles.homePrivate__hoverIcon}
                    />
                    <Typography>Editar</Typography>
                  </Button>
                  <Button onClick={handleAvatar} mode="icon">
                    <Icon
                      icon="iconSoundOn"
                      size={styles.homePrivate__hoverIcon}
                    />
                    <Typography>Activar</Typography>
                  </Button>
                </div>
              )}
            </div>
            <button
              type="button"
              className={`${isSwitchedOn ? styles.homePrivate__avatarCta + " " + styles.homePrivate__avatarCtaSwitchedOn : styles.homePrivate__avatarCta}`}
              onClick={handleAvatar}
            >
              <Icon
                icon={`${isSwitchedOn ? "iconConfig" : "iconSoundOff"}`}
                size={styles.homePrivate__iconSound}
              />
            </button>
          </div>
          <Typography mode="title" className={styles.homePrivate__title}>
            Hola Bárbara, ¿por dónde empezamos hoy?
          </Typography>
          <div className={styles.homePrivate__choose}>
            <Button
              className={`${styles.homePrivate__card}`}
              onClick={() => handleModal("modalSubjects")}
            >
              <Icon icon="emojiBookmark" size={styles.homePrivate__icon} />
              <Typography mode="label" className={styles.homePrivate__name}>
                Deberes/exámenes
              </Typography>
            </Button>
            <Button className={styles.homePrivate__card} href="/selectivity">
              <Icon icon="emojiGraduation" size={styles.homePrivate__icon} />
              <Typography mode="label" className={styles.homePrivate__name}>
                Selectividad
              </Typography>
            </Button>
            <Button className={styles.homePrivate__card} href="/conversation">
              <Icon icon="emojiLanguage" size={styles.homePrivate__icon} />
              <Typography mode="label" className={styles.homePrivate__name}>
                Clases de conversación
              </Typography>
            </Button>
          </div>
        </div>
      </LayoutPrivate>
      <ModalSubjects
        isModalOpen={isOpenSubjectsModal}
        modalName="modalSubjects"
      />
    </>
  );
};
