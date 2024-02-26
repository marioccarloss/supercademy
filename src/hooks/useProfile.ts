import { IconsType } from "@/shared/Icon";
import { useId } from "react";

export type User = {
  id: string;
  name: string;
  icon: IconsType;
  color: string;
};

export type Icons = {
  id: string;
  icon: IconsType;
  color: string;
};

export type ProgressType = {
  id: string;
  icon: IconsType;
  color: string;
  name: string;
  hours: string;
  percentage: number;
};

export type Insignias = {
  id: string;
  icon: IconsType;
  value: string;
  name: string;
  background: string;
  color: string;
};

export type Superpoints = {
  id: string;
  value: string;
  icon: IconsType;
  title: string;
  description: string;
  supercademy: boolean;
};

export type Plan = {
  id: string;
  title: string;
  description: string;
  price: string;
  icon: IconsType;
};

export default function useProfile() {
  const users: User[] = [
    {
      id: useId(),
      name: "Alumno 1",
      icon: "emojiCat",
      color: "#4FCAFF",
    },
    {
      id: useId(),
      name: "Alumno 2",
      icon: "emojiMonkeyOne",
      color: "#FFB30F",
    },
    {
      id: useId(),
      name: "Alumno 3",
      icon: "emojiMonster",
      color: "#64EE85",
    },
    {
      id: useId(),
      name: "Alumno 4",
      icon: "emojiMonkeyTwo",
      color: "#ED254E",
    },
    {
      id: useId(),
      name: "Alumno 5",
      icon: "emojiFaceDelicious",
      color: "#7140FF",
    },
    {
      id: useId(),
      name: "Alumno 6",
      icon: "emojiFaceGrinning",
      color: "#DCFF09",
    },
    {
      id: useId(),
      name: "Alumno 7",
      icon: "emojiFaceWinking",
      color: "#FFFFFF",
    },
    {
      id: useId(),
      name: "Alumno 8",
      icon: "emojiFaceSmiling",
      color: "#7140FF",
    },
    {
      id: useId(),
      name: "Alumno 9",
      icon: "emojiFaceHugging",
      color: "#A0F6F6",
    },
    /*
    {
      id: useId(),
      name: "Alumno 10",
      icon: "emojiPenguin",
      color: "rgba(120, 240, 144, 1)",
    },
    */
  ];

  const usersCustoms: User[] = [
    {
      id: useId(),
      name: "Juan",
      icon: "emojiCat",
      color: "#4FCAFF",
    },
    {
      id: useId(),
      name: "Marcela",
      icon: "emojiMonkeyOne",
      color: "#FFB30F",
    },
    {
      id: useId(),
      name: "Mario",
      icon: "emojiMonster",
      color: "#64EE85",
    },
  ];

  const icons: Icons[] = [
    {
      id: useId(),
      icon: "emojiCat",
      color: "#4FCAFF",
    },
    {
      id: useId(),
      icon: "emojiMonkeyOne",
      color: "#FFB30F",
    },
    {
      id: useId(),
      icon: "emojiMonster",
      color: "#64EE85",
    },
    {
      id: useId(),
      icon: "emojiMonkeyTwo",
      color: "#ED254E",
    },
    {
      id: useId(),
      icon: "emojiFaceDelicious",
      color: "#7140FF",
    },
    {
      id: useId(),
      icon: "emojiFaceGrinning",
      color: "#DCFF09",
    },
    {
      id: useId(),
      icon: "emojiFaceWinking",
      color: "#FFFFFF",
    },
    {
      id: useId(),
      icon: "emojiFaceSmiling",
      color: "#7140FF",
    },
    {
      id: useId(),
      icon: "emojiFaceHugging",
      color: "#A0F6F6",
    },
    {
      id: useId(),
      icon: "emojiFaceMoon",
      color: "#64EE85",
    },
    {
      id: useId(),
      icon: "emojiFaceGrinning",
      color: "#ED254E",
    },
    {
      id: useId(),
      icon: "emojiFaceWinking",
      color: "#FFB30F",
    },
    {
      id: useId(),
      icon: "emojiFaceSmiling",
      color: "#4FCAFF",
    },
    {
      id: useId(),
      icon: "emojiFaceHugging",
      color: "#DCFF09",
    },
    {
      id: useId(),
      icon: "emojiFaceMoonYellow",
      color: "#F8626E",
    },
  ];

  const progressItems: ProgressType[] = [
    {
      id: useId(),
      name: "Deberes",
      color: "rgba(105, 206, 255, 1)",
      icon: "emojiBookmark",
      hours: "125",
      percentage: 0.5,
    },
    {
      id: useId(),
      name: "Selectividad",
      color: "rgba(100, 238, 133, 1)",
      icon: "emojiGraduation",
      hours: "55",
      percentage: 0.7,
    },
    {
      id: useId(),
      name: "Conversación",
      color: "rgba(255, 179, 15, 1)",
      icon: "flags",
      hours: "125",
      percentage: 0.1,
    },
  ];

  const insignias: Insignias[] = [
    {
      id: useId(),
      value: "50",
      name: "Días uso",
      icon: "medal",
      background: "#9868FF",
      color: "#FFFFFF",
    },
    {
      id: useId(),
      value: "500",
      name: "Superpoints",
      icon: "emojiGem",
      background: "#2C556F",
      color: "#64ee85",
    },
  ];

  const superpoints: Superpoints[] = [
    {
      id: useId(),
      value: "+25",
      icon: "emojiSuperpoints",
      title: "Superpoints",
      description:
        "Sólo por entrar en Supercademy obtendrás 25 puntos cada día.",
      supercademy: true,
    },
    {
      id: useId(),
      value: "+20.000",
      icon: "emojiSuperpoints",
      title: "Superpoints",
      description: "¡Al compartir este enlance con tus amigos!",
      supercademy: false,
    },
  ];

  const plans: Plan[] = [
    {
      id: useId(),
      title: "Único",
      description: "Para 1 alumno",
      price: "15,99€",
      icon: "iconStudentOne",
    },
    {
      id: useId(),
      title: "Dúo",
      description: "Para 2 alumnos",
      price: "25,99€",
      icon: "iconStudentTwo",
    },
    {
      id: useId(),
      title: "Familia",
      description: "Para 3 alumnos\n" + "+5€ por alumno extra",
      price: "35,99€",
      icon: "iconStudentThree",
    },
  ];

  return {
    users,
    usersCustoms,
    icons,
    progressItems,
    insignias,
    superpoints,
    plans,
  };
}
