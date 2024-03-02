import { Chat } from "@/components/organisms/Chat";
import { LayoutPrivate } from "@/components/templates/LayoutPrivate";

export default function Selectivity() {
  return (
    <LayoutPrivate isAvatar={true}>
      <Chat isAvatar={true} tagPrincipal="Selectividad" />
    </LayoutPrivate>
  );
}
