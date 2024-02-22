"use client";

import { useState } from "react";
import Image from "next/image";

import { Button } from "@/components/atoms/Button";
import { Typography } from "@/components/atoms/Typography";
import { Icon } from "@/shared/Icon";
import useTags, { Tag } from "@/hooks/useTags";

import student from "@/assets/images/student.jpg";
import teacher from "@/assets/images/teacher.jpg";
import styles from "./Chat.module.scss";

import useChatMessages, { Message } from "@/hooks/useChatMessages";

type Props = {
  isAvatar?: boolean;
};

export const Chat = ({ isAvatar = false }: Props) => {
  const { data } = useChatMessages();
  const { chatTags } = useTags();

  const [attachPopup, setAttachPopup] = useState<boolean>(false);

  const handleAttach = () => {
    setAttachPopup(!attachPopup);
  };

  return (
    <div
      className={`${isAvatar ? styles.chat + " " + styles.chat__withAvatar : styles.chat}`}
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
          <Button mode="icon" className={styles.chat__record}>
            <Icon icon="record" size={styles.chat__recordIcon} />
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
