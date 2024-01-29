"use client";

import { useState, useEffect } from "react";

import { Icon } from "@/shared/Icon";
import { Header } from "@/components/molecules/Header";
import styles from "./Splash.module.scss";

export default function Splash() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 100);
  }, []);

  if (!show) return null;

  return (
    <div className={styles.splash}>
      <Header closeable={true} />
      <Icon icon="isotype" size={styles.splash__logo} />
    </div>
  );
}
