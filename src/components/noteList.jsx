import React from "react";
import NoteItem from "./noteItem";
import NoteEmptyList from "./noteEmptyList";
import PropTypes from "prop-types";

const NoteList = ({ notes }) => {
  return notes.length > 0 ? (
    <div className="notes-list">
      {notes.map((noteFilter) => (
        <NoteItem key={noteFilter.id} id={noteFilter.id} {...noteFilter} />
      ))}
    </div>
  ) : (
    <NoteEmptyList />
  );
};

NoteList.propTypes = {
  notes: PropTypes.array.isRequired,
};

export default NoteList;
