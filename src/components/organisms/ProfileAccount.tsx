import { LayoutPublic } from "@/components/templates/LayoutPublic";

import { Button } from "@/components/atoms/Button";
import { Typography } from "@/components/atoms/Typography";
import { Icon } from "@/shared/Icon";

import styles from "./ProfileAccount.module.scss";

export const ProfileAccount = () => {
  return (
    <LayoutPublic>
      <div className={styles.account}>
        <header className={styles.account__header}>
          <div>
            <Typography>¡Hola Bárbara!</Typography>
            <Icon icon="emojiHiFive" size={styles.account__headerIcon} />
          </div>
          <Typography>Aquí podrás administrar tu cuenta</Typography>
        </header>
        <section className={styles.account__cards}>
          <div className={styles.account__card}>
            <Icon icon="iconSecurity" size={styles.account__icon} />
            <Typography mode="subtitle">Seguridad y log-in</Typography>
            <Typography>Cambia tu correo electrónico, contraseña.</Typography>
          </div>
          <div className={styles.account__card}>
            <Icon icon="iconTicket" size={styles.account__icon} />
            <Typography mode="subtitle">Suscripción y facturación</Typography>
            <Typography>Consulta los detalles de tu plan, pagos...</Typography>
          </div>
          <div className={styles.account__card}>
            <Icon icon="iconHelp" size={styles.account__icon} />
            <Typography mode="subtitle">Privacidad</Typography>
            <Typography>
              Consultas y
              <a href="mailto:ayuda@supercademy.com">ayuda@supercademy.com</a>
            </Typography>
          </div>
        </section>

        <Button mode="icon">
          <Icon icon="iconLogout" />
          <Typography>Cerrar sesión</Typography>
        </Button>
      </div>
    </LayoutPublic>
  );
};
