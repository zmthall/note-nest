<template>
  <ClientOnly>
    <div>
      <div v-if="authStore.authResolved">
        <main class="flex h-screen overflow-x-hidden">
          <!-- Left side -->
          <div
            class="grow-0 shrink-0 p-8 w-[320px] bg-zinc-900 text-white overflow-y-auto"
          >
            <LogoIcon class="mb-16" />
            <div>
              <h2 class="mb-4">Today</h2>
              <ul v-if="hasTodayNotes" class="mb-8">
                <li v-for="note in todayNotes" :key="note.id" class="ml-4">
                  <button
                    :class="[
                      'p-4 flex flex-col justify-start items-start w-full',
                      { selected: isSelectedNote(note) },
                    ]"
                    @click="setLocalNote(note)"
                  >
                    <h3 class="font-extrabold capitalize text-lg">
                      {{ previewTitle(note) }}
                    </h3>
                    <div class="flex items-center gap-2">
                      <span class="text-xs font-light text-gray-200">{{
                        getNoteDate(note)
                      }}</span>
                      <span class="text-xs">{{ previewText(note) }}</span>
                    </div>
                  </button>
                </li>
              </ul>
              <div
                v-else
                class="mb-8 text-xs font-light text-gray-200 text-center"
              >
                No Notes
              </div>
            </div>
            <div>
              <h2 class="mb-4">Yesterday</h2>
              <ul v-if="hasYesterdayNotes" class="mb-8">
                <li v-for="note in yesterdayNotes" :key="note.id" class="ml-4">
                  <button
                    :class="[
                      'p-4 flex flex-col justify-start items-start w-full',
                      { selected: isSelectedNote(note) },
                    ]"
                    @click="setLocalNote(note)"
                  >
                    <h3 class="font-extrabold capitalize text-lg">
                      {{ previewTitle(note) }}
                    </h3>
                    <div class="flex items-center gap-2">
                      <span class="text-xs font-light text-gray-200">{{
                        getNoteDate(note)
                      }}</span>
                      <span class="text-xs">{{ previewText(note) }}</span>
                    </div>
                  </button>
                </li>
              </ul>
              <div
                v-else
                class="mb-8 text-xs font-light text-gray-200 text-center"
              >
                No Notes
              </div>
            </div>
            <div>
              <h2 class="mb-4">Prev 30 Days</h2>
              <ul v-if="hasOtherNotes" class="mb-8">
                <li v-for="note in otherNotes" :key="note.id" class="ml-4">
                  <button
                    :class="[
                      'p-4 flex flex-col justify-start items-start w-full',
                      { selected: isSelectedNote(note) },
                    ]"
                    @click="setLocalNote(note)"
                  >
                    <h3 class="font-extrabold capitalize text-lg">
                      {{ previewTitle(note) }}
                    </h3>
                    <div class="flex items-center gap-2">
                      <span class="text-xs font-light text-gray-200">{{
                        getNoteDate(note)
                      }}</span>
                      <span class="text-xs">{{ previewText(note) }}</span>
                    </div>
                  </button>
                </li>
              </ul>
              <div
                v-else
                class="mb-8 text-xs font-light text-gray-200 text-center"
              >
                No Notes
              </div>
            </div>
          </div>
          <!-- /Left side -->
          <!-- Right Side -->
          <div class="col-span-7 bg-zinc-800 w-full relative">
            <div class="flex justify-between w-full absolute top-4 px-4">
              <button
                class="flex items-center gap-2 hover:text-gray-300"
                @click="addNote"
              >
                <Icon name="mingcute:edit-4-line" class="size-6" />
                <span>Create Note</span>
              </button>
              <button @click="removeNote">
                <Icon
                  name="material-symbols:delete-forever"
                  class="size-6 hover:text-gray-300"
                />
              </button>
            </div>

            <div
              v-if="hasNotes"
              class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50%]"
            >
              <form class="flex flex-col gap-2 @submit.prevent">
                <input
                  id="title"
                  v-model="localNote.title"
                  type="text"
                  name="title"
                  class="bg-zinc-800 p-2 p-2 hover:bg-zinc-700 rounded-lg"
                  placeholder="Title"
                  @input="debouncedEdit"
                />
                <textarea
                  id="text"
                  v-model="localNote.text"
                  name="text"
                  class="bg-zinc-800 resize-none p-2 hover:bg-zinc-700 rounded-lg"
                  placeholder="Body"
                  rows="12"
                  @input="debouncedEdit"
                ></textarea>
              </form>
            </div>
            <div
              v-else
              class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50%]"
            >
              <p class="text-center">Create a note to get started</p>
            </div>
            <button class="absolute bottom-4 right-4" @click="logout">
              Logout
            </button>
          </div>
          <!-- /Right Side -->
        </main>
      </div>
      <div v-else class="h-screen flex items-center justify-center text-white">
        Loading...
      </div>
    </div>
  </ClientOnly>
