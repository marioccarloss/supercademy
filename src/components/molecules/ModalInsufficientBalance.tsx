"use client";

import { memo } from "react";

import { Button } from "@/components/atoms/Button";
import { Modal } from "@/components/atoms/Modal";
import { Typography } from "@/components/atoms/Typography";
import { Icon } from "@/shared/Icon";
import styles from "./ModalInsufficientBalance.module.scss";

type Props = {
  isModalOpen: boolean;
  modalName: string;
};

const ModalInsufficientBalance = memo(({ isModalOpen, modalName }: Props) => {
  return (
    <Modal active={isModalOpen} modalName={modalName}>
      <div className={styles.modalInsufficientBalance}>
        <Icon icon="emojiWoozy" size={styles.modalInsufficientBalanceIcon} />
        <Typography className={styles.title}>
          No tienes suficientes Superpoints
        </Typography>
        <Typography align="center">
          Sigue utilizando la plataforma o comparte el código para obtener más
          puntos
        </Typography>
        <footer>
          <Button mode="primary">Compartir código</Button>
        </footer>
      </div>
    </Modal>
  );
});

ModalInsufficientBalance.displayName = "ModalInsufficientBalance";

export { ModalInsufficientBalance };
