import { create } from "zustand";
import { persist } from "zustand/middleware";

type State = {
  navigation: {
    isOpen: boolean;
  };
};

type Actions = {
  setOpened: (isOpen: boolean) => void;
};

export const useNavigationStore = create(
  persist<State & Actions>(
    (set) => ({
      navigation: {
        isOpen: true,
      },
      setOpened: (isOpen) =>
        set((state) => ({ navigation: { ...state.navigation, isOpen } })),
    }),
    {
      name: "navbar-storage",
    },
  ),
);
