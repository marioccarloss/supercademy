"use client";

import Image from "next/image";
import { memo, useCallback } from "react";

import { Button } from "@/components/atoms/Button";
import { Modal } from "@/components/atoms/Modal";
import { Typography } from "@/components/atoms/Typography";
import { Teacher } from "@/hooks/useTeacher";
import { Icon } from "@/shared/Icon";

import { useModalStore } from "@/store/useModalStore";

import styles from "./ModalRedeem.module.scss";

type Props = {
  teacher: Teacher;
  isModalOpen: boolean;
  modalName: string;
};

const ModalRedeem = memo(({ teacher, isModalOpen, modalName }: Props) => {
  const setModalOpen = useModalStore((state) => state.setModalOpen);

  const handleModal = useCallback(() => {
    setModalOpen("modalContratulations", true);
  }, [setModalOpen]);

  return (
    <Modal active={isModalOpen} modalName={modalName} alignVertical="center">
      <div className={styles.modalReedem}>
        <div className={styles.modalReedem__avatar}>
          <Image src={teacher.image} alt={teacher.name} />
        </div>
        <div className={styles.modalReedem__balance}>
          <Typography>{teacher.name}</Typography>
          <Icon icon="emojiGem" size={styles.modalReedem__balanceIcon} />
          <div>
            <strong>{teacher.balance}</strong>
            <span>Superpoints</span>
          </div>
        </div>
        <Button mode="primary" onClick={handleModal}>
          Canjear
        </Button>
      </div>
    </Modal>
  );
});

ModalRedeem.displayName = "ModalRedeem";

export { ModalRedeem };
