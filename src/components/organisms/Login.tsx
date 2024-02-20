"use client";

import { useState } from "react";

import { LayoutPublic } from "@/components/templates/LayoutPublic";
import { ModalNotRegistered } from "@/components/molecules/ModalNotRegistered";
import { Container } from "@/components/atoms/Container";
import { Typography } from "@/components/atoms/Typography";
import { Button } from "@/components/atoms/Button";
import { Icon } from "@/shared/Icon";
import { Field } from "@/components/atoms/Field";
import { Link } from "@/components/atoms/Link";

import useLogin from "@/hooks/useLogin";

import styles from "./Login.module.scss";

export default function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { handleSubmit, isUserNotRegistered, dataModalNotRegistered } =
    useLogin();

  return (
    <LayoutPublic>
      <Container>
        <div className={styles.login}>
          <div className={styles.login__container}>
            <Typography mode="title" size="large" icon={true}>
              Iniciar Sesión
            </Typography>
            <div className={styles.cta__group}>
              <Button
                mode="tertiary"
                href="/invalid"
                as="https://www.google.es"
              >
                <Icon icon="google" />
                <Typography mode="secondary">Registrarse con Google</Typography>
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
            </div>
            <div className={styles.hr}>o</div>
            <form className={styles.login__form} onSubmit={handleSubmit}>
              <div className={styles.login__inputs}>
                <Field
                  type="email"
                  id="email"
                  label="Correo electrónico"
                  value={user.email}
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                  placeholder="Escribe el correo electrónico"
                  error="Correo electrónico errónea*"
                />
                <Field
                  type="password"
                  id="password"
                  label="Contraseña"
                  placeholder="Escribe la contraseña"
                  value={user.password}
                  onChange={(e) =>
                    setUser({ ...user, password: e.target.value })
                  }
                  //error="Contraseña incorrecta*"
                />
                <Link mode="secondary" size="small" align="right" href="/reset">
                  Recuperar contraseña
                </Link>
              </div>
              <Button mode="primary" type="submit">
                Iniciar sesión
              </Button>
              <Typography size="medium" align="center">
                ¿No tienes cuenta?
                <Link mode="primary" href="/register">
                  Suscríbete
                </Link>
              </Typography>
            </form>
          </div>
          <div className={styles.login__source}>
            <Icon icon="isotype" size={styles.login__logo} />
          </div>
        </div>
      </Container>
      <ModalNotRegistered
        data={dataModalNotRegistered}
        isModalOpen={isUserNotRegistered}
        modalName="modalNotRegistered"
      />
    </LayoutPublic>
  );
}
