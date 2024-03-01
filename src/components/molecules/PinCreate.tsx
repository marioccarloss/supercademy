"use client";

import { Typography } from "@/components/atoms/Typography";
import { Icon } from "@/shared/Icon";
import { Button } from "@/components/atoms/Button";
import { Pin } from "@/components/atoms/Pin";

import { User, Steps } from "@/hooks/useProfile";

import styles from "./PinCreate.module.scss";

type Props = {
  steps: Steps[];
  stepNumber: number;
  user: User;
};

export const PinCreate = ({ steps, stepNumber, user }: Props) => {
  return (
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
          <Typography mode="subtitle">{steps[stepNumber - 1].title}</Typography>
          <Typography mode="label">{steps[stepNumber - 1].tagline}</Typography>
        </div>
      </div>
      <Pin label="Pin" />
      <div className={styles.profileModal__field}>
        <Button mode="primary" size="small" href="/home">
          Confirmación
        </Button>
      </div>
    </div>
  );
};
