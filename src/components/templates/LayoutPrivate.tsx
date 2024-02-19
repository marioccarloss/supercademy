"use client";

import { ReactNode } from "react";

import { HeaderPrivate } from "@/components/molecules/HeaderPrivate";
import { Navigation } from "@/components/molecules/Navigation";

import { useNavigationStore } from "@/store/useNavigationStore";

import styles from "./Layout.module.scss";

type Props = {
  children: ReactNode;
  isAvatar?: boolean;
};

export const LayoutPrivate = ({ children, isAvatar = false }: Props) => {
  const isOpenNavigation = useNavigationStore(
    (state) => state.navigation.isOpen,
  );

  return (
    <main
      className={`${!isOpenNavigation ? styles.layoutPrivate : styles.layoutPrivate + " " + styles.layoutPrivateOpen}`}
    >
      <Navigation isOpen={isOpenNavigation} />
      <div className={styles.layout__container}>
        <HeaderPrivate isOpen={isOpenNavigation} isAvatar={isAvatar} />
        {children}
      </div>
    </main>
  );
};
