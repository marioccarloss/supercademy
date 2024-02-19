"use client";

import Image from "next/image";
import useChatMessages, { Message } from "@/hooks/useChatMessages";
import { Button } from "@/components/atoms/Button";
import { Icon } from "@/shared/Icon";
import useTags, { Tag } from "@/hooks/useTags";

import styles from "./Chat.module.scss";

import student from "@/assets/images/student.jpg";
import teacher from "@/assets/images/teacher.jpg";

export const Chat = () => {
  const { data } = useChatMessages();
  const { chatTags } = useTags();

  return (
    <div className={styles.chat}>
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
              {tag.selected === true ? (
                <button className={styles.chat__tagSelected}>
                  {tag.name} x
                </button>
              ) : (
                <button className={styles.chat__tag}>{tag.name}</button>
              )}
            </div>
          ))}
        </div>

        <div className={styles.chat__send}>
          <div className={styles.chat__input}>
            <div className={styles.chat__inputFile}>
              <input type="file" />
              <Icon icon="clip" />
            </div>
            <input
              type="text"
              id="text"
              placeholder="Escribe tu mensaje aquí"
            />
          </div>
          <Button mode="icon" className={styles.chat__microfone}>
            <Icon icon="microfone" size={styles.chat__microfoneIcon} />
          </Button>
        </div>
      </footer>
    </div>
  );
};
