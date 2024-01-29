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
      name: "Mi perfil",
      path: "/my-profile",
      icon: "emojiMonsterItem",
    },
    {
      id: useId(),
      name: "Calendario",
      path: "/calendar",
      icon: "emojiCalendar",
    },
    {
      id: useId(),
      name: "Supercoins",
      path: "/supercoins",
      icon: "emojiGem",
    },
    {
      id: useId(),
      name: "Mi profesor",
      path: "/teacher",
      icon: "emojiTeacher",
    },
    {
      id: useId(),
      name: "Tienda",
      path: "/store",
      icon: "emojiShopping",
    },
  ];

  return { navigation };
}