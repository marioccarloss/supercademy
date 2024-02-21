"use client";

import Image from "next/image";
import { useCallback, useState } from "react";

import image from "@/assets/images/teacher.jpg";
import { Button } from "@/components/atoms/Button";
import { Typography } from "@/components/atoms/Typography";
import { HeaderPrivateInner } from "@/components/molecules/HeaderPrivateInner";
import { ModalInsufficientBalance } from "@/components/molecules/ModalInsufficientBalance";
import { ModalRedeem } from "@/components/molecules/ModalRedeem";
import { LayoutPrivate } from "@/components/templates/LayoutPrivate";
import { Icon } from "@/shared/Icon";

import styles from "./ProfileTeacher.module.scss";

import useTeacher, { Teacher } from "@/hooks/useTeacher";
import { useModalStore } from "@/store/useModalStore";

export const ProfileTeacher = () => {
  const [dataTeacherModal, setDataTeacherModal] = useState<Teacher>(
    {} as Teacher,
  );

  const { data } = useTeacher();

  const isOpenRedeemModal = useModalStore(
    (state) => state.modals.modalRedeem?.isOpen,
  );

  const isOpenInsufficientBalanceModal = useModalStore(
    (state) => state.modals.modalInsufficientBalance?.isOpen,
  );
  const setModalOpen = useModalStore((state) => state.setModalOpen);

  const handleModal = useCallback(
    (teacher: Teacher) => {
      if (teacher.sufficientBalance) {
        setDataTeacherModal(teacher);
        setModalOpen("modalRedeem", true);
      } else {
        setModalOpen("modalInsufficientBalance", true);
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
              <Image src={image} alt="teacher" />
            </div>
            <Typography>Einstein</Typography>
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
                  className={styles.teacher__chooseItem}
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
        teacher={dataTeacherModal}
        isModalOpen={isOpenRedeemModal}
        modalName="modalRedeem"
      />
      <ModalInsufficientBalance
        isModalOpen={isOpenInsufficientBalanceModal}
        modalName="modalInsufficientBalance"
      />
    </>
  );
};
