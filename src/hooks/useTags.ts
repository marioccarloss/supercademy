export type Tag = {
  id: string;
  name: string;
  principal?: boolean;
};

export default function useTags() {
  const chatTags: Tag[] = [
    {
      id: "1",
      name: "Asignatura",
    },
    {
      id: "2",
      name: "Asignatura",
    },
    {
      id: "3",
      name: "Asignatura",
    },
    {
      id: "4",
      name: "Asignatura",
    },
    {
      id: "5",
      name: "Asignatura",
    },
    {
      id: "6",
      name: "Asignatura",
    },
    {
      id: "7",
      name: "Asignatura",
    },
    {
      id: "8",
      name: "Asignatura",
    },
    {
      id: "9",
      name: "Asignatura",
    },
  ];

  return { chatTags };
}
