import React, { useContext } from "react";
import { Context } from "./Provider";
import NoteItem from "./NoteItem";

const NotesList = () => {
  const { notes, toggleNotes } = useContext(Context);
  return (
    <>
      <ul>
        <h3>Notes list</h3>
        {notes.map((note) => (
          <NoteItem
            key={note.id}
            onClick={() => toggleNotes(note.id)}
            {...note}
          />
        ))}
      </ul>
    </>
  );
};

export default NotesList;
