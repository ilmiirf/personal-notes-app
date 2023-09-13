import React from "react";
import { addNote } from "../utils/network-data";
import { useNavigate } from "react-router-dom";
import NoteInput from "../components/noteInput";

const InputPage = () => {
  const navigate = useNavigate();

  async function onAddNotetHandler(note) {
    await addNote(note);
    navigate("/");
  }
  return (
    <section>
      <NoteInput addNote={onAddNotetHandler} />
    </section>
  );
};

export default InputPage;
