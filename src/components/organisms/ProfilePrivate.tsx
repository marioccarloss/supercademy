import { Button } from "@/components/atoms/Button";
import { Progress } from "@/components/atoms/Progress";
import { Typography } from "@/components/atoms/Typography";
import { Card } from "@/components/molecules/Card";
import { HeaderPrivateInner } from "@/components/molecules/HeaderPrivateInner";
import { LayoutPrivate } from "@/components/templates/LayoutPrivate";
import { Icon } from "@/shared/Icon";

import useProfile from "@/hooks/useProfile";
import styles from "./ProfilePrivate.module.scss";

export const ProfilePrivate = () => {
  const { progressItems, insignias, superpoints } = useProfile();

  return (
    <LayoutPrivate isHeaderVisible={false}>
      <header className={styles.profile}>
        <HeaderPrivateInner title="Mi Perfil" emoji="emojiMonsterItem" />
      </header>

      <div className={styles.profile__body}>
        <section className={styles.profile__bodyContent}>
          <header className={styles.profile__header}>
            <div className={styles.profile__user}>
              <div
                className={styles.profile__icon}
                style={{ background: "rgba(105, 206, 255, 1)" }}
              >
                <Icon icon="emojiMonster" size={styles.profile__avatar} />
              </div>
              <Button mode="icon" className={`${styles.profile__edit}`}>
                <Icon icon="edit" size={styles.profile__editIcon} />
              </Button>
            </div>
            <div className={styles.profile__userData}>
              <strong>Bárbara Tábara</strong>
              <span>1º Bachillerato- Ciencias</span>
              <span>Comunidad de Madrid</span>
            </div>
          </header>
          <div className={styles.profile__progress}>
            <Typography mode="subtitle">Mi progreso</Typography>
            <div className={styles.profile__cards}>
              {progressItems.map((progress) => (
                <Card mode="secondary" key={progress.id}>
                  <div className={styles.profile__card}>
                    <div className={styles.profile__progressItem}>
                      <Progress
                        percentage={progress.percentage}
                        color={progress.color}
                      />
                      <div className={styles.profile__progressContent}>
                        <Icon icon={progress.icon} />
                        <span
                          style={{ color: `${progress.color}` }}
                        >{`${progress.hours} H`}</span>
                      </div>
                      <Typography
                        style={{ color: `${progress.color}` }}
                        align="center"
                      >
                        {progress.name}
                      </Typography>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <Typography mode="subtitle">Insignias</Typography>
            <div className={styles.insignias}>
              {insignias.map((insignia) => (
                <div
                  key={insignia.id}
                  className={styles.insignia}
                  style={{
                    background: `${insignia.background}`,
                  }}
                >
                  <Icon icon={insignia.icon} size={styles.insigniaIcon} />
                  <Typography
                    mode="title"
                    align="center"
                    style={{ color: `${insignia.color}` }}
                  >
                    {insignia.value}
                  </Typography>
                  <Typography
                    align="center"
                    style={{ color: `${insignia.color}` }}
                  >
                    {insignia.name}
                  </Typography>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.superpoints}>
          <Typography mode="subtitle">¿Quieres más Superpoints?</Typography>
          <div className={styles.superpointsList}>
            {superpoints.map((point) => (
              <div key={point.id} className={styles.superpointsItem}>
                <header>
                  <Icon icon={point.icon} size={styles.superpointsIcon} />
                  <div>
                    <Typography mode="title">{point.value}</Typography>
                    <Typography>{point.title}</Typography>
                  </div>
                </header>
                <section>{point.description}</section>
              </div>
            ))}
          </div>
        </section>
      </div>
    </LayoutPrivate>
  );
};
