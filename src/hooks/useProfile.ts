import { useId } from "react";
import { IconsType } from "@/shared/Icon";

export type User = {
  id: string;
  name: string;
  icon: IconsType;
  color: string;
};

export default function useProfile() {
  const users: User[] = [
    {
      id: useId(),
      name: "Alumno 1",
      icon: "emojiCat",
      color: "#4FCAFF",
    },
    /*
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
  */
  ];

  return { users };
}
