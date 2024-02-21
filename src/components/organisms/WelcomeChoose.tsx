import { Button } from "@/components/atoms/Button";
import { Typography } from "@/components/atoms/Typography";
import { LayoutPublic } from "@/components/templates/LayoutPublic";
import { Icon } from "@/shared/Icon";

import styles from "./ProfileChoose.module.scss";

import useProfile, { User } from "@/hooks/useProfile";

export const WelcomeChoose = () => {
  const { usersCustoms } = useProfile();

  return (
    <LayoutPublic>
      <div className={styles.profile}>
        <div className={styles.profile__container}>
          <div className={styles.profile__heading}>
            <Typography mode="subtitle" icon={true} align="center">
              ¿Quién eres? Elige tu perfil
            </Typography>
          </div>
          <div className={styles.profile__users}>
            {usersCustoms.map((user: User) => (
              <Button
                key={user.id}
                className={styles.profile__user}
                href="/home"
              >
                <div
                  className={styles.profile__icon}
                  style={{ background: `${user.color}` }}
                >
                  <Icon icon={user.icon} size={styles.icon__choose} />
                </div>
                <Typography mode="body" size="small" align="center">
                  {user.name}
                </Typography>
              </Button>
            ))}
          </div>
          <div className={styles.profile__ctaContainer}>
            <Button mode="icon" href="/configuration">
              <Icon icon="settings" size={styles.icon__arrowRight} />
              <Typography>Configuración de la cuenta</Typography>
            </Button>
          </div>
        </div>
      </div>
    </LayoutPublic>
  );
};
