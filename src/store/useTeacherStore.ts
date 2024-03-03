import { create } from "zustand";
import { devtools } from "zustand/middleware";

import useTeacher, { Teacher } from "@/hooks/useTeacher";

type TeacherType = Teacher & {
  selected: boolean;
};

type State = {
  teacher: TeacherType[];
};

type Actions = {
  addTeacher: () => void;
  toggleSelection: (id: string) => void;
};

export const useTeacherStore = create(
  devtools<State & Actions>((set) => {
    const { data } = useTeacher();

    const initialTeachers = data.map((teacher, index) => ({
      ...teacher,
      selected: index === 0 ? true : false,
    }));

    return {
      teacher: initialTeachers,
      addTeacher: () =>
        set((state) => ({
          ...state, // Asegúrate de copiar el estado existente
        })),
      toggleSelection: (id) =>
        set((state) => {
          const updatedTeacher = state.teacher.map((s) =>
            s.id === id
              ? { ...s, selected: !s.selected }
              : { ...s, selected: false },
          );

          return {
            ...state,
            teacher: updatedTeacher,
          };
        }),
    };
  }),
);
