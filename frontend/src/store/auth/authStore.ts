import { createStore } from 'zustand';

interface AuthState {
  isLoggedIn: boolean;
  logout: () => void;
}

const userAuthStore = createStore<AuthState>((set) => ({
  isLoggedIn: false,
  logout: () => set({ isLoggedIn: false }),
}));

export default userAuthStore;
