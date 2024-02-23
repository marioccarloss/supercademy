"use client";

import { memo } from "react";

import { Modal } from "@/components/atoms/Modal";
import { Typography } from "@/components/atoms/Typography";
import { Icon } from "@/shared/Icon";

import styles from "./ModalCongratulations.module.scss";

type Props = {
  isModalOpen: boolean;
  modalName: string;
};

const ModalCongratulations = memo(({ isModalOpen, modalName }: Props) => {
  return (
    <Modal active={isModalOpen} modalName={modalName} alignVertical="center">
      <div className={styles.modalCongratulations}>
        <Icon icon="iconParty" size={styles.modalCongratulations__icon} />
        <Typography mode="subtitle" align="center">
          ¡Enhorabuena ya lo tienes!
        </Typography>
        <Typography align="center">
          Nos pondremos en contacto contigo para hacértelo llegar. Escríbenos a
          <a href="mailto:ayuda@supercademy.com">
            <u>ayuda@supercademy.com</u>
          </a>{" "}
          si no recibes un mail en 24h con el premio.
        </Typography>
      </div>
    </Modal>
  );
});

ModalCongratulations.displayName = "ModalCongratulations";

export { ModalCongratulations };
