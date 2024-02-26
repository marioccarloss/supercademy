"use client";

import Image from "next/image";
import { memo, useCallback } from "react";

import { Button } from "@/components/atoms/Button";
import { Modal } from "@/components/atoms/Modal";
import { Typography } from "@/components/atoms/Typography";
import { StoreType } from "@/hooks/useStore";
import { Teacher } from "@/hooks/useTeacher";
import { Icon } from "@/shared/Icon";

import { useModalStore } from "@/store/useModalStore";

import styles from "./ModalRedeem.module.scss";

type ModalData = Teacher | StoreType | undefined;

type Props = {
  data: ModalData;
  isModalOpen: boolean;
  modalName: string;
};

const ModalRedeem = memo(
  ({ data = undefined, isModalOpen, modalName }: Props) => {
    const setModalOpen = useModalStore((state) => state.setModalOpen);

    const handleModal = useCallback(() => {
      setModalOpen("modalContratulations", true);
    }, [setModalOpen]);

    return (
      <Modal active={isModalOpen} modalName={modalName} alignVertical="center">
        {data !== undefined && (
          <div className={styles.modalReedem}>
            {"logo" in data ? (
              <>
                <div
                  className={`${styles.modalReedem__avatar + " " + styles.modalReedem__avatarStore}`}
                >
                  <Image src={data.image} alt={data.name} />
                </div>
                <div className={styles.modalReedem__balance}>
                  <Typography>{data.name}</Typography>
                  <Icon
                    icon="emojiGem"
                    size={styles.modalReedem__balanceIcon}
                  />
                  <div>
                    <strong>{data.value}</strong>
                    <span>Superpoints</span>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div
                  className={`${styles.modalReedem__avatar + " " + styles.modalReedem__avatarTeacher}`}
                >
                  <Image src={data.image} alt={data.name} />
                </div>
                <div className={styles.modalReedem__balance}>
                  <Typography>{data.name}</Typography>
                  <Icon
                    icon="emojiGem"
                    size={styles.modalReedem__balanceIcon}
                  />
                  <div>
                    <strong>{data.balance}</strong>
                    <span>Superpoints</span>
                  </div>
                </div>
              </>
            )}
            <Button mode="primary" onClick={handleModal}>
              Canjear
            </Button>
          </div>
        )}
      </Modal>
    );
  },
);

ModalRedeem.displayName = "ModalRedeem";

export { ModalRedeem };
