"use client";

import { useCallback } from "react";

import { Button } from "@/components/atoms/Button";
import { Typography } from "@/components/atoms/Typography";
import { ModalAccountSecurity } from "@/components/molecules/ModalAccountSecurity";
import { ModalLogout } from "@/components/molecules/ModalLogout";
import { ModalSuscription } from "@/components/molecules/ModalSuscription";
import { ModalUserHire } from "@/components/molecules/ModalUserHire";
import { LayoutPublic } from "@/components/templates/LayoutPublic";
import { Icon } from "@/shared/Icon";

import { useModalStore } from "@/store/useModalStore";

import styles from "./ProfileAccount.module.scss";

export const ProfileAccount = () => {
  const isOpenAccountSecurityModal = useModalStore(
    (state) => state.modals.modalAccountSecurity?.isOpen,
  );

  const isOpenAccountSuscriptionModal = useModalStore(
    (state) => state.modals.modalAccountSuscription?.isOpen,
  );

  const isOpenProfileHire = useModalStore(
    (state) => state.modals.modalProfileHire?.isOpen,
  );

  const isOpenLogout = useModalStore(
    (state) => state.modals.modalLogout?.isOpen,
  );

  const setModalOpen = useModalStore((state) => state.setModalOpen);

  const handleModal = useCallback(
    (modalName: string) => {
      setModalOpen(modalName, true);
    },
    [setModalOpen],
  );

  return (
    <>
      <LayoutPublic>
        <div className={styles.account}>
          <header className={styles.account__header}>
            <div>
              <Typography>¡Hola Bárbara!</Typography>
              <Icon icon="emojiHiFive" size={styles.account__headerIcon} />
            </div>
            <Typography>Aquí podrás administrar tu cuenta</Typography>
          </header>
          <section className={styles.account__cards}>
            <div
              className={styles.account__card}
              onClick={() => handleModal("modalAccountSecurity")}
            >
              <Icon icon="iconSecurity" size={styles.account__icon} />
              <Typography mode="subtitle">Seguridad y log-in</Typography>
              <Typography>Cambia tu correo electrónico, contraseña.</Typography>
            </div>
            <div
              className={styles.account__card}
              onClick={() => handleModal("modalAccountSuscription")}
            >
              <Icon icon="iconTicket" size={styles.account__icon} />
              <Typography mode="subtitle">Suscripción y facturación</Typography>
              <Typography>
                Consulta los detalles de tu plan, pagos...
              </Typography>
            </div>
            <div className={styles.account__card}>
              <Icon icon="iconHelp" size={styles.account__icon} />
              <Typography mode="subtitle">Ayuda</Typography>
              <Typography>
                Escribe a
                <a
                  href="mailto:ayuda@supercademy.com"
                  className={styles.account__link}
                >
                  ayuda@supercademy.com
                </a>
              </Typography>
            </div>
          </section>
          <Button mode="icon" onClick={() => handleModal("modalLogout")}>
            <Icon icon="iconLogout" size={styles.account__footerIcon} />
            <Typography>Cerrar sesión</Typography>
          </Button>
        </div>
      </LayoutPublic>
      <ModalAccountSecurity
        isModalOpen={isOpenAccountSecurityModal}
        modalName="modalAccountSecurity"
      />
      <ModalSuscription
        isModalOpen={isOpenAccountSuscriptionModal}
        modalName="modalAccountSuscription"
      />
      <ModalUserHire
        isModalOpen={isOpenProfileHire}
        modalName="modalProfileHire"
      />
      <ModalLogout isModalOpen={isOpenLogout} modalName="modalLogout" />
    </>
  );
};
