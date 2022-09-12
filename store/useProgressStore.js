import create from "zustand"

export const useProgressStore = create((set) => ({
    isAnimating: false,
    setIsAnimating: (value) => set(() => ({isAnimating: value})),
}));