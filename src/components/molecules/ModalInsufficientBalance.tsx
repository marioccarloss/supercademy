"use client";

import { memo, useCallback } from "react";

import { Button } from "@/components/atoms/Button";
import { Modal } from "@/components/atoms/Modal";
import { Typography } from "@/components/atoms/Typography";
import { Icon } from "@/shared/Icon";

import { useModalStore } from "@/store/useModalStore";

import styles from "./ModalInsufficientBalance.module.scss";

type Props = {
  isModalOpen: boolean;
  modalName: string;
};

const ModalInsufficientBalance = memo(({ isModalOpen, modalName }: Props) => {
  const setModalOpen = useModalStore((state) => state.setModalOpen);

  const handleModal = useCallback(() => {
    setModalOpen("modalShareCode", true);
  }, [setModalOpen]);

  return (
    <Modal active={isModalOpen} modalName={modalName} alignVertical="center">
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
          <Button mode="primary" onClick={handleModal}>
            Compartir código
          </Button>
        </footer>
      </div>
    </Modal>
  );
});

ModalInsufficientBalance.displayName = "ModalInsufficientBalance";

export { ModalInsufficientBalance };
