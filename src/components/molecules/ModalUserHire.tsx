"use client";

import { memo, useState } from "react";

import { Button } from "@/components/atoms/Button";
import { Field } from "@/components/atoms/Field";
import { Modal } from "@/components/atoms/Modal";
import { Typography } from "@/components/atoms/Typography";

import styles from "./ModalUserHire.module.scss";

type Props = {
  isModalOpen: boolean;
  modalName: string;
};

const ModalUserHire = memo(({ isModalOpen, modalName }: Props) => {
  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <Modal active={isModalOpen} modalName={modalName}>
      <header className={styles.profileHire__header}>
        <Typography mode="subtitle">Contrata más alumnos</Typography>
        <Typography>Añade más alumnos por solo 5€ más cada uno.</Typography>
      </header>
      <section className={styles.profileHire__body}>
        <div className={styles.profileHire__content}>
          <Typography align="center">Número de alumnos</Typography>
          <div className={styles.profileHire__counter}>
            <Button mode="icon" onClick={handleDecrement}>
              -
            </Button>
            <Field
              type="number"
              id="alumnsCounter"
              value={count.toString()}
              error={
                count >= 10
                  ? "Solo puedes contratar un máximo de 10 alumnos por cuenta*"
                  : undefined
              }
            />
            <Button mode="icon" onClick={handleIncrement}>
              +
            </Button>
          </div>
        </div>
      </section>
      <footer className={styles.profileHire__footer}>
        <Typography align="center">Coste total</Typography>
        <Typography align="center">45,99 €</Typography>
        <Button mode="primary">Confirmación</Button>
      </footer>
    </Modal>
  );
});

ModalUserHire.displayName = "ModalUserHire";

export { ModalUserHire };
