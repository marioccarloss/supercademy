"use client";

import { useState, MouseEvent } from "react";

import { LayoutPublic } from "@/components/templates/LayoutPublic";
import { Container } from "@/components/atoms/Container";
import { Typography } from "@/components/atoms/Typography";
import { Button } from "@/components/atoms/Button";
import { Icon } from "@/shared/Icon";
import { Field } from "@/components/atoms/Field";
import { Link } from "@/components/atoms/Link";
import { Pin } from "@/components/atoms/Pin";

import styles from "./Login.module.scss";

export default function ResetPinWizard() {
  const [step, setStep] = useState<number>(1);

  const NextStep = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setStep(step + 1);
  };

  const BackStep = () => {
    setStep(step - 1);
  };

  console.log("step", step);

  const steps = [
    {
      step: 1,
      title: "Encuentra tu cuenta Superacademy",
      description:
        "¡No te preocupes! Introduce el correo electrónico asociado a tu cuenta para crear una nuevo pin.",
    },
    {
      step: 2,
      title: "Un pasito más",
      description:
        "Consulta tu correo electrónico e introduce el código de confirmación que te hemos mandado.",
    },
    {
      step: 3,
      title: "¡Lo tenemos! Elige tu nuevo pin",
      description:
        "Asegúrate de que tu contraseña tenga solo 4 caracteres numéricos.",
    },
  ];

  return (
    <LayoutPublic>
      <Container>
        <div className={styles.login}>
          <div className={styles.recovery__container}>
            {step < 4 ? (
              <>
                <div className={styles.recovery__source}>
                  <Typography mode="title" size="large" icon={true}>
                    Recupera tu clave pin
                    <Icon
                      icon="iconFaceRecovery"
                      size={styles.icon__recovery}
                    />
                  </Typography>
                </div>
                <div className={styles.recovery__content}>
                  <Typography size="medium">{step} de 3</Typography>
                  <Typography mode="subtitle">
                    {steps[step - 1].title}
                  </Typography>
                  <Typography size="medium">
                    {steps[step - 1].description}
                  </Typography>
                  <form
                    className={`${styles.login__form} ${styles.recovery__form}`}
                  >
                    {step === 1 && (
                      <div className={styles.login__inputs}>
                        <Field
                          type="email"
                          id="email"
                          label="Correo electrónico"
                          placeholder="Escribe el correo electrónico"
                          //error="Correo electrónico errónea*"
                        />
                      </div>
                    )}
                    {step === 2 && (
                      <div className={styles.login__pin}>
                        <Pin label="Pin" />
                        <Link mode="primary" size="small" href="#" align="left">
                          Reenviar código
                        </Link>
                      </div>
                    )}
                    {step === 3 && (
                      <div className={styles.login__pin}>
                        <Pin label="Nuevo Pin" />
                        <Pin label="Confirmar Nuevo Pin" />
                      </div>
                    )}
                    <Button mode="primary" type="button" onClick={NextStep}>
                      Siguiente
                    </Button>
                    {step === 1 && (
                      <Link mode="secondary" href="/" align="center">
                        Cancelar
                      </Link>
                    )}
                    {step > 1 && step <= 3 && (
                      <Link
                        mode="secondary"
                        href="#"
                        align="center"
                        onClick={BackStep}
                      >
                        Atrás
                      </Link>
                    )}
                  </form>
                </div>
              </>
            ) : (
              <div className={styles.login__finish}>
                <Icon icon="iconParty" size={styles.icon__party} />
                <Typography mode="title" size="large" align="center">
                  ¡Ya tienes tu nueva Pin!
                </Typography>
                <Typography size="medium" align="center">
                  Cambiaste tu Pin correctamente.
                </Typography>
                <Button mode="primary" type="button" href="/">
                  Ir a Supercademy
                </Button>
              </div>
            )}
          </div>
        </div>
      </Container>
    </LayoutPublic>
  );
}
