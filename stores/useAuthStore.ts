import { defineStore } from "pinia";
import { ref } from "vue";
import type { User } from "firebase/auth";

export const useAuthStore = defineStore("auth", () => {
  const user = ref<User | null>(null);
  const authResolved = ref(false);

  const setUser = (u: User | null) => {
    user.value = u;
    authResolved.value = true;
  };

  const logout = () => {
    user.value = null;
  };

  return {
    authResolved,
    user,
    setUser,
    logout,
  };
});
