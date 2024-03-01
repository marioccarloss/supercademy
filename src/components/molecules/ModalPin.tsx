"use client";

import { memo } from "react";

import { Typography } from "@/components/atoms/Typography";
import { Modal } from "@/components/atoms/Modal";
import { Pin } from "@/components/atoms/Pin";
import { Button } from "@/components/atoms/Button";
import { Icon } from "@/shared/Icon";

import styles from "./ModalPin.module.scss";

import { User } from "@/hooks/useProfile";

type Props = {
  isModalOpen: boolean;
  modalName: string;
  user: User;
};

const ModalPin = memo(({ isModalOpen, modalName, user }: Props) => {
  return (
    <Modal active={isModalOpen} modalName={modalName}>
      <>
        <header className={styles.modalPin__header}>
          <div className={styles.modalPin__headerContainer}>
            <div
              className={styles.modalPin__avatar}
              style={{ background: `${user.color}` }}
            >
              <Icon icon={user.icon} size={styles.modalPin__avatarIcon} />
            </div>
            <Typography mode="subtitle">Accede con tu Pin</Typography>
          </div>
        </header>
        <Pin label="Pin" />
        <footer className={styles.modalPin__footer}>
          <Button mode="primary">Confirmación</Button>
          <Button mode="icon" href="/recovery-pin">
            Me he olvidado el pin
          </Button>
        </footer>
      </>
    </Modal>
  );
});

ModalPin.displayName = "ModalPin";

export { ModalPin };
