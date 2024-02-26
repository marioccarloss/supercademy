"use client";

import { memo, useCallback, useState } from "react";

import { Button } from "@/components/atoms/Button";
import { Modal } from "@/components/atoms/Modal";
import { Typography } from "@/components/atoms/Typography";
import { Field } from "@/components/atoms/Field";
import { Icon } from "@/shared/Icon";

import stylesProfile from "@/components/organisms/ProfileChoose.module.scss";
import styles from "./ModalAccount.module.scss";

type Props = {
  isModalOpen: boolean;
  modalName: string;
};

const ModalAccountSecurity = memo(({ isModalOpen, modalName }: Props) => {
  const [updatePassword, setUpdatePassword] = useState({
    currentPassword: "",
    newPassword: "",
    confirmationPassword: "",
  });

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
            <Button mode="primary" onClick={handleNextStep}>
              Cambiar contraseña
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
                <div className={stylesProfile.profileModal__createPinTitle}>
                  <Typography mode="subtitle">Cambiar contraseña</Typography>

                  <Field
                    type="password"
                    id="currentPassword"
                    label="Contraseña actual"
                    placeholder="Escribe la contraseña actual"
                    value={updatePassword.currentPassword}
                    onChange={(e) =>
                      setUpdatePassword({
                        ...updatePassword,
                        currentPassword: e.target.value,
                      })
                    }
                    //error="Contraseña incorrecta*"
                  />
                  <Field
                    type="password"
                    id="newPassword"
                    label="Nueva contraseña"
                    placeholder="Escribe la nueva contraseña"
                    value={updatePassword.newPassword}
                    onChange={(e) =>
                      setUpdatePassword({
                        ...updatePassword,
                        newPassword: e.target.value,
                      })
                    }
                    //error="Contraseña incorrecta*"
                  />
                  <Field
                    type="password"
                    id="confirmPassword"
                    label="Confirmar ontraseña"
                    placeholder="Escribe la confirmación de tu contraseña"
                    value={updatePassword.confirmationPassword}
                    onChange={(e) =>
                      setUpdatePassword({
                        ...updatePassword,
                        confirmationPassword: e.target.value,
                      })
                    }
                    //error="Contraseña incorrecta*"
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
