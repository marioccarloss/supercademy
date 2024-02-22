import { StaticImageData } from "next/image";
import { useId } from "react";

import teacher1 from "@/assets/images/teacher.jpg";
import teacher10 from "@/assets/images/teacher10.jpg";
import teacher2 from "@/assets/images/teacher2.jpg";
import teacher3 from "@/assets/images/teacher3.jpg";
import teacher4 from "@/assets/images/teacher4.jpg";
import {
  default as teacher12,
  default as teacher5,
} from "@/assets/images/teacher5.jpg";
import {
  default as teacher11,
  default as teacher6,
} from "@/assets/images/teacher6.jpg";
import teacher7 from "@/assets/images/teacher7.jpg";
import teacher8 from "@/assets/images/teacher8.jpg";
import teacher9 from "@/assets/images/teacher9.jpg";

export type Teacher = {
  id: string;
  name: string;
  image: StaticImageData;
  balance: string;
  lock: boolean;
  sufficientBalance: boolean;
};

export default function useTeacher() {
  const data = [
    {
      id: useId(),
      name: "teacher 1",
      image: teacher1,
      lock: false,
      sufficientBalance: true,
      balance: "100.000",
    },
    {
      id: useId(),
      name: "teacher 2",
      image: teacher2,
      lock: false,
      sufficientBalance: false,
      balance: "20.000",
    },
    {
      id: useId(),
      name: "teacher 3",
      image: teacher3,
      lock: false,
      sufficientBalance: false,
      balance: "10.000",
    },
    {
      id: useId(),
      name: "teacher 4",
      image: teacher4,
      lock: false,
      sufficientBalance: false,
      balance: "10.000",
    },
    {
      id: useId(),
      name: "teacher 5",
      image: teacher5,
      lock: false,
      sufficientBalance: false,
      balance: "10.000",
    },
    {
      id: useId(),
      name: "teacher 6",
      image: teacher6,
      lock: false,
      sufficientBalance: false,
      balance: "10.000",
    },
    {
      id: useId(),
      name: "teacher 7",
      image: teacher7,
      lock: false,
      sufficientBalance: false,
      balance: "10.000",
    },
    {
      id: useId(),
      name: "teacher 8",
      image: teacher8,
      lock: false,
      sufficientBalance: false,
      balance: "10.000",
    },
    {
      id: useId(),
      name: "teacher 9",
      image: teacher9,
      lock: false,
      sufficientBalance: false,
      balance: "10.000",
    },
    {
      id: useId(),
      name: "teacher 10",
      image: teacher10,
      lock: false,
      sufficientBalance: false,
      balance: "10.000",
    },
    {
      id: useId(),
      name: "teacher 11",
      image: teacher11,
      lock: true,
      balance: "10.000",
      sufficientBalance: false,
    },
    {
      id: useId(),
      name: "teacher 12",
      image: teacher12,
      lock: true,
      balance: "10.000",
      sufficientBalance: false,
    },
    {
      id: useId(),
      name: "teacher 12",
      image: teacher12,
      lock: true,
      balance: "10.000",
      sufficientBalance: false,
    },
    {
      id: useId(),
      name: "teacher 12",
      image: teacher12,
      lock: true,
      balance: "10.000",
      sufficientBalance: false,
    },
    {
      id: useId(),
      name: "teacher 12",
      image: teacher12,
      lock: true,
      balance: "10.000",
      sufficientBalance: false,
    },
    {
      id: useId(),
      name: "teacher 12",
      image: teacher12,
      lock: true,
      balance: "10.000",
      sufficientBalance: false,
    },
    {
      id: useId(),
      name: "teacher 12",
      image: teacher12,
      lock: true,
      balance: "10.000",
      sufficientBalance: false,
    },
    {
      id: useId(),
      name: "teacher 12",
      image: teacher12,
      lock: true,
      balance: "10.000",
      sufficientBalance: false,
    },
  ];

  return { data };
}
