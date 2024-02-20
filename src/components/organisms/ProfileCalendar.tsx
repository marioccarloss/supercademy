"use client";

import { HeaderPrivateInner } from "@/components/molecules/HeaderPrivateInner";
import { HeaderCalendar } from "@/components/molecules/HeaderCalendar";
import { Chat } from "@/components/organisms/Chat";
import { LayoutPrivate } from "@/components/templates/LayoutPrivate";

import styles from "./ProfileCalendar.module.scss";

export const ProfileCalendar = () => {
  return (
    <LayoutPrivate isHeaderVisible={false}>
      <header className={styles.calendar}>
        <HeaderPrivateInner />
        <HeaderCalendar />
      </header>
      <section>
        <Chat />
      </section>
    </LayoutPrivate>
  );
};
