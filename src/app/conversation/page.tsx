import { Chat } from "@/components/organisms/Chat";
import { LayoutPrivate } from "@/components/templates/LayoutPrivate";

export default function Conversation() {
  return (
    <LayoutPrivate isAvatar={true}>
      <Chat isAvatar={true} isConversation={true} tagPrincipal="Conversación" />
    </LayoutPrivate>
  );
}
