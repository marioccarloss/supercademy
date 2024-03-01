import { ReactNode } from "react";
import { Header } from "@/components/molecules/Header";
import { Footer } from "@/components/molecules/Footer";

import styles from "./Layout.module.scss";

type Props = {
  children: ReactNode;
  hasBack?: boolean;
};

export const LayoutPublic = ({ children, hasBack = false }: Props) => {
  return (
    <main className={styles.layout}>
      <Header hasBack={hasBack} />
      {children}
      <Footer />
    </main>
  );
};
