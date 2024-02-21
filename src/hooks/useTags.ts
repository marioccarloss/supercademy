export type Tag = {
  id: string;
  name: string;
  principal?: boolean;
};

export default function useTags() {
  const chatTags: Tag[] = [
    {
      id: "1",
      name: "Selectividad",
      principal: true,
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
  ];

  return { chatTags };
}
