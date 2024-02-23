"use client";

import { memo } from "react";

import { Button } from "@/components/atoms/Button";
import { Modal } from "@/components/atoms/Modal";
import { Typography } from "@/components/atoms/Typography";

import styles from "./ModalAccount.module.scss";

type Props = {
  isModalOpen: boolean;
  modalName: string;
};

const ModalLogout = memo(({ isModalOpen, modalName }: Props) => {
  return (
    <Modal active={isModalOpen} modalName={modalName} alignVertical="center">
      <div className={styles.account}>
        <Typography mode="subtitle">Cerrar Sesión</Typography>
        <Typography>
          ¿Estás seguro que deseas cerrar sesión en Supercademy?
        </Typography>

        <Button mode="primary">Cerrar sesión</Button>
        <Button mode="icon">Cancelar</Button>
      </div>
    </Modal>
  );
});

ModalLogout.displayName = "ModalLogout";

export { ModalLogout };
