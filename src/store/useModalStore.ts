import { create } from "zustand";
import { devtools } from "zustand/middleware";

type Modal = {
  isOpen: boolean;
};

type State = {
  modals: Record<string, Modal>;
};

type Actions = {
  setModalOpen: (modalName: string, isOpen: boolean) => void;
};

export const useModalStore = create(
  devtools<State & Actions>((set) => ({
    modals: {},
    setModalOpen: (modalName, isOpen) =>
      set((state) => ({
        modals: {
          ...state.modals,
          [modalName]: { isOpen },
        },
      })),
  })),
);
