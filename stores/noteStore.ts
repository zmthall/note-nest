import type { Notes, Note } from "./../types/models";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useNoteStore = defineStore("myNoteStore", () => {
  const notes = ref<Notes>({});

  function setNotes(uid: string, newNotes: Note[]) {
    notes.value[uid] = newNotes;
  }

  function addNote(uid: string, note: Note) {
    if (!notes.value[uid]) {
      notes.value[uid] = [];
    }
    notes.value[uid].push(note);
  }

  function removeNote(uid: string, noteId: string) {
    if (notes.value[uid]) {
      notes.value[uid] = notes.value[uid].filter((n) => n.id !== noteId);
    }
  }

  return {
    notes,
    setNotes,
    addNote,
    removeNote,
  };
});
