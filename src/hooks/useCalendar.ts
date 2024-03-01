export type Calendar = {
  id: string;
  date: string;
  title: string;
  hour: string;
  mode: "primary" | "secondary" | "tertiary" | "inverted";
};

export default function useCalendar() {
  const data: Calendar[] = [
    {
      id: "1",
      date: "25 Dic",
      title: "Examen Inglés",
      hour: "10:00 AM",
      mode: "primary",
    },
    {
      id: "2",
      date: "28 Dic",
      title: "Examen Lengua",
      hour: "06:40 PM",
      mode: "primary",
    },
    {
      id: "3",
      date: "28 Dic",
      title: "Examen Lengua",
      hour: "06:40 PM",
      mode: "secondary",
    },
    {
      id: "4",
      date: "28 Dic",
      title: "Examen Lengua",
      hour: "06:40 PM",
      mode: "secondary",
    },
    {
      id: "5",
      date: "28 Dic",
      title: "Examen Lengua",
      hour: "06:40 PM",
      mode: "secondary",
    },
    {
      id: "6",
      date: "28 Dic",
      title: "Examen Lengua",
      hour: "06:40 PM",
      mode: "secondary",
    },
    {
      id: "7",
      date: "28 Dic",
      title: "Examen Lengua",
      hour: "06:40 PM",
      mode: "secondary",
    },
    {
      id: "8",
      date: "28 Dic",
      title: "Examen Lengua",
      hour: "06:40 PM",
      mode: "secondary",
    },
  ];
  return { data };
}
