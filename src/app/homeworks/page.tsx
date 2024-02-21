import { Chat } from "@/components/organisms/Chat";
import { LayoutPrivate } from "@/components/templates/LayoutPrivate";

export default function Homeworks() {
  return (
    <LayoutPrivate isAvatar={true}>
      <Chat />
    </LayoutPrivate>
  );
}