</template>

<script lang="ts" setup>
import { signOut } from "firebase/auth";
import { useAuthStore } from "../../stores/useAuthStore.js";
import { ref as dateabaseRef, set, remove } from "firebase/database";
import { nanoid } from "nanoid";
import { useNoteStore } from "../../stores/noteStore.js";
import { useDebounceFn } from "@vueuse/core";
import type { Note } from "../../types/models.js";

const { $firebase } = useNuxtApp();
const authStore = useAuthStore();
const noteStore = useNoteStore();

definePageMeta({
  layout: "authenticated",
  middleware: ["auth", "notes"],
});

const localNote = ref<Note>({
  id: "",
  created: new Date(),
  title: "",
  text: "",
});

const logout = async () => {
  try {
    await signOut($firebase.auth);
    authStore.logout(); // clear it immediately
    navigateTo({ path: "/login" });
  } catch (err) {
    console.error("Sign-out failed:", err);
  }
};

const addNote = async () => {
  if (!authStore.user) return;
  const noteId = nanoid(10);

  const newNote: Note = {
    id: noteId,
    text: "",
    title: "",
    created: new Date().toISOString(),
    lastEdited: null,
  };

  noteStore.addNote(authStore.user.uid, newNote);

  const noteRef = dateabaseRef(
    $firebase.db,
    `notes/${authStore.user.uid}/${noteId}`,
  );

  localNote.value = newNote;

  await set(noteRef, newNote);
};

const removeNote = async () => {
  if (!authStore.user) return;

  noteStore.removeNote(authStore.user.uid, localNote.value.id);

  const noteRef = dateabaseRef(
    $firebase.db,
    `notes/${authStore.user.uid}/${localNote.value.id}`,
  );

  if (newestNote.value) setLocalNote(newestNote.value);

  await remove(noteRef);

  if (
    todayNotes.value.length === 0 &&
    yesterdayNotes.value.length === 0 &&
    otherNotes.value.length === 0
  )
    localNote.value = {
      id: nanoid(10),
      title: "",
      text: "",
      created: new Date().toISOString(),
      lastEdited: null,
    };
};

const editNote = async () => {
  if (!authStore.user) return;

  const editedNote: Note = {
    ...localNote.value,
    lastEdited: new Date().toDateString(),
  };

  const editedNoteRef = dateabaseRef(
    $firebase.db,
    `notes/${authStore.user.uid}/${editedNote.id}`,
  );

  await set(editedNoteRef, editedNote);
};

const debouncedEdit = useDebounceFn(editNote, 1000);

const getNoteDate = (note: Note) =>
  computed(() => {
    return new Date(note.created).toLocaleDateString("en-US");
  });

const previewText = (note: Note) =>
  note.text.length > 15 ? note.text.slice(0, 15) + "..." : note.text;

const previewTitle = (note: Note) =>
  note.title.length > 15 ? note.title.slice(0, 20) + "..." : note.title;

const currentUserNotes = computed(() => {
  if (authStore.user) return noteStore.notes[authStore.user?.uid] || [];
  else return [];
});

const hasNotes = computed(() => {
  return currentUserNotes.value.length !== 0;
});

const setLocalNote = (note: Note) => {
  if (localNote.value !== note) localNote.value = note;
};

const todayNotes = computed(() => {
  const today = new Date().toDateString();
  return currentUserNotes.value
    .filter((note: Note) => {
      return new Date(note.created).toDateString() === today;
    })
    .sort(
      (a: Note, b: Note) =>
        new Date(b.created).getTime() - new Date(a.created).getTime(),
    );
});

const hasTodayNotes = computed(() => {
  return todayNotes.value.length > 0;
});

const yesterdayNotes = computed(() => {
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  return currentUserNotes.value.filter((note: Note) => {
    return new Date(note.created).toDateString() === yesterday.toDateString();
  });
});

const hasYesterdayNotes = computed(() => {
  return yesterdayNotes.value.length > 0;
});

const otherNotes = computed(() => {
  const today = new Date().toDateString();
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const yesterdayStr = yesterday.toDateString();

  return currentUserNotes.value.filter((note: Note) => {
    const noteDate = new Date(note.created).toDateString();
    return noteDate !== today && noteDate !== yesterdayStr;
  });
});

const hasOtherNotes = computed(() => {
  return otherNotes.value.length > 0;
});

const isSelectedNote = (note: Note) => note.id === localNote.value.id;

const newestNote = computed(() => {
  const notes = currentUserNotes.value;
  if (!notes.length) return null;

  return [...notes].sort(
    (a, b) => new Date(b.created).getTime() - new Date(a.created).getTime(),
  )[0];
});

if (newestNote.value) setLocalNote(newestNote.value);
</script>

<style scoped>
.selected {
  @apply bg-amber-300/60 rounded-lg;
}
</style>
