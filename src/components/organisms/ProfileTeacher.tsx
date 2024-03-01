"use client";

import Image from "next/image";
import { useCallback, useState, useId } from "react";

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

import teacher1 from "@/assets/images/teacher.jpg";

import useTeacher, { Teacher } from "@/hooks/useTeacher";
import { useModalStore } from "@/store/useModalStore";

export const ProfileTeacher = () => {
  const [dataTeacherModal, setDataTeacherModal] = useState<Teacher>({
    id: useId(),
    name: "teacher 1",
    image: teacher1,
    lock: false,
    sufficientBalance: true,
    balance: "100.000",
  });

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
          setDataTeacherModal(teacher);
          setModalOpen("modalRedeem", true);
        } else {
          setModalOpen("modalInsufficientBalance", true);
        }
      } else {
        setDataTeacherModal(teacher);
      }
    },
    [setModalOpen],
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
              <Image src={dataTeacherModal.image} alt="teacher" />
            </div>
            <Typography>{dataTeacherModal.name}</Typography>
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
                  className={`${dataTeacherModal.id === teacher.id ? styles.teacher__chooseItem + " " + styles.teacher__chooseItemActive : styles.teacher__chooseItem}`}
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
        data={dataTeacherModal}
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
