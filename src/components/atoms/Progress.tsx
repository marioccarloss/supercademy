"use client";

import { useEffect, useRef } from "react";
import styles from "./Progress.module.scss";

type Props = {
  percentage: number;
  color: string;
};

export const Progress = ({ percentage, color }: Props) => {
  const progressBarRef = useRef<SVGCircleElement>(null);

  useEffect(() => {
    if (progressBarRef.current) {
      const strokeDashOffsetValue = 100 - percentage * 100;
      progressBarRef.current.style.strokeDashoffset = `${strokeDashOffsetValue}px`;
    }
  }, [percentage]);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-4 -4 40 40"
      className={styles.progress}
    >
      <circle
        cx="16"
        cy="16"
        r="15.9155"
        className={styles.progress__background}
      />
      <circle
        ref={progressBarRef}
        cx="16"
        cy="16"
        r="15.9155"
        stroke={color}
        className={styles.progress__bar}
      />
    </svg>
  );
};
