"use client";

import { FormEvent, useState } from "react";

import { LayoutPublic } from "@/components/templates/LayoutPublic";

import { Button } from "@/components/atoms/Button";
import { Field } from "@/components/atoms/Field";
import { Typography } from "@/components/atoms/Typography";
import { Icon } from "@/shared/Icon";

import styles from "./ProfileConfiguration.module.scss";

type UserEdit = {
  email: boolean;
  password: boolean;
  payment: boolean;
  contract: boolean;
  addUser: boolean;
  deleteUser: boolean;
  miscellaneous: boolean;
};

export const ProfileConfiguration = () => {
  const [editUser, setEditUser] = useState<UserEdit>({
    email: false,
    password: false,
    payment: false,
    contract: false,
    addUser: false,
    deleteUser: false,
    miscellaneous: false,
  });

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
  };

  const handleEdit = (id: string) => {
    setEditUser(() => {
      const updatedUser: UserEdit = {
        email: false,
        password: false,
        payment: false,
        contract: false,
        addUser: false,
        deleteUser: false,
        miscellaneous: false,
      };
      updatedUser[id as keyof UserEdit] = true;
      return updatedUser;
    });
  };

  return (
    <LayoutPublic>
      <div className={styles.configuration}>
        <header>
          <Typography mode="subtitle">
            Administra tu cuenta Supercademy
          </Typography>
        </header>

        <section>
          <div>
            <Typography>Suscripción y facturación</Typography>
            <form
              className={styles.configuration__form}
              onSubmit={handleSubmit}
            >
              <div className={styles.configuration__item}>
                {!editUser.email && <Typography>Correo electrónico</Typography>}
                {editUser.email && (
                  <Field
                    type="email"
                    id="email"
                    label="Correo electrónico"
                    placeholder="Escribe el correo electrónico"
                    //error="Correo electrónico errónea*"
                  />
                )}
                <Button mode="icon" onClick={() => handleEdit("email")}>
                  <Icon icon="iconPencil" size={styles.configuration__icon} />
                </Button>
              </div>

              <div className={styles.configuration__item}>
                {!editUser.password && <Typography>Contraseña</Typography>}
                {editUser.password && (
                  <Field
                    type="password"
                    id="password"
                    label="contraseña"
                    placeholder="Escribe la contraseña"
                    //error="Correo electrónico errónea*"
                  />
                )}
                <Button mode="icon" onClick={() => handleEdit("password")}>
                  <Icon icon="iconPencil" size={styles.configuration__icon} />
                </Button>
              </div>

              <div className={styles.configuration__item}>
                {!editUser.payment && <Typography>Método de pago</Typography>}
                {editUser.payment && <div></div>}
                <Button mode="icon" onClick={() => handleEdit("payment")}>
                  <Icon icon="iconPencil" size={styles.configuration__icon} />
                </Button>
              </div>
            </form>
          </div>

          <div>
            <Typography>Detalles de plan</Typography>
            <form className={styles.configuration__form}>
              <div className={styles.configuration__item}>
                <Typography>Plan contrato</Typography>
                <Button mode="icon">
                  <Icon icon="iconPencil" size={styles.configuration__icon} />
                </Button>
              </div>
              <div className={styles.configuration__item}>
                <Typography>Añadir alumno</Typography>
                <Button mode="icon">
                  <Icon icon="iconPencil" size={styles.configuration__icon} />
                </Button>
              </div>
              <div className={styles.configuration__item}>
                <Typography>Dar de baja a un alumno</Typography>
                <Button mode="icon">
                  <Icon icon="iconPencil" size={styles.configuration__icon} />
                </Button>
              </div>
            </form>
          </div>

          <div>
            <Typography>Datos y privacidad</Typography>
            <form className={styles.configuration__form}>
              <div className={styles.configuration__item}>
                <Typography>Info a detallar</Typography>
                <Button mode="icon">
                  <Icon icon="iconPencil" size={styles.configuration__icon} />
                </Button>
              </div>
              <div className={styles.configuration__item}>
                <Typography>....</Typography>
                <Button mode="icon">
                  <Icon icon="iconPencil" size={styles.configuration__icon} />
                </Button>
              </div>
              <div className={styles.configuration__item}>
                <Typography>....</Typography>
                <Button mode="icon">
                  <Icon icon="iconPencil" size={styles.configuration__icon} />
                </Button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </LayoutPublic>
  );
};
