"use client";

import { HeaderCalendar } from "@/components/molecules/HeaderCalendar";
import { HeaderPrivateInner } from "@/components/molecules/HeaderPrivateInner";
import { Chat } from "@/components/organisms/Chat";
import { LayoutPrivate } from "@/components/templates/LayoutPrivate";

import styles from "./ProfileCalendar.module.scss";

export const ProfileCalendar = () => {
  return (
    <LayoutPrivate isHeaderVisible={false}>
      <header className={styles.calendar}>
        <HeaderPrivateInner title="Mi Calendario" emoji="calendar" />
        <HeaderCalendar />
      </header>
      <section className={styles.calendar__body}>
        <Chat isAvatar={true} isCalendar={true} />
      </section>
    </LayoutPrivate>
  );
};
