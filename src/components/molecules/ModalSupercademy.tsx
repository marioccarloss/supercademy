"use client";

import { memo } from "react";

import { Modal } from "@/components/atoms/Modal";
import { Typography } from "@/components/atoms/Typography";
import { Icon } from "@/shared/Icon";

import styles from "./ModalSupercademy.module.scss";

type Props = {
  isModalOpen: boolean;
  modalName: string;
};

const ModalSupercademy = memo(({ isModalOpen, modalName }: Props) => {
  return (
    <Modal active={isModalOpen} modalName={modalName} alignVertical="center">
      <div className={styles.supercademy}>
        <div className={styles.supercademy__content}>
          <header>
            <Icon icon="emojiSuperpoints" size={styles.supercademy__icon} />
            <div>
              <Typography mode="title">+25</Typography>
              <Typography>Superpoints</Typography>
            </div>
          </header>
          <Typography align="center">
            ¡Felicidades! Has conseguido Superpoints por volver a utilizar
            Supercademy
          </Typography>
        </div>
      </div>
    </Modal>
  );
});

ModalSupercademy.displayName = "ModalSupercademy";

export { ModalSupercademy };
