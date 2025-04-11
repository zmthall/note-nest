<template>
  <ClientOnly>
    <main class="flex h-svh">
      <!-- Left side -->
      <div
        class="flex flex-col justify-center items-center grow-0 shrink-0 sm:p-8 p-4 w-[400px] bg-zinc-900 text-white max-md:w-full"
      >
        <div
          class="w-full max-sm:min-w-0 sm:max-w-[500px] max-sm:max-w-[400px]"
        >
          <LogoIcon class="mb-8" />
          <p class="mb-1">Sign in to your account</p>
          <p class="text-sm text-slate-300 mb-6">
            Don't have an account?
            <NuxtLink
              to="/register"
              class="text-amber-400 hover:text-amber-200 underline"
            >
              Sign Up</NuxtLink
            >
            here.
          </p>
          <form
            class="flex flex-col gap-4 max-sm:w-full"
            @submit.prevent="loginUser"
          >
            <div class="flex flex-col">
              <label for="email" class="text-xs mb-1">Email Address</label>
              <input
                id="email"
                v-model="email"
                type="email"
                name="email"
                autocomplete="username"
                class="bg-zinc-700 p-1"
              />
            </div>

            <div class="flex flex-col">
              <label for="password" class="text-xs mb-1">Password</label>
              <input
                id="password"
                v-model="password"
                type="password"
                name="password"
                autocomplete="current-password"
                class="bg-zinc-700 p-1"
              />
            </div>
            <button
              type="submit"
              class="flex justify-center items-center gap-2 font-semibold bg-amber-400 hover:bg-amber-300 p-1 rounded-full text-black"
            >
              <div class="flex justify-center items-center gap-1">
                <span>Log in</span><Icon name="ic:baseline-arrow-right-alt" />
              </div>
            </button>
            <div v-if="error" class="text-sm text-red-400">{{ error }}</div>
          </form>
        </div>
      </div>
      <!-- /Left side -->

      <!-- Right Side -->
      <div class="col-span-7 bg-zinc-800 w-full max-md:hidden"></div>
      <!-- /Right Side -->
    </main>
  </ClientOnly>
</template>

<script setup lang="ts">
import { signInWithEmailAndPassword } from "firebase/auth";

const { $firebase } = useNuxtApp();

defineOptions({
  name: "LoginPage",
});

definePageMeta({
  layout: "default",
  middleware: "auth",
});

const email = ref("");
const password = ref("");
const error = ref("");

const loginUser = async () => {
  try {
    if (email.value.length > 0 && password.value.length > 0) {
      await signInWithEmailAndPassword(
        $firebase.auth,
        email.value,
        password.value,
      );
      navigateTo({ path: "/" });
    } else throw new Error("Invalid Credentials");
  } catch (err) {
    if (err instanceof Error) console.error(err.message);
    error.value = "Invalid credentials";
  }
};
</script>
