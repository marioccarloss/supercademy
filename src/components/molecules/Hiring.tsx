"use client";

import { useState } from "react";

import { Button } from "@/components/atoms/Button";
import { Icon } from "@/shared/Icon";
import { Typography } from "@/components/atoms/Typography";
import { Field } from "@/components/atoms/Field";

import useProfile from "@/hooks/useProfile";

import styles from "./ModalUserHire.module.scss";
import stylesCard from "./ModalAccount.module.scss";

type Props = {
  planHiring: number;
};

export const Hiring = ({ planHiring }: Props) => {
  const { plans } = useProfile();
  const [planSelected, setPlanSelected] = useState<number>(0);
  const [count, setCount] = useState<number>(1);

  let plansUpdated = plans;
  if (planHiring === 1) {
    plansUpdated = plans.slice(-2);
  }
  if (planHiring === 2) {
    plansUpdated = plans.slice(-1);
  }

  const handleIncrement = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleSelectedPlan = (index: number) => {
    setPlanSelected(index);
  };

  if (planHiring > 3) {
    return (
      <>
        <header className={styles.profileHire__header}>
          <Typography mode="subtitle">Contrata más alumnos</Typography>
          <Typography>Añade más alumnos por solo 5€ más cada uno.</Typography>
        </header>
        <section className={styles.profileHire__body}>
          <div className={styles.profileHire__content}>
            <Typography align="center">Número de alumnos</Typography>
            <div className={styles.profileHire__counter}>
              <Button mode="icon" onClick={handleDecrement}>
                -
              </Button>
              <Field
                type="number"
                id="alumnsCounter"
                value={count.toString()}
                error={
                  count >= 10
                    ? "Solo puedes contratar un máximo de 10 alumnos por cuenta*"
                    : undefined
                }
              />
              <Button mode="icon" onClick={handleIncrement}>
                +
              </Button>
            </div>
          </div>
        </section>
        <footer className={styles.profileHire__footer}>
          <Typography align="center">Coste total</Typography>
          <Typography align="center">45,99 €</Typography>
          <Button mode="primary">Confirmación</Button>
        </footer>
      </>
    );
  }

  return (
    <>
      <header className={styles.profileHire__header}>
        <Typography mode="subtitle">Contrata más alumnos</Typography>
        <Typography>Selecciona el plan que se adapte más.</Typography>
      </header>
      <section className={styles.modalHire__body}>
        <div className={stylesCard.cards}>
          {plansUpdated.map((plan, index: number) => (
            <div
              key={plan.id}
              className={`${planSelected === index ? stylesCard.card + " " + stylesCard.cardActive : stylesCard.card}`}
              onClick={() => handleSelectedPlan(index)}
            >
              <div className={stylesCard.card__container}>
                <div
                  className={stylesCard.card__plan}
                  style={{ height: "auto" }}
                >
                  <Icon icon={plan.icon} size={stylesCard.student__one} />
                  <Typography
                    size="medium-regular"
                    mode="secondary"
                    align="center"
                  >
                    {plan.title}
                  </Typography>
                </div>
                <div className={stylesCard.card__content}>
                  <div className={stylesCard.card__price}>
                    <Typography
                      size="extra-large"
                      mode="secondary"
                      align="left"
                    >
                      {plan.price}
                    </Typography>
                    <Typography size="medium" mode="secondary">
                      mes
                    </Typography>
                  </div>
                  <Typography size="extra-small" mode="secondary" align="left">
                    <div style={{ textAlign: "left" }}>
                      <b>{plan.descriptionAlternative}</b>
                      <div> {plan?.descriptionAlternative2}</div>
                    </div>
                  </Typography>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <footer className={styles.modalHire__footer}>
        <Button mode="primary">Contratar</Button>
      </footer>
    </>
  );
};
