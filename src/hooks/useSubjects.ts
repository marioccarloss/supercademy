import { useId } from "react";

export type Subjects = {
  id: string;
  label: string;
};
export default function useSubjects() {
  const data: Subjects[] = [
    {
      id: useId(),
      label: "Economía, Empren. y A. Empresarial",
    },
    {
      id: useId(),
      label: "Economía",
    },
    {
      id: useId(),
      label: "Filosofía",
    },
    {
      id: useId(),
      label: "Latín I",
    },
    {
      id: useId(),
      label: "Biología, Geología y C. Ambientales",
    },
    {
      id: useId(),
      label: "Inglés",
    },
    {
      id: useId(),
      label: "Física y Química",
    },
    {
      id: useId(),
      label: "Alemán",
    },
    {
      id: useId(),
      label: "Historia M. Contemporáneo",
    },
    {
      id: useId(),
      label: "Lengua y Literatura I",
    },
    {
      id: useId(),
      label: "Literatura Universal",
    },
    {
      id: useId(),
      label: "Francés",
    },
    {
      id: useId(),
      label: "Matemáticas Generales",
    },
    {
      id: useId(),
      label: "Matemáticas I",
    },
    {
      id: useId(),
      label: "Matemáticas C. Sociales I",
    },
    {
      id: useId(),
      label: "Tecnología e Ingeniería I",
    },
  ];

  return { data };
}
