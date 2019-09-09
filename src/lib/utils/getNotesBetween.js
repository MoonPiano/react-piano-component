import { Note } from 'tonal';

export default function getNotesBetween(startNote, endNote) {
  const notes = [];
  let i = 0;
  for (i = startNote; i <= endNote; i += 1) {
    notes.push(Note.fromMidi(i, true));
  }

  return notes;
}
