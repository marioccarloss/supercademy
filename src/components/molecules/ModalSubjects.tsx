"use client";

import { memo } from "react";

import { Button } from "@/components/atoms/Button";
import { Modal } from "@/components/atoms/Modal";
import { Typography } from "@/components/atoms/Typography";
import useSubjects from "@/hooks/useSubjects";

import styles from "./ModalSubjects.module.scss";

type Props = {
  isModalOpen: boolean;
  modalName: string;
};

const ModalSubjects = memo(({ isModalOpen, modalName }: Props) => {
  const { data } = useSubjects();
  return (
    <Modal active={isModalOpen} modalName={modalName}>
      <header className={styles.subject__header}>
        <Typography mode="subtitle">¿Qué asignaturas te interesan?</Typography>
        <Typography>
          Puedes elegir un mínimo de 1 y un máximo de 10 asignaturas
        </Typography>
      </header>
      <section className={styles.subject__body}>
        <div className={styles.subject__list}>
          {data.map((subject) => (
            <div key={subject.id} className={styles.subject__item}>
              <Typography>{subject.label}</Typography>
            </div>
          ))}
        </div>
      </section>
      <footer className={styles.subject__footer}>
        <Button mode="primary">Siguiente</Button>
      </footer>
    </Modal>
  );
});

ModalSubjects.displayName = "ModalSubjects";

export { ModalSubjects };
