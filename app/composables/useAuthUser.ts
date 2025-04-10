// composables/useAuthUser.ts
import type { User } from "firebase/auth";

export const useAuthUser = () => useState<User | null>("user");
