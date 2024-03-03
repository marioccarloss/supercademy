"use client";

import styles from "./Timeline.module.scss";

type Props = {
  progress: number;
};

export const RecordTimeline = ({ progress }: Props) => {
  const percentage = progress * 100;

  return (
    <div className={styles.timeline}>
      <div className={styles.timeline__mask}>
        <div
          className={styles.timeline__progress}
          style={{ "--progress": `${percentage}%` }}
        >
          {percentage}
        </div>
      </div>
    </div>
  );
};
