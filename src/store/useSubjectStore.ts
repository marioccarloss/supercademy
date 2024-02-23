import { create } from "zustand";
import { devtools } from "zustand/middleware";

import useSubjects, { Subjects } from "@/hooks/useSubjects";

type Subject = Subjects & {
  selected: boolean;
};

type State = {
  subject: Subject[];
  isValid: boolean;
  isError: boolean;
};

type Actions = {
  addSubject: () => void;
  toggleSelection: (id: string) => void;
};

export const useSubjectStore = create(
  devtools<State & Actions>((set) => {
    const { data } = useSubjects();

    return {
      subject: data.map((subject) => ({ ...subject, selected: false })),
      isValid: false,
      isError: false,
      addSubject: () =>
        set((state) => ({
          subject: state.subject,
          isValid: state.isValid,
        })),
      toggleSelection: (id) =>
        set((state) => {
          const selectedCount = state.subject.filter((s) => s.selected).length;
          if (
            selectedCount >= 10 &&
            !state.subject.find((s) => s.id === id)?.selected
          ) {
            return state;
          }

          const updatedSubjects = state.subject.map((s) =>
            s.id === id ? { ...s, selected: !s.selected } : s,
          );

          const updateCountSelected = updatedSubjects.filter(
            (s) => s.selected,
          ).length;

          return {
            subject: updatedSubjects,
            isValid: updateCountSelected <= 10 && updateCountSelected > 0,
            isError: updateCountSelected === 0 && updateCountSelected > 10,
          };
        }),
    };
  }),
);
