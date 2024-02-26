"use client";

import Image from "next/image";
import { useState } from "react";

import { Button } from "@/components/atoms/Button";
import { Typography } from "@/components/atoms/Typography";
import useTags, { Tag } from "@/hooks/useTags";
import { Icon } from "@/shared/Icon";

import student from "@/assets/images/student.jpg";
import teacher from "@/assets/images/teacher.jpg";
import timeline from "@/assets/images/timeline.svg";

import styles from "./Chat.module.scss";

import useChatMessages, { Message } from "@/hooks/useChatMessages";

type Props = {
  isAvatar?: boolean;
  isCalendar?: boolean;
};

export const Chat = ({ isAvatar = false, isCalendar = false }: Props) => {
  const [recordToggle, setRecordToggle] = useState<boolean>(false);
  const { data } = useChatMessages();
  const { chatTags } = useTags();

  const [attachPopup, setAttachPopup] = useState<boolean>(false);

  console.log(timeline.src);

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
                <Image src={teacher} alt="teacher" width={60} />
              ) : (
                <Image src={student} alt="student" width={60} />
              )}
            </div>
            <div className={styles.message__content}>{chat.message}</div>
          </div>
        ))}
      </section>
      <footer className={styles.chat__footer}>
        <div className={styles.chat__tags}>
          {chatTags.map((tag: Tag) => (
            <div key={tag.id} className={styles.chat__tagsItem}>
              {tag.principal === true ? (
                <button className={styles.chat__tagPrincipal}>
                  {tag.name}
                  <Icon icon="iconClose" size={styles.chat__tagIcon} />
                </button>
              ) : (
                <button className={styles.chat__tag}>{tag.name}</button>
              )}
            </div>
          ))}
        </div>

        <div className={styles.chat__send}>
          {recordToggle ? (
            <Icon icon="timeline" size={styles.chat__timelineIcon} />
            // <div className={styles.chat__timelineWrapper}>
            //   <div
            //     className={styles.chat__progress}
            //     style={{ "--progress-mask": `url(${timeline.src})` }}
            //   ></div>
            //   <div
            //     className={styles.chat__progressBg}
            //     style={{ "--progress-mask": `url(${timeline.src})` }}
            //   ></div>
            // </div>
          ) : (
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
