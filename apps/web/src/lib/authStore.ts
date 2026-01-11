import { create } from "zustand";

interface AuthState {
  isLogin: boolean;
  setIsLogin: (value: boolean) => void;
}

const useAuthStore = create<AuthState>((set) => ({
  isLogin: true, // default value
  setIsLogin: (value: boolean) => set({ isLogin: value }),
}));

export default useAuthStore;
