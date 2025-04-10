export interface Notes {
  [uid: string]: Note[];
}

export interface Note {
  id: string;
  created: Date | string;
  text: string;
  title: string;
  lastEdited?: string | Date | null;
}
