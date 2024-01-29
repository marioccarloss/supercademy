"use client";

import { useState } from "react";

import { Modal } from "@/components/atoms/Modal";
import { Typography } from "@/components/atoms/Typography";
import { Icon } from "@/shared/Icon";
import { Button } from "@/components/atoms/Button";
import { Field } from "@/components/atoms/Field";
import { Dropdown } from "@/components/atoms/Dropdown";

import styles from "@/components/organisms/ProfileChoose.module.scss";

import { User } from "@/hooks/useProfile";

type Props = {
  user: User;
  isModalOpen: boolean;
};

export const ModalUserConfig = ({ user, isModalOpen }: Props) => {
  const [step, setStep] = useState(1);

  return (
    <Modal active={isModalOpen}>
      <div className={styles.profileModal}>
        <div className={styles.profileModal__header}>
          <div className={styles.profileModal__steps}>{step} de 3 Perfiles</div>
          <Typography mode="subtitle">Configurar perfil</Typography>
        </div>
        <form className={styles.profileModal__form}>
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
              <Button mode="icon" className={`${styles.btn__edit} show__edit`}>
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
            />
          </div>
          <div className={styles.profileModal__field}>
            <Button mode="primary" size="small" href="/home">
              Confirmación
            </Button>
          </div>

          <div className={styles.profileModal__field}>
            <Typography mode="body" align="center">
              Quiero crear un
              <a href="#" className={styles.profileModal__link}>
                Pin de seguridad
              </a>
            </Typography>
          </div>
        </form>
      </div>
    </Modal>
  );
};
