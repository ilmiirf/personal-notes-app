import React from "react";
import { showFormattedDate } from "../utils";
import PropTypes from "prop-types";

const NoteDetail = ({ id, title, body, createdAt }) => {
  return (
    <div className="note-detail">
      <h2>{title}</h2>
      <p className="note-item__createdAt">{showFormattedDate(createdAt)}</p>
      <p className="note-item__body">{body}</p>
    </div>
  );
};

NoteDetail.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
};

export default NoteDetail;
