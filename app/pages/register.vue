<template>
  <ClientOnly>
    <main class="flex h-svh">
      <!-- Left side -->
      <div
        class="flex flex-col justify-center items-center grow-0 shrink-0 sm:p-8 p-4 w-[400px] bg-zinc-800 text-white max-md:w-full"
      >
        <div
          class="w-full max-sm:min-w-0 sm:max-w-[500px] max-sm:max-w-[400px]"
        >
          <LogoIcon class="mb-8" />
          <p class="mb-1">Sign up for a free account</p>
          <p class="text-sm text-slate-300 mb-6">
            Already registered?
            <NuxtLink
              to="/login"
              class="text-amber-400 hover:text-amber-200 underline"
            >
              Log in
            </NuxtLink>
            to your account
          </p>

          <form class="flex flex-col gap-4" @submit.prevent="signUp">
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
                class="bg-zinc-700 p-1"
              />
            </div>

            <button
              type="submit"
              class="flex justify-center items-center gap-2 font-semibold bg-amber-400 hover:bg-amber-300 p-1 rounded-full text-black"
            >
              <div class="flex justify-center items-center gap-1">
                <span>Sign up</span><Icon name="ic:baseline-arrow-right-alt" />
              </div>
              <div v-if="error" class="text-sm text-red-400">{{ error }}</div>
            </button>
          </form>
        </div>
      </div>
      <!-- /Left side -->

      <!-- Right Side -->
      <div class="col-span-7 bg-zinc-900 w-full"></div>
      <!-- /Right Side -->
    </main>
  </ClientOnly>
</template>

<script lang="ts" setup>
import { createUserWithEmailAndPassword } from "firebase/auth";

const { $firebase } = useNuxtApp();

defineOptions({
  name: "RegisterPage",
});

definePageMeta({
  layout: "default",
  middleware: "auth",
});

const email = ref("");
const password = ref("");
const error = ref("");

const signUp = () => {
  try {
    if (email.value.length > 0 && password.value.length > 0) {
      createUserWithEmailAndPassword(
        $firebase.auth,
        email.value,
        password.value,
      );
      email.value = "";
      password.value = "";
      navigateTo({ path: "/login" });
    } else throw new Error("Invalid Credentials");
  } catch (err) {
    if (err instanceof Error) error.value = err.message;
  }
};
</script>

<style></style>
