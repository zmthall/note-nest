import { initializeApp } from "firebase/app";
import {
  browserLocalPersistence,
  getAuth,
  onAuthStateChanged,
  setPersistence,
} from "firebase/auth";
import { getDatabase } from "firebase/database";
import { useAuthStore } from "~~/stores/useAuthStore";

export default defineNuxtPlugin(async () => {
  const config = useRuntimeConfig();

  const firebaseConfig = {
    apiKey: config.public.apiKey,
    authDomain: config.public.authDomain,
    projectId: config.public.projectId,
    storageBucket: config.public.storageBucket,
    messagingSenderId: config.public.messagingSenderId,
    appId: config.public.appId,
    databaseURL: "https://learning-firebase-9dba3-default-rtdb.firebaseio.com/",
  };

  const app = initializeApp(firebaseConfig);

  const auth = getAuth(app);

  const db = getDatabase(app);

  // ✅ Set auth persistence before doing anything else
  await setPersistence(auth, browserLocalPersistence);

  onAuthStateChanged(auth, (user) => {
    const authStore = useAuthStore();
    authStore.setUser(user);
  });

  return {
    provide: {
      firebase: {
        app,
        auth,
        db,
      },
    },
  };
});
