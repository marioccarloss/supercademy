"use client";

import { useState, useCallback, memo } from "react";

import { Button } from "@/components/atoms/Button";
import { Modal } from "@/components/atoms/Modal";
import { Typography } from "@/components/atoms/Typography";
import { Hiring } from "@/components/molecules/Hiring";
import { Icon } from "@/shared/Icon";

import useProfile from "@/hooks/useProfile";

import stylesProfile from "@/components/organisms/ProfileChoose.module.scss";
import styles from "./ModalAccount.module.scss";

type Props = {
  isModalOpen: boolean;
  modalName: string;
};

const ModalSuscription = memo(({ isModalOpen, modalName }: Props) => {
  const [step, setStep] = useState<number>(1);

  const { plans } = useProfile();

  const handleStep = () => {
    setStep(2);
  };

  const handleBack = useCallback(() => {
    setStep(step - 1);
  }, [step]);

  return (
    <Modal active={isModalOpen} modalName={modalName} alignVertical="center">
      {step === 1 && (
        <>
          <div className={styles.account}>
            <Typography mode="subtitle">Tu suscripción</Typography>
            <Typography>
              Gestiona y consulta los detalles de tu plan.
            </Typography>

            <div className={styles.cards}>
              <div className={styles.card} key={plans[2].id}>
                <div className={styles.card__container}>
                  <div className={styles.card__plan} style={{ height: "auto" }}>
                    <Icon icon={plans[2].icon} size={styles.student__one} />
                    <Typography
                      size="medium-regular"
                      mode="secondary"
                      align="center"
                    >
                      {plans[2].title}
                    </Typography>
                  </div>
                  <div className={styles.card__content}>
                    <div className={styles.card__price}>
                      <Typography
                        size="extra-large"
                        mode="secondary"
                        align="left"
                      >
                        {plans[2].price}
                      </Typography>
                      <Typography size="medium" mode="secondary">
                        mes
                      </Typography>
                    </div>
                    <Typography
                      size="extra-small"
                      mode="secondary"
                      align="left"
                    >
                      3 alumnos suscritos
                    </Typography>
                  </div>
                </div>
              </div>
            </div>
            <Button mode="primary" onClick={handleStep}>
              Añadir alumno
            </Button>
            <Button mode="primary" href="/#stripe">
              Gestionar método de pago
            </Button>
            <Button mode="icon">Cancelar suscripción</Button>
          </div>
        </>
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
          <Hiring planHiring={4} />
        </>
      )}
    </Modal>
  );
});

ModalSuscription.displayName = "ModalSuscription";

export { ModalSuscription };
