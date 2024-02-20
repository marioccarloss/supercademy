"use client";

import { Typography } from "@/components/atoms/Typography";
import { Button } from "@/components/atoms/Button";
import { Icon } from "@/shared/Icon";

import styles from "./HeaderCalendar.module.scss";

export const HeaderCalendar = () => {
  const hasEventInCalendar = true;

  return (
    <div className={styles.headerCalendar}>
      <div className={styles.headerCalendar__header}>
        <Icon icon="iconCalendar" size={styles.headerCalendar__icon} />
        <Typography>Próximos eventos</Typography>
      </div>
      {hasEventInCalendar ? (
        <div className={styles.headerCalendar__body}>
          <Button mode="icon">
            <Icon icon="iconArrowLeft" />
          </Button>
          <div className={styles.headerCalendar__list}>
            <div className={styles.headerCalendar__listContent}>
              <Button mode="calendar-primary">
                <div className={styles.headerCalendar__item}>
                  <Typography>25 Dic</Typography>
                  <div>
                    <Typography>Examen Inglés</Typography>
                    <Typography>10:00 AM</Typography>
                  </div>
                  <Icon
                    icon="iconArrowRight"
                    size={styles.headerCalendar__itemIcon}
                  />
                </div>
              </Button>
              <Button mode="calendar-primary">
                <div className={styles.headerCalendar__item}>
                  <Typography>25 Dic</Typography>
                  <div>
                    <Typography>Examen Inglés</Typography>
                    <Typography>10:00 AM</Typography>
                  </div>
                  <Icon
                    icon="iconArrowRight"
                    size={styles.headerCalendar__itemIcon}
                  />
                </div>
              </Button>
              <Button mode="calendar-primary">
                <div className={styles.headerCalendar__item}>
                  <Typography>25 Dic</Typography>
                  <div>
                    <Typography>Examen Inglés</Typography>
                    <Typography>10:00 AM</Typography>
                  </div>
                  <Icon
                    icon="iconArrowRight"
                    size={styles.headerCalendar__itemIcon}
                  />
                </div>
              </Button>
              <Button mode="calendar-secondary">
                <div className={styles.headerCalendar__item}>
                  <Typography>28 Dic</Typography>
                  <div>
                    <Typography>Examen Lengua</Typography>
                    <Typography>06:40 PM</Typography>
                  </div>
                  <Icon
                    icon="iconArrowRight"
                    size={styles.headerCalendar__itemIcon}
                  />
                </div>
              </Button>
              <Button mode="calendar-secondary">
                <div className={styles.headerCalendar__item}>
                  <Typography>28 Dic</Typography>
                  <div>
                    <Typography>Examen Lengua</Typography>
                    <Typography>06:40 PM</Typography>
                  </div>
                  <Icon
                    icon="iconArrowRight"
                    size={styles.headerCalendar__itemIcon}
                  />
                </div>
              </Button>
              <Button mode="calendar-secondary">
                <div className={styles.headerCalendar__item}>
                  <Typography>28 Dic</Typography>
                  <div>
                    <Typography>Examen Lengua</Typography>
                    <Typography>06:40 PM</Typography>
                  </div>
                  <Icon
                    icon="iconArrowRight"
                    size={styles.headerCalendar__itemIcon}
                  />
                </div>
              </Button>
            </div>
          </div>
          <Button mode="icon">
            <Icon icon="iconArrowRight" />
          </Button>
        </div>
      ) : (
        <div className={styles.headerCalendar__message}>
          <Icon icon="emojiMessage" />
          <Typography>
            Aún no has añadido nada a tu supercalendario. Escribe o habla con tu
            profesor para agregarlos.
          </Typography>
        </div>
      )}
    </div>
  );
};
