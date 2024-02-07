"use client";

import { useState, FormEvent } from "react";

import { Modal } from "@/components/atoms/Modal";
import { Typography } from "@/components/atoms/Typography";
import { Icon } from "@/shared/Icon";
import { Button } from "@/components/atoms/Button";
import { Field } from "@/components/atoms/Field";
import { Dropdown } from "@/components/atoms/Dropdown";
import { Checkbox } from "@/components/atoms/Checkbox";

import styles from "@/components/organisms/ProfileChoose.module.scss";

import { User } from "@/hooks/useProfile";
import useProfile, { Icons } from "@/hooks/useProfile";

type Props = {
  user: User;
  isModalOpen: boolean;
};

export const ModalUserConfig = ({ user, isModalOpen }: Props) => {
  const [step, setStep] = useState(1);
  const [place, setPlace] = useState("");
  const [course, setCourse] = useState("");

  const { icons } = useProfile();

  console.log("Comunidad autónoma seleccionada", place);
  console.log("Curso escolar seleccionado", course);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
  };

  const handleChooseIcon = () => {
    setStep(2);
  };

  const chooseIconAndReturn = () => {
    setStep(1);
  };

  const handleCreatePin = () => {
    setStep(3);
  };

  const handleBack = () => {
    setStep(step < 3 && step > 1 ? step - 1 : step - 2);
  };

  const steps = [
    {
      step: 1,
      title: "Configurar perfil",
      tagline: "Paso 1 de 3",
      isBack: false,
    },
    {
      step: 2,
      title: "Elegir icono",
      isBack: true,
    },
    {
      step: 3,
      title: "Creación de Pin",
      tagline: "El código pin debe tener 4 digitos",
      isBack: true,
    },
  ];

  return (
    <Modal active={isModalOpen}>
      <div className={styles.profileModal}>
        <div className={styles.profileModal__header}>
          {step == 1 && (
            <div className={styles.profileModal__steps}>
              {step} de 3 Perfiles
            </div>
          )}
          {steps[step - 1].isBack && (
            <Button
              mode="icon"
              className={styles.profileModal__back}
              onClick={handleBack}
            >
              <Icon icon="arrowBack" size={styles.profileModal__backIcon} />
              <Typography mode="label">Atrás</Typography>
            </Button>
          )}
          {step === 1 && (
            <Typography mode="subtitle">{steps[step - 1].title}</Typography>
          )}
        </div>
        {step === 1 && (
          <form className={styles.profileModal__form} onSubmit={handleSubmit}>
            <div className={styles.profileModal__field}>
              <div key={user.id} className={styles.profile__user}>
                <div
                  className={styles.profile__icon}
                  style={{ background: `${user.color}` }}
                >
                  <Icon icon={user.icon} size={styles.icon__choose} />
                </div>
                <Typography mode="body" size="small" align="center">
                  {user.name}
                </Typography>
                <Button
                  mode="icon"
                  className={`${styles.btn__edit} show__edit`}
                  onClick={handleChooseIcon}
                >
                  <Icon icon="edit" size={styles.icon__edit} />
                </Button>
              </div>
              <Field
                type="text"
                id="name"
                label="Nombre"
                placeholder="Escribe tu nombre"
                //error="Correo electrónico errónea*"
              />
            </div>
            <div className={styles.profileModal__field}>
              <Dropdown
                options={["Cataluña", "Madrid", "Aragón"]}
                label="Comunidad autónoma"
                placeholder="Ingrese su C.A"
                onSelect={(option) => setPlace(option)}
              />
              <Dropdown
                options={[
                  "Option 1",
                  "Option 2",
                  "Option 3",
                  "Option 4",
                  "Option 5",
                ]}
                label="Curso escolar"
                placeholder="Introduzca su curso"
                onSelect={(option) => setCourse(option)}
              />
            </div>
            <div>
              <Checkbox label="Soy padre, madre, tutor o autorizado" />
            </div>
            <div className={styles.profileModal__field}>
              <Button mode="primary" size="small">
                Confirmación
              </Button>
            </div>
            <div className={styles.profileModal__field}>
              <Typography mode="body" align="center">
                Quiero crear un
                <Button
                  mode="icon"
                  className={styles.profileModal__link}
                  onClick={handleCreatePin}
                >
                  Pin de seguridad
                </Button>
              </Typography>
            </div>
          </form>
        )}
        {step === 2 && (
          <div className={styles.profileModal__listIcon}>
            {icons.map(({ id, icon, color }: Icons) => (
              <div key={id} className={styles.profileModal__itemIcon}>
                <Button
                  className={styles.profileModal__itemIconAvatar}
                  style={{ background: `${color}` }}
                  onClick={chooseIconAndReturn}
                >
                  <Icon icon={icon} size={styles.icon__choose} />
                </Button>
              </div>
            ))}
          </div>
        )}
        {step === 3 && (
          <div className={styles.profileModal__form}>
            <div className={styles.profileModal__field}>
              <div key={user.id} className={styles.profile__user}>
                <div
                  className={styles.profile__icon}
                  style={{ background: `${user.color}` }}
                >
                  <Icon icon={user.icon} size={styles.icon__choose} />
                </div>
              </div>
              <div className={styles.profileModal__createPinTitle}>
                <Typography mode="subtitle">{steps[step - 1].title}</Typography>
                <Typography mode="label">{steps[step - 1].tagline}</Typography>
              </div>
            </div>
            <div className={styles.profileModal__pinContainer}>
              <Typography mode="label" align="center">
                Pin
              </Typography>
              <div className={styles.profileModal__pinList}>
                <input type="text" className={styles.profileModal__pin} />
                <input type="text" className={styles.profileModal__pin} />
                <input type="text" className={styles.profileModal__pin} />
                <input type="text" className={styles.profileModal__pin} />
              </div>
            </div>
            <div className={styles.profileModal__field}>
              <Button mode="primary" size="small" href="/home">
                Confirmación
              </Button>
            </div>
          </div>
        )}
      </div>
    </Modal>
  );
};
