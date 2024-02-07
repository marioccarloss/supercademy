"use client";

import { LayoutPublic } from "@/components/templates/LayoutPublic";
import { Typography } from "@/components/atoms/Typography";
import { Button } from "@/components/atoms/Button";
import { Icon } from "@/shared/Icon";

import styles from "./ProfileChoose.module.scss";

import useProfile, { User } from "@/hooks/useProfile";
import { useModalStore } from "@/store/useModalStore";
import { ModalUserConfig } from "@/components/molecules/ModalUserConfig";

export default function ProfileChoose() {
  const { users } = useProfile();

  const isOpen = useModalStore((state) => state.modal.isOpen);
  const setOpened = useModalStore((state) => state.setOpened);

  const handleModalOpened = () => {
    setOpened(true);
  };

  return (
    <LayoutPublic>
      <div className={styles.profile}>
        <div className={styles.profile__container}>
          <div className={styles.profile__heading}>
            <Typography mode="subtitle" icon={true} align="center">
              Configuración de perfiles
              <Icon icon="pencil" size={styles.icon__pencil} />
            </Typography>
            <Typography mode="body" size="medium" align="center">
              Haz clic en el alumno que vas a personalizar.
            </Typography>
          </div>
          <div className={styles.profile__users}>
            {users.map((user: User) => (
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
                  onClick={handleModalOpened}
                >
                  <Icon icon="edit" size={styles.icon__edit} />
                </Button>
              </div>
            ))}
            <Button className={styles.profile__button}>
              <div className={styles.profile__icon}>
                <Icon icon="addUser" size={styles.icon__choose} />
              </div>
              <Typography mode="body" size="small" align="center">
                Contratar más alumnos
              </Typography>
            </Button>
          </div>
          <div className={styles.profile__ctaContainer}>
            <Button mode="primary" href="/welcome">
              Ir a Supercademy
            </Button>
          </div>
        </div>
      </div>
      <ModalUserConfig user={users[0]} isModalOpen={isOpen} />
    </LayoutPublic>
  );
}
