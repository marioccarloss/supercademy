import { create } from "zustand";
import { devtools } from "zustand/middleware";

type State = {
  navigation: {
    isOpen: boolean;
  };
};

type Actions = {
  setOpened: (isOpen: boolean) => void;
};

export const useNavigationStore = create(
  devtools<State & Actions>((set) => ({
    navigation: {
      isOpen: true,
    },
    setOpened: (isOpen) =>
      set((state) => ({ navigation: { ...state.navigation, isOpen } })),
  })),
);
