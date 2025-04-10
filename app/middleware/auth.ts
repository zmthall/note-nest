import { useAuthStore } from "~~/stores/useAuthStore";

export default defineNuxtRouteMiddleware(async (to) => {
  // Skip SSR
  if (import.meta.server) return;

  const authStore = useAuthStore();

  // Wait until Firebase finishes resolving the auth state
  await new Promise<void>((resolve) => {
    if (authStore.authResolved) return resolve();

    const unwatch = watch(
      () => authStore.authResolved,
      (val) => {
        if (val) {
          unwatch();
          resolve();
        }
      },
    );
  });

  // Now that auth is resolved, you can route properly
  if (!authStore.user && to.meta.layout === "authenticated")
    return navigateTo("/login");

  if (authStore.user && to.meta.layout === "default") return navigateTo("/");
});
