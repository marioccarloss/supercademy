import { LayoutPrivate } from "@/components/templates/LayoutPrivate";

import styles from "@/components/organisms/ProfileChat.module.scss";

export const ProfileChat = () => {
  const { messages } = useChatMessages();
  return (
    <LayoutPrivate>
      <div className={styles.profileChat}></div>
      <Messages></Messages>
      <TextArea></TextArea>
    </LayoutPrivate>
  );
};
