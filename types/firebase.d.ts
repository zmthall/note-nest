import type { FirebaseApp } from "firebase/app";
import type { Auth } from "firebase/auth";
import type { Database } from "firebase/database";

declare module "#app" {
  interface NuxtApp {
    $firebase: {
      app: FirebaseApp;
      auth: Auth;
      db: Database;
    };
  }
}

declare module "vue" {
  interface ComponentCustomProperties {
    $firebase: {
      app: FirebaseApp;
      auth: Auth;
      db: Database;
    };
  }
}
