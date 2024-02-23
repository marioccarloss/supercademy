"use client";

import { memo } from "react";

import { Button } from "@/components/atoms/Button";
import { Modal } from "@/components/atoms/Modal";
import { Typography } from "@/components/atoms/Typography";
import { Icon } from "@/shared/Icon";

import styles from "./ModalShareCode.module.scss";

type Props = {
  isModalOpen: boolean;
  modalName: string;
};

const ModalShareCode = memo(({ isModalOpen, modalName }: Props) => {
  return (
    <Modal active={isModalOpen} modalName={modalName} alignVertical="center">
      <div className={styles.modalShareCode}>
        <Typography mode="subtitle" align="center">
          Comparte tu código único
        </Typography>
        <Button mode="icon">
          <Typography align="center" className={styles.modalShareCode__copy}>
            3435X
          </Typography>
          <Icon icon="iconCopy" size={styles.modalShareCode__icon} />
        </Button>
        <Typography align="center">
          Por cada amigo que use tu código para registrarse en Supercademy
          recibirás 20.000 Superpoints y tu amigo 500. Cada amigo que se
          registre tiene que estar al menos 30 días registrado para que ambos
          recibáis los puntos.
        </Typography>
        <ul>
          <li>
            <a href="#" target="_blank">
              <Icon icon="iconWhatsapp" />
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              <Icon icon="iconInstagram" />
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              <Icon icon="iconTiktok" />
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              <Icon icon="iconEmail" />
            </a>
          </li>
        </ul>
      </div>
    </Modal>
  );
});

ModalShareCode.displayName = "ModalShareCode";

export { ModalShareCode };
