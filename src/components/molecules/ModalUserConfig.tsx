"use client";

import { memo } from "react";

import { FormEvent, useState } from "react";

import { Button } from "@/components/atoms/Button";
import { Checkbox } from "@/components/atoms/Checkbox";
import { Dropdown } from "@/components/atoms/Dropdown";
import { Field } from "@/components/atoms/Field";
import { Modal } from "@/components/atoms/Modal";
import { Typography } from "@/components/atoms/Typography";
import { PinCreate } from "@/components/molecules/PinCreate";
import { Icon } from "@/shared/Icon";

import styles from "@/components/organisms/ProfileChoose.module.scss";

import useProfile, { Icons, User, Steps } from "@/hooks/useProfile";

type Props = {
  user: User;
  isModalOpen: boolean;
  modalName: string;
};

const ModalUserConfig = memo(({ user, isModalOpen, modalName }: Props) => {
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

  const steps: Steps[] = [
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
    <Modal active={isModalOpen} modalName={modalName}>
      <div className={styles.profileModal}>
        <div className={styles.profileModal__header}>
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
          <>
            <Typography mode="subtitle">{steps[1].title}</Typography>
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
          </>
        )}
        {step === 3 && <PinCreate steps={steps} stepNumber={3} user={user} />}
      </div>
    </Modal>
  );
});

ModalUserConfig.displayName = "ModalUserConfig";

export { ModalUserConfig };
