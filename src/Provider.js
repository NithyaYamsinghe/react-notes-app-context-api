import React, { useState } from "react";

export const Context = React.createContext();

const Provider = (props) => {
  const [notes, setNotes] = useState([
    { id: 1, name: "complete mathematics assignment", completed: false },
    { id: 2, name: "ready for mid semester examination", completed: false },
  ]);

  const toggleNotes = (id) => {
    const modifiedNotes = notes.map((note) => {
      if (id === note.id) {
        return {
          ...note,
          completed: !note.completed,
        };
      }
      return note;
    });
    setNotes(modifiedNotes);
  };

  return (
    <Context.Provider
      value={{
        notes,
        toggleNotes: (id) => toggleNotes(id),
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
export default Provider;
