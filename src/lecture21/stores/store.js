// stores/store.js
// create함수 임포트
import { create } from 'zustand';

// 상태객체 리턴하는 useStore훅 생성
const useStore = create((set) => ({
  // 전역상태
  bears: 0,
  // 전역상태 조작 메서드
  increasePopulation: function () {
    // set함수의 인자로 상태객체 조작함수 사용
    set((state) => ({ bears: state.bears + 1 }));
  },
  removeAllBears: function () {
    // set함수 인자로 새로운 상태객체 사용
    set({ bears: 0 });
  },
}));

export default useStore;