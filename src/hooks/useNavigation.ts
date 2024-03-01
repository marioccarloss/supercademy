import { useId } from "react";

import { IconsType } from "@/shared/Icon";

export type Nav = {
  id: string;
  name: string;
  path: string;
  icon: IconsType;
};

export default function useNavigation() {
  const navigation: Nav[] = [
    {
      id: useId(),
      name: "Home",
      path: "/home",
      icon: "emojiHome",
    },
    {
      id: useId(),
      name: "Deberes",
      path: "/homeworks",
      icon: "emojiBookmark",
    },
    {
      id: useId(),
      name: "Selectividad",
      path: "/selectivity",
      icon: "emojiGraduation",
    },
    {
      id: useId(),
      name: "Conversación",
      path: "/conversation",
      icon: "flags",
    },
    {
      id: useId(),
      name: "Mi perfil",
      path: "/profile",
      icon: "emojiMonsterItem",
    },
    {
      id: useId(),
      name: "Calendario",
      path: "/calendar",
      icon: "emojiCalendar",
    },
    /*
    {
      id: useId(),
      name: "Supercoins",
      path: "/supercoins",
      icon: "emojiGem",
    },
     */
    {
      id: useId(),
      name: "Mi profesor",
      path: "/teacher",
      icon: "emojiTeacher",
    },
    {
      id: useId(),
      name: "Supertienda",
      path: "/store",
      icon: "emojiShopping",
    },
  ];

  return { navigation };
}
