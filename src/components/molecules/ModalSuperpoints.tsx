"use client";

import { memo, useCallback } from "react";

import { Button } from "@/components/atoms/Button";
import { Modal } from "@/components/atoms/Modal";
import { Typography } from "@/components/atoms/Typography";
import { Icon } from "@/shared/Icon";

import { useModalStore } from "@/store/useModalStore";

import styles from "./ModalSuperpoints.module.scss";

type Props = {
  isModalOpen: boolean;
  modalName: string;
};

const ModalSuperpoints = memo(({ isModalOpen, modalName }: Props) => {
  const setModalOpen = useModalStore((state) => state.setModalOpen);

  const handleModal = useCallback(() => {
    setModalOpen("modalShareCode", true);
  }, [setModalOpen]);

  return (
    <Modal active={isModalOpen} modalName={modalName} alignVertical="center">
      <div className={styles.modalSuperpoints}>
        <header className={styles.modalSuperpoints__header}>
          <Icon
            icon="emojiSuperpoints"
            size={styles.modalSuperpoints__balanceIcon}
          />
          <Typography align="center" mode="subtitle">
            Consigue más Superpoints:
          </Typography>
        </header>
        <section className={styles.modalSuperpoints__body}>
          <div className={styles.modalSuperpoints__item}>
            <div>
              <Typography mode="subtitle">+25</Typography>
              <span>Superpoints</span>
            </div>
            <div>
              <b>Sólo por entrar en Supercademy</b>
              <span>cada día.</span>
            </div>
          </div>
          <div className={styles.modalSuperpoints__item}>
            <div>
              <Typography mode="subtitle">+20.000</Typography>
              <span>Superpoints</span>
            </div>
            <div>
              <b>Al compartir tu código</b>
              <span>con tus amigos.</span>
            </div>
          </div>
        </section>
        <footer className={styles.modalSuperpoints__footer}>
          <Button mode="primary" size="small" onClick={handleModal}>
            Compartir Código
          </Button>
        </footer>
      </div>
    </Modal>
  );
});

ModalSuperpoints.displayName = "ModalSuperpoints";

export { ModalSuperpoints };
