import { create } from "zustand";
import { devtools } from "zustand/middleware";

type State = {
  modal: {
    isOpen: boolean;
  };
};

type Actions = {
  setOpened: (isOpen: boolean) => void;
};

export const useModalStore = create(
  devtools<State & Actions>((set) => ({
    modal: {
      isOpen: false,
    },
    setOpened: (isOpen) =>
      set((state) => ({ modal: { ...state.modal, isOpen } })),
  })),
);
