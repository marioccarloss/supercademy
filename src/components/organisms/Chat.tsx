"use client";

import Image from "next/image";
import { useRef, useState } from "react";

import { Button } from "@/components/atoms/Button";
import { RecordTimeline } from "@/components/atoms/RecordTimeline";
import { Typography } from "@/components/atoms/Typography";
import useTags, { Tag } from "@/hooks/useTags";
import { Icon } from "@/shared/Icon";

import student from "@/assets/images/student.jpg";

import { useTeacherStore } from "@/store/useTeacherStore";

import useChatMessages, { Message } from "@/hooks/useChatMessages";

import styles from "./Chat.module.scss";

type Props = {
  isAvatar?: boolean;
  isCalendar?: boolean;
  isConversation?: boolean;
  tagPrincipal?: string;
};

export const Chat = ({
  isAvatar = false,
  isCalendar = false,
  isConversation = false,
  tagPrincipal = "Deberes",
}: Props) => {
  const [recordToggle, setRecordToggle] = useState<boolean>(false);
  const [attachPopup, setAttachPopup] = useState<boolean>(false);

  const scrollRef = useRef<HTMLDivElement>(null);
  const [isScrolling, setIsScrolling] = useState<boolean>(false);

  const { data } = useChatMessages();
  const { chatTags } = useTags();

  const teachers = useTeacherStore((state) => state.teacher);
  const teacherSelected = teachers.filter((t) => t.selected)[0];

  const handleScroll = (scrollOffset: number) => {
    if (scrollRef.current) {
      setIsScrolling(true);
      const newScrollLeft = scrollRef.current.scrollLeft + scrollOffset;
      scrollRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });
    }
  };

  const handleScrollEnd = () => {
    setIsScrolling(false);
  };

  const handleAttach = () => {
    setAttachPopup(!attachPopup);
  };

  const handleRecord = () => {
    setRecordToggle(!recordToggle);
  };

  return (
    <div
      className={`${
        isAvatar && !isCalendar
          ? styles.chat + " " + styles.chat__withAvatar
          : !isAvatar && isCalendar
            ? styles.chat + " " + styles.chat__withCalendar
            : isAvatar && isCalendar
              ? styles.chat +
                " " +
                styles.chat__withAvatar +
                " " +
                styles.chat__withCalendar
              : styles.chat
      }`}
    >
      <section className={styles.chat__container}>
        {data.map((chat: Message) => (
          <div
            key={chat.id}
            className={`${chat.type === "received" ? styles.message + " " + styles.message__received : styles.message + " " + styles.message__sent}`}
          >
            <div className={styles.message__avatar}>
              {chat.type === "received" ? (
                <Image
                  src={teacherSelected.image.src}
                  alt={teacherSelected.name}
                  height={teacherSelected.image.height}
                  width={teacherSelected.image.width}
                />
              ) : (
                <Image src={student} alt="student" width={60} />
              )}
            </div>
            <div className={styles.message__content}>{chat.message}</div>
          </div>
        ))}
      </section>
      <footer className={styles.chat__footer}>
        {(isConversation || !isCalendar) && (
          <div className={styles.chat__tagsContainer}>
            <Button mode="icon" onClick={() => handleScroll(-120)}>
              <Icon icon="iconArrowLeft" />
            </Button>
            <div
              className={`${styles.chat__tags} ${
                isScrolling ? styles.scrolling : ""
              }`}
              ref={scrollRef}
              onScroll={handleScrollEnd}
            >
              <div className={styles.chat__tagsItem}>
                <button className={styles.chat__tagPrincipal}>
                  {tagPrincipal}
                  <Button
                    href="/home"
                    className={styles.chat__tagPrincipalClose}
                  >
                    <Icon icon="iconClose" size={styles.chat__tagIcon} />
                  </Button>
                </button>
              </div>
              {chatTags.map((tag: Tag) => (
                <div key={tag.id} className={styles.chat__tagsItem}>
                  <button className={styles.chat__tag}>{tag.name}</button>
                </div>
              ))}
            </div>
            <Button mode="icon" onClick={() => handleScroll(120)}>
              <Icon icon="iconArrowRight" />
            </Button>
          </div>
        )}

        <div className={styles.chat__send}>
          {recordToggle ? (
            <RecordTimeline progress={0.75} />
          ) : (
            <>
              {!isConversation && (
                <div className={styles.chat__input}>
                  <Button
                    mode="icon"
                    className={styles.chat__attach}
                    onClick={handleAttach}
                  >
                    <Icon icon="clip" />
                  </Button>
                  <input
                    type="text"
                    id="text"
                    placeholder="Escribe tu mensaje aquí"
                  />
                  <Button mode="icon" className={styles.chat__sendIcon}>
                    <Icon icon="iconSend" />
                  </Button>
                </div>
              )}
            </>
          )}
          <Button
            mode="icon"
            className={styles.chat__record}
            onClick={handleRecord}
          >
            <Icon
              icon={`${recordToggle ? "recordActive" : "record"}`}
              size={`${recordToggle ? styles.chat__recordIcon + " " + styles.chat__recordIconActive : styles.chat__recordIcon}`}
            />
          </Button>
          {attachPopup && (
            <div className={styles.chat__attachPopup}>
              <div className={styles.chat__attachPopupItem}>
                <Icon icon="iconAttach" />
                <Typography>Attach file</Typography>
                <input type="file" />
              </div>
              <div className={styles.chat__attachPopupItem}>
                <Icon icon="iconPhotos" />
                <Typography>Upload photo</Typography>
                <input type="file" />
              </div>
            </div>
          )}
        </div>
      </footer>
    </div>
  );
};
