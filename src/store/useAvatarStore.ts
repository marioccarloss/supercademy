import { create } from "zustand";
import { devtools } from "zustand/middleware";

type State = {
  avatar: {
    isActive: boolean;
  };
};

type Actions = {
  setActive: (isActive: boolean) => void;
};

export const useAvatarStore = create(
  devtools<State & Actions>((set) => ({
    avatar: {
      isActive: true,
    },
    setActive: (isActive) =>
      set((state) => ({ avatar: { ...state.avatar, isActive } })),
  })),
);
