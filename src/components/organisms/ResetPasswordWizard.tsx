"use client";

import { useState, MouseEvent } from "react";

import { LayoutPublic } from "@/components/templates/LayoutPublic";
import { Container } from "@/components/atoms/Container";
import { Typography } from "@/components/atoms/Typography";
import { Button } from "@/components/atoms/Button";
import { Icon } from "@/shared/Icon";
import { Field } from "@/components/atoms/Field";
import { Link } from "@/components/atoms/Link";

import styles from "./Login.module.scss";

export default function ResetPasswordWizard() {
  const [step, setStep] = useState<number>(1);

  const NextStep = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setStep(step + 1);
  };

  const BackStep = () => {
    setStep(step - 1);
  };

  const steps = [
    {
      step: 1,
      title: "Encuentra tu cuenta Superacademy",
      description:
        "¡No te preocupes! Introduce el correo electrónico asociado a tu cuenta para crear una nueva contraseña.",
    },
    {
      step: 2,
      title: "Un pasito más",
      description:
        "Consulta tu correo electrónico e introduce el código de confirmación que te hemos mandado.",
    },
    {
      step: 3,
      title: "¡Lo tenemos! Elige tu nueva contraseña",
      description:
        "Asegúrate de que tu contraseña tenga 8 caracteres o más y que incluya números y símbolos.",
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
                    Recupera tu contraseña
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
                    {step < 3 && (
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
                      <Link mode="primary" size="small" href="#" align="left">
                        Reenviar código
                      </Link>
                    )}
                    {step === 3 && (
                      <>
                        <Field
                          type="password"
                          id="password"
                          label="¿Qué contraseña quieres poner?"
                          placeholder="¿Qué contraseña quieres poner?"
                          //error="Contraseña incorrecta*"
                        />
                        <Field
                          type="password"
                          id="passwordRepeat"
                          label="Repite la contraseña"
                          placeholder="Escribe la contraseña"
                          //error="Contraseña incorrecta*"
                        />
                      </>
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
                  ¡Ya tienes tu nueva contraseña!
                </Typography>
                <Typography size="medium" align="center">
                  Cambiaste tu contraseña correctamente.
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
