"use client";

import { memo, useCallback, useState } from "react";

import { Button } from "@/components/atoms/Button";
import { Modal } from "@/components/atoms/Modal";
import { Typography } from "@/components/atoms/Typography";
import { Icon } from "@/shared/Icon";

import useProfile from "@/hooks/useProfile";

import stylesProfile from "@/components/organisms/ProfileChoose.module.scss";
import styles from "./ModalAccount.module.scss";

type Props = {
  isModalOpen: boolean;
  modalName: string;
};

const ModalAccountSecurity = memo(({ isModalOpen, modalName }: Props) => {
  const { users } = useProfile();
  const user = users[0];
  const [step, setStep] = useState(1);

  const handleBack = useCallback(() => {
    setStep(step - 1);
  }, [step]);

  const handleNextStep = useCallback(() => {
    setStep(step + 1);
  }, [step]);

  return (
    <Modal active={isModalOpen} modalName={modalName} alignVertical="center">
      <>
        {step === 1 && (
          <div className={styles.account}>
            <Typography mode="subtitle">Seguridad y Log-in</Typography>
            <Typography>
              Gestiona desde aquí todo lo relacionado con tu email y claves.
            </Typography>
            <Button mode="primary" href="/reset">
              Cambiar contraseña
            </Button>
            <Button mode="primary" onClick={handleNextStep}>
              Cambiar pin
            </Button>
          </div>
        )}
        {step === 2 && (
          <>
            <header>
              <Button
                mode="icon"
                className={stylesProfile.profileModal__back}
                onClick={handleBack}
              >
                <Icon
                  icon="arrowBack"
                  size={stylesProfile.profileModal__backIcon}
                />
                <Typography mode="label">Atrás</Typography>
              </Button>
            </header>
            <div className={stylesProfile.profileModal__form}>
              <div className={stylesProfile.profileModal__field}>
                <div key={user.id} className={stylesProfile.profile__user}>
                  <div
                    className={stylesProfile.profile__icon}
                    style={{ background: `${user.color}` }}
                  >
                    <Icon icon={user.icon} size={stylesProfile.icon__choose} />
                  </div>
                </div>
                <div className={stylesProfile.profileModal__createPinTitle}>
                  <Typography mode="subtitle">Creación de Pin</Typography>
                  <Typography mode="label">
                    El código pin debe tener 4 digitos
                  </Typography>
                </div>
              </div>
              <div className={stylesProfile.profileModal__pinContainer}>
                <Typography mode="label" align="center">
                  Pin
                </Typography>
                <div className={stylesProfile.profileModal__pinList}>
                  <input
                    type="text"
                    className={stylesProfile.profileModal__pin}
                  />
                  <input
                    type="text"
                    className={stylesProfile.profileModal__pin}
                  />
                  <input
                    type="text"
                    className={stylesProfile.profileModal__pin}
                  />
                  <input
                    type="text"
                    className={stylesProfile.profileModal__pin}
                  />
                </div>
              </div>
              <div className={stylesProfile.profileModal__field}>
                <Button mode="primary" size="small" href="/home">
                  Confirmación
                </Button>
              </div>
            </div>
          </>
        )}
      </>
    </Modal>
  );
});

ModalAccountSecurity.displayName = "ModalAccountSecurity";

export { ModalAccountSecurity };
