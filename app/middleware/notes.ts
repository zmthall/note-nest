import { useAuthStore } from "~~/stores/useAuthStore";
import { useNoteStore } from "./../../stores/noteStore";
import { ref as dbRef, get } from "firebase/database";
import type { Note } from "../../types/models";

export default defineNuxtRouteMiddleware(async () => {
  const authStore = useAuthStore();
  const noteStore = useNoteStore();
  const { $firebase } = useNuxtApp();

  if (!authStore.user) return; // If not logged in, skip

  const uid = authStore.user.uid;

  // Only fetch if not already populated
  if (noteStore.notes[uid]) return;

  const notesRef = dbRef($firebase.db, `notes/${uid}`);

  try {
    const snapshot = await get(notesRef);
    if (snapshot.exists()) {
      const data = snapshot.val();
      const notesArray: Note[] = Object.values(data); // Object.values() assumes data is an object keyed by IDs
      noteStore.setNotes(uid, notesArray);
    } else {
      noteStore.setNotes(uid, []);
    }
  } catch (error) {
    console.error("Failed to load notes:", error);
  }
});
