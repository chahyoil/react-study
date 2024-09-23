import { create } from 'zustand';

const useNumberBaseStore = create((set) => ({
    numberA: 0,
    numberB: 0,
    increaseNumberA: () => set((state) => ({ numberA: state.numberA + 1 })),
    increaseNumberB: (number) => set((state) => ({ numberB: state.numberB + number })),
}));

export default useNumberBaseStore;