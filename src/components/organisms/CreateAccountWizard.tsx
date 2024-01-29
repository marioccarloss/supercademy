"use client";

import { useState, useId, MouseEvent } from "react";

import { LayoutPublic } from "@/components/templates/LayoutPublic";
import { Container } from "@/components/atoms/Container";
import { Typography } from "@/components/atoms/Typography";
import { Button } from "@/components/atoms/Button";
import { Icon } from "@/shared/Icon";
import { Field } from "@/components/atoms/Field";
import { Link } from "@/components/atoms/Link";

import styles from "./Login.module.scss";

type CardType = {
  id: string;
  title: string;
  description: string;
  price: string;
  icon: "iconStudentOne" | "iconStudentTwo" | "iconStudentThree";
};
export default function CreateAccountWizard() {
  const [step, setStep] = useState<number>(1);
  const [stepInner, setStepInner] = useState<number>(1);
  const [cardIndex, setCardIndex] = useState<number>(0);
  const NextStep = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setStepInner(stepInner + 1);
    if (stepInner === 3) {
      setStep(step + 1);
    }
  };

  const BackStep = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setStep(step - 1);
  };

  const handleCardSelected = (index: number) => {
    if (stepInner === 4 && step === 2) {
      setStep(step + 1);
    }
    setCardIndex(index);
  };

  const handlePayment = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setStep(step + 1);
  };

  const cards: CardType[] = [
    {
      id: useId(),
      title: "Único",
      description: "Para 1 alumno",
      price: "15,99€",
      icon: "iconStudentOne",
    },
    {
      id: useId(),
      title: "Dúo",
      description: "Para 2 alumnos",
      price: "25,99€",
      icon: "iconStudentTwo",
    },
    {
      id: useId(),
      title: "Familia",
      description: "Para 3 alumnos\n" + "+5€ por alumno extra",
      price: "35,99€",
      icon: "iconStudentThree",
    },
  ];

  return (
    <LayoutPublic>
      <Container>
        <div className={styles.login}>
          <div className={styles.account__container}>
            {stepInner < 4 && step < 3 && (
              <>
                <div className={styles.account__source}>
                  <Typography mode="title" size="large" icon={true}>
                    ¡Hola, super estudiante!
                    <Icon icon="iconGreeting" size={styles.icon__greeting} />
                  </Typography>
                  <div className={styles.account__steps}>
                    <div className={styles.account__step}>
                      <div className={styles.account__stepContainer}>
                        <Icon
                          icon="iconAccountStepOne"
                          size={styles.account__icon}
                        />
                        <Typography>Elige el número de usuarios.</Typography>
                      </div>
                    </div>
                    <div className={styles.account__step}>
                      <div className={styles.account__stepContainer}>
                        <Icon
                          icon="iconAccountStepTwo"
                          size={styles.account__icon}
                        />
                        <Typography>
                          ¡Prueba gratis 30 días! Puedes cancelar cuando
                          quieras.
                        </Typography>
                      </div>
                    </div>
                    <div className={styles.account__step}>
                      <div className={styles.account__stepContainer}>
                        <Icon
                          icon="iconAccountStepThree"
                          size={styles.account__icon}
                        />
                        <Typography>
                          Comienza a disfrutar de la experiencia Nº 1 en
                          profesores particulares.
                        </Typography>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.account__content}>
                  <Typography size="medium">{step} de 3</Typography>
                  <Typography mode="subtitle">Crea tu cuenta</Typography>
                  {stepInner === 1 && (
                    <Typography size="medium">
                      Puedes crear tu cuenta introduciendo tu correo electrónico
                      o a través de Google/ Apple.
                    </Typography>
                  )}
                  {stepInner === 2 && (
                    <Typography size="medium">
                      Introduce tu correo electrónico en la casilla
                      correspondiente.
                    </Typography>
                  )}
                  {stepInner === 3 && (
                    <Typography size="medium">
                      Estás creando una cuenta en Supercademy con
                      marioccarloss@gmail.com
                    </Typography>
                  )}
                  {step === 1 && stepInner === 1 && (
                    <>
                      <Button
                        mode="tertiary"
                        href="/invalid"
                        as="https://www.google.es"
                      >
                        <Icon icon="google" />
                        <Typography mode="secondary">
                          Iniciar sesión con Google
                        </Typography>
                      </Button>
                      <Button
                        mode="tertiary"
                        href="/invalid"
                        as="https://www.icloud.com"
                      >
                        <Icon icon="apple" />
                        <Typography mode="secondary">
                          Iniciar sesión con Apple
                        </Typography>
                      </Button>
                    </>
                  )}
                  <form className={styles.login__form}>
                    {stepInner === 2 && (
                      <Field
                        type="email"
                        id="email"
                        label="Correo electrónico"
                        placeholder="Escribe el correo electrónico"
                        //error="Correo electrónico errónea*"
                      />
                    )}
                    {stepInner === 3 && (
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
                      Crear cuenta
                    </Button>
                    {step === 1 && (
                      <Typography mode="body" size="small" align="center">
                        Al continuar, aceptas los Términos y condiciones de uso.
                        Consulta nuestra Política de privacidad.
                      </Typography>
                    )}
                    <Typography size="medium" align="center">
                      ¿Ya tienes cuenta?
                      <Link mode="primary" href="/">
                        Iniciar sesión
                      </Link>
                    </Typography>
                    {step === 2 && (
                      <Link
                        mode="secondary"
                        href="#"
                        align="center"
                        onClick={() => BackStep}
                      >
                        Volver
                      </Link>
                    )}
                  </form>
                </div>
              </>
            )}
            {stepInner === 4 && step < 3 && (
              <div className={styles.account__choose}>
                <Typography size="medium">{step} de 3</Typography>
                <Typography mode="subtitle" icon={true}>
                  Elije tu plan
                  <Icon icon="iconMagicWand" size={styles.icon__magic} />
                </Typography>
                <Typography size="medium">
                  Elige tu plan en base al número de alumnos que van a utilizar
                  la plataforma.
                </Typography>
                <div className={styles.cards}>
                  {cards.map((card: CardType, index: number) => (
                    <div className={styles.card} key={card.id}>
                      <div className={styles.card__container}>
                        <div className={styles.card__plan}>
                          <Icon icon={card.icon} size={styles.student__one} />
                          <Typography
                            size="medium-regular"
                            mode="secondary"
                            align="center"
                          >
                            {card.title}
                          </Typography>
                        </div>
                        <div className={styles.card__content}>
                          <div className={styles.card__price}>
                            <Typography
                              size="extra-large"
                              mode="secondary"
                              align="left"
                            >
                              {card.price}
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
                            {card.description}
                          </Typography>
                          <Button
                            mode="primary"
                            size="medium"
                            onClick={() => handleCardSelected(index)}
                          >
                            Prueba gratuita
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <Typography size="small" align="left">
                  *Todos los planes son gratis durante 30 días. Puedes cancelar
                  cuando quieras.
                </Typography>
              </div>
            )}
            {step === 3 && (
              <div className={styles.account__chooseMiddle}>
                <div className={styles.account__chooseTop}>
                  <Typography mode="subtitle" icon={true}>
                    Tu suscripción
                  </Typography>
                  <div className={styles.card__primarySelect}>
                    <div className={styles.card__container}>
                      <div className={styles.card__plan}>
                        <Icon
                          icon={cards[cardIndex].icon}
                          size={styles.student__icon}
                        />
                        <Typography
                          size="medium-regular"
                          mode="secondary"
                          align="center"
                        >
                          {cards[cardIndex].title}
                        </Typography>
                      </div>
                      <div className={styles.card__content}>
                        <div className={styles.card__price}>
                          <Typography size="extra-large" mode="secondary">
                            {cards[cardIndex].price}
                          </Typography>
                          <Typography size="medium" mode="secondary">
                            mes
                          </Typography>
                        </div>
                        <Typography size="extra-small" mode="secondary">
                          {cards[cardIndex].description}
                        </Typography>
                        <Button mode="primary" size="medium" onClick={() => {}}>
                          Prueba gratuita
                        </Button>
                      </div>
                    </div>
                  </div>
                  <Link
                    mode="secondary"
                    size="small"
                    href="#"
                    onClick={() => BackStep}
                    align="center"
                  >
                    Cambiar de plan
                  </Link>
                </div>
                <div className={styles.account__chooseBottom}>
                  <Typography size="medium">{step} de 3</Typography>
                  <Typography mode="subtitle">
                    Seleccionar el método de pago
                  </Typography>
                  <Typography size="medium">
                    Elige la opción que más se adapte a ti
                  </Typography>
                  <div className={styles.cta__group}>
                    <Button mode="tertiary" onClick={handlePayment}>
                      <Icon icon="google" />
                      <Typography mode="secondary">Google Pay</Typography>
                    </Button>
                    <Button mode="tertiary" onClick={handlePayment}>
                      <Icon icon="apple" />
                      <Typography mode="secondary">Apple Pay</Typography>
                    </Button>
                    <Button mode="tertiary" onClick={handlePayment}>
                      <Typography mode="secondary">
                        Tarjeta de crédito
                      </Typography>
                    </Button>
                    <Button mode="tertiary" onClick={handlePayment}>
                      <Typography mode="secondary">Paypal</Typography>
                    </Button>
                  </div>
                </div>
              </div>
            )}
            {step === 4 && (
              <div className={styles.account__finish}>
                <Icon icon="iconParty" size={styles.icon__party} />
                <Typography mode="title" size="large" align="center">
                  ¡Ya eres un Superstudent!
                </Typography>
                <Typography size="medium" align="center">
                  Solo queda configurar tu perfil de alumno para disfrutar de la
                  plataforma.
                </Typography>
                <Button mode="primary" type="button" href="/choose">
                  Configurar perfiles
                </Button>
              </div>
            )}
          </div>
        </div>
      </Container>
    </LayoutPublic>
  );
}
