"use client";

import { memo } from "react";

import { Button } from "@/components/atoms/Button";
import { Modal } from "@/components/atoms/Modal";
import { Typography } from "@/components/atoms/Typography";

import { useSubjectStore } from "@/store/useSubjectStore";
import styles from "./ModalSubjects.module.scss";

type Props = {
  isModalOpen: boolean;
  modalName: string;
};

const ModalSubjects = memo(({ isModalOpen, modalName }: Props) => {
  const subjects = useSubjectStore((state) => state.subject);
  const isCountSubjectsValid = useSubjectStore((state) => state.isValid);
  const isErrorSubjectsValid = useSubjectStore((state) => state.isError);
  const toggleSelected = useSubjectStore((state) => state.toggleSelection);

  const handleSelection = (id: string) => {
    toggleSelected(id);
  };

  if (!subjects) return null;

  return (
    <Modal active={isModalOpen} modalName={modalName}>
      <header className={styles.subject__header}>
        <Typography mode="subtitle">¿Qué asignaturas te interesan?</Typography>
        <Typography>
          Puedes elegir un mínimo de 1 y un máximo de 10 asignaturas
        </Typography>
        {isErrorSubjectsValid && (
          <Typography mode="error">
            *Ya has llegado a 10, elimina alguna de tus selecciones.
          </Typography>
        )}
      </header>
      <section className={styles.subject__body}>
        <div className={styles.subject__list}>
          {subjects.map((subject) => (
            <div
              key={subject.id}
              className={`${subject.selected ? styles.subject__item + " " + styles.subject__itemSelected : styles.subject__item}`}
              onClick={() => handleSelection(subject.id)}
            >
              <Typography>{subject.label}</Typography>
            </div>
          ))}
        </div>
      </section>
      <footer className={styles.subject__footer}>
        <Button mode={`${isCountSubjectsValid ? "primary" : "disabled"}`}>
          Siguiente
        </Button>
      </footer>
    </Modal>
  );
});

ModalSubjects.displayName = "ModalSubjects";

export { ModalSubjects };
