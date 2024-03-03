"use client";

import Image from "next/image";
import { useCallback } from "react";

import { Button } from "@/components/atoms/Button";
import { Typography } from "@/components/atoms/Typography";
import { HeaderPrivateInner } from "@/components/molecules/HeaderPrivateInner";
import { ModalCongratulations } from "@/components/molecules/ModalCongratulations";
import { ModalInsufficientBalance } from "@/components/molecules/ModalInsufficientBalance";
import { ModalRedeem } from "@/components/molecules/ModalRedeem";
import { ModalShareCode } from "@/components/molecules/ModalShareCode";
import { LayoutPrivate } from "@/components/templates/LayoutPrivate";
import { Icon } from "@/shared/Icon";

import styles from "./ProfileTeacher.module.scss";

import useTeacher, { Teacher } from "@/hooks/useTeacher";
import { useTeacherStore } from "@/store/useTeacherStore";
import { useModalStore } from "@/store/useModalStore";

export const ProfileTeacher = () => {
  const toggleSelected = useTeacherStore((state) => state.toggleSelection);

  const teachers = useTeacherStore((state) => state.teacher);
  const teacherSelected = teachers.filter((t) => t.selected)[0];

  const { data } = useTeacher();

  const isOpenRedeemModal = useModalStore(
    (state) => state.modals.modalRedeem?.isOpen,
  );

  const isOpenInsufficientBalanceModal = useModalStore(
    (state) => state.modals.modalInsufficientBalance?.isOpen,
  );

  const isOpenContratulationsModal = useModalStore(
    (state) => state.modals.modalContratulations?.isOpen,
  );

  const isOpenShareCodeModal = useModalStore(
    (state) => state.modals.modalShareCode?.isOpen,
  );

  const setModalOpen = useModalStore((state) => state.setModalOpen);

  const handleModal = useCallback(
    (teacher: Teacher) => {
      if (teacher.sufficientBalance !== undefined) {
        if (teacher.sufficientBalance) {
          toggleSelected(teacher.id);
          setModalOpen("modalRedeem", true);
        } else {
          setModalOpen("modalInsufficientBalance", true);
        }
      } else {
        toggleSelected(teacher.id);
      }
    },
    [setModalOpen, toggleSelected],
  );

  return (
    <>
      <LayoutPrivate isHeaderVisible={false}>
        <header className={styles.teacher}>
          <HeaderPrivateInner title="Mi profesor" emoji="emojiTeacher" />
        </header>
        <section className={styles.teacher__body}>
          <div className={styles.teacher__top}>
            <div className={styles.teacher__avatar}>
              <Image
                src={teacherSelected.image.src}
                alt={teacherSelected.name}
                width={teacherSelected.image.width}
                height={teacherSelected.image.height}
              />
            </div>
            <Typography>{teacherSelected.name}</Typography>
            <Button mode="primary" size="medium">
              Guardar cambios
            </Button>
          </div>
          <div className={styles.teacher__choose}>
            <Typography>Personajes famosos</Typography>
            <div className={styles.teacher__chooseList}>
              {data.map((teacher) => (
                <Button
                  mode="icon"
                  key={teacher.id}
                  className={`${teacherSelected.id === teacher.id ? styles.teacher__chooseItem + " " + styles.teacher__chooseItemActive : styles.teacher__chooseItem}`}
                  onClick={() => handleModal(teacher)}
                >
                  <Image
                    src={teacher.image}
                    alt={`${teacher.name}-${teacher.balance}`}
                    width={96}
                    height={96}
                  />
                  {teacher.lock && (
                    <div className={styles.teacher__chooseItemLock}>
                      <Icon
                        icon="iconLock"
                        size={styles.teacher__chooseItemLockIcon}
                      />
                    </div>
                  )}
                </Button>
              ))}
            </div>
          </div>
        </section>
      </LayoutPrivate>

      <ModalRedeem
        data={teacherSelected}
        isModalOpen={isOpenRedeemModal}
        modalName="modalRedeem"
      />
      <ModalInsufficientBalance
        isModalOpen={isOpenInsufficientBalanceModal}
        modalName="modalInsufficientBalance"
      />
      <ModalCongratulations
        isModalOpen={isOpenContratulationsModal}
        modalName="modalContratulations"
      />
      <ModalShareCode
        isModalOpen={isOpenShareCodeModal}
        modalName="modalShareCode"
        code="3435X"
      />
    </>
  );
};
