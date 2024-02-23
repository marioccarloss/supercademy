export type Subjects = {
  id: string;
  label: string;
};
export default function useSubjects() {
  const data: Subjects[] = [
    {
      id: "1",
      label: "Economía, Empren. y A. Empresarial",
    },
    {
      id: "2",
      label: "Economía",
    },
    {
      id: "3",
      label: "Filosofía",
    },
    {
      id: "4",
      label: "Latín I",
    },
    {
      id: "5",
      label: "Biología, Geología y C. Ambientales",
    },
    {
      id: "6",
      label: "Inglés",
    },
    {
      id: "7",
      label: "Física y Química",
    },
    {
      id: "8",
      label: "Alemán",
    },
    {
      id: "9",
      label: "Historia M. Contemporáneo",
    },
    {
      id: "10",
      label: "Lengua y Literatura I",
    },
    {
      id: "11",
      label: "Literatura Universal",
    },
    {
      id: "12",
      label: "Francés",
    },
    {
      id: "13",
      label: "Matemáticas Generales",
    },
    {
      id: "14",
      label: "Matemáticas I",
    },
    {
      id: "15",
      label: "Matemáticas C. Sociales I",
    },
    {
      id: "16",
      label: "Tecnología e Ingeniería I",
    },
  ];

  return { data };
}
