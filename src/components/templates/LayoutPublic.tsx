import { ReactNode } from "react";
import { Header } from "@/components/molecules/Header";
import { Footer } from "@/components/molecules/Footer";

import styles from "./Layout.module.scss";

type Props = {
  children: ReactNode;
};

export const LayoutPublic = ({ children }: Props) => {
  return (
    <main className={styles.layout}>
      <Header />
      {children}
      <Footer />
    </main>
  );
};
