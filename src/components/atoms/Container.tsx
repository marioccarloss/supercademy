import { ReactNode } from "react";
import styles from "./Container.module.scss";

export const Container = ({ children }: { children: ReactNode }) => {
  return <div className={styles.container}>{children}</div>;
};
