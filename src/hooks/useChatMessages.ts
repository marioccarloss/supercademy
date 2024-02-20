import { useId } from "react";

export type Message = {
  id: string;
  message: string;
  createdAt: string;
  type: "received" | "sent";
};

export default function useChatMessages() {
  const data: Message[] = [
    {
      id: useId(),
      message:
        "Automation: AI can automate repetitive and mundane tasks, saving time and effort for humans. It can handle large volumes of data, perform complex calculations, and execute tasks with precision and consistency. This automation leads to increased productivity and efficiency in various industries.",
      createdAt: "2024-02-13T11:00:00",
      type: "received",
    },
    {
      id: useId(),
      message:
        "Artificial Intelligence (AI) offers numerous advantages and has the potential to revolutionize various aspects of our lives. Here are some key advantages of AI",
      createdAt: "2024-02-14T08:00:00",
      type: "sent",
    },
    {
      id: useId(),
      message: "Lorem ipsum dolor sit amet",
      createdAt: "2024-02-14T08:00:00",
      type: "sent",
    },
    {
      id: useId(),
      message:
        "Automation: AI can automate repetitive and mundane tasks, saving time and effort for humans. It can handle large volumes of data, perform complex calculations, and execute tasks with precision and consistency. This automation leads to increased productivity and efficiency in various industries.",
      createdAt: "2024-02-13T11:00:00",
      type: "received",
    },
    {
      id: useId(),
      message:
        "Artificial Intelligence (AI) offers numerous advantages and has the potential to revolutionize various aspects of our lives. Here are some key advantages of AI",
      createdAt: "2024-02-14T08:00:00",
      type: "sent",
    },
    {
      id: useId(),
      message: "Lorem ipsum dolor sit amet",
      createdAt: "2024-02-14T08:00:00",
      type: "sent",
    },
    {
      id: useId(),
      message:
        "Automation: AI can automate repetitive and mundane tasks, saving time and effort for humans. It can handle large volumes of data, perform complex calculations, and execute tasks with precision and consistency. This automation leads to increased productivity and efficiency in various industries.",
      createdAt: "2024-02-13T11:00:00",
      type: "received",
    },
    {
      id: useId(),
      message:
        "Artificial Intelligence (AI) offers numerous advantages and has the potential to revolutionize various aspects of our lives. Here are some key advantages of AI",
      createdAt: "2024-02-14T08:00:00",
      type: "sent",
    },
    {
      id: useId(),
      message: "Lorem ipsum dolor sit amet",
      createdAt: "2024-02-14T08:00:00",
      type: "sent",
    },
  ];
  return { data };
}
