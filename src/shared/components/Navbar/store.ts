import { create } from "zustand";

type navbarStore = {
    navbarScrolled: boolean;
    setNavbarScrolled: (scrolled: boolean) => void;
};

export const useNavbarStore = create<navbarStore>(set => ({
    navbarScrolled: false,
    setNavbarScrolled: scrolled => set({ navbarScrolled: scrolled }),
}));
